# SEO — CIRURGIA 10A — Auditoria de migração de domínio (somente leitura)

## TOTAL DE OCORRÊNCIAS DE alefotografos.com.br
**11 ocorrências em 8 arquivos versionados** (fora disso: 22 menções em documentos internos `.lovable/` e o export estático `hostinger/`, que não é versionado nem publicado por este projeto).

Descoberta central: neste projeto `alefotografos.com.br` **não é domínio antigo abandonado — é um site irmão em operação**, o site da equipe (eventos/feiras/coberturas grandes), declarado de propósito como link editorial e `sameAs`. Nenhuma ocorrência é canonical, sitemap, Open Graph ou host preferencial.

## Ocorrências classificadas

| Arquivo | Trecho | Tipo | Ação futura |
|---|---|---|---|
| `src/lib/seo.ts:8` | `TEAM_SITE_ORIGIN = "https://alefotografos.com.br"` (comentário explícito: nunca usar como canonical) | F/L — constante do site irmão | PRESERVAR |
| `src/routes/__root.tsx:242` | `sameAs` do schema da empresa | C — schema/JSON-LD | PRESERVAR (declara entidade irmã, não canonical) |
| `src/routes/sobre.tsx:144,147` | link e texto "alefotografos.com.br" no parágrafo sobre coberturas de equipe | E + I | PRESERVAR |
| `src/components/site/ServicePage.tsx:205,208` | mesmo link editorial no bloco `teamSiteNote` | E + I | PRESERVAR |
| `src/routes/llms[.]txt.ts:67,68` | seção "Site irmão (escopo diferente)" | J — llms.txt | PRESERVAR |
| `src/lib/faqs.ts:14,15` | FAQ "Qual a diferença entre alefotografo.com.br e alefotografos.com.br?" | I — conteúdo visível | PRESERVAR |
| `src/lib/faqsComerciais.ts:35` | resposta citando o site da equipe | I | PRESERVAR |
| `src/data/categoryEditorial.ts:127` | resposta de FAQ de categoria | I | PRESERVAR |
| `scripts/export-static.mjs:55` | `const cdnBase = process.env.CDN_BASE \|\| "https://alefotografos.com.br"` — base de download de assets no export para Hostinger | K — configuração de deploy | INVESTIGAR |
| `hostinger/sitemap.xml` e demais em `hostinger/` | export estático antigo com `<loc>` no domínio plural | B — sitemap | INVESTIGAR (pasta ignorada pelo git, não publicada pela Lovable; artefato morto) |
| `.lovable/*.md` | planos e notas históricas | L — documentação | PRESERVAR |

## CRÍTICAS
Nenhuma. Não existe nenhuma lógica que use `alefotografos.com.br` como canonical, como host preferido, ou que gere sitemap/schema/Open Graph nesse domínio.

## DEVEM SER SUBSTITUÍDAS
Nenhuma ocorrência obrigatória. Todas as ocorrências em `src/` são referências intencionais ao site irmão.

## DEVEM SER PRESERVADAS
`src/lib/seo.ts` (TEAM_SITE_ORIGIN), `src/routes/__root.tsx` (sameAs), `src/routes/sobre.tsx`, `src/components/site/ServicePage.tsx`, `src/routes/llms[.]txt.ts`, `src/lib/faqs.ts`, `src/lib/faqsComerciais.ts`, `src/data/categoryEditorial.ts`.

## PRECISAM INVESTIGAÇÃO
1. `scripts/export-static.mjs:55` — `CDN_BASE` padrão no domínio plural. Só afeta o export manual para Hostinger (baixa assets `/__l5e/...`), não afeta o site publicado na Lovable. Se aquele domínio deixar de servir os assets deste projeto, o export quebra.
2. `hostinger/` — export antigo com sitemap inteiro no domínio plural. Está no `.gitignore` e não é servido pela Lovable; risco só existe se esses arquivos forem enviados por FTP para algum host.

## CONFIGURAÇÃO ATUAL DO DOMÍNIO OFICIAL
- `src/lib/seo.ts` → `SITE_ORIGIN = "https://www.alefotografo.com.br"` (base de canonical, og:url e og:image)
- `src/routes/sitemap[.]xml.ts` → `BASE_URL = "https://www.alefotografo.com.br"`
- `src/routes/sitemap-videos[.]xml.ts` → `BASE_URL = "https://www.alefotografo.com.br"`
- `src/routes/sitemap-index[.]xml.ts` → `BASE_URL = "https://www.alefotografo.com.br"`
- `src/routes/blog.rss[.]xml.ts` → `BASE_URL = "https://www.alefotografo.com.br"`
- `src/server.ts` → `REDIRECT_APEX_TO_WWW = true`, host canônico `www.alefotografo.com.br`
- `public/robots.txt` → sitemaps em `https://www.alefotografo.com.br`

## REDIRECT ANTIGO → NOVO
Não existe em código. `src/server.ts` só redireciona `alefotografo.com.br` → `www.alefotografo.com.br` (301) e `http` → `https`; `src/lib/legacy-redirects.ts` trata apenas caminhos legados, nunca hosts. Um eventual redirect de host do domínio plural teria de estar na borda da hospedagem.

## REDIRECT NOVO → ANTIGO
Não existe. Nenhuma regra envia tráfego de `alefotografo.com.br` para o domínio plural.

## RISCO SEO ENCONTRADO
**Baixo.** Canonical, sitemaps, RSS, robots, schema e host canônico estão todos em `https://www.alefotografo.com.br`. As menções ao domínio plural são links editoriais e `sameAs` de um site irmão em operação — remover isso enfraqueceria a diferenciação entre os dois sites em vez de ajudar. Os dois pontos de investigação (`CDN_BASE` do script de export e a pasta `hostinger/`) estão fora do caminho de publicação atual.

## NENHUMA ALTERAÇÃO REALIZADA
SIM — auditoria somente leitura, nenhum arquivo do projeto alterado.
