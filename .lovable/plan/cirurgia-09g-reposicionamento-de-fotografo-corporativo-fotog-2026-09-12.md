# Cirurgia 09G — Reposicionamento de /fotografo-corporativo/fotografo-profissional-em-sao-paulo

## Objetivo

Fazer a página `/fotografo-corporativo/fotografo-profissional-em-sao-paulo` corresponder à intenção "fotógrafo profissional em São Paulo", eliminando a sobreposição com a página de fotografia corporativa. Sem redirect, sem mudança de URL, sem tocar em nenhuma outra página.

## Como a página é montada hoje (verificado)

A página é gerada pelo template compartilhado das 35 galerias (`src/routes/fotografo-corporativo.$slug.tsx`), alimentado por dados:

- **Title/meta**: `src/data/categorySeo.ts`, entrada `"fotografo-profissional-em-sao-paulo"` (hoje: "Fotografia Empresarial em São Paulo | Fotógrafo Profissional").
- **H1, subtítulo e introdução**: `src/data/catalog.cats.json`, entrada do slug (hoje: title "Fotografia empresarial", subtitle e description focados em "fotografia empresarial").
- **Corpo em H2**: hoje inexistente — o template só mostra corpo em seções quando há entrada em `src/data/categoryEditorial.ts` (esta galeria não tem).
- **FAQ**: sem entrada editorial, a página usa as 5 FAQs genéricas de `src/lib/faqs.ts` — que já falam de contratação de fotógrafo/retrato, não de "fotografia empresarial".
- **Galeria**: 41 imagens próprias em `src/data/categoryImages.json` (intocadas).

## Alterações (3 arquivos de dados)

### 1. `src/data/categorySeo.ts` — entrada do slug

- title → `Fotógrafo Profissional em São Paulo | Alexandre Machado`
- description → `Fotógrafo profissional em São Paulo com mais de 30 anos de experiência em produções para empresas, executivos, profissionais, eventos e diferentes segmentos.`

### 2. `src/data/catalog.cats.json` — entrada do slug

- `title` → `Fotógrafo profissional em São Paulo` (este campo é o H1 da página)
- `subtitle` → esvaziado (o subtítulo atual é o texto "Fotografia empresarial em São Paulo…", incompatível com o novo posicionamento)
- `description` → o texto de introdução fornecido, na íntegra:
  "Alexandre Machado atua como fotógrafo profissional em São Paulo há mais de três décadas, realizando produções para empresas, executivos, profissionais e diferentes segmentos. Cada trabalho é planejado de acordo com o objetivo das imagens, o ambiente e a forma como elas serão utilizadas."
- `seo_title` (usado só pela busca interna do site) → coerente com o novo título

### 3. `src/data/categoryEditorial.ts` — nova entrada para este slug

Corpo curto com os 3 H2 e textos fornecidos, exatamente como escritos:

- H2 "Experiência em diferentes tipos de produção" + texto fornecido
- H2 "Fotografia profissional para empresas e profissionais" + texto fornecido
- H2 "Atendimento em São Paulo e região" + texto fornecido

FAQ da entrada: as mesmas 5 perguntas genéricas já exibidas hoje (copiadas para a entrada, comportamento idêntico ao atual — elas já falam de contratação de fotógrafo profissional e não dependem de "fotografia empresarial"). FAQPage continua válido.

CTA: o bloco editorial usa o padrão já existente nas demais galerias com editorial (botão WhatsApp + "Solicitar orçamento" → /contato), preservando os destinos atuais. Nenhum formulário criado.

## Consequências técnicas a registrar (não contornáveis sem violar o escopo)

1. **Introdução visível truncada**: o template compartilhado das 35 galerias exibe o campo `description` cortado em ~220 caracteres com "…" (`shorten()`). O texto fornecido tem ~265 caracteres. O texto completo ficará nos dados (meta fallback e JSON-LD), mas o parágrafo visível mostrará só a primeira parte. Mudar o limite exigiria alterar o template de todas as galerias — fora do escopo.
2. **Rótulo compartilhado**: o campo `title` também é usado como nome desta galeria onde ela aparece listada (navegação anterior/próximo das galerias vizinhas, página de portfólio, busca interna, links relacionados). O nome exibido nesses lugares passará a ser "Fotógrafo profissional em São Paulo". Nenhum destino/URL muda.

## O que NÃO será alterado

Home, /fotografo-corporativo, /fotos-corporativas, fotografia-corporativa-em-sao-paulo (A), /foto-profissional, /fotografo-empresarial e todas as demais URLs; canonical, slug, redirects, sitemap, robots, menu, footer, schemas globais, imagens da galeria (41 fotos preservadas na mesma ordem), CSS, layout. Nenhum redirect criado.

## Links internos recebidos — classificação (sem corrigir)

- `src/lib/autoLink.tsx`: termo "fotógrafo profissional" → esta URL — COMPATÍVEL
- `src/lib/autoLink.tsx`: termo "fotografia empresarial" → esta URL — INCOMPATÍVEL com o novo posicionamento (registrado; correção fica para cirurgia futura)
- Listagens (portfólio, serviços, busca): usam o título da própria galeria — neutras

## Validação

- Preview da página: title, meta description, H1 único "Fotógrafo profissional em São Paulo", os 3 H2, canonical próprio inalterado, FAQPage presente, 41 imagens na galeria
- Páginas A e C intactas; nenhum redirect novo
- `bunx tsgo --noEmit` passando
