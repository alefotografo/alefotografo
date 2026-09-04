# Schema geográfico e Perfil da Empresa no Google

## Parte 1 — schema das páginas de bairro: já está feito

Isto foi implementado na conversa anterior e está no ar em preview. Estado
confirmado agora no código:

- `src/data/bairroSchema.ts` gera, para cada página de bairro, um nó
  `ProfessionalService` com:
  - `geo` do estúdio (Alameda Santos, lat `-23.5640870`, lon `-46.6553543`)
  - `address` completo do estúdio
  - `serviceArea` como `GeoCircle` de 40 km a partir do estúdio
  - `areaServed` com o bairro da página, os bairros vizinhos da mesma região
    e as 6 cidades cobertas (São Paulo, Santo André, São Bernardo do Campo,
    São Caetano do Sul, Diadema, Barueri)
  - `provider`/`parentOrganization` ligados a `.../#business` e
    `founder`/`employee` ligados a `.../quem-e-o-ale#person`
  - horário, faixa de preço, telefone, e-mail e `hasMap` do perfil do Google
- Um segundo nó `Service` com `OfferCatalog` dos 5 serviços por bairro.
- `src/routes/fotografo-corporativo-em.$bairro.tsx` consome esse grafo.

Correção de número: são **33 páginas** de bairro no projeto (35 ocorrências de
slug no arquivo, das quais 2 são de estrutura), não 45. Se você quer chegar a
45, isso é criação de páginas novas — trabalho diferente, e só faço com bairros
que você realmente atende.

Nesta rodada, sobre essa parte, farei apenas **verificação**: conferir o
JSON-LD renderizado nas 33 rotas (presença de `ProfessionalService`,
`GeoCircle`, `geoRadius`, `geo` do estúdio e contagem de `areaServed`) e
registrar o resultado. Nenhuma reescrita de schema.

## Parte 2 — Perfil da Empresa no Google: não é criação, e não é meu acesso

O perfil **já existe e já está verificado**. `src/data/reviews.ts` traz a nota
real puxada do Google — 4,9 em 144 avaliações — e o identificador do perfil
`https://maps.google.com/?cid=624227612892811793`. Um perfil inexistente ou não
verificado não acumula 144 avaliações públicas. Portanto: não há o que criar,
nem verificação por cartão-postal a fazer.

Preencher o painel exige a sua conta Google. Não tenho acesso ao painel e não
vou fingir que preenchi. O passo a passo já está gravado em
`.lovable/gbp-checklist.md`, com categorias, a tabela de serviços apontando
para as 10 páginas de serviço do site, horário, fotos, perguntas e respostas e
a importação para o Bing Places.

O que farei nesta rodada nessa frente, do lado do site:

1. **Estender o checklist** com a seção de páginas por bairro: quais bairros
   declarar como área de atendimento no painel (os 33, agrupados pelas 6
   cidades) e o link de destino de cada um, para que painel e schema digam a
   mesma coisa.
2. **Conferir o alinhamento** entre o que o schema publica e o que o checklist
   pede: telefone, horário, faixa de preço, endereço e cidades. Se houver
   divergência, corrijo no site e aponto no checklist.

## Preciso de você

- Confirmar se o horário no painel é seg–sex 09:00–19:00.
- Confirmar se a área de atendimento declarada no painel são essas 6 cidades
  (ou se há cidade a mais/menos).
- Se quiser as 45 páginas: me diga os bairros faltantes que você atende de
  fato. Não vou inventar bairro para inflar contagem.

## Detalhes técnicos

- Verificação: `curl` em cada rota `/fotografo-corporativo-em/<slug>` filtrando
  o JSON-LD, mais `bunx tsgo --noEmit`.
- Alteração de arquivo prevista: apenas `.lovable/gbp-checklist.md`.
- Nenhuma mudança em `src/data/bairroSchema.ts` a menos que a verificação
  encontre rota sem o nó.
