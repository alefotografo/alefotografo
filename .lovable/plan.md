# Trocar imagem do hero da home pela foto enviada

## O que será feito

Substituir a fotografia atual do hero da home (`/`) pela imagem `Ale.jpeg` enviada, mantendo o layout existente (texto à esquerda, foto à direita) e sem alterar nenhum conteúdo visível além da imagem.

## Detalhes técnicos

- A imagem atual do hero é definida em `src/data/homeCuration.ts` no objeto `heroPhoto`.
- O componente `src/routes/index.tsx` já consome `heroPhoto.src` tanto no `<img>` quanto no `<link rel="preload">` do `head()`.
- A imagem enviada tem dimensões **1217 × 1600 px** e será tratada como asset via Lovable Assets.

## Passos

1. Fazer upload de `Ale.jpeg` pelo CLI `lovable-assets`, gerando o ponteiro `src/assets/ale-hero.jpeg.asset.json`.
2. Atualizar `heroPhoto` em `src/data/homeCuration.ts`:
   - `src`: usar a URL do asset recém-criado;
   - `width`: 1217;
   - `height`: 1600;
   - `alt`: "Alexandre Machado, fotógrafo corporativo em São Paulo".
3. Manter `gallery` com o valor atual (`"fotografo-de-retratos-corporativos"`) para não quebrar metadados que ainda dependam dele.
4. Verificar se `src/routes/index.tsx` carrega a nova imagem no preload e no hero sem necessidade de alteração.
5. Rodar typecheck (`bunx tsgo --noEmit`) e validar localmente com `curl` na home.

## Fora do escopo

- Nenhuma alteração de texto, título, schema, canonical ou outros elementos da home.
- Nenhuma alteração em outras páginas ou rotas.
- Nenhum recorte ou edição da imagem — será usada na proporção original.
