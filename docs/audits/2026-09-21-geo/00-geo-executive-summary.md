# 00 — GEO / AI Visibility — Executive Summary

Data: 21/09/2026 · Domínio principal: https://www.alefotografo.com.br · Branch: research/p18g-geo-baseline · Base main 1327448 · **Zero alterações de código/conteúdo/produção.**

## O que este baseline é (e não é)

É o primeiro baseline formal GEO do ecossistema: reproduzível, com prompts congelados (67), mapa de páginas por intenção, auditoria de entidade, citability de 14 páginas, acesso técnico de crawlers de IA verificado contra documentação oficial 2026, e mapeamento de concorrentes/fontes por proxy SERP. **Não é** medição de ranking de IA: as 6 plataformas de resposta exigem login indisponível neste ambiente — NADA foi simulado (todas NOT TESTED — AUTH REQUIRED); a coleta ao vivo está estruturada para execução manual (arquivo 17, estimativa 1–2h).

## Principais descobertas (proxy SERP 12 buscas + GSC + site)

1. **Forte onde a intenção é específica:** eventos corporativos (~2), advocacia (3 URLs próprias, melhor cluster), logística (3 URLs próprias incl. blog + serviço), fotógrafo corporativo SP (~2).
2. **Ausente onde a intenção é genérica:** foto profissional (único resultado próprio = URL legada /loja!), retrato profissional e LinkedIn (apps de IA e blogs de prompts ocupam o topo), vídeo (VC 0/12; produtoras e blogs de preço), drone (mídia/stock), totem (locadoras regionais).
3. **"foto profissional" é o caso crítico:** 17.107 impressões/mês no GSC com a money page tendo só 59 — a intenção sem dono. Nenhuma otimização deve partir do pressuposto de que /foto-profissional é a URL reconhecida (decisão query×page primeiro).
4. **Entidade do domínio principal 100% consistente** (nome, pessoa, cidade, +30 anos, 1999, telefone) — as IAs terão fatos corretos ao citar; risco real é **fragmentação entre domínios próprios** (alemachado ranqueia em advocacia; ales espelha; URL legada representa a marca em "foto profissional").
5. **Concorrente mais persistente: jottaphotopro.com.br** (3/12 buscas, estratégia de páginas de portfólio por nicho). Instagram ranqueou ~1 numa busca de eventos. Ameaça estrutural: apps de IA nas queries genéricas de perfil.
6. **Acesso técnico saudável:** todos os bots de IA documentados oficialmente permitidos no robots.txt; separação OAI-SearchBot/GPTBot respeitada; llms.txt classificado como SUPPLEMENTARY (nunca fator de ranking Google).

## Alertas para o proprietário

- **fotosprofissionais.com.br** apareceu na amostra com copy "30 anos de experiência" — **confirmar se é domínio seu** (não listado nos 6) ou cópia de terceiro.
- Decisões pendentes que afetam GEO: papel do alemachado.com.br (Alboom), query×page de "foto profissional", e o plano de vídeo do ecossistema (VC invisível na amostra).

## Top 5 ações (detalhe em 15)

1. Executar o Manual Test Pack (17) — destrava as métricas de IA.
2. Case ATIVA + Case Advocacia (prova nomeada citável).
3. Decisão "foto profissional" via GSC query×page.
4. Confirmar ownership fotosprofissionais.com.br + papel alemachado.
5. Citability do hub /fotografo-corporativo (394 palavras → extratível).

## Métricas (estado)

NON-BRANDED MENTION SHARE / MAIN DOMAIN CITATION SHARE / CORRECT PAGE RATE em IA: **NOT TESTED** (coleta manual pendente) · ENTITY ACCURACY (site): 100% consistente · OWNED ECOSYSTEM VISIBILITY (proxy): principal 6/12, ales 2/12, alemachado 1/12, VC 0/12 · COMMERCIAL COVERAGE (proxy): 5/11 clusters · LOCAL COVERAGE (proxy): presente nas buscas SP amostradas · OWNED DOMAIN LEAKAGE: 2 AMBIGUOUS + 1 LEGACY.
