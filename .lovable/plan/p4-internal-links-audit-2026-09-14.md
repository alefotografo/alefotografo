# P4 — Auditoria de links internos (14/09/2026)

## Método

Crawl local (dev server, HTML SSR real) de todas as 327 URLs do sitemap. Extração de todos os `href="/…"`, deduplicação (337 links internos de página) e classificação de cada destino com redirect desabilitado.

## Resultado final (pós-correções)

| Classe | Destinos |
|---|---|
| 200 direto | 334 |
| 301 | 3 — **apenas os URLs perdedores em si** (redirecionamentos históricos preservados, testados diretamente, sem nenhuma página linkando a eles) |
| 302 | 0 |
| 404 | 0 |
| outro | 0 |

Verificação final dedicada: **nenhuma página** do sitemap emite `href` para os 3 slugs perdedores.

## Links internos via 301 encontrados (pré-correção) e origem

| Link interno → | Destino 301 → | Fonte |
|---|---|---|
| `/fotografo-corporativo/eventos-corporativos` | fotografo-de-eventos-corporativos | autoLink (índice incluía perdedores) · gallerySlugs de `fotografo-de-feira-de-negocios` · `/sobre` (lista crua) |
| `/fotografo-corporativo/fotografia-industrial` | fotografia-industrial-em-sp | autoLink · `/servicos`, `/fotos-corporativas`, `/portfolio` (listas `categories` cruas) · prev/next do template de galeria |
| `/fotografo-corporativo/fotografo-de-retratos-profissionais` | banco-de-imagens-para-empresas | autoLink · mesmas listas · prev/next |

## Correções mecânicas aplicadas (commit `fix: point internal links to canonical routes`)

1. **`src/lib/autoLink.tsx`** — índice de frases exclui `REDIRECTED_CATEGORY_SLUGS`. As mesmas âncoras ("fotografia industrial", "eventos empresariais", "retratos profissionais") continuam casando com as categorias vencedoras (títulos/extras equivalentes). Maior fonte: dezenas de links em posts do blog e páginas de serviço.
2. **`fotografo-de-feira-de-negocios.tsx`** — removido slug perdedor `eventos-corporativos` da `gallerySlugs` (o card da vencedora já existia na lista).
3. **`servicos.tsx`, `fotos-corporativas.tsx`, `portfolio.index.tsx`, `sobre.tsx`** — listagens `categories.map` passam a excluir perdedores (mesmo padrão do hub, cirurgia 09E). Contagem "Todas as N galerias" no portfolio ajustada para o total filtrado (32).
4. **`fotografo-corporativo.$slug.tsx`** — navegação anterior/próxima calculada sobre categorias filtradas (nunca aponta para slug 301).

## Não alterado (deliberado)

- Redirecionamentos históricos em `legacy-redirects.ts` — intactos (servem URLs externas/antigas indexadas).
- Sitemap: os 3 perdedores **não** estão no sitemap (estado correto desde a 09E).
- Nenhuma URL pública renomeada; nenhum conteúdo editorial alterado.
