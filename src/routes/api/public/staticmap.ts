import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// Proxies Google Static Maps via the Lovable connector gateway so the image
// renders on any domain (managed browser key is restricted to *.lovable.app).
export const Route = createFileRoute("/api/public/staticmap")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const center = url.searchParams.get("center") ?? "-23.5952265,-46.6885604";
        const zoom = url.searchParams.get("zoom") ?? "16";
        const size = url.searchParams.get("size") ?? "600x400";
        const scale = url.searchParams.get("scale") ?? "2";
        const markers = url.searchParams.get("markers") ?? `color:red|${center}`;
        const maptype = url.searchParams.get("maptype") ?? "roadmap";

        const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
        const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
        if (!LOVABLE_API_KEY || !GOOGLE_MAPS_API_KEY) {
          return new Response("Map credentials not configured", { status: 500 });
        }

        const params = new URLSearchParams({
          center,
          zoom,
          size,
          scale,
          maptype,
          markers,
        });

        const gatewayUrl = `https://connector-gateway.lovable.dev/google_maps/maps/api/staticmap?${params.toString()}`;
        const res = await fetch(gatewayUrl, {
          headers: {
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "X-Connection-Api-Key": GOOGLE_MAPS_API_KEY,
          },
        });

        if (!res.ok) {
          const body = await res.text();
          return new Response(`Map fetch failed: ${res.status} ${body}`, { status: 502 });
        }

        const buf = await res.arrayBuffer();
        return new Response(buf, {
          status: 200,
          headers: {
            "Content-Type": res.headers.get("Content-Type") ?? "image/png",
            "Cache-Control": "public, max-age=86400, s-maxage=86400",
          },
        });
      },
    },
  },
});
