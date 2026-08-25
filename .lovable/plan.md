# Auditoria e ajustes de SEO técnico

Conferi rota por rota o estado atual: sitemaps, robots, canonicals, headings e indexação. A base já está sólida — o que segue é o que realmente precisa de correção, mais o que confirmei que está correto.

## O que já está correto (verificado)

- Todas as 26 páginas públicas respondem HTTP 200, com SSR (o Google vê o conteúdo pronto).
- Canonical presente em todas as páginas indexáveis, apontando para o próprio endereço em `www.alefotografo.com.br`.
- Cada página tem exatamente um H1 (as páginas de serviço herdam o H1 do componente compartilhado; as duplicatas que aparecem no código são telas de erro/fallback, que nunca renderizam junto com a página real).
- Sitemap cobre home, 11 páginas de serviço, portfólio, vídeos, blog, sobre, depoimentos, FAQ, contato, 8 categorias, os 33 bairros, os vídeos e os posts. As URLs legadas (`/portfolio/:slug` e `/fotografo-corporativo/categoria/:slug`) fazem 301 e ficam fora do sitemap — correto, evita "Página com redirecionamento" no Search Console.
- `/auth` e as telas de administração já têm `noindex, nofollow`.
- Dados estruturados: Organization, LocalBusiness, FAQPage, BlogPosting, Review e BreadcrumbList presentes.

## Correções a fazer

**1. `lastmod` dos posts não está sendo publicado (bug real)**
O gerador de sitemap calcula a data de cada post (`postDateISO`) mas o campo é descartado na hora de montar o XML — a interface do gerador não tem `lastmod` e o bloco `<url>` não o emite. Resultado: o Google não recebe sinal de atualização para os 180 posts do blog. Vou adicionar `lastmod` à interface e ao XML, apenas para os posts (que têm data real e específica de cada página). As páginas fixas continuam sem `lastmod`, porque não existe data confiável por página e uma data genérica de build é sinal falso.

**2. `robots.txt` anuncia três sitemaps sobrepostos**
Hoje lista `sitemap.xml`, `sitemap-videos.xml` e `sitemap-index.xml`. O índice já aponta para os outros dois, então as três linhas fazem o Google rastrear o mesmo conteúdo duas vezes. Vou deixar apenas a linha do `sitemap-index.xml`.

**3. `robots.txt` não bloqueia as áreas privadas**
Vou adicionar `Disallow: /auth` e `Disallow: /admin` no bloco `User-agent: *`, mantendo `Allow: /` para o resto e preservando todos os blocos de bots de IA já existentes. O `noindex` cobre a indexação; isso evita gasto de rastreamento.

## Depois dos ajustes

- Rodar checagem de status e headers nas rotas alteradas no preview.
- Publicar.
- Reenviar `sitemap-index.xml` na propriedade do Search Console e confirmar leitura sem erros.

## Observação

Nada aqui muda domínio, canonical, conteúdo visível ou a configuração de `www` como primário — continua exatamente como está.
