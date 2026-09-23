# 09 — Data Source and Methodology

Data: 2026-09-23 · Branch: research/p18q1-foto-profissional-query-page

## Fontes REALMENTE usadas nesta missão

| Fonte | O que é | Como foi usada | Limite |
|---|---|---|---|
| Export XLSX GSC 09/17 (`~/Downloads/alefotografo.com.br-Performance-on-Search-2026-09-17.xlsx`) | Snapshot oficial, Tipo=Web, 15/06–14/09/2026, dimensões **Consultas** e **Páginas separadas** | Âncoras factuais dos volumes (query head 17.107 impr/21 cl/pos 3,92; /foto-profissional ~59 impr; home 25.212 impr; /loja 1.197 impr) | **NÃO contém query×page** — proibido cruzar as dimensões; todo cruzamento nesta missão está marcado UNKNOWN |
| SERP pública (busca via ferramenta de busca) | Amostra de snippets, 1 execução em 23/09 | Apoio (07): URLs próprias observadas, tipo de resultado, intenção aparente | Não informa cliques/impressões/posição; ordem ≠ ranking estável |
| Estado do ambiente | Verificação técnica | Conclusão de inacessibilidade do GSC autenticado | — |

## O que NÃO foi usado (e por quê)

- **Cruzamento aritmético Consultas×Páginas do XLSX** — proibido pela missão e metodologicamente inválido (a posição 3,92 da query é uma média agregada; as impressões da home somam milhares de queries).
- **Credenciais do navegador/cookies/tokens** — não extraídos; sem contorno de autenticação.
- **Números de nenhuma outra propriedade** — fotosprofissionais.com.br e demais domínios owned ficam fora (FASE 16 da missão).

## Verificações de acesso executadas (FASE 0)

1. `gcloud` — não instalado no ambiente.
2. `~/.config` — contém apenas `gh` (GitHub CLI) e `configstore`; nenhuma credencial Google.
3. Variáveis de ambiente — zero referências Google/GSC.
4. Scripts históricos (`/tmp/p18a6/*.mjs`) — pipeline construído sobre export XLSX manual; nenhuma chamada à API Search Analytics.

Conclusão: **não há fonte autenticada legítima disponível** neste ambiente. Status: BLOCKED — QUERY×PAGE REQUIRES AUTHENTICATED GSC DATA.

## Normalização prevista (aplicar QUANDO o dado chegar — FASE 6)

- `RAW_URL`: exatamente como o GSC reportar (ex.: `https://alefotografo.com.br/loja?img_picture=…` — guardar íntegra, incluindo querystring legada real).
- `NORMALIZED_URL`: https forçado; apex→www; fragmento removido; `srsltid` (tracking do Google) removido; demais parâmetros preservados quando identificarem URL legada real → classificadas como `LEGACY URL`, nunca fundidas silenciosamente.
- Posição: preservar a normalização de células-data do parser P18A.6R (serial Excel → decimal) se o export vier por planilha.

## Reprodutibilidade

Consultas exatas, propriedade, período, dimensões e filtros documentados em 01–05 e no script de 08. A execução manual leva ~2 minutos na interface; o reprocessamento e a análise final (decisão A–G definitiva) são a missão seguinte.
