# 08 — Metodologia da análise GSC (SNAPSHOT 17/09/2026 — CORRIGIDO)

Data: 18/09/2026 (reprocessamento) · Propriedade: https://www.alefotografo.com.br · Modo: análise somente — zero alterações de código/conteúdo.

## 1. Fonte de dados (CORRIGIDA)

- **Arquivo:** `/Users/m4/Downloads/alefotografo.com.br-Performance-on-Search-2026-09-17.xlsx` (entregue pelo proprietário em 17/09 19:41). A análise anterior usava o snapshot de 27/08 — **esta versão o substitui como baseline**.
- **Validação do snapshot (OBRIGATÓRIA) — PASSOU 100%:**

| Checagem | Esperado | Obtido | Status |
|---|---|---|---|
| Filtros | Web + Últimos 3 meses | idem | ✓ |
| Período (Gráfico) | ~15/06/2026 → 14/09/2026 | 15/06/2026 → 14/09/2026 | ✓ EXATO |
| Cliques (Gráfico/Dispositivos) | ~8.414 | 8.414 | ✓ EXATO |
| Impressões | ~1.587.554 | 1.587.554 | ✓ EXATO |
| CTR | ~0,53% | 0,53% | ✓ |
| Posição média ponderada | ~6,48 | 6,48 | ✓ EXATO |
| 13 queries de controle (foto profissional, linkedin, ativa logistica, retrato corporativo etc.) | valores informados | **todos exatos** (impressões e posição) | ✓ |

- Dimensões: Gráfico (92 dias), Consultas (1.000), Páginas (695), Países, Dispositivos, Aspecto da pesquisa, Filtros. Nenhum filtro de query/página além de Web/3 meses.
- Dimensão Consultas limitada a 1.000 linhas pelo GSC (soma parcial: 2.021 cliques / 470.320 impressões); os totais de propriedade vêm de Gráfico/Dispositivos.

## 2. Normalização da coluna Posição — VALIDADA

Mesmo bug do Excel (posições decimais viram serial de data com formato `d.m`): valores >1000 → serial → `dia.mês` (ex.: 46063 → 10.2; 46054 → 1.2; 46154 → 12.5; 46210 → 7.7). Amostra validada célula a célula (ex.: "foto profissional" pos 3.92; "fotografo" pos 10.2 — serial 46063). CTR recalculado bate com cliques/impressões em toda a amostra. **PASSOU.**

## 3. REGRA CRÍTICA query × URL

O export tem Consultas e Páginas como dimensões **separadas** — não existe dimensão combinada no arquivo. Toda associação query→URL nesta análise é **URL_PROVÁVEL** (semântica), nunca URL_CONFIRMADA.

**Caso crítico deste snapshot — "foto profissional":**
- Query "foto profissional": 17.107 impressões, pos 3.92.
- Página `/foto-profissional` (www 51 + apex 8): **59 impressões, 0 cliques, pos ponderada 14.83**.
- Conclusão: a intenção está sendo capturada por **outras URLs** (home tem 25.212 impr/pos 1.6; posts de blog 162k/72k/68k impressões dominam o funil). **NÃO recomendar alteração de title/meta de /foto-profissional** até identificar a URL real via GSC (filtro query×page na interface ou API). Ação correta: investigar + fortalecer internal links blog→money page.

## 4. Normalização de host nas Páginas (Fase 22/30 da missão)

695 URLs → consolidadas por PATH com soma de cliques/impressões e **posição média ponderada pelas impressões** (não média aritmética). 41 URLs ainda aparecem com host apex (`https://alefotografo.com.br/...`) — somadas à equivalente www (canonical atual). Query strings preservadas em 09 e marcadas como legado/tracking quando aplicável (ex.: `?option=com_content...` do Joomla antigo).

Caso validado: `/fotografo-corporativo/fotografia-corporativa-em-sao-paulo` = 8.264 impressões, pos ponderada **15.52** (www 1.571 impr/pos 21.17 + apex 6.669 impr/pos 14.2 + 2 URLs com query string legada 24 impr) — bate com o esperado (~8.240 / ~15.5).

## 5. Classificação de consultas e Opportunity Score

Regras determinísticas idênticas à versão anterior (ordem: LEGADO → BRANDED → NOISE → DINHEIRO-hard → APOIO → AUTORIDADE → INFORMATIVA → DINHEIRO-soft), clusters, fórmula do score e faixas de posição — todas reprodutíveis em `/tmp/p18a6/analyze.mjs`. Distribuição deste snapshot: DINHEIRO 470 · INFORMATIVA 413 · AUTORIDADE 68 · APOIO 29 · IRRELEVANTE 19 · BRANDED 1. Faixas: 1–3: 272 · 4–6: 262 · 7–10: 381 · 11–15: 48 · 16–20: 14 · 21–50: 23.

## 6. URLs legadas

`/loja` + 9 URLs `/loja/*`: ~5.000 impressões no período (pacote-ouro 1.647 impr/pos 8.6; /loja 1.198 impr/pos 8) — INDEX CONVERGENCE, não otimizar. `/videos-para-empresas/*` seguem com impressões significativas (ativa-logistica-unidade-barueri 3.649 impr/pos 4; rocha-queiroz 2.826 impr/pos 7.5 + nova versão /videos/ 559 impr) — convergência em andamento.

## 7. Limitações

- 1.000 linhas de consulta (cap do GSC); rabo longo fora.
- URLs PROVÁVEIS por semântica (ver item 3).
- Período não é comparável 1:1 com o snapshot 08/27 (janelas diferentes); o delta (arquivo 11) trata isso com ressalva.
