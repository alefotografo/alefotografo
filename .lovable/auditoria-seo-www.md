# Auditoria SEO — host canônico `www.alefotografo.com.br`

Última verificação: **04/09/2026, 02:05 UTC** (03/09 23:05 em São Paulo).

## 1. Redirects — as quatro combinações

| Requisição | Resposta | Destino |
|---|---|---|
| `http://alefotografo.com.br/` | 302 | `https://www.alefotografo.com.br/` |
| `http://www.alefotografo.com.br/` | 301 | `https://www.alefotografo.com.br/` |
| `https://alefotografo.com.br/` | 302 | `https://www.alefotografo.com.br/` |
| `https://www.alefotografo.com.br/` | **200** | — |
| `http://alefotografo.com.br/fotografo-corporativo/fotografo-profissional-em-sao-paulo` | 302 → 200 | mesma URL em `https://www` |

Um único salto em todos os casos, path preservado, sem loop. `Strict-Transport-Security: max-age=31536000; includeSubDomains` presente inclusive nos redirects.

Os saltos que saem do apex são **302**, não 301, porque acontecem na borda da hospedagem (Cloudflare), antes do código do site. O fallback em `src/server.ts` (`REDIRECT_APEX_TO_WWW = true`, 301) nunca é alcançado. Sem controle por código; um 301 verdadeiro exigiria CDN próprio na frente do domínio. `hostinger/.htaccess` é artefato de um deploy Apache antigo e não tem efeito.

## 2. Índice do Google (URL Inspection, propriedade `sc-domain:alefotografo.com.br`)

| URL | Veredito | Estado | Canônica do Google |
|---|---|---|---|
| `https://www.alefotografo.com.br/` | PASS | Submitted and indexed (rastreio 01/09) | `https://www.alefotografo.com.br/` |
| `http://alefotografo.com.br/` | NEUTRAL | Page with redirect | `https://www.alefotografo.com.br/` |
| `https://www.alefotografo.com.br/fotos-corporativas` | PASS | Submitted and indexed (30/08) | autorreferente |
| `http://alefotografo.com.br/fotografo-corporativo/fotografo-profissional-em-sao-paulo` | NEUTRAL | **URL is unknown to Google** | — |
| `https://www.alefotografo.com.br/fotografo-corporativo/fotografo-profissional-em-sao-paulo` | NEUTRAL | **URL is unknown to Google** | — |

Leitura: a variante http **não está no índice** — o Google já a classifica como "página com redirecionamento" e escolheu o `www` como canônica. O resultado de busca visto era SERP antigo/cache. A URL de galeria em si é desconhecida ao Google nos dois hosts, o que aponta para descoberta insuficiente, não para duplicidade.

Observação: a API de URL Inspection só **lê** o índice; ela não solicita indexação nem re-crawl. Isso continua sendo um clique manual no Search Console ("Inspecionar URL" → "Solicitar indexação").

## 3. Sitemaps

- `robots.txt` aponta `https://www.alefotografo.com.br/sitemap-index.xml` (+ diretiva `LLMs:`).
- `sitemap-index.xml` referencia os dois sitemaps; **100% dos `<loc>` no host `www`** (0 fora).
- **Limpeza feita:** removidas do Search Console as três submissões antigas no host sem www (`sitemap.xml`, `sitemap-videos.xml`, `sitemap-index.xml` no apex). Restou apenas `https://www.alefotografo.com.br/sitemap-index.xml` — 0 erros, 0 avisos, 413 URLs web + 72 vídeo.

## 4. Incidente grave encontrado durante a auditoria — blog fora do ar (corrigido)

Ao contar as URLs do sitemap publicado apareceu **162 em produção contra 317 na build atual**: os 156 artigos do blog tinham desaparecido. Confirmado ao vivo:

- `/blog` respondia 200 mas **sem nenhum link de artigo**;
- todo `/blog/<slug>` respondia **404** (inclusive artigos indexados há anos);
- `/llms.txt` publicado não listava nenhum artigo;
- a mesma build rodando localmente respondia 200 em todos eles.

**Causa:** o gate de publicação por data era avaliado na **inicialização do módulo**. No runtime de edge (workerd) o relógio ainda não é confiável nesse instante e a data corrente sai como época Unix (1970); com "hoje" em 1970, `posts` filtrava **todos** os artigos e ficava congelada assim por todo o ciclo de vida do isolate. Vídeos, bairros e páginas de serviço não têm gate de data — por isso só o blog caiu.

**Correção:**
- `src/lib/lazyList.ts` (novo): lista derivada avaliada na primeira leitura e memorizada **apenas** quando o relógio já é confiável, então uma leitura durante o boot nunca envenena o cache.
- `src/lib/postDate.ts`: `clockReady()` e falha aberta em `isPublishedDate` — relógio implausível publica em vez de esconder o acervo.
- `src/data/catalog.ts`: `posts`, `scheduledPosts` e `featuredPosts` passaram a ser lazy.
- `src/lib/legacy-redirects.ts`: o conjunto de slugs para 301 passou a usar `allPosts` (sem gate), que é estável no boot.

**Validado:** teste com relógio zerado devolve 183 artigos no boot (falha aberta) e 155 publicados / 28 agendados depois que o relógio normaliza, sem cache envenenado. Build de produção servida localmente: sitemap com 317 URLs, `/blog/<slug>` 200, `/llms.txt` com 35 artigos. Typecheck limpo.

## 5. Pendências

1. **Publicar** — a correção do blog só vale em produção depois do deploy. Enquanto isso, 156 URLs indexadas seguem em 404.
2. Depois de publicar: reconferir `sitemap.xml` (deve voltar a 317 URLs) e reinspecionar 2 ou 3 artigos no Search Console.
3. `/blog.rss.xml` responde 404 (também na build local): a rota `blog.rss[.]xml.ts` não está resolvendo nesse caminho. Não é regressão desta rodada; fica registrado para corrigir.
4. Elevar o 302 do apex a 301 é opcional e depende da decisão de CDN próprio (Cloudflare) ainda pendente.
