# OPERAÇÃO TOP 3 — Auditoria Estratégica | alefotografo.com.br
## Entrega 1 (sem alterações de código, conforme §46/§50 do prompt)

Data: 2026-10-10 | Base: 426 URLs crawladas, catálogo real (187 posts, 72 vídeos, 33 galerias, 34 páginas de bairro, 4 cases publicados)

---

# 0. MODO TRUTH — LIMITAÇÃO DE DADOS (ler primeiro)

**O Search Console está desconectado.** A integração antiga usava o connector da Lovable (`LOVABLE_API_KEY` + `GOOGLE_SEARCH_CONSOLE_API_KEY`), e essas chaves não existem mais no projeto desde a migração para o Netlify. Sem isso, **posições, impressões, cliques e CTR reais não puderam ser extraídos**.

Consequência honesta:
- A **Keyword Master Matrix** abaixo está completa em estrutura (keyword → intenção → URL owner real), mas todas as colunas de posição/impressão/CTR estão marcadas **PENDENTE GSC**.
- **Frozen Winners** e **Striking Distance** estão definidos por estrutura + evidência indireta (site já ranqueia, histórico do projeto), **não por dados de posição**.
- Nenhuma métrica foi inventada (regra §7).

**Desbloqueio (uma das opções, ação do Alexandre):**
1. Reconectar o Search Console: criar projeto Google Cloud OAuth próprio do domínio e me passar o refresh token (guia passo a passo posso gerar); **ou**
2. Exportar do GSC (Desempenho → 16 meses → exportar CSV de Consultas × Páginas) e me enviar o arquivo — populo a matriz em uma sessão.

Enquanto o GSC não volta, a execução segue pelo que é verificável no próprio site: estrutura, canibalização potencial, interlinking, cases, GEO e os achados da auditoria técnica de 10/10/2026.

---

# 1. KEYWORD MASTER MATRIX

Legenda posição: **PG** = PENDENTE GSC. Prioridade assume que as páginas já existem e indexam (confirmado: 426/426 200, canonical self, schema ok).

## TIER A — comerciais nucleares (São Paulo)

| # | Keyword | Intenção | Funil | URL owner (real) | Posição | Impr. | CTR | Prioridade | Ação |
|---|---|---|---|---|---|---|---|---|---|
| A1 | fotógrafo corporativo são paulo | contratar | transacional | `/` (Home) | PG | PG | PG | P0 | FROZEN — proteger; reforçar prova e cases |
| A2 | fotografia corporativa são paulo | contratar | transacional | `/fotografo-corporativo/fotografia-corporativa-em-sao-paulo` | PG | PG | PG | P0 | striking distance provável — prova + cases |
| A3 | fotógrafo profissional são paulo | contratar | transacional | `/fotografo-corporativo/fotografo-profissional-em-sao-paulo` | PG | PG | PG | P0 | reforçar interlink do hub |
| A4 | foto profissional são paulo | contratar | transacional | `/foto-profissional` | PG | PG | PG | P0 | FROZEN provável — title já forte |
| A5 | fotos corporativas são paulo | contratar | transacional | `/fotos-corporativas` | PG | PG | PG | P0 | CTA WhatsApp + casos |
| A6 | retrato corporativo são paulo | contratar | transacional | `/fotografo-corporativo/retrato-corporativo` | PG | PG | PG | P0 | cluster retrato (§14) |
| A7 | retrato executivo são paulo | contratar | transacional | `/fotografia-executiva` | PG | PG | PG | P1 | prova de diretoria/C-level |
| A8 | fotografia executiva são paulo | contratar | transacional | `/fotografia-executiva` | PG | PG | PG | P1 | mesma owner de A7 |
| A9 | fotógrafo para empresas são paulo | contratar | transacional | `/fotografo-empresarial` | PG | PG | PG | P1 | caso ATIVA/SQ como prova |
| A10 | fotógrafo empresarial são paulo | contratar | transacional | `/fotografo-empresarial` | PG | PG | PG | P1 | sinônimo de A9 — mesma owner |
| A11 | fotografia empresarial são paulo | contratar | transacional | `/fotografo-empresarial` | PG | PG | PG | P1 | heading/FAQ cobre variação |
| A12 | fotógrafo de eventos corporativos são paulo | contratar | transacional | `/fotografo-corporativo/fotografo-de-eventos-corporativos` | PG | PG | PG | P0 | owner; `/eventos-corporativos` apoia |
| A13 | fotografia de eventos corporativos são paulo | contratar | transacional | `/fotografo-corporativo/fotografo-de-eventos-corporativos` | PG | PG | PG | P0 | mesma owner de A12 |
| A14 | foto profissional para linkedin são paulo | contratar | transacional | `/foto-profissional-para-linkedin` | PG | PG | PG | P1 | blog LinkedIn → owner |

