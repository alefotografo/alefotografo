# Plano: adicionar JSON-LD global de LocalBusiness/ProfessionalService

## Objetivo
Inserir um bloco `application/ld+json` no `<head>` de todas as páginas do site, usando o `head()` da raiz (`src/routes/__root.tsx`). Nenhum conteúdo visível será alterado.

## Estado atual
- `src/routes/__root.tsx` já publica um JSON-LD global em `head().scripts[0]` com `@graph` contendo `PhotographyBusiness`/`LocalBusiness` (`#business`), `Person` (`quem-e-o-ale#person`) e `WebSite` (`#website`).
- Os dados reais do negócio estão em `src/data/catalog.ts` e `src/data/reviews.ts` (telefone, e-mail, geo, nota agregada, etc.).

## Mudança proposta
1. Em `src/routes/__root.tsx`, adicionar um segundo script JSON-LD (ou integrar no grafo existente, se semanticamente adequado) com a estrutura solicitada:
   - `@type`: `["LocalBusiness", "ProfessionalService"]`
   - `name`: "Alê Fotógrafo Corporativo"
   - `description`: "Fotografia corporativa profissional em São Paulo — retratos, headshots e eventos empresariais."
   - `url`: `https://alefotografo.com.br`
   - `telephone`: `+55-11-91355-0533` (valor real do site, substituindo o placeholder)
   - `image`: URL real da imagem OG do projeto (substituindo o placeholder `/og-image.jpg`)
   - `address`: objeto `PostalAddress` com `addressLocality`, `addressRegion`, `addressCountry` (e `streetAddress`/`postalCode` reais, se mantivermos consistência com o schema atual)
   - `geo`: coordenadas reais do estúdio (`-23.5640870`, `-46.6553543`)
   - `areaServed`: lista de bairros solicitada — `Vila Olímpia`, `Itaim Bibi`, `Faria Lima`, `Paulista`, `Jardins`, `Pinheiros`, `Moema`, `Brooklin`
   - `aggregateRating`: nota `4.9` / `144` avaliações / `bestRating: "5"`
   - `priceRange`: `"$$"`

2. Preservar o JSON-LD existente (não remover o grafo atual).

## Decisão a confirmar
Os placeholders do seu bloco (telefone `XXXX-XXXX` e imagem `/og-image.jpg`) serão substituídos pelos dados reais do projeto. Se você preferir manter os valores exatamente como digitou, me avise.

## Verificação
- Typecheck com `bunx tsgo --noEmit`.
- `curl -s http://localhost:8080/ | rg -o '<script type="application/ld+json">[^<]*LocalBusiness[^<]*ProfessionalService[^<]*</script>'` para confirmar que o novo bloco aparece no HTML.
- Verificar que nenhum outro arquivo foi modificado além de `src/routes/__root.tsx`.
