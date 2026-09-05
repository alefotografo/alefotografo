# Fontes com nome fixo em /public e preload no topo

## O que já está feito hoje (verificado)
- As fontes já são próprias, servidas do próprio site, em woff2, com `font-display: optional` (nada de espera pela fonte).
- A home já tem preload das fontes (DM Sans 400 e Space Grotesk 600) e da foto principal, injetados no cabeçalho global.
- Diferença real: os arquivos hoje entram pelo empacotador e ganham nome com código (hash), então mudam a cada versão.

## O que muda
1. Copiar para `public/fonts/` com nomes fixos: `dm-sans-400/500/600/700.woff2` e também `space-grotesk-400/500/600.woff2` (o título grande da home usa Space Grotesk — deixar só DM Sans fixa não resolveria o título).
2. Em `src/styles.css`, trocar as regras que apontam para os arquivos do pacote por regras que apontam para `/fonts/...`, mantendo `font-display: optional` e adicionando o intervalo de caracteres latinos.
3. No cabeçalho, apontar os preloads para os novos caminhos fixos e incluir DM Sans 500 além de 400, antes dos preloads da foto.
4. Remover os pacotes de fonte das dependências, já que os arquivos passam a viver em `public/`.

## Observação importante sobre a meta
O texto que define o LCP na home é o título, e ele usa Space Grotesk, não DM Sans. Como `font-display: optional` já está ativo, o navegador nunca espera a fonte para pintar o texto — por isso não espero uma queda de 2,6 s para 0,7 s só com esta mudança. O ganho concreto: caminho de rede mais curto e nomes estáveis (melhor cache entre versões).

## Verificação
Build, checagem no celular e desktop de que os arquivos `/fonts/*.woff2` retornam 200, o texto pinta sem salto (CLS 0) e nova medição de TTFB/FCP/LCP no domínio público. Publicação só depois da sua confirmação.

## Detalhes técnicos
- `@font-face` no topo de `src/styles.css`, logo após o bloco de `@import`; nada de `@import` remoto.
- Preloads em `src/routes/__root.tsx` (é onde os preloads da home são montados hoje), usando `crossOrigin: "anonymous"`.
- Remoção de `@fontsource/dm-sans` e `@fontsource/space-grotesk` do package.json após a troca dos caminhos.
- Cabeçalho de cache longo para `/fonts/*` em `public/_headers` se ainda não coberto.
