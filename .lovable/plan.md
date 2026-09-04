# Otimizar o llms.txt para buscadores de IA

## Objetivo

Transformar o `llms.txt` num resumo completo e rico em palavras-chave de fotografia corporativa, incluindo as 33 páginas de bairro e os artigos do blog, para que assistentes de IA (ChatGPT, Perplexity, Gemini, Claude) encontrem e citem o site nas respostas.

## Situação atual

O `llms.txt` é um arquivo fixo em `public/`, com ~2,7 KB. Ele cobre bem o posicionamento autoral e a separação do site irmão, mas:

- não menciona nenhum dos 33 bairros atendidos (Vila Olímpia, Faria Lima, Paulista, Itaim, Berrini, Moema, Brooklin, Santo André, São Bernardo, São Caetano, Alphaville etc.);
- não lista 4 páginas de serviço que existem no site (eventos corporativos, fotógrafo empresarial, fotos corporativas, fotógrafo de feira de negócios);
- não cita nenhum artigo do blog (155 publicados);
- usa poucos dos termos que as pessoas realmente digitam ("fotógrafo corporativo em São Paulo", "headshot profissional", "foto para LinkedIn preço", "ensaio corporativo em estúdio");
- por ser estático, envelhece a cada artigo ou bairro novo.

## O que será feito

### 1. Gerar o llms.txt automaticamente

Substituir o arquivo fixo por uma rota que monta o conteúdo a partir dos mesmos dados que já alimentam o site (bairros, posts, serviços). Assim, todo bairro ou artigo novo entra no llms.txt sem trabalho manual — como já acontece com o sitemap.

### 2. Novo conteúdo, com foco em palavras-chave

Mantendo o tom atual e a regra dos dois domínios, o arquivo passa a ter:

- **Resumo e autoridade** — Alexandre Machado, 30+ anos, atendimento pessoal, São Paulo.
- **Serviços e como as pessoas buscam** — cada serviço com os termos equivalentes na mesma linha: retrato corporativo, headshot profissional, foto para LinkedIn, retrato executivo / C-level, foto de equipe, fotografia médica e odontológica, fotografia jurídica, eventos corporativos, feiras e congressos, vídeo institucional.
- **Onde atende** — lista dos 33 bairros e cidades com o link da página de cada um, agrupada por região (Zona Sul, Centro, Zona Oeste, Zona Norte, Zona Leste, Santo André, São Bernardo, São Caetano, Diadema, Alphaville) e com os pontos de referência de cada bairro.
- **Páginas principais** — todas as rotas públicas de serviço, incluindo as 4 que faltavam.
- **Conteúdo do blog** — os artigos mais relevantes por tema (preparação para ensaio, LinkedIn, imagem pessoal, poses, roupa, preço, direitos de uso), com link do blog e do RSS.
- **Perguntas frequentes em texto direto** — formato que assistentes de IA copiam bem: o que é um ensaio corporativo, quanto dura, onde é feito, atende no escritório do cliente, prazo de entrega, atende ABC e Alphaville.
- **Como citar e contatar** — nome, site, WhatsApp/contato, Instagram, LinkedIn.

Sem inventar preço, prazo, número de clientes, prêmio ou depoimento: só o que já está publicado no site. Onde o dado hoje não existe no site (por exemplo prazo de entrega), a linha é omitida ou eu pergunto antes.

### 3. Validação

- Conferir `/llms.txt` respondendo 200 em `text/plain` com todo o conteúdo novo.
- Conferir que a tag `rel="llms.txt"` e a linha do `robots.txt` continuam apontando para o arquivo certo.
- Publicar e validar no domínio.

## Detalhes técnicos

- Nova rota `src/routes/llms[.]txt.ts` (`createFileRoute` com handler GET retornando `text/plain; charset=utf-8` e `Cache-Control: public, max-age=3600`), montada a partir de `bairros` (`src/data/bairros.ts`) e `posts` (`src/data/catalog.ts`).
- Remover `public/llms.txt`, senão o arquivo estático continua sombreando a rota.
- Uma constante com o texto editorial fixo (posicionamento, regra dos dois domínios, FAQ) + blocos gerados por loop para bairros e artigos.
- Blog: seleção por tema via slug, com limite para o arquivo não passar de ~10 KB.
- `head()` do `__root.tsx` e `public/robots.txt` permanecem como estão.
