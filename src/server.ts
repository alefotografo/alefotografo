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

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
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

// Host canônico sem www: evita conteúdo duplicado entre www e raiz.
// TEMPORÁRIO: enquanto o domínio raiz estiver desconectado (drifted / HTTP 421),
// o www precisa servir o site em vez de redirecionar para um endereço fora do ar.
// Voltar para `true` assim que o apex ficar Active.
const REDIRECT_WWW_TO_APEX = false;

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
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
