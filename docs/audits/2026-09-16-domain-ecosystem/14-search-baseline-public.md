# 14 — Baseline de busca pública (amostral) — 16/09/2026

**Aviso metodológico:** amostra obtida via ferramenta de busca WebSearch (engine não confirmada; provável Google). Ordem = ordem dos resultados retornados pela ferramenta, **não posição oficial**. Amostra única (n=1/query), sem controle de geolocalização, sem AI Overview/map pack. Nunca citar como "posição oficial".

Colunas por query: query · engine · date · domain found · url · observed_order · limitations.

| # | query | domain found | url | observed_order | limitations |
|---|---|---|---|---|---|
| 1 | fotógrafo corporativo são paulo | alefotografo.com.br | / e /fotografo-corporativo | 1º, 2º, ~4º | duplicatas com srsltid inflam aparições |
| 2 | fotógrafo profissional são paulo | alefotografo.com.br | / (2x) e /fotografo-corporativo | 4º, 5º, ~11º | home duplicada; query genérica |
| 3 | foto profissional são paulo | alefotografo.com.br | /loja/pacote-ouro-... (legado indexado!) e /fotografo-corporativo | 2º, 3º | **URL /loja antiga ainda listada** (301 agora — índice em convergência); ruído "foto IA" |
| 4 | retrato executivo são paulo | alefotografo.com.br | /fotografo-corporativo/retrato-corporativo | 6º, ~11º | intenção ambígua (gov/edu no topo) |
| 5 | foto linkedin são paulo | alefotografo.com.br | /fotografo-corporativo | ~9º | SERP ruidosa (notícias/wiki) |
| 6 | eventos corporativos fotógrafo são paulo | alefotografo.com.br | /fotografo-corporativo/fotografo-de-eventos-corporativos | 1º, ~7º | duplicata |
| 7 | fotógrafo feira stand são paulo | alefotografo.com.br + **fotografoale.com.br** | /fotografo-corporativo/fotografe-feiras-stands (5º, ~10º); legado /fotografo-de-feiras-de-negocios-em-sao-paulo (6º) | 5º, 6º, ~10º, ~12º | **canibalização legado vs principal na mesma SERP** |
| 8 | fotografia industrial sp | alefotografo.com.br | /fotografo-corporativo/fotografia-industrial-em-sp | 2º | resultados espanhóis — região não fixada |
| 9 | fotógrafo logística sp | **alefotografos.com.br** | /fotografo-corporativo/fotografia-de-logistica | 3º | **ales ranqueia com página espelhada; dono P17 (ale) ausente**; metade da SERP é spam lovable.app |
| 10 | vídeo corporativo são paulo | **alefotografos.com.br** (home genérica) | / | 2º | **VC ausente**; ales com homepage genérica |
| 11 | vídeo institucional são paulo | — (nenhum próprio) | — | — | ferramenta retornou só 2 resultados — reamostrar |
| 12 | produção de vídeo corporativo são paulo | alefotografo.com.br | /videos | 2º | disputa direta que deve ser do VC |
| 13 | vídeo para empresas são paulo | alefotografos.com.br (home) | / | ~7º | VC ausente |
| 14 | fotógrafo médicos sp | alefotografo.com.br (3 URLs) + alefotografos.com.br | /retratos-de-medicos 2º; /fotos-profissionais-para-medicos 4º; /retratos-de-medicas 5º; ales /fotos-para-clinicas-medicas ~8º | 2º–13º, 5 aparições | **mesma intenção dividida entre 2 domínios próprios**; ruído internacional |
| 15 | fotógrafo advogados sp | alefotografos.com.br (1º) + alefotografo.com.br (~5º) | mesma página espelhada /fotografia-para-escritorios-de-advocacia | 1º, ~5º | **ales à frente do principal para página idêntica**; apareceu alemachado.com.br (2º) — domínio não listado nos 5, ownership a confirmar |

## Síntese

- alefotografo.com.br: presente em 12/15 queries (1º–13º).
- alefotografos.com.br: 6/15 — ranqueando com home genérica e páginas espelhadas (queries 9, 10, 13, 14, 15).
- videoscorporativos.com.br: **0/15** — invisível na amostra para suas head terms.
- fotografoale.com.br: 1/15 (query 7) — canibalizando o principal.
- fotodeperfilprofissional.com.br: 0/15.
- URLs /loja antigas ainda listadas (query 3) — convergência pós-301, monitorar.
- Concorrentes recorrentes: hernanmuttoni.com (~8), jottaphotopro.com.br (~7), andersonfotografo.com.br (4), videoinstitucional.app.br (3), neopix.com.br (3), wonderproducoes.com.br (3), silvertake.video (3), evorastudio.com.br (3), grupophoto.com.br (3), saopaulofotografia.com.br (3).

## Reamostragens recomendadas
Queries 11 (volume anômalo), 15 (5 resultados) e 9 (SERP poluída) em outro momento/engine antes de qualquer decisão baseada nelas.
