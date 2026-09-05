# Foto de capa da home: versão leve em WebP

## O que já está correto (verificado agora)

- A foto de capa **já tem largura e altura declaradas**: `width="1217"` e `height="1600"` — exatamente o tamanho real do arquivo. Não existe `height="0"` nem altura faltando.
- Ela **não** usa carregamento preguiçoso (`loading="eager"`), tem prioridade alta e decodificação assíncrona.
- Existe **apenas um** aviso de carregamento antecipado dela no cabeçalho (corrigido na tarefa anterior).
- O endereço citado na sua mensagem (`/__l5e/assets-v1/...`) é o do acervo antigo. Hoje a foto é um arquivo do próprio site em `/img/ale-hero.jpeg`, o que é melhor — não vou voltar ao endereço antigo.

## O ganho real que falta

O arquivo tem **200 KB em JPEG, em tamanho único de 1217x1600**, servido igual para celular e desktop. É o maior peso da primeira tela.

Passos:

1. Gerar versões leves da mesma foto, em WebP, nas larguras 480, 720, 1024 e 1217, além de uma versão JPEG reduzida como reserva. Estimativa: de 200 KB para cerca de 30–60 KB no celular.
2. Trocar a foto de capa por um bloco `<picture>`: primeiro as versões WebP (com as larguras acima), e a JPEG atual como reserva para navegadores antigos.
3. Manter tudo o que já está certo: largura/altura 1217x1600, prioridade alta, sem carregamento preguiçoso, mesmo texto alternativo.
4. Ajustar o aviso de carregamento antecipado para apontar para a versão WebP correta, continuando único.
5. Conferir que a capa aparece idêntica em celular e desktop e medir o peso baixado antes/depois.

Nada muda no enquadramento, no tamanho na tela ou no texto ao lado.

## Detalhes técnicos

- Variantes geradas com `ffmpeg` para `public/img/ale-hero-{480,720,1024,1217}.webp` (qualidade ~72) mais `ale-hero-720.jpg` de fallback; commitadas no repo (arquivos pequenos, sem CDN externo).
- `src/data/homeCuration.ts`: `heroPhoto` ganha `webpSrcSet` e `fallbackSrc`; `width`/`height` permanecem 1217x1600.
- `src/routes/index.tsx` (~linha 152): `<img>` passa a `<picture><source type="image/webp" srcSet={...} sizes="(max-width: 768px) 100vw, 40vw"><img ... /></picture>`; `imgUrl`/`imgSrcSet` não se aplicam a caminhos locais (retornam o próprio caminho), então o srcSet passa a ser explícito.
- `head().links` da home: um único `{ rel: "preload", as: "image", href: hero 720 webp, imageSrcSet, imageSizes, fetchPriority: "high" }` — mantendo o cuidado de não duplicar com o preload automático do React (o automático segue o `<img>` de fallback; se houver duplicidade, fica só o manual do WebP).
- Verificação: `curl` no HTML da home (um único preload, atributos presentes) e captura visual em 390px e 1280px.
