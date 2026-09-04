# URL http indexada — o que os testes ao vivo mostram

Testei agora as quatro combinações em produção, inclusive a URL exata que apareceu na busca.

| Requisição | Resposta | Destino |
|---|---|---|
| `http://alefotografo.com.br/` | **302** | `https://www.alefotografo.com.br/` |
| `http://www.alefotografo.com.br/` | **301** | `https://www.alefotografo.com.br/` |
| `https://alefotografo.com.br/` | **302** | `https://www.alefotografo.com.br/` |
| `https://www.alefotografo.com.br/` | **200** | — |
| `http://alefotografo.com.br/fotografo-corporativo/fotografo-profissional-em-sao-paulo` | **302** → **200** | mesma URL em `https://www` |

Conclusões factuais:

1. Não existe URL http servindo conteúdo. Todas as variantes redirecionam em **um único salto**, preservando o path, e terminam em 200 no host canônico. `Strict-Transport-Security` está presente até nas respostas de redirect.
2. A URL que você viu na busca é **resquício de índice**: o Google guardou o endereço antigo (http, sem www) e ainda não substituiu pela versão canônica. Ela não está acessível como página duplicada — quem clica cai no `https://www`.
3. A única imperfeição real: os saltos que saem do **apex** são **302**, não 301. Isso acontece na borda da hospedagem (Cloudflare da Lovable, antes do código do site rodar). O código já tem o fallback correto — `REDIRECT_APEX_TO_WWW = true` em `src/server.ts` devolvendo 301 — mas a borda responde primeiro, então esse trecho nunca é alcançado. Não há configuração de código, nem `.htaccess` (o site não roda em Apache), que altere isso.

## Plano

### 1. Nenhuma mudança de código
Não há redirect faltando para criar. Mexer no `src/server.ts` só adicionaria um segundo salto ao mesmo destino — pior para SEO do que o 302 atual.

### 2. Forçar a atualização do índice (é aqui que resolve de fato)
No Search Console (`sc-domain:alefotografo.com.br`, que cobre http, https, apex e www):
- inspeciono a URL http reportada e confirmo o veredito e a canônica escolhida pelo Google;
- solicito a indexação da versão canônica `https://www.alefotografo.com.br/fotografo-corporativo/fotografo-profissional-em-sao-paulo`;
- repito a leitura em um conjunto de URLs equivalentes (home, `/blog`, uma página de serviço, um bairro) para ver se há mais resquícios http/apex no índice.

### 3. Confirmar que o sitemap está 100% no host canônico
Revalido `sitemap-index.xml`, `sitemap.xml` e `sitemap-videos.xml`: todos os `<loc>` em `https://www.alefotografo.com.br`, mais o `robots.txt` apontando para eles. Isso é o sinal mais forte de consolidação que temos.

### 4. Elevar o 302 a 301 (opcional, só se você quiser)
Um 301 verdadeiro no apex exigiria uma regra de redirecionamento em um CDN próprio na frente do domínio — a decisão de Cloudflare que ficou pendente. Vale como refinamento, não como correção urgente: o Google trata 302 persistente + canonical autorreferente como consolidação, e todas as canônicas do site já apontam para o `www`.

### 5. Relatório
Atualizo `.lovable/auditoria-seo-www.md` com a tabela dos quatro testes, o estado de indexação por URL lida e o que ficou aguardando prazo do Google.

## Detalhes técnicos

- Redirect apex → www: borda da hospedagem (`server: cloudflare`), 302, um salto, path preservado.
- Fallback em código: `redirectCanonicalHost()` em `src/server.ts` (301, `cache-control: public, max-age=86400`) — inalcançável em produção por ordem de execução.
- `hostinger/.htaccess` existe apenas como artefato de um deploy estático antigo em Apache; não tem efeito na hospedagem atual.
- Não existe API do Google para forçar re-crawl além do "Solicitar indexação"; a troca da URL no índice leva de dias a semanas.
