# Cirurgia 12A — Vídeo Institucional

Transformar `/video-institucional` (hoje 301 → `/videos`) em página comercial própria, e reposicionar `/videos` como hub de "vídeos corporativos".

## 1. Nova rota `/video-institucional`

Novo arquivo `src/routes/video-institucional.tsx`, montado com os componentes já existentes do projeto (`Breadcrumbs`, `FaqList`, `LazySection`, thumbnails de vídeo via `videoThumb`, `waLink`, `buildMeta`) — sem nova identidade visual e sem novas dependências.

- TITLE: `Vídeo Institucional em São Paulo | Produção para Empresas`
- META: texto fornecido
- H1 único: `Vídeo institucional para empresas em São Paulo`
- Canonical próprio, index/follow
- Breadcrumb: Início → Vídeos Corporativos (`/videos`) → Vídeo Institucional

Seções, na ordem:
1. Hero com o texto fornecido, CTA "Solicitar orçamento" (WhatsApp, mesmo padrão das páginas de vídeo) e CTA secundário "Ver trabalhos" (âncora para os cases da própria página).
2. H2 "Produção completa de vídeo institucional".
3. H2 "Onde o vídeo institucional pode ser utilizado" (lista concisa).
4. H2 "Vídeos institucionais realizados" — exatamente os 8 cases indicados, todos confirmados no catálogo, reutilizando thumbnail/dados existentes e linkando para a URL original de cada case.
5. H2 "Experiência em produções para diferentes segmentos" (logística, indústria, química, financeiro, jurídico — segmentos dos próprios cases; sem números novos).
6. H2 "Fotografia e vídeo na mesma produção", com links para `/fotos-corporativas` e `/fotografo-corporativo/banco-de-imagens-para-empresas`.
7. H2 "Como funciona a produção" — Briefing, Planejamento e roteiro, Captação, Edição, Entrega (sem prazo/preço).
8. FAQ com as 5 perguntas pedidas, respostas sem preço, prazo fechado ou número de revisões, com FAQPage no mesmo padrão das páginas comerciais.
9. CTA final com título e texto fornecidos.

Conteúdo repetitivo (aplicações, cases, processo, FAQ) fica em arrays no topo do arquivo.

## 2. Redirects

Em `src/lib/legacy-redirects.ts`:
- remover `/video-institucional` do mapa (passa a responder 200 pela rota real);
- `/videos-institucionais` → `/video-institucional` (301 direto, sem cadeia).
Nada mais é alterado no arquivo. `/video-corporativo` continua indo para `/videos`.

## 3. `/videos` — ajuste mínimo

Em `src/routes/videos.index.tsx`, somente head e um link:
- TITLE → `Vídeos Corporativos em São Paulo | Produção para Empresas`
- META nova (~150–160 caracteres) cobrindo vídeos corporativos, empresas, São Paulo, institucional, eventos e treinamento; OG acompanha via `buildMeta`.
- Canonical, H1, 72 cases, filtros, CTAs, schemas e layout preservados.

Em `src/routes/-videos-content.ts`, o card já existente "Vídeo institucional" recebe `to: "/video-institucional"` — usa o mecanismo de link que os outros tipos já usam, sem bloco novo.

## 4. Linkagem interna

Apenas destinos inequivocamente institucionais: em `src/components/site/ServicePage.tsx`, o item de links internos rotulado "Vídeo institucional" passa de `/videos` para `/video-institucional`. Âncoras de "vídeos corporativos" continuam em `/videos`. `src/lib/autoLink.tsx` será inspecionado e, se houver termo "vídeo institucional" apontando genericamente para `/videos`, apenas esse destino muda.

## 5. Sitemap

`/video-institucional` adicionada em `src/routes/sitemap[.]xml.ts` junto às páginas comerciais (priority 0.9).

## 6. Validação

Status 200 em `/video-institucional` e `/videos`; 301 direto de `/videos-institucionais`; canonical/title/meta/H1 corretos; 8 cases com links certos; FAQ e FAQPage; sitemap; nenhum case alterado; nenhuma cadeia nem 404; typecheck; checagem desktop e mobile.

## Não alterado

Home, páginas de fotografia e saúde, Header, Footer, URLs e conteúdo dos 72 cases, robots, canonical global, www/non-www, CSS global, dependências. Eventos, Feiras e consolidação SQ Química ficam fora desta missão.
