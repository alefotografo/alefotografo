// Otimização de imagens remotas (CDN legado) via proxy de imagens sem chave.
// Reduz de ~500KB para ~100KB por foto, servindo WebP redimensionado.

const PROXY = "https://images.weserv.nl/";
const REMOTE_HOSTS = [".rackcdn.com"];

export const IMG_WIDTHS = [480, 768, 1024, 1440, 1920];

/** Larguras usadas em grids/galerias (cada foto ocupa no máximo ~1/3 da tela). */
export const GRID_WIDTHS = [360, 480, 768, 1024];

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
export function imgUrl(src: string, width?: number, quality = 74): string {
  if (!src || !isRemote(src)) return src;
  const params = new URLSearchParams({ url: src, q: String(quality), output: "webp" });
  if (width) {
    params.set("w", String(width));
    params.set("dpr", "1");
    params.set("we", "1");
  }
  return `${PROXY}?${params.toString()}`;
}

/** srcset responsivo; vazio quando a imagem não é remota (assets locais já são otimizados no build). */
export function imgSrcSet(src: string, widths: number[] = IMG_WIDTHS): string | undefined {
  if (!src || !isRemote(src)) return undefined;
  return widths.map((w) => `${imgUrl(src, w)} ${w}w`).join(", ");
}
