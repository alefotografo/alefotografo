# Reformulação da Home — Regras de Trabalho (Alê Fotógrafo)

## Escopo permitido
- Tocar apenas na rota `/` (`src/routes/index.tsx`) e em componentes novos criados exclusivamente para ela (um componente por arquivo, nomeado como o cliente nomear).

## Proibições (sem exceção — conflito = parar e reportar)
- Nenhuma outra rota/página/arquivo; nada compartilhado (Header, Footer, menu, layout global).
- Não tocar em title, meta description, canonical, Open Graph, robots, sitemap.xml.
- Não tocar nos JSON-LD existentes: LocalBusiness, ProfessionalService, FAQPage, Person.
- Não criar página nova, não instalar dependências, não renomear/mover/duplicar imagens.

## Protocolo de imagem
- Todas as fotos vêm de rotas existentes do projeto, indicadas por bloco no formato [FOTO: /rota — descrição].
- Localizar a página da rota, ler as tags img, escolher a melhor correspondente, reutilizar src e alt EXATOS. Sem mover, duplicar ou gerar versão nova.
- Rota inexistente ou sem img utilizável: container com proporção correta e fundo de token neutro + reportar. Nunca trocar de rota por conta própria.
- Nunca repetir a mesma foto em dois blocos. Proibido banco de imagens, placeholder, IA, ilustração no lugar de foto.

## Desempenho
- width/height explícitos em toda img + aspect-ratio correspondente; loading="lazy" + decoding="async" em todas exceto hero (eager + fetchpriority="high"); nunca servir imagem grande reduzida por CSS; máx. 2 imagens nos primeiros 900px; nenhum iframe no HTML inicial.

## Sistema visual
- Somente tokens de cor existentes; sem hex novo. Seções: 96px desktop / 56px mobile; 24px entre elementos, 48px antes de botão. Container 1200px, padding 24/16. Breakpoints: <768, 768–1024, >1024.
- Tipografia fixa: h1 48/32 lh1.1; h2 32/24 lh1.2; h3 20/18 lh1.3; corpo 17/16 lh1.6; legenda 14 lh1.4; rótulo 12 ls0.12em. Texto corrido máx. 68ch.

## Hierarquia de títulos
- Um único h1 (hero). Toda seção abre com h2. Título de card/item = h3. Exceção intencional: bloco RetratoProfissional abre com h3 — não corrigir. Nunca pular nível.

## Textos
- Usar exatamente o texto fornecido, sem reescrever nem corrigir. Objeções vão no fim da resposta, separadas do relatório.

## Não fazer
- Gradiente colorido, sombra colorida, emoji, ícone decorativo, selo "novo", número animado, carrossel, parallax, animação por scroll, raio >8px, botão com brilho/borda animada, texto sobre foto sem camada de contraste. Única exceção: camada de contraste no hero (cor sólida do projeto com opacidade; degradê só preto→preto transparente).

## Acessibilidade
- HTML semântico (section/article/nav), foco visível, contraste ≥4.5:1, prefers-reduced-motion. Card clicável = article relative + link no h3 com ::after cobrindo o card.

## Economia e relatório
- Uma resposta por pedido, sem perguntas de esclarecimento (única parada autorizada: ETAPA 1 do PEDIDO 4). Diff mínimo, sem formatação/lint/refactor em massa, sem testes/README/comentários. Relatório obrigatório ≤20 linhas na ordem: (1) arquivos criados, (2) alterados, (3) estrutura de títulos, (4) imagens com src e rota de origem, (5) imagens pendentes e por quê, (6) links pedidos que não existem, (7) regras contornadas e por quê.

## Estado
- Regras registradas. Aguardando o PEDIDO 1 (primeiro bloco da home) para executar.
