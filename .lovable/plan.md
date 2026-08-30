# Fases 6B + 6C + 6D — Home visual integrada (planejamento, sem execução)

## 1. Diagnóstico visual (auditoria do código atual)

O acervo é enorme e está subutilizado. `src/data/catalog.json` tem **35 galerias e 1.984 fotografias reais** no CDN legado (`...rackcdn.com`), já servidas via proxy WebP (`src/lib/img.ts` → weserv, `q=74`, srcset de 480→1920). Fotos locais em `src/assets`: **nenhuma** — só logo, imagem de OG e uma capa de blog. Ou seja: não falta imagem, falta curadoria.

O que hoje atrasa a percepção de qualidade:

| Problema | Onde | Efeito |
|---|---|---|
| Hero usa uma capa de categoria como **fundo** com `opacity-60` + dois gradientes sobrepostos | `index.tsx:69-85` | a melhor fotografia da home aparece como textura; ninguém "vê" a foto |
| 3 CTAs no hero (WhatsApp + portfólio + agendar) | `index.tsx:105-129` | competição; decisão diluída |
| Primeira seção após o hero é o `ServiceChooser` (texto + 1 foto por card) e depois o `SegmentGrid` | `index.tsx:153-156` | o visitante lê muito antes de ver trabalho |
| `SegmentGrid` é **100% texto** (3 pares dt/dd por card, 6 cards) | `SegmentGrid.tsx` | bloco mais longo da home, zero prova visual |
| "Trabalhos selecionados" = 6 **capas de categoria**, aparece só depois de ~3 seções | `index.tsx:198-244` | não vende o olhar; vende taxonomia |
| Eventos corporativos não têm bloco próprio | home inteira | um dos dois pilares fica invisível |
| Vídeo = 3 thumbs `hqdefault` do YouTube, **sem `width`/`height`** | `index.tsx:258-280` | CLS e material genérico |
| Cards de blog sem imagem | `index.tsx:~300` | seção apagada |

Ordem atual real: Hero → Serviços → Segmentos (texto) → Quem é o Alê → Trabalhos → Vídeos → Blog → Depoimentos → FAQ → CTA.

## 2. Ordem final recomendada

A hipótese está correta em quase tudo, com duas correções sustentadas por código:

1. HERO (fotográfico, 1 imagem LCP)
2. **TRABALHOS SELECIONADOS** — sobe para o 2º lugar (hoje é o 5º). É o "show before explain".
3. SERVIÇOS / ESPECIALIDADES (`ServiceChooser`)
4. SEGMENTOS COM FOTOGRAFIAS
5. QUEM É O ALÊ
6. VÍDEO PARA EMPRESAS
7. DEPOIMENTOS — **antes** do blog (hoje vem depois): prova social pertence ao percurso de decisão, não ao de conteúdo
8. BLOG
9. FAQ (mantém o JSON-LD de FAQPage já existente)
10. CTA FINAL

Sem impacto de SEO: nenhuma seção é removida, nenhum texto indexado sai, apenas a ordem do DOM muda dentro da mesma URL.

## 3. Wireframe textual, bloco por bloco

### Bloco 1 — HERO
- **Objetivo:** identidade + posicionamento + uma fotografia que já prova o nível.
- **Conteúdo:** H1, parágrafo, kicker e a régua de 3 métricas — **inalterados**.
- **Imagem:** 1 retrato corporativo em orientação retrato, escolhido a dedo (candidato: `retrato-corporativo_helio-martins-borges-filho-4.jpg`).
- **Desktop:** composição texto + fotografia (opção B), grid 12 col → texto 7, foto 5 em `aspect-[4/5]`, foto **sem overlay** e sem `opacity`. A foto passa a ser um elemento, não um fundo.
- **Mobile:** foto em `16/10` acima do H1, altura contida (~42vh), texto abaixo. Sem texto sobre imagem → contraste garantido sem overlay pesado.
- **CTA:** 2 apenas — "Solicitar orçamento no WhatsApp" (primário) e "Ver trabalhos" (âncora para o bloco 2). O terceiro CTA ("Agendar foto profissional") desce como link de texto na linha de contexto, preservando o link interno para `/foto-profissional`.
- **Preservado:** H1, title, canonical, textos, links internos, `dl` de métricas, preload do hero (`index.tsx:31-37`) apenas reapontado para a nova imagem fixa.
- **Alteração necessária:** hero deixa de derivar a imagem de `featured[0].cover`; passa a usar constante curada.
- **Risco SEO:** nenhum. **Risco performance:** LCP passa a ser uma imagem menor (5/12 da largura, não 100vw) → tende a melhorar.

