# Acelerar as capas do /blog

## O que já está no lugar

Os cards do blog usam o `SmartImage`, e o `SmartImage` já gera as URLs pelo mesmo módulo (`src/lib/img.ts`) que o hero e os segmentos passaram a usar — ou seja, as capas do blog **já** vão pelo otimizador do próprio domínio (`/api/public/img`), com cache permanente na borda. Não há proxy externo sobrando aqui.

O que ainda está desperdiçando bytes e tempo são os parâmetros de pedido em `/blog` e no post:

- Card do blog: a imagem base é pedida em **768px** de largura, mas o card ocupa no máximo ~400px no layout. A variante base é a que entra no HTML e a que muitos navegadores baixam.
- As 3 primeiras capas estão marcadas como prioritárias (`priority`), então três downloads grandes competem entre si logo no início.
- O `srcset` inclui um degrau de 900px que nenhum slot do grid usa no /blog.
- A seção "Índice — todos os artigos" e a lista longa montam junto com a página, sem adiamento.

## Ajustes propostos

1. **Pedir o tamanho certo no card**: base 400px em vez de 768px, e degraus de `srcset` limitados a 400/640 (cobre telas 2x do slot real de ~400px). Mesmo enquadramento, mesma nitidez, bem menos bytes por card.
2. **Uma única capa prioritária**: só o primeiro card entra como prioritário; os demais ficam com prioridade baixa e carregamento adiado — assim a primeira foto visível aparece antes.
3. **Reservar proporção** nos cards (16/10, já usada pelo contêiner) também na imagem, para o adiamento ficar mais preciso e sem risco de salto.
4. **Adiar o bloco do índice completo** com o `LazySection` já existente, com altura reservada — os links continuam no HTML servido (importante para SEO), apenas montam quando chegam perto da tela.
5. **Capa do post individual**: manter prioritária (é o LCP da página), mas alinhar `srcset`/`sizes` à largura real de 768px do texto, sem gerar variantes maiores que isso.

## O que não muda

URLs, slugs, títulos, meta descriptions, canonical, structured data, RSS, sitemap, textos, ordem dos artigos, a regra "capa correta ou nenhuma capa" e a curadoria das imagens.

## Detalhes técnicos

- `src/routes/blog.index.tsx`: `baseWidth`, `widths`, `priority` e `placeholderRatio` do `SmartImage`; `LazySection` em volta da seção do índice.
- `src/routes/blog.$slug.tsx`: `widths` da capa e das imagens do corpo alinhados a 768px.
- `src/lib/img.ts` e `/api/public/img` permanecem como estão.

## Validação

- Typecheck.
- `/blog` HTTP 200, contagem de artigos intacta, capas 200 pela rota otimizada.
- Comparação antes/depois: número de requisições de imagem e bytes totais em `/blog`.
- Desktop 1280px e mobile 390px: sem corte, sem overflow, sem CLS, console sem erros.
