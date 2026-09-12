# Home — Microalteração — Soluções

## Alterações

1. **Card “Fotografia Industrial” em Soluções**
   - Alterar somente o sexto card de `SolucoesEmpresa`.
   - Título: **Vídeos de Feiras e Eventos**.
   - Texto: **Produção de vídeos para feiras, congressos e eventos corporativos, com captação de stands, entrevistas, apresentações e melhores momentos.**
   - Destino: `/videos/sq-quimica-na-fce-pharma-cobertura-profissional-em-video-para-feiras-e-eventos-c`.
   - Motivo do destino: é uma página individual existente cujo título identifica explicitamente uma cobertura profissional em vídeo para feiras e eventos corporativos.
   - Imagem existente: capa do vídeo `WGtAZjK5v9Q`, da SQ Química na FCE Pharma, sem reutilização atual na Home.
   - Alt: **Capa da produção em vídeo da SQ Química na feira FCE Pharma**.
   - Preservar posição, estrutura, grid, estilos e os outros cinco cards integralmente.

2. **Card “Indústria” em Trabalhos selecionados**
   - Alterar somente o destino de `fotografia-industrial` para `fotografia-industrial-em-sp` em `homeCuration`.
   - Preservar título, imagem, alt, posição e apresentação do card.

## Arquivos previstos

- `src/components/site/home/SolucoesEmpresa.tsx`
- `src/data/homeCuration.ts`

## Validação

- Confirmar na Home o novo título, texto, destino, capa e alt do sexto card.
- Confirmar “Indústria” apontando diretamente para `/fotografo-corporativo/fotografia-industrial-em-sp`.
- Confirmar a página industrial vencedora com HTTP 200 e o endereço antigo mantendo redirect permanente direto.
- Conferir que nenhum outro elemento da Home mudou e executar o typecheck.
