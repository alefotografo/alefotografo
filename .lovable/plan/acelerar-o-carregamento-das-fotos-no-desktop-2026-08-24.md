# Acelerar o carregamento das fotos no desktop

## O que está acontecendo

As páginas de galeria (`/fotografo-corporativo/<categoria>`) montam **todas** as fotos da categoria de uma só vez. Verificado no catálogo: arquitetura e interiores tem 189 fotos, confraternização 124, totem 118, médicos 105, retrato corporativo 83. No desktop o grid usa 3 colunas em layout `columns` do CSS, então o navegador precisa medir tudo antes de decidir o que é "fora da tela" — o resultado prático é o navegador disparar dezenas/centenas de downloads quase ao mesmo tempo. Cada foto sai por ~20–60 KB otimizada, mas o gargalo é a quantidade simultânea de requisições, não o peso individual.

Além disso as fotos da galeria não informam proporção antes de carregar, então o espaço "pula" e a decisão de lazy-load fica imprecisa, e o desktop está pedindo a versão de 1024 px como base quando cada foto ocupa ~450 px de largura na tela.

## O que vou fazer

1. **Carregar a galeria em lotes**: exibir as primeiras ~24 fotos e continuar carregando automaticamente conforme o visitante rola (com botão "Carregar mais fotos" como alternativa). Nada é removido — todas as fotos continuam disponíveis na mesma URL.
2. **Reservar o espaço de cada foto** com proporção definida e um fundo neutro, para o layout não pular e o navegador acertar o que precisa baixar agora.
3. **Ajustar os tamanhos servidos no desktop**: base de 768 px em vez de 1024 px no grid e remover a variante de 1920 px onde ela nunca é usada, mantendo qualidade visual (o dobro de densidade continua coberto para telas retina).
4. **Antecipar a conexão com o serviço de imagens** (`preconnect`/`dns-prefetch`) para eliminar o atraso da primeira foto.
5. **Aplicar o mesmo carregamento por lotes** nas outras listagens longas de fotos (portfólio e páginas de serviço), quando exibirem mais de ~24 itens.
6. **Medir antes e depois** nas páginas mais pesadas (arquitetura/interiores, confraternização, médicos) e reportar o tempo até a primeira dobra ficar completa.

## Detalhes técnicos

- `src/components/site/Masonry.tsx`: estado de paginação (`visibleCount`, passo de 24) + `IntersectionObserver` num sentinela ao final; `aspect-ratio` no `figure` e `width`/`height` repassados ao `SmartImage`.
- `src/components/site/SmartImage.tsx`: `baseWidth` default 768, `IMG_WIDTHS` sem 1920 no caminho de grid, placeholder de fundo enquanto `loaded === false`.
- `src/lib/img.ts`: ajuste da lista de larguras usada por grids.
- `src/routes/__root.tsx`: `<link rel="preconnect">` para o host de imagens e para o CDN de origem.
- Sem mudanças de conteúdo, rotas, SEO ou schema.
