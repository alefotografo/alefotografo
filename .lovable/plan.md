# Migração de domínio: alefotografos.com.br → alefotografo.com.br (na Lovable)

## Objetivo
Trocar o domínio principal do site para `alefotografo.com.br` mantendo a hospedagem na Lovable, com SSL/HTTPS funcionando automaticamente e redirecionamento 301 permanente do domínio antigo (`alefotografos.com.br`) para o novo.

## Como fica o SSL/HTTPS (resumo)
- **SSL é automático.** Ao adicionar `alefotografo.com.br` como domínio personalizado na Lovable (Project Settings → Domains), a Lovable provisiona o certificado via Let's Encrypt automaticamente — não há certificado para instalar nem custo extra. O mesmo vale para `www.alefotografo.com.br`.
- **HTTPS obrigatório.** O middleware `redirectHttps` em `src/server.ts` já converte todo acesso `http://` em `https://` na mesma hospedeira (301). Continua valendo para o novo domínio sem alteração.
- **Redirect de domínio antigo → novo.** A própria Lovable faz o 301 automaticamente: ao definir `alefotografo.com.br` como **Primary**, o domínio antigo (`alefotografos.com.br`, não primário) passa a redirecionar para o primário na borda. Esse redirecionamento cobre todo o tráfego HTTPS do domínio antigo, inclusive subpastas — exatamente o que preserva SEO.

## Parte A — Configuração na Lovable (manual, você executa)
1. **Publicar** o projeto (se ainda não estiver) — o domínio só conecta após publicação.
2. Em **Project Settings → Domains → Connect Domain**, adicionar:
   - `alefotografo.com.br` (root, com registro A → 185.158.133.1 e TXT `_lovable`)
   - `www.alefotografo.com.br` (registro A www → 185.158.133.1)
3. Aguardar verificação (DNS) e "Setting up" → "Active". O SSL é emitido nesse passo automaticamente.
4. Marcar **`alefotografo.com.br` como Primary**. A partir daqui `alefotografos.com.br` (mantido conectado, não primário) redireciona 301 → `alefotografo.com.br`.
5. No Google Search Console: adicionar nova propriedade `alefotografo.com.br`, enviar o sitemap `https://alefotografo.com.br/sitemap-index.xml` e pedir reindexação das páginas principais.

## Parte B — Ajustes de código (eu executo após aprovação)
Trocar todas as referências hardcoded de `alefotografos.com.br` → `alefotografo.com.br` em 21 arquivos, para que canonical/sitemap/hreflang/schema apontem para o novo domínio e o Google consolide a indexação nele:

1. **`src/lib/seo.ts`** — `SITE_ORIGIN` (usado por todas as rotas para canonical/og:url/og:image). Esta única mudança cobre a maioria das rotas.
2. **Sitemaps e feeds** — `BASE_URL` em:
   - `src/routes/sitemap[.]xml.ts`
   - `src/routes/sitemap-videos[.]xml.ts`
   - `src/routes/sitemap-index[.]xml.ts`
   - `src/routes/blog.rss[.]xml.ts`
3. **`src/routes/__root.tsx`** — hreflang `pt-BR`/`x-default`, `@id` e `url` do schema `LocalBusiness`.
4. **Schemas e canonicals literais nas rotas** (conferir/ajustar onde o domínio aparece como string literal, não via `SITE_ORIGIN`): `index`, `videos.index`, `videos.$slug`, `sobre`, `portfolio.index`, `fotografo-corporativo.index`, `fotografo-corporativo.$slug`, `fotografo-corporativo-em.$bairro`, `contato`, `blog.index`, `blog.$slug`, `faq`, `depoimentos`.
5. **`src/lib/legacy-redirects.ts`** — atualizar comentários/origem; a lógica de redirect por path não muda (Lovable cuida do domínio).
6. **`src/lib/gsc.functions.ts`** — qualquer referência de escopo de propriedade do GSC.

## Parte C — Verificação
- Build sem erros (build-errors.log limpo).
- Conferir via Playwright: `https://alefotografo.com.br` carrega com cadeado SSL; canonical/og:url no HTML apontam para `alefotografo.com.br`; `sitemap.xml` e `rss.xml` geram URLs novas; acesso a `alefotografos.com.br` retorna 301 → novo domínio.

## Notas / riscos
- O redirect HTTPS (`http→https`) em `server.ts` permanece idêntico e compatível — ele só troca o protocolo, preservando o host atual, então funciona para ambos os domínios.
- Manter `alefotografos.com.br` conectado (não primário) é o que garante o 301 na borda da Lovable. **Não remover** o domínio antigo do painel.
- O `google-site-verification` atual continua válido para `alefotografo.com.br`; se a verificação do novo domínio exigir um novo meta, adiciono ao `__root.tsx`.
