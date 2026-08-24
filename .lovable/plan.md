# Plano: Dois sites distintos — alefotografo.com.br + alefotografos.com.br

## Decisão confirmada
Dois projetos Lovable separados, cada um publicado no seu próprio domínio, com fundo diferente. **Não** haverá redirect entre os dois domínios — cada um é um site independente.

## Atribuição

| Projeto | Domínio | Fundo | Ação de fundo |
|---|---|---|---|
| **Atual** (este) | alefotografos.com.br | Cinza escuro (atual `oklch(0.18 0 0)`) | Mantém — já é cinza escuro |
| **Novo** (via Remix) | alefotografo.com.br | Preto (`oklch(0 0 0)`) | Trocar `--background` para preto |

## Passos

### 1. Criar o segundo projeto (ação sua, na UI)
- No editor, clique no nome do projeto (topo esquerdo) → Settings → **Remix this project** (ou botão ⋯ → Remix).
- Isso cria uma cópia independente. O novo projeto herda TODO o conteúdo atual, inclusive os canônicos já apontando para `alefotografo.com.br` (corretos para ele).
- Nomeie o novo projeto para não confundir (ex.: "Alê Fotógrafo — alefotografo").

### 2. Projeto ATUAL (alefotografos.com.br) — ajustes que eu faço
Hoje os canônicos/sitemap/RSS/OG estão apontando para `alefotografo.com.br` (herança da migração), mas o domínio realmente publicado aqui é o plural. Reverter tudo para o plural:
- `src/lib/seo.ts`: `SITE_ORIGIN` → `https://alefotografos.com.br`.
- Sitemaps (`sitemap[.]xml`, `sitemap-videos[.]xml`, `sitemap-index[.]xml`), RSS (`blog.rss[.]xml`), `__root.tsx` (canonical/hreflang), e ~18 rotas com `og:url`/`LocalBusiness`/endereços absolutos.
- Fundo cinza escuro: já está correto, sem alteração.
- Confirmar que o redirect HTTPS (`src/server.ts`) permanece (http→https no próprio host) — sem redirect cross-domain.

### 3. Projeto NOVO, remixed (alefotografo.com.br) — ajustes que eu faço (após o Remix existir)
- `src/styles.css`: trocar `--background: oklch(0.18 0 0)` → `oklch(0 0 0)` (e `.dark` igual) para fundo preto. Ajustar `--surface`/`--card`/`--secondary`/`--muted` alguns passos abaixo do preto para manter contraste dos cards.
- Confirmar `SITE_ORIGIN = https://alefotografo.com.br` (já herdado).
- Manter os redirects de **caminho** legados (`legacy-redirects.ts`) — eles são úteis nos dois sites. Garantir que **nenhum** redirect aponte de um domínio para o outro.
- Remover qualquer lógica/resquício de redirect cross-domain herdada da migração.

### 4. Domínios e SSL (ação sua, em cada projeto)
- Projeto atual: `alefotografos.com.br` + `www` já conectados — confirmar como **Primary**.
- Projeto novo: conectar `alefotografo.com.br` + `www` (Project Settings → Domains → Connect). SSL Let's Encrypt é provisionado automaticamente. Marcar como Primary.
- SSL/HTTPS é gratuito e automático nos dois. O middleware `redirectHttps` força http→https em cada host.

### 5. Google Search Console (ação sua)
- Adicionar `alefotografo.com.br` e `alefotografos.com.br` como propriedades separadas.
- Enviar `sitemap-index.xml` em cada uma e pedir reindexação das principais páginas.

## Risco crítico — SEO (leia antes de prosseguir)
Dois sites com **conteúdo idêntico** = Google considera duplicata e escolhe apenas UM para indexar (provavelmente o mais antigo/forte, `alefotografo.com.br`). O outro é filtrado e não rankea — você fica com o custo de manter dois sites sem ganho de tráfego.

Para que os dois coexistam sem canibalização, **precisam diferir de verdade desde o início**, não só no fundo:
- Hero/copy diferentes.
- Foco de público diferente por site (ex.: um mais corporativo/B2B, outro mais retrato/pessoal).
- Cadência de blog dividida (não postar o mesmo texto nos dois).
- CTAs e segmentos em destaque diferentes.

Recomendo definir essa diferenciação já nesta fase. Posso preparar variações de hero/copy/segmentos para o segundo site se você quiser.

## O que é automático (eu) vs. manual (você)
- **Eu (após aprovação):** reverter canônicos do projeto atual para o plural; trocar fundo do projeto novo para preto; revisar redirects cross-domain.
- **Você:** criar o Remix; conectar domínios/Primary; configurar GSC; decidir a diferenciação de conteúdo.
