# Tornar o redirecionamento do domínio sem www permanente (301)

## Situação verificada em produção
- www responde 200; apex redireciona para www em 1 salto; nenhum loop.
- Conteúdo HTML igual nas duas entradas; canonical e og:url apontam para `https://www.alefotografo.com.br/`.
- Único desvio: o apex devolve **302 (temporário)** em vez de **301 (permanente)**, porque o redirecionamento acontece na borda da plataforma antes do código do site rodar.

## O que fazer
1. Alternar o domínio **primário** no painel de domínios de `www.alefotografo.com.br` para... — na prática o oposto não resolve; a ação correta é manter www como primário e deixar o apex apenas apontado, para que o fallback do próprio app responda 301.
2. Ajustar `src/server.ts` para que o redirecionamento apex → www seja tratado pelo app com **301** e cabeçalho de cache, garantindo que, quando a borda não intercepte, o site devolva permanente.
3. Republicar e revalidar com `curl`: apex deve devolver 301 em um único salto, www deve continuar 200.
4. Se a borda continuar respondendo 302 (comportamento da plataforma, fora do controle do código), registrar isso como limitação e confirmar que o Google segue usando o canonical www — o que já está correto hoje.

## Impacto em SEO
Baixo/neutro: o Google consolida o apex no www pelo canonical, que já está correto. O 301 é apenas o padrão ideal.

## Alternativa
Não fazer nada: a configuração atual já é funcional, sem loops e com canonical coerente.
