# Otimizar a foto principal da home para celular

## Implementação

1. Gerar `public/img/hero-portrait-mobile.webp` a partir da foto original, com exatamente **480×630 px**, WebP em qualidade 75–80 e tamanho máximo de **30 KB**.
2. Manter a versão WebP desktop em `public/img/hero-portrait.webp` com **1217×1600 px** e criar o fallback solicitado `public/img/hero-portrait.jpg` a partir do JPEG original.
3. Trocar a imagem principal da home pelo `<picture>` especificado:
   - `display: block`, `aspectRatio: "1217 / 1600"` e `width: "100%"` diretamente no `<picture>`;
   - fonte móvel até 768 px com dimensões 480×630;
   - fonte desktop WebP com dimensões 1217×1600;
   - fallback JPEG com carregamento prioritário, dimensões explícitas, `objectFit: cover` e o texto alternativo fornecido.
4. Atualizar a configuração central da foto e preservar os preloads condicionais já existentes para que celular e desktop baixem somente a versão correta.

## Validação

- Confirmar formato, dimensões e tamanho em disco da imagem móvel.
- Executar a checagem de tipos e a compilação do site.
- Abrir a home em larguras móvel e desktop para verificar a imagem carregada, a proporção reservada e a ausência de deslocamento visual.

## Observação

A publicação não faz parte desta alteração; será feita somente mediante pedido explícito.
