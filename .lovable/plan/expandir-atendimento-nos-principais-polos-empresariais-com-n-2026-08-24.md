# Expandir "Atendimento nos principais polos empresariais" com novos bairros

## Objetivo
Adicionar ~28 novos locais à lista de bairros atendidos, gerando uma landing page SEO dedicada (`/fotografo-corporativo-em/$bairro`) para cada um, com conteúdo único (intro, destaques, landmarks) e schema `Service` + `AggregateRating`. As páginas, o sitemap, o rodapé e as listagens atuais já consomem `src/data/bairros.ts` automaticamente.

## Como funciona hoje
- `src/data/bairros.ts` exporta o array `bairros` e `bairroBySlug`.
- `src/routes/fotografo-corporativo-em.$bairro.tsx` gera a página dinâmica a partir do slug (H1 = `Fotógrafo Corporativo na {nome}`).
- `src/routes/sitemap[.]xml.ts` inclui todos os bairros automaticamente.
- `src/components/site/Footer.tsx` lista todos os bairros.
- `src/routes/fotos-corporativas.tsx` e `src/routes/fotografia-para-clinicas.tsx` mostram `bairros.slice(0, 16)`.

## Mudanças

### 1. `src/data/bairros.ts` — adicionar 28 novos bairros (apenas dados)
Cada entrada: `{ slug, nome, regiao, intro, destaques[4], landmarks[3-4] }`.

Bairros existentes (mantidos, sem alteração de slug/nome): vila-olimpia, faria-lima, avenida-paulista, berrini, itaim-bibi.

Novos (slug · nome · região · preposição):

Capital SP
- pinheiros · Pinheiros · Zona Oeste · em
- jardim-paulistano · Jardim Paulistano · Zona Sul · no
- brooklin · Brooklin · Zona Sul · no
- cidade-moncoes · Cidade Monções · Zona Sul · na
- vila-madalena · Vila Madalena · Zona Oeste · na
- cerqueira-cesar · Cerqueira César · Região Central · na
- consolidacao · Consolação · Região Central · na
- republica · República · Região Central · na
- moema · Moema · Zona Sul · na
- vila-mariana · Vila Mariana · Zona Sul · na
- perdizes · Perdizes · Zona Oeste · em
- lapa · Lapa · Zona Oeste · na
- santana · Santana · Zona Norte · em
- tatuape · Tatuapé · Zona Leste · no
- mooca · Mooca · Zona Leste · na
- agua-branca · Água Branca · Zona Oeste · na
- morumbi · Morumbi · Zona Sul · no
- santo-amaro · Santo Amaro · Zona Sul · em

ABC / Grande SP
- centro-santo-andre · Centro de Santo André · Santo André (ABC) · no
- campestre-santo-andre · Bairro Campestre · Santo André (ABC) · no
- vila-assuncao-santo-andre · Vila Assunção · Santo André (ABC) · na
- centro-sao-bernardo · Centro de São Bernardo do Campo · São Bernardo do Campo (ABC) · no
- rudge-ramos · Rudge Ramos · São Bernardo do Campo (ABC) · em
- baeta-neves · Baeta Neves · São Bernardo do Campo (ABC) · na
- centro-sao-caetano · Centro de São Caetano do Sul · São Caetano do Sul (ABC) · no
- santa-paula-sao-caetano · Santa Paula · São Caetano do Sul (ABC) · na
- centro-diadema · Centro de Diadema · Diadema (ABC) · no
- alphaville-barueri · Alphaville · Barueri (Grande SP) · em

Conteúdo: intro único por local (1-2 frases citando o polo empresarial/segmento local + fotografia corporativa), 4 destaques reutilizados do acervo com ajuste de contexto, landmarks = bairros vizinhos reais.

### 2. Campo `prep` para concordância gramatical (prevenção de "na Centro")
Adicionar campo opcional `prep?: string` (default `"na"`). Bairros como "Centro", "Santo Amaro", "Pinheiros", "Santana", "Perdizes", "Tatuapé", "Morumbi", "Rudge Ramos", "Alphaville" usam preposições corretas (`no`/`em`). Os 5 bairros existentes ficam sem `prep` → continuam com `"na"` (sem regressão SEO nas páginas já indexadas).

### 3. `src/routes/fotografo-corporativo-em.$bairro.tsx` — usar `prep` (3 pontos)
- Título (`head`): `Fotógrafo Corporativo ${b.prep ?? 'na'} ${b.nome}`.
- H1 (linha 75-76): `Fotógrafo Corporativo ${b.prep ?? 'na'} {b.nome}`.
- Links "Fotógrafo na {x.nome}" na seção "Também atendemos" → `Fotógrafo {x.prep ?? 'na'} {x.nome}`.

### 4. Listagens — mostrar mais bairros
- `src/routes/fotos-corporativas.tsx`: `bairros.slice(0, 16)` → `bairros.slice(0, 24)`.
- `src/routes/fotografia-para-clinicas.tsx`: idem.

Sem outras mudanças de código. Sitemap, footer e rotas dinâmicas se atualizam sozinhos a partir do array.

## O que NÃO muda
- Slugs/nomes dos 5 bairros existentes (páginas já indexadas no GSC).
- Sitemap, footer, schema — já são dinâmicos.
- Nenhum novo arquivo de rota (a rota `$bairro` é genérica).
