# 00 — P18-NIGHT — Overnight Deep Work — Executive Summary

Data: 2026-09-21/22 · Branch: research/p18-night-geo-seo (base main 1327448 + docs GEO pendentes de merge) · **Zero alterações de código, produção, DNS, Cloudflare ou domínios.**

## O que foi executado (fases 0–40)

- **F0 Segurança:** main intacta em 1327448; branch de pesquisa criada sem mistura de código; working tree segura (2 `.lovable/plan/` untracked preservados fora de commits, como sempre).
- **F1 Ownership GEO:** fotosprofissionais.com.br já reclassificado como OWNED na P18G.0A (commit 1bd2d9a); revalidado — nenhuma ocorrência residual como third-party/competitor nos docs.
- **F2–F3 Auditoria fotosprofissionais.com.br:** landing page de nicho (advocacia SP), Lovable+Vercel, 1 URL no sitemap, zero blog. Overlap HIGH com foto profissional / retrato / corporativo / perfil. **Inconsistência factual entre domínios owned:** llms.txt do fotosprofissionais declara "140 avaliações — nota 5.0/5.0"; principal declara "4.9 em 144". Detalhe em 02.
- **F4 Recheck técnico principal:** robots.txt, llms.txt, sitemap-index **idênticos** aos registrados na P18G (09). Nada mudou. Crawlers de IA seguem todos permitidos.
- **F5–F6 SERP proxy:** 31 consultas amostradas (SEARCH SNIPPET SAMPLING — nunca "AI ranking"). ALE presente em ~11/31. Ausências críticas: vídeo (VC 0/4), drone (0/4), médicos, industrial, fotos profissionais, foto de perfil, LinkedIn. Concorrentes repetidos consolidados em 23.
- **F7 Citability audit:** 24 páginas auditadas. GEO readiness médio 2,25/3. Maior gap sistêmico: prova de cliente nomeada em só 6/24 páginas; 6 páginas sem FAQ (industrial, drone, totem, foto impressa, advocacia-fc, quem-e-o-ale); "desde 1999" só no schema (nunca em texto visível).
- **F8–F18 Planos por cluster:** 11 documentos (05–15) com dados GSC 09/17 + SERP proxy + citability.
- **F19 Blog→money:** 50 posts mapeados (16).
- **F20–F23 Cases readiness:** ATIVA (alto — 8 vídeos + 20 fotos + blog case), Rocha & Queiroz (médio — 2 vídeos + depoimento nomeado), Dra. Luciana (imagens sem narração), ALFA SILK (zero — BLOCKED).
- **F22 All Facilities:** pasta encontrada no volume (variação "Portfolio  Foto", 2 espaços): **19 imagens** (não 12), mesma sessão 04/04/2025, NIKON Z 6_2, 0 vídeos. Ler 21.
- **F24 Cases routing:** plano em 22 — `/portfolio/cases` é tecnicamente viável (estático vence dinâmico no TanStack), mas **muda /portfolio/cases de 301 para 200**; exige decisão consciente + sitemap manual.
- **F25 Feature branch de cases: NÃO CRIADA.** Decisão consciente: drafts completos prontos (18, 20) + arquitetura validada em documentação; implementação de código fica para missão dedicada com gate (ver 29 e 28). Nenhuma URL nova publicada.
- **F29–F30 Test pack v2** (25) e **F31 matriz prioridade** (26), **F32–F33 top 15 ações** (27), **F34 guardrails** (28).

## Top achados (ordem de impacto)

1. **"foto profissional" continua sem dono comprovado:** 17.107 impr/mês, pos 3,92, e /foto-profissional fora do top-45 de páginas por impressões (~59 impr). Home absorve a intenção. Plano em 05 — decisão query×page continua bloqueada sem acesso GSC.
2. **Cluster vídeo do GSC é informacional, não comercial:** 269 queries / 105 mil impressões dominadas por "app para editar video"; o post de apps de edição tem 386 mil impressões e 1.514 cliques. Demanda comercial de produção de vídeo no GSC é pequena; o ativo real do vídeo é a prova (/videos nomeia 20+ clientes). Isso recalibra o plano de vídeo (15).
3. **Drone tem ZERO demanda no GSC do período** (0 queries drone/aéreo/obra) — prioridade rebaixada para MEDIUM/LOW com evidência (13). Serp proxy confirma SERP dominada por mídia/stock e empresas de drone/topografia, não fotógrafos.
4. **Advocacia é o maior cluster comercial GSC** (5.194 impr; "rocha e queiroz advogados" 1.598 impr pos 9,6) e a SERP proxy mostra canibalização owned: 3 domínios do mesmo dono na mesma query (10, 15).
5. **fotosprofissionais.com.br é landing de conversão de nicho com NAP idêntico ao principal** — não concorrente, mas duplicador de intenção head; inconsistência de avaliações (5.0/140 vs 4.9/144) precisa de decisão factual (02, 01).
6. **Canalização de Cases:** ATIVA e Rocha & Queiroz têm material comprovável suficiente para páginas de case; ALFA SILK sem nada (BLOCKED — briefing); All Facilities com 19 fotos locais prontas para upload quando houver rota.

## Métricas da noite

- 30 documentos gerados (este + 01–30) · 1 commit de pesquisa · 0 commits de código · 0 publicações · 31 SERP proxy · 24 páginas citabilidade · 50 posts mapeados · 19 assets inventariados · 4 cases avaliados.

## Estado para a manhã

Ver 30-morning-executive-brief.md. Primeiras ações recomendadas: (1) executar test pack 25; (2) resolver query×page "foto profissional" no GSC; (3) decidir papel do fotosprofissionais.com.br; (4) implementar Cases ATIVA + R&Q na feature branch; (5) corrigir mismatch FAQ de /fotografo-corporativo.
