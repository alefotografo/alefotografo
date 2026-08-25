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

// Host canônico: SEM www (alefotografo.com.br), que é o Primary da hospedagem.
// O `www` está conectado e ativo, e a borda já o redireciona para o apex (302).
// Este redirect é a segunda camada: se tráfego no www chegar até a aplicação,
// sai como 301 permanente para o apex, consolidando a autoridade em um só host.
const REDIRECT_WWW_TO_APEX = true;



function redirectCanonicalHost(request: Request): Response | undefined {
  if (!REDIRECT_WWW_TO_APEX) return undefined;
  const url = new URL(request.url);
  if (!url.hostname.startsWith("www.")) return undefined;

  url.hostname = url.hostname.slice(4);
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
      return await normalizeCatastrophicSsrResponse(request, response);
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
