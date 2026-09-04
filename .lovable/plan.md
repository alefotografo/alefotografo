# Perfil do Google e Bing Places: o que eu faço e o que só você pode fazer

## O limite, dito com clareza

Criar ou editar o Perfil da Empresa no Google e o Bing Places exige login na
sua conta Google/Microsoft. Não tenho esse acesso e não vou dizer que criei
algo que não criei. Além disso, no caso do Google não há nada a criar: o perfil
já existe e está verificado — acumula 4,9 em 144 avaliações e tem o
identificador `?cid=624227612892811793`, já usado no schema do site.

O que eu posso fazer, e vou fazer nesta rodada, é do lado do site e do
checklist: fixar o horário que você acabou de confirmar (seg–sex 09:00–19:00)
como dado confirmado, garantir que endereço, telefone e site batem em todos os
lugares, e transformar o checklist em algo que você executa em minutos, com
status por item.

## O que muda no site

1. **Horário confirmado.** Registrar no checklist que seg–sex 09:00–19:00 está
   confirmado por você (com a data), e conferir que o
   `openingHoursSpecification` do nó do negócio e das 33 páginas de bairro diz
   exatamente isso. Se houver divergência, corrijo.
2. **Endereço e link canônico.** Conferir que o endereço publicado no schema
   (Alameda Santos, 1165) e o site canônico (`https://www.alefotografo.com.br/`)
   são os mesmos valores que o checklist pede para o painel — um valor, uma
   fonte.

## O que muda no checklist

`.lovable/gbp-checklist.md` passa a ter:

- **Bloco de status no topo**: cada frente com `confirmado` / `pendente no
  painel` / `feito no site`, para você saber o que resta sem reler tudo.
- **Seção "Copiar e colar no painel"**: os campos exatos, em ordem, na forma
  final — nome, categorias, endereço, telefone, horário, site, botão de
  contato, faixa de preço, área de atendimento. Nada para reescrever.
- **Seção do Bing Places**: caminho de importação a partir do Google e os 3
  campos que o Bing costuma perder na importação (categoria, horário, site),
  para conferir depois.
- **Horário marcado como confirmado**, saindo da lista de dúvidas.

O status final que o checklist vai registrar é honesto: "site pronto e
alinhado; preenchimento do painel pendente da sua execução". Se você quiser,
depois que preencher, eu confiro pelo que aparece publicamente na busca e
atualizo o status para concluído com evidência.

## Detalhes técnicos

- Arquivo alterado: `.lovable/gbp-checklist.md` (reescrita das seções de status,
  campos e Bing).
- Verificação: `curl` em `/` e em duas rotas de bairro filtrando
  `openingHoursSpecification`, `Alameda Santos` e o host canônico no JSON-LD,
  mais `bunx tsgo --noEmit` se algum arquivo de `src/` precisar de ajuste.
- Nenhuma alteração de rota, slug ou URL.
