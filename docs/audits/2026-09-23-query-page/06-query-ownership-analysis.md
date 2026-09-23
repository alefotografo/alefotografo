# 06 — Query Ownership Analysis (com limites explícitos de evidência)

Data: 2026-09-23 · Princípio: **as dimensões Consultas e Páginas do export XLSX são SEPARADAS. Cruzá-las seria inferência proibida. Toda associação query↔página abaixo está classificada como UNKNOWN até query×page real.**

## 1. Candidatas (FASE 9) — fatos separados por dimensão

| Candidata | Fato dimensão PÁGINAS (15/06–14/09) | Fato dimensão CONSULTAS (mesmo período) | Associação com "foto profissional" |
|---|---|---|---|
| / (home) | 25.212 impr · 352 cl · pos 7,05 | — | UNKNOWN — home recebe impressões de milhares de queries; parcela da head query indeterminada |
| /foto-profissional | ~59 impr · 0 cl · pos ~14,83 | — | UNKNOWN — se alguma das 17.107 impr da query cai aqui, é fração residual não comprovável |
| /foto-profissional-para-linkedin | 195 impr · 10 cl · pos 6,37 | — | UNKNOWN — intenção LinkedIn, separada (bloco 03) |
| /fotografia-executiva | ~1.400 impr (recorte) | — | UNKNOWN |
| /fotografo-corporativo/retrato-corporativo | 3.589 impr · 27 cl · pos 22,82 | — | UNKNOWN |
| /loja (legada) | 1.197 impr · pos 39,39 | — | UNKNOWN — mas ver §2 (SERP support) |
| /loja/pacote-* (legadas) | ~2.560 impr combinadas | — | UNKNOWN |
| Posts do cluster (poses; 11 fundos; 7 lugares; 7 erros LinkedIn…) | vários com cliques próprios | 38 queries do cluster | UNKNOWN — posts ranqueiam em cauda longa; parcela da head indeterminada |

## 2. Indícios NÃO conclusivos (hipóteses rotuladas)

**H1 — URL legada /loja como principal ranqueadora (CONSISTENTE, NÃO VERIFICADO):**
- (a) SERP pública de hoje (23/09, ver 07): única URL owned no top 5 de "foto profissional" é `/loja?img_picture=o-ensaio_ana-luiza-e-lucas74…` cujo **title servido é "Foto Profissional em SP | Alexandre Machado — Direção de…"** — casamento literal query↔title.
- (b) O title de /foto-profissional atual ("Foto Profissional em São Paulo | Orçamento em 1 Dia") também casa bem — mas a página **não apareceu** na SERP amostrada.
- (c) Posição média 3,92 da query com CTR 0,12%: compatível com SERP saturada por conteúdo de IA (4 dos 5 primeiros resultados de hoje são sobre gerar foto com IA/prompts) — a demanda informacional é absorvida antes do clique, seja qual for a URL ranqueadora.
- **Por que não concluo:** a posição 3,92 é média de TODAS as impressões da query; sem o query×page não sei se a URL em 3,9 é /loja, /, blog ou outra.

**H2 — Home como owner (PLAUSÍVEL, NÃO VERIFICADO):** home é a página com maior autoridade e absorve intenções genéricas (P18A.6R já mostrou a home capturando queries de perfil). Mas a home não apareceu na SERP amostrada de hoje, e seu title não casa com a query. Sem query×page, não há como pesar.

**H3 — /foto-profissional como owner (DESFAVORECIDO PELOS FATOS SEPARADOS, NÃO VERIFICADO):** com ~59 impressões totais no período (todas as queries somadas), a página não poderia receber parcela material das 17.107 impressões da query — a aritmética das dimensões separadas é inequívoca nesse ponto: **a página dedicada não é a ranqueadora principal da head query** (se receber alguma impressão dela, será fração pequena). Este é o único ponto que as dimensões separadas permitem afirmar com segurança.

## 3. Respostas FASE 12 (/foto-profissional)

1. **Qual intenção atual ela captura?** Não determinável com precisão sem top-50 (04). Pelo conteúdo e volume residual: cauda específica (ex.: variações com "orçamento", "são paulo", sub-intenções de serviço).
2. **Quais queries geram impressões nela?** UNKNOWN — coleta preparada em 04.
3. **Existe conflito de intenção?** Sim, estrutural: a intenção head vive em outra(s) URL(s); a página dedicada vive de cauda. Conflito entre legado (title forte, URL fraca) e atual (URL forte, title bom, autoridade baixa ainda).
4. **É página comercial útil mesmo sem ser owner da head?** Sim — GEO 3/3 (citability), converte quando recebe tráfego qualificado; problema é distribuição de impressões, não qualidade.

## 4. Classificações FASE 8 e FASE 15 (provisórias, subordinadas ao query×page)

- PRIMARY QUERY OWNER: **UNKNOWN** (não se aplica limiar arbitrário sem share real)
- CANIBALIZATION para "foto profissional" e variantes: **UNKNOWN** — múltiplas candidatas existem (home, legada, página dedicada, posts), mas a contagem de URLs relevantes por query exige o cruzamento
- LEGACY LEAKAGE: **SUSPEITA NÃO CONFIRMADA** (H1) — a legada aparece na SERP com title exato; o GSC mostra /loja com 1.197 impressões próprias (todas as queries)

## 5. Decisão (FASE 18)

**G — INCONCLUSIVO — GSC QUERY×PAGE NÃO DISPONÍVEL.** Hipóteses H1–H3 registradas com pesos de evidência; nenhuma promovida a conclusão. O próximo passo (08) é a coleta de 2 minutos que resolve tudo.
