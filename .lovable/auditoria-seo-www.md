# Auditoria SEO pós-migração para www.alefotografo.com.br

Última verificação: 25/08/2026, 00:51 UTC — **depois do Publish**.

## 1. Estado em produção (verificado ao vivo)

- `https://www.alefotografo.com.br/` → 200, canonical `https://www.alefotografo.com.br/`.
- `/videos` → **200**, canonical `https://www.alefotografo.com.br/videos`.
- `/fotos-corporativas` → **200**, canonical `https://www.alefotografo.com.br/fotos-corporativas`.
- `robots.txt` aponta os três sitemaps no www.
- `sitemap.xml`: **340 URLs**, todas em www. `sitemap-videos.xml`: **72 URLs**. `sitemap-index.xml` referencia os dois no www.

O HTML publicado agora declara o www como canônica em todas as páginas — a divergência anterior entre código e produção está resolvida.

## 2. Redirects e headers

| URL pedida | Status | Destino |
|---|---|---|
| `http://alefotografo.com.br/` | 302 | `https://www.alefotografo.com.br/` |
| `https://alefotografo.com.br/` | 302 | `https://www.alefotografo.com.br/` |
| `https://alefotografo.com.br/videos` | 302 | `https://www.alefotografo.com.br/videos` |
| `http://www.alefotografo.com.br/` | 301 | `https://www.alefotografo.com.br/` |
| `https://www.alefotografo.com.br/blog/` | 301 | `https://www.alefotografo.com.br/blog` |

- Cadeia completa da home a partir do apex: **1 salto**, terminando em 200. **Sem loops.**
- Caminho sempre preservado no redirect.
- `Strict-Transport-Security: max-age=31536000; includeSubDomains`, `Referrer-Policy: strict-origin-when-cross-origin` e `X-Content-Type-Options: nosniff` presentes tanto na resposta 200 quanto na de redirect.
- Certificado do www: `CN=www.alefotografo.com.br`, válido de 24/ago/2026 a 22/nov/2026.
- Por design: o apex sai como **302**, não 301, porque o redirecionamento ocorre na borda da hospedagem (www marcado como Primary). Não é controlável por código; impacto baixo, já que todo canonical aponta para o www.

## 3. Search Console — sitemaps

Propriedade: `sc-domain:alefotografo.com.br` (cobre apex e www).

| Sitemap | Baixado | Enviadas | Erros | Avisos |
|---|---|---|---|---|
| `sitemap-index.xml` | 25/08 00:49 | 209 web + 72 vídeo (cache dos filhos) | 0 | 0 |
| `sitemap.xml` | 25/08 00:51 | **340** | 0 | 0 |
| `sitemap-videos.xml` | reenviado 00:50 | 72 | 0 | 0 |

Detalhe importante: ao reenviar só o índice, o Google reaproveitou uma leitura antiga do filho (137 URLs, de 24/08 21:51). Reenviei os sitemaps filhos explicitamente e o `sitemap.xml` passou a registrar as **340 URLs reais, com 0 erros e 0 avisos**. Os números de "indexadas" começam em 0 e sobem conforme o rastreamento — é o comportamento normal para sitemap recém-lido.

## 4. Rotas pendentes

| URL | Produção | Estado no índice do Google | Último rastreamento |
|---|---|---|---|
| `/videos` | 200 | Not found (404) — dado antigo | 15/abr/2026 |
| `/fotos-corporativas` | 200 | URL is unknown to Google | — |

Não há 404 real: as duas páginas respondem 200, têm canonical auto-referente em www e estão no sitemap. O 404 de `/videos` é resíduo de um rastreamento de abril no site anterior; sai sozinho no próximo crawl. A API não permite forçar re-rastreamento — só o botão "Solicitar indexação" no Search Console faz isso manualmente.

O `/videos` já recebe links internos da home (o próprio Search Console lista `https://www.alefotografo.com.br/` como URL de referência), o que acelera o recrawl.

## 5. Redirects de URLs antigas adicionados

Variações do site legado que respondiam 404 e agora fazem **301**:

- → `/videos`: `/video-corporativo`, `/video-institucional`, `/videos-institucionais`, `/filmagem-corporativa`, `/producao-de-video`
- → `/fotos-corporativas`: `/fotografia-corporativa`, `/fotos-corporativa`, `/fotos-corporativas-sao-paulo`, `/fotografia-empresarial`, `/fotos-empresariais`
- → `/fotografo-corporativo`: `/fotografo-corporativo-sao-paulo`

Já existentes e mantidos: `/videos-para-empresas`, `/videos-corporativos`, `/fotografia-corporativa-sao-paulo`, além das regras dinâmicas de `/videos-para-empresas/{slug}` e de galerias.

## 6. O que falta

1. **Publicar** para os novos 301 entrarem em produção (validados localmente, todos 301 com destino 200).
2. Reconferir `/videos` e `/fotos-corporativas` no URL Inspection em 7–14 dias.
3. Opcional, se quiser acelerar: abrir o URL Inspection no Search Console e clicar em "Solicitar indexação" para `/videos` e `/fotos-corporativas`.

Nada mais pendente em redirects, headers, HSTS, SSL, robots, canonical ou sitemaps — tudo consistente com o www.
