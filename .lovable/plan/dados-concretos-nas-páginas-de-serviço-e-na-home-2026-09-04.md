# Dados concretos nas páginas de serviço e na home

Objetivo: substituir texto genérico por números reais e verificáveis, visíveis para leitores e legíveis por mecanismos de IA.

## Números confirmados por você (únicos que serão publicados)

| Dado | Como aparece |
| --- | --- |
| Executivos fotografados | mais de 300 executivos fotografados em São Paulo |
| Empresas atendidas | mais de 200 empresas atendidas |
| Entrega de retratos | fotos tratadas em 1 dia útil |
| Entrega de eventos | seleção entregue no mesmo dia do evento |
| Experiência | 30 anos de carreira (já publicado no site) |
| Reputação | nota 4,9 com 144 avaliações (já publicado, vem de `src/data/reviews.ts`) |

Nada de recorrência/recompra: você não tem esse dado, então não entra em lugar nenhum. Nenhum número novo será inventado ou estimado.

## O que será feito

1. **Fonte única de dados** — um arquivo `src/data/stats.ts` com esses números e o texto de cada um. Assim, quando o volume mudar, você altera em um lugar e o site inteiro acompanha.
2. **Faixa de dados na home** — bloco curto com quatro indicadores (300+ executivos, 200+ empresas, entrega em 1 dia útil, 30 anos), logo após a área principal, no estilo visual atual do site.
3. **Faixa de dados nas páginas de serviço** — mesmo bloco, com o prazo ajustado ao serviço: retrato/LinkedIn/executiva/advogados/clínicas/médicos usam "1 dia útil"; eventos e feira de negócios usam "seleção no mesmo dia".
4. **Primeiro parágrafo com dado concreto** — nas páginas de serviço, o texto de abertura passa a citar o volume e o prazo em frase natural (o que os motores de IA extraem como resposta), sem reescrever a página toda.
5. **FAQ de prazo** — a resposta sobre prazo em `src/lib/faqs.ts` passa a dizer "1 dia útil" em vez de "1 a 3 dias úteis", alinhada ao que você cumpre. Confirme se quer isso; se preferir manter a folga de 3 dias, digo na faixa "1 dia útil" e mantenho a FAQ como está.
6. **`llms.txt`** — acrescentar os mesmos números ao resumo que os robôs de IA leem.

## Detalhes técnicos

- Novo `src/data/stats.ts` exporta `businessStats` (rótulo, valor, contexto) e helpers de prazo por tipo de serviço.
- Novo `src/components/site/StatsBand.tsx`, usando tokens de cor/tipografia existentes (sem cores fixas), renderizado como `<dl>` semântico para leitura por máquina.
- Inserção em `src/routes/index.tsx` e nas 9 páginas de serviço (via `ServicePage.tsx` quando o componente já centraliza o layout, caso contrário rota por rota).
- Textos de abertura ajustados em `src/data/categorySeo.ts` / `categoryEditorial.ts` onde o copy vive em dados.
- Nenhum `AggregateRating` novo: reputação continua vindo de `src/data/reviews.ts`.
- Verificação: `bunx tsgo --noEmit` e leitura do HTML renderizado da home e de duas páginas de serviço.
