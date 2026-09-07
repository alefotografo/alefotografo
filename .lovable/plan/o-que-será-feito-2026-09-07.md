Trocar "Foto Recordação" por "Foto Lembrança" na página /fotografo-corporativo/foto-impressa-na-hora, mantendo a URL e priorizando SEO.

## O que será feito

1. Manter o slug da URL `foto-impressa-na-hora` e a rota `/fotografo-corporativo/foto-impressa-na-hora` para não perder ranqueamento. Não criar redirecionamento para novo slug.
2. Trocar o título da categoria no catálogo (`src/data/catalog.cats.json`) de "Foto Recordação impressas na hora" para "Foto Lembrança Impressa na Hora".
3. Trocar o subtítulo da categoria para o slogan "Não existe melhor lembrança que uma foto".
4. Atualizar o SEO title e meta description em `src/data/categorySeo.ts` para usar "Foto Lembrança" com acento, mantendo o texto com palavras-chave para eventos corporativos.
5. Revisar o texto longo da categoria em `src/data/catalog.cats.json`, mantendo "foto lembrança" como termo principal e "foto recordação" apenas como sinônimo opcional, para não perder buscas por esse termo.
6. Trocar o mapeamento de autolink em `src/lib/autoLink.tsx` para usar "foto lembrança" como termo principal, mantendo "foto recordação" como termo alternativo.
7. Deixar inalterados os slugs/listagens em `src/data/searchTaxonomy.ts`, `src/routes/portfolio.index.tsx` e `src/lib/legacy-redirects.ts`, já que a URL não muda.
8. Build e verificação visual da página para confirmar H1, subtítulo e slogan corretos.

## Por que a URL fica a mesma

Mudar o slug exigiria redirecionamento 301 e ajuste de sitemap. Como o usuário priorizou o ranqueamento, mantemos `/fotografo-corporativo/foto-impressa-na-hora` e alteramos apenas o título, subtítulo e SEO visível.
