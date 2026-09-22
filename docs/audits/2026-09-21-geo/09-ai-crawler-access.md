# 09 — AI Crawler Access Audit

Data: 21/09/2026 · Produção: https://www.alefotografo.com.br · Fontes: robots.txt de produção + documentação oficial consultada nesta missão.

## robots.txt atual (produção)

`User-agent: *` → Allow /, Disallow /auth e /admin. Depois grupos explícitos com `Allow: /` para: OAI-SearchBot, GPTBot, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, Google-Extended, CCBot, cohere-ai. Sitemap declarado. Rodapé com referência ao llms.txt.

## Tabela por bot

| BOT | OFFICIAL PURPOSE (docs) | ROBOTS STATUS | ALLOWED? | FONTE OFICIAL |
|---|---|---|---|---|
| OAI-SearchBot | Indexação/pesquisa do ChatGPT Search — "surface websites in search results"; opt-out remove o site das respostas de busca do ChatGPT | Allow explícito | SIM | https://developers.openai.com/api/docs/bots |
| GPTBot | Crawl para treinamento dos modelos OpenAI (independente do Search) | Allow explícito | SIM | idem |
| ChatGPT-User | Fetch iniciado por ação de usuário no ChatGPT/GPTs; **não** é crawler nem define presença em Search | Não listado (herda `* Allow`) | SIM (implícito) | idem |
| OAI-AdsBot | Validação de landing pages de anúncios no ChatGPT | N/A (não anunciamos) | N/A | idem |
| ClaudeBot | Crawl da Anthropic (modelos/pesquisa) | Allow explícito | SIM | https://support.claude.com/en/articles/8896518 (abr/2026) |
| Claude-SearchBot | Busca da Anthropic | Allow explícito | SIM | idem |
| Claude-User | Fetch por direção de usuário | Allow explícito | SIM | idem |
| PerplexityBot | Indexação para resultados do Perplexity ("not used to crawl content for AI foundation models") | Allow explícito | SIM | https://docs.perplexity.ai/guides/bots |
| Perplexity-User | Fetch por ação de usuário no Perplexity | Allow explícito | SIM | idem |
| Googlebot | Indexação Google Search | Implícito (`* Allow`) | SIM | — |
| Google-Extended | Sinal de controle para recursos de IA do Google (sem efeito em ranking) | Allow explícito | SIM (política do proprietário) | developers.google.com/search/docs |
| CCBot | Common Crawl | Allow explícito | SIM | commoncrawl.org |
| cohere-ai | Cohere | Allow explícito | SIM | cohere.com |

## Verificações importantes (sem confusão proposital)

- **OAI-SearchBot ≠ GPTBot**: registrados separadamente. Liberar GPTBot NÃO é pré-requisito para ChatGPT Search (docs: "Each setting is independent"). Configuração atual permite ambos — decisão do proprietário.
- **ChatGPT-User**: docs OpenAI dizem explicitamente que ele "is not used to determine whether content may appear in Search" — presença em Search depende de OAI-SearchBot.
- **ChatGPT-User e Perplexity-User** podem ignorar robots.txt por serem ações iniciadas por usuário (docs oficiais) — registrado como fato documental.
- **llms.txt NÃO é fator de ranking Google** (nota metodológica obrigatória): Google Search e recursos de IA continuam dependendo de crawl, indexação, conteúdo, relevância, qualidade, autoridade, SEO normal e dados estruturados quando aplicáveis. Nenhuma recomendação deste dossiê diz "adicione llms.txt para subir no Google AI".
- Zero bot inventado: todos os UAs listados vêm de documentação oficial consultada nesta missão ou de missões anteriores (P18A).
- **Limitação registrada**: UA em curl não comprova que o IP real dos crawlers passa pelo WAF da borda (Cloudflare/Lovable). Verificação real exige logs do servidor.

## Estado

Acesso técnico: **SAUDÁVEL**. Nenhum bloqueio acidental. Nenhuma ação necessária nesta missão (proibido alterar).
