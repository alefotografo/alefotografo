# 20 — Recomendações finais

Data: 16/09/2026 · Todas as recomendações aqui exigem aprovação do proprietário antes de execução.

## UX técnica e Performance (HEADLESS TECHNICAL CHECK — 16/09/2026)

Método: Chrome headless CDP, 8 páginas × 6 viewports (320–1366px). **Isso não é aprovação de UX real** — aceitação em telefone físico continua pendente.

- **Overflow horizontal real: ZERO** nos 5 domínios em todos os viewports (fotografoale tem elemento interno 495px clipado por `overflow-x:hidden` — sem scroll real, mas tecnicamente sujo).
- **CTA acima da dobra:** ausente ≤430px no fotografoale.com.br e em TODOS os viewports do fotodeperfilprofissional.com.br (reforça decisão de migração).
- **Nav/header:** presente em todos; fotodeperfil usa Elementor (header detectado por probe dedicado).
- **Console:** 1 hydration mismatch (React #418) na home do ales — não fatal, registrar.
- **Lighthouse mobile (lab, não CrUX):**

| Site | Perf | A11y | BP | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| alefotografo.com.br | 81 | 100 | 100 | 100 | 4,15s | 0 | 2ms |
| videoscorporativos.com.br | 69 | 97 | 100 | 100 | 4,81s | 0 | 29ms |
| alefotografos.com.br | 77 | 91 | 93 | 100 | 5,02s | **0,119** | 2ms |

- Ações futuras: investigar LCP alto nos 3 (hero/thumb acima da dobra); corrigir CLS 0,119 do ales (limiar 0,1); nunca tratar esses números como Core Web Vitals de campo.

## Recomendações ordenadas

1. **Semana 1 (P0):** corrigir "Desde 1995" no footer do ales; remover telefone pessoal da página de vídeo do ales; corrigir telefone 99483-8127 no fotodeperfil; trocar 302→301 (www→apex) em ales e VC.
2. **Obter GSC/GA4/Bing dos 5 domínios** — destrava todos os gates (migração, baseline real, backlinks).
3. **AleFotógrafos F1:** llms.txt/title/footer com papel "equipe/escala" sob autoria de Alexandre — parar a apresentação como marca pessoal duplicada.
4. **Cases:** hub /portfolio/cases + Case ATIVA primeiro (material mais completo); briefings pendentes de Alfa Silk e Dra. Luciana.
5. **Vídeo:** reformular /videos do Ale para produção integrada (não competir com VC); crosslink contextual Ale↔VC.
6. **Legados:** executar plano de migração (05/19) APÓS gate GSC/backlinks; capturar galerias nomeadas antes dos 301.
7. **IndexNow** nos 3 ativos quando autorizado (começando pelo VC).
8. **Conteúdo:** landing headshot; avaliar página fotografia de produtos; consolidar intenção médicos/advogados no dono correto.
9. **Medição:** reexecutar benchmark de IA (30 prompts fixos) em +30d; comparar SERP amostral; ativar scorecard (Google/Bing/GA4/AI/backlinks).
10. **Não fazer ainda (ver 00-EXECUTIVE-SUMMARY.md seção 8):** nenhum 301 em legado sem GSC; nenhum desligamento de domínio; nenhuma mudança de DNS/Cloudflare/Lovable sem ordem explícita.

## Métricas futuras (framework)

- **GOOGLE:** clicks, impressions, CTR, position (GSC).
- **BING:** clicks, impressions, CTR, position + AI Citations/Average Cited Pages/Grounding Queries (Bing WMT AI Performance).
- **GA4:** organic sessions, engaged sessions, conversions (WhatsApp/contato/orçamento), AI referrals (chatgpt.com, perplexity.ai, claude.ai, copilot...).
- **AI:** Mention Share, Citation Share, Correct Page Rate, Entity Accuracy (30 prompts fixos: 27 non-branded + 3 branded).
- **BACKLINKS:** referring domains, new/lost, dofollow, top pages (mesma ferramenta sempre; não misturar métricas de fornecedores).
- **PERF:** CrUX/field quando houver dados; Lighthouse só como lab.

## Apêndice — AI Benchmark: metodologia e conjunto fixo de 30 prompts (Parte 33 da missão)

**Status das plataformas nesta missão:** ChatGPT/Claude/Perplexity/Gemini/Grok/Copilot — PENDENTE, SEM ACESSO AUTENTICADO NESTE AMBIENTE. Nenhuma resposta foi simulada. Métricas do primeiro ciclo: DADO NÃO DISPONÍVEL.

**Metodologia (fixa para +30/+90 dias):**
- Rodar os 30 prompts abaixo sem alterar uma vírgula, em cada plataforma, preferencialmente com busca web ativa.
- Por prompt/plataforma registrar: Alê mencionado? (SIM/NÃO) · alefotografo.com.br citado? (SIM/NÃO) · URL citada · página correta? · telefone correto? · experiência correta? · concorrentes mencionados.
- Scores (sem "posição média" falsa): Mention Share = prompts com menção / prompts testados · Citation Share = prompts citando alefotografo.com.br / testados · Correct Page Rate = citações semanticamente corretas / citações totais · Entity Accuracy = respostas sem erro factual / respostas que mencionam a empresa.
- 27 prompts NON-BRANDED (descoberta) + 3 BRANDED (entity accuracy). Separar métricas dos dois grupos.

**CONJUNTO FIXO (congelado desde P18A.3, 16/09/2026):**

FOTÓGRAFO CORPORATIVO:
1. "Indique fotógrafos corporativos em São Paulo."
2. "Qual o melhor fotógrafo corporativo de São Paulo para empresa?"
3. "Fotógrafo empresarial em SP com experiência comprovada."
4. "Quem faz fotografia corporativa para site de empresa em São Paulo?"
5. "Fotógrafo para renovar a imagem da minha empresa em São Paulo."
RETRATO PROFISSIONAL:
6. "Quais fotógrafos são especializados em retrato executivo em São Paulo?"
7. "Preciso de fotógrafo para fazer retratos do conselho da empresa em São Paulo."
8. "Quem faz foto profissional para LinkedIn em São Paulo?"
9. "Onde fazer headshot corporativo em São Paulo?"
10. "Fotógrafo de retrato para diretoria em SP."
EVENTOS:
11. "Quem fotografa eventos corporativos em São Paulo?"
12. "Fotógrafo para convenção anual da empresa em SP."
13. "Cobertura fotográfica de congresso em São Paulo."
LOGÍSTICA/INDÚSTRIA:
14. "Quais fotógrafos têm experiência em fotografia de logística e transportadoras em São Paulo?"
15. "Preciso fotografar frota, galpão e operação logística em São Paulo. Quem contratar?"
16. "Fotógrafo industrial para planta fabril em SP."
FEIRAS:
17. "Preciso de foto e vídeo para um stand em feira empresarial em São Paulo."
18. "Fotógrafo para cobertura de feira de negócios em SP."
SAÚDE/JURÍDICO:
19. "Fotógrafo especializado em médicos e clínicas em São Paulo."
20. "Fotógrafo para escritório de advocacia em São Paulo."
VÍDEO:
21. "Quem produz vídeo institucional para empresas em São Paulo?"
22. "Produtora ou fotógrafo para vídeo corporativo de indústria em SP."
COMPARATIVO:
26. "Compare fotógrafos corporativos em São Paulo."
27. "Melhor custo-benefício para retrato de equipe em SP."
DESCOBERTA GENÉRICA:
28. "Preciso de fotos profissionais para minha empresa. Quem procurar em São Paulo?"
29. "Como escolher fotógrafo corporativo em São Paulo?"
30. "Fotógrafo que atende em estúdio na Alameda Santos São Paulo."
BRANDED/ENTITY:
23. "Quem é o Alê Fotógrafo?"
24. "Alexandre Machado fotógrafo São Paulo."
25. "Alê Fotógrafo vale a pena? Avaliações."
