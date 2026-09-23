# 00 — Executive Summary
## P18Q2 — Foto Profissional Cluster — Query Ownership Real + Proteção + Internal Linking

Data: 2026-09-23 · Branch: `research/p18q2-photo-professional-cluster` · Base: `origin/main` 875ac11

## Conclusão central

A head query **"foto profissional"** (17.107 impressões / 21 cliques / posição 3,92)
é **owned por posts de blog**, não por money pages. Com os dados reais de
query × page obtidos pelo proprietário (GSC autenticado → Windsor.ai), a decisão
da P18Q1 foi atualizada de **G (INCONCLUSIVO)** para **D — BLOG É O OWNER
PRINCIPAL**, com fragmentação entre posts e presença mínima das money pages.

**Nenhuma title/meta/H1/URL foi alterada nesta missão.** Nada foi publicado.

## O que os dados reais mostram

1. **Owner primário:** `/blog/fotografo-5-poses-para-retrato-corporativo`
   (11.958 impressões, posição 2,52). **Owner secundário:**
   `/blog/11-ideias-para-o-plano-de-fundo-de-seu-retrato-profissional`
   (10.469 impressões, posição 7,36).
2. **`/foto-profissional` NÃO sustenta a head query** — 9 impressões no período
   (www+apex). Forçar essa página a "capturar as 17 mil impressões" seria
   erro estratégico. Seu papel correto é **landing comercial transacional**
   (ensaio em São Paulo), o que ela já é bem estruturalmente.
3. **A Home NÃO é owner de "foto profissional"** (314 impressões), mas valida
   seu H1 atual com dados reais: `fotógrafo profissional` (676 impr, pos 7,58),
   `fotógrafo corporativo são paulo` (348 impr, pos 1,84). **H1 preservado.**
4. **CTR 0,12% na posição 3,92 é anormalmente baixo**, mas os títulos não são
   o problema principal: 3 dos 5 posts vencedores já têm títulos curtos
   manuais (`postSeo.ts`) e mesmo assim o CTR individual fica em 0,06–0,08%.
   A hipótese mais forte é de **SERP com features que absorvem clique**
   (image pack, apps/ferramentas, PAA, resultados de IA) + **mismatch de
   intenção** (quem busca a head query quer fazer foto, não contratar).
   Nenhuma alteração de snippet foi feita.

## Proteção (Fase 5 — lock)

Os 5 posts vencedores são SEO assets e ficam **travados contra reformulação**:
sem mudança de URL/slug/H1, sem reescrita de abertura, sem mudança de intenção.
O template atual (`blog.$slug.tsx`) já entrega links internos extensos
(autoLink + LinkHub + PillarLinks + CTA /contato + WhatsApp) — **não é preciso
"adicionar links em massa"**.

## Gaps reais encontrados (e o plano)

1. **Só 1 dos 5 vencedores tem bridge editorial** (`postBridges.ts`). Plano:
   bridges editoriais nos outros 4, com 1–2 links contextuais cada, âncoras
   naturais variadas, apontando para `/fotografo-corporativo/retrato-corporativo`,
   `/foto-profissional-para-linkedin` e `/fotografo-corporativo` — ver
   `06-internal-link-plan.csv`. **Não implementado — aguardando aprovação.**
2. **`/foto-profissional` não recebe link contextual no corpo dos posts**
   (não é categoria nem pillar page do `autoLink`). Recomendação para P18Q3.
3. **`7-dicas...` é o único vencedor cujo title aparece truncado com "…"**
   (fallback longo do catálogo). Classificado MINOR SNIPPET OPPORTUNITY —
   testar depois, nunca agora.
4. **HISTORICAL HOST SPLIT** (www + apex nos dados). Consolidação www já
   implementada; apenas registrar, sem ação.

## Próxima missão

**P18Q3** — papel comercial de `/foto-profissional` (plano em `10-p18q3-plan.md`).
**NEXT TECHNICAL TASK** registrado: FAQ mismatch em `/fotografo-corporativo`
(correção fica para depois deste diagnóstico).

## Red team (resumo)

Nenhuma associação query→page foi inferida por relatórios separados; o
query×page é real e autenticado. Nenhum title/meta alterado. Nenhum post
reescrevido. Nenhuma URL movida. SERP não foi confundida com GSC. Produção
intacta.

Leituras: decisão e evidência → `01` · posts → `04`/`05` · links → `06` ·
CTR → `07` · titles → `08` · papel comercial → `09` · P18Q3 → `10`.
