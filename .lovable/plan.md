# Cirurgia 09E — Consolidação de duplicidades (Lote 1)

Três galerias perdedoras passam a redirecionar 301 para as vencedoras, saem do sitemap e deixam de receber links internos diretos.

| Perdedora | Vencedora |
| --- | --- |
| /fotografo-corporativo/fotografia-industrial | /fotografo-corporativo/fotografia-industrial-em-sp |
| /fotografo-corporativo/fotografo-de-retratos-profissionais | /fotografo-corporativo/banco-de-imagens-para-empresas |
| /fotografo-corporativo/eventos-corporativos | /fotografo-corporativo/fotografo-de-eventos-corporativos |

## 1. Redirects 301

`src/lib/legacy-redirects.ts` — o projeto já tem o mecanismo pronto (`CATEGORY_ALIASES`, aplicado em `src/server.ts` antes do SSR). Acrescentar os três pares ao mapa de aliases.

Para evitar cadeia de redirect, os três slugs também deixam de ser tratados como destino final nas regras derivadas (`/portfolio-do-fotografo/{slug}`, `/category/{slug}`, slug solto): essas regras passam a resolver o alias na mesma resposta, entregando direto a URL vencedora.

`/eventos-corporativos` (página global) continua intacta: ela é verificada antes, na lista de rotas próprias.

## 2. Sitemap

`src/routes/sitemap[.]xml.ts` — a lista de categorias passa a excluir os três slugs perdedores. As três vencedoras permanecem. Nenhuma outra URL muda.

## 3. Links internos (deixam de apontar para as perdedoras)

- `src/routes/fotos-corporativas.tsx` — card "Escritórios, fábricas e operação" e item "Fotografia industrial" passam a apontar para `fotografia-industrial-em-sp` (textos preservados).
- `src/routes/fotografo-corporativo.index.tsx` — a grade de categorias é gerada da lista completa; os três cards perdedores são omitidos da grade (as vencedoras já têm card próprio, então nada desaparece do conteúdo do hub). Title, H1, introdução, FAQ, schema e demais cards ficam intactos.
- `src/routes/foto-profissional.tsx` e `src/routes/fotografia-executiva.tsx` — nas listas de galerias, `fotografo-de-retratos-profissionais` é apenas removido. Trocar por Banco de Imagens seria factualmente incompatível com páginas de retrato.
- `src/data/searchTaxonomy.ts` — nos grupos de busca, os três slugs perdedores são removidos (as vencedoras já constam nos mesmos grupos).

Usos de `cover(slug)` / `catCover(slug)` em `servicos.tsx` e `fotos-corporativas.tsx` são só imagem de capa, não link: permanecem como estão.

## 4. Ponto para registrar (Home congelada)

`src/data/homeCuration.ts` tem o card "Indústria" de Trabalhos Selecionados apontando para `fotografia-industrial`. A Home está congelada por regra, então ele **não será alterado** nesta cirurgia e ficará registrado no relatório como link interno que passa por 301. Se preferir, autorize essa única linha e ele passa a apontar direto para a vencedora.

## 5. Conteúdo exclusivo nas perdedoras (só verificação, sem cópia)

Contagem de fotos das galerias: industrial 72 vs industrial-em-sp 16; retratos-profissionais 55 vs banco-de-imagens 56; eventos-corporativos 73 vs fotografo-de-eventos-corporativos 47. Nada é copiado; a diferença será registrada no relatório final.

## 6. Validação

- 301 permanente nas três URLs, sem cadeia (checagem local com `curl -I`).
- Vencedoras respondendo 200.
- Sitemap sem as perdedoras e com as vencedoras.
- `/eventos-corporativos` intacta.
- `bunx tsgo --noEmit`.

## Fora de escopo

Home, /fotografo-corporativo (conteúdo/metadados), /fotos-corporativas (metadados), /foto-profissional, /fotografo-empresarial, confraternizações, médicos, institucional, blog, páginas locais, footer, robots, canonicals, schemas e conteúdo das vencedoras.
