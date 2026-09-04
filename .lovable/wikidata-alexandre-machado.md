# Roteiro para criar o item de Alexandre Machado no Wikidata

Objetivo: dar ao Google (e às IAs) um identificador externo para reconciliar a entidade "Alexandre Machado / Alê Fotógrafo". O item precisa ser criado por uma pessoa com conta no Wikidata — não pode ser feito pelo site.

## Antes de criar: notabilidade

O Wikidata deleta itens de pessoas sem **fontes de terceiros**. Reúna ao menos 2 destas antes de criar:

- matéria, entrevista ou citação em veículo de imprensa (mesmo regional ou de nicho: Foto&Vídeo Digital, portais de RH, Exame PME);
- crédito de autoria de fotos publicadas em livro, revista, relatório anual ou site institucional de empresa reconhecida;
- prêmio, salão fotográfico ou exposição com registro público;
- participação como palestrante/professor em evento ou instituição com página oficial;
- registro em associação profissional de fotógrafos.

Perfis próprios (site, Instagram, LinkedIn) **não contam** como referência de notabilidade — servem apenas como identificadores.

## Passo a passo

1. Criar conta em wikidata.org e fazer algumas edições pequenas antes (contas novas criando itens de pessoas viva chamam mais atenção de patrulha).
2. Special:NewItem.
3. Preencher rótulo, descrição e aliases:

| Campo | pt-br | en |
| --- | --- | --- |
| Rótulo | Alexandre Machado | Alexandre Machado |
| Descrição | fotógrafo brasileiro, especializado em retrato corporativo | Brazilian photographer specialized in corporate portraiture |
| Aliases | Alê Fotógrafo; Alê Machado | Ale Fotografo |

4. Adicionar as declarações (propriedade → valor):

- instância de (P31) → ser humano (Q5)
- ocupação (P106) → fotógrafo (Q33231)
- país de cidadania (P27) → Brasil (Q155)
- sexo ou gênero (P21) → masculino (Q6581097)
- local de trabalho (P937) → São Paulo (Q174)
- campo de trabalho (P101) → fotografia de retrato (Q1066288)
- site oficial (P856) → https://www.alefotografo.com.br
- nome de usuário no Instagram (P2003) → alefotografo
- ID de perfil no LinkedIn pessoal (P6634) → alefotografo
- descrito na fonte / referência (P1343 ou referências nas declarações acima) → as matérias reunidas acima

5. Em cada declaração factual, adicionar referência: "URL de referência" (P854) + "título" (P1476) + "data de publicação" (P577) da matéria. Declaração sem referência é o que motiva exclusão.
6. Salvar e anotar o Q-ID gerado (ex.: `Q123456789`).

## Depois de criado

Passar o Q-ID: acrescento a URL `https://www.wikidata.org/wiki/Q…` ao array `personSameAs` em `src/data/person.ts`, que alimenta o `sameAs` da Person em todas as páginas. É esse par (site → Wikidata → site) que fecha o ciclo de reconciliação.

## Outros identificadores que ajudam no mesmo objetivo

- Google Business Profile (link `maps.app.goo.gl` ou `.../place/...`) — quando me passar a URL, entra no `sameAs`.
- Canal no YouTube/Vimeo, Behance, ORCID (se houver publicação acadêmica), e o domínio antigo `alefotografos.com.br`.
