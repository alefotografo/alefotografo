# Programar os 30 posts do blog — 1 por dia (01/09 a 30/09/2026)

## O que será feito

1. **Importar os 30 posts** do arquivo enviado para o catálogo do blog (`src/data/catalog.json`), no mesmo formato dos 180 posts atuais: slug, título, data, descrição (subtítulo), SEO title, capa e corpo em parágrafos.
2. **Agendamento real (1 por dia)**: cada post fica com sua data (2026-09-01 até 2026-09-30) e só aparece no site a partir dela.
   - Antes da data: não aparece no `/blog`, não aparece em posts relacionados, não entra no sitemap nem no RSS, e a URL responde 404.
   - Na data: passa a aparecer automaticamente no topo do blog, no RSS e no sitemap, sem precisar publicar de novo.
3. **Conteúdo formatado**: o HTML de cada post (`<h2>`, `<p>`, `<ul>`) é convertido para o formato de parágrafos usado hoje, preservando subtítulos internos e listas.
4. **Imagens**: usa a imagem principal indicada em cada post (Unsplash, uso livre) como capa, com o `alt` fornecido e o crédito do fotógrafo exibido abaixo da imagem. Carregamento otimizado/lazy como no restante do blog.
5. **CTA**: ao final de cada post, o bloco de chamada já existente do blog (orçamento/WhatsApp), usando o texto de CTA de cada post.
6. **SEO**: títulos e meta descriptions dentro dos limites, canonical em `https://www.alefotografo.com.br/blog/<slug>`, JSON-LD `BlogPosting` com `datePublished` correto. Nenhuma alteração em domínio, robots, www como primário ou nas páginas comerciais.
7. **Validação**: checagem de tipos, conferência no preview de que hoje (27/08) nenhum dos 30 aparece ainda, e simulação de uma data de setembro para confirmar que o post do dia aparece corretamente.

## Detalhes técnicos

- Novos posts adicionados a `data.posts` em `src/data/catalog.json` com `date` no formato ISO (`2026-09-01`) — `postDateISO` já aceita ISO e o padrão em português.
- Em `src/data/catalog.ts`: `posts` passa a filtrar `date > hoje` (fuso America/Sao_Paulo) e a ordenar os agendados por data decrescente à frente do `POST_ORDER` atual; um export `allPosts` mantém a lista completa para uso interno.
- O filtro roda no servidor a cada request (SSR no Worker), então a publicação diária acontece sozinha, sem novo deploy.
- Campos extras do JSON (categoria, tags, tempo de leitura, crédito da imagem) armazenados no post e usados na página; nenhuma nova tabela ou backend.
- Sem alteração em URLs existentes, `sitemap-index.xml`, `robots.txt` ou configuração de DNS/SSL.

## Depois da aprovação

Publico o site uma vez para a estrutura entrar no ar; a partir daí cada post surge no seu dia. Ao final, reenvio o sitemap no Search Console.
