import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { categories, videos, posts } from "@/data/catalog";
import { bairros } from "@/data/bairros";
import { REDIRECTED_CATEGORY_SLUGS } from "@/lib/legacy-redirects";

// Base URL do site publicado. Atualize se mudar o domínio final.
const BASE_URL = "https://alefotografo.com.br";

const MONTHS_PT: Record<string, string> = {
  janeiro: "01", fevereiro: "02", março: "03", marco: "03", abril: "04",
  maio: "05", junho: "06", julho: "07", agosto: "08", setembro: "09",
  outubro: "10", novembro: "11", dezembro: "12",
};

function toISODate(input?: string): string | undefined {
  if (!input) return undefined;
  const m = input.toLowerCase().match(/(\d{1,2})\s+de\s+([a-zç]+)\s+de\s+(\d{4})/);
  if (!m) return /^\d{4}-\d{2}-\d{2}/.test(input) ? input.slice(0, 10) : undefined;
  const month = MONTHS_PT[m[2]];
  if (!month) return undefined;
  return `${m[3]}-${month}-${m[1].padStart(2, "0")}`;
}

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "daily" | "weekly" | "monthly" | "yearly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        // Data da última atualização significativa das páginas core (schema, títulos, speakable).
        const CORE_LASTMOD = "2026-10-13";
        const CASES_LASTMOD = "2026-10-13";

        const entries: SitemapEntry[] = [
          { path: "/", lastmod: CORE_LASTMOD, changefreq: "weekly", priority: "1.0" },
          { path: "/servicos/", lastmod: CORE_LASTMOD, changefreq: "weekly", priority: "0.9" },
          { path: "/fotografo-corporativo/", lastmod: CORE_LASTMOD, changefreq: "weekly", priority: "0.9" },
          { path: "/fotos-corporativas/", lastmod: CORE_LASTMOD, changefreq: "weekly", priority: "0.9" },
          { path: "/foto-profissional/", lastmod: CORE_LASTMOD, changefreq: "weekly", priority: "0.9" },
          { path: "/foto-profissional-para-linkedin/", lastmod: CORE_LASTMOD, changefreq: "weekly", priority: "0.9" },
          { path: "/fotografia-para-clinicas/", lastmod: CORE_LASTMOD, changefreq: "weekly", priority: "0.9" },
          { path: "/fotografia-executiva/", lastmod: CORE_LASTMOD, changefreq: "weekly", priority: "0.9" },
          { path: "/fotos-profissionais-medicos/", lastmod: CORE_LASTMOD, changefreq: "weekly", priority: "0.9" },
          { path: "/fotografia-para-advogados/", lastmod: CORE_LASTMOD, changefreq: "weekly", priority: "0.9" },
          { path: "/eventos-corporativos/", lastmod: CORE_LASTMOD, changefreq: "weekly", priority: "0.9" },
          { path: "/fotografo-empresarial/", lastmod: CORE_LASTMOD, changefreq: "weekly", priority: "0.9" },
          { path: "/fotografo-de-feira-de-negocios/", lastmod: CORE_LASTMOD, changefreq: "weekly", priority: "0.9" },

          { path: "/portfolio/", lastmod: CORE_LASTMOD, changefreq: "weekly", priority: "0.8" },
          { path: "/cases/", lastmod: CASES_LASTMOD, changefreq: "monthly", priority: "0.8" },
          { path: "/cases/ativa-logistica/", lastmod: CASES_LASTMOD, changefreq: "monthly", priority: "0.7" },
          { path: "/cases/rocha-e-queiroz-advogados/", lastmod: CASES_LASTMOD, changefreq: "monthly", priority: "0.7" },
          { path: "/cases/sq-quimica/", lastmod: CASES_LASTMOD, changefreq: "monthly", priority: "0.7" },
          { path: "/cases/abradilan/", lastmod: CASES_LASTMOD, changefreq: "monthly", priority: "0.7" },
          { path: "/cases/tecnisa/", lastmod: CASES_LASTMOD, changefreq: "monthly", priority: "0.7" },
          { path: "/cases/nitriflex/", lastmod: CASES_LASTMOD, changefreq: "monthly", priority: "0.7" },
          { path: "/cases/fiorde/", lastmod: CASES_LASTMOD, changefreq: "monthly", priority: "0.7" },
          { path: "/cases/germed/", lastmod: CASES_LASTMOD, changefreq: "monthly", priority: "0.7" },
          { path: "/cases/galena/", lastmod: CASES_LASTMOD, changefreq: "monthly", priority: "0.7" },
          { path: "/cases/bmx-logistica/", lastmod: CASES_LASTMOD, changefreq: "monthly", priority: "0.7" },
          { path: "/videos/", lastmod: CORE_LASTMOD, changefreq: "weekly", priority: "0.9" },
          { path: "/video-institucional/", lastmod: CORE_LASTMOD, changefreq: "weekly", priority: "0.9" },
          { path: "/video-de-eventos-corporativos/", lastmod: CORE_LASTMOD, changefreq: "weekly", priority: "0.9" },
          { path: "/video-para-feiras-e-stands/", lastmod: CORE_LASTMOD, changefreq: "weekly", priority: "0.9" },
          { path: "/blog/", lastmod: CORE_LASTMOD, changefreq: "weekly", priority: "0.9" },
          { path: "/sobre/", lastmod: CORE_LASTMOD, changefreq: "monthly", priority: "0.8" },
          { path: "/quem-e-o-ale/", lastmod: CORE_LASTMOD, changefreq: "monthly", priority: "0.8" },
          { path: "/depoimentos/", lastmod: CORE_LASTMOD, changefreq: "monthly", priority: "0.7" },
          { path: "/faq/", lastmod: CORE_LASTMOD, changefreq: "monthly", priority: "0.8" },
          { path: "/contato/", lastmod: CORE_LASTMOD, changefreq: "monthly", priority: "0.8" },
          ...categories
            .filter((c) => !REDIRECTED_CATEGORY_SLUGS.has(c.slug))
            .map((c) => ({ path: `/fotografo-corporativo/${c.slug}/`, lastmod: CORE_LASTMOD, changefreq: "monthly" as const, priority: "0.8" })),
          { path: "/fotografo-corporativo-em/", lastmod: CORE_LASTMOD, changefreq: "monthly", priority: "0.8" },
          ...bairros.map((b) => ({ path: `/fotografo-corporativo-em/${b.slug}/`, lastmod: CORE_LASTMOD, changefreq: "monthly" as const, priority: "0.8" })),

          // URLs alias (/portfolio/:slug e /fotografo-corporativo/categoria/:slug)
          // apontam para /fotografo-corporativo/:slug via canonical/redirect.
          // Não devem entrar no sitemap: geram "Página com redirecionamento" no GSC.
          ...videos.map((v) => ({ path: `/videos/${v.slug}/`, lastmod: CORE_LASTMOD, changefreq: "monthly" as const, priority: "0.7" })),
          // <lastmod> populado com a data de publicação do post para priorização
          // de crawl budget pelo Googlebot.
          ...posts.map((p) => ({ path: `/blog/${p.slug}/`, lastmod: toISODate(p.date), changefreq: "monthly" as const, priority: "0.7" })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
