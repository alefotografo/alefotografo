# Reduzir o travamento do celular (TBT 430ms → abaixo de 150ms)

## O que já está pronto (verificado agora, sem mudanças necessárias)

- Todas as seções abaixo da capa já são carregadas separadamente (trabalhos, sobre, vídeos, prova social, blog, dúvidas, chamada final, rodapé). O passo 2 do pedido já está aplicado.
- O Google Analytics já é carregado depois do carregamento da página, em momento ocioso. Passo 3 já aplicado.
- Não existe biblioteca de animação pesada no projeto (nada de framer-motion). Passo 4 não se aplica.
- Os ícones já são importados um a um. Passo 6 já aplicado.
- O carrossel de depoimentos usa uma biblioteca leve (24 KB) e já vem em arquivo separado, fora da primeira tela.

## O que realmente está pesando

O arquivo principal de código da home tem 699 KB antes da compressão e é o único bloco grande que roda antes da página ficar interativa. Ele é o candidato número um para o tempo de bloqueio. Dentro dele estão o motor do site inteiro e dados que a home não usa (por exemplo a lista de bairros). Além disso, os blocos abaixo da capa, embora separados, começam a baixar e executar imediatamente após a primeira pintura — exatamente na janela que o Lighthouse mede.

## Plano

1. Medir primeiro, para não trabalhar no escuro: rodar o site em modo produção local com rede e processador de celular e listar as tarefas longas com o tempo de cada uma, identificando qual arquivo as causa.
2. Enxugar o arquivo principal:
   - separar o motor de navegação e o restante das bibliotecas em arquivos próprios e cacheáveis (a regra existe hoje mas não está surtindo efeito — vou descobrir por quê e corrigir);
   - garantir que dados de outras páginas (lista de bairros, catálogo, busca, área administrativa, banco de dados) não entrem no arquivo da home.
3. Fazer os blocos abaixo da capa executarem só depois que a página estiver interativa: carregar cada um quando ele se aproxima da tela (ou em momento ocioso), mantendo o conteúdo no HTML enviado pelo servidor para não perder nada de SEO.
4. Opcional, se ainda faltar folga: trocar o carrossel de depoimentos por rolagem com encaixe em CSS puro, eliminando mais 24 KB de código.
5. Medir de novo nas mesmas condições e comparar antes/depois. Se a meta de 150 ms não for atingida, digo exatamente o que sobrou e por quê, sem prometer número que não se confirme.

## Notas técnicas

- Auditoria do passo 1 já feita: `index-*.js` 699 KB, `postBodies` 631 KB e `vendor-charts` 442 KB — os dois últimos não são carregados na home (confirmado nos preloads do HTML pré-renderizado).
- `manualChunks` em `vite.config.ts` define `vendor-tanstack`, mas nenhum arquivo com esse nome é emitido; investigar interação com o plugin do TanStack Start antes de mudar a estratégia.
- Deferir a hidratação abaixo da dobra exige cuidado com incompatibilidade de hidratação: usar um wrapper que preserva o HTML do servidor e só monta o componente no cliente ao entrar em viewport/idle.
- Medição com Playwright + PerformanceObserver (`longtask`), 3 execuções, mediana, CPU 4x e 4G lento.
