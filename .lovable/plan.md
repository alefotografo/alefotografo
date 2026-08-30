# Fase 6 — Auditoria visual, UX, SEO, IA e conversão (sem execução)

Auditoria feita sobre o código real. Nada foi alterado.

## 1. Diagnóstico executivo

O site está tecnicamente saudável (341 URLs 200, canonicals corretos, entidades consolidadas nas Fases 1–5). Os problemas reais são de **datas do blog**, **peso visual** e **UX mobile do blog**, não de SEO técnico.

Achado crítico: as 180 datas do blog foram reescritas em bloco. Todas caem entre junho e setembro de 2026 (2026-06: 42, 2026-07: 60, 2026-08: 40, 2026-09: 38). **38 artigos têm data futura** (01, 08, 15 e 22 de setembro de 2026) e estão publicamente visíveis. Nenhuma data histórica original sobrevive no `catalog.json` — o campo `date` é o único registro e já foi sobrescrito.

## 2. Blog e datas — diagnóstico técnico

- Fonte única: `src/data/catalog.json` → campo `date` em texto pt-BR ("06 de junho de 2026"). Não existe `publishedAt`, `scheduledAt`, `dateModified` nem `status`.
- Não existe automação de publicação. Não há cron, nem filtro por data em lugar algum. "1 post/dia" foi materializado apenas espaçando strings de data — por isso o futuro aparece.
- Consequências verificadas no código:
  - `src/data/catalog.ts:225` ordena por `POST_ORDER` (lista manual de 14 slugs), **não por data**. Logo a home (`posts.slice(0,3)`) e o índice do blog exibem artigos fora de ordem cronológica — inclusive `10-lugares-em-sao-paulo...` com data 2026-09-01 entre os 3 primeiros. É a origem mais provável da incoerência de data que você notou entre home e índice (confirmar caso a caso é o passo 1 da Fase 6A).
  - `src/routes/sitemap[.]xml.ts:50` usa `lastmod: postDateISO(p.date)` → **lastmod no futuro**.
  - `src/routes/blog.rss[.]xml.ts:39` → `pubDate` no futuro.
  - `src/routes/blog.$slug.tsx:97-98` → `datePublished` e `dateModified` recebem o **mesmo** valor futuro.
  - Índice, home, RSS, sitemap e URL direta: todos acessíveis, sem gate.
- Tabela URL/TÍTULO/DATA VISÍVEL/DATEPUBLISHED/DATEMODIFIED/STATUS/PROBLEMA/CORREÇÃO será gerada como CSV+MD na Fase 6A (script de auditoria sobre os 180 registros), porque só faz sentido com a decisão de política de datas tomada.

Proposta de política (a decidir com você antes de qualquer edição):
1. Recuperar as datas originais via Wayback Machine / export antigo do WordPress para os artigos migrados e gravá-las como `datePublished`.
2. Onde a data original não for recuperável, usar a data de migração conhecida e não inventar histórico.
3. Adicionar `dateModified` separado apenas onde houve edição real (ex.: posts que receberam pontes na Fase 5).
4. Gate de publicação: `date > hoje` ⇒ fora da home, do índice, do RSS e do sitemap; URL direta responde 404/noindex até a data. Fuso fixo America/Sao_Paulo.
5. Ordenar `posts` por data desc, mantendo `POST_ORDER` só como destaque manual do topo.

## 3. Home atual (blocos) e home proposta

| # | Bloco atual (`src/routes/index.tsx`) | Ação | Por quê |
|---|---|---|---|
| 1 | Hero full-bleed (imagem em `opacity-60` + 2 gradientes, 3 CTAs, 3 métricas) | REFORMULAR VISUALMENTE | A foto some atrás de dois gradientes; 3 CTAs dividem o clique. Manter H1/texto; aumentar presença da foto, 2 CTAs (WhatsApp + portfólio) e recorte próprio no mobile |
| 2 | `ServiceChooser` | MANTER + ADICIONAR IMAGEM | Falta card de **Vídeo para empresas** apontando para `/videos` (sem criar URL nova) |
| 3 | `SegmentGrid` (6 segmentos, 100% texto: `dor`/`imagem`/`beneficio` são strings) | ADICIONAR IMAGEM | Hoje "imagem" é texto. Uma foto real por segmento, alt descritivo, `loading="lazy"`, srcset |
| 4 | "Quem está por trás" (retrato do Alê) | SUBIR (após serviços) | Prova de autoria mais cedo reforça a entidade Person |
| 5 | Trabalhos selecionados (6 capas iguais) | REFORMULAR VISUALMENTE | Grade uniforme; propor ritmo 1 grande + 2 médias, curadoria de 5–6 imagens |
| 6 | Vídeos (3 thumbs YouTube `hqdefault`) | MANTER + REFORÇAR | Thumb sem `width/height` (risco de CLS) e sem legenda do tipo de produção (institucional, treinamento, depoimento) |
| 7 | "Do blog" (3 cards **sem imagem**) | ADICIONAR IMAGEM + REDUZIR DENSIDADE | 90 dos 180 posts não têm `cover` — precisa fallback curado, nunca banco de imagens |
| 8 | Depoimentos + segmentos atendidos | MANTER | Reviews reais do Google, com nota e link |
| 9 | FAQ (6 perguntas) | MANTER | Útil e enxuto |
| 10 | CTA final | MANTER | |

