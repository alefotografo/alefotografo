# Cirurgia 12B — Vídeo de Eventos Corporativos

Criar `/video-de-eventos-corporativos` como página comercial indexável para a intenção "vídeo de eventos corporativos", no mesmo molde já validado em `/video-institucional`. Nenhum case muda de URL.

## 1. Nova rota

Novo arquivo `src/routes/video-de-eventos-corporativos.tsx`, montado só com componentes já existentes (`Breadcrumbs`, `FaqList`, `LazySection`, `videoThumb`/`ytFallback`, `waLink`, `buildMeta`, `faqJsonLd`) — sem nova dependência e sem nova identidade visual.

- TITLE: `Vídeo de Eventos Corporativos em São Paulo | Produção`
- META: 150–160 caracteres cobrindo vídeo de eventos corporativos, congressos, convenções, premiações, São Paulo, captação e edição
- H1 único: `Vídeo de eventos corporativos em São Paulo`
- Canonical próprio, index/follow
- Breadcrumb: Início → Vídeos Corporativos (`/videos`) → Vídeo de Eventos Corporativos

Seções, na ordem:
1. Hero com H1, texto de abertura, CTA "Solicitar orçamento" (WhatsApp, padrão das páginas de vídeo) e CTA secundário "Ver trabalhos" (âncora para os cases da própria página).
2. H2 "Produção de vídeo em eventos corporativos".
3. H2 "Tipos de evento atendidos" — congressos, convenções, fóruns, premiações, sales meetings, lançamentos, confraternizações (só formatos presentes no acervo).
4. H2 "Vídeos de eventos realizados" — os 8 cases do 11B (11º Fórum ABRADILAN 2026, 15ª Convenção ABRADILAN Punta Cana, Convenção de Vendas Tecnisa 2023, IBDE Rio, IBDE Mendoza, Convatec Latam Sales Meeting 2021, Copapharma Coquetel de Lançamento, 22º Fórum de Compras), reutilizando thumbnail/dados existentes e linkando para a URL original de cada case.
5. H2 "Experiência em eventos de diferentes setores" — distribuição, farmacêutico, químico, jurídico, imobiliário, saúde (setores dos próprios cases; sem números novos).
6. H2 "Foto e vídeo no mesmo evento", com links para `/eventos-corporativos` e `/fotografo-corporativo/fotografo-de-eventos-corporativos`.
7. H2 "Como funciona a cobertura" — Briefing, Planejamento a partir do roteiro do evento, Captação, Edição, Entrega (sem prazo nem preço).
8. FAQ com 5 perguntas de intenção de evento, sem preço, prazo fechado ou número de revisões, com FAQPage no mesmo padrão das páginas comerciais.
9. CTA final.

Conteúdo repetitivo (tipos de evento, cases, processo, FAQ) fica em arrays no topo do arquivo.

## 2. Redirects

Em `src/lib/legacy-redirects.ts`: nada é criado às cegas. `/video-corporativo` e demais aliases continuam em `/videos`. Não há alias histórico de eventos em vídeo, logo nenhum redirect novo é necessário — apenas garantir que nenhuma regra dinâmica capture a nova rota (incluir o caminho na lista de rotas próprias, como já ocorre com as páginas comerciais).

## 3. Linkagem interna

Somente destinos inequivocamente de vídeo de evento:
- `src/routes/-videos-content.ts`: o card de tipo "Eventos" recebe `to: "/video-de-eventos-corporativos"` (mesmo mecanismo já usado pelo card institucional).
- `src/routes/eventos-corporativos.tsx`: um link de cross-sell para a nova página, sem alterar TITLE, META, H1, FAQ ou schemas dessa página.
- `src/lib/autoLink.tsx` será inspecionado; se houver termo de "vídeo de evento" apontando genericamente para `/videos`, só esse destino muda.

Âncoras genéricas de "vídeos corporativos" continuam em `/videos`.

## 4. Sitemap

`/video-de-eventos-corporativos` adicionada em `src/routes/sitemap[.]xml.ts` junto às páginas comerciais (priority 0.9).

## 5. Validação

Status 200 na nova rota e em `/videos`; canonical/title/meta/H1 corretos; H1 único e hierarquia h2/h3; 8 cases com links certos; FAQ e FAQPage válidos; sitemap; nenhum case alterado; nenhum 404 nem cadeia de redirect; typecheck; checagem desktop e mobile (390px).

## Não alterado

Home, `/videos` (head, H1, 72 cases, filtros, schemas), `/video-institucional`, páginas de fotografia e saúde, Header, Footer, URLs e conteúdo dos cases, embeds YouTube, robots, canonical global, www/non-www, CSS global, dependências. Feiras/Stands e a consolidação SQ Química ficam fora desta cirurgia.
