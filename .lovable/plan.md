# Correção da linkagem interna (itens 1 a 3 do relatório)

Objetivo: acabar com as 81 páginas órfãs e equilibrar a autoridade entre as páginas comerciais, sem mexer em slug, canonical ou conteúdo editorial.

## 1. Vídeos órfãos (65 URLs)

- `/videos` passa a listar **todos** os vídeos com link real para `/videos/$slug` (hoje a listagem não gera links rastreáveis para cada vídeo).
- Em cada `/videos/$slug`, bloco "Outros vídeos" com 6 links para vídeos do mesmo tema — cria malha lateral entre eles.

## 2. Posts órfãos (15 URLs) e `/portfolio`

- `/blog` com paginação/listagem completa em vez de recorte parcial, garantindo que todo post receba ao menos 1 link interno.
- Bloco "Continue explorando" (componente `RelatedLinks`, já existente) nos posts que hoje não o exibem.
- `/portfolio` ganha link no rodapé (bloco Fotografia) e na home, saindo do estado órfão.

## 3. Equilíbrio das páginas comerciais

- Incluir no rodapé as duas páginas hoje sub-linkadas: `/fotografo-empresarial` e `/fotografo-de-feira-de-negocios`.
- Adicionar links contextuais para essas duas páginas dentro de `/servicos` e das páginas comerciais irmãs (eventos corporativos e fotos corporativas), com âncoras descritivas, não genéricas.

## Fora do escopo agora

- Canibalização (4 pares) fica para um passo seguinte, porque exige decidir qual URL é a principal e qual apoia — te apresento a proposta antes de mexer.
- Nenhum slug, redirect, title, description ou canonical é alterado neste passo.

## Detalhes técnicos

- Arquivos tocados: `src/components/site/Footer.tsx`, `src/routes/videos.index.tsx`, `src/routes/videos.$slug.tsx`, `src/routes/blog.index.tsx`, `src/routes/blog.$slug.tsx`, `src/routes/portfolio.index.tsx`, `src/routes/servicos.tsx`, `src/routes/eventos-corporativos.tsx`, `src/routes/fotos-corporativas.tsx`.
- Navegação sempre com `<Link to>` + `params` (nunca `<a href>` interpolado), para preservar SSR e preload.
- Verificação final: recrawl do grafo de links interno para confirmar 0 páginas órfãs antes de publicar.
