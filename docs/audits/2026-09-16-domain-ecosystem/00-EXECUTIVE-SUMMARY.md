# 00 — Executive Summary — Auditoria do Ecossistema de Domínios

Data: 16/09/2026 · Base: main 560d6e2 (P18A validada em produção) · Escopo: 5 domínios, **770 URLs únicas** coletadas (842 fetch events — 72 vídeos do alefotografo listados em 2 sitemaps), 15 queries SERP amostral, **110 páginas** comparadas por similaridade, 8 páginas × 6 viewports headless, Lighthouse mobile em 3 sites.
Regra da missão: nada foi alterado em produção, DNS, Cloudflare, Lovable ou código da aplicação. Só documentação.

## 1. Estado atual

Três propriedades ativas boas tecnicamente, mas **se competindo entre si**; dois legados parados poluindo o sinal de entidade. O site principal (alefotografo.com.br) é sólido — schema completo, entidade alinhada (P18A), zero overflow, SEO 100 no Lighthouse. O problema não é técnico no principal: é **arquitetura de ecossistema**.

## 2. O que manter

- **alefotografo.com.br** como primário (fotografia corporativa + produção integrada foto+vídeo). Entidade canônica.
- **videoscorporativos.com.br** como especialista vertical de vídeo (192 páginas, blog vivo, /precos, /cases, llms.txt correto). É o dono natural das intenções de vídeo — mas hoje está invisível na busca amostral (0/15 queries) enquanto os sites "Ale" ocupam seu lugar.
- **alefotografos.com.br** como futuro site de equipe/escala (decisão estratégica do proprietário).

## 3. O que migrar (gateado)

- **fotografoale.com.br** → consolidar no principal (zero schema, 44/64 páginas sem H1, canibaliza o principal na SERP, mas tem ~17 galerias nomeadas por cliente que são prova social valiosa — capturar antes dos 301).
- **fotodeperfilprofissional.com.br** → consolidar em /foto-profissional e afins (WordPress velho, telefone antigo 99483-8127 em 4 páginas, pacotes de preço defasados possivelmente ainda vivos).
- **Gate para ambos:** GSC + backlinks (DADO NÃO DISPONÍVEL neste ambiente) + preservação de conteúdo (19). **Não migrar ainda.**

## 4. O que reposicionar

- **alefotografos.com.br:** hoje 156/159 caminhos espelham o principal (similaridade 78–98%; /videos com H1 idêntico; 72/72 slugs de vídeo duplicados). Além disso: footer diz "Desde 1995" (conflito com 1999 oficial), 1 página expõe telefone pessoal, llms.txt se apresenta como marca pessoal do Alexandre. Faseamento: F1 correções de entidade → F2 decisão página a página (reposition vs 301) → F3 conteúdo próprio de escala.
- **Eixo vídeo do Ale:** /videos e as 3 páginas de serviço de vídeo disputam as intenções do VC. Reposicionar como "produção integrada foto+vídeo" e linkar ao VC.

## 5. Principais conflitos (evidência)

1. ale × ales: duplicação quase total de corpus (topo da lista: /depoimentos 98%, /contato 91%, /foto-profissional 88%).
2. ales ranqueia à frente do principal para páginas idênticas (baseline query 15: ales 1º, ale ~5º).
3. Intenção logística: ales (espelho) ranqueia 3º; o dono do cluster P17 (ale) ausente.
4. Intenções de vídeo: VC 0/15; ale/ales ocupam o espaço com home genérica e /videos.
5. NAP: 1995 (ales footer), telefone pessoal (ales), telefone legado 99483-8127 (fotodeperfil ×4).
6. fotografoale canibaliza "fotógrafo feira stand" (6º na mesma SERP do principal).

## 6. Principais oportunidades

- Consolidar intenções médicos/advogados/logística no dono correto → ganho imediato de CTR/posição sem novo conteúdo.
- Cases (/portfolio/cases): material real abundante (ATIVA, All Facilities, TJB, SQ Química ×3, Zattar, Live Clin...) — hub ainda inexistente no Ale.
- VC: IndexNow + backlinks + H1 diferenciado → destrava a intenção "vídeo corporativo" onde a concorrência direta é fraca na amostra.
- Landing "headshot" (termo com demanda real) e serviço "fotografia de produtos" (só no legado hoje).
- ales como único dono de "equipe de fotógrafos para grandes eventos" — intenção sem concorrente próprio no ecossistema.

## 7. Top 10 ações (ordem recomendada)

1. Corrigir footer "Desde 1995" → "desde 1999" no ales [P0, 1 linha].
2. Remover telefone pessoal 99165-6071 da página de vídeo do ales [P0].
3. Corrigir telefone 99483-8127 no fotodeperfil (ou acelerar migração) [P0].
4. 302→301 www→apex em ales e VC [técnico rápido].
5. Obter GSC/GA4/Bing dos 5 domínios [destrava tudo].
6. ales F1: llms.txt/title/footer com papel equipe/escala.
7. Hub /portfolio/cases + Case ATIVA (verificar precedência da rota `cases` vs `$slug`).
8. Reformular eixo vídeo do Ale para "integrado" + crosslink Ale↔VC.
9. IndexNow nos 3 ativos (começando pelo VC).
10. Briefings Alfa Silk e Dra. Luciana (checklist em 12).

## 8. O que NÃO fazer ainda

- Não migrar nem desligar legados sem GSC/backlinks.
- Não desindexar/redirectar páginas do ales em massa (decisão página a página).
- Não criar Cases sem briefing mínimo (nunca inventar resultado/depoimento/métrica).
- Não criar rede de links sitewide entre domínios.
- Não alterar DNS/Cloudflare/Lovable sem ordem explícita.
- Não publicar os dois sites como "a mesma marca pessoal" (manter papéis: Ale=autoridade pessoal; ales=escala; VC=vídeo).

## 9. Decisões que Alexandre precisa tomar

1. Papel final do ales: reposicionamento completo (recomendado) ou parcial?
2. Fornecer acesso GSC/GA4/Bing (e idealmente um relatório de backlinks exportado).
3. Autorizar migração dos legados após o gate (e quando).
4. Briefings: Alfa Silk e Dra. Luciana (checklist em 12-blog-case-strategy.md).
5. Autorizar IndexNow.
6. Confirmar ownership de alemachado.com.br (apareceu na SERP query 15).
7. Validar em telefone real a UX dos 3 sites (o headless não substitui).

## 10. Ordem de execução resumida

Ver 15-next-90-days-roadmap.md (Semana 1 → Dia 90). Resumo: correções P0 de entidade → GSC → ales F1 → Cases fase 1 → gate de migração → migração dos legados → authority/IndexNow/Bing → mensuração +30d.
