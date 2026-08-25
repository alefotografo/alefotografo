# Está tudo ativo — verificado agora

| Item | Estado |
|---|---|
| `alefotografo.com.br` | **active / connected** (Primary), HTTP **200**, SSL ok |
| `www.alefotografo.com.br` | **active / connected** (conectou há menos de 1 minuto) |
| `https://www.…` → `https://alefotografo.com.br/` | redireciona (302 na borda) |
| HSTS | `max-age=31536000; includeSubDomains` presente |
| Canônica em produção | `https://alefotografo.com.br/` |
| Projeto publicado | sim |
| Sitemap no Search Console | `sitemap-index.xml` reenviado com sucesso em `sc-domain:alefotografo.com.br` |

Ou seja: os dois endereços estão ativos, o `www` já entra e é redirecionado para o endereço sem www, e o site, os sitemaps e o robots estão todos coerentes no endereço sem www. Não há nada quebrado.

## Decisão que resta: qual endereço fica como o oficial

O site está hoje 100% consolidado em **`alefotografo.com.br`** (sem www) — canônica, sitemaps, robots, schema e o Primary do painel. O Google, porém, vinha indexando o `www` antes da migração.

**Opção A (recomendada): ficar sem www, como está.**
- Nenhuma mudança de código. O `www` continua ativo e redirecionando, o que preserva os links antigos.
- Eu apenas: confirmo o processamento do sitemap no Search Console, checo no URL Inspection se o Google já assumiu a canônica sem www em algumas URLs-chave, e registro o resultado em `.lovable/auditoria-seo-www.md`.

**Opção B: voltar o oficial para o `www`.**
- Marcar `www.alefotografo.com.br` como **Primary** no painel (você faz) e eu troco de volta `SITE_ORIGIN` em `src/lib/seo.ts`, os `BASE_URL` dos sitemaps e do RSS, `robots.txt`, `@id`/`url` dos schemas em `src/routes/__root.tsx` e o `PREFERRED_HOST` do GSC; depois publico e reenvio os sitemaps.
- Custo: mais uma rodada de reconsolidação no Google, justamente o que já começou a acontecer no endereço sem www.

Sem resposta em contrário, sigo com a **Opção A** e faço só a verificação final no Search Console.

## Detalhes técnicos

- O 302 do `www` é da borda da hospedagem (redirect do não-primário para o primário), não do app; o `REDIRECT_WWW_TO_APEX` em `src/server.ts` permanece `false` e não conflita.
- A propriedade do Search Console é `sc-domain:alefotografo.com.br`, que cobre apex e `www` — não é preciso criar propriedade nova em nenhuma das opções.
