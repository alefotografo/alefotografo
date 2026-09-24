# 00 — Summary — P19C Named Client Cases

Data: 2026-09-24 · Branch: `feat/p19c-named-client-cases` · Base: `origin/main` 0f6444b

## O que foi entregue

Arquitetura de cases nomeados, exclusivamente com fatos verificados no repositório:

| URL | Cliente | Prova |
|---|---|---|
| /cases | Hub dos cases | — |
| /cases/ativa-logistica | ATIVA Logística | 12 fotos nomeadas (ativa-itapevi-*) + 8 vídeos do catálogo |
| /cases/rocha-e-queiroz-advogados | Rocha & Queiroz Advogados Associados | 2 vídeos (YouTube 3Jm3PyVBZDo, ITBhZlBQd6E) + depoimento Vanessa Cantieri (LinkedIn) |

## Decisões-chave

- **/cases e não /portfolio/cases**: preserva a lógica histórica de redirect de
  /portfolio/$slug e não altera status de URL existente (risco SEO zero).
- **R&Q sem galeria de fotos**: os arquivos rql-* (6 fotos) não têm vínculo
  documental comprovado com Rocha & Queiroz — sigla não é prova. Preferidos
  2 vídeos reais + depoimento nomeado a imagens não confirmadas.
- **Blog ATIVA preservado**: /blog/case-ativa-logistica-fotografia-video segue
  intacto (editorial); o case comercial é a camada de prova estruturada. Relação
  recíproca via bridge editorial (postBridges) e link do case para o blog.
- **FAQ ATIVA**: 4 perguntas, fonte única (`FAQS` constant), FAQPage derivado de
  `faqJsonLd(FAQS)` — sync 4/4 verificado programaticamente no SSR.
- **Performance**: VideoPlayer (facade) — nenhum iframe YouTube carregado antes
  do clique; thumbnails dos demais vídeos com lazy load.

## Locks respeitados

Galerias (Masonry/SmartImage/categoryImageDims) não tocadas · Header/menu não
tocados · arquitetura de vídeo não tocada · /sobre preservado · nenhum redirect
alterado · nenhuma URL existente alterada · Home H1/title/meta intactos.

## Validação

- tsc PASS · build PASS · 9 rotas 200
- BreadcrumbList: 1 por página (só o do componente; o redundante do head foi removido)
- FAQ visível × FAQPage schema: 4/4 exatos
- Mobile 390px e desktop 1440px: sem overflow, zero erros JS
- Sitemap: 3 URLs novas · llms.txt: seção Cases
