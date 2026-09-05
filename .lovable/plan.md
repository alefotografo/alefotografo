Corrigir proporção e carregamento do logo no cabeçalho

1. No `src/components/site/Header.tsx`, substituir a tag `<img>` do logo por `<picture>` com source WebP e fallback PNG:
   - `<source srcSet="/img/logo-alefotografo.webp" type="image/webp" />`
   - `<img src="/img/logo-alefotografo.png" alt="Alê Fotógrafo" width="170" height="51" fetchPriority="high" decoding="async" style={{ objectFit: 'contain' }} />`
   - Manter a classe atual (`h-8 w-auto sm:h-10 lg:h-12`) para não alterar o visual.
   - Como o logo fica no cabeçalho fixo (sempre visível no primeiro carregamento), manter `fetchPriority="high"` e **não** usar `loading="lazy"`.

2. Confirmar que o rodapé (`Footer.tsx`) já usa `width={200} height={60}` com `loading="lazy"` (abaixo da dobra, está correto) e não precisa de alteração.

3. Rodar `bunx tsgo --noEmit` para garantir que o JSX está válido.
