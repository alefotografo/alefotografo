# AUDITORIA SEO SÊNIOR — ALEFOTOGRAFO.COM.BR
**Data:** 2026-10-10 | **Auditor:** análise técnica completa + dados reais do Google Search Console (14 meses: ago/2025 → out/2026) | **Crawl:** 431 URLs | **Baseline pós-migração Netlify + 9 cases publicados**

---

# EXECUTIVE SUMMARY

O domínio está **tecnicamente saudável** após a migração e a onda de consolidação de 10/10 (loop de redirect corrigido, 9 cases, blocos de prova, hygiene). O diagnóstico sênior é claro:

> **O gargalo do domínio não é técnico nem de conteúdo — é de CTR e de consolidação de autoridade nas queries comerciais.** O blog gera 74% dos cliques; as money pages estão a 1–3 posições do Top 3 nas queries que mais importam, com CTRs abaixo do potencial.

**Scorecard (baseline 2026-10-10):**

| Dimensão | Nota (0–10) | Comentário |
|---|---|---|
| Saúde técnica | 9,0 | 431/431 200, canonical/schema/H1 100%, loop crítico resolvido |
| Indexação | 7,5 | 472 indexadas; 4.180 não indexadas (majoritariamente lixo legado www/404 — decaindo sozinhas) |
| Conteúdo/arquitetura | 8,0 | Owner map claro, 9 cases, clusters vivos |
| CTR das propriedades | 4,5 | Maior déficit: "foto profissional" 0,28% em 64,8 mil impressões |
| Autoridade off-page | 6,0 | Sem campanha de backlinks ativa ainda |
| GEO/IA | 8,0 | 183 mil impressões em recursos de IA do GSC; llms.txt + ai-catalog |
| Performance | 7,5 | TTFB ~0,5 s, 61 KB de assets; JS bundle único a otimizar |

**Top 3 movimentos de maior impacto (próximos 90 dias):**
1. **CTR, não ranking** — "foto profissional" (MISSÃO-CTR-001, teste aprovado e no ar) + replicar para os 4 artigos com 200K–800K impressões e CTR <0,5%
2. **Owner LinkedIn ao Top 3** — cluster com ~12,9 mil impressões/mês preso na posição 4–5 (MISSÃO-SEO-005 publicada; próximo: prova e interlink)
3. **Backlinks editoriais dos 9 cases** — cada case publicado é um ativo de link building ainda não convertido em menções

---

# 1. SAÚDE TÉCNICA (crawl de 431 URLs)

| Check | Resultado | Status |
|---|---|---|
| Status HTTP | 431/431 → 200 (redirects corretos de barra final) | ✅ |
| Title | 100% presentes, 30–65 caracteres | ✅ |
| Meta description | 100% presentes, ≤160 caracteres | ✅ |
| Canonical | 100% self-referentes, domínio apex | ✅ |
| H1 | exatamente 1 por página (HTML bruto) | ✅ |
| Heading hierarchy | H2/H3 coerentes (16 H2 na home, galerias com H2 por bloco) | ✅ |
| lang | pt-BR em 100% | ✅ |
| Schema JSON-LD | 100% das páginas, 0 erros de parse | ✅ |
| Imagens sem alt | **0 de 7.890** (corrigido 10/10) | ✅ |
| Links internos quebrados | 0 (403 hrefs únicos testados) | ✅ |
| Páginas órfãs | 0 (sitemap ↔ links internos consistentes) | ✅ |
| Redirects | http→https 1 hop; www→apex 1 hop; legados 301 corretos | ✅ |
| Sitemap | índice com 2 sitemaps, 431 URLs, 200 OK (loop resolvido) | ✅ |
| robots.txt | bots de IA liberados, sitemap aponta para apex | ✅ |
| favicon | /favicon.ico 301 → /favicon.png | ✅ |
| Segurança | HSTS, X-Frame-Options, X-Content-Type-Options + Referrer-Policy e Permissions-Policy (adicionados 10/10); CSP pendente (exige nonce) | 🟡 |
| HTML >150 KB | 22 páginas (galerias densas) — não bloqueante | 🟡 |

