import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { posts, site } from "@/data/catalog";
import { postDateRFC822 } from "@/lib/postDate";

const BASE_URL = "https://alefotografo.com.br";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function abs(url?: string | null): string | null {
  if (!url) return null;
  if (/^https?:\/\//i.test(url)) return url;
  return `${BASE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

export const Route = createFileRoute("/blog/rss.xml")({
  server: {
    handlers: {
      GET: async () => {
        const now = new Date().toUTCString();
        const items = posts.map((p) => {
          const url = `${BASE_URL}/blog/${p.slug}`;
          const cover = abs(p.cover);
          const enclosure = cover
            ? `      <enclosure url="${esc(cover)}" type="image/jpeg" />`
            : null;
          return [
            `    <item>`,
            `      <title>${esc(p.title)}</title>`,
            `      <link>${url}</link>`,
            `      <guid isPermaLink="true">${url}</guid>`,
            `      <pubDate>${postDateRFC822(p.date)}</pubDate>`,
            `      <description>${esc(p.description || p.title)}</description>`,
            enclosure,
            `    </item>`,
          ].filter(Boolean).join("\n");
        });

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">`,
          `  <channel>`,
          `    <title>${esc(site.name)} — Blog</title>`,
          `    <link>${BASE_URL}/blog</link>`,
          `    <atom:link href="${BASE_URL}/blog/rss.xml" rel="self" type="application/rss+xml" />`,
          `    <description>${esc(site.description)}</description>`,
          `    <language>pt-BR</language>`,
          `    <lastBuildDate>${now}</lastBuildDate>`,
          ...items,
          `  </channel>`,
          `</rss>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
