# 01 — PageSpeed Baseline — alefotografo.com.br

Data da análise: 17/09/2026 · Relatório compartilhado do proprietário: 17/09/2026 18:37 (UTC-3) · URL: https://www.alefotografo.com.br/ · Modo: diagnóstico — zero alterações de código.

Fontes: (A) relatórios PageSpeed oficiais compartilhados (mobile + desktop, mesma análise `s04aaq137o`); (B) Lighthouse local 12.8.2, 3 execuções mobile + 3 desktop nesta máquina (mediana abaixo). **FIELD (CrUX) ≠ LAB (Lighthouse) — nunca misturar.**

## FIELD DATA (CrUX, 28 dias — relatório compartilhado)

### Seção principal por form factor

| Métrica | Mobile | Desktop | Threshold | Classificação |
|---|---|---|---|---|
| Core Web Vitals Assessment | **FAILED** | **FAILED** | — | falha causada por LCP |
| LCP (p75) | **3.3 s** | **3.3 s** | good ≤2.5 · NI ≤4 | NEEDS IMPROVEMENT |
| INP (p75) | **92 ms** | **92 ms** | good ≤200 · NI ≤500 | GOOD |
| CLS (p75) | **0.01** | **0.01** | good ≤0.1 · NI ≤0.25 | GOOD |
| FCP (p75) | **3.2 s** | **3.2 s** | good ≤1.8 · NI ≤3.0 | POOR (>3.0) |
| TTFB (p75) | **2.3 s** | **2.1 s** | good ≤0.8 · NI ≤1.8 | POOR (>1.8) |

Distribuições de Page Loads: mobile TTFB Good 21% / NI 30% / Poor 49% · desktop TTFB Good 39% / NI 29% / Poor 32%.

### Bloco origin exibido no relatório (aviso "insufficient real-world data for this page" → dados de origem)

LCP 2.9 s (Good 66% / NI 26% / Poor 8%) · INP 48 ms (99/1/1) · CLS 0.04 (83/11/5) · FCP 2.7 s (50/31/20) · TTFB 2.1 s (39/29/32) · Assessment: FAILED (LCP p75 2.9 > 2.5).

Leitura: a **home está pior que a origem no LCP** (3.3 vs 2.9) e o TTFB é o gargalo estrutural (metade dos carregamentos mobile > 1.8 s). CLS e INP estão ótimos em campo.

## LAB DATA (Lighthouse local, mediana de 3 execuções — 17/09/2026)

| | Mobile | Desktop |
|---|---|---|
| Performance | 86 | 76 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |
| FCP | 2.48 s | 1.29 s |
| LCP | 3.53 s | 3.21 s |
| TBT | 0 ms | 0 ms |
| CLS | 0 | 0 |
| Speed Index | 3.71 s | 1.66 s |
| TTFB (lab) | 284 ms (1ª execução fria: 1.99 s) | 229 ms (1ª fria: 1.38 s) |

Runs individuais: ver 03 (mobile) e 04 (desktop). Nota: o lab local roda em rede rápida e máquina limpa — os valores de campo (CrUX) são a verdade de usuário real e devem guiar prioridade.

## Síntese

- O site NÃO tem problema de JS pesado (TBT 0, main thread 1.3 s), NÃO tem CLS, NÃO tem a11y/SEO problemáticos no lab.
- O problema real: **LCP de campo 3.3 s** (home) derivado de **TTFB p75 2.1–2.3 s** + imagem LCP servida via proxy do próprio app buscando um CDN legado (rackcdn.com).
- Mobile concentra 67% dos cliques (GSC, P18A.6) → prioridade mobile confirmada pelos dados de campo (Poor 49% nos page loads).
