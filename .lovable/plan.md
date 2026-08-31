# Acelerar o carregamento das fotos da Home

## O que foi medido agora

- A Home entrega **36 imagens** e **137 variantes** de URL (srcset) para o proxy externo `images.weserv.nl`.
- Todas as fotos do acervo passam por esse proxy de terceiros: conexão extra, e a cada variante nova ele precisa baixar o original da Rackspace (0,6s a 1,0s por arquivo) antes de converter.
- Originais medidos: 137 KB, 317 KB e 408 KB. O hero gera 86 KB em WebP na largura 768 e a variante 1024 é idêntica (o asset tem só 720px de largura) — ou seja, há variantes desperdiçadas.
- As seções abaixo da dobra (Segmentos, Quem é o Alê, Vídeos, Blog) montam suas imagens junto com a página; a Home não usa o `LazySection` que já existe no projeto.

Resultado prático: na primeira visita o navegador dispara dezenas de conversões "frias" num proxy compartilhado, e as fotos aparecem em cascata lenta.

## Plano de otimização

### 1. Proxy de imagem no próprio domínio, com cache permanente
Criar uma rota de imagem própria (`/api/public/img`) que:
- aceita **somente** URLs do CDN Rackspace do acervo (allowlist de host, HTTPS obrigatório) e larguras de uma lista fechada — sem isso, a rota viraria um proxy aberto;
- busca a versão convertida e guarda no cache da borda, devolvendo `Cache-Control` de 1 ano e `immutable`;
- passa a servir as fotos no mesmo domínio, aproveitando a mesma conexão HTTP/2 da página, sem handshake extra nem limite de terceiros.

`src/lib/img.ts` passa a gerar essas URLs, então todas as páginas (não só a Home) ganham o mesmo benefício, sem mudar nenhum caminho de página.

### 2. Menos variantes, mais acerto de cache
- Reduzir as larguras de grid/galeria para 3 degraus reais (por exemplo 400/640/900) e as de hero para o que o asset realmente tem.
- Não gerar variantes maiores que a largura original do arquivo.
- Baixar a qualidade de 74 para ~66 em WebP (diferença visual imperceptível em foto, ~25% menos bytes).

### 3. Prioridade e adiamento na Home
- Manter o hero como única imagem prioritária, com o preload casando exatamente `src`/`srcset`/`sizes`.
- Marcar as fotos abaixo da dobra com prioridade baixa, para não competirem com o hero.
- Envolver as seções Segmentos, Quem é o Alê, Vídeos e Blog no `LazySection` já existente (com altura reservada, sem salto de layout).
- Corrigir o `sizes` das fotos do grid para a largura real que elas ocupam, evitando o download de um candidato maior que o necessário.

### 4. Correção de hidratação
Durante a inspeção apareceu um aviso de hidratação nos cards de blog da Home. Será corrigido junto, porque ele força o React a re-renderizar a seção e atrasa o carregamento das imagens.

## O que não muda

URLs, slugs, redirects, sitemap, robots, canonical, títulos, H1, meta descriptions, structured data, textos, links internos, ordem dos blocos e a curadoria das fotos escolhidas.

## Validação

- Typecheck.
- Home HTTP 200 e imagens 200 pela nova rota.
- Comparação antes/depois: número de requisições de imagem e bytes totais na Home.
- Desktop 1280px e mobile 390px: nenhuma foto cortada, sem overflow, sem CLS, console sem erros.
