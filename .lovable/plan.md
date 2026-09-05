# Zerar o CLS da home no desktop sem afetar o celular

## Diagnóstico confirmado

- O título usa **Space Grotesk 600**, enquanto o texto corrido usa **DM Sans 400**. As duas fontes já são pré-carregadas, mas a família de reserva atual (`ui-sans-serif/system-ui`) não tem métricas calibradas e pode mudar as quebras de linha quando a Space Grotesk entra.
- A foto da capa é vertical, com proporção real **1217 × 1600** — portanto, não deve receber 16:9.
- Embora o `<img>` já tenha `width` e `height`, o contêiner `<picture>` não reserva a altura no layout em grade. Em uma medição desktop local, ele começou com apenas 2 px e saltou para 626 px quando a foto carregou, gerando CLS.
- Nessa medição, o único deslocamento observado foi a foto da capa. Cabeçalho, botões e títulos das seções não se moveram; por isso, não serão adicionadas alturas fixas indiscriminadamente.

## Mudanças

1. **Reserva estável para a foto da capa**
   - Aplicar ao contêiner a proporção real `1217 / 1600`, não `16 / 9`.
   - Fazer o `<picture>` ocupar o espaço reservado desde o primeiro desenho e manter a imagem contida, sem corte.
   - Preservar `width="1217"`, `height="1600"`, carregamento prioritário e o WebP responsivo existentes.
   - Usar a mesma proporção em desktop e celular para não regredir o CLS móvel.

2. **Fallback calibrado para o título**
   - Criar `Space Grotesk Fallback` com Arial local e métricas ajustadas (`ascent-override`, `descent-override`, `line-gap-override` e `size-adjust`).
   - Atualizar o token global da fonte de títulos para: `'Space Grotesk', 'Space Grotesk Fallback', Arial, sans-serif`.
   - Como todos os H1–H6 e usos de `font-display` consomem esse token, a correção valerá para o H1 da home e demais títulos sem duplicação de regras.
   - Manter o corpo em DM Sans, adicionando uma reserva equivalente apenas se a medição mostrar deslocamento no texto corrido; trocar o body para Space Grotesk alteraria a identidade tipográfica sem ajudar o H1.

3. **Demais elementos acima da dobra**
   - Repetir a captura de `layout-shift` com fonte e imagem sem cache.
   - Só adicionar `min-height` ou contenção a um elemento se ele aparecer como fonte real de deslocamento. Não usar `content-visibility` na primeira tela, pois isso pode atrasar a pintura do H1.

## Validação

- Medir desktop em 1280 px com cache frio e rede/processador reduzidos, registrando cada fonte de deslocamento.
- Medir também em 390 × 844 para confirmar que o CLS móvel continua em 0.
- Conferir visualmente que a foto mantém o enquadramento vertical e que título, navegação e botões não mudam de posição.
- Validar tipos antes de concluir.

## Detalhes técnicos

- Arquivos previstos: `src/styles.css` e `src/routes/index.tsx`.
- O fallback será declarado antes do uso e ligado pelo token `--font-display`; não existe configuração Tailwind separada neste projeto.
- A proporção será expressa por classe/utilitário no contêiner, com `<picture>` em bloco e dimensões estáveis.
