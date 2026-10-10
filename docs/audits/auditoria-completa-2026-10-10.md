# Auditoria Completa — alefotografo.com.br (10/10/2026)

Escopo: 426 URLs do sitemap-index (sitemap.xml 354 + sitemap-videos.xml 72), crawl integral, redirects, headers, GEO, imagens, schema. Deploys verificados no Netlify.

## 🔴 Críticos encontrados e CORRIGIDOS nesta sessão

1. **Loop de redirect sitemap.xml / llms.txt / sitemap-index.xml / favicon.ico** — o código (era da era Lovable/www) forçava apex → www na function, mas a borda Netlify força www → apex (domínio primário é o apex). Resultado: loop infinito de 301 — Googlebot e bots de IA não conseguiam ler o sitemap nem o llms.txt.
   - Fix: `src/server.ts` agora redireciona www → apex (coerente com a borda); 63 URLs `https://www.alefotografo.com.br` trocadas por apex em todo src/ (canonical, OG, schema, RSS, llms.txt, sitemap); robots.txt atualizado. Commits `1b19aeb`, `6d354bd`.
2. **/favicon.ico 404** → redirect 301 para /favicon.png.

## ✅ Saúde geral (426 páginas crawladas)

- **Status**: 426/426 → 200. Zero páginas quebradas.
- **Links internos**: 403 hrefs únicos testados, zero quebrados. Zero páginas órfãs (tudo no sitemap é alcançável por link interno).
- **Titles**: 426/426 presentes, nenhum <30 ou >65 caracteres. Duplicados apenas por paginação de galeria (mesmo conteúdo em URL única — falso positivo do relatório).
- **Meta description**: 426/426 presentes, nenhuma >160 caracteres.
- **Canonical**: 426/426 presentes e self-referentes.
- **H1**: exatamente 1 por página (conferido no HTML bruto).
- **lang**: pt-BR em todas.
- **Schema JSON-LD**: presente em 100% das páginas, zero erros de parse. Cobertura: LocalBusiness/ProfessionalService (426), BreadcrumbList (459), BlogPosting (187 posts), VideoObject (144 páginas de vídeo — 100% delas), FAQPage (25), Service (36), ImageGallery (32).
- **OG/Twitter**: og:title, og:description, og:image e twitter:card presentes (amostra 30/30; og:image agora aponta para o domínio apex).
- **Redirects**: http → https ✅ (1 hop), www → apex ✅ (1 hop), legados de URL antigas ✅ (ex.: /fotografia-industrial → /fotografo-corporativo/fotografia-industrial-em-sp).
- **GEO**: robots.txt com seção de bots de IA (OpenAI, Anthropic, Perplexity, Google-Extended, CCBot, cohere) + Agentmap; llms.txt 200 com fatos reais do negócio; /.well-known/ai-catalog.json 200.
- **Imagens**: servidas via proxy próprio com resize + conversão webp + cache `immutable` de 1 ano na borda. Apenas 50/7.821 imagens sem alt (44 delas na faixa de galeria de /servicos — decorativas, mas corrigíveis).
- **Segurança**: HSTS, X-Content-Type-Options, X-Frame-Options ✅. Faltam CSP, Referrer-Policy e Permissions-Policy (recomendação).
- **Performance (campo)**: TTFB HTML 0,5–0,9 s via borda com stale-while-revalidate; HTML comprimido; home 21 KB descomprimida. PageSpeed lab indisponível da sandbox — medir no próximo ciclo semanal.

## 🟡 Atenção (não crítico, não alterado)

1. **72 URLs de vídeo aparecem nos DOIS sitemaps** (sitemap.xml e sitemap-videos.xml). O segundo é um video sitemap válido do Google (com thumbnails/títulos) — aceitável, mas o ideal é remover as páginas de vídeo do sitemap principal para consolidar sinais.
2. **44 imagens sem alt em /servicos** (faixa de galeria) + 6 em /quem-e-o-ale.
3. **22 páginas com HTML >150 KB** (ex.: retrato-corporativo 220 KB) — principalmente galerias com muitos thumbs; o peso real é mitigado pelo lazy loading, mas há margem para paginação.
4. **Headers de segurança**: adicionar Content-Security-Policy, Referrer-Policy, Permissions-Policy.

## Recomendações priorizadas

| # | Ação | Impacto | Esforço |
|---|---|---|---|
| 1 | Dedupar vídeos do sitemap principal (manter só no video sitemap) | SEO vídeo | M |
| 2 | Alt text nas 50 imagens | Acessibilidade/SEO imagem | P |
| 3 | CSP + Referrer-Policy + Permissions-Policy | Segurança | P |
| 4 | Paginar/reduzir thumbs nas 22 páginas >150 KB | Performance | M |
| 5 | Transformar cases PARTIAL em READY (respostas do Alexandre: Tecnisa, Nitriflex, Fiorde, Germed, Galena) | Conversão/autoridade | — |

## Verificações pós-fix

- /sitemap.xml 200, /sitemap-index.xml 200, /llms.txt 200, /robots.txt 200, /favicon.ico 301→png
- www→apex 1 hop, http→https 1 hop, sem loops
- Typecheck: 0 erros | Build: 355 páginas prerenderizadas
