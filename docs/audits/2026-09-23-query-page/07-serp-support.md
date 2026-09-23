# 07 — SERP Support (apoio público — NÃO substitui GSC query×page)

Coleta: 2026-09-23 · Ferramenta: busca pública (amostra de snippets) · Método: SEARCH SNIPPET SAMPLING, 1 execução, ordem aproximada.

## Query: "foto profissional" (pt-BR, sem geolocalizador)

| Pos. aprox. | URL | Domínio | Tipo | Nota |
|---|---|---|---|---|
| 1 | fotoslinkedin.com.br/blog/prompt-foto-profissional-chatgpt | fotoslinkedin.com.br | blog (prompts IA) | "5 testados" — jul/2026 |
| 2 | fotoslinkedin.com.br/blog/prompts-foto-profissional-completo | fotoslinkedin.com.br | blog (prompts IA) | 2ª URL do mesmo domínio |
| 3 | restauraai.com.br/blog/como-melhorar-foto-com-ia-guia-pratico-mmnrxe2f | restauraai.com.br | blog/app (IA) | |
| 4 | menzzo.com.br/blog/prompt-gemini-foto-profissional | menzzo.com.br | blog (prompts IA) | |
| 5 | **alefotografo.com.br/loja?img_picture=o-ensaio_ana-luiza-e-lucas74&img_completa=…&srsltid=…** | alefotografo.com.br | **PÁGINA LEGADA /loja (Joomla)** | **Title servido: "Foto Profissional em SP \| Alexandre Machado — Direção de…"** — casamento literal com a query |

## Leitura (apoio, não decisão)

1. **A intenção da query está saturada por conteúdo sobre IA** (4 de 5 primeiros): gerar foto profissional com ChatGPT/Gemini. Isso contextualiza o CTR 0,12% da query no GSC — a demanda informacional morre nos primeiros resultados.
2. **A única URL própria presente é a legada /loja com querystring** — a URL que o Google escolhe exibir hoje para a intenção tem title exato e conteudo de ensaio antigo. Coerente com a hipótese H1 de 06.
3. **/foto-profissional NÃO apareceu** na amostra de hoje (apareceu na amostra da P18G em 21/09 como pos. ~5 — variabilidade entre amostras; não é ranking estável).
4. **Observação de normalização (FASE 6):** se essa URL legada aparecer no query×page do GSC, registrar a RAW_URL completa (com querystring) e classificar como LEGACY URL — não fundir silenciosamente com /loja limpa nem com nenhuma página atual. O srsltid é parâmetro de tracking do Google e pode ser removido na NORMALIZED_URL; o restante da querystring é identificador real do Joomla.

## Limite declarado

SERP pública não informa cliques, impressões, share por URL nem posição média — apenas qual URL o motor exibe num dado momento para um dado perfil. **Não substitui o GSC.** Decisão permanece G (INCONCLUSIVO) até o query×page real.
