import { createFileRoute } from "@tanstack/react-router";

/**
 * Proxy de imagem no próprio domínio.
 *
 * O acervo migra de um CDN legado (Rackspace) para o Supabase Storage
 * (bucket público `acervo`, mesmos caminhos de objeto). A ordem de busca é:
 *
 *   1. Supabase Storage → weserv (conversão WebP redimensionada)
 *   2. Rackspace → weserv (mesma conversão; fallback automático enquanto o
 *      objeto não existir no Supabase — e para sempre como rede de segurança)
 *   3. JPEG original do Rackspace (se weserv falhar)
 *   4. 302 para o original (último recurso)
 *
 * A conversão continua sendo feita pelo images.weserv.nl, mas servida daqui —
 * mesma origem, mesma conexão HTTP/2 da página, sem handshake TLS extra e
 * com cache permanente na borda. As URLs públicas `/api/public/img/` não
 * mudam com a migração.
 *
 * Segurança: rota pública. Sem a allowlist de host e de largura, isto seria um
 * proxy aberto (SSRF + abuso de banda). Só o CDN do acervo é aceito como src.
 */

const ALLOWED_HOSTS = [".rackcdn.com"];
const ALLOWED_WIDTHS = new Set([
  200, 300, 320, 400, 480, 640, 720, 768, 800, 900, 1024, 1200, 1440, 1600, 1920,
]);
const ALLOWED_QUALITY = new Set([50, 58, 66, 74, 82]);
const UPSTREAM = "https://images.weserv.nl/";

// Migração Rackspace → Supabase Storage: enquanto o objeto correspondente
// não existir no bucket, o proxy cai no fluxo legado automaticamente. Sem
// ACERVO_SUPABASE_URL/SUPABASE_URL configurada, o comportamento é exatamente
// o de antes.
// O acervo pode viver em projeto Supabase DIFERENTE do banco do site
// (auth/CRM) — por isso a variável dedicada.
const ACERVO_BUCKET = "acervo";

function supabasePublicUrl(src: URL): string | undefined {
  const base = (process.env.ACERVO_SUPABASE_URL ?? process.env.SUPABASE_URL ?? "").replace(
    /\/+$/,
    "",
  );
  if (!base) return undefined;
  return `${base}/storage/v1/object/public/${ACERVO_BUCKET}${src.pathname}`;
}

/** Busca a imagem convertida (WebP via weserv) a partir de uma origem. */
async function fetchWebp(
  source: string,
  width: number | undefined,
  quality: number,
): Promise<{ body: ArrayBuffer; contentType: string } | null> {
  const params = new URLSearchParams({
    url: source,
    q: String(quality),
    output: "webp",
  });
  if (width) {
    params.set("w", String(width));
    params.set("dpr", "1");
    params.set("we", "1");
  }
  try {
    const upstream = await fetch(`${UPSTREAM}?${params.toString()}`, {
      headers: { Accept: "image/webp,image/*" },
      signal: AbortSignal.timeout(12000),
    });
    if (!upstream.ok || !upstream.body) return null;
    const body = await upstream.arrayBuffer();
    if (body.byteLength === 0) return null;
    return {
      body,
      contentType: upstream.headers.get("Content-Type") ?? "image/webp",
    };
  } catch {
    return null;
  }
}

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

        // Origem 1 (migração): mesmo caminho de objeto no Supabase Storage.
        // Enquanto o objeto não existir, weserv devolve erro e caímos na
        // origem 2 sem custo extra relevante.
        let converted: { body: ArrayBuffer; contentType: string } | null = null;
        const sbUrl = supabasePublicUrl(src);
        if (sbUrl) converted = await fetchWebp(sbUrl, width, quality);

        // Origem 2 (legado): CDN Rackspace, como antes da migração.
        if (!converted) {
          converted = await fetchWebp(src.toString(), width, quality);
        }

        if (!converted) return await serveOriginal();

        const response = new Response(converted.body, {
          status: 200,
          headers: {
            "Content-Type": converted.contentType,
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
