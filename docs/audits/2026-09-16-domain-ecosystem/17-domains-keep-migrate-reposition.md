# 17 — Domínios: manter, migrar, reposicionar

Data: 16/09/2026 · Decisões estratégicas do proprietário já acatadas como premissa (Parte "DECISÃO ESTRATÉGICA JÁ TOMADA" da missão).

## Matriz por domínio

### 1. alefotografo.com.br — KEEP (primário)
- **KEEP? SIM.** É a entidade canônica (P18A validado), 340 URLs, schema completo, melhor UX mobile, baseline de entidade.
- **WHY?** Marca pessoal, autoridade de Alexandre, cluster de serviços foto + portfólio integrado.
- **MIGRATE? NÃO.** Recebe conteúdo dos legados.
- **REPOSITION? Parcialmente no eixo vídeo** (ver 18-video-domain-separation.md): de "produtor de vídeo" para "produção integrada foto+vídeo".
- **CROSSLINK? SIM** — para VC (vídeo) e para ales (equipe/escala), só contextual.
- **PRIMARY INTENT:** fotógrafo corporativo/profissional/retrato/executivo + produção integrada.
- **CAN COMPETE WITH OWN DOMAIN? Hoje compete com ales e com VC — deve parar de competir com ambos.**

### 2. videoscorporativos.com.br — KEEP + REPOSITION (fortalecer)
- **KEEP? SIM.** Especialista vertical com intenção própria clara e ativos reais (192 páginas, blog vivo, /precos, /cases).
- **WHY?** Único capaz de disputar "vídeo corporativo" sem canibalizar a marca pessoal.
- **REPOSITION? Fortalecer verticalidade:** H1/title da home diferenciados do Ale, landings nicho, IndexNow, backlinks.
- **MIGRATE? NÃO.**
- **CROSSLINK? SIM** — cases com foto → Ale.
- **PRIMARY INTENT:** vídeo corporativo em todas as vertentes.
- **CAN COMPETE WITH OWN DOMAIN? Não deve competir com o Ale após o reposicionamento de ambos.**

### 3. alefotografos.com.br — KEEP + REPOSITION (o mais urgente depois dos legados)
- **KEEP? SIM (decisão estratégica).**
- **WHY?** Papel futuro: equipe, escala, eventos grandes, simultaneidade — intenção que NENHUM outro domínio do ecossistema pode atender.
- **REPOSITION? SIM — hoje o site NÃO cumpre o papel:** 156/159 paths espelham o site principal (similaridade 78–98%), H1 de /videos idêntico, llms.txt se apresenta como marca pessoal, footer diz "Desde 1995" (conflito com 1999), 1 página expõe o telefone pessoal do Alexandre.
- **O que fazer (faseamento, NÃO implementado aqui):** (F1) corrigir NAP/footer/llms.txt; (F2) diferenciar ou desindexar páginas espelhadas (cada página deve decidir: reposicionar para escala — ex. "fotógrafo para eventos grandes com equipe" — ou redirecionar 301 para o equivalente no principal); (F3) criar conteúdo próprio de escala (grandes coberturas, congressos, operações simultâneas).
- **CROSSLINK? SIM** — quando o escopo exige equipe, o Ale aponta para ales.
- **PRIMARY INTENT (futuro):** equipes e eventos de grande escala.
- **CAN COMPETE WITH OWN DOMAIN? Hoje compete fortemente (mesmas queries) — deve deixar de competir.**

### 4. fotografoale.com.br — MIGRATE (consolidar no principal)
- **KEEP? NÃO como propriedade ativa.**
- **WHY MIGRATE?** 64 URLs, zero JSON-LD, 44 sem H1, mesmo conteudo/nicho do principal; aparece na SERP do principal (baseline query 7: 6º, canibalizando). Tem galerias nomeadas por cliente (ativos de prova social) que NÃO existem no principal — preservar antes de redirecionar (ver 19).
- **HOW?** 301 página a página conforme 05-legacy-migration-map.csv (89 linhas). Manter domínio registrado (defesa de marca) com redirect permanente.
- **CROSSLINK? N/A depois da migração.**
- **PRIMARY INTENT (legado):** fotógrafo profissional/retrato/eventos.
- **CAN COMPETE? Hoje SIM — exatamente o problema.**
- **PODE SER DESATIVADO AGORA? NÃO — primeiro: validar GSC/backlinks (DADO NÃO DISPONÍVEL neste ambiente), preservar galerias úteis, aplicar 301 e monitorar.**

### 5. fotodeperfilprofissional.com.br — MIGRATE (consolidar)
- **KEEP? NÃO como propriedade ativa.**
- **WHY MIGRATE?** 14 páginas, WordPress velho, telefone legado 99483-8127 em 4 páginas (risco NAP), 12/15 sem H1, tema 100% coberto pelo principal (/foto-profissional, /foto-profissional-para-linkedin, /fotografia-executiva).
- **HOW?** 301 conforme mapa; pacotes (prata/ouro/diamante/influencer) → /foto-profissional (mesma regra P18A da Epics).
- **PODE SER DESATIVADO AGORA? NÃO — mesmo gate: GSC/backlinks indisponíveis, URLs Wayback a verificar status, telefone antigo a corrigir ANTES ou JUNTO com a migração (senão o sinal errado migra junto).**

## Resumo executivo da matriz

| Domínio | Destino | Urgência |
|---|---|---|
| alefotografo.com.br | KEEP (primário) | — |
| videoscorporativos.com.br | KEEP + fortalecer vertical | MÉDIA |
| alefotografos.com.br | KEEP + REPOSITION (parar espelhamento) | ALTA |
| fotografoale.com.br | MIGRATE + 301 (após gate) | MÉDIA |
| fotodeperfilprofissional.com.br | MIGRATE + 301 (após gate) | MÉDIA |
