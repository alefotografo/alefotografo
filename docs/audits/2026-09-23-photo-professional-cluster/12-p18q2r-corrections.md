# 12 — Correções P18Q2R + gate P18Q3 com dados reais

Data: 2026-09-23 · Missão: P18Q2R + P18Q2I

## Correção 1 — contagem de links

A entrega da P18Q2 registrou "8 links em 4 bridges novas". Correção:

- **7 links novos em 4 bridges novas** + 1 linha do CSV referente à
  **bridge já existente** do 5-poses (BRIDGE_EXISTENTE, FORA_DE_ESCOPO).
- O CSV `06` foi atualizado: a linha do 5-poses agora está explicitamente
  marcada como registro.

## Correção 2 — reconciliação 09 × 06

O documento `09` afirmava que `/foto-profissional` deveria ganhar links
contextuais dos posts vencedores, mas o CSV original não continha nenhum
destino para essa página. Reconciliação aplicada no CSV `06`:

- **11-ideias** → `/foto-profissional` (ensaio individual de retrato = core da
  página) + `/fotografo-corporativo/retrato-corporativo` (variação empresa)
- **7-dicas** → `/foto-profissional` (sessão individual conduzida) +
  `/fotografo-corporativo/fotografia-corporativa-em-sao-paulo` (demanda equipe)
- **7-lugares** → `/foto-profissional` (produção individual em locação) +
  `/fotografo-corporativo/fotografia-corporativa-em-sao-paulo` (empresa)
- **14-vezes** → `/foto-profissional-para-linkedin` (match natural, mantido)

**3 das 4 bridges novas apontam naturalmente para `/foto-profissional`** —
justificativa: os três posts tratam de retrato/ensaio individual (fundo,
aparência, locação), que é exatamente a intenção comercial da página. Nenhum
link foi forçado: cada um fecha o raciocínio editorial do próprio artigo.

## Novos dados GSC — gate P18Q3 (fonte autenticada, mesmo período 15/06–14/09/2026)

### /foto-profissional — query footprint confirmado
- Top queries: "retratos profissionais" (6), "foto profissional" (5),
  "fotógrafo corporativo são paulo" (1), "retrato corporativo em são paulo" (1);
  apex "foto profissional" (4). Total head query na página: 9 impressões, 0 cliques.
- Queries contendo **"ensaio"**: ZERO linhas para a página no período.
- Queries contendo **"são paulo"**: só "fotógrafo corporativo são paulo" (1 impr,
  pos 82) e "retrato corporativo em são paulo" (1 impr, pos 98).
- Queries exatas testadas SEM linha: "foto profissional são paulo", "foto
  profissional em são paulo", "retratos profissionais são paulo", "retrato
  profissional são paulo", "foto profissional para executivos".

### Demanda "ensaio" no domínio (não na página)
- "ensaio profissional": 364 impr, 0 cliques, pos 4,53
- "ensaio fotográfico profissional": 245 impr, 0 cliques, pos 16,56
- "ensaio de fotos profissionais": 110 impr, 1 clique, pos 9,13
- "ensaio de foto profissional": 80 impr, 0 cliques, pos 6,16

### Decisão P18Q3 provisória (registrada, não executada nesta fase)
A demanda "ensaio profissional" existe no domínio (799 impressões somadas nas
4 queries), mas **ainda não pertence a `/foto-profissional`** com evidência
suficiente (zero linhas da página). Portanto: **NÃO alterar** title, meta, H1,
URL, canonical, schema nem estrutura da página nesta fase. O reforço de links
internos (bridges) é a alavanca correta agora; title fica para reavaliação
futura com dados de período mais recente.

## Atualizações derivadas
- `06`: reconciliado (7 novos links; 3 para `/foto-profissional`).
- `09`: reconciliado com o CSV.
- `10`: gate de entrada ATENDIDO com dados reais; escopo de title/meta suspenso
  por falta de evidência; escopo de bridges executado na P18Q2I.
- `11`: itens 1, 2 e 5 absorvidos pela sequência P18Q2R/P18Q2I.
