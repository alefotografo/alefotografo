# Reduzir o TTFB (1,6s mobile / 1,3s desktop) para menos de 400 ms

## O que verifiquei antes de planejar

- O site **não está na Netlify**. Ele é servido pela hospedagem da Lovable (borda Cloudflare). Não existe `netlify.toml`, e `public/_headers` é um formato da Netlify — na prática ele não controla o cache do HTML aqui. Por isso o item 1 do pedido precisa ser feito de outra forma (cabeçalhos gerados pelo próprio servidor do site).
- Medi a página inicial ao vivo agora: **1,22 s** até o primeiro byte, e a resposta vem com `cache-control: no-cache, must-revalidate, max-age=0`. Ou seja: cada visita gera a página do zero. Essa é a causa confirmada.
- As fontes **já são próprias** (arquivos hospedados no site, declarados em `src/styles.css`). Nada vem do Google Fonts, então o item 4 já está resolvido e não há o que mudar.
- O único domínio externo que ainda vale antecipar é o otimizador de imagens; o de vídeo já está antecipado.
- A geração de páginas prontas (item 2) **é suportada**, mas a versão da configuração de build usada no projeto é antiga e ignoraria a opção em silêncio. Precisa ser atualizada junto.

## O que será feito

### 1. Gerar as páginas mais importantes já prontas (maior impacto)
Atualizar a ferramenta de build e ligar a geração antecipada para as páginas cujo conteúdo é igual para todos os visitantes:

- início, serviços, quem é o Alê, sobre, contato, FAQ, depoimentos;
- as 14 páginas de serviço/segmento;
- os hubs de galerias, blog, vídeos e portfólio;
- as 33 páginas de bairro.

Essas páginas passam a ser arquivos prontos servidos direto da borda, com tempo de resposta esperado abaixo de 100 ms. A descoberta automática de rotas fica desligada para garantir que **nenhuma** página de área restrita (login e painel administrativo) seja gerada antecipadamente.

Páginas de detalhe (cada artigo, cada galeria, cada vídeo) ficam fora desta primeira etapa: são centenas de endereços e deixariam o build muito longo. Elas ganham o cache do item 2.

### 2. Cache na borda para o restante das páginas
Fazer o servidor do site enviar, nas páginas públicas que continuam sendo montadas na hora:

`Cache-Control: public, max-age=0, s-maxage=86400, stale-while-revalidate=86400`

Assim a borda entrega a versão guardada na hora e atualiza em segundo plano. Ficam explicitamente fora: login, painel administrativo, endpoints de API e qualquer resposta de erro ou redirecionamento.

### 3. Antecipar a conexão do otimizador de imagens
Adicionar no topo do site a antecipação de DNS e conexão para `images.weserv.nl`. Google Fonts não entra porque não é usado.

### 4. Conferir o resultado
Depois de publicar, medir o tempo até o primeiro byte da home, de uma página de serviço, de um bairro e de um artigo, na primeira e na segunda visita, e confirmar que as páginas geradas aparecem como arquivos prontos no build. Também confirmo que login e painel continuam privados e que o blog e as galerias seguem abrindo normalmente.

## Detalhes técnicos

- `package.json`: subir `@lovable.dev/vite-tanstack-config` de `2.13.1` para `>= 2.20.0` (abaixo disso `prerender` não gera nada e não reporta).
- `vite.config.ts`: `tanstackStart.pages` com a lista explícita de caminhos e `prerender: { enabled: true, autoStaticPathsDiscovery: false }`. Manter `server.entry`, `build.target`/`minify` e os `manualChunks` atuais.
- `src/server.ts`: após obter a resposta do SSR, se for `text/html`, status 200 e o caminho não casar com `/auth`, `/admin*`, `/api/*`, aplicar o `Cache-Control` do item 2. Redirecionamentos e páginas de erro mantêm as regras atuais.
- `src/routes/__root.tsx`: acrescentar `dns-prefetch` + `preconnect` para `https://images.weserv.nl` na lista de `links`.
- `public/_headers` fica como está (inofensivo, útil caso um dia haja deploy estático em outra hospedagem).
- Validação: `bunx tsgo --noEmit`, build de produção lendo a contagem de arquivos gerados, e `curl -o /dev/null -s -w "%{time_starttransfer}"` nas URLs ao vivo. Meta: < 400 ms, esperado < 150 ms nas páginas geradas.
