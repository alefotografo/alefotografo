# P10 — Performance e dívida técnica (14/09/2026)

## Código morto removido (commit `chore: remove dead code`)

Critério da missão cumprido para cada item: zero imports · zero rota · zero referência dinâmica · typecheck/build limpos.

| Removido | Evidência |
|---|---|
| `src/components/site/home/HomeVideos.tsx` | 0 imports (era o "Produções audiovisuais" retirado da Home em 73a73d1) |
| `src/components/site/home/HomeSocialProof.tsx` | 0 imports |
| `src/components/site/home/ChamadaFinal.tsx` | 0 imports |
| `src/components/site/home/PontualOuPlano.tsx` | 0 imports |
| `homeCuration.ts`: `heroPhoto`, `heroAlternatives`, `segmentPhotos` + interface `SegmentPhoto` | 0 consumidores cada (a Home usa `selectedWorks`, `worksCtas`, `galleryTitle`) |

## Observações de performance (verificadas no código/config)

- **Code splitting**: `manualChunks` separa vendors (react/tanstack/radix/icons/supabase/carousel/charts) — build config existente, intacto.
- **Lazy abaixo da dobra**: Home carrega via `lazyAfterInteractive` todas as seções abaixo do hero; hero + primeira dobra vêm no SSR. Intacto.
- **Imagens**: proxy `/api/public/img` (WebP redimensionado, cache permanente) para todo o acervo rackcdn; `width/height` em 100% das imgs da Home (F5). Preload do hero no `<head>`. Intacto.
- **Fontes**: servidas otimizadas em `/fonts` com `immutable` no `server.ts`. Intacto.
- **Scripts globais**: JSON-LD por página (sem third-party JS de rastreio além do existente). Sem novos pesos.

## Pendências registradas (sem ação nesta missão)

1. Duplicações visuais entre SegmentGrid / Trabalhos Selecionados / tiles de Instagram (doc P6) — decisão editorial.
2. META description genérica legada em 14 páginas de vídeo (doc P5) — normalização de dados do catálogo.
3. Expansão de `postBridges` e clusters finos do blog (doc P9) — estratégia de conteúdo.
4. Schema `url` non-www em Person/Organization (doc P8) — consistência, baixa materialidade.
5. Promessas comerciais de prazo/presença (doc P7) — auditoria comercial com o Alexandre.
