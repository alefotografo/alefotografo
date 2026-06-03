import type { Video } from "@/data/catalog";

// Capa otimizada para grid (leve) e detalhe (alta).
// - YouTube: mqdefault (320x180, ~10KB) para listas; hqdefault (480x360) para detalhe.
// - Vimeo: vumbnail.com (oEmbed cacheado).
export function videoThumb(
  v: Pick<Video, "youtube" | "vimeo">,
  size: "sm" | "lg" = "sm",
): string | null {
  if (v.youtube) {
    const quality = size === "lg" ? "hqdefault" : "mqdefault";
    return `https://i.ytimg.com/vi/${v.youtube}/${quality}.jpg`;
  }
  if (v.vimeo) return `https://vumbnail.com/${v.vimeo}${size === "sm" ? "_medium" : ""}.jpg`;
  return null;
}

// Fallback chain caso a variante falhe.
export function ytFallback(src: string): string | null {
  if (src.endsWith("/maxresdefault.jpg")) return src.replace("/maxresdefault.jpg", "/hqdefault.jpg");
  if (src.endsWith("/hqdefault.jpg")) return src.replace("/hqdefault.jpg", "/mqdefault.jpg");
  if (src.endsWith("/mqdefault.jpg")) return src.replace("/mqdefault.jpg", "/default.jpg");
  return null;
}
