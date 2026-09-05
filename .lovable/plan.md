# Plano: preloads da hero como primeiros elementos do `<head>`

## Contexto

O projeto usa TanStack Start, então não existe um arquivo `index.html` editável na raiz. O `<head>` é montado pelo framework a partir de `src/routes/__root.tsx` (layout global) e `src/routes/index.tsx` (rota da home). A home já exibe a hero com `<picture>` + `<img>` e já possui `loading="eager"`, `decoding="sync"` e `fetchPriority="high"` no `<img>`.

## Objetivo

Garantir que dois `<link rel="preload">` da imagem hero sejam os primeiros recursos declarados no `<head>` da home, antes de stylesheets, scripts e fontes.

## Passos

1. **Gerar as variantes da hero**
   - Criar `public/img/hero-portrait-mobile.webp` a partir de `public/img/ale-hero.jpeg`, otimizado para viewport estreito (até 768 px).
   - Criar `public/img/hero-portrait.webp` a partir de `public/img/ale-hero.jpeg`, otimizado para viewport desktop (acima de 768 px).
   - Preservar a proporção original (1217×1600) e qualidade visual.

2. **Injetar os preloads na rota `/`**
   - Em `src/routes/index.tsx`, adicionar ao `head()` existente dois links:
     - mobile: `href="/img/hero-portrait-mobile.webp"`, `media="(max-width: 768px)"`
     - desktop: `href="/img/hero-portrait.webp"`, `media="(min-width: 769px)"`
   - Ambos com `rel="preload"`, `as="image"`, `type="image/webp"`, `fetchpriority="high"`.

3. **Garantir a ordem no `<head>`**
   - Em `src/routes/__root.tsx`, o `<HeadContent />` já é o primeiro filho de `<head>`.
   - Para que os preloads da home realmente apareçam antes do CSS e fontes, mover os links render-bloqueantes do `head()` raiz (stylesheet, preloads de fonte, preconnect/dns-prefetch) para JSX estático logo após `<HeadContent />` dentro de `RootShell`.
   - Manter meta tags e JSON-LD dentro de `head()` (renderizados por `<HeadContent />`), pois não bloqueiam renderização.
   - Resultado esperado no HTML gerado:
     ```html
     <head>
       <meta charset="utf-8">
       <meta name="viewport" content="...">
       <link rel="preload" as="image" href="/img/hero-portrait-mobile.webp" ... media="(max-width: 768px)">
       <link rel="preload" as="image" href="/img/hero-portrait.webp" ... media="(min-width: 769px)">
       <title>...</title>
       <script type="application/ld+json">...</script>
       <link rel="stylesheet" href="...">
       <link rel="preload" as="font" ...>
       ...
     </head>
     ```

4. **Confirmar atributos do `<img>` hero**
   - Verificar que o `<img>` dentro do `<picture>` em `src/routes/index.tsx` já possui `fetchpriority="high"`, `loading="eager"` e `decoding="sync"`.
   - Se algum estiver faltando, adicionar.

5. **Validação**
   - Executar `bunx tsgo --noEmit` para garantir tipagem correta.
   - Executar `bun run build` e inspecionar o HTML estático gerado (ex.: `dist/client/index.html` ou saída do prerender) para confirmar a ordem dos preloads.
   - Opcionalmente medir LCP antes/depois via Playwright para confirmar melhoria.

## Restrições

- Não alterar `src/integrations/supabase/auth-attacher.ts`.
- Não reiniciar o dev server.
- Não publicar sem aprovação explícita posterior.
