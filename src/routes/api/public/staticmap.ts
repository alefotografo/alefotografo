import { createFileRoute } from '@tanstack/react-router'

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/google_maps'

export const Route = createFileRoute('/api/public/staticmap')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url)

        // Rota pública: validar tudo antes de gastar a cota do Google.
        // Sem allowlist, qualquer pessoa poderia usar este proxy para
        // gerar mapas de qualquer lugar do mundo com nossas credenciais.
        const DEFAULT_CENTER = '-23.5952265,-46.6885604'
        const ALLOWED_SIZES = new Set(['600x300', '600x400', '640x360', '800x400', '1200x600'])
        // Região atendida (Grande São Paulo + ABC + Barueri).
        const LAT_RANGE = [-24.2, -23.2] as const
        const LNG_RANGE = [-47.2, -46.2] as const

        const rawCenter = url.searchParams.get('center') ?? DEFAULT_CENTER
        const centerMatch = /^(-?\d{1,2}(?:\.\d{1,7})?),(-?\d{1,3}(?:\.\d{1,7})?)$/.exec(rawCenter)
        let center = DEFAULT_CENTER
        if (centerMatch) {
          const lat = Number(centerMatch[1])
          const lng = Number(centerMatch[2])
          if (
            Number.isFinite(lat) && Number.isFinite(lng) &&
            lat >= LAT_RANGE[0] && lat <= LAT_RANGE[1] &&
            lng >= LNG_RANGE[0] && lng <= LNG_RANGE[1]
          ) {
            center = `${lat},${lng}`
          }
        }

        const zoomNum = Number.parseInt(url.searchParams.get('zoom') ?? '16', 10)
        const zoom = String(Number.isFinite(zoomNum) && zoomNum >= 3 && zoomNum <= 20 ? zoomNum : 16)

        const rawSize = url.searchParams.get('size') ?? '600x300'
        const size = ALLOWED_SIZES.has(rawSize) ? rawSize : '600x300'

        const lovableKey = process.env.LOVABLE_API_KEY
        const gmKey = process.env.GOOGLE_MAPS_API_KEY

        // If credentials are missing, fall back to a Google Maps link redirect
        // (still a valid image? no — so return a tiny transparent PNG to avoid 502).
        const blankPng = () => {
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

        if (!lovableKey || !gmKey) return blankPng()

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
            return blankPng()
          }
          return new Response(upstream.body, {
            status: 200,
            headers: {
              'Content-Type': upstream.headers.get('Content-Type') ?? 'image/png',
              'Cache-Control': 'public, max-age=86400',
            },
          })
        } catch {
          return blankPng()
        }
      },
    },
  },
})
