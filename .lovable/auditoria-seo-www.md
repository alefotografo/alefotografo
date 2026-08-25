# Auditoria SEO pós-migração para www.alefotografo.com.br

Data: 25/08/2026 (00:40 UTC)

## 1. Redirects e headers (produção, verificado ao vivo)

| URL pedida | Status | Destino |
|---|---|---|
| `http://alefotografo.com.br/` | 302 | `https://www.alefotografo.com.br/` |
| `https://alefotografo.com.br/` | 302 | `https://www.alefotografo.com.br/` |
| `https://alefotografo.com.br/sobre` | 302 | `https://www.alefotografo.com.br/sobre` |
| `http://www.alefotografo.com.br/blog` | 301 | `https://www.alefotografo.com.br/blog` |
| `https://www.alefotografo.com.br/blog/` | 301 | `https://www.alefotografo.com.br/blog` |
| `https://www.alefotografo.com.br/videos-para-empresas` | 301 | `https://www.alefotografo.com.br/videos` |
| `https://www.alefotografo.com.br/fotos-corporativas` | 200 | — |

- Cadeia da home a partir do apex: **1 redirect**, final `https://www.alefotografo.com.br/` com 200. **Sem loops.**
- Path sempre preservado.
- SSL do www válido (CN=`www.alefotografo.com.br`, até 22/nov/2026).
- Headers presentes em todas as respostas, inclusive redirects: `Strict-Transport-Security: max-age=31536000; includeSubDomains`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Content-Type-Options: nosniff`.
- Observação: o apex → www sai como **302** porque é feito na borda da hospedagem (Primary = www) e não há como forçar 301 por código. Impacto de SEO baixo, pois o canonical de todas as páginas aponta para o www.

## 2. Canonical, robots e sitemaps

Estado no código (validado no build atual):

- `SITE_ORIGIN` = `https://www.alefotografo.com.br`; canonical auto-referente e único por rota, igual ao `og:url`.
- `robots.txt` aponta os três sitemaps no www.
- `sitemap.xml`: **340 URLs**, todas em `https://www.alefotografo.com.br/...` (zero locs sem www).
- `sitemap-videos.xml`: **72 URLs**.
- `sitemap-index.xml`: aponta para os dois acima, no www.

**Pendência bloqueante:** em produção o HTML servido ainda traz canonical e sitemaps no domínio **sem www** — a mudança está no código mas ainda não foi publicada. Depois do Publish, o Google passa a ver canonical www em todas as páginas.

## 3. Search Console

Propriedade usada: `sc-domain:alefotografo.com.br` (domain property, cobre apex e www, permissão de proprietário).

- Removido o envio antigo `https://alefotografo.com.br/sitemap-index.xml`.
- Enviado `https://www.alefotografo.com.br/sitemap-index.xml` — baixado pelo Google em 25/08 00:42 UTC, **0 erros / 0 avisos**.
- Como a leitura ocorreu antes do Publish, esse download ainda continha as URLs sem www; será necessário **um reenvio após publicar** para o Google ler os locs definitivos.

## 4. Indexação das URLs principais (URL Inspection)

| URL | Cobertura | Canonical do Google | Canonical declarado |
|---|---|---|---|
| `/` (www) | Submitted and indexed | www | www |
| `/blog` | Submitted and indexed | `.../blog` | home (resíduo do site antigo) |
| `/videos` | Not found (404) — último crawl 15/abr/2026 | — | — |
| `/fotos-corporativas` | URL is unknown to Google | — | — |

Leitura: o www já é a canônica escolhida pelo Google na home, o que favorece a migração. As páginas novas (`/fotos-corporativas`) e as recriadas (`/videos`, hoje 200 e no sitemap) ainda carregam dados de crawls antigos do site anterior; a atualização depende de novo rastreamento.

## 5. Correções a fazer, por prioridade

1. **Publicar** — sem isso o canonical e os sitemaps em produção continuam no domínio sem www, contradizendo o Primary e o sitemap enviado.
2. **Reenviar o sitemap-index após publicar** (eu faço) para o Google baixar os locs em www.
3. **Reler o URL Inspection em 7–14 dias** das URLs principais para acompanhar a saída dos 404 antigos (`/videos`) e a entrada das novas.
4. Nada mais a corrigir em redirects, headers, HSTS, robots ou estrutura de canonical — todos consistentes.

## Nota sobre re-crawl

Não existe API para forçar re-rastreamento. Com apex → www em salto único, canonical auto-referente e sitemap enviado, o Google converge sozinho — dias para as páginas principais, podendo levar semanas nas URLs de cauda longa.
