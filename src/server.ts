import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { resolveLegacyPath } from "./lib/legacy-redirects";


type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// O navegador cancelar a requisição no meio do SSR (reload, navegação, HMR)
// chega aqui como "aborted"/ECONNRESET. Não é erro da aplicação: não deve ser
// logado como falha nem virar página de erro.
function isClientAbort(request: Request, error?: unknown): boolean {
  if (request.signal?.aborted) return true;
  for (let err: unknown = error, depth = 0; err && depth < 5; depth++) {
    const e = err as { name?: string; code?: string; message?: string; cause?: unknown };
    if (e.name === "AbortError") return true;
    if (e.code === "ECONNRESET" || e.code === "ECONNABORTED") return true;
    if (typeof e.message === "string" && /\baborted\b/i.test(e.message)) return true;
    err = e.cause;
  }
  return false;
}

const CLIENT_CLOSED_REQUEST = 499;

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(
  request: Request,
  response: Response,
): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  const captured = consumeLastCapturedError();
  if (isClientAbort(request, captured)) {
    return new Response(null, { status: CLIENT_CLOSED_REQUEST });
  }

  console.error(captured ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}


function redirectHttps(request: Request): Response | undefined {
  const url = new URL(request.url);
  // Não redirecionar em ambiente local (dev/preview) — evita loop de SSL.
  if (url.hostname === "localhost" || url.hostname === "127.0.0.1" || url.hostname === "[::1]") {
    return undefined;
  }
  const proto = request.headers.get("x-forwarded-proto") ?? url.protocol.slice(0, -1);
  if (proto === "http") {
    url.protocol = "https:";
    return new Response(null, {
      status: 301,
      headers: {
        location: url.toString(),
        "cache-control": "max-age=3600",
      },
    });
  }
  return undefined;
}

// Host canônico final: COM www (www.alefotografo.com.br).
// Mantém fallback em código para apex → www caso a borda não aplique o primário.
const REDIRECT_APEX_TO_WWW = true;

function redirectCanonicalHost(request: Request): Response | undefined {
  if (!REDIRECT_APEX_TO_WWW) return undefined;
  const url = new URL(request.url);
  if (url.hostname !== "alefotografo.com.br") return undefined;

  url.hostname = "www.alefotografo.com.br";
  url.protocol = "https:";
  return new Response(null, {
    status: 301,
    headers: {
      location: url.toString(),
      "cache-control": "public, max-age=86400",
    },
  });
}

function redirectLegacy(request: Request): Response | undefined {
  const url = new URL(request.url);
  const target = resolveLegacyPath(url.pathname);
  if (!target || target === url.pathname) return undefined;
  url.pathname = target;
  return new Response(null, {
    status: 301,
    headers: {
      location: url.toString(),
      "cache-control": "public, max-age=86400",
    },
  });
}

// Páginas públicas montadas na hora (detalhes de galeria/blog/vídeo) ficavam com
// no-cache, então cada visita pagava o SSR inteiro (TTFB ~1,2s no campo). Com
// s-maxage + stale-while-revalidate a borda entrega a cópia guardada na hora e
// revalida em segundo plano. Nunca aplicar em área logada nem em APIs.
const HTML_EDGE_CACHE = "public, max-age=0, s-maxage=86400, stale-while-revalidate=86400";
const NO_EDGE_CACHE = /^\/(auth|admin|api)(\/|$)/;

function withEdgeCache(request: Request, response: Response): Response {
  if (response.status !== 200) return response;
  if (!(response.headers.get("content-type") ?? "").includes("text/html")) return response;
  const { pathname } = new URL(request.url);
  if (NO_EDGE_CACHE.test(pathname)) return response;
  if (request.method !== "GET" && request.method !== "HEAD") return response;

  const headers = new Headers(response.headers);
  headers.set("cache-control", HTML_EDGE_CACHE);
  headers.set("vary", "Accept-Encoding");
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

// Fontes e imagens da pasta pública têm nome estável e conteúdo imutável, mas a
// borda não estava aplicando as regras do _headers: sem cache-control, cada
// visita rebaixa o LCP. Aplicado aqui, no mesmo caminho de resposta.
const IMMUTABLE_ASSETS = /^\/(fonts|img|assets)\//;

function withStaticCache(request: Request, response: Response): Response {
  if (response.status !== 200) return response;
  if (request.method !== "GET" && request.method !== "HEAD") return response;
  const { pathname } = new URL(request.url);
  if (!IMMUTABLE_ASSETS.test(pathname)) return response;
  if (response.headers.get("cache-control")) return response;

  const headers = new Headers(response.headers);
  headers.set("cache-control", "public, max-age=31536000, immutable");
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}


export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const hostRedirect = redirectCanonicalHost(request);
    if (hostRedirect) return hostRedirect;

    const httpsRedirect = redirectHttps(request);
    if (httpsRedirect) return httpsRedirect;

    const legacyRedirect = redirectLegacy(request);
    if (legacyRedirect) return legacyRedirect;


    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return withStaticCache(
        request,
        withEdgeCache(request, await normalizeCatastrophicSsrResponse(request, response)),
      );

    } catch (error) {

      if (isClientAbort(request, error)) {
        return new Response(null, { status: CLIENT_CLOSED_REQUEST });
      }
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }

  },
};
