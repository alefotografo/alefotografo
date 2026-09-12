# Cirurgia SEO 07B — Home

## O que será alterado

1. `src/routes/index.tsx`
   - Title da Home: `Fotógrafo Corporativo em São Paulo | Fotografia Profissional` (sem marca ao final).
   - Meta description da Home: `Fotografia corporativa em São Paulo para empresas, executivos e equipes. Retratos profissionais, eventos, indústria, logística e vídeos corporativos.`
   - `og:title` e `og:description` acompanham o mesmo conteúdo.

2. `src/components/site/home/HomeHeroNovo.tsx`
   - Texto-âncora do link para `/fotografo-corporativo` muda de `Ver portfólio` para `Fotografia corporativa`.

## O que será preservado

- H1, H2, H3 e todo o conteúdo editorial existente.
- Canonical (`https://www.alefotografo.com.br/`), robots (`index/follow`), sitemap, schemas, URLs, slugs, redirects.
- Todos os links internos e seus destinos, exceto o texto-âncora autorizado acima.
- Imagens, alt texts, layout, CSS, componentes visuais, depoimentos, FAQ, blog, footer, menu.

## Validação

- Typecheck.
- Confirmação de que title/description/og foram aplicados apenas na Home.
- Confirmação de que H1, canonical, robots, schemas e URLs permanecem intactos.
