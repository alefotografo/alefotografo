# Metadados únicos para os 142 posts do blog

## Garantia primeira: nenhuma URL muda

Nada de slug, rota, redirect ou link interno é alterado. O ranking já
conquistado depende da URL, e ela permanece idêntica. A mudança acontece
somente no que o Google exibe na busca (título e descrição) e na imagem
social — nunca no endereço do artigo.

O H1 visível de cada post também fica intacto: o texto longo continua no
topo do artigo, e o título curto vale só para o resultado de busca.

## Estado atual

- 142 posts publicados.
- 127 títulos passam de 60 caracteres e hoje aparecem cortados com "…" no
  Google.
- Só 2 posts têm título/descrição de busca escritos à mão
  (`src/data/postSeo.ts`); o resto usa o texto do post.
- 52 posts têm capa própria; 90 não têm nenhuma imagem e caem na imagem
  social genérica da marca.

## O que será feito

### 1. Título e descrição de busca para os 142 posts

Cada post recebe:

- **Título** de até 60 caracteres, com a palavra-chave real do artigo no
  começo, sem corte com "…".
- **Descrição** de 120–160 caracteres, específica do assunto, escrita para
  ganhar clique — sem repetir a mesma fórmula entre artigos.

Ambos entram em `src/data/postSeo.ts`, que a rota do post já consulta.
Nenhum texto visível da página muda.

### 2. Capa real curada, post por post

Regra mantida: capa correta ou nenhuma capa. Para os 90 posts sem imagem,
associo uma foto real do acervo que corresponda ao assunto do artigo
(retrato de advogado em post sobre advogados, evento em post sobre evento,
e assim por diante). Onde não existir foto genuinamente compatível, o post
fica sem capa — não entra foto fora de contexto para preencher espaço.

A capa curada passa a valer em três lugares ao mesmo tempo: card do
`/blog`, topo do artigo e imagem de compartilhamento (`og:image` /
`twitter:image`) daquele post.

### 3. Entrega em lotes revisáveis

A curadoria é feita em lotes por tema (advogados, médicos, executivos,
LinkedIn, eventos, técnica/equipamento, geral), para você conferir cada
bloco no preview antes do próximo. Ao final, publicamos.

## Detalhes técnicos

- `src/data/postSeo.ts`: expandido de 2 para 142 entradas
  (`{ title, description }`), com um campo novo opcional `cover` para a
  capa curada quando o post não tiver `cover` no catálogo.
- `src/routes/blog.$slug.tsx`: o `head()` já prioriza o override; passa a
  usar também a capa do override em `og:image` e no JSON-LD
  (`BlogPosting.image`).
- `src/lib/postCover.ts`: resolve na ordem `post.cover` → `postSeo[slug].cover`
  → `undefined`. Nenhum fallback automático por regex ou hash volta.
- `src/routes/blog.index.tsx` continua consumindo `postCover`, então os
  cards ganham a capa sem mudança de layout.
- Imagens seguem pelo otimizador próprio (`/api/public/img`) nas larguras
  já definidas (400/640 no card, até 768 no post) — sem regressão de
  performance ou CLS.
- Sem migração, sem tabela nova, sem alteração em sitemap, robots ou
  redirects.
