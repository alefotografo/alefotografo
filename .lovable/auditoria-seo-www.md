# Auditoria SEO — domínio alefotografo.com.br (sem www)

Última verificação: **25/08/2026, 12:53 UTC**.

## 1. Domínios (painel Lovable)

| Domínio | Status | Observação |
|---|---|---|
| `alefotografo.com.br` | **active / connected** — **Primary** | canônico oficial |
| `www.alefotografo.com.br` | **active / connected** | reconectado em 25/08 ~12:47 após a criação do TXT `_lovable.www` |

Projeto publicado: sim. Ambos com SSL válido (Let's Encrypt, automático).

Histórico do incidente: o `www` ficou ~12h em **drifted** (respondendo 421 "Project not found") porque o registro `TXT _lovable.www` havia desaparecido da zona DNS do Registro.br. Recriado o TXT e disparado o "Check status" no painel, voltou a **active**.

## 2. Estado em produção (verificado ao vivo)

- `https://alefotografo.com.br/` → **200**, canonical `https://alefotografo.com.br/`.
- `https://www.alefotografo.com.br/` → **302** → `https://alefotografo.com.br/` (redirect da borda, do não-primário para o primário).
- `robots.txt`, schemas JSON-LD, `og:url` e canônicas: todos no endereço **sem www**.
- `sitemap.xml`: **340 URLs**, todas em `https://alefotografo.com.br`. `sitemap-videos.xml`: **72 URLs**. `sitemap-index.xml` referencia os dois.
- `Strict-Transport-Security: max-age=31536000; includeSubDomains` e `Referrer-Policy: strict-origin-when-cross-origin` presentes.
- Sem loops: 1 salto do `www` até o 200 no apex.
- Nota de design: o salto do `www` é **302**, não 301, porque acontece na borda da hospedagem (o primário é o apex). Não é controlável por código; impacto baixo, já que todas as canônicas apontam para o apex. `REDIRECT_WWW_TO_APEX` em `src/server.ts` permanece `false` para não duplicar o redirect.

## 3. Search Console — sitemaps

Propriedade: `sc-domain:alefotografo.com.br` (cobre apex e www).

Os três sitemaps antigos submetidos no host `www` (enviados durante a janela em que o `www` estava fora, acumulando 1 e 72 erros) foram **removidos**. Ficaram apenas os do apex:

| Sitemap | Baixado | Enviadas | Erros | Avisos |
|---|---|---|---|---|
| `https://alefotografo.com.br/sitemap-index.xml` | 25/08 12:42 | 340 web | **0** | 0 |
| `https://alefotografo.com.br/sitemap.xml` | 25/08 12:51 | **340** | **0** | 0 |
| `https://alefotografo.com.br/sitemap-videos.xml` | 25/08 12:51 (ainda **pending**) | 72 | 1 (contagem herdada, aguardando o primeiro download completo) | 0 |

O XML do sitemap de vídeos foi revalidado na origem: 72 entradas, todas com `loc` no apex, `thumbnail_loc`, `player_loc` (`youtube-nocookie`) e `uploader` válidos.

## 4. Indexação (URL Inspection — leitura do índice do Google)

| URL | Veredito | Estado |
|---|---|---|
| `https://alefotografo.com.br/` | NEUTRAL | "Duplicate without user-selected canonical" — canônica escolhida pelo Google ainda é `https://www.alefotografo.com.br/`; último rastreio 24/08 |
| `https://alefotografo.com.br/fotos-corporativas` | NEUTRAL | "URL is unknown to Google" |
| `https://alefotografo.com.br/videos` | NEUTRAL | "URL is unknown to Google" |

Leitura correta: o Google ainda tem em índice a versão `www` da home (rastreada antes da migração) e ainda não rastreou as URLs novas do apex. Com o `www` agora respondendo 302 → apex e com o sitemap do apex processado sem erros, a reconsolidação é automática — tipicamente 1 a 4 semanas. Nenhuma ação de código pendente.

## 5. Pendências / próximos passos

1. Aguardar o `sitemap-videos.xml` sair de *pending* e confirmar 0 erros.
2. Reinspecionar `/`, `/videos` e `/fotos-corporativas` em ~7 dias: o esperado é `googleCanonical` migrar para o apex e o coverageState virar "Submitted and indexed".
3. Não remover o `www` do painel: ele é o que garante o redirect dos links antigos.
4. O monitoramento semanal de indexação (`indexing_snapshots` + painel `/admin/monitoramento`) segue ativo nas 10 URLs críticas.
