# Auditoria de imagens externas e plano de saneamento

## O que a varredura encontrou (verificado agora)

**1. images.weserv.nl** — 3 arquivos:
- `src/lib/img.ts`: é o serviço que gera de fato o endereço de toda foto do acervo hoje (todas as galerias, capas, retratos).
- `src/routes/__root.tsx` (linhas 149–150): `preconnect` + `dns-prefetch` para esse serviço.
- `src/routes/api/public/img.ts`: já existe um caminho de imagem **no seu próprio domínio** (`/api/public/img`), pronto e com lista de segurança, mas **não está sendo usado por nenhuma página**.

**2. `/__l5e/assets-v1/`** — 4 arquivos hospedados fora do repositório:
- logo (cabeçalho, rodapé e artigos), foto de capa da home (`ale-hero.jpeg`), imagem padrão de compartilhamento (`og-alefotografo-camera.jpg`), 1 capa de artigo (`blog-30-poses-cover.jpg`).

**3. `dns-prefetch` para rackcdn.com** — 1 ocorrência, `src/routes/__root.tsx` linha 151.

**4. Imagens externas ao alefotografo.com.br**
- `...ssl.cf1.rackcdn.com` (acervo legado): **2.445 fotos** no catálogo + 19 usos fixos em páginas. É onde vive praticamente todo o acervo.
- `images.unsplash.com`: 30 capas de artigo + 65 imagens dentro de artigos.
- `i.ytimg.com`, `vumbnail.com`, `player.vimeo.com`: miniaturas/players de vídeo (não são fotos suas).
- `/__l5e/assets-v1/...`: os 4 arquivos acima.

## O que eu proponho fazer

### A. Tirar o images.weserv.nl do caminho (sem perder velocidade)
Passar `src/lib/img.ts` a gerar endereços do **seu próprio domínio** (`/api/public/img?...`), que já está implementado. Resultado: nenhuma foto do site passa mais por endereço de terceiro no navegador; a conversão continua acontecendo no servidor, com cache permanente na borda. Em seguida removo o `preconnect`/`dns-prefetch` do weserv e o `dns-prefetch` do rackcdn (o navegador deixa de falar com os dois).

### B. Trazer os 4 arquivos hospedados fora para dentro do projeto
- logo, capa da home e capa do artigo: passam a ser arquivos do próprio projeto, importados normalmente.
- imagem de compartilhamento: vai para a pasta pública, para continuar tendo endereço fixo `https://www.alefotografo.com.br/og-alefotografo-camera.jpg` (redes sociais exigem endereço absoluto e estável).

### C. O que **não** vou fazer sem sua decisão
- **Mover as 2.445 fotos do acervo antigo para dentro do projeto.** São centenas de megabytes; o projeto ficaria pesado e lento de publicar. Com o item A elas passam a ser servidas pelo seu domínio, o que resolve a parte visível para o Google e para o visitante.
- **Trocar as 95 imagens de banco de imagens (Unsplash)** nos artigos por fotos suas. Dá para fazer, mas é escolha editorial foto por foto — proponho tratar em um pedido separado.

## Detalhes técnicos

- `src/lib/img.ts`: `ENDPOINT` passa de `https://images.weserv.nl/` para `/api/public/img`, com `src`/`w`/`q` no formato aceito pela rota; larguras usadas (`IMG_WIDTHS`, `GRID_WIDTHS`) já estão todas dentro do `ALLOWED_WIDTHS` da rota, e `q=66` está no `ALLOWED_QUALITY`.
- `src/routes/__root.tsx`: remover as 3 linhas de `preconnect`/`dns-prefetch` (weserv ×2, rackcdn ×1).
- Assets: baixar os 4 binários das URLs `/__l5e/...`, gravar em `src/assets/` (logo, hero, capa do artigo) e `public/` (og), atualizar `Header.tsx`, `Footer.tsx`, `blog.$slug.tsx`, `homeCuration.ts`, `seo.ts` e a capa em `catalog.json`, e remover os `.asset.json`.

## Verificação

- `bunx tsgo --noEmit` e build.
- Varredura confirmando zero ocorrências de `weserv`, `__l5e` e `dns-prefetch`/`preconnect` de rackcdn em `src/`.
- `curl` em `/api/public/img?...` conferindo resposta WebP e cabeçalho de cache.
- Playwright em `/`, `/portfolio` e um artigo (1280×1800) confirmando que logo, capa e galerias aparecem igual.