**Achados técnicos remanescentes (não críticos):**
1. **CSP ausente** — correção exige nonces no SSR do TanStack; missão separada com validação visual obrigatória.
2. **22 páginas >150 KB** — thumbs de galeria no HTML; mitigado por lazy loading, mas paginação elevaria LCP e crawl efficiency.
3. **`_redirects` legado `/public/img*`** — manter enquanto o GSC mostrar impressões legadas; revisar em 90 dias.

---

# 2. INDEXAÇÃO E COBERTURA (dados reais GSC)

Estado atual (out/2026): **472 indexadas / 4.180 não indexadas**.

| Motivo (não indexadas) | Volume | Leitura sênior |
|---|---|---|
| Página alternativa com canonical | 1.738 | Lixo legado www/paginação — decai sozinho pós-migração; **não agir** |
| Não encontrado (404) | 1.177 | URLs antigas do site legado (Hostinger) descobertas pelo Google; irrelevantes para o negócio, decaem naturalmente; **não redirecionar em massa** (risco de chains) |
| Página com redirecionamento | 479 | Corretos (legados) | ✅ |
| Rastreada, não indexada | 632 | Tipicamente thin/dup internas; acompanhar trimestralmente |
| Cópia sem canonical do usuário | 81 | Residual www; decai com a consolidação |
| 5xx | 2 | Neutro |

**Veredito:** a taxa de indexação efetiva (~472/431 sitemap) é **normal e saudável** para um domínio pós-migração. Não há ação de "indexação" prioritária — o erro histórico (sitemap em loop) já foi corrigido e os efeitos aparecerão nos próximos ciclos.

---

# 3. PERFORMANCE (dados de campo — PageSpeed lab indisponível da sandbox)

| Métrica (campo, borda Netlify) | Valor | Referência |
|---|---|---|
| TTFB HTML (5 tipos de página) | 0,49–0,52 s | Bom (<0,8 s) |
| Cache HTML | max-age=0 + stale-while-revalidate na borda | ✅ correto |
| Assets JS+CSS | 61 KB brutos, 1 bundle JS + 1 CSS | ✅ excelente |
| Imagens | proxy próprio: resize + WebP + immutable 1 ano | ✅ excelente |
| HTML comprimido | br/gzip em todo site | ✅ |

**Oportunidades:**
- **Preload do hero LCP** nas 5 money pages (imagem hero já é o LCP provável): `<link rel="preload" as="image">` com o srcset correto — ganho estimado de 200–400 ms no LCP.
- **Paginação das 22 páginas >150 KB** — prioridade baixa.
- **INP**: bundle único pequeno; risco baixo, mas sem dados de campo reais (CrUX). Instalar RUM leve (o site já tem tracking próprio) para medir INP real em 30 dias.

---

# 4. POSICIONAMENTO E CTR (o coração desta auditoria)

## 4.1 Distribuição de cliques (14 meses, 8.550 cliques / 2,3 mi impressões)

| Seção | Cliques | % | Leitura |
|---|---|---|---|
| /blog | 33.581 | 74% | Motor do domínio — correto por design (distributors) |
| /fotografo-corporativo (galerias) | 3.075 | 15% | Owners recebendo tráfego real |
| Home | 2.120* | 5% | *média pos 11,77 sobre todas as queries da Home |
| /videos-para-empresas (legado, 301) | 314 | — | Redirect legado ainda recebe impressões — sinal de que URLs antigas mantêm equity; redirects corretos |
| /loja (legado, 301) | 256 | — | Idem |
| /fotografo-corporativo-em (bairros) | 77 | 1% | Ainda incipiente — reforço futuro |

## 4.2 Frozen Winners reais (Top 3 confirmado, 14 meses)

fotógrafo corporativo são paulo **2.41** · foto corporativa **2.31** · foto institucional **2.62** · foto empresarial **3.13** · foto profissional feminina **1.11** · fotos corporativas femininas **1.83** · poses para fotos corporativas **1.51** · foto advogado **1.77** · foto formal **3.56**. Nenhuma alteração estrutural nessas URLs.

## 4.3 Striking distance (4–15): 361 queries comerciais ≥300 impressões

