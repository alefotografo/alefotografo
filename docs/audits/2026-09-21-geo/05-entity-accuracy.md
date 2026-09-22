# 05 — Entity Accuracy

Data: 21/09/2026 · IA ao vivo: NOT TESTED (6 plataformas sem acesso autenticado — prompts 55–57 pendentes de execução manual). Esta auditoria mede a **consistência factual da entidade no site** (o que as IAs vão encontrar ao citar) e define o gabarito de correção para os testes branded futuros.

## Gabarito oficial (fonte de verdade)

| CAMPO | VALOR CORRETO |
|---|---|
| NAME | Alê Fotógrafo |
| PERSON | Alexandre Machado |
| CITY | São Paulo/SP |
| PROFESSION | fotógrafo corporativo / fotógrafo profissional |
| EXPERIENCE | mais de 30 anos de experiência |
| COMMERCIAL SINCE | 1999 (atuação comercial) |
| PHONE | +55 11 91355-0533 (WhatsApp 5511913550533) |
| WEBSITE | https://www.alefotografo.com.br |
| SERVICES | fotografia corporativa, retrato profissional/executivo, LinkedIn, eventos corporativos, banco de imagens, nichos (logística, indústria, advocacia, saúde), foto aérea/drone, foto+vídeo integrado, vídeo corporativo (ecossistema) |

## Auditoria estática (site × gabarito) — 21/09

| FONTE | name | person | city | profession | experience | since | phone | services | RESULTADO |
|---|---|---|---|---|---|---|---|---|---|
| Home (title/H1/schema) | ✓ | ✓ | ✓ | ✓ | "mais de 30 anos" ✓ | 1999 ✓ (schema) | — (CTA wa.me) | ✓ | CORRECT |
| /quem-e-o-ale (H1 "Alexandre Machado — o fotógrafo por trás do Alê Fotógrafo") | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ | CORRECT |
| llms.txt | ✓ | ✓ | ✓ (Alameda Santos, 1165) | ✓ | ✓ | ✓ (desde 1999) | — (não lista telefone no trecho principal) | ✓ | CORRECT |
| Schema Person+Organization+LocalBusiness | ✓ | ✓ | ✓ | ✓ | — (intencional) | 1999 ✓ | ✓ (schema) | ✓ | CORRECT |
| Rodapé/sameAs | ✓ | — | ✓ | — | — | — | ✓ | — | CORRECT |

Zero divergência factual no domínio principal. Nenhum telefone antigo (99483), nenhum 1995, nenhum "30 anos desde 1999".

## Riscos de entidade detectados (alimentam 07 e 11)

1. **OWNED DOMAIN CONFUSION (evidence MEDIUM)**: alemachado.com.br (Alboom) e alefotografos.com.br ranqueiam com a mesma entidade "Alê/Alexandre" para intenções do principal — IAs podem aprender relações fracionadas entre múltiplos domínios do mesmo dono (7 oficiais desde P18G.0A).
2. **OWNED DOMAIN LEAKAGE (evidence MEDIUM)**: fotosprofissionais.com.br — **ownership confirmado pelo proprietário em 21/09 (P18G.0A; 7º domínio do ecossistema)** — apareceu na amostra com copy "30 anos de experiência" na busca "foto profissional". A copy usa fato real da marca (nenhum fato incorreto), mas o domínio compete com a intenção que pertence preferencialmente ao principal. Levantamento (GSC, backlinks, URLs, conteúdo, tráfego, ranking, intenção) antes de qualquer decisão estratégica.
3. **Legacy URL no lugar da entidade** (evidence HIGH no GSC): "foto profissional" → /loja?img_picture=... — IAs que copiarem SERP podem citar URL legada com metadados antigos.
4. **Regra de execução factual para IAs** (llms.txt): "dirigidos por Alexandre e executados por ele e/ou equipe" — correto e sem promessa universal; preserva retrato individual pessoal "conforme formato" (fato verdadeiro).

## Modelo de registro para os testes branded futuros (prompts 55–57)

Por resposta de IA, preencher: NAME / PERSON / CITY / PROFESSION / EXPERIENCE / COMMERCIAL_SINCE / PHONE / SERVICES / WEBSITE → CORRECT · PARTIAL · INCORRECT · NOT MENTIONED, com wrong_facts tipados (PHONE_WRONG, EXPERIENCE_WRONG, CITY_WRONG, OLD_DOMAIN, OLD_PHONE, WRONG_PERSON, CONFUSED_BRAND, OUTDATED_SERVICE, INVENTED_FACT). Formulário em branco incluído em 17-manual-test-pack.md.
