# Tornar alefotografo.com.br (sem www) o domínio primário

Hoje os dois domínios estão ativos, mas `www.alefotografo.com.br` está marcado como **Primary**, então o apex redireciona para o www e todo o SEO do site (canonical, sitemaps, robots, RSS, dados estruturados) aponta para o www.

Para inverter isso são necessários dois lados: a troca no painel (feita por você) e o alinhamento do código (feito por mim).

## Passo 1 — Troca no painel (você)
Em **Project Settings → Domains**, no menu (⋯) de `alefotografo.com.br`, marque-o como **Primary**. Não existe ferramenta que eu possa usar para isso; a plataforma só aceita a mudança pelo painel. Depois disso, a borda passa a redirecionar `www` → apex.

## Passo 2 — Alinhamento do código (eu)
- `src/lib/seo.ts`: `SITE_ORIGIN` volta para `https://alefotografo.com.br`.
- `public/robots.txt`: as três diretivas `Sitemap:` passam para o apex.
- Rotas de sitemap (`sitemap.xml`, `sitemap-index.xml`, `sitemap-videos.xml`) e RSS do blog: URLs no apex.
- Todas as rotas com canonical, `og:url` e JSON-LD escritos manualmente (home, sobre, portfólio, contato, FAQ, depoimentos, vídeos, blog, categorias, bairros) voltam ao apex.
- `src/data/catalog.ts`: `site.originalUrl` no apex.
- `src/server.ts`: o fallback atual apex → www é invertido para **www → apex com 301**.
- `src/lib/gsc.server.ts` e `src/lib/gsc-report.server.ts`: `PREFERRED_HOST` volta para `alefotografo.com.br`, priorizando a propriedade do apex no Search Console.

## Passo 3 — Publicar e validar
- Publicar o app.
- Validar com requisições reais: `www` deve devolver 301 em um salto para o apex, o apex deve devolver 200, e o canonical do HTML de produção deve ser o apex.
- Reenviar `sitemap-index.xml` e `sitemap-videos.xml` na propriedade do apex no Search Console e confirmar leitura sem erros.

## Observação importante de SEO
O Google já vinha consolidando o site no www (era o host canônico e o que estava indexado). Trocar para o apex é uma mudança de host canônico: por algumas semanas é normal ver oscilação de impressões e URLs "duplicadas, canônica alternativa" no Search Console até a reindexação concluir. Os 301 do www garantem que a autoridade seja transferida.
