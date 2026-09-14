# SEO — Cirurgia 10B — Fechamento de pendências da auditoria e do Lote 1

Sessão de retomada (13/09/2026). Nenhuma página nova tocada; só itens que as cirurgias 09E e 10A deixaram registrados.

## 1. Pendência da auditoria (04/09): `/blog/rss.xml` 404 — RESOLVIDO

- Produção `https://www.alefotografo.com.br/blog/rss.xml` responde **200** `application/rss+xml; charset=utf-8` (~114 KB, itens do blog presentes).
- Build local atual (dev e worker Nitro de `.output/`) também responde 200. A rota `blog.rss[.]xml.ts` está sadia; o 404 da auditoria era do deploy antigo, corrigido por redeploy posterior.
- Sitemap ao vivo reconferido: **327 URLs**, com **165 URLs de blog** — blog de volta ao índice após o incidente do gate de data.

## 2. Investigação 10A — `scripts/export-static.mjs` (`CDN_BASE`)

- Verificado ao vivo: tanto `alefotografos.com.br` quanto `www.alefotografo.com.br` servem assets `/__l5e/...` com 200 (mesma plataforma Lovable nos dois domínios). O default antigo funcionava, mas criava dependência do site irmão.
- **Alterado (1 linha):** default de `CDN_BASE` agora é `https://www.alefotografo.com.br` (domínio canônico). `CDN_BASE` continua disponível por env.
- HTML de produção atual tem **0** referências a `/__l5e/` (imagens agora servem de `/img/` local), então o passo de download hoje é no-op; a troca do default só importa se a externalização voltar.

## 3. Itens registrados pela 09E — links internos que passavam por 301

A Home estava fora de escopo da 09E; com autorização de prosseguir, os dois links internos restantes passaram a apontar direto para a vencedora (texto, imagem, alt e layout inalterados):

- `src/data/homeCuration.ts:71` — card "Indústria" (Trabalhos Selecionados): `fotografia-industrial` → `fotografia-industrial-em-sp`.
- `src/components/site/home/SolucoesEmpresa.tsx:57` — card "Fotografia Industrial" (Soluções): mesmo ajuste. Este card não estava na lista da 09E (componente da Home).

Conferido no HTML da Home (dev): nenhum `href` restante para os três slugs perdedores. Demais ocorrências de `fotografia-industrial` no projeto são `cover()`/imagens (sem link), conforme escopo da 09E.

## 4. Situação da pasta `hostinger/` (item de investigação 10A) — mantida, registrada

- Contém export antigo com **sitemap inteiro no domínio plural** (`https://alefotografos.com.br/...`) e `__l5e/` de build anterior.
- Está no `.gitignore` (não publicada pela Lovable). Risco só se for enviada por FTP.
- **Não regenerada:** o fluxo do script (`dist/client` + `vite preview`) não corresponde mais ao pipeline atual, que builda para `.output/` (Nitro/cloudflare-module, sem `dist/client`). Regenerar exige atualizar o script para o pipeline novo — ficou como trabalho futuro, se o export para Hostinger voltar a ser necessário.

## Validação

- `npx tsc --noEmit` limpo.
- Dev: Home sem links para slugs perdedores; `/fotografo-corporativo/fotografia-industrial-em-sp` 200; perdedora 301 → vencedora sem cadeia.
- Build de produção concluída sem erros.

## Fora de escopo (dependem de terceiros)

- Elevar 302 do apex a 301: decisão de CDN (Cloudflare) na borda, não há código.
- "Lote 2" de consolidação de duplicidades: sem plano aprovado; candidatas devem ser definidas antes.
