# P20B — Service × Case Fit

## Gate semântico aplicado (pergunta a cada caso)

1. O case comprova o serviço que a página vende?
2. O case possui fotografia real (não só vídeo)?
3. A inserção é natural, sem atribuir ao case escopo não comprovado?

## /fotografo-empresarial × ATIVA Logística — FIT PASS

Evidência semântica no conteúdo existente da página:
- subtitle: "retratos da equipe, ambientes, processos, indústria, logística e imagens de bastidor"
- formats: "Ambiente e operação — na sede, escritório, clínica ou planta"
- FAQ: "Vocês fotografam dentro da indústria ou do centro de distribuição? — Sim."
- gallerySlugs inclui fotografia-de-logistica, fotografia-industrial-em-sp, banco-de-imagens-para-empresas

ATIVA: 12 fotografias comprovadas de operação logística (Itapevi, Barueri) + 8 vídeos. Gate 3/3 SIM.
Mecanismo: caseLinks existente em ServicePage.tsx (campo opcional, default undefined). Nenhum componente alterado.

## /fotos-corporativas × ATIVA Logística — FIT PASS (com limitação explícita)

Evidência semântica:
- ANSWER_BLOCK inclui "escritório, operação e eventos internos"
- Formats inclui "Ambiente e operação"
- Hero já linka galeria fotografia-de-logistica ("Na operação logística, esse material inclui frota, armazéns e centros de distribuição")

ATIVA comprova fotografia corporativa de estrutura/operação empresarial. O texto inserido limita-se a "documentamos estrutura e operação" + "fotografias da operação e produções em vídeo" — zero atribuição de retratos de equipe/diretoria/evento.

Gate 3/3 SIM.

## /fotografia-para-advogados × R&Q — FIT PASS (pré-existente)

caseLinks já existia desde P19C: 1 ocorrência, label "Rocha & Queiroz Advogados", desc "vídeo institucional, fotografia e depoimento da equipe." VALIDATED — NO CHANGE.

## Páginas sem fit (resumo)

Ver 02-no-change-pages.md.
