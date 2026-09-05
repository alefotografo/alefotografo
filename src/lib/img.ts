// Otimização de imagens remotas (CDN legado) servida pelo próprio domínio.
// A rota /api/public/img converte para WebP redimensionado na borda, com cache
// permanente — nenhum host de terceiro aparece no HTML entregue ao navegador.
// Reduz de ~300–500 KB para ~20–60 KB por foto, em WebP redimensionado.

const ENDPOINT = "/api/public/img";
const REMOTE_HOSTS = [".rackcdn.com"];


/** Larguras para imagens grandes (hero, capa de página). */
export const IMG_WIDTHS = [480, 720, 1024, 1440];

/** Larguras usadas em grids/galerias (cada foto ocupa no máximo ~1/2–1/3 da tela). */
export const GRID_WIDTHS = [400, 640, 900];

/** Qualidade padrão do WebP — imperceptível em fotografia, ~25% menos bytes que 74. */
const DEFAULT_QUALITY = 66;

function isRemote(src: string) {
  if (!/^https?:\/\//i.test(src)) return false;
  try {
    const host = new URL(src).hostname;
    return REMOTE_HOSTS.some((h) => host.endsWith(h));
  } catch {
    return false;
  }
}

/** URL otimizada de uma imagem para uma largura alvo. */
export function imgUrl(src: string, width?: number, quality = DEFAULT_QUALITY): string {
  if (!src || !isRemote(src)) return src;
  const params = new URLSearchParams({
    url: src,
    q: String(quality),
    output: "webp",
  });
  if (width) params.set("w", String(width));
  return `${ENDPOINT}?${params.toString()}`;
}

/**
 * srcset responsivo; vazio quando a imagem não é remota
 * (assets locais já são otimizados no build).
 *
 * `naturalWidth` evita variantes maiores que o arquivo original — elas voltariam
 * do proxy com bytes idênticos à maior largura útil, poluindo o cache.
 */
export function imgSrcSet(
  src: string,
  widths: number[] = IMG_WIDTHS,
  naturalWidth?: number,
): string | undefined {
  if (!src || !isRemote(src)) return undefined;
  let list = widths;
  if (naturalWidth) {
    const useful = widths.filter((w) => w <= naturalWidth);
    list = useful.length ? useful : [Math.min(...widths)];
  }
  return list.map((w) => `${imgUrl(src, w)} ${w}w`).join(", ");
}
