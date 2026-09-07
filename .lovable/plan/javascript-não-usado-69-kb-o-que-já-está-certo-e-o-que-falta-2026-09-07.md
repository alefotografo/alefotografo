# JavaScript não usado (69 KB) — o que já está certo e o que falta

## O que eu conferi antes de planejar

1. **Ícones**: os 33 pontos do código que usam a biblioteca de ícones já importam ícone por ícone, pelo nome. Não existe nenhum `import *` e não encontrei nenhum ícone importado sem ser usado. Não há nada para converter aqui.
2. **Pacote de fontes**: nenhuma referência ao pacote antigo de fontes em `src/` nem em `package.json`. As fontes já vêm de `public/fonts/` pelas regras próprias. Item já resolvido.
3. **Opção de build (`treeshake: { moduleSideEffects: false }`)**: hoje não existe em `vite.config.ts`. Aplicar essa opção de forma global é arriscado neste projeto — ela faz o build assumir que nenhum arquivo tem efeito colateral, o que pode remover o CSS global, o registro de rotas e a captura de erros. Proponho aplicar de forma segura (ver abaixo) em vez de literalmente global.
4. **Página inicial**: a home hoje importa direto apenas dados pequenos; os pesos grandes (`postBodies.json` 648 KB, `categoryImages.json` 341 KB, catálogo 210 KB) pertencem a outras páginas.

## O que vou fazer

1. Ligar a limpeza de código morto de forma segura no build: marcar as bibliotecas puras (ícones, utilitários) como sem efeito colateral, preservando CSS, rotas e captura de erros.
2. Rodar o build e listar os tamanhos reais de cada arquivo gerado (bruto e comprimido), destacando os acima de 50 KB.
3. Com a lista na mão, verificar se o arquivo principal passa de 120 KB comprimido. Se passar, encontro o maior item dentro dele e separo em arquivo próprio, carregado só na página que precisa.
4. Conferir no celular e no computador que todas as seções, a busca e o rodapé continuam funcionando, sem salto de layout e sem erros.
5. Trazer o resultado final: tamanhos antes e depois, e quanto de código não usado sobrou.

## Detalhes técnicos

- `vite.config.ts`: em vez de `treeshake.moduleSideEffects: false` global, usar a forma de função/lista — `moduleSideEffects: (id) => /\.css($|\?)/.test(id) || id.includes('routeTree.gen') || id.includes('error-capture') ? true : false` — evitando a remoção de CSS e de módulos com registro por efeito colateral.
- Confirmar que `lucide-react`, `catalog.*.json`, `postBodies.json` e `categoryImages.json` continuam em chunks próprios via `manualChunks` e imports dinâmicos.
- Métrica de aceite: arquivo de entrada do cliente < 120 KB comprimido e "JavaScript não usado" abaixo de 30 KB na home.
