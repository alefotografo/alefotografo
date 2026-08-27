# Fase 5 — Autoridade comercial, SEO semântico e conversão

Nada será alterado até a aprovação. Abaixo o estado atual verificado no código e a tabela de aprovação.

## Estado atual verificado

- As três páginas comerciais são galerias renderizadas por `src/routes/fotografo-corporativo.$slug.tsx`, com conteúdo vindo de `src/data/catalog.json`. Hoje elas têm: H1 = título curto da galeria, um subtítulo, um parágrafo de descrição truncado em 220 caracteres, galeria de fotos, bloco "quer um trabalho assim", FAQ genérico (5 perguntas iguais em todas as galerias) e blocos de links.
- Não existe hoje nenhum bloco editorial próprio por galeria (o que é / para quem / o que produzo / como funciona / onde atendo). É aí que está o ganho da fase.
- Title/description das três URLs já são overrides manuais em `src/data/categorySeo.ts` (dentro dos limites).
- Os dois artigos existem: `/blog/fotografo-5-poses-para-retrato-corporativo` e `/blog/7-erros-que-voce-deve-evitar-na-foto-de-perfil-no-linkedin`. O template do post já tem CTA genérico ("Solicitar orçamento" / "Ver fotos") e links automáticos, mas nenhuma ponte comercial específica de retrato.
- Home: já traz "Alexandre Machado · 30 anos · São Paulo", H1 autoral em 1ª pessoa, CTAs e links de serviço. Auditoria conservadora indica: nenhuma alteração necessária.
- Mensuração: existe `useTrackConversion` gravando no backend + `gtag`, com tipos fechados `whatsapp | telefone | email | formulario`. Os CTAs de WhatsApp dentro das páginas de serviço/galeria hoje **não** disparam esse rastreio (só a barra fixa, rodapé e /contato).
- WhatsApp: número único em `src/data/catalog.ts`, link montado por `src/lib/whatsapp.ts` com mensagem por página. Preservado como está.

## Tabela de aprovação

### Ativo 1 — /fotografo-corporativo/fotografia-corporativa-em-sao-paulo

| Campo | Conteúdo |
| --- | --- |
| Intenção atual | Galeria/prova visual de fotografia corporativa |
| Intenção alvo | Destino comercial principal: fotografia corporativa, fotógrafo corporativo em SP, fotógrafo para empresas |
| Title atual | "Fotografia Corporativa em SP \| Orçamento no Mesmo Dia" |
| H1 atual | "Fotografia Corporativa" |
| Alteração proposta | **Adição** de um bloco editorial exclusivo desta URL, abaixo do primeiro parágrafo e acima da galeria, respondendo as 8 perguntas: o que é fotografia corporativa; quem é Alexandre Machado; para quem é; o que pode ser produzido (pessoas trabalhando, liderança, equipes, ambientes, processos, produtos, instalações, tecnologia, banco de imagens); por que contratar experiência; como funciona a produção; onde atendo em SP; como pedir orçamento. Substituir o FAQ genérico por 5 perguntas próprias do tema (o FAQ genérico continua existindo nas outras galerias). Nenhuma linha do texto atual removida. "Fotógrafo corporativo" entra 2–3 vezes, em contexto. |
| Links propostos | Contextuais no corpo: retrato corporativo (âncora "retratos de liderança e equipe"), fotografia institucional ("banco de imagens da empresa"), /portfolio ("cases por segmento"), 1 artigo do blog. **Sem link para /fotos-corporativas** — verificação feita: aquela página declara `serviceType: "Fotografia corporativa"`, title "Fotos Corporativas em SP" e FAQ "O que são fotos corporativas?", ou seja, intenção substancialmente concorrente. Pelo Ajuste 1, o link é omitido nesta fase para consolidar a autoridade na URL comercial principal. |
| CTA proposto | "Falar com Alexandre sobre fotografia corporativa" (WhatsApp, mensagem contextual) + "Solicitar orçamento" para /contato |
| Risco SEO | **BAIXO** (só adição; title, H1, URL, canonical intactos) |

### Ativo 2 — /fotografo-corporativo/retrato-corporativo

| Campo | Conteúdo |
| --- | --- |
| Intenção atual | Galeria de retratos executivos |
| Intenção alvo | Retrato corporativo, retrato executivo, ensaio corporativo, foto de liderança |
| Title atual | "Retrato Corporativo em SP \| Orçamento no Mesmo Dia" |
| H1 atual | "Retrato Corporativo" |
| Alteração proposta | **Adição** de bloco editorial sobre pessoas: direção de pose, expressão, postura, enquadramento, roupa, ambiente, finalidade (LinkedIn, site, imprensa, apresentações). Um trecho humano e concreto sobre dirigir quem "não sabe posar", escrito na voz em 1ª pessoa do site. FAQ próprio de 5 perguntas (roupa, duração, quantidade de fotos, estúdio x empresa, entrega). Sem virar página genérica de fotografia corporativa. |
| Links propostos | Artigo das 5 poses, artigo dos 7 erros do LinkedIn, /foto-profissional-para-linkedin, /fotografia-executiva, galeria de fotografia corporativa |
| CTA proposto | "Conversar sobre um ensaio de retrato" (WhatsApp contextual) + /contato |
| Risco SEO | **BAIXO** |

### Ativo 3 — /fotografo-corporativo/fotografia-institucional-em-saopaulo

