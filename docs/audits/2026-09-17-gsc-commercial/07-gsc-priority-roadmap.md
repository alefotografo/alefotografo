# 07 — Roadmap de prioridades (GSC) — NÃO IMPLEMENTAR sem revisão

Data: 17/09/2026 · Base: GSC últimos 3 meses (05-26 → 08-25) · Tudo aqui é proposta de trabalho para revisão do Alexandre/ChatGPT — **nenhuma alteração de página foi feita**.

## P0 — Erro/problema técnico
Nenhum erro técnico novo detectado nos dados (canonical/host/sitemap saudáveis). Único item técnico: **convergência de índice** — `/loja*` (4.048 impr) e `/videos-para-empresas/*` (~15k impr) ainda recebem impressões; redirects 301 já estão ativos; ação = aguardar recrawl e monitorar (não otimizar URL velha).

## P1 — Grandes oportunidades comerciais (posição 4–15)

1. **Cluster foto-profissional → /foto-profissional** (133 queries, 95.445 impr, pos média 4.1)
   - "foto profissional" 16.926 impr pos 3.24 CTR 0.16% → empurrar para top 3 (title/CTR) — ganho estimado é o maior do site
   - "fotos profissionais" 16.771 impr pos 7.1 CTR 0.1%
   - "retratos profissionais para negócios" 894 impr pos 9.46 **CTR 0%**
   - "fotografia profissional" 1.105 impr pos 13.55
   - CTR dos pares "sem foto de perfil"/"perfil sem foto" (23.881 impr combinadas, pos 1.1–1.3, CTR 0.05–0.08%) — intenção está no blog; manter como funil editorial
2. **LinkedIn → /foto-profissional-para-linkedin** (23 queries, 5.942 impr, pos 4.7): CTR saudável (0.5–3.3%) — otimizar "capa linkedin"/"dimensões capa linkedin" (596 impr pos ~10) com conteúdo; avaliar par PROVÁVEL com /fotografo-corporativo/categoria/foto-para-linkedin (05)
3. **Advocacia → /fotografia-para-advogados + Case Rocha & Queiroz** (12 queries, 3.240 impr, pos 5.8): "rocha e queiroz advogados" 1.734 impr pos 9.45 — Case aqui captura demanda navegacional existente
4. **Eventos** (19 queries, 1.352 impr, pos 9.2): "fotografia de eventos" 452 impr pos 14.3; "fotografo de eventos" pos 16–21 — páginas /eventos-corporativos e nicho precisam de reforço (ver sobreposição interna em 05)
5. **Retrato executivo → /fotografia-executiva** (pos média 18.5!): "fotografia de retrato corporativo" 1.003 impr pos 22.8; "retrato corporativo" 952 impr pos 25.64 — **pior posição entre clusters comerciais com volume**; ação CONTENT (a página /fotografo-corporativo/retrato-corporativo está pos 5.33 — avaliar consolidação de sinais entre as duas URLs, sem mudar slug)
6. **Totem/foto na hora** (5 queries, 927 impr, pos 7.3): "foto impressa" 535 impr pos 9.75 CTR 0%
7. **Gastronomia** (15 queries, 16.179 impr, pos 3.2): forte e saudável — manter; é o 2º cluster em impressões entre comerciais
8. **Logística → Case ATIVA + /fotografia-de-logistica** (pos 11.22 na money page; navegacional ATIVA ~1.000 impr/mês) — ver 06

## P2 — Fortalecimento / internal links / Cases
- **Blog → money (04):** 30 posts mapeados com 0–3 links contextuais sugeridos. Posts de retrato (5-poses 807 clicks/162k impr, plano-de-fundo 302/72k, linguagem-corporal 322/35k, dress-code 255/30k) → /foto-profissional, /fotografia-executiva. Post aplicativos-de-vídeo (1.561 clicks/405k impr) → 1 link contextual /videos.
- **Fragmentação saúde (CONFIRMADA em 05):** 4 URLs comerciais ativas para mesma intenção-família — decidir hub (recomendado: manter ensaios por sub-nicho com canonical interno de links, não consolidar slug agora).
- **Cases ATIVA + Advocacia** (ordem definida em 06).
- **fotografo-generico** ("fotografo" 4.284 impr pos 9.4; "fotografo sao paulo" pos 21.27): home já é o destino (H1 LOCK); reforçar via internal links e autoridade, sem tocar H1.

## P3 — Monitoramento
- INFORMATIVA (404 queries, 140k+ impr em edicao-apps): alto tráfego de apps/editores — não é dinheiro; manter como autoridade e funil leve
- BRANDED web (1 query): navegação de marca vai por GBP/local pack — monitorar
- IRRELEVANTE (19): nada a fazer
- /loja e /videos-para-empresas: convergência de índice

## Ordem recomendada de execução (quando autorizado)
1. Title/meta/CTR de /foto-profissional (maior ganho isolado)
2. Case ATIVA + ajustes em /fotografia-de-logistica
3. Case Advocacia (Rocha & Queiroz) + /fotografia-para-advogados
4. Conteúdo /fotografia-executiva (pos 18–26)
5. Internal links blog→money (lote único, 1–3 links por post)
6. Decisão de fragmentação saúde
7. Eventos/totem reforço
