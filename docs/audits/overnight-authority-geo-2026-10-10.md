# Auditoria — Autoridade Interna + GEO (10/10/2026)

Branch: `feat/overnight-authority-geo-cases` | Build: 355 páginas prerenderizadas ✅ | Locks respeitados ✅

## Resumo executivo

Missão em 5 fases executada com locks de claim: nenhum fato inventado. Duas páginas de case novas (SQ Química, ABRADILAN), interlinking bidirecional serviço ↔ case ↔ blog, docs de readiness para 5 clientes parciais.

## Case readiness

| Cliente | Status | Motivo |
|---|---|---|
| SQ Química | READY → publicado | Vídeo main (unidade Vinhedo) + 4 vídeos relacionados reais no catálogo |
| ABRADILAN | READY → publicado | Fóruns 7º/9º/11º, 15ª Convenção Punta Cana, confraternização, 25 anos — tudo com slugs reais |
| Tecnisa | PARTIAL | Sem assets suficientes; doc em docs/cases-readiness/tecnisa.md |
| Nitriflex | PARTIAL | doc + perguntas p/ Alexandre |
| Fiorde | PARTIAL | doc + perguntas |
| Germed | PARTIAL | doc + perguntas |
| Galena | PARTIAL | doc + perguntas |

## Mudanças (9 arquivos modificados, 2 rotas novas, +docs)

**Novos:** `src/routes/cases.sq-quimica.tsx`, `src/routes/cases.abradilan.tsx` (padrão video-led com Article + FAQ schema, WA contextual, serviços relacionados).

**Hub e indexação:** `cases.index.tsx` (2 cards), `sitemap[.]xml.ts`, `llms[.]txt.ts`.

**Interlinking serviço → case:** fotografo-de-feira-de-negocios (SQ), eventos-corporativos (ABRADILAN), video-para-feiras-e-stands (SQ), video-de-eventos-corporativos (ABRADILAN + Ativa), video-institucional (ambos).

**Blog:** `postBridges.ts` — 2 pontes para o case SQ Química.

**Itens de prova:** cases novos carregam blocos de prova (vídeo, serviços relacionados, FAQ) sem depoimentos inventados.

## Skipped (fora do orçamento/risco)

- Blocos de prova novos em money pages além dos links (orçamento de 10–20 arquivos)
- Cases PARTIALs (dependem de respostas do Alexandre)
- Correção de 2 erros de tsc pré-existentes em `contato.tsx` (`toolparamdescription` — de trabalho anterior WebMCP; build não é afetado)

## Red Team (locks)

- Home title/meta/H1: intactos (diff vazio em index/home) ✅
- URLs/slugs/canonicals/robots/sitemap estrutura: intactos ✅
- Palavras proibidas: ausentes ✅
- Voz institucional: mantida ("produzimos", "nossa equipe") ✅
- Claims: 100% com slug/fato verificável no repositório ✅

## Canibalização / GEO

- Sem canibalização: novos cases são entidades distintas (indústria química × associação farmacêutica), âncoras variadas.
- GEO: llms.txt atualizado com os 4 cases; FAQ schema nas novas páginas; próximo passo sugerido: blocos de prova dedicados nas money pages quando os cases PARTIALs virarem READY.
