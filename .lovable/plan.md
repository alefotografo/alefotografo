# Search Console do alefotografo.com.br — o que fazer, e em que ordem

Resposta curta à sua pergunta: **sim, o DNS precisa propagar primeiro.** O Google só consegue ler a meta tag de verificação e buscar o sitemap se `https://alefotografo.com.br` já estiver respondendo com SSL válido. Submeter antes só gera erro de "não foi possível buscar o sitemap".

Situação agora: os registros A e o TXT `_lovable` ainda não aparecem no servidor autoritativo do registro.br nem no Google/Cloudflare — a zona segue vazia. Estamos na etapa 1.

## Ordem das etapas

```text
1. DNS propaga (registro.br)          <- aguardando, nada a fazer
2. Lovable verifica + emite SSL        <- automático
3. https://alefotografo.com.br  200    <- confirmo
4. Verificação no Search Console       <- meta tag
5. Submissão do sitemap                <- só aqui
```

## O que farei em cada etapa

**Etapa 3 — confirmar o domínio no ar**
Checo os registros A e TXT nos resolvers públicos, confirmo o status do domínio no projeto e testo a home no domínio novo com HTTPS.

**Etapa 4 — verificar a propriedade de prefixo (escolha sua)**
- Peço ao Google o token de verificação por meta tag para `https://alefotografo.com.br/`.
- Insiro a meta tag exata no `<head>` do site (rota raiz), preservando qualquer verificação já existente.
- Você publica uma vez.
- Confirmo que a tag está no HTML servido e chamo a verificação.
- Adiciono a propriedade `https://alefotografo.com.br/` à sua lista do Search Console.

Essa propriedade de prefixo cobre todas as páginas em `https://alefotografo.com.br`, entrega todos os relatórios de desempenho e aceita sitemap — não exige nada de DNS.

**Etapa 5 — submeter o sitemap**
Submeto `https://alefotografo.com.br/sitemap-index.xml` (que já aponta para `sitemap.xml` com 340 URLs e `sitemap-videos.xml` com 72) na propriedade recém-verificada e leio o status de processamento.

**Etapa 6 — acompanhamento**
Confiro a indexação da home e de algumas páginas-chave no índice do Google, e verifico se os 301 do domínio antigo estão transferindo o histórico. Aqui vale lembrar: reindexação completa leva semanas, não dias.

## Enquanto o DNS não propaga

Nada de código é necessário — a preparação do site já está concluída (domínio trocado no código, sitemaps validados, 301 mapeados, títulos/descrições dentro do limite, links e imagens sem quebras). Se quiser, posso usar a espera para uma revisão de SEO automatizada do projeto ou para uma checagem de conteúdo das páginas mais importantes.

## Detalhes técnicos

- Verificação via `siteVerification/v1/token` + `webResource` com método `META`, identificador `https://alefotografo.com.br/` e tipo `SITE`.
- A meta tag entra no `head()` da rota raiz (`src/routes/__root.tsx`), única alteração de código prevista.
- Sitemap submetido via `PUT /webmasters/v3/sites/{prop}/sitemaps/{sitemap}` na propriedade exata devolvida por `GET /webmasters/v3/sites`.
- Nenhuma mudança em canonical, robots.txt, conteúdo ou redirecionamentos.
