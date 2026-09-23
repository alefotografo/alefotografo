# 07 — CTR / SERP analysis
## Query "foto profissional" — 17.107 impressões / 21 cliques / CTR 0,12% / posição 3,92

## O fato

Um CTR de 0,12% na posição média 3,92 é extremamente baixo. Referência geral
de curva: posições 3–4 costumam render CTR de um dígito percentual. Aqui temos
um dígito de décimos de percentual — diferença de ~1 ordem de grandeza.

## Hipóteses avaliadas (sem concluir cedo)

### H1 — "title ruim" → REJEITADA como explicação principal

- 3 dos 5 posts vencedores já têm title curto manual (`postSeo.ts`), criado
  exatamente para resolver truncamento.
- O post com MELHOR posição (5-poses, 2,52) tem title otimizado e ainda assim
  CTR 0,08%. Se title fosse o fator dominante, o CTR do líder seria visivelmente
  melhor que o dos demais — não é (todos ficam em 0,06–0,08%).
- Conclusão: o snippet não é o gargalo dominante. NÃO mexer em titles por causa
  deste número (ver `08`).

### H2 — SERP com features que absorvem clique → PRINCIPAL SUSPEITA

Para a head query no Brasil, a intenção dominante do usuário é **fazer/editar
foto** (ferramentas, apps, geradores, edição), não contratar fotógrafo. SERPs
desse tipo tendem a exibir:

- image pack / resultados de imagem (que zeram cliques orgânicos);
- blocos de apps e ferramentas (Remini, PhotoAI, editores);
- People Also Ask;
- resultados gerados por IA no topo;
- fóruns e conteúdo DIY.

Nenhuma dessas features é observável no GSC — o Search Analytics só mede a
parcela de cliques orgânicos que sobra. Um CTR de 0,1% com posição ~4 é o
retrato típico de uma SERP assim.

**Status:** hipótese forte, porém NÃO verificada em vivo nesta missão (SERP
pública da P18Q1 mostrou a URL legada `/loja?img_picture=...` + 4 resultados
de IA — compatível com esta leitura, mas é uma amostra de 1 dia).

### H3 — Mismatch de intenção título × busca → CONFIRMADA parcialmente

Os títulos que rankeiam são de posts **how-to** ("5 poses", "11 ideias de
fundo", "7 dicas"). Para o usuário com intenção "fazer sozinho", o título de
blog até atrai o clique; para o usuário com intenção "contratar", o título de
blog afasta o clique. Como a intenção majoritária da head query é DIY/ferramenta,
o tráfego que sobra é pequeno — coerente com 21 cliques em 3 meses.

### H4 — Dados de período/posição média distorcidos → NOTA METODOLÓGICA

Posição média 3,92 é uma média de 3 meses. Se o post subiu recentemente, a
média mistura períodos. Não afeta a direção da conclusão (CTR baixo em todas
as posições observadas), mas impede afinar o número.

## Leitura comercial

A head query "foto profissional" **não é o atalho comercial que parecia**.
17 mil impressões informacionais/DIY geram 21 cliques. O valor comercial do
cluster está em:

1. **queries com intenção contratar/local**: "fotógrafo corporativo são paulo"
   (348 impr, pos 1,84, CTR 2,9% na Home — 20x o CTR da head query);
2. **cluster LinkedIn** ("foto para linkedin" 1.266 impr, pos 4,49);
3. os próprios posts vencedores como ativos de autoridade que alimentam as
   money pages via internal linking (plano em `06`).

## Recomendação

- **Não otimizar CTR da head query agora.** Sem dados de SERP por dia e sem
  comparativo de CTR por posição, mexer no snippet é tiro no escuro com
  capital real em risco.
- Reavaliar após 2 dados novos: (a) SERP amostrada em 5+ dias registrando
  features presentes; (b) CTR dos posts em posições ≥5 vs <5 (se o CTR for
  igual, confirma absorção por features; se variar, o snippet pesa).
- Prioridade de esforço migra para queries com CTR já saudável e intenção
  comercial (Home/local) — mesmo que com menos volume.
