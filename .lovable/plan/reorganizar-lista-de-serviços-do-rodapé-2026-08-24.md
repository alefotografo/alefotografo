# Reorganizar lista de serviços do rodapé

## Objetivo
A coluna "Serviços" do rodapé hoje mistura 13 links (fotografia + 1 vídeo) sem hierarquia — dá a impressão de que só fazemos foto. Separar em duas colunas claras: **Fotografia** e **Vídeo**, com curadoria enxuta e sem duplicatas.

## Mudanças (apenas `src/components/site/Footer.tsx`)

### Grid do rodapé
- Passar de `lg:grid-cols-4` para `lg:grid-cols-5`.
- Logo/descrição: `md:col-span-2` (mantém).
- Adicionar coluna **Vídeo** entre Serviços e Contato.

### Coluna "Fotografia" (renomear de "Serviços")
Curadoria enxuta, sem duplicatas:
- Foto profissional
- Foto para LinkedIn
- Fotografia corporativa
- Fotografia executiva
- Retrato corporativo
- Eventos corporativos
- Fotografia para clínicas
- Fotos para médicos
- Fotos para advogados
- Portfólio corporativo

### Coluna "Vídeo" (nova)
- Vídeo corporativo (/videos)
- Vídeo institucional (/videos)
- Portfólio de vídeos (/videos)
- Reels e social (/videos)

(links apontam para /videos até haver rotas dedicadas; usar hashes/âncoras onde a página `videos.index.tsx` já tem seções)

### Coluna Contato
Sem alteração além do encaixe no novo grid de 5 colunas.

## Observação
Mudança puramente de UI/apresentação no rodapé. Nenhum outro arquivo é tocado.
