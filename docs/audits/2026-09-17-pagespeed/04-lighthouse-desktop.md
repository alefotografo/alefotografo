# 04 — Lighthouse local — DESKTOP (mediana de 3 execuções)

Data: 17/09/2026 · Lighthouse 12.8.2 · `--form-factor=desktop --screen-emulation.disabled` · Chrome headless · URL https://www.alefotografo.com.br/.

## Runs

| Run | Performance | A11y | BP | SEO | FCP | LCP | TBT | CLS | Speed Index | TTFB |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 (fria) | 70 | 100 | 100 | 100 | 1.290 s | 3.301 s | 0 | 0 | 1.663 s | 1.382 s |
| 2 | 76 | 100 | 100 | 100 | 1.523 s | 3.173 s | 0 | 0 | — | 0.229 s |
| 3 | 78 | 100 | 100 | 100 | 1.110 s | 3.210 s | 0 | 0 | 1.663 s | 0.198 s |
| **MEDIANA** | **76** | **100** | **100** | **100** | **1.290 s** | **3.210 s** | **0** | **0** | **1.663 s** | **0.229 s** |

(Run 2 não registrou Speed Index legível no parse; mediana usa runs 1 e 3.)

## LCP element

Mesmo elemento do mobile: hero `<img>` (alt "Fotógrafo de Grupos, Times e Equipes — foto 2") via `/api/public/img?src=<rackcdn>` — 1920×1275, eager, fetchpriority=high, srcset.

## Oportunidades

| Auditoria | Economia |
|---|---|
| Reduce initial server response time | root document 1.380 s (run frio; warm ~0.2 s) |
| Reduce unused JavaScript | ~43 KiB |
| Properly size images | ~71 KiB |

## Itens do relatório PageSpeed do proprietário (desktop) extraídos na íntegra

- **Accessibility 100 no lab local**; no relatório compartilhado o único item apontado (não pontuado): "Identical links have the same purpose" — dois links "Solicitar orçamento" com hrefs wa.me distintos (textos de mensagem diferentes). Itens passando: árvore de acessibilidade bem formada, landmarks, skip links, contraste, alt, heading order, tap targets.
- **Best Practices**: CSP ausente (High) · HSTS sem preload (Medium) · COOP ausente (High) · XFO/frame-ancestors ausente (High) · Trusted Types ausente (High) · source maps ausentes no JS grande (vendor). Passando: HTTPS, sem cookies de terceiros, sem erros de console, aspect ratio correto, resolução de imagem apropriada.
- **SEO**: todos os itens passando — title, canonical, hreflang, robots, crawlability, structured data válido, llms.txt segue recomendações, WebMCP schemas válidos.
- **CLS lab 0** (consta também no relatório compartilhado: "Cumulative Layout Shift 0").

## Notas

- Desktop sofre mais com LCP no lab (3.2 s) do que mobile local — a imagem 1920px é grande para qualquer viewport; o campo desktop confirma LCP 3.3 s.
- FCP desktop 1.1–1.5 s vs campo 3.2 s → gap de rede real dos usuários + TTFB de campo.
