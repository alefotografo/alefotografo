# Diferenciação dos dois sites: alefotografo.com.br (autoral) x alefotografos.com.br (equipe)

## Objetivo
Eliminar o risco de conteúdo duplicado entre os dois domínios e dar a cada um uma identidade própria — de posicionamento, conteúdo e dados estruturados — para que os dois rankeiem no Google, Bing e sejam citados por IAs sem competir entre si.

## Posicionamento definido

| | alefotografo.com.br (este projeto) | alefotografos.com.br (outro projeto) |
|---|---|---|
| Quem entrega | Alexandre Machado, pessoalmente | Equipe Alê Fotógrafo (vários fotógrafos) |
| Foco | Retratos profissionais e fotos corporativas de pessoas: LinkedIn, headshots, executivos, médicos, advogados, equipes | Cobertura de eventos: feiras, congressos, convenções, coberturas simultâneas, multi-cidade |
| Promessa | Autoria, direção de pose, 30 anos de experiência, atendimento direto com o fotógrafo | Escala, número de profissionais, cobertura de dias inteiros e vários ambientes |
| Schema.org | `Person` + `PhotographyBusiness` de um profissional | `Organization` / `LocalBusiness` com equipe |
| Palavras-chave-alvo | fotógrafo de retrato corporativo, foto para LinkedIn, headshot executivo, fotógrafo de perfil profissional | fotógrafo para eventos corporativos, cobertura de feiras e congressos, equipe de fotógrafos |

## O que eu faço neste projeto (alefotografo.com.br)

### 1. Reescrever o núcleo de posicionamento
- Home (`src/routes/index.tsx`): hero, subtítulo e blocos de prova reescritos na primeira pessoa ("eu fotografo", "atendimento direto comigo"), com ênfase em retrato/headshot em vez de "corporativa" genérica.
- `sobre.tsx` e `quem-e-o-ale.tsx`: biografia autoral, processo pessoal de direção de pose, trajetória de 30 anos.
- Títulos e meta descriptions de todas as rotas comerciais reescritos com o ângulo autoral (`src/lib/seo.ts` e os `head()` de cada rota) — nenhum título igual ao do outro domínio.

### 2. Reordenar a arquitetura em torno de retrato/pessoas
- Páginas-pilar prioritárias: `/foto-profissional`, `/foto-profissional-para-linkedin`, `/fotografia-executiva`, `/fotos-profissionais-medicos`, `/fotografia-para-advogados`, `/fotografia-para-clinicas`.
- `/eventos-corporativos` e `/fotografo-de-feira-de-negocios`: reduzidas a páginas curtas de contexto, sem tentar rankear para "cobertura de evento", com um bloco explicando que coberturas de grande porte com equipe ficam no outro site.
- Menu, `/servicos` e rodapé reorganizados com retrato/pessoas no topo.

### 3. Conteúdo e blog sem sobreposição
- Blog deste site: pauta de retrato, imagem pessoal, LinkedIn, marca pessoal, preparação para ensaio.
- Nenhum post repetido entre os domínios; posts de evento/feira migram de pauta para o outro site.
- Galerias: separar os conjuntos — aqui só ensaios de pessoas e equipes; ensaios de evento saem das dobras de "galerias relacionadas".

### 4. Sinais estruturados e para IAs
- JSON-LD com `Person` (Alexandre Machado) como autor e `PhotographyBusiness` com `founder`, `knowsAbout` focado em retrato.
- `sameAs` cruzado entre os dois domínios (declarando a relação, sem canonical cruzada).
- `public/llms.txt` reescrito descrevendo com clareza a divisão dos dois sites — é o arquivo que IAs leem para entender escopo.
- FAQ com perguntas distintas das do outro site (uma FAQ igual nos dois é o duplicado mais comum).

### 5. Verificação
- Varredura comparando títulos, H1s, descriptions e primeiros parágrafos das duas propriedades, listando qualquer trecho ainda idêntico.
- Confirmar canônicas auto-referentes em cada domínio (nunca apontando para o outro).
- Reenviar sitemap e acompanhar as duas propriedades no Search Console separadamente.

## O que fica para o outro projeto (alefotografos.com.br)
Feito em uma sessão separada, no projeto dele: reescrever home/sobre no plural (equipe), promover as páginas de evento/feira/congresso a pilares, remover as páginas de retrato individual como foco de rankeamento e trocar o schema para `Organization` com `employee`. Posso executar isso quando você abrir aquele projeto.

## Detalhes técnicos
- Origem canônica única já centralizada em `src/lib/seo.ts` (`SITE_ORIGIN`); nenhuma canônica cruzada entre domínios em nenhum momento.
- Redirects em `src/server.ts` continuam apenas http→https e apex→www; nada cross-domain.
- Nenhuma página é deletada — as de evento permanecem indexáveis, só perdem prioridade interna, preservando os 301 e a autoridade já acumulada.

## Ordem de execução sugerida
1. Reposicionamento de home + sobre + metas (impacto maior, risco menor).
2. Rebalanceamento de arquitetura interna e galerias.
3. Schema, llms.txt e FAQ.
4. Varredura de duplicidade e relatório comparativo.
