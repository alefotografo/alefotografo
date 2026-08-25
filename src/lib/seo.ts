import { site } from "@/data/catalog";
import ogAsset from "@/assets/og-alefotografo-camera.jpg.asset.json";

export const SITE_ORIGIN = "https://www.alefotografo.com.br";
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}${ogAsset.url}`;
export const DEFAULT_OG_IMAGE_WIDTH = 1200;
export const DEFAULT_OG_IMAGE_HEIGHT = 630;

function toAbsolute(url: string) {
  if (/^https?:\/\//i.test(url)) return url;
  return `${SITE_ORIGIN}${url.startsWith("/") ? "" : "/"}${url}`;
}

/** Corta no limite de caracteres respeitando a última palavra inteira. */
export function clampText(text: string, max: number) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[\s.,;:–—-]+$/, "")}…`;
}

export const TITLE_MAX = 60;
export const DESCRIPTION_MAX = 160;

export function buildMeta({
  title,
  description,
  path,
  image,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}) {
  const baseTitle = clampText(title, TITLE_MAX);
  const withBrand = `${baseTitle} | ${site.name}`;
  const fullTitle =
    baseTitle.includes(site.name) || withBrand.length > TITLE_MAX ? baseTitle : withBrand;
  const clampedDescription = clampText(description, DESCRIPTION_MAX);
  const absoluteUrl = toAbsolute(path);
  const absoluteImage = toAbsolute(image ?? DEFAULT_OG_IMAGE);
  const meta: Array<{ title?: string; name?: string; property?: string; content?: string }> = [
    { title: fullTitle },
    { name: "description", content: clampedDescription },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: clampedDescription },
    { property: "og:type", content: type },
    { property: "og:url", content: absoluteUrl },
    { property: "og:site_name", content: site.name },
    { property: "og:locale", content: "pt_BR" },
    { property: "og:image", content: absoluteImage },
    { property: "og:image:secure_url", content: absoluteImage },
    { property: "og:image:type", content: "image/jpeg" },
    { property: "og:image:width", content: String(DEFAULT_OG_IMAGE_WIDTH) },
    { property: "og:image:height", content: String(DEFAULT_OG_IMAGE_HEIGHT) },
    { property: "og:image:alt", content: fullTitle },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: clampedDescription },
    { name: "twitter:image", content: absoluteImage },
    { name: "twitter:image:alt", content: fullTitle },
  ];
  return meta;
}
