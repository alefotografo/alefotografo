# Ajustar o corte da foto do hero

## O que está acontecendo

O hero fixa a altura da foto em 320px no celular e 560px no desktop e preenche por corte. Como a foto é horizontal (1920 × 1275), topo e base ficam de fora — é o corte que você está vendo, mais visível no celular.



## Medida única

**2400 × 1350 px (16:9)** — uma só foto, com o assunto principal centralizado e folga nas bordas. A partir dela o site faz o recorte automático:

- Celular: mostra o miolo em 4:3, altura ~300 px.
- Tablet: faixa horizontal, altura 440 px.
- Desktop: faixa horizontal, altura 600 px.

A foto atual (1920 × 1275) continua funcionando com essa mesma lógica; a medida 2400 × 1350 é a referência para qualquer foto nova de capa.


## Mudanças propostas (somente o hero)

1. **Celular**: proporção 4:3 no contêiner, com o recorte centrado no assunto — sem corte agressivo de topo e base como hoje.
2. **Desktop**: manter faixa de 560–640px com ponto de recorte no centro-superior, para as pessoas não serem cortadas.
3. Manter `width`, `height`, carregamento prioritário, `srcSet` e a camada de contraste exatamente como estão, para não regredir estabilidade de layout nem desempenho.


## O que não muda

Nenhum outro arquivo, nenhum texto, nenhum link, nenhuma imagem nova, nada de title/meta/canonical/schema.

## Detalhes técnicos

- Arquivo: `src/components/site/home/HomeHeroNovo.tsx` (apenas classes utilitárias da `<img>` e do contêiner).
- Mobile: contêiner `aspect-[4/3]` com `object-cover object-[center_35%]`.
- Desktop: `md:aspect-auto md:h-[600px] md:object-[center_30%]`; tablet `h-[440px]`.
- Sem novas dependências, sem mudança de estrutura de títulos.

## Alternativa, caso prefira

Se você quiser a foto inteira também no desktop, o texto deixa de ficar sobre a imagem e passa para uma coluna ao lado (metade texto, metade foto). Diga se prefere esse caminho.
