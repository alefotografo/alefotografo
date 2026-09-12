# SEO — Cirurgia 09B — /fotografo-corporativo

## Escopo
Alterar SOMENTE a rota `/fotografo-corporativo` (`src/routes/fotografo-corporativo.index.tsx`). A Home e todas as demais páginas permanecem congeladas.

## Alterações

### 1. Title
- De: `Fotos Corporativas por Segmento em São Paulo`
- Para: `Fotógrafo Corporativo em São Paulo | Portfólio`

### 2. Meta description
- De: descrição dinâmica com contagem de galerias e "orçamento no mesmo dia"
- Para: `Fotógrafo corporativo em São Paulo com mais de 30 anos de experiência. Veja trabalhos para empresas, executivos, indústria, logística, saúde e eventos.`

### 3. H1
- De: `Conheça nossas especialidades`
- Para: `Fotógrafo corporativo em São Paulo`
- Garantir que continue havendo exatamente um H1 na página.

### 4. Introdução
- De: `Explore galerias por categoria. Cada trabalho é pensado para gerar confiança, valor e percepção profissional para a marca do cliente.`
- Para: `Há mais de 30 anos, produzimos fotografia profissional para empresas, executivos e equipes em São Paulo. Explore o portfólio por especialidade, com trabalhos em ambientes corporativos, indústria, logística, saúde, advocacia, eventos e outros segmentos.`

### 5. Breadcrumb
- De: `Início → Fotos`
- Para: `Início → Fotógrafo Corporativo`
- O destino do link permanece `/fotografo-corporativo`.
- Se o BreadcrumbList schema for gerado a partir do mesmo dado, atualizar o nome correspondente.

## Preservado integralmente
- Canonical: `https://www.alefotografo.com.br/fotografo-corporativo`
- Slug, URL, redirects, robots, sitemap
- As 32 categorias existentes, suas URLs, imagens, ordem, textos e responsividade
- CTA "Solicitar orçamento" → `/contato`
- FAQ e schema FAQPage
- Links internos da página e links recebidos de outras páginas
- Imagens, alt texts, CSS, layout, mobile, performance, componentes globais, menu, footer
- Home e todas as demais páginas internas

## Validação
- `bunx tsgo --noEmit` passa.
- `/fotografo-corporativo` exibe:
  - Title: `Fotógrafo Corporativo em São Paulo | Portfólio`
  - Meta description conforme solicitado
  - H1 único: `Fotógrafo corporativo em São Paulo`
  - Introdução nova
  - Breadcrumb: `Início → Fotógrafo Corporativo`
  - Categorias, URLs e FAQ inalterados
  - Canonical inalterado
