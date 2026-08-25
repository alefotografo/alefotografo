# O TXT já está no ar — falta 1 clique para reconectar o www

## Estado agora (verificado ao vivo)

| Item | Resultado |
|---|---|
| `TXT _lovable.www` | **presente e correto** (`lovable_verify=13bedda…5fc8`) |
| `A www` → `185.158.133.1` | ok |
| Status do `www` na Lovable | ainda **drifted** (há 11h35) |
| `https://www.alefotografo.com.br/` | **421** (ainda fora) |
| `https://alefotografo.com.br/` | **200** (no ar, canônico atual) |

O DNS está 100% correto. O `www` continua fora porque a Lovable só revalida quando a verificação é disparada no painel.

## O que você faz (1 clique)

**Project Settings → Domains → `www.alefotografo.com.br` → Check status** (ou "Complete setup").
O status deve ir de *drifted* → *Verifying* → *Setting up* → **Active** (SSL automático, alguns minutos).

## O que eu faço depois

1. Confirmar `www` **Active**, HTTP 200 e SSL válido.
2. Devolver a origem canônica para `https://www.alefotografo.com.br` — que é o host já indexado pelo Google: `SITE_ORIGIN` em `src/lib/seo.ts`, `BASE_URL` dos sitemaps e do RSS, `robots.txt`, `@id`/`url` dos schemas em `src/routes/__root.tsx` e o `PREFERRED_HOST` do GSC.
3. Reativar `REDIRECT_WWW_TO_APEX` na direção certa (apex → www) em `src/server.ts` e revalidar 301/302, HSTS e ausência de loop em produção.
4. Publicar e reenviar `sitemap-index.xml`, `sitemap.xml` e `sitemap-videos.xml` no Search Console do host com www; validar canônica no HTML servido.
5. Atualizar `.lovable/auditoria-seo-www.md` com o resultado final.

## Alternativa (se o Check status falhar de novo)

Remover `www.alefotografo.com.br` do painel e readicioná-lo em modo manual — o DNS já está pronto, então a verificação passa direto. Nesse cenário nada muda no código.

## Detalhes técnicos

- 421 vem da borda da hospedagem (host não reconhecido), não do app — nenhuma mudança de código resolve antes da verificação.
- Enquanto o `www` estiver fora, tudo permanece canônico no apex, que responde 200: nada quebrado para o Google no intervalo.
- A volta ao `www` é uma troca em um ponto central (`SITE_ORIGIN`) mais os arquivos de sitemap/robots listados acima.
