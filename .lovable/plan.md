# Entrega 1 — Fase 6B (Hero + Trabalhos Selecionados + Reordenação)

Escopo restrito: somente Hero, bloco "Trabalhos Selecionados", reordenação dos blocos existentes e criação de `src/data/homeCuration.ts`.
NÃO serão tocados nesta entrega: `ServiceChooser`, `SegmentGrid`, apresentação de vídeo, cards visuais do blog.
Ajuste 1 acatado: nada de `<details>` nos segmentos agora — densidade será tratada depois, por tipografia/espaçamento/layout/foto.

## 1. Ordem final dos blocos da Home

```text
1  Hero (texto + fotografia real)
2  Trabalhos Selecionados (~10 fotos reais, 2 pilares)
3  Serviços (ServiceChooser — inalterado)
4  Segmentos (SegmentGrid — inalterado)
5  Quem é o Alê
6  Vídeos (inalterado)
7  Depoimentos
8  Blog (inalterado)
9  FAQ
10 CTA final
```

Nenhum bloco é removido; nenhum texto é apagado. Apenas a ordem muda e o Hero/Trabalhos são reescritos visualmente.

## 2. Hero — asset proposto e 2 alternativas

Todos do acervo real (Rackspace, servidos via `src/lib/img.ts`).

| # | Papel | Arquivo | Galeria | Por que funciona |
|---|---|---|---|---|
| A | **Definitivo proposto** | `retrato-corporativo_helio-martins-borges-filho-4.jpg` | Retrato Corporativo | Executivo consolidado, 40+, olhar direto, fundo limpo — sustenta recorte vertical no mobile e lateral no desktop |
| B | Alternativa | `retratos-profissionais_retrato-corporativo-profissionais-fotografo-alefotografo0047.jpg` | Banco de imagens para empresas | Retrato profissional com respiro lateral, aceita crop 4:5 e 3:2 |
| C | Alternativa | `fotografia-para-escritorios-de-advocacia_fotografia-profissional-de-advogados-11.jpg` | Escritórios de advocacia | Autoridade jurídica, ambiente corporativo real, bom para recorte largo |

Se, na renderização, o recorte de A não sustentar mobile, uso B sem novo pedido de aprovação — a troca é uma linha em `homeCuration.ts`.

Regras do Hero:
- fotografia como elemento real (sem `opacity-60`, sem textura); desktop = grid texto + foto; mobile = foto em destaque com altura controlada
- H1, copy, métricas, `title`, `canonical`, `meta` **preservados literalmente**
- 2 CTAs principais: orçamento no WhatsApp + "Ver trabalhos"; terceiro link (agendamento) mantido como link textual secundário
- imagem do Hero: `loading="eager"`, `fetchpriority="high"`, `width`/`height` explícitos, `preload` no `head().links` da rota `/`

## 3. Trabalhos Selecionados — curadoria provisória (10)

Jornada por foto: FOTOGRAFIA → PROVA (galeria) → SERVIÇO → CONVERSÃO. Fotos apontam para a galeria/case quando ela agrega prova; os CTAs dos pilares levam às páginas comerciais.

| # | Pilar | Galeria de origem | Orientação | Destino do clique | Justificativa |
|---|---|---|---|---|---|
| 1 | Retrato | Retrato Corporativo | Vertical | `/portfolio/retrato-corporativo` | C-level, direção de pose evidente |
| 2 | Retrato | Escritórios de advocacia | Vertical | `/portfolio/fotografia-para-escritorios-de-advocacia` | Advogados — público real |
| 3 | Retrato | Retratos de Médicas | Vertical | `/portfolio/retratos-de-medicas` | Representação feminina / saúde |
| 4 | Retrato | Fotos Profissionais para Médicos | Vertical | `/portfolio/fotos-profissionais-para-medicos` | Médicos em ambiente real |
| 5 | Retrato | Banco de imagens para empresas | Horizontal | `/portfolio/fotografo-de-retratos-profissionais` | Retrato profissional em contexto |
| 6 | Retrato/Equipe | Grupos, Times e Equipes | Horizontal | `/portfolio/fotografo-de-grupos-times-e-equipes` | Liderança e equipe |
| 7 | Evento | Fotógrafo de Eventos Corporativos | Horizontal | `/portfolio/fotografo-de-eventos-corporativos` | Palco / palestrante |
| 8 | Evento | Fotógrafo de Eventos Empresariais | Horizontal | `/portfolio/eventos-corporativos` | Público e plateia |
| 9 | Evento | Feiras e Stands | Horizontal | `/portfolio/fotografo-feiras-stands` | Marca, ambiente, networking |
| 10 | Evento | Festa da Firma | Horizontal | `/portfolio/fotografo-festa-de-confraternizacao` | Interação e clima corporativo |

Proporção final ~6 retratos / 4 eventos, com prioridade a qualidade da imagem e representação dos dois pilares (regra não rígida). Dois CTAs de pilar abaixo do grid: **Retratos Corporativos** → página comercial de retrato; **Cobertura de Eventos Corporativos** → página comercial de eventos. URLs exatas confirmadas contra as rotas existentes antes de escrever.

Grid editorial responsivo (mistura vertical/horizontal), `SmartImage` com `srcset`/`sizes`, dimensões explícitas, `loading="lazy"` em todas (Hero é a única `eager`).

## 4. Mobile (validação obrigatória)

- Hero: foto com altura contida (~52–58vh), H1 legível sem quebra feia, 1º CTA acima da dobra
- Trabalhos Selecionados aparece logo após o Hero, começando com 4–6 imagens visíveis/carregáveis; restante lazy
- espaçamento vertical próprio de mobile (não é o desktop empilhado)
- CLS zero: proporções reservadas em todas as imagens
- alvos de toque ≥ 44px
- validação com Playwright em 390px e 1280px, com screenshots

## 5. Proteção SEO

Preservados integralmente: URLs, slugs, redirects, canonicals, `title`, H1, meta descriptions, textos semânticos, páginas da Fase 5, sitemap, robots, structured data e links internos existentes. A reordenação não remove conteúdo. Nenhum link interno atual da Home é excluído.

## Detalhes técnicos

Arquivos previstos:
- `src/data/homeCuration.ts` (novo) — fonte única da curadoria: hero (definitivo + alternativas), trabalhos selecionados (url, galeria, pilar, orientação, destino, alt), e chaves reservadas para segmentos/vídeos/artigos (usadas em 6C/6D). Sem duplicar dados que pertencem ao catálogo — referência por slug + arquivo.
- `src/routes/index.tsx` — Hero reescrito, novo bloco Trabalhos Selecionados, reordenação, `preload` do LCP no `head()`.
- Nenhum outro arquivo é modificado.

Validações: `tsgo` (typecheck), HTTP 200 em `/`, checagem de que `title`/`canonical`/H1/meta da Home continuam byte-idênticos, screenshots desktop+mobile, e relatório com os 15 itens solicitados.

Ao final: PARO. Não avanço para 6C/6D.
