# HOME — Limpeza cirúrgica

## Objetivo
Reduzir redundância e comprimento da Home sem alterar SEO técnico, design global ou páginas internas.

## Alterações

### 1. Clientes — eliminar lista duplicada no HTML
- Arquivo: `src/components/site/home/FaixaClientes.tsx`
- Ação: unificar os dois `<ul>` (mobile/desktop) em um único `<ul>` responsivo.
- Preservar: os 14 nomes, espaçamento visual e comportamento de rolagem mobile / grid desktop.

### 2. Banco de Imagens — remover galeria de miniaturas
- Arquivo: `src/components/site/home/BancoDeImagens.tsx`
- Ação: remover o array `MINIATURAS` e o `<ul>` que renderiza as 4 fotos (Linha de produção, Equipe em operação, Vista aérea com drone, Ambientes corporativos).
- Preservar: título, dois parágrafos, CTAs "Conhecer Banco de Imagens" e "Vamos conversar", link "Como funciona o banco de imagens".
- Não excluir assets nem conteúdo da página `/fotografo-corporativo/banco-de-imagens-para-empresas`.

### 3. Link redundante — remover "Conheça o trabalho do fotógrafo corporativo"
- Arquivo: `src/components/site/home/SolucoesEmpresa.tsx`
- Ação: remover o parágrafo/link que aponta para `/fotografo-corporativo`.
- Segurança: o destino `/fotografo-corporativo` já está linkado no Hero ("Ver portfólio") e em `HomeSelectedWorks`, portanto não há perda de link interno relevante.

### 4. Vídeo duplicado — remover seção "Produções audiovisuais"
- Arquivo: `src/routes/index.tsx`
- Ação: remover a renderização de `<HomeVideos />` do componente `Home`.
- Preservar: `VideoProducao` ("Vídeos corporativos com produção completa") e todos os dados/assets/páginas de vídeo.

## Não alterar
- Hero, H1, title, meta description, headings das outras seções.
- URLs, slugs, rotas, canonical, schema, sitemap, robots, redirects.
- Footer, páginas locais ou conteúdo de outras páginas.
- Não instalar dependências nem refatorar.

## Validação
- Typecheck (`bunx tsgo --noEmit`).
- Verificação visual rápida da Home em desktop e mobile (preview) para confirmar que as seções restantes continuam renderizando corretamente.
