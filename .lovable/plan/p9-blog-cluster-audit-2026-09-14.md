# P9 — Auditoria do blog (14/09/2026) — leitura, sem reescritas

## Saúde técnica

| Verificação | Resultado |
|---|---|
| Posts no catálogo | **184** (todos com corpo, title e seo_title) |
| Posts 404 | **0** (todas as URLs de post no sitemap respondem 200 — varredura F4) |
| Capa quebrada | **0** — 313 imagens checadas em amostra de 20 posts (todas 200); índice /blog coberto na F5 |
| Links internos quebrados | 0 (crawl P4: zero 404 em todo o site) |
| Posts linkando p/ slugs redirecionados | **0** (re-scan P4 pós-correção) |
| TITLE/META ausentes | 0 |
| Posts sem capa (própria ou curada) | 8 — **por design** (postCovers.ts: "capa correta ou nenhuma capa"; posts abstratos sem foto honesta no acervo) |

## Ligação blog → serviços

- Apenas **2 posts** possuem ponte editorial estruturada (`postBridges.ts`): "5-poses-para-retrato-corporativo" e "7-erros-linkedin". O arquivo declara a finalidade de pontear artigos com tráfego orgânico — cobertura atual mínima.
- Links contextuais por autoLink existem nos corpos (keyword→categoria), mas sem chamada editorial final.

## Cobertura por cluster (títulos)

| Cluster | Posts |
|---|---|
| fotografia corporativa | 35 |
| foto profissional / LinkedIn | 20 |
| eventos corporativos | 6 |
| banco de imagens corporativo | 3 |
| vídeos corporativos | 3 |
| médicos / clínicas | 3 |
| advocacia | 2 |
| indústria | 2 |
| logística | **1** |

## Oportunidades (recomendação — NÃO executar sem diretriz)

1. **Logística (1), indústria (2), advocacia (2), médicos (3), banco (3), vídeos (3)**: clusters comerciais fortes e quase sem conteúdo editorial de apoio — maiores gaps entre demanda (páginas de serviço ranqueando) e acervo de artigos.
2. Expandir `postBridges` para os artigos que já trazem tráfego (GSC) apontando para as páginas-pilar correspondentes.
3. As 8 capas ausentes são aceitáveis; se houver foto honesta futura, preencher via postCovers.

Nenhum artigo criado/alterado nesta missão.