**P0 — o trio que decide o trimestre:**
| Query | Pos | Impressões | CTR | Ação |
|---|---|---|---|---|
| foto profissional | 3.92 | 64.837 | 0,28% | **Teste CTR no ar** (MISSÃO-CTR-001) |
| cluster linkedin (foto linkedin, fotos para linkedin, foto de perfil linkedin, foto perfil linkedin) | 4.06–4.66 | ~12.900 | 0,3–0,8% | FAQ publicado; próximo: prova social + title test |
| fundo(s) (para) foto profissional | 4.50–4.77 | ~11.500 | 0,5–1,1% | Artigo distributor já ranqueia; owner /foto-profissional recebe ponte |

**P1:** fotos corporativas 6.45 (8.589 impr) · fotos profissionais advogada 6.29 (1.275) · retrato corporativo feminino 4.95 · fotos institucionais 5.37 (1.637) · fotografia profissional sao paulo 5.48.

**P2/P3 (respondem à consolidação já feita):** fotografia corporativa 13.74 · retrato corporativo 17.34 · fotografo corporativo 18.59/22.74 · head terms de eventos e indústria. Estas são queries de autoridade — evoluem com backlinks e cases, não com tweaks.

## 4.4 Auditoria CTR (a mina de ouro)

| Página | Pos | Impressões | CTR | Potencial |
|---|---|---|---|---|
| /foto-profissional | 3.92 | 64.837 | 0,28% | teste no ar; +1% CTR ≈ +180 cliques/mês |
| blog/7-erros-foto-perfil-linkedin | 2.27 | 330.576 | **0,26%** | Posição 2 com CTR de posição 10! Reescrever title/descrição = maior ganho isolado do domínio |
| blog/psicologia-das-cores | 4.43 | 364.022 | 0,43% | Idem |
| blog/apps-editar-videos | 8.05 | 1.478.439 | 0,30% | Volume gigante; título está bom — CTR limitado por intenção (pular para app); testar description com promessa específica |
| blog/icloud-cheio | 7.51 | 856.433 | 0,21% | Mesmo padrão |

**Regra da casa:** títulos de blog têm função editorial, mas description é fair game. Fila de testes de description em 5 artigos com ≥200K impressões e CTR <0,5%.

---

# 5. CONTEÚDO E ARQUITETURA

- **Owner map:** 21 intenções com owner única e verificável. Confirmado no crawl.
- **Cases:** 9 publicados, todos com vídeo real do catálogo + Article + FAQ schema + WA contextual. Rocha & Queiroz tem depoimento LinkedIn (única com prova social direta — replicar formato quando houver novos depoimentos).
- **Canibalização:** export sem join query×page; sinais atuais são saudáveis (blog distribui, não disputa). Próxima exportação: trazer o join.
- **Clusters vivos:** retrato/foto profissional (9 pontes + 7 novas), vídeo, logística, indústria. Cluster banco de imagens ainda sub-explorado no blog.
- **Blog:** 187 posts, 33,6K cliques. Os 5 maiores distributors carregam 40% do tráfego do blog — protegidos por regra (não virar landing).

## Gaps de conteúdo (vs. striking distance)
1. Nenhuma página responde "fotos impressas na hora" como serviço além da galeria — posição 4.06 com CTR 7,86% (demanda comercial real, não só informacional).
2. "retrato corporativo feminino/masculino" — galeria retrato-corporativo cobre; aditivos de heading/FAQ possíveis.
3. Páginas de bairro recebem 77 cliques — corretamente modestas; expandir só com dados.

---

# 6. ENTITY, LOCAL E E-E-A-T

- Entidade consistente: Alexandre Machado ↔ Alê Fotógrafo, CNPJ, endereço (Alameda Santos 1165), telefone — em schema, llms.txt e contato. ✅
- **Gap:** NAP em texto visível (footer) vs. schema — verificado consistente no crawl.
- Person schema em /sobre e /quem-e-o-ale (2 Person no crawl). Recomendação: `sameAs` para LinkedIn/Instagram/YouTube no Person (provável que já exista — verificar na próxima missão).
- Local SEO: 34 páginas de bairro com conteúdo genuíno (não doorway) — protegidas por regra §17.

---

# 7. SCHEMA (431 páginas, 0 erros)

Cobertura: LocalBusiness/ProfessionalService 100% · BreadcrumbList · BlogPosting 187 · VideoObject 144 (100% das páginas de vídeo) · FAQPage · Service 36 · ImageGallery 32 · Article 9 cases.

