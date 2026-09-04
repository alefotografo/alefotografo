# Entidade Alexandre Machado: consolidar a Person e preparar o Knowledge Graph

## O que já existe (verificado agora)

O diagnóstico está parcialmente desatualizado. A página `/quem-e-o-ale` **já tem** marcação:

- `src/routes/__root.tsx` publica, em todas as páginas, um nó `Person` completo com `@id` `.../quem-e-o-ale#person`: `name`, `alternateName`, `jobTitle`, `description`, `image`, `url`, `worksFor`, `founderOf`, `knowsLanguage`, 12 itens em `knowsAbout`, `hasOccupation` (com cidade e skills), `address` e `sameAs` (Instagram, LinkedIn).
- `src/routes/quem-e-o-ale.tsx` publica um `ProfilePage` cujo `mainEntity` repete a mesma Person — com **versão reduzida e divergente** (6 itens em `knowsAbout`, endereço escrito à mão, descrição diferente).

Ou seja: o problema real não é ausência de schema Person, e sim **duas definições concorrentes da mesma entidade** e ausência de sinais externos (Wikidata, Google Business Profile) no `sameAs`. Não existe página `/imprensa` no projeto.

## O que fazer

### 1. Fonte única da entidade

Criar `src/data/person.ts` exportando `personSchema` (o nó completo, hoje no root) e usá-lo nos dois lugares:

- `__root.tsx` passa a importar o nó em vez de declará-lo inline.
- `quem-e-o-ale.tsx` mantém o `ProfilePage`, mas com `mainEntity: personSchema` — fim da divergência. Endereço vem de `site.address`, como no root.

### 2. Enriquecer a Person com dados verificáveis

Só o que é fato confirmado (30 anos de carreira, base em São Paulo, atuação):

- `hasOccupation.experienceRequirements` como `OccupationalExperienceRequirements` com `monthsOfExperience: 360` — é assim que o schema.org expressa "30+ anos" (não existe `yearsOfExperience` em `Person`).
- `hasOccupation.occupationalCategory` com o código CBO de fotógrafo.
- `areaServed` (São Paulo e região metropolitana) e `email`/`telephone` a partir de `site`.
- `subjectOf` apontando para os artigos do blog como prova de autoria contínua (via `author` já existente).

### 3. Página de entidade legível por IA

Na própria `/quem-e-o-ale`, um bloco curto de "fatos verificáveis" em HTML semântico (`<dl>`), espelhando o schema: nome, atuação, base, anos de carreira, especializações, perfis oficiais. IAs leem o texto, não só o JSON-LD — hoje esses dados estão dispersos no meio da narrativa.

### 4. `sameAs` externo — preciso de URLs reais

`sameAs` é o que liga o site a uma entidade do Knowledge Graph. Hoje só tem Instagram e LinkedIn. Vale acrescentar, e não invento nenhum: link do Perfil da Empresa no Google (o `maps.app.goo.gl` ou `.../place/...`), YouTube/Vimeo se houver canal, Behance, e o antigo `alefotografos.com.br`. Me passe os que existirem e eu incluo; sem isso mantenho os dois atuais.

### 5. Wikidata (passo manual, fora do código)

Não posso criar item no Wikidata por você — exige conta e a entidade precisa de **fontes de terceiros** para não ser deletada por falta de notabilidade. Entrego um roteiro no repositório (`.lovable/wikidata-alexandre-machado.md`) com: rótulos e descrições em pt/en, declarações a usar (instância de: humano; ocupação: fotógrafo; país de cidadania: Brasil; local de trabalho: São Paulo; site oficial; Instagram/LinkedIn), e a lista do que buscar como referência antes de criar o item. Depois de criado, adiciono a URL do item ao `sameAs` e o Google passa a ter caminho de reconciliação.

## Detalhes técnicos

Arquivos tocados: novo `src/data/person.ts`; `src/routes/__root.tsx` (substituir nó inline por import); `src/routes/quem-e-o-ale.tsx` (mainEntity + bloco de fatos); novo `.lovable/wikidata-alexandre-machado.md`. Sem migração, sem mudança de rota ou slug. Verificação: `bunx tsgo --noEmit` e leitura do JSON-LD renderizado em `/` e `/quem-e-o-ale` para confirmar um único nó `#person` coerente.

Ressalva honesta: schema Person não gera Knowledge Panel por si só. Ele torna a entidade parseável e consistente (ganho real para ChatGPT/Perplexity e para o Google reconciliar autoria); o painel depende de menções externas, que continuam sendo trabalho de imprensa.
