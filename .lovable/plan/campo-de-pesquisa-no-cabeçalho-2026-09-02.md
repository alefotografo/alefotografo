# Campo de pesquisa no cabeçalho

Adicionar busca global no header, disponível em todas as páginas, alimentando uma página de resultados própria.

## O que o usuário vê

- **Desktop (≥768px):** um ícone de lupa ao lado do menu. Ao clicar, abre um campo de busca (com foco automático). Digitar e pressionar Enter leva à página de resultados. Esc fecha.
- **Mobile:** campo de busca fixo no topo do menu sanduíche, antes dos itens de navegação.
- **Nova página `/busca?q=...`:** lista os resultados agrupados:
  - Serviços e páginas (retrato profissional, LinkedIn, executiva, equipes, médicos, advogados, clínicas, eventos, portfólio, vídeos, sobre, contato)
  - Artigos do blog (somente publicados, mesma regra de data já usada hoje)
  - Vídeos
  - Estado vazio com sugestões de links quando nada é encontrado.

A busca do próprio `/blog` continua como está (filtro local dos artigos).

## Detalhes técnicos

- `src/components/site/Header.tsx`: novo estado de busca; formulário que faz `navigate({ to: "/busca", search: { q } })`. Mantém acessibilidade atual (label sr-only, aria-expanded, Esc, fechar em troca de rota).
- `src/routes/busca.tsx`: nova rota com `validateSearch` via `zodValidator` + `fallback(z.string(), "")` para `q`. Busca client-side sobre os dados já embutidos (`posts`, `vids` de `@/data/catalog`) mais uma lista estática de páginas/serviços — sem backend novo.
- Normalização sem acentos reaproveitada (mesma função já usada em `blog.index.tsx`, extraída para `src/lib/search.ts`).
- SEO: `head()` próprio com título/descrição únicos e `robots: noindex, follow` (página de resultado interno não deve ser indexada). Nenhuma URL ou slug existente é alterada.
- Sem mudanças em sitemap, canonical de outras páginas ou estrutura de links internos.
