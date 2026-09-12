# SEO — Cirurgia 08B — Propriedade Semântica e Links Internos

## Objetivo
Clarificar a função de cada URL apenas ajustando dois links internos na Home, sem reescrever conteúdo, títulos, metadados, schemas, URLs, slugs, redirects, sitemap, robots ou layout.

## Mudanças

1. **Hero — CTA secundário**
   - Arquivo: `src/components/site/home/HomeHeroNovo.tsx`
   - Alterar o texto-âncora do Link para `/fotografo-corporativo` de `"Fotografia corporativa"` para `"Ver portfólio corporativo"`.
   - Destino permanece `/fotografo-corporativo`.
   - Posição, estilo, CTA primário (WhatsApp) e layout inalterados.

2. **Card "Fotografia Corporativa" na seção Soluções**
   - Arquivo: `src/components/site/home/SolucoesEmpresa.tsx`
   - Alterar o destino do card `"Fotografia Corporativa"` de `/fotografo-corporativo/fotografia-institucional-em-saopaulo` para `/fotos-corporativas`.
   - Manter o texto `"Fotografia Corporativa"`, descrição, imagem, alt e layout.
   - Implementação: trocar o item no array `CARDS` de `slug: "fotografia-institucional-em-saopaulo"` para `to: "/fotos-corporativas"`.

## Preservado
- Title, meta description, H1, H2, H3, canonical, schemas, robots, sitemap da Home.
- Todas as demais URLs, slugs, redirects, páginas locais, FAQ, blog, footer, imagens, alt texts, CSS, layout, mobile e performance.
- `/fotografo-corporativo/fotografia-institucional-em-saopaulo`, `/fotografo-corporativo/retrato-corporativo`, `/foto-profissional`, `/fotografo-empresarial` e `/fotografo-corporativo/fotografia-de-logistica` permanecem inalteradas e linkadas como antes.

## Validação
- `bunx tsgo --noEmit` deve passar.
- Hero deve exibir `"Ver portfólio corporativo"` apontando para `/fotografo-corporativo`.
- Card `"Fotografia Corporativa"` deve apontar para `/fotos-corporativas`.
- Nenhuma outra página alterada.
