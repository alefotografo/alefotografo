# 17 — Manual Test Pack (execução pelo proprietário)

Data: 21/09/2026 · Como executar o baseline de IA que este ambiente não conseguiu acessar (6 plataformas sem login disponível — nada foi simulado).

## Preparação (10 min)

1. Abra cada plataforma em aba privada/anônima (sem memória de conversas anteriores): ChatGPT (com busca ativada), Google (AI Mode, onde disponível), Perplexity, Copilot, Claude (web search).
2. Idioma pt-BR. Não faça login com perfil pessoal se quiser reduzir personalização (ou limpe o histórico de busca).
3. Tenha o arquivo `01-geo-prompts.csv` aberto — use os textos EXATOS.

## Protocolo por prompt

- **Nova conversa a cada prompt** (botão novo chat). Sem exceção.
- Não adicione "Alê Fotógrafo" a prompts não-branded. Não diga "procure no site X". Não pergunte "por que você não citou…".
- Após a resposta, registre em `02-live-ai-results.csv` (cópia local): engine, prompt_id, e cada coluna. Para MENTION ORDER, anote a posição em que Alê apareceu na lista (1, 2, 3…) — é MENTION ORDER SNAPSHOT, nunca "ranking".
- MENTION: a resposta fala de Alê/Alexandre. CITATION: há link/fonte para domínio do ecossistema. Distinga os dois.

## Rodada 1 — sweep completo (1 execução por prompt)

- Prompts 01–52 + R01–R10 nas 5 plataformas (Google AI Overviews: só registre se aparecer naturalmente; se não, marque NOT TRIGGERED).
- Prompts 53/54 (Totem Mania) e 55–57 (branded): registre separado — **fora** do Mention Share não-branded.

## Rodada 2 — variabilidade (somente 10 prompts)

Repita em conversas novas, 3 vezes cada: **02, 05, 08, 13, 17, 22, 30, 33, 39, 46**. Anote quanto as respostas mudam entre execuções (menções somem/aparecem, ordem muda).

## Rodada 3 — ENTITY ACCURACY (prompts 55–57)

Por resposta, preencha o formulário: NAME / PERSON / CITY / PROFESSION / EXPERIENCE / COMMERCIAL_SINCE / PHONE / SERVICES / WEBSITE → CORRECT · PARTIAL · INCORRECT · NOT MENTIONED. Erros: PHONE_WRONG · EXPERIENCE_WRONG · CITY_WRONG · SERVICE_WRONG · OLD_DOMAIN · OLD_PHONE · WRONG_PERSON · CONFUSED_BRAND · OUTDATED_SERVICE · INVENTED_FACT.

## Classificações especiais

- Citação de **videoscorporativos.com.br** para intenção de vídeo → OWNED ECOSYSTEM WIN (não é erro).
- Citação de alemachado/alefotografos/fotografoale/fotodeperfil para intenção do principal → OWNED DOMAIN LEAKAGE (salvo decisão futura sobre alemachado).
- Prompt 05 "foto profissional": anote EXATAMENTE qual URL foi citada — é o caso crítico do baseline (GSC mostra a intenção sem URL reconhecida).
- Se a resposta mostrar fontes/links de concorrentes, copie os domínios para `06-competitor-citation-gap.csv` (coluna source_type: site próprio / blog / Instagram / diretório / YouTube / ferramenta IA).

## Entrega após coleta

Devolva os CSVs preenchidos (ou prints estruturados) para consolidação: métricas finais (Mention Share, Citation Share, Correct Page Rate, Entity Accuracy, coberturas por cluster) e o delta vs. este baseline de proxy.
