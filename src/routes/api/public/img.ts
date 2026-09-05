import { createFileRoute } from "@tanstack/react-router";

/**
 * Proxy de imagem no próprio domínio.
 *
 * Motivo: o acervo vive num CDN legado (Rackspace) que só entrega o original
 * (200–500 KB por foto). A conversão continua sendo feita pelo images.weserv.nl,
 * mas passa a ser servida daqui — mesma origem, mesma conexão HTTP/2 da página,
 * sem handshake TLS extra e com cache permanente na borda.
 *
 * Segurança: rota pública. Sem a allowlist de host e de largura, isto seria um
 * proxy aberto (SSRF + abuso de banda). Só o CDN do acervo é aceito.
 */

const ALLOWED_HOSTS = [".rackcdn.com"];
const ALLOWED_WIDTHS = new Set([
  200, 300, 320, 400, 480, 640, 720, 768, 800, 900, 1024, 1200, 1440, 1600, 1920,
]);
const ALLOWED_QUALITY = new Set([50, 58, 66, 74, 82]);
const UPSTREAM = "https://images.weserv.nl/";

function badRequest(message: string) {
  return new Response(message, {
    status: 400,
    headers: { "Cache-Control": "public, max-age=300" },
  });
}

export const Route = createFileRoute("/api/public/img")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const rawSrc = url.searchParams.get("src");
        if (!rawSrc) return badRequest("Missing src");

        let src: URL;
        try {
          src = new URL(rawSrc);
        } catch {
          return badRequest("Bad src");
        }
        if (src.protocol !== "https:") return badRequest("Forbidden protocol");
        if (!ALLOWED_HOSTS.some((h) => src.hostname.endsWith(h))) {
          return badRequest("Forbidden host");
        }

        const wParam = Number.parseInt(url.searchParams.get("w") ?? "", 10);
        const width = ALLOWED_WIDTHS.has(wParam) ? wParam : undefined;
        const qParam = Number.parseInt(url.searchParams.get("q") ?? "", 10);
        const quality = ALLOWED_QUALITY.has(qParam) ? qParam : 66;

        // Cache na borda: a chave é a própria URL normalizada desta rota.
        // Todo o caminho abaixo é à prova de falha: qualquer erro cai no
        // fallback (original do CDN) em vez de devolver 500 e quebrar a foto.
        const cacheKey = new Request(
          `${url.origin}${url.pathname}?src=${encodeURIComponent(src.toString())}&w=${width ?? 0}&q=${quality}`,
          { method: "GET" },
        );

        let cache: Cache | undefined;
        try {
          cache = (globalThis as { caches?: { default?: Cache } }).caches?.default;
          if (cache) {
            const hit = await cache.match(cacheKey);
            if (hit) return hit;
          }
        } catch {
          cache = undefined;
        }

        const params = new URLSearchParams({
          url: src.toString(),
          q: String(quality),
          output: "webp",
        });
        if (width) {
          params.set("w", String(width));
          params.set("dpr", "1");
          params.set("we", "1");
        }

        const serveOriginal = async () => {
          try {
            const original = await fetch(src.toString(), {
              signal: AbortSignal.timeout(15000),
            });
            if (!original.ok || !original.body) {
              return new Response("Upstream error", {
                status: 502,
                headers: { "Cache-Control": "public, max-age=60" },
              });
            }
            return new Response(original.body, {
              status: 200,
              headers: {
                "Content-Type": original.headers.get("Content-Type") ?? "image/jpeg",
                "Cache-Control": "public, max-age=3600",
                "X-Content-Type-Options": "nosniff",
              },
            });
          } catch {
            // Último recurso: manda o navegador buscar direto no acervo.
            return new Response(null, {
              status: 302,
              headers: {
                Location: src.toString(),
                "Cache-Control": "public, max-age=60",
              },
            });
          }
        };

        let body: ArrayBuffer;
        let contentType = "image/webp";
        try {
          const upstream = await fetch(`${UPSTREAM}?${params.toString()}`, {
            headers: { Accept: "image/webp,image/*" },
            signal: AbortSignal.timeout(12000),
          });
          if (!upstream.ok || !upstream.body) return await serveOriginal();
          body = await upstream.arrayBuffer();
          contentType = upstream.headers.get("Content-Type") ?? "image/webp";
          if (body.byteLength === 0) return await serveOriginal();
        } catch {
          return await serveOriginal();
        }

        const response = new Response(body, {
          status: 200,
          headers: {
            "Content-Type": contentType,
            "Cache-Control": "public, max-age=31536000, immutable",
            "X-Content-Type-Options": "nosniff",
          },
        });

        if (cache) {
          try {
            await cache.put(cacheKey, response.clone());
          } catch {
            // cache indisponível: segue entregando a imagem
          }
        }
        return response;

      },
    },
  },
});
