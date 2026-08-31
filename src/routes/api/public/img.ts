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
const ALLOWED_WIDTHS = new Set([320, 400, 480, 640, 720, 768, 900, 1024, 1440]);
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
        const cacheKey = new Request(
          `${url.origin}${url.pathname}?src=${encodeURIComponent(src.toString())}&w=${width ?? 0}&q=${quality}`,
          { method: "GET" },
        );
        const cache = (globalThis as { caches?: { default?: Cache } }).caches?.default;
        if (cache) {
          const hit = await cache.match(cacheKey);
          if (hit) return hit;
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

        const upstream = await fetch(`${UPSTREAM}?${params.toString()}`, {
          headers: { Accept: "image/webp,image/*" },
        });

        if (!upstream.ok || !upstream.body) {
          // Fallback: entrega o original do CDN em vez de quebrar a imagem.
          const original = await fetch(src.toString());
          if (!original.ok) return new Response("Upstream error", { status: 502 });
          return new Response(original.body, {
            status: 200,
            headers: {
              "Content-Type": original.headers.get("Content-Type") ?? "image/jpeg",
              "Cache-Control": "public, max-age=3600",
            },
          });
        }

        const body = await upstream.arrayBuffer();
        const response = new Response(body, {
          status: 200,
          headers: {
            "Content-Type": upstream.headers.get("Content-Type") ?? "image/webp",
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
