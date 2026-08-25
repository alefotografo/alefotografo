import { SITE_ORIGIN } from "@/lib/seo";

/**
 * URLs acompanhadas semanalmente no Search Console.
 * As duas primeiras são as que carregavam histórico antigo de 404 depois da migração.
 */
export const MONITORED_PATHS = [
  "/videos",
  "/fotos-corporativas",
  "/",
  "/fotografo-corporativo",
  "/foto-profissional",
  "/eventos-corporativos",
  "/fotografia-executiva",
  "/depoimentos",
  "/blog",
  "/contato",
] as const;

export const MONITORED_URLS = MONITORED_PATHS.map(
  (p) => `${SITE_ORIGIN}${p === "/" ? "/" : p}`,
);

export const MONITORED_SITEMAPS = [
  `${SITE_ORIGIN}/sitemap-index.xml`,
  `${SITE_ORIGIN}/sitemap.xml`,
  `${SITE_ORIGIN}/sitemap-videos.xml`,
];
