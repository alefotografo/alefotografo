# Perfil da Empresa no Google — o que dá para fazer no site

## O diagnóstico está desatualizado num ponto

O perfil existe e está verificado. `src/data/reviews.ts` traz a nota real
puxada do Google (4,9 em 144 avaliações) e o identificador do perfil:
`https://maps.google.com/?cid=624227612892811793`. Um perfil não verificado não
acumula 144 avaliações públicas nem aparece no Places.

O que **falta de verdade** é a ligação explícita entre o site e esse perfil:

- `sameAs` do nó `LocalBusiness` em `src/routes/__root.tsx` lista Instagram,
  LinkedIn e o domínio antigo — **não** inclui o perfil do Google.
- `hasMap` aponta para uma busca genérica por coordenadas
  (`maps.google.com/?api=1&query=lat,lon`), não para o perfil do negócio.
- Em nenhuma página o visitante encontra link para ver ou deixar avaliação
  no Google. A página `/depoimentos` usa os textos, mas não cita a fonte
  clicável.

## O que eu vou fazer no site

1. **Fonte única do perfil.** Reaproveitar `googleReviewsSummary.profileUrl`
   como valor canônico do perfil (nada de URL escrita à mão em dois lugares).
2. **Schema.** No nó `#business` do `__root.tsx`: acrescentar o perfil ao
   `sameAs` e trocar `hasMap` para apontar para o perfil. Isso é o sinal que
   liga a entidade do site à ficha do Maps.
3. **Link visível para a fonte.** Em `/depoimentos`, uma linha abaixo da nota:
   "4,9 em 144 avaliações no Perfil da Empresa no Google" com link para o
   perfil (`rel="noopener"`, abre em nova aba) e um segundo link "avaliar no
   Google". Mesma linha, curta, no rodapé de prova social da home.
4. **Checklist de fora do site.** Gravar em `.lovable/gbp-checklist.md` o
   passo a passo do que só você pode fazer dentro do painel: categorias
   (principal Fotógrafo, secundária Fotógrafo comercial), serviços com os
   mesmos nomes das páginas de serviço do site, horário, área de atendimento,
   fotos, perguntas e respostas, links UTM por página de destino, e o
   equivalente no Bing Places. Cada item já ligado à URL do site que deve ser
   usada como destino, para não haver texto novo inventado.

## O que eu não vou fazer

Não vou criar, alterar ou reivindicar perfil no Google ou no Bing — isso exige
sua conta e não é acessível daqui. O checklist é para você executar; posso
revisar depois pelo que aparece publicamente.

## Preciso de você

- O link curto do perfil, se existir (`g.page/...` ou `share.google/...`).
  Se não tiver, uso o `?cid=` que já está no projeto.
- Confirmar se o horário publicado no perfil é o mesmo do schema
  (seg–sex, 09:00–19:00).

## Detalhes técnicos

- `src/data/reviews.ts`: exportar `googleBusinessProfileUrl` e
  `googleReviewUrl` (`.../?cid=...&action=review` ou o link de avaliação que
  você enviar) a partir do valor já existente.
- `src/routes/__root.tsx`: `sameAs` passa a incluir
  `googleBusinessProfileUrl`; `hasMap` passa a usar o mesmo valor.
- `src/routes/depoimentos.tsx` e `src/routes/index.tsx`: linha de atribuição
  com os dois links; sem alterar números, que continuam vindo de
  `googleReviewsSummary`.
- Verificação: `bunx tsgo --noEmit` e `curl` em `/` e `/depoimentos`
  conferindo o `cid` no JSON-LD e no HTML.
