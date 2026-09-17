# 03 — Lighthouse local — MOBILE (mediana de 3 execuções)

Data: 17/09/2026 · Lighthouse 12.8.2 · `--form-factor=mobile` · Chrome headless · URL https://www.alefotografo.com.br/ · Categorias: performance, accessibility, best-practices, seo.

## Runs

| Run | Performance | A11y | BP | SEO | FCP | LCP | TBT | CLS | Speed Index | TTFB |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 (fria) | 84 | 100 | 100 | 100 | 1.957 s | 3.875 s | 0 | 0 | 4.453 s | 1.989 s |
| 2 | 86 | 100 | 100 | 100 | 2.476 s | 3.526 s | 0 | 0 | 3.714 s | 0.284 s |
| 3 | 90 | 100 | 100 | 100 | 2.510 s | 3.126 s | 0 | 0 | 2.510 s | 0.178 s |
| **MEDIANA** | **86** | **100** | **100** | **100** | **2.476 s** | **3.526 s** | **0** | **0** | **3.714 s** | **0.284 s** |

## LCP element (run 1)

`<img>` hero — alt "Fotógrafo de Grupos, Times e Equipes — foto 2"
- src: `/api/public/img?src=<rackcdn.com/GaleriaImagem/...>` (proxy do app → CDN legado Rackspace)
- width=1920 height=1275 · sizes=100vw · srcset presente · **loading=eager · fetchpriority=high** (estratégia correta)
- Fases do LCP: **TTFB 54% (2.086 ms) · Load Time 44% (1.724 ms)** · Load Delay 1% · Render Delay 1%

## Oportunidades (audits com score < 0.9)

| Auditoria | Economia |
|---|---|
| Reduce initial server response time | root document 1.990 s (run frio; warm ~0.2–0.3 s) |
| Reduce unused JavaScript | ~43 KiB (vendor-tanstack) |
| Properly size images | ~97 KiB (4 imagens via proxy rackcdn) |

Diagnostics: total 694 KiB · DOM 836 nós · main thread 1.3 s · bootup 0.4 s · 9 recursos com cache TTL curto (5 fontes + logo + flock.js + 2 thumbs YouTube) · render-blocking: nenhum falhando · font-display: OK · lcp-lazy-loaded: OK (não lazy) · prioritize-lcp-image: OK.

## Notas

- TBT 0 ms e CLS 0 em todas as execuções — sem problema de interatividade/estabilidade no lab.
- A variação TTFB frio→quente (1.99 s → 0.18 s) sugere cold start/interrupção de cache do deployment — combina com o TTFB de campo pobre.
- Lab ≠ campo: campo (CrUX) tem LCP 3.3 s e TTFB 2.3 s — a rede real e o proxy de imagens pesam mais que o lab local.
