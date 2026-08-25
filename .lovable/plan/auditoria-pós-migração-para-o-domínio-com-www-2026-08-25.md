# Auditoria pós-migração para o domínio com www

## Bloqueio atual: as mudanças ainda não estão em produção

Conferi agora ao vivo:

- `https://www.alefotografo.com.br/` → 200, mas o HTML servido ainda traz `<link rel="canonical" href="https://alefotografo.com.br/">` (versão antiga).
- `https://alefotografo.com.br/` → 302 para o www (correto, feito na borda da hospedagem).
- `https://www.alefotografo.com.br/robots.txt` ainda lista os sitemaps no domínio sem www.

Ou seja: a troca de canonical/sitemaps para o www já está no código, mas **falta publicar**. Reenviar o sitemap ao Google agora enviaria URLs sem www — o oposto do que queremos. Então a ordem é: publicar primeiro, depois auditar e reenviar.

## Plano

### 1. Você publica
Um clique em Publish. Sem isso, nada abaixo faz sentido.

### 2. Eu valido redirects e headers (todas as combinações)
`http`/`https` × com/sem www, na home e em páginas internas (`/sobre`, `/blog`, `/fotos-corporativas`, um bairro, um vídeo), verificando:
- apex → www em um único salto, preservando o path, sem loop;
- www respondendo 200 com SSL válido;
- HSTS, `Referrer-Policy`, `X-Content-Type-Options` presentes também nos redirects;
- barra final e URLs legadas resolvendo em 301 único.

### 3. Eu confirmo canonical e sitemaps no www
- Canonical auto-referente e único por página, igual ao `og:url`.
- `robots.txt` apontando para os sitemaps no www.
- `sitemap-index.xml`, `sitemap.xml` e `sitemap-videos.xml` com todos os `<loc>` em `https://www.alefotografo.com.br/...` e amostragem de status 200.

### 4. Eu reenvio o sitemap no Search Console
Na propriedade de domínio `sc-domain:alefotografo.com.br` (cobre apex e www):
- listo os sitemaps atuais;
- submeto `https://www.alefotografo.com.br/sitemap-index.xml`;
- removo a entrada antiga apontando para o apex, para não competir.

### 5. Eu leio o URL Inspection das URLs principais
Home, `/sobre`, `/fotos-corporativas`, `/videos`, `/blog`, 2 posts, 2 bairros e 2 galerias — reportando para cada uma: estado de indexação, canonical que o Google escolheu e canonical declarado. O www já era a canônica escolhida pelo Google antes da migração, então a expectativa é convergência rápida.

### 6. Relatório de auditoria SEO pós-migração
Entrego em `.lovable/auditoria-seo-www.md`: tabela de redirects/headers, estado de canonical e sitemaps, tabela de indexação por URL, e lista priorizada de correções encontradas (se houver). Também rodo a revisão SEO da plataforma para cruzar com achados on-page.

## Detalhes técnicos

- Já ajustado no código (aguardando publicação): `src/lib/seo.ts` (`SITE_ORIGIN`), canonicals/JSON-LD das rotas, `sitemap[.]xml.ts`, `sitemap-videos[.]xml.ts`, `sitemap-index[.]xml.ts`, `blog.rss[.]xml.ts`, `public/robots.txt`.
- `src/server.ts`: `REDIRECT_WWW_TO_APEX` permanece `false`; o apex → www é feito pela borda (Primary = www), sem risco de loop.
- O Search Console não tem API para forçar re-crawl. Após o reenvio do sitemap, a atualização do índice é prazo do Google (dias a semanas nas URLs de cauda longa); posso reler o progresso quando você pedir.
