import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { videos, site } from "@/data/catalog";
import { videoThumb } from "@/lib/videoThumb";

const BASE_URL = "https://alefotografos.com.br";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Sitemap de vídeos seguindo a extensão oficial do Google:
// https://developers.google.com/search/docs/crawling-indexing/sitemaps/video-sitemaps
export const Route = createFileRoute("/sitemap-videos.xml")({
  server: {
    handlers: {
      GET: async () => {
        const items = videos
          .filter((v) => v.youtube || v.vimeo)
          .map((v) => {
            const pageUrl = `${BASE_URL}/videos/${v.slug}`;
            const thumb = videoThumb(v, "lg") ?? `${BASE_URL}/favicon.ico`;
            const playerLoc = v.youtube
              ? `https://www.youtube-nocookie.com/embed/${v.youtube}`
              : `https://player.vimeo.com/video/${v.vimeo}`;
            const contentLoc = v.youtube
              ? `https://www.youtube.com/watch?v=${v.youtube}`
              : null;
            const title = esc(v.title);
            const description = esc(
              (v.description || v.subtitle || v.title).slice(0, 2048),
            );

            return [
              `  <url>`,
              `    <loc>${pageUrl}</loc>`,
              `    <video:video>`,
              `      <video:thumbnail_loc>${esc(thumb)}</video:thumbnail_loc>`,
              `      <video:title>${title}</video:title>`,
              `      <video:description>${description}</video:description>`,
              contentLoc ? `      <video:content_loc>${esc(contentLoc)}</video:content_loc>` : null,
              `      <video:player_loc>${esc(playerLoc)}</video:player_loc>`,
              `      <video:family_friendly>yes</video:family_friendly>`,
              `      <video:live>no</video:live>`,
              `      <video:requires_subscription>no</video:requires_subscription>`,
              `      <video:publisher>${esc(site.name)}</video:publisher>`,
              `    </video:video>`,
              `  </url>`,
            ]
              .filter(Boolean)
              .join("\n");
          });

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"`,
          `        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">`,
          ...items,
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