## TIER B — verticais (owner pages existentes, confirmadas no crawl)

| Vertical | Keywords (variantes) | URL owner | Status owner |
|---|---|---|---|
| Logística | fotógrafo logística, fotografia para transportadora, fotografia de centro de distribuição, fotografia de frota | `/fotografo-corporativo/fotografia-de-logistica` | existe — case ATIVA pronto p/ reforçar |
| Advocacia | fotógrafo para advogados, fotografia para escritório de advocacia, retrato para advogado | `/fotografo-corporativo/fotografia-para-escritorios-de-advocacia` + `/fotografia-para-advogados` | 2 páginas — ver canibalização §5 |
| Indústria | fotógrafo industrial, fotografia industrial, fotografia de fábrica | `/fotografo-corporativo/fotografia-industrial-em-sp` | existe — case SQ pronto p/ reforçar |
| Saúde | fotógrafo para médicos, fotógrafo para clínica, retrato médico | `/fotos-profissionais-medicos` (own) + galerias médicos/médicas/clínicas | 4 páginas — ver §5 |
| Eventos | fotógrafo para congresso, convenção, palestra, confraternização empresarial | `/fotografo-corporativo/fotografo-de-eventos-corporativos` + galeria festa-de-confraternizacao | existe — case ABRADILAN reforça |
| Feiras | fotógrafo de feiras, fotografia de stand, fotógrafo para feira empresarial | `/fotografo-corporativo/fotografo-feiras-stands` + `/fotografo-de-feira-de-negocios` | 2 páginas — ver §5 |
| Executivos | retrato executivo, foto de CEO, fotografia de diretoria | `/fotografia-executiva` + `/fotografo-corporativo/retrato-corporativo` | existe |
| Banco de imagens | banco de imagens corporativo, fotos para site empresarial | `/fotografo-corporativo/banco-de-imagens-para-empresas` | existe |
| Drone | fotos aéreas com drone, fotografia aérea empresarial | `/fotografo-corporativo/fotos-aereas` | existe |
| Vídeo | vídeo institucional, vídeo corporativo são paulo | `/video-institucional`, `/videos` (hub 145 pádeos) | existe |

## Matriz viva

Arquivo-fonte desta matriz: `docs/audits/estrategia-top3-2026-10-10.md` (esta seção é atualizada a cada ciclo de 28 dias). Colunas de posição serão preenchidas quando o GSC retornar (ver §0). Regra §47: TOP 3 ACHIEVED só com posição média ≤3 em período estatisticamente relevante.

---

# 2. OWNER MAP (one query intent → one owner)

| Intenção | OWNER | Supporting (não disputam) |
|---|---|---|
| fotógrafo corporativo SP | `/` Home | sobre, quem-e-o-ale, portfolio, depoimentos |
| fotografia corporativa SP | `/fotografo-corporativo/fotografia-corporativa-em-sao-paulo` | blog editorial, galerias |
| fotógrafo profissional SP | `/fotografo-corporativo/fotografo-profissional-em-sao-paulo` | `/servicos` (hub) |
| foto profissional SP | `/foto-profissional` | blog LinkedIn, `/foto-profissional-para-linkedin` |
| fotos corporativas SP | `/fotos-corporativas` | galeria grupos-times |
| retrato corporativo SP | `/fotografo-corporativo/retrato-corporativo` | ensaio-feminino, retratos-de-medicos/medicas |
| retrato/fotografia executiva | `/fotografia-executiva` | posts sobre poses/roupa |
| fotógrafo para empresas | `/fotografo-empresarial` | cases ATIVA/SQ |
| eventos corporativos (foto) | `/fotografo-corporativo/fotografo-de-eventos-corporativos` | `/eventos-corporativos` (página própria), galeria confraternização, case ABRADILAN |
| eventos corporativos (vídeo) | `/video-de-eventos-corporativos` | hub /videos |
| feiras/stands (foto) | `/fotografo-corporativo/fotografo-feiras-stands` | `/fotografo-de-feira-de-negocios`, case SQ |
| feiras/stands (vídeo) | `/video-para-feiras-e-stands` | case SQ |
| vídeo institucional | `/video-institucional` | hub /videos |
| logística | `/fotografo-corporativo/fotografia-de-logistica` | case ATIVA |
| advocacia | `/fotografia-para-advogados` | galeria escritórios-advocacia |
| indústria | `/fotografo-corporativo/fotografia-industrial-em-sp` | case SQ |
| saúde/médicos | `/fotos-profissionais-medicos` | galerias médicos/médicas/clínicas, `/fotografia-para-clinicas` |
| banco de imagens | `/fotografo-corporativo/banco-de-imagens-para-empresas` | galeria escolas |
| drone | `/fotografo-corporativo/fotos-aereas` | — |
| localidade (bairros) | `/fotografo-corporativo-em/{bairro}` (34 páginas) | reforçam owners com link de volta |

