# 3 novos artigos no blog + validação de llms.txt, sitemap e robots

## O que já está confirmado no projeto

- Os 3 slugs pedidos ainda não existem no catálogo (180 registros hoje, 152 publicados).
- Os posts vivem em `src/data/catalog.json` e são servidos pela rota `/blog/$slug`; entrar ali já os coloca automaticamente no `/blog`, no `sitemap.xml`, no RSS e na busca interna.
- O sitemap já gera uma URL por post publicado e uma por bairro (`/fotografo-corporativo-em/[slug]`) — nada de lista manual a atualizar.
- **Limitação relevante:** hoje cada item de `body` é renderizado como um `<p>` simples. Nenhum dos 180 posts usa `##`, `- ` ou `**`. Como os 3 textos novos têm subtítulos, listas e negrito, o renderizador precisa passar a entender esses blocos — senão o markdown apareceria como texto cru na tela.
- As imagens inline hoje usam o `alt` como legenda; não existe campo de crédito.

## O que será feito

### 1. Renderizador de conteúdo (markdown leve)

No componente do post, trocar o `<p>` único por um renderizador de blocos que reconhece:

- `##` e `###` como subtítulos (h2/h3, com a tipografia do site)
- `- ` como lista com marcadores
- `---` como separador
- `**negrito**`, `*itálico*` e links `[texto](url)`
- parágrafos normais, que continuam passando pelo `autoLink` atual

Parágrafo comum sem marcação renderiza exatamente como hoje, então os 180 artigos existentes não mudam de aparência.

### 2. Crédito das imagens

Adicionar um campo opcional de crédito às imagens do post (hero e inline). A legenda passa a exibir o alt e, embaixo, `Foto: [Autor] / Unsplash` em itálico. Imagens sem crédito continuam como estão.

### 3. Os 3 artigos

Cada um entra com slug, título, meta description, data, capa (hero) e corpo completo, com as imagens exatamente nas posições marcadas e os créditos indicados:

| URL | Hero | Imagens inline |
| --- | --- | --- |
| `/blog/como-se-preparar-para-ensaio-fotografico-corporativo` | Alex Suprun | Marcus Loke, Randy Fath |
| `/blog/foto-para-linkedin-o-que-realmente-funciona` | Christian Buehner | LinkedIn Sales Solutions |
| `/blog/o-que-e-imagem-pessoal-e-por-que-ela-importa-para-profissionais` | Annika Palmari | Diego PH |

As URLs do Unsplash são usadas exatamente como fornecidas. Datas: 01, 02 e 03 de setembro de 2026 (um artigo por dia, para não empilhar três publicações no mesmo dia no topo do blog).

Uma correção pontual de conteúdo no artigo 3: a frase "Em 2024, sua imagem pessoal começa online" fica "Hoje, sua imagem pessoal começa online", para o texto não envelhecer.

Ajuste ao contexto do site: o rodapé de cada artigo aponta para `/contato` e para as páginas de serviço internas em vez de repetir o link cru para o domínio, seguindo o padrão dos outros posts.

### 4. Validações finais

- `/llms.txt`: status 200, `text/plain`, conteúdo íntegro, e a tag `<link rel="llms.txt">` presente no head das rotas (inclusive nos 3 artigos novos).
- `/robots.txt`: confirma `Allow: /`, os únicos bloqueios em `/auth` e `/admin`, a linha `Sitemap:` e a referência ao llms.txt — ou seja, blog e bairros indexáveis.
- `/sitemap.xml` e `/sitemap-index.xml`: contagem de URLs de blog (deve subir de 152 para 155, com os 3 novos slugs presentes) e as 33 URLs de bairro.
- Conferência visual dos 3 artigos no navegador (subtítulos, listas, imagens e créditos), mais typecheck.

## Detalhes técnicos

- `src/lib/markdownBlocks.ts` (novo): parser de blocos + componente de inline, reutilizando `autoLink` nos parágrafos.
- `src/routes/blog.$slug.tsx`: usa o novo renderizador no loop de `body` e exibe crédito nas `figure`.
- `src/data/catalog.ts`: campo `credit?: string` em `images` e `cover_credit?: string | null` na interface `Post`.
- `src/data/catalog.json`: os 3 registros novos.
- Nada muda em slugs, URLs ou capas existentes.
