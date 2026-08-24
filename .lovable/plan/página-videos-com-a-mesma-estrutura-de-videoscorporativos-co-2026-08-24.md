# Página /videos com a mesma estrutura de videoscorporativos.com.br

A página atual já tem herói, prova social, portfólio em abas, FAQ e CTA. Falta o restante da estrutura da página de referência. O plano é completar a página seguindo a mesma ordem e o mesmo tipo de conteúdo, mantendo o visual atual do site (tokens, tipografia, cor ember).

## Ordem final da página

1. Herói — headline, subtítulo, CTA no WhatsApp + "Ver tipos de vídeo", busca (mantém o que existe)
2. Showreel — player em destaque com um institucional (ATIVA Logística), acima da prova social
3. Prova social de marcas (mantém)
4. Tipos de vídeo — grade de 10 tipos (institucional, treinamento, integração, depoimentos, eventos, clínicas e hospitais, escritórios e profissionais, indústria e logística, reels corporativos, campanhas e redes sociais), cada card com descrição curta e link
5. "Que tipo de vídeo sua empresa precisa?" — 8 cards com dois botões: "Solicitar orçamento" (WhatsApp com mensagem pré-preenchida) e "Saber mais"
6. Serviços em profundidade — para os principais formatos, blocos com "Para quem é", "Quando usar", "O que entregamos" e CTA de WhatsApp
7. Portfólio em abas (mantém) — acrescentar a aba "Reels e Vídeos Verticais"
8. Segmentos atendidos — 8 cards com "Desafio", "Vídeo indicado", "Benefício comercial" e CTA
9. Processo em 5 etapas — briefing/roteiro, pré-produção, captação, edição/finalização, entrega
10. Diferenciais — 6 blocos (30+ anos, direção de cena, captação profissional, edição voltada à comunicação, atendimento em SP e região, processo previsível)
11. Sobre o Alê — texto curto, métricas (+30 anos, Brasil, 3 em 1, multiformato) e link para /quem-e-o-ale
12. Depoimentos — usa o carrossel de depoimentos já existente no site
13. Contato — bloco com WhatsApp, e-mail e CTA (reaproveita o padrão de orçamento já usado nas landing pages)
14. FAQ de vídeo (mantém, ampliando as perguntas de custo, prazo, roteiro, gravação na empresa, treinamento, integração, eventos)

## Conteúdo e SEO

- Textos em português, focados em vídeo corporativo em São Paulo, sem copiar literalmente a referência.
- Links internos para /videos/$slug, /eventos-corporativos, /fotos-corporativas, /fotografia-para-clinicas, /fotografia-para-advogados, /contato e /quem-e-o-ale.
- Mantém canonical absoluto, CollectionPage e FAQPage; acrescenta Service (produção de vídeo corporativo) e o VideoObject do showreel.
- Navegação por âncoras (#tipos, #portfolio, #processo, #contato) com scroll-mt para o cabeçalho fixo.

## Detalhes técnicos

- Todo o trabalho em `src/routes/videos.index.tsx`, com blocos de conteúdo em arrays no topo do arquivo; nada de novas dependências.
- CTAs de WhatsApp via helper existente `src/lib/whatsapp.ts`, com mensagem específica por formato de vídeo.
- Reaproveita `VideoPlayer` (fachada com capa + play, sem carregar iframe no load), `TestimonialsCarousel`, `FaqList`, `Breadcrumbs` e `LazySection` para as dobras longas.
- Aba de reels adicionada em `GROUP_DEFS` com teste por título (reels/vertical/short/corte); vídeos sem match continuam em Institucional.
- Sem mudanças de dados do catálogo nem de backend.
