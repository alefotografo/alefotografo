import type { Video } from "@/data/catalog";

// Constrói uma URL de capa estável para vídeos do YouTube ou Vimeo.
// - YouTube: hqdefault SEMPRE existe (480x360). Mais confiável que maxresdefault.
// - Vimeo: usamos o serviço público vumbnail.com (oEmbed cacheado).
export function videoThumb(v: Pick<Video, "youtube" | "vimeo">): string | null {
  if (v.youtube) return `https://i.ytimg.com/vi/${v.youtube}/hqdefault.jpg`;
  if (v.vimeo) return `https://vumbnail.com/${v.vimeo}.jpg`;
  return null;
}

// Fallback chain: se hqdefault falhar (raríssimo), tenta mqdefault; depois default.jpg
export function ytFallback(src: string): string | null {
  if (src.endsWith("/hqdefault.jpg")) return src.replace("/hqdefault.jpg", "/mqdefault.jpg");
  if (src.endsWith("/mqdefault.jpg")) return src.replace("/mqdefault.jpg", "/default.jpg");
  return null;
}