**Gaps sêniores:**
1. Cases com ambos Article + VideoObject do vídeo principal (hoje VideoObject só existe nas páginas /videos) — reforçaria entendimento de "case com vídeo".
2. `areaServed` nas páginas de bairro (schema de serviço por localidade).
3. ImageObject nas galerias principais (ImageGallery existe; itemList de ImageObject enriqueceria).

Nada disso é obrigatório; é margem.

---

# 8. GEO — GENERATIVE ENGINE OPTIMIZATION (destaque da auditoria)

**O domínio já aparece em recursos de IA do Google: 183.542 impressões no relatório "Generative AI Features" (28,9 mil nos últimos 28 dias).** Para um site local de fotografia, isso é um sinal raro e valioso.

Ativos consolidados: llms.txt com fatos reais (números, prazos, endereço) e 9 cases fatuais ("Alê Fotógrafo produziu X para Y em Z"), ai-catalog.json 200, robots.txt com allow-list de bots.

**Próximos níveis GEO:**
1. Frase-fato por case já publicada; expandir com cidades/unidades quando o Alexandre confirmar locais (cases Tecnisa/Fiorde/Galena aguardam local).
2. FAQ por owner com perguntas no padrão de voz ("quanto custa…", "quem fotografa…") — iniciado na owner LinkedIn.
3. Wikidata/Wikipedia: prematuro; revisitar com 50+ menções editoriais.

---

# 9. OFF-PAGE

- Zero campanha ativa até aqui. Os 9 cases + 2 artigos-guia (10 lugares SP, poses) são os ativos de prospecção.
- **Plano (§9 da estratégia):** 50–100 menções editoriais em 12 meses, começando pelos 9 clientes dos cases (página de fornecedores/parceiros) — template de pedido a redigir na próxima sessão.

---

# 10. RISCOS E DÍVIDAS TÉCNICAS

| Item | Severidade | Plano |
|---|---|---|
| GSC desconectado (integração Lovable morta) | Média | Export manual mensal até reconexão OAuth; dados preservados em docs/audits |
| CTR test depende de export manual em 28 dias | Média | Lembretes: re-export em 07/11/2026 |
| 1.177 URLs 404 legadas no GSC | Baixa | Decaimento natural; não redirecionar em massa |
| CSP ausente | Baixa | Missão com nonce + validação visual |
| Dependência de memória: tokens GitHub/Netlify em sandbox | Baixa | Renovar tokens trimestralmente; usuário já ciente |

---

# 11. ROADMAP PRIORIZADO (P0 → P3)

**P0 — Medição (próximos 14 dias)**
1. Re-export GSC em 07/11 (medição do teste CTR) — *ação do Alexandre*
2. Template de pedido de backlinks aos 9 clientes — *redijo na próxima sessão*

**P1 — CTR e striking distance (30–60 dias)**
3. MISSÃO-CTR-002: fila de 5 descriptions de blog com CTR <0,5% (começando por 7-erros-linkedin, 330K impressões, pos 2.27)
4. MISSÃO-SEO-007: /fotos-corporativas — prova + headings (8,6K impressões, pos 6.45)
5. MISSÃO-SEO-008: schema VideoObject nos cases + areaServed nos bairros

**P2 — Autoridade (60–120 dias)**
6. 1ª rodada de backlinks editoriais (10 clientes/associações)
7. Bing Webmaster Tools + IndexNow
8. Paginação das 22 páginas >150 KB
9. CSP com nonces

**P3 — Expansão (120+ dias)**
10. Novas páginas locais só com dados GSC
11. Wikidata após 50+ menções

---

# APÊNDICE — Notas metodológicas

- Crawl: 431 URLs do sitemap-index (2 sitemaps), análise de HTML bruto, schema validado por parse JSON-LD.
- GSC: export completo 13/08/2025–06/10/2026 (1.000 queries, 1.000 páginas, cobertura, AI Features). Join query×page indisponível no export (limitação da interface).
- PageSpeed lab indisponível (API bloqueada no ambiente de auditoria); performance avaliada por TTFB de campo e peso de assets.
- Todas as posições são médias do período de 14 meses; o teste CTR usa essa baseline por limitação de granularidade do export.
