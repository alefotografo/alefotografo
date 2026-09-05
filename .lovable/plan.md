# Acessibilidade: subir de 88 para 100

Objetivo: corrigir os cinco pontos apontados pela auditoria, sem mudar o visual escuro do site.

## O que eu confirmei no site antes de planejar

- As estrelas dos depoimentos são caixas de texto com rótulo "X de 5 estrelas" em quatro lugares (página inicial, página de depoimentos, carrossel e bloco de depoimentos). Nenhuma delas se identifica como imagem — é exatamente o erro de atributo proibido.
- O site é escuro (fundo quase preto, texto claro). Portanto a receita "cinza #767676 sobre branco" do pedido não se aplica aqui; o caminho é o inverso: clarear os textos apagados. Os candidatos reais são textos com transparência: o parágrafo apagado a 80% na página inicial, o texto de exemplo dos campos do formulário de contato a 60% e ícones/textos laranja a 70%.
- Os links dentro de texto corrido em geral já são sublinhados; achei ao menos um caso no rodapé que só ganha sublinhado ao passar o mouse.
- O logotipo no rodapé aparece com a descrição "Alê Fotógrafo" logo ao lado do mesmo nome escrito — descrição redundante.
- Links repetidos ("Ver todos", setas, "Ver mais") existem em várias seções; preciso listar os casos reais com a ferramenta de auditoria antes de renomear, para não inventar nomes onde já estão corretos.

## O que vou fazer

1. **Medir primeiro.** Rodar a auditoria automática de acessibilidade nas páginas principais (início, serviços, depoimentos, contato, uma página de bairro, blog) e guardar a lista exata de elementos reprovados. Isso evita alterar o que já está certo.
2. **Estrelas e blocos rotulados.** Marcar as avaliações em estrelas como imagem com nome acessível. Revisar os outros rótulos em caixas/seções: onde o rótulo faz sentido, garantir que a caixa seja uma seção/grupo legítimo; onde não faz, remover.
3. **Contraste.** Trocar os textos com transparência por tons cheios do sistema de cores, garantindo no mínimo 4,5:1 (3:1 para textos grandes): parágrafo apagado da página inicial, texto de exemplo dos campos do formulário, ícones e textos laranja rebaixados. Se algum tom do tema em si ficar abaixo do mínimo, ajusto o tom no arquivo central de estilos em vez de remendar página por página.
4. **Links no texto.** Garantir sublinhado permanente em todos os links dentro de parágrafos e listas (não apenas ao passar o mouse). Menus, botões e cartões clicáveis ficam como estão, pois já têm outros sinais visuais.
5. **Descrições de imagem redundantes.** Deixar a descrição vazia no logotipo do rodapé e em qualquer outra imagem cuja descrição repita o texto ao lado.
6. **Links com o mesmo nome.** Para cada caso confirmado na medição, dar nome próprio ao link ("Ver todos os depoimentos", "Ver serviço: retrato executivo") ou um rótulo acessível específico, mantendo o texto curto visível quando o desenho exigir.
7. **Verificar de novo.** Repetir a auditoria nas mesmas páginas e conferir: zero atributos proibidos, zero falhas de contraste, links de texto sublinhados, descrições únicas. Também rodo a checagem de tipos do projeto.

## Detalhes técnicos

- `role="img"` nos `<span>`/`<div>` de estrelas em `src/routes/index.tsx`, `src/routes/depoimentos.tsx`, `src/components/site/TestimonialsCarousel.tsx`, `src/components/site/Testimonials.tsx`.
- Substituir `text-muted-foreground/80`, `placeholder:text-muted-foreground/60`, `text-ember/70` por tokens sem opacidade; se necessário, elevar `--muted-foreground` em `src/styles.css` (hoje `oklch(0.68 0 0)` sobre `oklch(0.18 0 0)`).
- Sublinhado persistente: trocar `hover:underline` por `underline` + `underline-offset-4` em links de texto corrido (ex.: `src/components/site/Footer.tsx:193`, ocorrências equivalentes em `index.tsx`).
- `alt=""` em `src/components/site/Footer.tsx:89` (logotipo ao lado do nome).
- Auditoria via Playwright + axe-core em `/tmp/browser/a11y/`, viewport 1280×1800; verificação final com `bunx tsgo --noEmit`.
- Nenhuma alteração de regra de negócio, dados ou backend.
