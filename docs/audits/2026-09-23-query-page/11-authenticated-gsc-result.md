# 11 — Resultado GSC autenticado (addendum P18Q1)

Data do addendum: 2026-09-23
Missão de origem: P18Q1 (2026-09-22)
Missão que atualiza: P18Q2 (`research/p18q2-photo-professional-cluster`)

## O que mudou desde a P18Q1

A P18Q1 terminou com a decisão **G — INCONCLUSIVO**, porque o ambiente local do
Kimi não tinha acesso autenticado ao Google Search Console. Isso estava correto
para aquele ambiente e **permanece registrado como verdade histórica** — nenhum
arquivo original da P18Q1 foi reescrito.

Após a P18Q1, o proprietário conectou:

Google Search Console → Windsor.ai → ChatGPT

e obteve o cruzamento real **query × page** diretamente da propriedade:

- Propriedade: `sc-domain:alefotografo.com.br`
- Período: 15/06/2026 → 14/09/2026
- Search type: web

## Decisão atualizada

| Item | P18Q1 (2026-09-22) | Addendum (2026-09-23) |
|---|---|---|
| GSC autenticado | NÃO | SIM (via proprietário, Windsor.ai) |
| Decisão | G — INCONCLUSIVO | D — BLOG É O OWNER PRINCIPAL |
| Confiança | — | HIGH |
| Primary owner | não determinável | `/blog/fotografo-5-poses-para-retrato-corporativo` |
| `/foto-profissional` owner | não determinável | NÃO (9 impressões no período) |

## Evidência resumida (query × page real)

Query `foto profissional` — 21 cliques / 17.107 impressões / CTR 0,12% / posição 3,92:

| # | URL | Clicks | Impr. | CTR | Pos. |
|---|---|---|---|---|---|
| 1 | /blog/fotografo-5-poses-para-retrato-corporativo | 10 | 11.958 | 0,08% | 2,52 |
| 2 | /blog/11-ideias-para-o-plano-de-fundo-de-seu-retrato-profissional | 8 | 10.469 | 0,08% | 7,36 |
| 3 | /blog/7-dicas-para-voce-nunca-mais-errar-na-aparencia-ao-tirar-fotos-profissionais | 1 | 1.719 | 0,06% | 7,21 |
| 4 | /blog/fotografo-ensina-que-foto-profissional-aparece-14-vezes-... | 0 | 323 | 0% | 4,45 |
| 5 | /fotografo-corporativo (apex) | 0 | 319 | 0% | 5,98 |
| 6 | / (Home) | 1 | 314 | 0,32% | 16,15 |
| 7 | /fotografo-corporativo/retrato-corporativo | 1 | 211 | 0,47% | 4,74 |
| — | /foto-profissional (www+apex) | 0 | 9 | 0% | 8,8–9,5 |

**Atenção:** impressões por página podem somar mais que o total da query, porque
o mesmo site pode exibir mais de uma URL na mesma busca. Não usar
`impressões da página / 17.107` como share exclusivo — apenas dominância relativa
na dimensão page.

A análise completa, o plano de internal linking, o CTR analysis e o plano P18Q3
estão em `docs/audits/2026-09-23-photo-professional-cluster/` (missão P18Q2).