---

# 3. FROZEN WINNERS (proteger — sem alteração estrutural)

| URL | Query protegida | Evidência disponível | Restrição |
|---|---|---|---|
| `/` Home | fotógrafo corporativo são paulo | histórico do projeto: desempenho próximo do Top 3; title/H1 já otimizados e **travados** | Não alterar title, H1, URL, canonical, estrutura sem evidência de ganho > risco (revalidar com GSC) |
| `/foto-profissional` | foto profissional são paulo | title forte, owner consolidada | Idem |
| `/fotografo-corporativo/fotografia-corporativa-em-sao-paulo` | fotografia corporativa são paulo | owner consolidada | Idem |
| `/fotografo-corporativo/retrato-corporativo` | retrato corporativo são paulo | owner consolidada | Idem |
| `/contato` | (conversão) | contém anotações WebMCP — alterar com cuidado | Só aditivo |

**Nota Red Team:** os dois cases publicados em 10/10 (SQ Química, ABRADILAN) já reforçam owners sem tocar em nenhuma URL Frozen — padrão a manter.

---

# 4. STRIKING DISTANCE (4–15)

**Bloqueado sem GSC** (ver §0). Estrutura pronta para receber dados:

| Keyword | URL | Posição | Faixa |
|---|---|---|---|
| (preencher com export GSC: queries posição 4–7 → P0 / 8–15 → P1 / 16–30 → P2 / 31+ → P3) | | | |

Hipóteses de striking distance a validar (base: páginas completas, com schema, mas com concorrência alta em SP): A2 fotografia corporativa, A12/A13 eventos corporativos, vertical logística (poucos players dedicados), banco de imagens corporativo. **Só serão promovidas a P0 após confirmação de posição 4–15 no GSC.**

---

# 5. CANIBALIZAÇÃO MAP

Análise estrutural (QUERY × PAGE real só com GSC; abaixo = risco potencial identificado por sobreposição de intenção/título):

| Caso | Páginas | Risco | Veredito |
|---|---|---|---|
| Advocacia | `/fotografia-para-advogados` × `/fotografo-corporativo/fotografia-para-escritorios-de-advocacia` | MODERADO | Manter as duas: a primeira é segmento (médicos-advogados hub), a segunda é galeria comercial. **Ação:** interlink unidirecional galeria→segmento com anchors distintas; validar no GSC qual recebe impressões para "advogado" |
| Feiras | `/fotografo-corporativo/fotografo-feiras-stands` × `/fotografo-de-feira-de-negocios` | MODERADO | Mesma lógica. "feira de negócios" é intenção própria — manter; galeria linka para a página comercial |
| Eventos | galeria `/fotografo-de-eventos-corporativos` × página `/eventos-corporativos` | LEVE | `/eventos-corporativos` é OWN_ROUTE intencional (fotos de pessoas em eventos); já há alias 301 do slug antigo |
| Saúde | `/fotos-profissionais-medicos` × galerias médicos/médicas/clínicas × `/fotografia-para-clinicas` | LEVE | Intenções distintas (médico pessoa × clínica ambiente); manter, interlink em estrela na owner médicos |
| Retrato | `/fotografo-corporativo/retrato-corporativo` × `/fotografo-corporativo/fotografo-de-retratos-corporativos` | LEVE | GSC dirá; se competirem, 301 da segunda (menos tráfego) — **aguardar dados** |
| Bairros | 34 páginas `/fotografo-corporativo-em/*` | LEVE | Conteúdo genuíno por bairro (regra §17 — não são doorway); reforçam owners |

