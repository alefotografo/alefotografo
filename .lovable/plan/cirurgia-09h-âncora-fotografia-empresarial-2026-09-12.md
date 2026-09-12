# Cirurgia 09H — Âncora "fotografia empresarial"

## Verificação /fotografo-empresarial

- TITLE: "Fotógrafo Empresarial em SP | Pessoas no Trabalho"
- H1: "Fotógrafo empresarial em São Paulo para equipe, escritório e operação"
- META: "Imagens de gente trabalhando em São Paulo: equipe, liderança, escritório e operação…"
- CANONICAL: própria (`SITE_ORIGIN + /fotografo-empresarial`)
- Intenção: fotografia empresarial / produção fotográfica para empresas. COMPATÍVEL: SIM.

## Alteração

Um arquivo: `src/lib/autoLink.tsx`, uma linha.

1. Linha 62: remover `"fotografia empresarial"` dos extras de `fotografo-profissional-em-sao-paulo` (fica só `"fotógrafo profissional"`).
2. Em `PILLAR_PAGES`: adicionar entrada `{ path: "/fotografo-empresarial", phrases: ["fotografia empresarial"] }`.

Resultado: "fotografia empresarial" → /fotografo-empresarial; "fotógrafo profissional" → /fotografo-corporativo/fotografo-profissional-em-sao-paulo (inalterado). Nenhuma outra regra tocada.

## Outras âncoras apontando para fotografo-profissional-em-sao-paulo

Somente referências estruturais (não links com âncora textual): `servicos.tsx` e `portfolio.index.tsx` (cards de galeria, usam título atual "Fotógrafo profissional em São Paulo" — compatível), `searchTaxonomy.ts`, `legacy-redirects.ts`, `categorySeo.ts`, `categoryEditorial.ts`. Nenhuma âncora "fotografia empresarial" fora do autoLink.

## Validação

- `/fotografo-empresarial` e a galeria respondem 200.
- Typecheck (`tsgo`) passa.
- Nenhum redirect criado; Home, sitemap, robots, canonical, schemas intocados.
