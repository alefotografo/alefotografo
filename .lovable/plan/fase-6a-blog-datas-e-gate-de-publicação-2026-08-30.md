# Fase 6A — Blog, datas e gate de publicação

Somente 6A. 6B–6I ficam registrados e não serão executados.

## 1. Recuperação de datas originais — resultado da busca (feito antes de propor)

Fontes verificadas:

- `src/data/catalog.json` — único campo de data é `date`, em texto pt-BR. Já está sobrescrito: as 180 datas caem entre 2026-06 e 2026-09 (junho 42, julho 60, agosto 40, setembro 38). Nenhum vestígio de data histórica.
- Snapshot estático `hostinger/blog/` (182 pastas) — contém **as mesmas datas reescritas** (ex.: `10-lugares-em-sao-paulo...` traz `"datePublished":"2026-09-01"`). Foi exportado depois da reescrita, logo não serve como evidência histórica.
- Não existe export/backup do WordPress no projeto (nenhum `.xml`, `.sql` ou dump).
- Consulta ao Internet Archive (CDX) para `alefotografo.com.br/blog/*` não retornou capturas utilizáveis nos slugs testados.

**Datas originais efetivamente recuperadas: 0.** Nenhuma fonte confiável disponível no projeto.

Consequência, dentro das suas regras: não invento datas, não redistribuo artigos e não simulo "um post por dia". Os 180 artigos entram no relatório como **grupo B — data original não recuperável**, aguardando decisão sua. Se você tiver o export do WordPress (`WordPress eXtended RSS`/`wp_posts`), ele resolve o grupo B de uma vez e eu restauro `datePublished` a partir dele em uma execução separada.

## 2. O que será corrigido agora (dano ativo)

Independe da recuperação histórica: **38 artigos com data futura (01, 08, 15 e 22 de setembro de 2026) estão publicamente expostos** na home, no índice do blog, no RSS e no sitemap, e com `datePublished` futuro no JSON-LD.

### Gate de publicação (America/Sao_Paulo)

- Helper novo em `src/lib/postDate.ts`: `todayInSaoPaulo()` e `isPublished(post)`, comparando `postDateISO(date)` com a data corrente no fuso `America/Sao_Paulo` (via `Intl.DateTimeFormat` com `timeZone`, sem depender do fuso do servidor).
- `src/data/catalog.ts` passa a exportar:
  - `posts` — apenas publicados, ordenados por **data desc** (cronologia real);
  - `scheduledPosts` — futuros, isolados;
  - `allPosts` — conjunto completo, para uso interno/relatório.
- `POST_ORDER` **não é removido**. Deixa de definir a ordem da listagem e passa a alimentar `featuredPosts` (destaque editorial), sempre filtrado pelo gate. Destaque nunca altera data.
- Consumidores ajustados para o `posts` já filtrado: `blog.index.tsx` (índice, busca e índice alfabético), `index.tsx` (bloco "Do blog"), `blog.rss[.]xml.ts`, `sitemap[.]xml.ts`, `src/lib/related.ts` e `src/lib/autoLink.tsx` (links editoriais automáticos).

### URL direta de artigo futuro

`src/routes/blog.$slug.tsx` — o `loader` já lança `notFound()` para slug inexistente. Passa a usar `allPosts` para localizar e, quando o artigo não estiver publicado, lança `notFound()` também. Resultado: **404 real, sem HTML do conteúdo programado no corpo da resposta**. Nada de `noindex` com o texto exposto. Quando a data chegar, a mesma URL volta a 200 sem redirect e sem mudança de slug.

### datePublished / dateModified / lastmod

- `datePublished` = a data disponível no registro, até que datas históricas confiáveis sejam recuperadas.
- `dateModified` **não será emitido para nenhum artigo** nesta execução — nem para os dois artigos trabalhados na Fase 5. Pequenas alterações editoriais não viram sinal de atualização.
- `sitemap[.]xml.ts`: `lastmod` deixa de ser derivado da data de publicação do post (não é um timestamp de alteração significativa) e é **omitido** para os posts. Nenhum `lastmod` futuro permanece.

## 3. Relatório obrigatório

