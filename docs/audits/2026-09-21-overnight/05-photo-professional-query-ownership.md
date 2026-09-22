# 05 — FOTO PROFISSIONAL — Query Ownership Plan

Data: 21/09/2026 · Base: GSC 09/17 (P18A.6R) + SERP proxy 21/09 + arquitetura do site.

## O fato central (incontornável)

| Evidência | Valor |
|---|---|
| Query "foto profissional" (GSC) | 17.107 impr/mês · 21 cliques · CTR 0,12% · pos 3,92 |
| /foto-profissional (GSC Pages) | ~59 impressões no período — **fora do top-45 de páginas do site por impressões** |
| Cluster "foto profissional" (38 queries) | 29.140 impr/mês · 104 cliques — posições 1–6 em quase todas |
| Home / | 25.212 impr/mês — absorve a intenção |
| SERP proxy "foto profissional" (21/09) | único resultado owned = **/loja (URL legada)**; query dominada por blogs de prompts de IA |
| SERP proxy "fotos profissionais" (21/09) | ALE ausente; banco de imagem + geradores de IA dominam |

**Conclusão factual:** a intenção "foto profissional" hoje é atendida principalmente pela HOME (e residualmente pela URL legada /loja), não pela página dedicada. A posição média 3,92 é da URL que o Google escolheu — que não é /foto-profissional.

## Possible ranking pages (candidatas, não confirmadas — falta query×page)

1. `/` — 25 mil impressões; title "Fotógrafo Corporativo…" não casa com a query; ainda assim é a candidata mais provável pelo volume.
2. `/loja` (legada) — 1.197 impr pos 39,4 + pacotes /loja/* (~2.560 impr no total) — herda variações de "retrato profissional" pelo histórico do Joomla.
3. `/blog/fotografo-ensina-que-foto-profissional-aparece-14-vezes…` e demais posts do cluster (poses; fundo; 7 lugares; 7 erros LinkedIn) — ranqueiam em cauda longa da intenção.
4. `/foto-profissional` — 59 impr: o Google praticamente não a mostra para essa query.

## Intent collision

- **Home × /foto-profissional:** a home ranqueia para a query sem dizer "foto profissional" no title — CTR 0,12% é sintoma de title-query mismatch (17 mil impressões, 21 cliques).
- **Posts × money page:** posts educativos ranqueiam bem em cauda ("pose para foto profissional" pos 1,16; "fundo de foto profissional" pos 2,78) e quase não linkam para /foto-profissional com âncoras descritivas (ver 16).
- **Legacy:** /loja ainda recebe impressões para a intenção — convergência de índice em andamento (301 ativo desde P18A), mas o GSC ainda mostra a URL.
- **fotosprofissionais.com.br (owned):** domínio exato-keyword ausente da SERP proxy — hoje não captura nada da intenção (ver 02).

## Blog pages relacionadas ao cluster (ativos editoriais)

10-lugares-boas-fotos (1.931 cl) · 7-lugares-fotos-profissionais-sp (212 cl) · 5-poses-retrato (730 cl) · 11-fundos-retrato (247 cl) · 7-dicas-aparência (191 cl) · dress-code-corporativo (261 cl) · decifrando-dress-code-masculino (136 cl) · foto-de-perfil-representa (35 cl) · icloud-cheio (300 cl — satélite) · quanto-custa-sessao (5 cl).

## Recommended investigation (ordem)

1. **GSC query×page** para "foto profissional" (interface: filtro de página na query, ou API Search Analytics com dimensions=query,page) — 15 min com acesso. Sem isso, nada de title/meta.
2. **Se a URL vencedora for a home:** decisão entre (a) manter home como resposta da intenção e reforçar bloco "foto profissional" com link interno forte para /foto-profissional; (b) tornar /foto-profissional mais home-like para a query. Decisão depende de CTR, conversão e da alternativa (a) não exigir mudança de title da home (SEO LOCK).
3. **Se a URL vencedora for /loja:** acelerar a convergência (o 301 existe; verificar por que o GSC ainda exibe) e garantir que o pacote equivalente more em /foto-profissional.
4. **Independente do resultado:** reforçar links contextuais dos 8 posts do cluster para /foto-profissional (mapa em 16) — risco zero, ganho de sinal interno.
5. **Reavaliar CTR após 28 dias** do snapshot seguinte (P18A.6R já estabeleceu o ciclo de snapshots).

## O que NÃO fazer (guardrail)

- NÃO mudar title/meta de /foto-profissional nem da home antes do passo 1.
- NÃO criar nova URL para a intenção (risco de terceira candidata diluindo sinais).
- NÃO reescrever os posts vencedores do cluster (301–1.931 cliques).
