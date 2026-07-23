import { createFileRoute } from '@tanstack/react-router'

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/google_maps'

export const Route = createFileRoute('/api/public/staticmap')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url)
        const center = url.searchParams.get('center') ?? '-23.5952265,-46.6885604'
        const zoom = url.searchParams.get('zoom') ?? '16'
        const size = url.searchParams.get('size') ?? '600x300'

        const lovableKey = process.env.LOVABLE_API_KEY
        const gmKey = process.env.GOOGLE_MAPS_API_KEY

        // If credentials are missing, fall back to a Google Maps link redirect
        // (still a valid image? no — so return a tiny transparent PNG to avoid 502).
        if (!lovableKey || !gmKey) {
          const png = Uint8Array.from(
            atob(
              'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
            ),
            (c) => c.charCodeAt(0),
          )
          return new Response(png, {
            status: 200,
            headers: {
              'Content-Type': 'image/png',
              'Cache-Control': 'public, max-age=86400',
            },
          })
        }

        const target =
          `${GATEWAY_URL}/maps/api/staticmap?center=${encodeURIComponent(center)}` +
          `&zoom=${encodeURIComponent(zoom)}&size=${encodeURIComponent(size)}` +
          `&markers=${encodeURIComponent(`color:red|${center}`)}&scale=2`

        try {
          const upstream = await fetch(target, {
            headers: {
              Authorization: `Bearer ${lovableKey}`,
              'X-Connection-Api-Key': gmKey,
            },
          })
          if (!upstream.ok) {
            return new Response('static map unavailable', { status: 204 })
          }
          return new Response(upstream.body, {
            status: 200,
            headers: {
              'Content-Type': upstream.headers.get('Content-Type') ?? 'image/png',
              'Cache-Control': 'public, max-age=86400',
            },
          })
        } catch {
          return new Response('static map error', { status: 204 })
        }
      },
    },
  },
})
