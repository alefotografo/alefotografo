# Avaliações no schema: o que já existe e o que realmente falta

## Verificação antes do plano

Li o código antes de planejar. O diagnóstico do relatório está desatualizado em parte:

- `src/routes/__root.tsx` (linha 206) já declara `aggregateRating` no nó do negócio
  (`#business`), em **todas** as páginas do site — valores reais: nota 4,9 com 144
  avaliações, vindos de `src/data/reviews.ts`.
- `src/routes/depoimentos.tsx` já declara `AggregateRating` + um array `review`
  com autor, data, nota e texto de cada depoimento.
- `src/data/reviews.ts` já tem 5 avaliações reais do Perfil da Empresa no Google,
  com `reviewSchema` pronto (mas hoje não usado).

Ou seja: não é verdade que "não há AggregateRating". O que a auditoria acertou é
que a home mostra a seção de depoimentos sem nenhum `Review` marcado, e existe um
problema mais grave que ela não viu.

## O problema real: dados de avaliação contraditórios

`src/routes/fotografo-corporativo-em.$bairro.tsx` (linhas 48-50) publica um
`AggregateRating` fixo de **5.0 com 87 avaliações** — em 33 páginas de bairro.
Isso contradiz o 4,9/144 declarado no restante do site. Números conflitantes para
a mesma entidade são exatamente o tipo de sinal que faz o Google desconsiderar a
marcação e que impede uma IA de tratar a nota como fato verificável.

## O que vou mudar

1. **Unificar a nota**: as 33 páginas de bairro passam a usar
   `aggregateRatingSchema` (fonte única em `src/data/reviews.ts`), eliminando o
   5.0/87 inventado. Uma nota, um número, em todo o site.
2. **Adicionar os objetos `Review`** ao nó `#business` do `__root`, usando o
   `reviewSchema` já existente (5 avaliações reais, com autor, data, nota e
   texto). Assim toda página carrega nota agregada + avaliações individuais, sem
   duplicar entidade.
3. **Evitar duplicidade em `/depoimentos`**: como o nó do negócio passa a trazer
   `review`, a página de depoimentos referencia o mesmo `@id` em vez de criar um
   segundo conjunto de avaliações para a mesma entidade.
4. **Publicar** para que a marcação chegue ao endereço público, e conferir no
   teste de resultados ricos.

## Expectativa honesta sobre as estrelas

O Google **não exibe estrelas** para avaliações que o próprio site publica sobre
si mesmo (`LocalBusiness`/`Organization`) — é política explícita dele, chamada de
"self-serving reviews". A marcação continua valendo, e muito, para:

- motores de IA, que leem o JSON-LD e passam a ter nota, contagem e textos
  atribuídos a autores;
- consistência de entidade entre site e Perfil da Empresa no Google.

As estrelas no resultado de busca vêm do Perfil da Empresa no Google, não do
schema. Para isso o caminho é acumular avaliações lá — o site já linka o perfil na
seção de depoimentos. Se quiser, depois posso adicionar um pedido de avaliação
mais visível (pós-entrega, rodapé ou página de obrigado).

## Detalhes técnicos

- Arquivos tocados: `src/routes/__root.tsx`, `src/routes/fotografo-corporativo-em.$bairro.tsx`,
  `src/routes/depoimentos.tsx`. Fonte de dados intacta.
- Nenhum texto de avaliação será criado ou alterado: só as 5 reais já publicadas
  por clientes no Google.
- Nenhuma URL, slug ou canonical muda.
- Verificação: `bunx tsgo --noEmit`, JSON-LD conferido no HTML renderizado de
  home, `/depoimentos` e uma página de bairro.
