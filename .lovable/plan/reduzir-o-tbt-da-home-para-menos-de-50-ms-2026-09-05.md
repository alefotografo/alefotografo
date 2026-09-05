# Reduzir o TBT da home para menos de 50 ms

## Diagnóstico confirmado

- O layout global, o rodapé, os utilitários de SEO/WhatsApp e a home importam `src/data/catalog.ts`.
- Esse módulo importa `catalog.json` inteiro (**561 KB**: 426 KB de galerias, 103 KB de posts e 33 KB de vídeos) e, ao ser avaliado, decodifica textos, percorre listas e executa várias ordenações síncronas.
- A home precisa apenas de poucos posts, vídeos, títulos de galerias e dados da empresa, mas hoje paga o custo do catálogo completo e das listas de milhares de imagens.
- `TestimonialsCarousel` é importado estaticamente no layout global. O `LazySection` adia sua montagem, mas não adia o download e a avaliação do componente nem do Embla Carousel.
- O Google Analytics já não bloqueia o `<head>`, porém é iniciado imediatamente no evento `load`, podendo disputar a thread principal com hidratação e tarefas pós-carregamento.
- Não há `framer-motion` nem `react-icons` no caminho da home. Os ícones do Lucide já usam imports nomeados. Mapas, editores e gráficos não entram nessa rota.
- O Vite possui divisão manual de pacotes, mas não declara explicitamente `target: "es2020"` e `minify: "esbuild"`.

## Implementação

1. **Retirar o catálogo pesado do carregamento inicial**
   - Extrair os dados da empresa para um módulo pequeno e trocar os imports globais (`__root`, rodapé, WhatsApp e SEO), evitando que qualquer página carregue o catálogo só para exibir nome, telefone ou endereço.
   - Criar um índice leve de galerias, sem os arrays de imagens, para títulos, capas e navegação.
   - Separar os índices de posts e vídeos usados em listagens do arquivo com o acervo completo.
   - Fazer a home importar apenas os três posts, três vídeos e títulos necessários, sem analisar os 561 KB do catálogo.
   - Preservar o catálogo completo somente nas rotas de galeria que realmente precisam das listas de fotos.

2. **Carregar o carrossel somente quando necessário**
   - Trocar o import estático por `React.lazy()` com `Suspense` dentro da seção já observada.
   - Manter um espaço reservado estável para não reintroduzir CLS.
   - Assim, Embla, lógica e dados de depoimentos ficam fora do pacote inicial e só são avaliados quando a área se aproxima da tela.

3. **Tirar tarefas não essenciais da janela de interatividade**
   - Agendar o Analytics com `requestIdleCallback`, com fallback e atraso máximo seguro, em vez de executá-lo imediatamente no `load`.
   - Manter o script externo assíncrono e o rastreamento de visitas ativo.
   - Não alterar preloads do roteador sem evidência em trace; o valor atual de cache não cria trabalho sozinho sem uma ação de preload.

4. **Ajustar a saída moderna do Vite**
   - Definir explicitamente `build.target = "es2020"` e `build.minify = "esbuild"`.
   - Revisar os chunks produzidos e manter separados apenas os pacotes que realmente são carregados sob demanda; evitar pequenos chunks globais que aumentem avaliação e encadeamento de requisições.
   - Confirmar que nenhum polyfill legado é emitido.

## Validação

- Registrar antes/depois com build de produção, cache frio e os mesmos perfis de celular e desktop.
- Inspecionar as long tasks pela atribuição do Performance Timeline/Chrome trace, não apenas pelo número agregado.
- Meta de aceite: **TBT abaixo de 50 ms e nenhuma tarefa JavaScript acima de 50 ms** na home, nos dois perfis.
- Conferir que menu, busca, WhatsApp, links, carrossel, Analytics e navegação continuam funcionando.
- Revalidar LCP e CLS para garantir que a redução de JavaScript não prejudique a foto de capa nem o CLS zero já alcançado.

## Arquivos previstos

- `src/data/catalog.ts` e novos módulos leves de índice/configuração.
- Importadores globais e da home que hoje dependem do catálogo completo.
- `src/routes/__root.tsx`, `src/components/site/LazySection.tsx` e `src/components/site/DeferredAnalytics.tsx`.
- `vite.config.ts`.
