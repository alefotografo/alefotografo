# 06 — Validation

## Executado (dev local, branch feat/p20a-authority-transfer)

- `npx tsc --noEmit` → exit 0
- `npm run build` → exit 0, zero erros

## Rotas validadas (SSR)

### /fotografo-corporativo/fotografia-para-escritorios-de-advocacia
- TITLE: "Fotografia para Escritórios de Advocacia em São Paulo" — UNCHANGED
- META: "Fotos para escritórios de advocacia em São Paulo: retratos de sócios,
  equipe e ambientes com sobriedade e autoridade para site, LinkedIn e
  imprensa." — UNCHANGED
- H1: "Fotografia para escritórios de advocacia" — UNCHANGED
- Editorial novo: 6 blocos H2 presentes (resposta direta / retratos-equipe-
  ambientes / usos / Case real Rocha & Queiroz / foto+vídeo / como contratar)
- Links: case R&Q (2), /depoimentos, /video-institucional,
  /fotografia-para-advogados — presentes
- FAQ visível 6 = FAQPage schema 6 — sync 6/6 exato
- Galeria intacta (61 imagens da categoria); nenhuma imagem rql/adv atribuída
  a R&Q
- canonical/slug/schema base: inalterados

### /fotografia-para-advogados
- Conteúdo NÃO alterado (somente validado): caseLinks R&Q presente e visível
- Papel: conversão (formatos, prazos, orçamento)

### /fotografo-corporativo/fotografia-de-logistica
- TITLE: "Fotografia de Logística em SP | Armazém e Frota" — UNCHANGED
- H1/canonical/galeria — UNCHANGED
- Direct answer ajustado (mínimo): primeira frase nomeia transportadoras e
  operadores logísticos
- Prova ATIVA no primeiro bloco com link para /cases/ativa-logistica
- Blocos "Para onde vão as imagens", "Como planejamos", "Projetos em
  logística" — PRESERVED
- 5 FAQs existentes — PRESERVED

## Locks confirmados

Cases/blog/Home/Masonry/SmartImage/Header/menu/FAQ global/arquitetura de
vídeo: fora do diff (arquivo único de código alterado: categoryEditorial.ts).

## Responsividade (headless Chrome)

390px / 768px / 1440px nas rotas advocacia-owner, logística-owner e
/fotografia-para-advogados: sem overflow horizontal, sem erro JS (registro da
execução em entrega).
