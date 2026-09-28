# Substituir foto na seção Retratos profissionais da Home pela foto enviada

## Decisão (pedido sem resposta às perguntas — defaults aplicados)
- A foto enviada (equipe em reunião, 400×166 px, paisagem) substitui a **primeira foto do array FOTOS** em `RetratoProfissional.tsx` — hoje, o retrato feminino (esquerda). O retrato masculino (direita) permanece. Se a intenção era a outra foto, basta dizer e inverto.
- A foto enviada é nova (não existe no acervo), então entra como asset do projeto via Lovable Assets — não há src de origem para reutilizar.

## Implementação
1. Upload da foto enviada:
   `lovable-assets create --file /mnt/user-uploads/image.png --filename retratos-equipe.png > src/assets/retratos-equipe.png.asset.json`
2. Alterar SOMENTE `src/components/site/home/RetratoProfissional.tsx`:
   - importar o ponteiro `.asset.json`;
   - `FOTOS[0]`: `src` = URL do asset, `alt` = "Equipe executiva em reunião em sala corporativa em São Paulo", `w: 400`, `h: 166`;
   - nada mais muda: mesmo `SmartImage` (URLs fora do rackcdn passam direto, sem proxy e sem srcset), `loading="lazy"`, `decoding="async"`, slot com `aspect-ratio 2/3` e `object-cover object-top`, texto, H3, box da Paulista, CTA e grid intocados.

## Não será alterado
Nenhuma outra seção da Home, nenhum outro arquivo, TITLE/META/H1/canonical/schema, nenhum arquivo de imagem existente do projeto.

## Objeções registradas (executarei como está)
1. A foto tem só 400×166 px — nítida apenas no tamanho atual do slot; ampliada ou em telas grandes perde definição.
2. Sendo paisagem (2,4:1) num slot vertical 2/3, o corte do `object-cover` é extremo: só uma fatia central da cena aparece (um trecho da mesa e uma ou duas pessoas), não o grupo inteiro.

## Validação
Typecheck (`bunx tsc --noEmit`) + screenshot desktop e mobile 390px da seção.
