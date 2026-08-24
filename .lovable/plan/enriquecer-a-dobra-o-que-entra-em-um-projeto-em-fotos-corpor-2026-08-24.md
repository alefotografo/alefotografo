# Enriquecer a dobra "O que entra em um projeto" em /fotos-corporativas

## O que muda

1. **Imagem em cada caixa de especialidade**
   Cada um dos blocos da dobra "O que entra em um projeto de fotos corporativas" ganha uma
   miniatura no topo do card (proporção 16/10, lazy-load, largura otimizada), no mesmo padrão
   visual dos cards de serviço da home. Blocos atuais: retratos e executivos, equipes e cultura,
   escritórios/fábricas, eventos corporativos, produtos e institucional, vídeo corporativo.

2. **Vídeo corporativo com destaque real**
   O bloco "Vídeo corporativo integrado" passa a ter imagem e link "Ver vídeos corporativos"
   apontando para `/videos`, deixando claro que a mesma diária pode gerar foto e vídeo.
   Cada card também recebe um link discreto para a galeria correspondente
   (`/fotografo-corporativo/$slug`) quando existir.

3. **Nova dobra "Mais especialidades"**
   Abaixo dos blocos, uma grade em cards com imagem — no mesmo estilo das galerias por segmento —
   com especialidades adicionais: fotografia industrial, fotos aéreas, arquitetura e interiores,
   feiras de negócios e stands, empreendimentos imobiliários, culinária, drinks, totem fotográfico,
   festa de confraternização e banco de imagens para empresas. Cada card leva à galeria própria.
   A lista atual de chips "Galerias por segmento" continua, servindo como índice completo.

## Detalhes técnicos

- Editar somente `src/routes/fotos-corporativas.tsx`.
- Estender o array `blocos` com `img`, `to`/`catSlug` e rótulo de link.
- Imagens vindas das capas reais das categorias (`categoryBySlug(slug).cover`) com fallback fixo,
  servidas via `imgUrl()` (WebP + resize) e `loading="lazy"` + `width/height` para evitar CLS.
- A nova dobra reutiliza o padrão de card já existente no site (borda, `bg-surface`, hover `ember`),
  sem novos componentes nem mudanças de dados.
- Nenhuma alteração de SEO/schema é necessária; os links internos adicionais reforçam o crosslink.
