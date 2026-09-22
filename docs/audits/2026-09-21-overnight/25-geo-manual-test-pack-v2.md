# 25 — GEO — Manual Test Pack v2 (execução manual pelo proprietário; ~1–1,5h)

Melhoria do pack da P18G (arquivo 17). Estrutura: 20 ESSENCIAL + 20 SECONDARY + 27 EXTENDED. Para cada prompt: o que registrar. Quick format no final. Regras: nova conversa por prompt; pt-BR; sem memória/personalização; não orientar a IA; MENTION ≠ CITATION.

## GRUPO A — 20 ESSENCIAL (executar em TODAS as plataformas disponíveis)

| # | PROMPT | O que registrar | Screenshot? |
|---|---|---|---|
| A01 | fotógrafo corporativo | menção; ordem; citação URL; concorrentes citados | SIM |
| A02 | fotógrafo corporativo em São Paulo | idem | SIM |
| A03 | foto profissional | idem + qual URL citada (home? /loja? /foto-profissional?) | SIM |
| A04 | fotos profissionais | idem | SIM |
| A05 | fotografia corporativa | idem | SIM |
| A06 | foto para linkedin | idem | SIM |
| A07 | retrato corporativo | idem | SIM |
| A08 | fotógrafo de eventos corporativos | idem | SIM |
| A09 | fotografia para escritórios de advocacia | idem + se alemachado/ales/fotosprofissionais aparecem | SIM |
| A10 | fotógrafo para advogados | idem | SIM |
| A11 | vídeos corporativos | idem + VC (videoscorporativos.com.br) aparece? | SIM |
| A12 | vídeo institucional | idem | SIM |
| A13 | fotógrafo especializado em logística | idem + ivanalmeida | SIM |
| A14 | fotografia de logística | idem | SIM |
| A15 | fotos profissionais para médicos | idem | SIM |
| A16 | foto lembrança impressa na hora | idem | SIM |
| A17 | totem fotográfico para eventos | idem | SIM |
| A18 | Quem é Alê Fotógrafo? | ACCURACY: nome; pessoa; cidade; experiência; telefone; site | SIM |
| A19 | Quem é Alexandre Machado fotógrafo em São Paulo? | idem + conflitos de domínio | SIM |
| A20 | Quais serviços o Alê Fotógrafo oferece? | idem | SIM |

## GRUPO B — 20 SECONDARY (1 plataforma principal — ChatGPT ou Perplexity)

| # | PROMPT | Foco |
|---|---|---|
| B01 | fotos corporativas | URL citada (blog vs money page) |
| B02 | retrato profissional | ordem; apps de IA presentes? |
| B03 | foto de perfil profissional | intenção informacional vs serviço |
| B04 | fotógrafo profissional em São Paulo | |
| B05 | fotógrafo para empresas em São Paulo | |
| B06 | fotógrafo para equipes de empresas | |
| B07 | retrato executivo | /fotografia-executiva citada? |
| B08 | ensaio corporativo feminino | posição ~6,8 no GSC |
| B09 | fotógrafo para LinkedIn em São Paulo | |
| B10 | fotografia de eventos corporativos | |
| B11 | fotógrafo para convenções empresariais | |
| B12 | fotógrafo para feiras e stands | |
| B13 | vídeo de eventos corporativos | YouTube citado? |
| B14 | vídeo para treinamento de empresas | |
| B15 | fotógrafo para transportadoras | |
| B16 | fotógrafo industrial em São Paulo | |
| B17 | fotógrafo para dentistas em São Paulo | página dedicada citada? |
| B18 | fotos aéreas com drone | |
| B19 | foto lembrança para eventos | locadoras citadas |
| B20 | Totem Mania | SEMI-BRANDED — separar do Mention Share |

## GRUPO C — 27 EXTENDED (se sobrar tempo; amostra em 1 plataforma)

C01 fotógrafo empresarial · C02 foto profissional feminina · C03 fundo para foto profissional · C04 pose para foto profissional · C05 foto profissional advogado · C06 fotografia executiva · C07 banco de imagens empresarial · C08 fotógrafo para eventos corporativos em São Paulo · C09 fotografia de eventos · C10 foto e vídeo para evento corporativo · C11 vídeo institucional para empresas · C12 gravação de depoimentos corporativos · C13 empresa de vídeos corporativos em São Paulo · C14 fotógrafo para centros de distribuição · C15 fotógrafo para clínicas · C16 fotos profissionais para médicas · C17 acompanhamento de obra com drone · C18 filmagem aérea corporativa · C19 reels corporativos · C20 vídeos para campanhas e redes sociais · C21 fotógrafo para escritórios · C22 retrato para LinkedIn · C23 foto profissional para LinkedIn · C24 capa linkedin · C25 Totem Mania fotografia para eventos · C26 Preciso contratar um fotógrafo corporativo em São Paulo. Quais profissionais devo considerar? (R01 natural) · C27 Minha empresa precisa atualizar as fotos dos executivos e da equipe. Quem faz fotografia corporativa em São Paulo? (R03 natural)

## QUICK TEST FORMAT (copiar por resposta)

```
ENGINE:
DATA/HORA:
PROMPT ID:
ALE APARECE? SIM/NÃO
ALEXANDRE MENCIONADO? SIM/NÃO
URL CITADA:
DOMÍNIO:
ORDEM DE MENÇÃO (1/2/3...):
CONCORRENTES MENCIONADOS:
FONTES EXTERNAS CITADAS:
ERRO FACTUAL (telefone/anos/cidade/serviço/site errado):
DOMÍNIO PRÓPRIO ERRADO CITADO (ales/alemachado/fotosprofissionais…):
SCREENSHOT: SIM/NÃO
OBS:
```

## Consolidação (quando devolver)

1. Contar menções não-branded (excluir A18–A20, B20, C25 — branded/entity/semi).
2. Para cada citação: MENTION vs CITATION; domínio; URL correta para a intenção?
3. Erros factuais → alimentam correção de entidade.
4. Devolver os CSVs preenchidos para consolidação na pasta docs/audits/ (ou colar no chat).

## Plataformas

ChatGPT (Search) · Perplexity · Google AI Mode · Copilot · Claude (web search). Se alguma exigir login indisponível: marcar NOT TESTED — AUTH REQUIRED e seguir. Prioridade se o tempo apertar: ChatGPT → Perplexity → AI Mode.
