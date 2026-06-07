import { site } from "@/data/catalog";
import ogAsset from "@/assets/og-alefotografo.jpg.asset.json";

const SITE_ORIGIN = "https://alefotografos.com.br";
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}${ogAsset.url}`;
export const DEFAULT_OG_IMAGE_WIDTH = 1200;
export const DEFAULT_OG_IMAGE_HEIGHT = 630;

function toAbsolute(url: string) {
  if (/^https?:\/\//i.test(url)) return url;
  return `${SITE_ORIGIN}${url.startsWith("/") ? "" : "/"}${url}`;
}

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
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;
  const absoluteUrl = toAbsolute(path);
  const absoluteImage = toAbsolute(image ?? DEFAULT_OG_IMAGE);
  const meta: Array<{ title?: string; name?: string; property?: string; content?: string }> = [
    { title: fullTitle },
    { name: "description", content: description },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: absoluteUrl },
    { property: "og:site_name", content: site.name },
    { property: "og:locale", content: "pt_BR" },
    { property: "og:image", content: absoluteImage },
    { property: "og:image:secure_url", content: absoluteImage },
    { property: "og:image:type", content: "image/png" },
    { property: "og:image:alt", content: fullTitle },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: absoluteImage },
    { name: "twitter:image:alt", content: fullTitle },
  ];
  return meta;
}