### Bloco 2 — TRABALHOS SELECIONADOS
- **Objetivo:** em ~1 scroll, provar olhar autoral nos dois pilares.
- **Conteúdo:** título existente "Trabalhos selecionados" + duas legendas discretas de pilar (Retratos / Eventos).
- **Imagens:** 10 fotografias curadas (não capas de categoria) — 6 retratos, 4 eventos.
- **Desktop:** grid editorial de 12 colunas em 3 faixas: 1 foto grande vertical (col 1-5, `4/5`) + 2 médias (col 6-12, `3/2`); faixa 2 com 3 iguais; faixa 3 com 1 panorâmica larga + 1 vertical. Sem masonry JS.
- **Mobile:** coluna única, proporções alternando `4/5` e `3/2`, 4 primeiras imagens + botão "Ver mais trabalhos".
- **CTA:** cada foto leva à galeria do pilar; rodapé do bloco com "Ver portfólio completo".
- **Destino:** `/fotografo-corporativo/retrato-corporativo`, `/fotografo-corporativo/fotografo-de-eventos-corporativos`, `/portfolio`.
- **Preservado:** o link "Ver todos os segmentos" → `/fotografo-corporativo` continua no bloco.
- **Risco SEO:** nenhum (só links internos existentes). **Performance:** 2 primeiras `eager`-ish, resto `lazy` com `width/height` explícitos.

### Bloco 3 — SERVIÇOS / ESPECIALIDADES
- **Objetivo:** deixar óbvios os 2 pilares + vídeo.
- **Alteração:** `ServiceChooser` hoje lista 5 serviços em pé de igualdade. Passa a hierarquia 2+1+2: **Retratos corporativos** e **Cobertura de eventos corporativos** em cards grandes, **Vídeo para empresas** em card médio, e "Foto para LinkedIn"/"Fotografia corporativa para empresas" como cards menores. Todas as 5 URLs de destino e os `EXTRA_SPECIALTIES` permanecem — nenhuma URL nova.
- **Imagem:** 1 foto real por card (já existe campo `img`; troco 2 delas por fotos mais fortes).
- **Risco SEO:** nenhum; textos e destinos preservados.

### Bloco 4 — SEGMENTOS COM FOTOGRAFIAS (6C)
- **Objetivo:** provar que ele fotografa exatamente o segmento do visitante.
- **Conteúdo:** os 6 segmentos e os 3 campos semânticos (`dor`, `imagem`, `beneficio`) **permanecem no HTML**; `dor` e `beneficio` visíveis, `imagem` recolhido em `<details>` (indexável, sem poluir).
- **Imagens:** 1 foto real por segmento, `3/2`, topo do card.
- **Desktop:** 3 col. **Tablet:** 2 col. **Mobile:** 1 col, foto `16/10`, 3 cards + "ver todos".
- **CTA:** mantém WhatsApp por segmento + link "ver" existente.
- **Risco SEO:** baixo — nada de texto é removido; `<details>` mantém o conteúdo no DOM.

### Bloco 5 — QUEM É O ALÊ
Mantido como está (retrato 4/5 + 2 parágrafos + links `/sobre` e `/depoimentos`). Só muda de posição para depois da prova visual. Zero alteração de conteúdo.

### Bloco 6 — VÍDEO PARA EMPRESAS (6D)
- **Objetivo:** vídeo como competência real, não anexo.
- **Conteúdo:** 4 cards nomeados por finalidade — institucional, treinamento/curso, depoimento, conteúdo de evento — cada um apontando para um vídeo real do acervo (72 vídeos, todos YouTube). Candidatos por título: `ativa-log` (institucional), `curso-de-prestacao-de-contas-eleitorais-2026-com-professora-rita...` (treinamento), `onemba` (depoimento/jornada), `11-forum-abradilan-2026` (evento).
- **Imagem:** poster = frame real do próprio vídeo via `videoThumb(v, "lg")` (`hqdefault`), com `width={480} height={360}`, `aspect-video`, `object-cover` e `loading="lazy"`. Sem autoplay — `VideoPlayer` já é click-to-play.
- **Destino:** `/videos/$slug` de cada vídeo + "Todos os vídeos" → `/videos`. Nenhuma URL nova.
- **Risco CLS:** eliminado pelas dimensões explícitas (hoje ausentes).

