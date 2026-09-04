# Blocos de resposta direta nas páginas de serviço

Objetivo: cada página de serviço abre com um parágrafo autocontido de 40–60 palavras que responde "o que é este serviço e para quem", seguido de listas reais e uma tabela comparativa de formatos de sessão. Isso é o formato que motores de busca e assistentes de IA extraem.

## O que muda em cada página

10 páginas de serviço, em dois grupos:

- 6 usam o componente compartilhado (`fotografia-executiva`, `fotografo-empresarial`, `fotos-profissionais-medicos`, `fotografia-para-advogados`, `eventos-corporativos`, `fotografo-de-feira-de-negocios`): a mudança no componente atinge todas de uma vez.
- 4 têm layout próprio (`foto-profissional`, `fotos-corporativas`, `foto-profissional-para-linkedin`, `fotografia-para-clinicas`): recebem o mesmo bloco e a mesma tabela, editados um a um.

### 1. Bloco de resposta direta (40–60 palavras)

Novo campo obrigatório de conteúdo por página, escrito para responder na primeira frase:
"[Serviço] é ... . É indicado para ... . Atendimento em São Paulo, entrega em [prazo real]."

Renderizado logo abaixo do H1/faixa de dados, em destaque leve, antes da introdução atual. Nenhum texto existente é apagado: a introdução de marca continua, só deixa de ser a primeira coisa lida.

Cada bloco é contado palavra por palavra para ficar entre 40 e 60. Os fatos usados são só os já confirmados (30+ anos, 300+ executivos, 1 dia útil / mesmo dia, nota 4,9).

### 2. Listas reais em vez de texto corrido

"Para quem é" e "Onde usar as imagens" já são listas. O que ainda é parágrafo corrido e vira bullet:

- os benefícios descritos dentro dos blocos de entregáveis ganham uma frase-resumo curta em negrito seguida da explicação;
- nas 4 páginas próprias, os trechos de texto corrido que enumeram itens ("site, LinkedIn, propostas...") passam a `<ul>` de verdade.

### 3. Tabela comparativa de formatos

Tabela HTML semântica (`<table>` com `<thead>`/`<th scope>`), uma por página, com as colunas:

| Formato da sessão | Onde acontece | Duração | Entrega |
| --- | --- | --- | --- |

Linhas por página: retrato individual, retrato de equipe/diretoria, ambiente e operação, cobertura de evento — conforme o que aquele serviço realmente oferece.

Sobre preço: o site não publica valores em nenhum lugar (orçamento é fechado por WhatsApp), então **não** entra coluna de preço. Se você quiser publicar faixas ("a partir de R$ X"), me passe os números e eu acrescento a coluna e o `offers` no schema.

## Detalhes técnicos

- `ServicePageConfig` ganha `answerBlock: string` (obrigatório) e `formats: { formato: string; onde: string; duracao: string; entrega: string }[]`.
- `ServicePage.tsx`: novo parágrafo com `data-answer-block` entre a faixa de dados e `cfg.intro`; nova seção com a tabela antes de "Como funciona".
- Um componente novo `src/components/site/FormatsTable.tsx` (tabela responsiva com scroll horizontal no mobile) usado pelos dois grupos de páginas.
- `speakable` do FAQ já usa seletores; o bloco de resposta entra no `speakable` da página de serviço com `[data-answer-block]`, e o texto vai também para `description` do nó `Service` quando estiver mais preciso que o atual.
- Sem mudança de rotas, slugs ou títulos. Verificação: `bunx tsgo --noEmit` e leitura do HTML renderizado das 10 rotas conferindo contagem de palavras do bloco e presença da tabela.
