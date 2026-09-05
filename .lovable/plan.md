# Busca profissional e correções finais de estabilidade visual

## Objetivo

Transformar a busca existente em uma experiência instantânea e útil para clientes, exibida sob o campo no desktop e em tela cheia no celular, sem navegação automática. Em paralelo, concluir os ajustes pendentes de CLS e reduzir o arquivo do logotipo.

## Estado confirmado

- O cabeçalho hoje envia a consulta para `/busca`; a página de busca atual agrupa resultados como “Serviços e páginas”, “Artigos do blog” e “Vídeos” e usa correspondência simples por tokens.
- O conteúdo real está no catálogo local do site, não em tabelas do backend: há 35 galerias com `slug`, capa e quantidade de fotos, 72 vídeos publicados com thumbnail do YouTube e artigos com título, descrição, capa e slug.
- As galerias não usam os segmentos genéricos da proposta. Exemplos reais: `retrato-corporativo`, `fotografo-de-eventos-corporativos`, `totem-fotografico-totem-mania`, `fotografia-institucional-em-saopaulo`, `fotografia-industrial`, `fotografia-de-logistica` e `fotos-aereas`.
- Os vídeos não têm um campo de categoria; seus tipos precisam ser associados aos registros reais por uma classificação explícita e verificável.
- A foto principal já reserva a proporção real `1217 / 1600` no contêiner e informa `width`/`height`; isso será preservado e reforçado com uma classe sem mudar o enquadramento.
- Já existe fallback calibrado para Space Grotesk, mas não para DM Sans. O logo usado no cabeçalho ainda tem fallback PNG de 794 × 450 e dimensões declaradas de 170 × 51.

## Implementação

### 1. Taxonomia conectada ao conteúdo real

- Criar uma taxonomia tipada para fotos e vídeos com prioridade, termos normalizados e referências aos slugs reais do catálogo.
- Manter as intenções fornecidas (retrato, profissões, eventos, totem, institucional, produto, indústria, drone e tipos de vídeo), mas substituir segmentos sem correspondência por conjuntos de itens reais.
- Exemplos de agrupamento:
  - retratos: `retrato-corporativo`, retratos profissionais, advogados, médicos, médicas, dentistas e clínicas;
  - eventos: galerias de eventos corporativos, feiras e confraternizações;
  - totem: totem fotográfico e foto impressa na hora;
  - institucional: fotografia institucional, fotografia corporativa, equipes e bancos de imagens;
  - produto: culinária, pães, hambúrgueres, drinks e restaurantes;
  - indústria/logística: galerias industriais e logística;
  - drone: `fotos-aereas`.
- Para vídeo, cada tipo apontará para slugs reais representativos. Nenhuma seção ou cartão será criado quando o catálogo não contiver um item válido.

### 2. Motor de busca ponderado

- Evoluir o módulo de busca atual com normalização de caixa, acentos, pontuação e espaços; tokenização com palavras vazias ignoradas; correspondência exata, parcial, por frase e por conjunto de tokens.
- Aplicar pesos previsíveis para título/label, palavras-chave, descrição e prioridade, com desempate estável.
- Buscar artigos nos campos que realmente existem (`title`, `description`, `seo_title` e slug), limitando a cinco resultados mais relevantes.
- Retornar modelos prontos para a interface: galeria real com capa e URL, vídeo real com thumbnail e URL, artigo com capa e resumo.
- Manter funções puras e testáveis e registrar a busca no analytics existente apenas quando houver consulta válida, sem duplicar eventos durante re-renderizações.

### 3. Resultados inline profissionais

- Criar cartões próprios para fotos, vídeos e artigos usando os componentes e tokens visuais atuais do site.
- Exibir sempre na ordem Fotos → Vídeos → Blog, ordenando os cartões internamente por score.
- Galerias apontarão para `/fotografo-corporativo/{slug}`; vídeos para `/videos/{slug}`; artigos para `/blog/{slug}`.
- Mostrar capas reais otimizadas, texto curto, contagem por seção e estado vazio com sugestões úteis.
- Não usar emojis como ícones; usar os ícones já adotados pelo site e botões do sistema visual.
- Destacar com segurança os termos encontrados no título/resumo, sem inserir HTML bruto.

### 4. Campo de busca e comportamento

- Substituir o redirecionamento do campo do cabeçalho por resultados inline com debounce de 300 ms e mínimo de dois caracteres.
- Desktop: painel abaixo do campo, com largura estável, rolagem interna e fechamento por Escape, clique fora, limpeza ou seleção de resultado.
- Celular: busca em sobreposição de tela cheia, com campo fixo no topo, botão de fechar, rolagem dos resultados e bloqueio correto da página ao fundo.
- Garantir foco inicial, retorno de foco ao fechar, região de resultados anunciada sem transformar todo o conteúdo em um `role="status"`, navegação por teclado e alvos de toque adequados.
- Atualizar `/busca` para reutilizar o mesmo motor e os mesmos cartões quando a página for acessada diretamente, preservando seu `noindex` e os metadados atuais.
- Validar `q` com o padrão tipado do roteador e limitar seu tamanho, sem introduzir uma segunda biblioteca de navegação.

### 5. CLS de fontes e foto principal

- Ajustar o fallback de Space Grotesk 600 exatamente para a cadeia e métricas solicitadas.
- Adicionar `DM Sans Fallback` com as métricas fornecidas e incluí-lo no token global do corpo.
- Manter o fallback de títulos no token global para que todos os usos de `font-display` recebam a correção.
- Adicionar uma classe explícita ao contêiner da foto principal com proporção `1217 / 1600`, largura total e overflow oculto; preservar o enquadramento atual (`object-contain`) para não cortar o retrato, em vez de trocar silenciosamente para `cover`.

### 6. Logotipo correto para o tamanho exibido

- Gerar uma variante WebP de 112 × 64 a partir da arte existente, adequada a 2× para a exibição aproximada de 56 × 32 no celular.
- Gerar também uma variante maior somente se necessária para os tamanhos de 40/48 px usados no cabeçalho em telas maiores, servindo-as por `srcset` em vez de baixar o original 794 × 450.
- Corrigir `width` e `height` para a proporção real do logo exibido e manter o texto alternativo e a prioridade de carregamento.
- Não substituir a marca por texto ou redesenhá-la como SVG, pois isso alteraria a identidade visual sem um arquivo vetorial original.

## Arquivos previstos

- Taxonomia e motor: `src/data/searchTaxonomy.ts`, `src/lib/search.ts`.
- Interface: novos componentes de busca em `src/components/site/`, `src/components/site/Header.tsx`, `src/routes/busca.tsx`.
- Dados reutilizados: `src/data/catalog.ts`, helper de thumbnails de vídeo e otimização de imagens existentes.
- Estabilidade visual: `src/styles.css`, `src/routes/index.tsx`, `src/components/site/Header.tsx` e novas variantes do logo em `public/img/`.

## Validação

- Testes focados do ranking: acentos, caixa, termos exatos, parciais, múltiplos tokens e profissões como advogado/médico.
- Confirmar que toda galeria, vídeo e artigo exibido existe e que nenhum link retorna 404.
- Verificar debounce, mínimo de dois caracteres, Escape, clique fora, limpeza, teclado e tela cheia no celular.
- Conferir visualmente desktop 1280 px e celular 390 px, sem sobreposição, corte de texto ou salto de layout.
- Medir mudanças de layout com cache frio e fontes/imagens atrasadas; confirmar a proporção da foto antes do download.
- Conferir dimensões e bytes das novas variantes do logo, console sem erros, checagem de tipos e build completo.
