# Conferir SEO: rodar varredura nova + 1 ajuste pendente

## O que já verifiquei

A varredura de SEO guardada está **desatualizada**: foi feita em 25/08 às 00:28, antes de toda a migração para o endereço sem www. Todos os scanners (conteúdo, metadados, GSC, HTTP, lint) estão marcados como `stale`, então os números deles não descrevem o site de agora.

O único item apontado como falho nela:

**"Consolidar a autoridade de busca no domínio sem www"** (nível baixo)
- Diz que a autoridade está dividida entre `alefotografo.com.br` e `www.alefotografo.com.br`, e que o redirect `www` → apex está desligado em `src/server.ts` (`REDIRECT_WWW_TO_APEX = false`).
- Isso era verdade quando o `www` estava fora do ar. Hoje o apex é **Primary/Active** e o `www` também está **Active**, redirecionando para o apex na borda (302).

## O que eu faço

1. **Religar `REDIRECT_WWW_TO_APEX = true`** em `src/server.ts`, agora que a condição que exigia desligá-lo não existe mais. Efeito prático: se em algum momento tráfego no `www` chegar até a aplicação (mudança de primário, acesso interno, borda em modo diferente), ele sai como **301 permanente** para o apex, em vez de depender só do 302 da borda. Também atualizo o comentário, que ainda descreve o cenário antigo do 421.
2. **Disparar uma varredura de SEO nova** (precisa da sua aprovação no card) para reavaliar tudo já com o estado atual: canônicas no apex, sitemaps sem erro, redirects e metadados.
3. Ler o resultado e, se aparecer algo acionável, listar item por item aqui no chat — sem mexer em conteúdo, canônicas, robots ou sitemaps por conta própria.

## O que eu não vou mexer

- Canônicas, `robots.txt`, sitemaps e schemas: já estão todos coerentes no apex e validados hoje no Search Console (340 URLs, 0 erros).
- Nada de conteúdo ou layout das páginas nesta rodada.

## Detalhes técnicos

- O 302 do `www` para o apex é da borda da hospedagem (não-primário → primário) e não é controlável por código; o 301 do item 1 é uma segunda camada, não um substituto.
- A varredura é assíncrona: leva cerca de um minuto e o resultado aparece na aba de SEO.
