import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { categories, videos, posts } from "@/data/catalog";
import { bairros } from "@/data/bairros";
import { postDateISO } from "@/lib/postDate";

// Base URL do site publicado. Atualize se mudar o domínio final.
const BASE_URL = "https://www.alefotografo.com.br";

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
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/fotografo-corporativo", changefreq: "weekly", priority: "0.9" },
          { path: "/fotos-corporativas", changefreq: "weekly", priority: "0.9" },
          { path: "/foto-profissional", changefreq: "weekly", priority: "0.9" },
          { path: "/foto-profissional-para-linkedin", changefreq: "weekly", priority: "0.9" },
          { path: "/fotografia-para-clinicas", changefreq: "weekly", priority: "0.9" },
          { path: "/fotografia-executiva", changefreq: "weekly", priority: "0.9" },
          { path: "/fotos-profissionais-medicos", changefreq: "weekly", priority: "0.9" },
          { path: "/fotografia-para-advogados", changefreq: "weekly", priority: "0.9" },
          { path: "/eventos-corporativos", changefreq: "weekly", priority: "0.9" },
          { path: "/fotografo-empresarial", changefreq: "weekly", priority: "0.9" },
          { path: "/fotografo-de-feira-de-negocios", changefreq: "weekly", priority: "0.9" },

          { path: "/portfolio", changefreq: "weekly", priority: "0.8" },
          { path: "/videos", changefreq: "weekly", priority: "0.9" },
          { path: "/blog", changefreq: "weekly", priority: "0.9" },
          { path: "/sobre", changefreq: "monthly", priority: "0.8" },
          { path: "/quem-e-o-ale", changefreq: "monthly", priority: "0.8" },
          { path: "/depoimentos", changefreq: "monthly", priority: "0.7" },
          { path: "/faq", changefreq: "monthly", priority: "0.8" },
          { path: "/contato", changefreq: "monthly", priority: "0.8" },
          ...categories.map((c) => ({ path: `/fotografo-corporativo/${c.slug}`, changefreq: "monthly" as const, priority: "0.8" })),
          ...bairros.map((b) => ({ path: `/fotografo-corporativo-em/${b.slug}`, changefreq: "monthly" as const, priority: "0.8" })),
          // URLs alias (/portfolio/:slug e /fotografo-corporativo/categoria/:slug)
          // apontam para /fotografo-corporativo/:slug via canonical/redirect.
          // Não devem entrar no sitemap: geram "Página com redirecionamento" no GSC.
          ...videos.map((v) => ({ path: `/videos/${v.slug}`, changefreq: "monthly" as const, priority: "0.7" })),
          ...posts.map((p) => ({ path: `/blog/${p.slug}`, lastmod: postDateISO(p.date), changefreq: "monthly" as const, priority: "0.7" })),
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
