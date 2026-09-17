# 13 — Plano IndexNow (diagnóstico + arquitetura recomendada)

Data: 16/09/2026 · **NADA foi implementado** (missão de pesquisa).

## Diagnóstico atual

| Domínio | IndexNow |
|---|---|
| alefotografo.com.br | **NÃO ATIVO** — zero menções em robots/sitemap/código público |
| videoscorporativos.com.br | **NÃO ATIVO** |
| alefotografos.com.br | **NÃO ATIVO** |
| fotografoale.com.br | **NÃO ATIVO** (e não deve receber — candidato a migração) |
| fotodeperfilprofissional.com.br | **NÃO ATIVO** (WordPress/Yoast sem plugin IndexNow aparente; candidato a migração) |

## Arquitetura recomendada (para quando autorizado)

### Onde IndexNow ajuda neste ecossistema
Bing/Yandex indexam mais devagar que Google. Com 3 propriedades ativas publicando conteúdo novo (Cases, blog VC, hub ales), IndexNow dá ganho real de descoberta no Bing — que hoje alimenta Copilot e está integrado ao ecossistema AI da Microsoft (conecta com a meta de AI Citations do baseline P18A.3).

### Componentes
1. **Key + key file**: gerar uma chave aleatória de 32+ chars por domínio; servir em `/<key>.txt` na raiz com `Content-Type: text/plain`. No TanStack Start: uma rota estática (padrão já usado para `llms[.]txt.ts`).
2. **Endpoint de envio**: `https://api.indexnow.org/indexnow?url=<url>&key=<key>` (ou lote POST com até 10.000 URLs).
3. **Eventos que disparam envio**:
   - `publicação` → nova página/case/post (envio imediato da URL)
   - `atualização` → conteúdo alterado materialmente (thumbnails, body, schema)
   - `remoção/redirect` → URL migrada/301 (enviar URL antiga com status updated? IndexNow não tem "remoção" — para remoção, enviar a URL nova e deixar o 301 ser rastreado; registrar limitação)
4. **Batching**: lote de até 100 URLs por POST após deploys grandes (ex.: migração de legado — enviar todas as URLs novas de uma vez).
5. **Proteções**:
   - key NÃO versionada no repo público? (o key file é público por natureza; a segurança é o key ser imprevisível — ok versionar em repo privado)
   - dedupe: nunca reenviar a mesma URL mais de 1x/dia (log simples em KV/banco do projeto)
   - retry com backoff em 429/403 do endpoint
6. **Hook no pipeline**: como o deploy é na Lovable (build TanStack Start), o gatilho natural é server-side no momento da publicação (mutation de CMS/conteúdo) — hoje o conteúdo é em arquivo no repo, então o gatilho prático é **pós-deploy**: script que compara sitemap anterior vs novo e envia diffs. Recomendado: GitHub Action pós-deploy (ou script no pipeline Lovable) que diffa `sitemap.xml` e dispara envios.

### Prioridade de implementação
1. videoscorporativos.com.br (maior cadência de conteúdo + dono da intenção que precisa de tração no Bing)
2. alefotografo.com.br (Cases futuros)
3. alefotografos.com.br (depois do reposicionamento, quando houver conteúdo próprio)
4. Legados: NÃO (serão migrados; 301 serão descobertos pelo crawl normal)

### O que NÃO fazer
- Não enviar URLs dos legados antes da decisão de migração.
- Não usar IndexNow como substituto de sitemap (sitemaps permanecem).
- Não reenviar o catálogo inteiro periodicamente (spam de endpoint).
