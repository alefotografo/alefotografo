# P20B — Validation

## Diff scope (git diff --name-status vs base e8b8d54)

- M src/routes/fotografo-empresarial.tsx
- M src/routes/fotos-corporativas.tsx
- A docs/audits/2026-09-25-targeted-case-authority/* (este diretório)

Nenhum outro arquivo alterado. ServicePage.tsx, cases, owners P20A, Home, Header, Masonry, SmartImage, categoryImageDims: ZERO.

## Content locks (diff das rotas editadas)

- TITLE: UNCHANGED (ambas)
- META: UNCHANGED (ambas)
- H1: UNCHANGED (ambas)
- canonical: UNCHANGED (ambas)
- FAQ: UNCHANGED (ambas)
- CTA: UNCHANGED (ambas)

## Testes

- npx tsc --noEmit: PASS (exit 0)
- npm run build: PASS (exit 0; únicos warnings: "use client" conhecidos do react-query)

## SSR (dev server local, port 4392)

- /fotografo-empresarial 200 — "ATIVA Logística", "Case comercial", "/cases/ativa-logistica", descrição factual presentes
- /fotos-corporativas 200 — "ATIVA Logística", "Prova real", "/cases/ativa-logistica", "Itapevi e Barueri" presentes
- /fotografia-para-advogados 200 — title preservado, 1 ocorrência "Case comercial" (sem duplicação)

## Viewports (Chrome headless, dev server)

- 390x844 × 3 rotas: PASS (200, zero hscroll, zero imagem quebrada, link de case presente)
- 768x1024 × 3 rotas: PASS
- 1440x900 × 3 rotas: PASS
- Total: 9/9

## Red teams

- Semântico: ATIVA somente em páginas de fit direto (empresarial, fotos-corporativas); nenhuma página não relacionada recebeu case; R&Q não duplicada; nenhum claim inventado.
- SEO: title/meta/H1/canonical/redirect/sitemap/llms/Home/cases/owners/galerias/Header/ServicePage — todos UNCHANGED.
