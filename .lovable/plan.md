# Ajustar o corte da foto do hero

## O que está acontecendo

O hero fixa a altura da foto em 320px no celular e 560px no desktop e preenche por corte. Como a foto é horizontal (1920 × 1275), topo e base ficam de fora — é o corte que você está vendo, mais visível no celular.



## Medidas ideais

- **Desktop (acima de 1024px)**: faixa de 1920 × 640 px (proporção 3:1), altura entre 560 e 640 px. É a faixa que acomoda o texto sobre a foto sem cortar rostos.
- **Tablet (768–1024px)**: mesma faixa, altura 440 px.
- **Celular (abaixo de 768px)**: 1080 × 810 px (proporção 4:3), altura ~300 px na tela.
- A foto atual tem 1920 × 1275 (3:2): no desktop ela sempre vira faixa recortada, no celular aparece praticamente inteira.

## Mudanças propostas (somente o hero)

1. **Celular**: proporção 4:3 no contêiner, com o recorte centrado no assunto — sem corte agressivo de topo e base como hoje.
2. **Desktop**: manter faixa de 560–640px com ponto de recorte no centro-superior, para as pessoas não serem cortadas.
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
