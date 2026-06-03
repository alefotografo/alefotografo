import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { categories, videos, posts } from "@/data/catalog";

// Base URL do site publicado. Atualize se mudar o domínio final.
const BASE_URL = "https://alefotografo.com.br";

interface SitemapEntry {
  path: string;
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
          { path: "/portfolio", changefreq: "weekly", priority: "0.8" },
          { path: "/videos", changefreq: "weekly", priority: "0.9" },
          { path: "/blog", changefreq: "weekly", priority: "0.9" },
          { path: "/sobre", changefreq: "monthly", priority: "0.8" },
          { path: "/depoimentos", changefreq: "monthly", priority: "0.7" },
          { path: "/faq", changefreq: "monthly", priority: "0.8" },
          { path: "/contato", changefreq: "monthly", priority: "0.8" },
          ...categories.map((c) => ({ path: `/fotografo-corporativo/${c.slug}`, changefreq: "monthly" as const, priority: "0.8" })),
          ...categories.map((c) => ({ path: `/fotografo-corporativo/categoria/${c.slug}`, changefreq: "monthly" as const, priority: "0.5" })),
          ...categories.map((c) => ({ path: `/portfolio/${c.slug}`, changefreq: "monthly" as const, priority: "0.5" })),
          ...videos.map((v) => ({ path: `/videos/${v.slug}`, changefreq: "monthly" as const, priority: "0.7" })),
          ...posts.map((p) => ({ path: `/blog/${p.slug}`, changefreq: "monthly" as const, priority: "0.7" })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
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
