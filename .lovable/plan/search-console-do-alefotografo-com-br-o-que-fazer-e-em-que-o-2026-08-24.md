# Search Console do alefotografo.com.br — o que fazer, e em que ordem

Resposta à sua pergunta: **sim, o DNS precisa propagar primeiro.** O Google busca o sitemap na URL informada; se `https://alefotografo.com.br/sitemap-index.xml` ainda não responde com SSL válido, a submissão entra com erro de "não foi possível buscar o sitemap" e você precisa reenviar depois.

## O que já está pronto (verificado agora na sua conta)

Você já tem o domínio no Search Console, e melhor do que eu supunha: a propriedade verificada é **`sc-domain:alefotografo.com.br`**, uma propriedade de **domínio** com permissão de proprietário. Isso torna a etapa de verificação por meta tag desnecessária — não há nada a inserir no código e nada mais a fazer no DNS para o Search Console.

Vantagem: a propriedade de domínio cobre http e https, com e sem www, e todos os subdomínios de uma vez. É a cobertura mais ampla possível, e aceita sitemap.

Situação do DNS: os registros A e o TXT `_lovable` ainda não aparecem no servidor autoritativo do registro.br nem no Google/Cloudflare — a zona segue vazia.

## Ordem das etapas

```text
1. DNS propaga (registro.br)              <- aguardando, nada a fazer
2. Lovable verifica domínio + emite SSL   <- automático
3. https://alefotografo.com.br  200       <- eu confirmo
4. Submeter o sitemap                     <- só aqui
5. Acompanhar indexação                   <- semanas
```

Verificação no Search Console: **etapa já concluída**, sai do caminho.

## O que farei em cada etapa

**Etapa 3 — confirmar o domínio no ar**
Checo os registros A e o TXT nos resolvers públicos, confirmo o status do domínio no projeto e testo a home e o sitemap no domínio novo por HTTPS.

**Etapa 4 — submeter o sitemap**
Submeto `https://alefotografo.com.br/sitemap-index.xml` na propriedade `sc-domain:alefotografo.com.br` (o índice já aponta para `sitemap.xml`, com 340 URLs, e `sitemap-videos.xml`, com 72). Depois leio o status de processamento para confirmar que o Google conseguiu buscar e quantas URLs foram descobertas.

**Etapa 5 — acompanhamento**
Leio no índice do Google o estado da home e de algumas páginas-chave, e confiro se os 301 do domínio antigo estão transferindo o histórico. Reindexação completa leva semanas, não dias.

## Enquanto o DNS não propaga

Nenhuma mudança de código é necessária — a preparação do site está concluída (domínio trocado em todo o código, sitemaps validados, 301 mapeados e testados, títulos e descrições dentro do limite em todas as 340 páginas, links e imagens sem quebras). Se quiser aproveitar a espera, posso rodar uma revisão de SEO automatizada do projeto ou revisar o conteúdo das páginas mais estratégicas.

## Detalhes técnicos

- Propriedade selecionada: `sc-domain:alefotografo.com.br`, devolvida por `GET /webmasters/v3/sites` com `permissionLevel: siteOwner`.
- Submissão via `PUT /webmasters/v3/sites/{prop}/sitemaps/{sitemap}`; leitura de status via `GET` no mesmo caminho.
- Nenhuma alteração em canonical, robots.txt, conteúdo, redirecionamentos ou head do site.
