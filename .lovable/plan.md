# Ajustar o corte da foto do hero

## O que está acontecendo

O bloco do hero (`src/components/site/home/HomeHeroNovo.tsx`) fixa a altura da foto em 320px no celular e 560px no desktop, com preenchimento por corte (`object-cover`). A foto original é horizontal (1920 × 1275). Nessas alturas fixas, boa parte do topo e da base da imagem fica de fora — é o corte que você está vendo.

## Mudanças propostas (somente o hero)

1. **Celular (abaixo de 768px)**: mostrar a foto inteira, sem corte, usando a proporção real da imagem (1920/1275) no contêiner. O texto continua abaixo da foto, como já está hoje.
2. **Desktop (a partir de 768px)**: manter a faixa de 560px (o texto fica sobre a foto e precisa de uma faixa horizontal), mas ajustar o ponto de recorte para o centro-superior, de modo que as pessoas/assunto principal não sejam cortados.
3. Manter `width`, `height`, carregamento prioritário, `srcSet` e a camada de contraste exatamente como estão, para não regredir estabilidade de layout nem desempenho.

## O que não muda

Nenhum outro arquivo, nenhum texto, nenhum link, nenhuma imagem nova, nada de title/meta/canonical/schema.

## Detalhes técnicos

- Arquivo: `src/components/site/home/HomeHeroNovo.tsx` (apenas classes utilitárias da `<img>` e do contêiner).
- Mobile: contêiner com `aspect-[1920/1275]` e imagem `h-auto w-full object-contain` (ou `object-cover` com a mesma proporção — sem corte em ambos os casos).
- Desktop: `md:h-[560px] md:object-cover md:object-[center_30%]`.
- Sem novas dependências, sem mudança de estrutura de títulos.

## Alternativa, caso prefira

Se você quiser a foto inteira também no desktop, o texto deixa de ficar sobre a imagem e passa para uma coluna ao lado (metade texto, metade foto). Diga se prefere esse caminho.