Sequência proposta: Hero → Serviços (com vídeo) → Trabalhos selecionados → Quem está por trás → Segmentos com foto → Vídeo → Depoimentos → Blog → FAQ → CTA. Nenhum texto semântico é removido.

## 4. UX, imagens, vídeo, navegação

- **CRÍTICO**: datas futuras públicas; blog index carrega 180 links no mesmo HTML (índice alfabético completo em `blog.index.tsx`) — pesado no mobile.
- **ALTO**: `SegmentGrid` sem foto; cards de blog sem capa; thumbs de vídeo sem `width/height`; hero pouco fotográfico; menu "Sobre" com 3 itens de intenção sobreposta.
- **MÉDIO**: densidade de texto na home; `/portfolio` e `/depoimentos` escondidos dentro do dropdown Portfólio; alt de capa de post = título do artigo (genérico).
- **BAIXO**: espaçamentos verticais muito largos no mobile (`py-28`), sem sitemap de imagens.
- **Navegação/Sobre**: `/quem-e-o-ale` (ProfilePage, Person) e `/sobre` (AboutPage, negócio) têm papéis distintos e ficam. A redundância é de *rótulo*, não de página: proposta é renomear os itens do menu e promover **Depoimentos** ao nível superior. Nenhuma URL removida, nenhum redirect.
- **Blog UX**: manter os 180 links rastreáveis, mas server-rendered e paginados (`/blog?page=`) + hubs temáticos, em vez do índice alfabético único. Crawler mantém o caminho pelo sitemap e pela paginação.
- **Conversão**: só `useTrackConversion("whatsapp")` existe. Nenhuma métrica nova nesta fase; plano de eventos fica para 6I com aprovação separada.

## 5. Avaliação interna IA/GEO (0–100) — métrica própria, não oficial

A. Entidade 17/20 · B. Experiência/autoridade 16/20 · C. Conteúdo original 13/20 (datas incoerentes derrubam confiança) · D. Evidência visual 9/15 (segmentos sem foto, 90 posts sem capa) · E. Estrutura técnica 13/15 · F. Citabilidade 6/10 (datas e fatos datados frágeis). **Total: 74/100.** Maior ganho disponível: corrigir datas (C+F) e adicionar prova visual (D).

## 6. Top 10 por prioridade

1. 38 artigos com data futura visíveis. 2. `lastmod`/`pubDate` futuros em sitemap e RSS. 3. `dateModified` = `datePublished`. 4. Ordenação não cronológica dos posts. 5. Segmentos sem foto real. 6. Cards de blog sem capa. 7. Hero com foto abafada. 8. Índice de 180 links no mobile. 9. CLS nas thumbs de vídeo. 10. Rótulos redundantes de "Sobre" + Depoimentos escondido.

## 7. Plano de execução (aprovação por fase)

| Fase | Escopo | Arquivos | Risco SEO |
|---|---|---|---|
| 6A | Política de datas + gate de publicação + ordenação + relatório dos 180 | `src/data/catalog.json`, `catalog.ts`, `lib/postDate.ts`, `sitemap[.]xml.ts`, `blog.rss[.]xml.ts`, `blog.$slug.tsx`, `blog.index.tsx`, `index.tsx` | Médio (38 URLs saem temporariamente do índice — intencional) |
| 6B | Home visual: hero, ordem dos blocos, trabalhos selecionados | `src/routes/index.tsx` | Baixo (sem mudar H1/title/canonical) |
| 6C | Fotos reais nos 6 segmentos | `SegmentGrid.tsx`, `ServiceChooser.tsx` | Baixo |
| 6D | Vídeo: poster/dimensões/rótulos de tipo | `index.tsx`, `videos.index.tsx`, `VideoPlayer.tsx` | Baixo |
| 6E | Blog UX/mobile: paginação SSR + hubs | `blog.index.tsx` (+ rota de paginação) | Médio (validar rastreabilidade antes) |
| 6F | Navegação: rótulos de Sobre + Depoimentos no topo | `Header.tsx`, `Footer.tsx` | Baixo |
| 6G | SEO residual: alt, width/height, captions | componentes de imagem | Baixo |
| 6H | Entidades/evidências: ImageObject onde aplicável, `llms.txt` | `__root.tsx`, `public/llms.txt` | Baixo |
| 6I | Conversão/mensuração (plano antes de código) | a definir | Nenhum |

Teste em cada fase: `tsgo --noEmit`, `curl` das URLs afetadas (200 + HTML servido), conferência de canonical/title/H1 inalterados, JSON-LD válido. Reversão: cada fase é um conjunto isolado de arquivos.

**Próximo passo:** aprovar 6A isoladamente (é a única fase com dano ativo) ou aprovar a sequência inteira. Antes de tocar em datas, preciso da sua decisão sobre recuperar as datas originais via Wayback/export do WordPress.
