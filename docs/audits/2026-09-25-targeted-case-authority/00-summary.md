# P20B — Targeted Case Authority — Summary

Data: 2026-09-25
Branch: feat/p20b-targeted-case-authority
Base: e8b8d54 (origin/main)

## Escopo

Transferir autoridade dos cases nomeados para money pages de conversão, APENAS onde a relação semântica é direta. Princípio: relevância > quantidade. Página sem case é melhor que página com case pouco relacionado.

## Decisões

| Página | Case | Decisão | Motivo |
|---|---|---|---|
| /fotografo-empresarial | /cases/ativa-logistica | IMPLEMENTADO | Conteúdo da página já cobre equipe, escritório, operação, indústria, logística, CD, expedição, frota |
| /fotos-corporativas | /cases/ativa-logistica | IMPLEMENTADO | Gate 3/3 SIM: case comprova fotografia corporativa de operação; 12 fotos reais; inserção limitada a estrutura/operação sem atribuir retratos |
| /fotografia-para-advogados | /cases/rocha-e-queiroz-advogados | VALIDATED — NO CHANGE | caseLinks já existia (1 ocorrência), sem duplicação |
| /video-institucional | ambos | ALREADY COVERED | links contextuais já presentes da P19C |
| /foto-profissional | — | NO CHANGE | sem case de retrato individual documentado |
| /foto-profissional-para-linkedin | — | NO CHANGE | nenhum dos 2 cases comprova headshot/LinkedIn |
| /fotografia-executiva | — | NO CHANGE | nenhum case comprova diretoria/C-level factualmente |
| /fotografia-para-clinicas | — | NO CHANGE | cases não pertencem ao segmento saúde |
| /fotos-profissionais-medicos | — | NO CHANGE | sem case médico nomeado pronto |
| /eventos-corporativos | — | NO CHANGE | ATIVA/R&Q não são cases de evento; Tecnisa futuro, NEEDS BRIEFING |
| /fotografo-de-feira-de-negocios | — | NO CHANGE | ATIVA/R&Q não são cases de feira; SQ Química futuro, NEEDS BRIEFING |

## Implementação

1. `src/routes/fotografo-empresarial.tsx`: adicionado `caseLinks` ao cfg existente (label "ATIVA Logística", desc "fotografia de operação, estrutura logística e produções em vídeo."). Renderizado pelo bloco "Case comercial" existente em ServicePage.tsx.
2. `src/routes/fotos-corporativas.tsx`: adicionado bloco compacto "Prova real: estrutura e operação" (1 H2 curto + 1 parágrafo + 1 link), posicionado após os cards de formato e antes de "Mais especialidades". Texto limitado a estrutura/operação; nenhuma atribuição de retratos de equipe/diretoria.

## Locks respeitados

- ServicePage.tsx: NÃO alterado
- Cases (ATIVA, R&Q): NÃO alterados
- Owners P20A (advocacia, logística): NÃO alterados
- Home, Header/menu, Masonry/SmartImage/categoryImageDims: NÃO alterados
- TITLE/META/H1/canonical/FAQ/CTA das rotas editadas: UNCHANGED (verificado em diff)
- URLs, redirects, sitemap, robots, llms.txt, routeTree: ZERO alteração

## Validação

- tsc --noEmit: PASS
- npm run build: PASS
- SSR: ATIVA + link + "Case comercial" presentes em ambas as rotas
- Viewports 390/768/1440 × 3 rotas: 9/9 PASS (200, zero hscroll, zero img quebrada, case link presente)
- Advocacia: 1 ocorrência "Case comercial" (sem duplicação)

## Próximos candidatos (NÃO implementar)

- SQ Química: NEEDS BRIEFING (5 vídeos; indústria/feiras)
- Tecnisa: NEEDS BRIEFING (3 vídeos; eventos)
- Dra. Luciana Xavier: NEEDS BRIEFING (fotos; clínicas)
