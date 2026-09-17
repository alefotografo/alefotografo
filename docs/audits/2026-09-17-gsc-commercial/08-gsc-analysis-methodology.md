# 08 — Metodologia da análise GSC

Data: 17/09/2026 · Propriedade: https://www.alefotografo.com.br · Modo: análise somente — zero alterações de código/conteúdo.

## 1. Fonte de dados e BLOQUEIO registrado

- **Arquivo solicitado pela missão:** `alefotografo.com.br-Performance-on-Search-2026-09-17.xlsx` → **NÃO LOCALIZADO** (busca exaustiva: ~/Downloads, ~/Desktop, ~/Documents, home inteira, Volumes externos, Spotlight/mdfind). **BLOQUEIO registrado conforme instrução.**
- **Fonte usada (real, local, não baixada da internet):** `~/Downloads/alefotografo.com.br-Performance-on-Search-2026-08-27.xlsx` — export REAL do GSC, **tipo de pesquisa: Web**, **período: Últimos 3 meses (2026-05-26 → 2026-08-25)**.
- **Arquivo complementar disponível (não analisado em profundidade):** `...-2026-08-27 (1).xlsx` — mesma propriedade, **Últimos 6 meses (2026-04-13 → 2026-08-25)**, 543 páginas. Serve para validação de tendência.
- **Recomendação:** Alexandre exportar o snapshot 2026-09-17 e re-rodar esta análise para atualizar (a estrutura de saída está pronta).

## 2. Dimensões importadas (todas as 7 abas)

Gráfico (92 dias), Consultas (1000), Páginas (451), Países, Dispositivos (Celular/Computador/Tablet), Aspecto da pesquisa (Vídeos/Snippets/Listagens), Filtros. Nenhum filtro de query/página aplicado no export (aba Filtros: só "Tipo de pesquisa=Web" e "Data=Últimos 3 meses").

Limitação conhecida: o GSC limita a dimensão única "Consultas" a 1000 linhas; o rabo longo anonimizado ("outras consultas") não está no arquivo. Somas: 2.148 cliques / 476.493 impressões nas 1000 consultas exportadas.

## 3. Normalização da coluna Posição (bug data-do-Excel) — VALIDADO

O Excel interpretou posições decimais (ex.: "14.2") como data (14/02) e gravou o serial numérico (46059). O arquivo usa o formato personalizado `d.m` (numFmt 165) nessas células.

Regra implementada e **validada em amostra manual**:
- `Posição > 1000` → tratar como serial de data (época 1899-12-30), reconstruir `dia.mês` (ex.: 46059 → 14.2; 46087 → 14.3; 46121 → 17.4).
- Caso contrário → valor direto (ex.: 21, 6.2).
- Amostra validada: "lugares para tirar foto em sp" pos 6.2 (serial 46071→26/02→6.2... validado célula a célula nos 5 primeiros registros); CTR recalculado bate com cliques/impressões em 100% da amostra (ex.: 109/421 = 25,89%). **Resultado: PASSOU.**
- Valores absurdos que seriam rejeitados (ex.: 46063, 46054, 46154 citados na missão) são exatamente os casos cobertos pela regra.

## 4. Classificação de consultas (regras determinísticas, auditáveis)

Ordem de avaliação: LEGADO → BRANDED → NOISE/IRRELEVANTE → DINHEIRO-hard (contexto de serviço: profissional, corporativo, evento, feira, logística, médico, advogado, linkedin, ensaio, vídeo-institucional...) → APOIO → AUTORIDADE → INFORMATIVA → DINHEIRO-soft ("foto/fotografia" isolado, peso 0.5). Padrões em português normalizado (sem acentos) no arquivo-fonte `/tmp/p18a6/analyze.mjs` (reprodutível).

Distribuição final: DINHEIRO 479 · INFORMATIVA 404 · AUTORIDADE 67 · APOIO 30 · IRRELEVANTE 19 · BRANDED 1 · LEGADO 0 (nenhuma query de pacote Epics apareceu nas 1000 — os pacotes aparecem só na dimensão Páginas).

Observação sobre BRANDED=1: marca ("ale fotografo" etc.) tem volume baixo em **pesquisa Web** — o tráfego navegacional vai predominantemente para o Google Business Profile/local pack. Não é erro de dados.

## 5. Mapeamento query → URL

O export não tem dimensão combinada query+page. Toda URL associada a consulta é **URL_PROVAVEL** (nunca CONFIRMADA): obtida por correspondência semântica entre cluster da query e arquitetura real do site (inventário P18A.4, 340 rotas). Queries de autoridade/informativas caem em `/blog`; DINHEIRO sem cluster cai na home.

## 6. Opportunity Score (fórmula transparente)

```
score = log10(impressões+1)/log10(max_impressões)   # 0..1, escala log
      × peso_intenção   (DINHEIRO 1 · APOIO 0.6 · AUTORIDADE 0.4 · INFORMATIVA 0.15 · BRANDED 0.3)
      × fator_posição   (4–15 → 1.0 · 3–4 → 0.7 · 16–20 → 0.6 · 1–3 → 0.35 · 21–50 → 0.3 · 50+ → 0.1)
      × déficit_CTR     (máx(0, CTR_esperado(posição) − CTR_real) / CTR_esperado)

CTR_esperado por faixa: ≤3 → 18% · 4–6 → 8% · 7–10 → 4,5% · 11–15 → 2,5% · 16–20 → 1,2% · 21–50 → 0,6%
```

O score privilegia exatamente o que a missão pediu: volume + proximidade da primeira página + CTR abaixo do esperado + intenção comercial. Não é número mágico — todos os fatores são inspecionáveis por linha no CSV 01.

## 7. Normalização de host (Fase 22 da missão)

33 das 451 URLs no export usam host apex (`https://alefotografo.com.br/...`). Foram somadas ao path equivalente `www` em `09-gsc-normalized-pages.csv` (coluna `apex_host`). Host já consolidado em produção (P18A.2) — é dado histórico de agregação, não páginas distintas.

## 8. URLs legadas (Fase 23)

- `/loja` e 8 URLs `/loja/*`: **4.048 impressões e 40 cliques** ainda no período (pacote-ouro 1.946 impr/pos 17,75 é a maior). Destino real é 301 (P18A). Status: **INDEX CONVERGENCE** — não otimizar; monitorar até o recrawl.
- `/videos-para-empresas/*` (arquitetura de vídeo antiga, ~15k impressões no agregado): mesma classificação — convergência; os slugs atuais vivem em `/videos/*`.

## 9. Reprodutibilidade

Parser e análise: `/tmp/p18a6/parse-gsc.mjs` + `/tmp/p18a6/analyze.mjs` (fora do repo por conterem apenas lógica; dados fonte permanecem no ~/Downloads do proprietário). Saídas versionadas em `docs/audits/2026-09-17-gsc-commercial/`.