| Campo | Conteúdo |
| --- | --- |
| Intenção atual | Galeria de fotografia e vídeo institucional |
| Intenção alvo | Fotografia institucional, banco de imagens corporativo, fotos da empresa |
| Title atual | "Fotografia Institucional em SP \| Empresas e Liderança" |
| H1 atual | "Fotografia Institucional" |
| Alteração proposta | **Adição** de bloco editorial centrado em "por que ter um banco de imagens próprio": deixar de depender de imagens genéricas e construir patrimônio visual coerente. Listas de usos (site, LinkedIn, apresentações, propostas, imprensa, redes, campanhas, recrutamento, comunicação interna, material comercial) e de possibilidades de captação (pessoas trabalhando, escritórios, fábricas, logística, equipamentos, tecnologia, reuniões, liderança, detalhes, produtos, processos, instalações). FAQ próprio de 5 perguntas (direito de uso, organização do acervo, periodicidade, prazo, escopo). |
| Links propostos | Fotografia corporativa (ligação contextual explícita) e retrato corporativo. **/videos apenas se** houver um trecho editorial em que a produção audiovisual institucional seja de fato útil ao leitor (ex.: quando trato foto e vídeo na mesma diária); caso contrário, omitido — Ajuste 2. Link para /fotos-corporativas também omitido, pelo mesmo critério do Ajuste 1. |
| CTA proposto | "Conversar sobre banco de imagens" (WhatsApp contextual) + /contato |
| Risco SEO | **BAIXO** |

### Ativo 4 — /blog/fotografo-5-poses-para-retrato-corporativo

| Campo | Conteúdo |
| --- | --- |
| Intenção atual | Informacional (posição ~1,35 em "foto corporativa") |
| Intenção alvo | Igual — informacional preservada, com ponte comercial |
| Title atual | "5 melhores poses para Retrato Corporativo" |
| H1 atual | Idem |
| Alteração proposta | **Nenhuma** alteração de title, H1, URL, data ou corpo. Apenas **um** bloco de ponte contextual inserido após o último parágrafo do artigo, antes dos blocos de links, com 2–3 frases na voz do site e um link principal. Sem CTA adicional agressivo. |
| Links propostos | Principal: /fotografo-corporativo/retrato-corporativo (âncora "trabalho de retrato corporativo"); secundário quando natural: /fotografo-corporativo/fotografia-corporativa-em-sao-paulo |
| CTA proposto | Um único link editorial no bloco de ponte (sem botão, sem WhatsApp) |
| Risco SEO | **BAIXO** para a ponte. Qualquer mexida em title/H1 deste artigo = **ALTO** e **não será feita** |

### Ativo 5 — /blog/7-erros-que-voce-deve-evitar-na-foto-de-perfil-no-linkedin

| Campo | Conteúdo |
| --- | --- |
| Intenção atual | Informacional (posição ~4,41 em "foto para linkedin") |
| Intenção alvo | Igual, com ponte comercial |
| Title atual | "7 Erros que você deve evitar na foto de perfil no LinkedIn" |
| H1 atual | Idem |
| Alteração proposta | **Nenhuma** alteração de title, H1, URL, data ou corpo. Um bloco de ponte após a entrega do conteúdo: a foto comunica antes da primeira conversa; senioridade, confiança e coerência de posicionamento; Alexandre Machado apresentado naturalmente. |
| Links propostos | /foto-profissional-para-linkedin (página comercial já existente) e /fotografo-corporativo/retrato-corporativo |
| CTA proposto | Um único link editorial |
| Risco SEO | **BAIXO** para a ponte; title/H1 seriam **ALTO** e ficam intocados |

### Home — /

| Campo | Conteúdo |
| --- | --- |
| Intenção | Genérica "fotógrafo" (996 de 1.002 impressões) |
| Auditoria | Alexandre Machado, Alê Fotógrafo, fotógrafo, fotografia corporativa, retratos, São Paulo, 30+ anos, CTA e links para serviços prioritários: **todos presentes e claros** |
| Alteração proposta | **Nenhuma** |
| Risco SEO | — |

### Mensuração (transversal)

| Campo | Conteúdo |
| --- | --- |
| Alteração proposta | Ligar os CTAs de WhatsApp das três páginas ao rastreio já existente (`useTrackConversion` + `gtag`), usando o tipo `whatsapp` que já existe. Nenhuma ferramenta nova, nenhuma substituição. |
| Risco SEO | **BAIXO** (sem efeito em SEO) |
| Observação | Eventos separados (`budget_request`, `portfolio_click`, `contact_click`) exigiriam ampliar o enum de conversões e a tabela do banco — classifico como **MÉDIO** e deixo fora desta fase salvo pedido explícito. |

## Preservações garantidas na execução

URLs, slugs, canonicals, redirects legados, sitemaps, robots.txt, datas, grafo de entidade e todo o conteúdo que já ranqueia permanecem exatamente como estão. Nenhuma página nova, nenhum noindex, nenhuma exclusão.

## Detalhes técnicos da execução (após aprovação)

1. Novo `src/data/categoryEditorial.ts`: conteúdo editorial + FAQ + mensagem de WhatsApp por slug, apenas para os três slugs desta fase.
2. `src/routes/fotografo-corporativo.$slug.tsx`: renderizar esse bloco quando existir para o slug (e usar o FAQ próprio no lugar do genérico apenas nesses casos). Nenhuma outra galeria muda.
3. Novo `src/data/postBridges.ts`: bloco de ponte por slug de post, com texto e links; renderizado em `src/routes/blog.$slug.tsx` após o corpo, somente para os dois slugs desta fase.
4. CTA de WhatsApp contextual via `waLink()` (número existente) com `onClick` chamando `useTrackConversion("whatsapp")`.
5. Validação: typecheck + verificação de status 200 e presença dos novos textos/links no HTML servido das 5 URLs.
6. Ao final, o relatório de 17 itens solicitado.
