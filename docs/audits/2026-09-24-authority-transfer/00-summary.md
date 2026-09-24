# 00 — Summary — P20A Authority Transfer (Cases → Páginas Comerciais)

Data: 2026-09-24 · Branch: `feat/p20a-authority-transfer` · Base: `origin/main` 624898f

## O que foi feito

Transferência da autoridade dos cases nomeados publicados (P19C) para as
páginas que já são owners orgânicos dos clusters, com zero alteração de
title/meta/H1/slug e zero nova URL.

## Advocacia — owner preservada e fortalecida

URL owner: `/fotografo-corporativo/fotografia-para-escritorios-de-advocacia`
(GSC query×page real: 15 queries do cluster "foto/fotos + advogado/advocacia"
com posições 1,18–7,25 — owner incontestável).

Antes: sem entry em `categoryEditorial.ts` → sem editorial específico e sem FAQ
(não estava no allowlist de fallback de retrato).

Depois: entry completa com 6 blocos editoriais (resposta direta, o que
produzimos, usos, **case Rocha & Queiroz como prova nomeada**, foto+vídeo,
como contratar) + 6 FAQs específicas (visível e schema da MESMA fonte —
sync 6/6 validado). TITLE/META/H1/canonical/galeria intactos.

## Logística — owner preservada e fortalecida

URL owner: `/fotografo-corporativo/fotografia-de-logistica`

- Ajuste mínimo (1 parágrafo) no direct answer: primeira frase agora nomeia
  "transportadoras e operadores logísticos" (o que é + para quem na frase de
  abertura). Restante do parágrafo e dos 3 blocos seguintes preservado.
- Prova ATIVA movida para o primeiro bloco (1 frase contextual + link para o
  case). Bloco "Projetos em logística" (com link de case da P19C) preservado.
- 5 FAQs existentes preservadas. TITLE/META/H1/galeria intactos.

## Conversão

`/fotografia-para-advogados` reforçada como rota de contratação: recebe link
contextual "fotografia profissional para advogados" no bloco Como contratar da
galeria owner (além do caseLinks da P19C). Nenhum conteúdo reescrito.

## Canibalização — controle explícito

Nenhuma página nova; nenhuma query re-alvo. Mapa intent→owner em
`03-intent-owner-map.csv`. As páginas de serviço/conversão e as galerias
mantêm papéis distintos (ver `01` e `02`).

## Locks

Cases (ATIVA/R&Q/blog) intactos · Home intacta · Masonry/SmartImage intactos ·
Header/menu intactos · FAQ global intacta · arquitetura de vídeo intacta ·
zero title/meta alterado em qualquer URL.

## Arquivos alterados

`src/data/categoryEditorial.ts` (único arquivo de código) +
`docs/audits/2026-09-24-authority-transfer/*`.

## Validação

tsc PASS · build PASS · SSR: editorial+FAQ advocacia 6/6 sync, logística prova
cedo + direct answer + FAQs preservadas · nenhum componente alterado.
