# 15 — VÍDEO — Domain Ownership Map (ALE × VC)

Data: 21/09/2026 · Base: GSC 09/17 + SERP proxy + repo (rotas, catálogo) + citability.

## Leitura corrigida da demanda (achado central)

O cluster "vídeo" do GSC (269 queries · 105.459 impr · 571 cl) é **dominantemente informacional**: "app para editar video" (6.178 impr), "aplicativo para editar video" (4.978), "app para editar vídeos grátis" (3.662)… O post "os-6-melhores-aplicativos-para-editar-videos-pelo-celular" sozinho tem **386.730 impressões e 1.514 cliques** — editorial de tráfego, não demanda de produção.

Demanda comercial de produção de vídeo no GSC do período: residual ("vídeo institucional para empresas" e variações somam dezenas de impressões). **Conclusão: o ativo vídeo do ecossistema hoje é PROVA, não busca.** A SERP proxy confirma: "vídeos corporativos" quase sem resultados .br; "vídeo institucional" dominada por 1 EMD concorrente (videoinstitucional.app.br) e produtoras com páginas dedicadas.

## Estado atual dos ativos

### alefotografo.com.br (principal)
- Hub /videos (GEO 3/3): 72 produções nomeadas no índice SSR (índice completo no DOM; mobile colapsado com botão — P18B spec já atendida), showreel ATIVA Log, FAQ, depoimentos em vídeo, clientes nomeados (Tecnisa, Convatec, Accor, ABRADILAN, Galena, Germed + ~20 nos vídeos).
- 3 landings comerciais: /video-institucional · /video-de-eventos-corporativos · /video-para-feiras-e-stands (todas GEO 3, FAQ, portfólio nomeado).
- 72 páginas dinâmicas /videos/$slug com VideoObject, breadcrumbs, malha de relacionadas; **seo_title dos 72 registros existe mas NÃO é usado** (rota e sitemap usam title — oportunidade de SEO registrada, não implementada).
- 5 dos 11 TIPOS sem landing: treinamento, integração, depoimentos, reels, campanhas/redes (apontam para WhatsApp ou páginas de fotografia).
- Zero embeds YouTube em todas as páginas (links internos) — bom para crawl, sem rich result de vídeo na página.

### videoscorporativos.com.br (VC — owned specialist)
- SERP proxy 21/09: **0/4 queries de vídeo** (vídeos corporativos, vídeos institucionais, vídeo institucional, vídeo de eventos corporativos). Ausência total na descoberta.
- P18A.4: site institucional com blog e /precos, repo read-only (GitHub), sem evidência de atualização recente.
- Domínio especialista com EMD forte ("vídeos corporativos") ocioso na descoberta.

## Proposta de ownership (NÃO implementar)

| Papel | ALE (principal) | VC (especialista) |
|---|---|---|
| Função | foto + vídeo integrado; prova cruzada; conversão | vídeo especialista; autoridade temática de vídeo |
| Conteúdo | hub /videos com prova nomeada; landings por formato; cases foto+vídeo (ATIVA) | páginas por formato/tema com mais profundidade; blog de produção; preços |
| Internal linking | cases e páginas de serviço linkam /videos/* | VC linka de volta casos do principal |
| Decisão pendente | — | KEEP ativo com conteúdo vs. redirecionar para /videos — **exige medição primeiro** (test pack prompts 30–38) |

## Gaps e oportunidades (ordenados)

1. **P1 — seo_title dos 72 vídeos:** usar em rota + sitemap (1 linha de código quando autorizado; impacto direto em CTR de ~72 páginas indexadas). Não implementado nesta missão (docs only).
2. **P1 — Cases foto+vídeo (ATIVA, R&Q):** prova cruzada real; ver 17–20.
3. **P2 — Landings dos 5 TIPOS orfãos:** só se houver demanda comprovada (GSC não mostra hoje); depoimentos em vídeo é o mais próximo do Case R&Q.
4. **P2 — VC:** medir visibilidade real via test pack (25) antes de qualquer decisão de conteúdo/migração. Se invisível em IA e SERP, opções: (a) conteúdo novo dedicado; (b) consolidar sob /videos com 301 — decisão do proprietário com dados.
5. **P3 — YouTube:** os vídeos vivem no YouTube do Ale (8 ATIVA, R&Q, Nitriflex…); títulos/descrições do canal são ativo de descoberta (SERP proxy mostrou YouTube pos. 1 em vídeo de eventos e obra) — ação manual do proprietário.

## Red flags

- NÃO tratar VC como concorrente (owned specialist — P18G método).
- NÃO criar landings novas de vídeo no principal sem demanda comprovada.
- NÃO migrar VC sem medição (gate acima).
