# Imagens: prioridade do hero e dimensões explícitas

## Estado atual (verificado)

Boa parte do pedido já está no site:

- Todas as 10 páginas de serviço, home, `/sobre`, `/quem-e-o-ale`, `/foto-profissional`, `/fotografia-para-clinicas` e `/videos` já têm o hero com `loading="eager"` + `fetchpriority="high"` e `<link rel="preload">` casando com o `src`.
- O componente compartilhado de galeria (`SmartImage`) já emite `loading="lazy"` + `fetchPriority="auto"` para tudo que não é hero, e `eager`/`high` quando marcado como prioritário.
- Nenhuma imagem abaixo da dobra está sem `loading` — só faltam dimensões em alguns pontos.

O que realmente falta:

1. Logo do cabeçalho e do rodapé: têm `width`/`height`, mas não têm `loading` (o do rodapé deveria ser `lazy`).
2. Seis usos sem `width`/`height`: cards de vídeo na home, grade de galerias em `/quem-e-o-ale`, cards de `ServiceChooser`, e chamadas de `SmartImage` em `Masonry`, `blog/$slug`, `fotografo-corporativo` (index), `portfolio` e `servicos`.

## Sobre "dimensões naturais"

O catálogo de imagens (`catalog.json`, ~milhares de fotos no CDN) não guarda largura/altura, e as fotos são servidas redimensionadas pelo proxy. Não existe fonte de dimensão natural por foto sem baixar cada arquivo.

Como cada imagem é renderizada dentro de um contêiner de proporção fixa com `object-cover` (`aspect-video`, `aspect-[4/3]`, `aspect-[16/10]` etc.), vou declarar `width`/`height` correspondentes à proporção real do contêiner (ex.: `aspect-video` → 1280×720; `4/3` → 1200×900). Isso é exatamente o que elimina o CLS, porque é a caixa que o navegador precisa reservar. Onde a dimensão natural é conhecida (hero da home: 1217×1600, logos), uso o valor real.

## O que será alterado

- `src/components/site/Header.tsx`: logo com `loading="eager"` e `fetchPriority="high"` (é acima da dobra em toda página).
- `src/components/site/Footer.tsx`: logo com `loading="lazy"`.
- `src/routes/index.tsx`: cards de vídeo com `width`/`height` (1280×720).
- `src/routes/quem-e-o-ale.tsx`: grade de galerias com `width`/`height` (1200×900).
- `src/components/site/ServiceChooser.tsx`: cards com `width`/`height` (1200×750).
- `src/components/site/Masonry.tsx`, `src/routes/blog.$slug.tsx`, `src/routes/fotografo-corporativo.index.tsx`, `src/routes/portfolio.index.tsx`, `src/routes/servicos.tsx`: passar `width`/`height` ao `SmartImage` conforme a proporção do contêiner de cada caso.

## Fora do escopo

Nenhuma mudança em `src`, `alt`, classes, textos, schema, canonical ou conteúdo visível. Nenhuma imagem nova, nenhum recorte.

## Verificação

- `bunx tsgo --noEmit`.
- Varredura automática confirmando que todo `<img>`/`SmartImage` do projeto tem `width`, `height` e `loading`.
- Playwright em `/` e `/servicos` (1280×1800) para confirmar que o layout não mudou.
