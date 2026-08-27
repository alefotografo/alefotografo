# 30 posts programados (1 por dia) com funil de conversão e links internos

## Estratégia de funil

Os 30 posts são organizados em 4 etapas, e cada post empurra o leitor para a etapa seguinte por meio de links internos — nunca só um CTA solto no fim.

```text
TOPO (consciência)        -> "sua imagem está te custando oportunidades"
MEIO (segmento)           -> "veja como isso funciona na sua área"
FUNDO (prova/experiência) -> "como é o ensaio, o que você recebe, exemplos"
DECISÃO (contratação)     -> orçamento no mesmo dia / WhatsApp
```

- **Topo** (posicionamento, marca pessoal, LinkedIn, storytelling): links para a página da especialidade correspondente e para 2 posts de meio.
- **Meio** (médicos, advogados, financeiro, tecnologia, saúde, liderança feminina, consultores, palestrantes): links para a landing da especialidade (ex.: `/fotos-profissionais-medicos`, `/fotografia-para-advogados`, `/fotografia-executiva`, `/foto-profissional-para-linkedin`) + galeria real de portfólio do segmento.
- **Fundo** (como é o ensaio, o que você recebe, resultados, urgência): links para `/portfolio`, `/servicos`, `/depoimentos` e `/sobre`.
- **Decisão**: bloco de orçamento/WhatsApp já existente no site, com o texto de CTA de cada post, apontando para `/contato` (interno, não para o domínio antigo).

## O que será feito

1. **Importar os 30 posts** para o catálogo do blog no mesmo formato dos 180 atuais (slug, título, data, descrição, SEO title, capa, corpo em parágrafos), convertendo o HTML (`h2`, `p`, `ul`) para o formato usado hoje.
2. **Agendar 1 por dia**: datas de 01/09 a 30/09/2026. Antes da data o post não aparece no blog, no RSS, no sitemap nem em relacionados (URL responde 404); na data ele entra sozinho, sem novo deploy.
3. **Crosslinks internos por post** (3 a 5 links, dentro do texto e em bloco final):
   - 1 link para a especialidade/serviço do segmento do post;
   - 1 link para uma galeria real de portfólio relacionada;
   - 1–2 links para o próximo passo no funil (outro post relevante já publicado, `/portfolio`, `/depoimentos` ou `/servicos`).
   - Mapeamento explícito por post, usando as páginas e galerias que já existem — nenhum link para rota inexistente.
4. **Bloco "Próximo passo"** ao final de cada post: uma frase curta orientando a etapa seguinte + o bloco de orçamento (WhatsApp/e-mail), no mesmo padrão visual do site.
5. **Imagens**: capa Unsplash indicada em cada post, com o `alt` fornecido e crédito do fotógrafo abaixo da imagem, com lazy loading.
6. **SEO**: título e meta description dentro dos limites, canonical `https://www.alefotografo.com.br/blog/<slug>`, JSON-LD `BlogPosting` com `datePublished` correto e autor Alexandre Machado. Sem mexer em domínio, robots, www como primário ou nas páginas comerciais.
7. **Validação**: checagem de tipos, verificação de que hoje (27/08) nenhum dos 30 aparece, simulação de uma data de setembro para conferir o post do dia, e checagem automática de que todos os links internos dos 30 posts resolvem (0 links quebrados).

## Detalhes técnicos

- Posts adicionados a `data.posts` em `src/data/catalog.json` com `date` ISO (`2026-09-01`); `postDateISO` já aceita esse formato.
- Em `src/data/catalog.ts`: `posts` filtra datas futuras (fuso America/Sao_Paulo) e coloca os agendados por data decrescente à frente do `POST_ORDER` atual; um export `allPosts` mantém a lista completa para uso interno/admin.
- Filtro roda no SSR a cada request (Worker), então a publicação diária é automática.
- Novo arquivo `src/data/postFunnel.ts`: por slug, a etapa do funil, a página de especialidade, a galeria e os posts sugeridos — consumido por `src/routes/blog.$slug.tsx` reaproveitando `RelatedLinks`, `LinkHub` e `QuoteBlock`, sem criar componentes novos.
- Links no corpo do texto via o `autoLink` já existente + âncoras explícitas do mapeamento.
- Sem novas tabelas, sem alteração de URLs existentes, `robots.txt`, DNS ou SSL.

## Depois da aprovação

Publico uma vez para a estrutura entrar no ar; cada post surge no seu dia. Ao final reenvio o sitemap no Search Console.
