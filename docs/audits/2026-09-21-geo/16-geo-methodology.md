# 16 — GEO Methodology

Data: 21/09/2026 · Branch: research/p18g-geo-baseline · Base: main 1327448.

## O que é e o que não é este baseline

**GEO não é sinônimo de** llms.txt, schema, FAQ, keyword stuffing ou texto "escrito para IA". Não assumimos causalidade, não inventamos "fator de ranking de IA", não prometemos posições e não tratamos resposta de IA como ranking estável — IA generativa é probabilística. Este documento é um **BASELINE REPRODUZÍVEL**.

## Status das plataformas (regra de acesso)

Nenhuma das 6 plataformas de resposta de IA possui acesso autenticado disponível neste ambiente. Sem contornar segurança, sem criar conta, sem inventar resultado:

| PLATAFORMA | STATUS |
|---|---|
| ChatGPT Search | NOT TESTED — AUTH REQUIRED |
| Google AI Mode | NOT TESTED — AUTH REQUIRED |
| Google AI Overviews | NOT AVAILABLE IN TEST ENVIRONMENT (não disparável via ferramentas disponíveis) |
| Perplexity | NOT TESTED — AUTH REQUIRED |
| Microsoft Copilot/Bing | NOT TESTED — AUTH REQUIRED |
| Claude com web search | NOT TESTED — AUTH REQUIRED |

Consequência: as métricas de menção/citação em IA **não puderam ser medidas ao vivo**. Todos os arquivos que as conteriam (02, 03, 04, 05, 06, 18) foram estruturados com o esquema completo + coluna de status, prontos para execução manual (ver 17-manual-test-pack.md). NENHUM dado de IA foi simulado ou estimado.

## O que foi medido de verdade nesta missão

1. **Technical AI access** (robots.txt × documentação oficial 2026) — arquivo 09.
2. **Entity consistency audit** — site (home, quem-e-o-ale, llms.txt, schema) × fatos oficiais. Resultado: consistente (nome, pessoa, cidade, +30 anos, desde 1999, telefone 91355) — exceções e riscos nos arquivos 05/07.
3. **Content citability audit** — 14 páginas-chave avaliadas manualmente (arquivo 10).
4. **Page citation map** — intenção → página preferida, validada contra arquitetura real (arquivo 08). Inclui os casos "TARGET PAGE UNDER REVIEW" vindos do GSC (P18A.6R: "foto profissional" tem 17.107 impressões mas /foto-profissional só 59 — NÃO assumimos que a página é a URL reconhecida).
5. **SERP amostral** (12 buscas, ferramenta de busca, amostra única, ordem ≠ posição oficial) — usada como **proxy de visibilidade de descoberta** e para mapear concorrentes/fontes. É o dado "vivo" disponível no ambiente; rotulado como SEARCH SNIPPET SAMPLING, separado de qualquer medição de IA.
6. **Owned-domain detection** — ecossistema de **7 domínios oficiais** (atualização P18G.0A: fotosprofissionais.com.br confirmado pelo proprietário como owned). Achados na amostra: alemachado.com.br ranqueando em advocacia; fotosprofissionais.com.br com copy da marca na busca "foto profissional" — reclassificado como OWNED DOMAIN LEAKAGE até análise estratégica.

## Regras de medição (valem para a execução manual futura)

- Cada teste em **nova conversa**, sem histórico, sem memória/personalização quando possível.
- Idioma pt-BR, mercado Brasil, local intent SP quando o prompt especificar.
- Prompts EXATOS como em 01-geo-prompts.csv (57 oficiais + 10 recomendação natural R01–R10).
- Não orientar a IA a procurar o domínio; não perguntar "por que você não citou".
- 53/54 (Totem Mania) e 55–57 (branded) **fora** do Non-Branded Mention Share.
- 1 execução padronizada por prompt; repetir 3× (conversas novas) apenas os 10 estratégicos: 02, 05, 08, 13, 17, 22, 30, 33, 39, 46.
- MENTION ≠ CITATION (menção fala da marca; citação traz link/fonte).
- ALE_MENTION_ORDER registrado como **MENTION ORDER SNAPSHOT** — nunca chamado de "AI ranking".
- Nenhum "GEO score" mágico: apenas métricas percentuais objetivas, sem soma em número de vaidade.

## Classificação usada

- Citation types: MAIN DOMAIN / OWNED SPECIALIST DOMAIN / OWNED LEGACY DOMAIN / THIRD PARTY / COMPETITOR / NONE.
- Own domains: videoscorporativos.com.br citado para intenção de vídeo = **OWNED ECOSYSTEM WIN** (nunca concorrente automático). alefotografos/fotografoale/fotodeperfil/alemachado/fotosprofissionais como destino de consulta do principal = **OWNED DOMAIN LEAKAGE** (até revisão; alemachado tem papel próprio a avaliar; fotosprofissionais confirmado owned em 21/09 — P18G.0A). fotosprofissionais em consultas de foto profissional/fotografia profissional/retrato/LinkedIn/perfil profissional = inicialmente **OWNED DOMAIN VISIBILITY**, reclassificado para LEAKAGE quando compete com intenção do principal.
- Gaps: TECHNICAL / ENTITY / CONTENT / CASE / EXTERNAL AUTHORITY / LOCAL / VIDEO / IMAGE / DRONE / CITATION / OWNED DOMAIN CONFUSION / UNKNOWN.
- Evidence: HIGH (vários engines/prompts) · MEDIUM (repetido em um engine ou site+resposta) · LOW (resultado único/hipótese).