### Bloco 7 — DEPOIMENTOS
`TestimonialsCarousel` existente, sem alterar texto nem autores. Só sobe uma posição.

### Bloco 8 — BLOG
3 cards **com imagem**, usando apenas destaques do `POST_ORDER` que tenham `cover` real (90 dos 180 posts têm cover). Nada de stock, nada de resolver os 90 sem capa agora (6E). `4/3`, lazy, dimensões explícitas.

### Blocos 9 e 10 — FAQ e CTA final
Inalterados (FAQ mantém `faqJsonLd`).

## 4. Mapa de imagens (candidatos do acervo existente)

Todos os arquivos abaixo já estão em `src/data/catalog.json`, servidos por proxy WebP. Qualidade: originais de galeria, largura suficiente para 1440px.

| Bloco | Segmento/Serviço | Galeria de origem (nº de fotos) | Tipo | Por que é adequada | Orient. | Recorte | Desktop | Mobile |
|---|---|---|---|---|---|---|---|---|
| Hero | Retrato corporativo | `retrato-corporativo` (83) | retrato executivo | rosto, luz controlada, senioridade | vertical | baixo (4/5 nativo) | 5/12 col | topo 16/10 |
| Trabalhos | Retratos | `retrato-corporativo` (83) + `fotografo-de-retratos-profissionais` (55) | retratos variados | volume suficiente para escolher poses e faixas etárias distintas | mistas | médio no 3/2 | 6 fotos | 2 fotos |
| Trabalhos | Eventos | `fotografo-de-eventos-corporativos` (47) + `eventos-corporativos` (73) | palco, plateia, networking, premiação | cobre a variedade narrativa pedida | horizontais | baixo | 4 fotos | 2 fotos |
| Serviços | Retrato profissional | `retrato-corporativo` | retrato | já em uso no card | vertical | baixo | sim | sim |
| Serviços | Eventos | `fotografo-de-eventos-corporativos` | evento | já em uso no card | horizontal | baixo | sim | sim |
| Serviços | Vídeo | frame real do YouTube (`ativa-log`) | poster de vídeo | substitui a foto de banco de imagens hoje usada no card de vídeo | horizontal | nenhum | sim | sim |
| Segmento | Advogados | `fotografia-para-escritorios-de-advocacia` (61) | retrato/ambiente jurídico | material próprio do segmento | mistas | médio | 3/2 | 16/10 |
| Segmento | Médicos e clínicas | `fotos-profissionais-para-medicos` (105) + `retratos-de-medicas` (54) | retratos médicos/médicas | atende a representação de médicas e profissionais mais jovens | mistas | médio | 3/2 | 16/10 |
| Segmento | Executivos/empresários | `fotografia-corporativa-em-sao-paulo` (43) | retrato executivo | autoridade | vertical | médio no 3/2 | 3/2 | 16/10 |
| Segmento | Empresas/equipes | `fotografo-de-grupos-times-e-equipes` (22) | grupo | única galeria de equipe; acervo pequeno, escolher com cuidado | horizontal | baixo | 3/2 | 16/10 |
| Segmento | Eventos corporativos | `fotografo-festa-de-confraternizacao` (106) + eventos | evento/plateia | volume alto | horizontal | baixo | 3/2 | 16/10 |
| Segmento | Palestrantes | `fotografo-de-eventos-corporativos` (palco) | palestrante no palco | comprova o cenário do palestrante | horizontal | baixo | 3/2 | 16/10 |
| Vídeo | 4 cards | `i.ytimg.com/.../hqdefault.jpg` via `videoThumb` | frame real | é frame do próprio trabalho, não thumbnail genérica | 16/9 | nenhum | sim | sim |
| Blog | 3 destaques | `cover` dos posts | capa editorial | somente posts com cover real | 4/3 | baixo | sim | sim |

**PRECISA DE CURADORIA/UPLOAD DO ACERVO:** (a) posters desenhados especificamente para "treinamento" e "depoimento" em vídeo — hoje só há frame do YouTube em 480×360, aceitável mas não ideal; (b) retratos de psicólogas — não identifiquei galeria dedicada (existem médicas e dentistas); (c) uma foto de equipe forte — a galeria de grupos tem apenas 22 imagens. Nada será substituído por banco de imagens.

