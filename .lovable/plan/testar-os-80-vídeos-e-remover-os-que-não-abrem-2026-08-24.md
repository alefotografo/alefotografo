# Testar os 80 vídeos e remover os que não abrem

Todos os 80 vídeos do catálogo são do YouTube. Vou verificar cada ID e remover do site os que estiverem indisponíveis (removidos, privados ou com embed bloqueado).

## Como o teste é feito

1. Para cada vídeo, consulta o oEmbed do YouTube (`youtube.com/oembed?url=...`):
   - resposta 200 = vídeo existe e é público
   - 404 / 401 = removido ou privado
2. Reconfirmação: para cada ID que falhar, segunda checagem (thumbnail `hqdefault` + página do vídeo) para não excluir por falha momentânea de rede.
3. Somente IDs que falharem nas duas checagens entram na lista de remoção.

## O que muda

- Remoção das entradas reprovadas de `src/data/catalog.json` (`vids`) e do `VIDEO_ORDER` em `src/data/catalog.ts`.
- Os vídeos removidos deixam de aparecer na página /videos, no portfólio, no showreel e no `sitemap-videos.xml`.
- Se o showreel (ATIVA Log) estiver entre os reprovados, escolho outro institucional válido como destaque.
- Redirect 301 das URLs `/videos/<slug>` removidas para `/videos`, adicionando os slugs em `src/lib/legacy-redirects.ts`, para não gerar 404 em páginas já indexadas.

## Relatório

No final informo: quantos vídeos foram testados, quais foram removidos (título + slug + motivo) e o total que permaneceu no site.

## Detalhes técnicos

- Script de verificação executado uma única vez no sandbox (não fica no projeto), com concorrência limitada e retry.
- Edição de dados apenas em `src/data/catalog.json`, `src/data/catalog.ts` e `src/lib/legacy-redirects.ts`; nenhuma mudança de layout.
