# Placeholder da capa alinhado à home

## Implementação

- Adaptar a solicitação à estrutura real do site, que não possui um `index.html` editável e já entrega a home pré-renderizada no HTML.
- Adicionar o placeholder estático somente à área da foto da capa da home, dentro do mesmo contêiner e com a mesma proporção `1217 / 1600`, evitando que ele cubra o texto, o menu ou outras páginas.
- Usar o `<picture>` solicitado com:
  - `/img/hero-portrait-mobile.webp` até 768 px;
  - `/img/hero-portrait.webp` acima de 768 px;
  - `/img/hero-portrait.jpg` como fallback;
  - `fetchPriority="high"`, `loading="eager"` e `decoding="sync"`.
- Posicionar o placeholder e a imagem definitiva na mesma área reservada, sem alterar o tamanho ou a posição atual da capa.
- Adicionar ao componente da home o `useEffect` solicitado para remover `#static-hero` assim que a home montar.
- Garantir que o placeholder não seja exibido nem baixado nas demais páginas.

## Validação

- Confirmar no HTML pré-gerado que o placeholder aparece antes do conteúdo hidratado da foto e somente na home.
- Verificar em celular e desktop que a troca não produz flash, deslocamento, sobreposição ou mudança de recorte.
- Medir LCP e CLS antes/depois com o mesmo perfil de rede e processamento para confirmar ganho real.
- Executar verificação de tipos e geração completa do site.

## Observação técnica

A imagem atual já é pré-renderizada e descoberta pelo navegador durante a leitura do HTML, antes da hidratação. Por isso, esta versão preserva a intenção de pintura antecipada sem usar o bloco fixo em tela cheia, que ficaria desalinhado da foto lateral atual e apareceria indevidamente em todas as páginas.
