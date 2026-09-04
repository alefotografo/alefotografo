# Canonical das páginas de serviço: já está correto

Verifiquei o site agora, tanto na prévia quanto no domínio publicado. O canonical de `/fotografo-corporativo` é:

```text
<link rel="canonical" href="https://www.alefotografo.com.br/fotografo-corporativo"/>
```

Ou seja, aponta para ela mesma, não para a home. O único canonical que aponta para a home é o da própria home (`https://www.alefotografo.com.br/`), que é o comportamento correto.

O item da auditoria está desatualizado — esse problema foi corrigido quando o site passou a gerar o canonical por rota. Também não existe template global sobrescrevendo canonical: cada rota declara o seu, e a raiz do site (`__root`) não declara nenhum, justamente para não duplicar.

## Estado das rotas

Conferi todas as rotas do site. Todas as páginas indexáveis têm canonical próprio:

- Home, serviços (corporativo, executiva, LinkedIn, empresarial, fotos corporativas, médicos, advogados, clínicas, eventos, feiras), sobre, quem é o Alê, depoimentos, FAQ, contato, serviços, blog e artigos, vídeos, hub por bairro e as 33 páginas de bairro, categorias de portfólio.
- `/portfolio/{slug}` e `/fotografo-corporativo/categoria/{slug}` não têm canonical porque são redirecionamentos 301 para a URL definitiva — correto assim.
- `/auth` e `/busca` não têm canonical, mas já estão marcadas como `noindex`.

## Único ajuste que faz sentido

Adicionar canonical autorreferente em `/busca` (`https://www.alefotografo.com.br/busca`). Ela é `noindex, follow`, então o impacto é praticamente nulo, mas fecha a última rota pública sem canonical e evita que uma auditoria futura reabra o mesmo alerta. Nenhuma outra alteração é necessária.

## Detalhes técnicos

- `src/lib/seo.ts` gera `og:url` absoluto por rota; o canonical fica no `links` de cada arquivo de rota (leaf), nunca em `__root.tsx`, para não emitir dois canonicals.
- Ajuste proposto: uma linha `links: [{ rel: "canonical", href: "https://www.alefotografo.com.br/busca" }]` em `src/routes/busca.tsx`.
- Nenhum slug ou URL existente é alterado.