Nenhuma consolidação por redirect será feita sem dados de impressões cruzadas (regra §11).

---

# 6. TOP 20 OPORTUNIDADES (impacto comercial × viabilidade)

1. **Reconectar Search Console** (§0) — desbloqueia striking distance real. [P0]
2. **Loop de redirect do sitemap/llms — CORRIGIDO em 10/10** (commit 1b19aeb). Googlebot volta a ler sitemap. [P0 ✅]
3. **Dedup de vídeos no sitemap principal** — consolidar sinais no video sitemap. [P1]
4. **Cases PARTIAL → READY** (Tecnisa, Nitriflex, Fiorde, Germed, Galena — docs de readiness prontos; faltam respostas do Alexandre). [P1]
5. **Alt text nas 50 imagens sem alt** (44 em /servicos). [P1]
6. **Headers de segurança** (CSP, Referrer-Policy, Permissions-Policy). [P2]
7. **Paginar galerias das 22 páginas >150 KB**. [P2]
8. **Blocos de prova (cases) nas money pages de logística e indústria** — cases ATIVA/SQ já linkados; elevar para seção de prova com foto. [P1]
9. **PREFERRED_HOST em `src/lib/gsc.server.ts` ainda aponta para www** — corrigir para apex (ficou órfão da migração). [P0 — microfix]
10. **Interlinking blog→owner para A14 LinkedIn** e artigos de poses/roupa→retrato. [P1]
11. **Case roadmap 10–20 cases** (§8). [P1]
12. **Bing Webmaster Tools**: validar domínio, enviar sitemap, IndexNow. [P2]
13. **Backlinks editoriais** (§9). [P1]
14. **CTR audit de owners posição 1–5** quando GSC voltar (§18). [P1]
15. **GEO: fatos extraíveis por case** ("Alê Fotógrafo realizou produção para X em Y incluindo Z") — já iniciado nos cases novos; expandir. [P1]
16. **Video sitemap: incluir páginas de vídeo-foto duplas** (145 páginas /videos com VideoObject 100%). [P2]
17. **Performance: preload de hero LCP** nas money pages. [P2]
18. **Hreflang** — não aplicável (pt-BR único; verificado no crawl). [—]
19. **Páginas locais ABC/Alphaville** — só criar quando GSC mostrar demanda (§17). [P3]
20. **alefotografos.com.br / videoscorporativos.com.br** — decisão de arquitetura (§34): manter como satélites com intenção distinta, sem duplicar conteúdo. [P3]

---

# 7. TOP 20 PÁGINAS PRIORITÁRIAS

1. `/` (Frozen) — 2. `/fotografo-corporativo/fotografia-corporativa-em-sao-paulo` — 3. `/foto-profissional` (Frozen) — 4. `/fotografo-corporativo/retrato-corporativo` (Frozen) — 5. `/fotos-corporativas` — 6. `/fotografo-corporativo/fotografo-de-eventos-corporativos` — 7. `/fotografo-corporativo/fotografia-de-logistica` — 8. `/fotografo-corporativo/fotografia-industrial-em-sp` — 9. `/fotografia-executiva` — 10. `/fotografo-empresarial` — 11. `/fotografo-corporativo/fotografo-feiras-stands` — 12. `/fotografia-para-advogados` — 13. `/fotos-profissionais-medicos` — 14. `/fotografo-corporativo/banco-de-imagens-para-empresas` — 15. `/foto-profissional-para-linkedin` — 16. `/video-institucional` — 17. `/cases` (hub) + 4 cases — 18. `/fotografo-corporativo/fotografia-para-escritorios-de-advocacia` — 19. `/eventos-corporativos` — 20. `/contato` (conversão).

---

# 8. CASE ROADMAP (10–20 cases, sem inventar nada)

**Publicados (10/10):** SQ Química (indústria/feiras), ABRADILAN (associação/eventos).
**Prontos p/ subir quando o Alexandre responder** (docs em `docs/cases-readiness/`): Tecnisa, Nitriflex, Fiorde Logística, Germed, Galena.
**Backlog a mapear com o Alexandre** (marcas com material comprovado no acervo — validar existência de fotos/vídeos + permissão): FlexFunds (vídeo institucional no catálogo), Unipac (vídeo "50 anos"), Genesis/IA na Hospitalar, G-TECH Conexão Farma, Procooler FEBRAVA, Rocha & Queiroz (já tem depoimento LinkedIn de Vanessa Cantieri — case de maior prova social do domínio).

