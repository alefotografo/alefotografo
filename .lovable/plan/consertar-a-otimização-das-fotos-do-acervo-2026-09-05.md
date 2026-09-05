# Consertar a otimização das fotos do acervo

## O que está acontecendo

As fotos das galerias e das páginas de serviço (cerca de 2.400) não ficam guardadas no site: elas vêm de um acervo antigo, fora do site. Para não pesarem 200–500 KB cada, elas passam por um otimizador que as entrega em versão leve (20–60 KB).

Esse otimizador funciona no ambiente de teste, mas falha no site ao vivo — é daí que vêm os cerca de 10 erros no console. Confirmei o comportamento: no site publicado o pedido de foto responde com erro; no ambiente de teste responde normalmente com a foto leve.

As 9 imagens que realmente ficam na pasta do site (capa, logo, imagem de compartilhamento) estão certas e não têm nenhum problema.

## O que vou fazer

1. Descobrir a causa exata da falha no site ao vivo, lendo os registros do servidor publicado com um pedido de teste.
2. Deixar o otimizador à prova de falha: qualquer erro no caminho passa a entregar a foto original do acervo em vez de devolver erro. Nenhuma foto quebrada, nenhum erro no console — no pior caso a foto fica mais pesada, nunca ausente.
3. Tornar o guardado em cache opcional e isolado, para que uma falha nele não derrube a entrega da imagem.
4. Manter as fotos leves quando a otimização funcionar, sem mudar nada no visual das páginas.
5. Verificar depois de publicar: pedir várias fotos do site ao vivo e confirmar que todas respondem com imagem, e abrir a home e uma galeria para confirmar que o console fica sem erros.

## Detalhes técnicos

- Endpoint: `src/routes/api/public/img.ts` (`/api/public/img?src=&w=&q=`). Retorna 400 corretamente para `src` ausente, mas 500 para `src` válido em produção — ou seja, a rota é alcançada e a exceção acontece no caminho de cache/subrequest.
- Suspeitas a confirmar antes de mudar código: `caches.default` / `cache.match` lançando no runtime do Worker, e a subrequest ao conversor externo (`images.weserv.nl`) falhando ou sendo abortada.
- Mudanças previstas: envolver `cache.match`/`cache.put` em `try/catch`; envolver a subrequest e o fallback para o original em `try/catch` com `AbortSignal.timeout`; garantir que qualquer exceção resulte em redirect/stream do original em vez de 500; manter a allowlist de host, largura e qualidade (proteção contra proxy aberto).
- Sem alteração nos componentes que exibem as fotos (`src/lib/img.ts`, `SmartImage`, `SegmentGrid`, `ServicePage` e rotas) — as URLs continuam as mesmas.
- Verificação: `curl` em amostra de fotos do domínio publicado (esperado 200 + `image/webp`) e checagem de console com Playwright na home e numa galeria.
