# Diferenciação do site plural (alefotografos.com.br) — equipe, eventos e escala

## Onde este trabalho será executado

O site plural é outro projeto Lovable ("Alê Fotógrafo Revamped"). Eu consegui **ler** o código dele agora, mas não consigo editar nem publicar de dentro deste projeto. Para aplicar, você abre aquele projeto no editor e diz "aplicar o plano do plural" — eu já terei este roteiro e o contexto.

## O que eu verifiquei no projeto plural agora

- `SITE_ORIGIN` já está correto: `https://alefotografos.com.br`.
- O conteúdo **ainda é o antigo, genérico** — ou seja, ainda é o material do qual este site (singular) se diferenciou:
  - `public/llms.txt` continua descrevendo "site oficial do fotógrafo Alexandre Machado", sem citar equipe nem o site irmão.
  - `/eventos-corporativos` usa o título "Fotógrafo de Eventos Corporativos em São Paulo" (que aqui já foi reescrito, logo não há mais colisão nessa página).
  - `/foto-profissional` usa "Foto Profissional em São Paulo" com a mesma promessa de direção de pose — este é o tipo de página que precisa sair do foco lá.
  - `src/data/catalog.ts` tem tagline genérica "Fotografia e vídeo corporativo para empresas em São Paulo".
  - Não existe rota `/servicos` lá (existe só aqui).

## O que fazer no projeto plural

### 1. Reposicionar o núcleo para "equipe"
- Home, `/sobre` e `/quem-e-o-ale` reescritos na **terceira pessoa plural**: "nossa equipe cobre", "vários fotógrafos simultâneos", "operação de vários dias e ambientes".
- `catalog.ts`: tagline e descrição globais focadas em cobertura de eventos com equipe.

### 2. Promover eventos a pilar e rebaixar retrato individual
- Pilares principais: `/eventos-corporativos`, `/fotografo-de-feira-de-negocios`, além de páginas novas ou reforçadas para congressos, convenções e premiações.
- `/foto-profissional`, `/foto-profissional-para-linkedin`, `/fotografia-executiva`: páginas mantidas e indexáveis (preservam os 301 e a autoridade), mas com títulos/descriptions reposicionados para "ensaios de retrato em volume, no escritório do cliente, com equipe" e nota editorial apontando o ensaio autoral individual para `www.alefotografo.com.br`.
- Menu, rodapé e blocos de links internos reordenados com evento/feira/congresso no topo.

### 3. Espelho editorial do site irmão
- Adicionar `SINGLE_SITE_ORIGIN = https://www.alefotografo.com.br` no `seo.ts` de lá e uma nota tipo `teamSiteNote` invertida nas páginas de retrato.
- Reescrever `public/llms.txt` do plural declarando o escopo dele e a regra prática (equipe/evento → plural; um fotógrafo/retrato → singular).

### 4. Dados estruturados
- Trocar o schema de `Person` para `Organization`/`LocalBusiness` com `employee`, `founder: Alexandre Machado` e `knowsAbout` de eventos.
- `sameAs` cruzado com `www.alefotografo.com.br` (nunca canonical cruzada).

### 5. FAQ e blog sem sobreposição
- FAQ do plural com perguntas de evento: número de fotógrafos, cobertura simultânea, prévia durante o evento, credenciamento, viagem, relatório para patrocinador.
- Blog do plural com pauta de evento/feira/congresso; nenhum post repetido entre os domínios.

### 6. Verificação final
- Varredura comparando título, H1, description e primeiro parágrafo das duas propriedades, listando qualquer trecho ainda idêntico.
- Confirmar canônicas auto-referentes em cada domínio.
- Reenviar sitemap do plural no Search Console e acompanhar as duas propriedades separadamente.

## Detalhes técnicos
- Nenhuma página é deletada em nenhum dos lados; o rebaixamento é só de prioridade interna e de intenção de rankeamento.
- Nenhum redirect cross-domain, em nenhuma direção.
- A origem canônica de cada projeto permanece a do seu próprio domínio.

## Ordem sugerida
1. Home + sobre + catalog (posicionamento plural).
2. Metas das páginas de evento (pilares) e das de retrato (rebaixadas com nota cruzada).
3. llms.txt + schema Organization + FAQ.
4. Varredura de duplicidade e relatório comparativo.
