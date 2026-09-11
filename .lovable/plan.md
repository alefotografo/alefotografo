# Cirurgia 04 — Home: Trabalhos Selecionados e Segmentos

## Objetivo
Melhorar hierarquia visual, leitura B2B e experiência mobile nas seções "Trabalhos selecionados" e "Experiência em diferentes segmentos", sem alterar conteúdo, SEO, URLs, ordem das demais seções ou componentes já aprovados.

## Escopo de alteração
Apenas estes arquivos:
- `src/components/site/home/HomeSelectedWorks.tsx`
- `src/components/site/SegmentGrid.tsx`
- `src/routes/index.tsx` (somente para confirmar/manter ordem, se necessário)

## NÃO alterar
Hero, FaixaClientes, SolucoesEmpresa, BancoDeImagens, VideoProducao, EventoCompleto, AgilidadeProva, RetratoProfissional (conteúdo), HomeAbout, HomeBlog, HomeFaq, HomeCta, Footer, SEO técnico, H1, title, meta description, URLs, slugs, canonical, schemas, sitemap, robots, redirects, páginas locais.

## Alterações planejadas

### 1. Trabalhos selecionados (`HomeSelectedWorks.tsx`)
- Manter os 6 cards/categorias B2B atuais e seus links.
- Manter título "Trabalhos selecionados".
- Adicionar apoio curto abaixo do título: "Uma seleção de projetos realizados para empresas, profissionais e diferentes segmentos."
- Manter prioridade visual: imagem + título curto + link, sem descrição longa nos cards.
- Ajustar espaçamento vertical para reduzir excesso no mobile, alinhando ao sistema visual (56px mobile / 96px desktop).
- Garantir que o grid inteiro permaneça sem overflow horizontal e que os cards (já são links) mantenham área de toque adequada.

### 2. Segmentos (`SegmentGrid.tsx`)
- Manter título "Experiência em diferentes segmentos" e os 6 segmentos atuais com todos os links.
- Adicionar apoio curto abaixo do título: "Experiência em produções realizadas em diferentes ambientes e setores empresariais."
- Preservar visual distinto dos cards de "Trabalhos selecionados" (card com borda, imagem acima, título e link abaixo).
- Ajustar espaçamento vertical no mobile para reduzir excesso.
- Aumentar área de toque dos links "Ver..." sem mudar a semântica atual.
- Garantir ausência de overflow horizontal.

### 3. Ordem na Home (`src/routes/index.tsx`)
- Verificar se a sequência regional permanece: Retratos Profissionais → Trabalhos selecionados → Experiência em diferentes segmentos → Sobre Alexandre Machado.
- Se já estiver nessa ordem, não alterar. Se houver desvio, apenas reposicionar os componentes dentro do `Suspense`, sem tocar nos demais.

## Validação
- `bunx tsgo --noEmit`.
- Preview desktop (1280x1800) e mobile (390x844) via Playwright.
- Verificar: 6 cards em Trabalhos selecionados, 6 segmentos, textos de apoio presentes, sem overflow horizontal, áreas de toque adequadas, ordem correta.