**Nota importante:** a seleção fina das 10 fotografias de "Trabalhos selecionados" exige olho humano. Meu plano é propor os candidatos por URL na execução e você aprovar/trocar antes de fixar — não vou escolher no seu lugar sem confirmação.

## 5. Comparação atual × proposta

| | Home atual | Home proposta |
|---|---|---|
| Primeira fotografia visível | hero como textura a 60% de opacidade | fotografia nítida, sem overlay, no 1º viewport |
| Fotografias no primeiro percurso (até 2 scrolls) | 1 fundo + 5 miniaturas de card | 1 hero + 10 trabalhos curados |
| Retratos | implícitos em capas de categoria | pilar explícito, 6 fotos |
| Eventos | sem bloco próprio | pilar explícito, 4 fotos + card grande de serviço |
| Vídeo | 3 thumbs sem dimensão, no fim | 4 finalidades com frame real, dimensionado |
| Presença do Alexandre | preservada (bloco Quem é o Alê) | preservada, agora após a prova visual — mais persuasiva |
| Mobile | ~2 telas de texto antes de qualquer trabalho | fotografia no 1º e no 2º viewport; segmentos com foto |
| CTAs no hero | 3 concorrentes | 2 hierarquizados |

## 6. Performance

- **LCP:** imagem do hero, `fetchPriority="high"`, `preload` com `imageSrcSet` casado (padrão já existente em `index.tsx:31-37`). Largura efetiva desktop ~640px em vez de 1920px.
- **Carregamento inicial:** 1 imagem eager (hero) + as 2 primeiras de Trabalhos com `loading="lazy"` mas prioridade alta; todas as demais lazy. Estimativa acima da dobra: **3 imagens, ~120-180KB** em WebP `q=74`.
- **Lazy:** tudo de Serviços, Segmentos, Vídeo, Blog e Depoimentos, com `LazySection` onde já é usado.
- **CLS:** `width`/`height` ou `aspect-ratio` obrigatórios em **todas** as novas imagens; corrige o defeito atual dos cards de vídeo.
- **Responsivo:** `sizes` por bloco (hero `(max-width:768px) 100vw, 42vw`; trabalhos `(max-width:640px) 100vw, 33vw`; segmentos `(max-width:640px) 100vw, (max-width:1024px) 50vw, 380px`). Formato WebP via proxy; AVIF não é oferecido pelo proxy atual — não vale trocar de proxy nesta fase.
- **Mobile primeiro:** grid de trabalhos entrega 4 imagens e um botão, não 10.

## 7. Riscos SEO

Nada nesta fase toca URLs, slugs, redirects, canonicals, H1, titles, meta descriptions, sitemap, robots, páginas da Fase 5, arquitetura ou links internos comerciais. Mudanças são de composição, ordem de DOM e imagens.

Dois itens que preciso destacar para aprovação explícita:
1. **Hero deixa de usar `featured[0].cover`** e passa a uma imagem curada fixa — muda o `alt` e o `og`/preload do hero (não muda title/canonical).
2. **Campo `imagem` dos segmentos vai para `<details>`** — permanece no HTML e indexável, mas deixa de ser texto visível por padrão. Se preferir 100% visível, mantenho como está e apenas adiciono a foto.

## 8. Arquivos que seriam modificados na execução

- `src/routes/index.tsx` — hero, nova seção Trabalhos Selecionados, reordenação, cards de vídeo e blog com dimensões
- `src/components/site/SegmentGrid.tsx` — campo de imagem por segmento + layout com foto
- `src/components/site/ServiceChooser.tsx` — hierarquia 2+1+2 e troca de 2 imagens
- `src/data/homeCuration.ts` — **novo**: curadoria (10 trabalhos, 6 fotos de segmento, 4 vídeos, hero) em um único arquivo de dados, para revisão fácil
- `src/lib/img.ts` — possível adição de um preset de `sizes`/larguras para o grid editorial (sem mudar o comportamento atual)

Nenhum outro arquivo. Nada de rota, sitemap, SEO ou dados de catálogo.

## 9. Aguardando aprovação

Não executo nada até sua aprovação. Se aprovar, sugiro executar em duas entregas: **(a)** hero + Trabalhos Selecionados + reordenação, para você já ver o impacto; **(b)** segmentos + serviços + vídeo + blog.
