# CIRURGIA HOME — INTEGRAÇÃO DAS PÁGINAS COMERCIAIS DE VÍDEO

## Objetivo
Distribuir na Home os três destinos de vídeo já existentes — `/videos` (hub), `/video-institucional` e `/video-de-eventos-corporativos` — sem criar a página de Feiras e sem tocar em SEO, headings ou outras seções da Home.

## Alterações

### 1. `src/components/site/home/SolucoesEmpresa.tsx`
- Sexto card "Vídeos de Feiras e Eventos" vira "Vídeos de Eventos Corporativos".
- Novo texto curto, B2B, sobre congressos, convenções, fóruns e encontros empresariais (sem menção a feiras).
- Link direto para `/video-de-eventos-corporativos` (campo `to`).
- Remove `videoSlug` e o link para case SQ Química.
- Thumbnail reutilizado do acervo: capa do vídeo "Vídeo Corporativo do 11º Fórum ABRADILAN" (`youtube: gSngB97GbcQ`), com alt objetivo.

### 2. `src/components/site/home/VideoProducao.tsx`
- Mantém H2 "Vídeos corporativos com produção completa", texto, grid de 4 vídeos e CTA "Ver todos os vídeos".
- Insere, após o parágrafo introdutório, uma linha contextual discreta com dois links:
  - "Vídeo Institucional" → `/video-institucional`
  - "Vídeos de Eventos Corporativos" → `/video-de-eventos-corporativos`
- Sem nova seção, sem duplicação de conteúdo.

## O que NÃO será alterado
- Hero, Clientes, Banco de Imagens, Retratos Profissional (incluindo as duas fotos mulher + homem), Evento Completo, Agilidade/Prova, HomeSelectedWorks, SegmentGrid, HomeAbout, HomeBlog, HomeFaq, HomeCta, Header, Footer.
- TITLE, META, H1, canonical, schemas, robots, sitemap, URLs existentes, dependências.
- Conteúdo/SEO de `/videos`, `/video-institucional`, `/video-de-eventos-corporativos`.
- Nenhuma página de Feiras será criada.

## Validação
- Typecheck passa.
- Home, `/videos`, `/video-institucional`, `/video-de-eventos-corporativos` respondem 200.
- Card "Vídeos de Eventos Corporativos" aponta para `/video-de-eventos-corporativos` sem redirect.
- Nenhum link para case SQ Química permanece no card alterado.
- Desktop e mobile (390px) sem quebra de layout, overflow, CLS ou erros de console.
