Tornar a página `/fotografo-corporativo/foto-impressa-na-hora` a página de destino oficial do termo "foto lembrança impressa".

## O que será feito

1. Título de busca (Google): trocar para começar exatamente pelo termo alvo — "Foto Lembrança Impressa na Hora em SP | Alê Fotógrafo" — mantendo até 60 caracteres.
2. Descrição de busca: reescrever começando por "Foto lembrança impressa na hora", com cidade, moldura com a marca e chamada para orçamento, até 158 caracteres.
3. Manter a URL atual, sem redirecionamento, para preservar o ranqueamento já conquistado.
4. Ligações internas (o texto do site vira link automaticamente): priorizar "foto lembrança impressa", "foto lembrança impressa na hora" e "foto lembrança" como termos que apontam para esta página, mantendo "foto recordação" como sinônimo.
5. Reforçar as ligações que chegam à página a partir das páginas de eventos corporativos, feiras de negócios, festa de confraternização e totem fotográfico, para concentrar autoridade no termo.
6. Na busca interna do site, incluir "foto lembranca impressa" e "lembranca impressa" entre as palavras que levam a esta página, e ajustar o rótulo do grupo para "Foto lembrança impressa e totem".
7. Verificar a página publicada localmente: título, descrição, subtítulo e os links internos apontando corretamente.

## Detalhes técnicos

- `src/data/categorySeo.ts`: atualizar `title` e `description` do slug `foto-impressa-na-hora`.
- `src/lib/autoLink.tsx`: reordenar os `extras` do slug com as variações do termo alvo (frases mais longas primeiro já são priorizadas pelo índice).
- `src/data/searchTaxonomy.ts`: novo `label` e novas `keywords` no grupo "Totem e foto impressa".
- `src/data/catalog.cats.json`: garantir que o texto das categorias de eventos/feiras/confraternização/totem contenha a frase "foto lembrança impressa na hora", que o autolink converte em link para esta página.
- Nenhuma mudança de rota, sitemap, canonical ou redirecionamento.
