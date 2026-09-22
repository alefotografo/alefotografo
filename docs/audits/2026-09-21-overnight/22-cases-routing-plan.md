# 22 — CASES — Routing Plan (NÃO implementado)

Data: 21/09/2026 · Base: inspeção de src/routes/ + TanStack Router + sitemap.

## Estado atual das rotas de portfólio

- `/portfolio` → hub editorial (12 blocks; title "Portfólio — Cases de Fotografia Corporativa em SP")
- `/portfolio/$slug` → **301 permanente** para `/fotografo-corporativo/$slug` (portfolio.$slug.tsx:3-11 — comentário "SEO-preserving")
- Hoje `/portfolio/cases` e `/portfolio/cases/qualquer` respondem **301** para `/fotografo-corporativo/cases` (que resolve como galeria ou 404)
- Sitemap: entries manuais em sitemap[.]xml.ts — nada é gerado da route tree; aliases de portfólio deliberadamente excluídos

## Arquitetura proposta

```
/portfolio/cases              → hub de cases (lista: ATIVA, R&Q, All Facilities… futuros)
/portfolio/cases/$slug       → página de case (ativa-logistica; rocha-e-queiroz-advogados; all-facilities-seu-mart…)
```

**Viabilidade técnica:** SIM — segmento estático vence dinâmico no TanStack Router; criar `portfolio.cases.tsx` e `portfolio.cases.$slug.tsx` não conflita com `portfolio.$slug.tsx` (routeTree.gen.ts:236-242 hoje só tem index + $slug sob /portfolio).

## ⚠ Efeito colateral que EXIGE decisão consciente

Criar `/portfolio/cases` muda o status desse URL de **301 → 200**. Impactos:
1. GSC: URLs legadas já redirecionadas voltam a ser página — pode recuperar impressões históricas de "portfolio" (positivo), mas exige monitoramento.
2. O redirect atual envia para `/fotografo-corporativo/cases` — se essa URL recebe tráfego/backlinks hoje, o novo hub deve linkar as galerias relevantes para não perder o fluxo.
3. Slug de case nunca deve coincidir com slug de galeria (35 categorias em catalog.cats.json) — prefixo `/portfolio/cases/` elimina a colisão por segmento.

## Plano de implementação (para a feature branch, quando autorizado)

1. `src/routes/portfolio.cases.tsx` — hub: hero, lista de cases (card com cliente, serviços, 1 imagem, link), FAQ opcional, breadcrumbs.
2. `src/routes/portfolio.cases.$slug.tsx` — loader resolve de um `src/data/cases.json` (padrão catalog.*); notFound() se slug ausente; schema Article+VideoObject; breadcrumbs; "Mais cases".
3. Adicionar as 2 rotas ao array `entries` de `sitemap[.]xml.ts` (prioridade 0.7, mensal) — etapa obrigatória, não automática.
4. `/portfolio` (hub atual): 1 link "Cases" no bloco correspondente; nav de rodapé se houver.
5. Cases seed: ativa-logistica (18), rocha-e-queiroz-advogados (20). All Facilities só após briefing (21).
6. QA: typecheck, build, rotas (200/404 corretos), mobile/desktop, canonical, sitemap renderiza novas URLs, SEO sanity.

## Alternativa conservadora (se o proprietário preferir evitar o 301→200)

Hub de cases em `/cases` (rota raiz nova, zero efeito sobre URLs existentes). Perde o enquadramento "portfólio/cases" (URL semântica forte) mas tem risco zero de lado colateral. **Recomendação: /portfolio/cases** — o efeito 301→200 é gerenciável e o ganho semântico é real; a decisão, porém, é do proprietário (mudança de estado de URLs existentes).

## Não fazer

- Não reaproveitar `/portfolio/$slug` (hoje é 301 por decisão SEO).
- Não criar slugs iguais a categorias de galeria.
- Não publicar sem sitemap + breadcrumbs + canonical.
