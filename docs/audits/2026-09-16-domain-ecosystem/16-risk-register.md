# 16 — Risk Register

Data: 16/09/2026

| risk | probability | impact | mitigation | owner | gate before action |
|---|---|---|---|---|---|
| Cross-domain cannibalization (Ale × ales × VC) | ALTA (confirmada no baseline) | ALTA | repositionamento ales; reformulação eixo vídeo do Ale; consolidar intenções (03/18) | Alexandre + dev | aprovação do plano 17/18 |
| Redirect errado em legado | MÉDIA | ALTA | 301 página a página via 05-legacy-migration-map.csv; validar cada lote com spot-checks | dev | GSC dos legados (DADO NÃO DISPONÍVEL) |
| Perda de backlinks na migração dos legados | DESCONHECIDA | ALTA | GSC/Ahrefs antes de migrar; mapear URLs com links; preservar paths com valor | Alexandre (acesso GSC) | relatório de backlinks |
| Conteúdo duplicado Ale × ales (156/159 paths, 78–98% similaridade) | CONFIRMADA | ALTA | F1 NAP/footer/llms → F2 decidir por página (reposition vs 301/ desindexar) → F3 conteúdo próprio | dev + editorial | decisão do proprietário sobre ales |
| Desligar legado cedo demais | MÉDIA | ALTA | gate: GSC + backlinks + preservação de galerias (19) antes de qualquer 301 em massa | proprietário | gate completo |
| 404 após migração | MÉDIA | MÉDIA | crawl pós-redirect; monitorar GSC cobertura | dev | — |
| Loops / cadeias de redirect | BAIXA | MÉDIA | testar cada regra com curl -IL; máx 1 salto | dev | — |
| Canonical conflict | BAIXA (1 caso no legado fotodeperfil) | BAIXA | corrigir junto com migração WordPress | dev | — |
| Marca confusa (ales se apresenta como marca pessoal) | CONFIRMADA | MÉDIA | F1: llms.txt/title/footer de ales passam a refletir "equipe/escala" sob autoria de Alexandre | editorial | decisão ales |
| Preço antigo exposto | BAIXA (fotodeperfil pacotes fora do sitemap — status desconhecido) | MÉDIA | verificar URLs Wayback; se 200, migrar/corrigir prioritariamente | dev | conferência das URLs |
| Telefone antigo 99483-8127 | CONFIRMADA (4 páginas fotodeperfil) | ALTA (NAP) | corrigir ANTES/JUNTO da migração; não redirecionar sinal errado | dev | — |
| 1995 vs 1999 | CONFIRMADA (footer ales: "Desde 1995") | ALTA (entidade) | corrigir footer ales para "desde 1999" ou remover ano | dev | aprovação (oficial=1999) |
| Telefone pessoal 99165-6071 como comercial | CONFIRMADA (1 página ales) | MÉDIA | remover da página de vídeo ales | dev | — |
| AI entity conflict (3 domínios dizem "a marca do Alexandre" para a mesma intenção) | CONFIRMADA | MÉDIA | llms.txt por domínio com papéis distintos (ales já tem llms.txt errado) | editorial | plano ales |
| Thin Cases (sem material suficiente) | MÉDIA | MÉDIA | checklist 12-blog-case-strategy.md; não publicar sem briefing mínimo | editorial | briefing |
| Duplicação Case/Blog | MÉDIA | MÉDIA | regra CASE≠BLOG; revisão editorial cruzada | editorial | — |
| Links artificiais entre domínios | BAIXA | ALTA | plano 06: só contextual, nunca sitewide | editorial | — |
| Indexation loss após repositionamento ales | MÉDIA | MÉDIA | não desindexar em massa; 301 ou reformular página a página com monitoramento GSC | dev | GSC ales |
| Performance: LCP 4,1–5,0s nos 3 sites; CLS 0,119 no ales | CONFIRMADA (lab) | MÉDIA | otimizar hero/LCP; corrigir CLS do ales; tratar Lighthouse como lab, não CrUX | dev | medição CrUX/field |
| CTA invisível no mobile dos legados | CONFIRMADA | BAIXA | irrelevante se legados migrarem; se mantidos, corrigir | dev | decisão de migração |
| Migrar domínio sem GSC | CONFIRMADA (sem acesso neste ambiente) | ALTA | obter acesso GSC dos 5 domínios antes de qualquer migração | proprietário | acesso |
| Epics: desativação antes de convergir /loja | BAIXA | MÉDIA | 301 já ativos; monitorar queries de /loja no GSC | dev | GSC |
| Domínios alemachado.com.br / fotografoale ownership | DESCONHECIDA | BAIXA | confirmar com Alexandre se alemachado.com.br é dele (apareceu na SERP) | proprietário | — |
| user-agent de IA inventado em algum robots | BAIXA | BAIXA | ales lista "Claude-Web" e "anthropic-ai" (UA legados da Anthropic, hoje fora da lista oficial) — revisar quando da missão robots | dev | docs oficiais |