Script de auditoria (`/tmp`, fora do projeto) gerando `relatorio-datas-blog.csv` + `.md` com as 15 colunas pedidas — URL, SLUG, TÍTULO, DATA ATUAL, DATA ORIGINAL RECUPERADA, FONTE, DATEPUBLISHED FINAL, DATEMODIFIED FINAL, STATUS, FUTURO?, HOME?, BLOG?, RSS?, SITEMAP?, AÇÃO — mais os blocos A (recuperadas), B (não recuperáveis), C (**registros atualmente datados no futuro** — sem evidência de agendamento original), D (expostos antes da data) e E (cuidado extra: os posts da Fase 5 e os que recebem links internos automáticos).

Terminologia: os 38 registros não são classificados como "agendados". Enquanto tiverem data futura, o gate se aplica integralmente (home, blog, hubs, RSS, sitemap, related/autoLink, URL direta não publicada). Nenhum conteúdo é apagado e nenhum slug muda.

### Consumidores do catálogo (busca global já feita)

Usam `posts`: `blog.index.tsx`, `blog.$slug.tsx`, `index.tsx`, `blog.rss[.]xml.ts`, `sitemap[.]xml.ts`, `quem-e-o-ale.tsx`, `lib/related.ts`, `components/site/LinkHub.tsx`, `lib/batches.ts` (→ `/admin/indexacao`) e `lib/legacy-redirects.ts`. `autoLink.tsx` e `PillarLinks.tsx` usam só `categories`.

Único ponto sensível: `legacy-redirects.ts` monta `POST_SLUGS` a partir de `posts`. Com `posts` = publicados, uma URL legada de WordPress cujo slug esteja datado no futuro passa a redirecionar (301) para `/blog` em vez de para um post não publicado — coerente com o gate e evita 301 para 404. Nenhuma URL, slug ou canonical muda. Será reportado no relatório final; qualquer outro consumidor com efeito em URL/SEO/página comercial interrompe a execução para reporte.

## 4. Proteções e validação

Nada de URL, slug, canonical, title, H1, meta description, corpo de artigo, link editorial da Fase 5, redirect ou página comercial é alterado. Só ordenação, visibilidade e campos de data.

Validação, com contagem ANTES × DEPOIS: `tsgo --noEmit`; `curl` de amostra de publicados (200) e de futuros (404); `grep` no XML servido confirmando 0 slugs futuros no sitemap e no RSS; ausência de data futura no JSON-LD dos publicados; canonical/title/H1 idênticos ao estado atual; conferência da ordem cronológica desc e do destaque editorial funcionando com data antiga; checagem do gate no fuso America/Sao_Paulo.

Reversão: as mudanças ficam concentradas em `catalog.ts`, `postDate.ts`, `blog.$slug.tsx`, `blog.index.tsx`, `index.tsx`, `blog.rss[.]xml.ts`, `sitemap[.]xml.ts`, `related.ts`, `autoLink.tsx`.

## 5. Registrado para depois (não executar)

Direção visual aprovada conceitualmente para 6B/6C/6D: Hero → Trabalhos selecionados → Serviços → Segmentos com fotografias → Quem é o Alê → Vídeos → Depoimentos → Blog → FAQ → CTA. Trabalhos selecionados com curadoria de 9–12 fotografias excepcionais, composição editorial responsiva, priorizando profissionais 40+, executivos, C-levels, empresários, sócios, lideranças, advogados, médicos e profissionais liberais consolidados, com representação relevante de médicas, psicólogas e profissionais de saúde mais jovens — comunicando autoridade, credibilidade, senioridade, naturalidade, confiança e posicionamento. Segmentos com fotos reais (advocacia, médicos/clínicas, executivos/empresários, empresas/equipes, eventos, palestrantes) e Vídeo para Empresas com frames/posters reais (institucional, treinamento, depoimento, conteúdo corporativo).

## 6. Arquivos que seriam modificados

`src/lib/postDate.ts` (gate + fuso) · `src/data/catalog.ts` (`posts` publicados, `scheduledPosts`, `allPosts`, `featuredPosts`) · `src/routes/blog.$slug.tsx` (404 para não publicado, sem `dateModified`) · `src/routes/index.tsx` (destaque editorial filtrado) · `src/routes/sitemap[.]xml.ts` (sem `lastmod` de post) · `src/lib/legacy-redirects.ts` (se necessário). `blog.index.tsx`, `blog.rss[.]xml.ts`, `related.ts`, `LinkHub.tsx` e `batches.ts` herdam o gate pelo próprio `posts`, sem edição.