Formato por case (§15): empresa/segmento/local/contexto/objetivo/serviço/produção/fotos/vídeos/galeria/serviços relacionados/CTA + relações ALÊ↔CLIENTE↔SERVIÇO↔SEGMENTO↔LOCAL.

---

# 9. BACKLINK ROADMAP (50–100 editoriais, orgânico)

1. **Clientes atendidos** — pedido padrão (template posso redigir): "página de parceiros/fornecedores" linkando o case. Alvos diretos: ATIVA, SQ Química, ABRADILAN, Rocha & Queiroz, Germed.
2. **Associações/entidades** (ABRADILAN é associação — portas abertas para fornecedores).
3. **Feiras/congressos** — páginas de fornecedores oficiais (FCE Pharma, ABRAFATI, Beauty Fair, Febrava).
4. **Portais de fotografia/negócios** — guest posts com cases reais.
5. **Universidades/eventos corporativos** onde há cobertura recorrente.
6. **Nunca**: compra de links, PBN, diretórios irrelevantes (§27).

---

# 10. PLANO 30 / 60 / 90 / 180 DIAS

## 30 dias (consolidação + desbloqueio)
- Reconectar GSC (§0) — **ação crítica do Alexandre**
- Microfix PREFERRED_HOST → apex
- Dedup sitemap vídeos + alt texts + headers de segurança
- Respostas do Alexandre → publicar 2–3 cases READY
- Bing Webmaster Tools + IndexNow
- **Entrega:** Keyword Matrix populada, Striking Distance real, Frozen Winners validados

## 60 dias (ataque 4–15)
- Missões de striking distance por vertical (logística, indústria, eventos, retrato)
- Blocos de prova nas 10 money pages principais
- Interlinking blog→owners (10 artigos maiores distribuidores)
- 1ª rodada de pedidos de backlinks editoriais (10 clientes)
- CTR audit das owners posição 1–5

## 90 dias (expansão controlada)
- Meta operacional: 70% Tier A no Top 5 **quando os dados de posição permitirem medição**
- Total de cases: 8–12 publicados
- 20–30 menções editoriais acumuladas
- Decisão sobre páginas locais ABC/Alphaville baseada em dados
- GEO: facts audit em llms.txt + ai-catalog (ampliar com novos cases)

## 180 dias (autoridade)
- Meta operacional: 70% Tier A no Top 3
- 10–20 cases fortes publicados
- 50–100 menções editoriais
- Scorecard mensal (§36) rodando: Top 3 / Top 5 / Top 10 / striking distance / impressões / cliques / CTR / conversões / cases / backlinks

---

# 11. MISSÕES (formato §49)

## MISSÃO-SEO-001 — Observabilidade de busca
- **Objetivo:** dados reais de posição entrando no ciclo.
- **Problema:** GSC desconectado; sitemap inacessível até 10/10.
- **Dados:** auditoria técnica 10/10 (sitemap loop, corrigido).
- **Arquivos:** `src/lib/gsc.server.ts` (PREFERRED_HOST), Netlify env vars, docs de auditoria.
- **Permitido:** trocar PREFERRED_HOST para apex; configurar GSC OAuth próprio; cadastrar sitemap no GSC/Bing.
- **Proibido:** alterar qualquer página Frozen.
- **Validação:** sitemap 200 no GSC; primeiro export de queries.
- **Rollback:** reverter env vars.
- **Concluído quando:** matriz com posições reais preenchida.

## MISSÃO-SEO-002 — Sitemap e hygiene técnica
- **Objetivo:** consolidar sinais de indexação.
- **Alterações:** dedup vídeos do sitemap.xml (manter sitemap-videos.xml), alt texts (50), CSP/Referrer-Policy/Permissions-Policy.
- **Validação:** crawl 426/426 200, Search Console sem erros de sitemap.
- **Risco:** baixo (arquivos não-Frozen).

## MISSÃO-SEO-003 — Cases READY
- **Objetivo:** 2–3 cases novos publicados.
- **Dependência:** respostas do Alexandre nos docs `docs/cases-readiness/*.md`.
- **Proibido:** inventar resultado/ROI/números.

## MISSÃO-SEO-004 — Striking Distance (só após MISSÃO-SEO-001)
- Seleção de 5–8 queries posição 4–15; uma missão por query; formato completo §41.

*(Demais missões abrem conforme dados chegam — regra §49/§50: poucas de cada vez.)*
