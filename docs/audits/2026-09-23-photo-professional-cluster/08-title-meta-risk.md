# 08 — Title / meta risk dos posts vencedores
## NENHUM title/meta será alterado nesta missão — classificação de risco apenas

Contexto: `postSeo.ts` já reescreveu titles/descriptions de dezenas de posts
(127 de 142 originais passavam de 60 caracteres e apareciam cortados no
Google). H1 e URL nunca mudam — só o pacote de busca.

| Post | Title tag atual | Origem | Posição (head query) | CTR | Classificação |
|---|---|---|---|---|---|
| 5-poses | "5 Melhores Poses para Retrato Corporativo \| Alê Fotógrafo" (~60) | postSeo override | 2,52 | 0,08% | **DO NOT TOUCH** |
| 11-ideias | "11 Idéias para o plano de fundo de seu Retrato Profissional" (60) | fallback (cabe exato) | 7,36 | 0,08% | **DO NOT TOUCH** |
| 7-dicas | "7 Dicas para você nunca mais errar na aparência ao tirar…" (truncado) | fallback longo | 7,21 | 0,06% | **MINOR SNIPPET OPPORTUNITY** |
| 7-lugares | "7 Lugares para Fotos Profissionais em São Paulo" | postSeo override | 2,32 (plural) | 0,12% | **DO NOT TOUCH** |
| 14-vezes | "Foto Profissional Aparece 14x Mais no LinkedIn" | postSeo override | 4,45 | 0% (323 impr) | **DO NOT TOUCH** |

## Notas por classificação

### DO NOT TOUCH (4 de 5)
Title ≤60, palavra-chave na frente, description específica. O CTR baixo é
explicado pela SERP (ver `07`), não pelo snippet. Qualquer mudança agora
misturaria variáveis e arrisca posição real com ganho incerto.

### MINOR SNIPPET OPPORTUNITY (7-dicas)
Único vencedor cujo title aparece truncado com "…" no Google — o fallback usa
o título longo do catálogo. Um title curto manual resolveria a exibição.
**Mas:** CTR 0,06% ≈ CTR dos posts com title perfeito — o truncamento não é
o gargalo. Incluir como teste FUTURO dentro de um lote controlado de
`postSeo`, nunca como mudança isolada reativa a este relatório.

Sugestão registrada (para eventual lote, SEM ação agora): algo na linha
"Fotos Profissionais: 7 Erros de Aparência para Evitar" — manter o padrão do
arquivo (keyword na frente, ≤60). **Não implementar nesta missão.**

## Risco de mudança (todos os 5)

- Trocar title de URL posicionada = reavaliação do Google com resultado
  incerto; histórico do domínio mostra ganhos com `postSeo`, mas aquele lote
  foi feito em escala com páginas ainda não líderes — diferente de mexer no
  líder do cluster.
- Regra desta documentação: **title de post vencedor só muda via teste com
  hipótese, métrica de sucesso e janela de reversão definidas.**

## Meta descriptions
Todas ≤160 caracteres, específicas, sem keyword stuffing. Sem ação.
