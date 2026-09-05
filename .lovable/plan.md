# Plano: reduzir JavaScript antes da primeira pintura

## 1. Imagens fora da capa
- Manter a foto principal como a única imagem de alta prioridade, com carregamento imediato.
- Confirmar `loading="lazy"` em todas as outras imagens e preservar dimensões explícitas para evitar deslocamento visual.
- O levantamento atual encontrou dimensões em todas as 30 imagens; a única imagem sem `loading` explícito é o logotipo do cabeçalho, que já é de alta prioridade e receberá `loading="eager"`, não `lazy`.

## 2. Dividir o conteúdo inferior da home
- Extrair os blocos abaixo da capa para módulos próprios: trabalhos selecionados, escolha de serviço, segmentos, apresentação do fotógrafo, vídeos, avaliações, blog, FAQ e contato final.
- Carregar esses módulos com `React.lazy` e `Suspense`, mantendo a ordem, o conteúdo e o HTML pré-gerado para SEO.
- Manter a capa no arquivo inicial e preservar a mesma lista de FAQ usada no texto visível e no JSON-LD.
- O rodapé é global, não pertence à home; convertê-lo para importação dinâmica no layout global, sem duplicá-lo na página inicial. O carrossel de depoimentos global já usa carregamento dinâmico e será mantido.

## 3. Limpar componentes Shadcn/Radix sem uso
- Preservar `button` e `carousel`, que têm importações reais no site.
- Remover somente os arquivos em `src/components/ui/` sem qualquer uso direto ou indireto.
- Remover do projeto as dependências Radix correspondentes que ficarem sem consumidor após essa limpeza; manter utilitários e bibliotecas ainda usados fora dessa pasta.

## 4. Confirmar a limpeza do Tailwind
- Não criar `tailwind.config.ts`: o projeto usa Tailwind 4.2.1, cuja configuração correta já está em `src/styles.css` com detecção limitada a `src`.
- Manter `@import "tailwindcss" source(none)` e `@source "../src"`; não há safelist ativa para remover.

## Validação
- Rodar a checagem de tipos e a geração das 55 páginas estáticas.
- Comparar o JavaScript inicial e os novos blocos separados no resultado de produção.
- Verificar a home em celular e desktop, incluindo foto principal, conteúdo inferior, rodapé, CLS e erros no navegador.
- Medir novamente LCP, tarefas longas e tempo de execução em celular; ajustar somente se houver regressão ou a meta atual deixar de ser atendida.
- Não publicar sem uma nova solicitação explícita.
