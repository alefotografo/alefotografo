# O blog não está vazio — 155 artigos estão no ar agora

## Verificado ao vivo, agora (produção)

| Checagem | Resultado |
|---|---|
| `https://www.alefotografo.com.br/blog` | 200, com **155 links de artigo** distintos |
| `https://www.alefotografo.com.br/blog/fotografo-de-retrato-corporativo` | **200** |
| `sitemap.xml` publicado | **317 URLs** |
| Revisão SEO da plataforma | nenhum achado em aberto |

O relatório está certo sobre o sintoma, mas leu o site na janela errada. Havia de fato um período em que `/blog` aparecia sem nenhum artigo e todo `/blog/<slug>` respondia 404 — foi a regressão de relógio no runtime de edge que diagnostiquei e corrigi mais cedo hoje, e que o seu publish acabou de levar ao ar. Neste momento os 155 artigos publicados estão acessíveis, mais 28 já escritos e agendados para as próximas semanas.

Então não há "publicar 1 artigo por semana" a começar do zero: a cadência já existe e está abastecida até o fim de setembro.

## O que é problema de verdade depois do apagão

Durante a janela em que as URLs deram 404, o Google pode ter rebaixado ou removido artigos que já estavam indexados. Isso não se resolve escrevendo mais conteúdo — se resolve confirmando o retorno ao índice.

### 1. Conferir o estado no índice das URLs do blog
Ler no Search Console o estado de um conjunto representativo (o hub `/blog`, os 3 artigos mais antigos e com mais impressões, e os 3 publicados esta semana), reportando para cada um: estado de cobertura, data do último rastreio e canônica escolhida. Assim sabemos se o 404 deixou marca ou se o Google nem passou por ali durante a janela.

### 2. Reenviar o sitemap e registrar o resultado
Reenviar `sitemap-index.xml` na propriedade do domínio para acelerar o re-rastreio das 317 URLs e conferir o processamento (0 erros). Solicitar indexação individual continua sendo clique manual seu no Search Console — a API só lê o índice, não pede rastreio; eu indico exatamente quais URLs valem esse clique.

### 3. Corrigir o feed RSS, que responde 404
`https://www.alefotografo.com.br/blog.rss.xml` retorna **404** (também na build local, então não é efeito do apagão). O arquivo `src/routes/blog.rss[.]xml.ts` existe mas o caminho não resolve. Um feed vivo é justamente um dos canais que agregadores e motores de IA usam para descobrir publicação nova — vale consertar antes de escrever mais artigo.

### 4. Um artigo que realmente falta
Dos temas que o relatório cita, quase todos já existem: preço (`quanto-custa-sessao-fotos-corporativas-sao-paulo`), roupa (`dress-code-corporativo-o-que-vestir-numa-sessao-de-fotos-profissionais`), preparação (`como-se-preparar-para-ensaio-fotografico-corporativo`), headshot em escala (`headshots-equipe-escala-50-colaboradores-um-dia`).

O que **não** existe é a comparação direta que o próprio relatório sugere: **retrato executivo x foto de crachá**. É uma busca comparativa, com intenção clara e resposta objetiva — bom formato para citação por IA. Escrevo 1 artigo novo com resposta direta nas primeiras 60 palavras, uma tabela de comparação (luz, enquadramento, direção de pose, fundo, uso final), links para `/fotografia-executiva` e `/contato`, e agendado na sequência do calendário atual, sem furar a fila dos 28 já agendados.

## O que eu não vou fazer

- Não vou reescrever nem redatar em massa os 155 artigos existentes.
- Não vou inventar estudo de caso com cliente: isso exige nome, números e autorização — se você quiser um, me passe os dados e eu escrevo.
- Não vou mexer em slug, canonical ou data de artigo já publicado.

## Detalhes técnicos

- Artigos vivem em `src/data/catalog.json` (183 registros; 155 publicados, 28 com data futura), com gate por data em `src/lib/postDate.ts` — agora avaliado por requisição, com falha aberta se o relógio do runtime não for confiável.
- O RSS será investigado a partir do nome do arquivo de rota e do `createFileRoute` declarado; nada de rota nova duplicando o caminho.
- Ao final: `bunx tsgo --noEmit`, conferência do feed em 200 com `application/xml`, e do artigo novo renderizando com a resposta curta no topo.
