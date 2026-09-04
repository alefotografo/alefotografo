# Injetar BreadcrumbList no `<head>` das páginas geográficas e de `/fotografo-corporativo`

## Objetivo
Adicionar um bloco `application/ld+json` do tipo `BreadcrumbList` no `<head>` de:
- Todas as páginas de bairro: `/fotografo-corporativo-em/{bairro}`
- A página de segmentos: `/fotografo-corporativo`

Os URLs usam o domínio canônico do site: `https://www.alefotografo.com.br`.

## Escopo
- Alterar apenas `head().scripts` nas rotas afetadas.
- Não alterar conteúdo visível, título, description, canonical ou outras tags.
- Não remover o schema `BreadcrumbList` já existente no corpo da página (emitido pelo componente `<Breadcrumbs />`). Isso significa que cada página terá duas marcações idênticas: uma no `<head>` e outra no `<body>`. Se quiser evitar duplicação, podemos remover a do corpo em outro passo.

## Implementação

### 1. Criar helper em `src/lib/seo.ts`
Adicionar uma função `buildBreadcrumbList(items)` que receba um array de `{ name, item }` e retorne o objeto JSON-LD pronto para usar em `head().scripts`:

```ts
export function buildBreadcrumbList(
  items: Array<{ name: string; item: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.item,
    })),
  };
}
```

### 2. Atualizar `src/routes/fotografo-corporativo-em.$bairro.tsx`
Dentro de `head()`, adicionar um novo objeto em `scripts` com o BreadcrumbList dinâmico usando `loaderData` e `params`:

- Item 1: `Fotógrafo Corporativo São Paulo` → `https://www.alefotografo.com.br/fotografo-corporativo`
- Item 2: `Fotógrafo Corporativo em {loaderData.nome}` → `https://www.alefotografo.com.br/fotografo-corporativo-em/{params.bairro}`

Exemplo do script resultante para a página de `itaim-bibi`:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Fotógrafo Corporativo São Paulo",
      "item": "https://www.alefotografo.com.br/fotografo-corporativo"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Fotógrafo Corporativo em Itaim Bibi",
      "item": "https://www.alefotografo.com.br/fotografo-corporativo-em/itaim-bibi"
    }
  ]
}
```

### 3. Atualizar `src/routes/fotografo-corporativo.index.tsx`
Dentro de `head()`, adicionar um novo objeto em `scripts` com o BreadcrumbList de um único item apontando para a própria página:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Fotógrafo Corporativo São Paulo",
      "item": "https://www.alefotografo.com.br/fotografo-corporativo"
    }
  ]
}
```

## Validação
- Rodar `bunx tsgo --noEmit` para garantir que não há erros de tipo.
- Verificar com `curl` em uma página de bairro e em `/fotografo-corporativo` que o `<script type="application/ld+json">` com `BreadcrumbList` aparece no `<head>` e contém os valores corretos.

## Fora de escopo
- Não alterar nenhuma outra rota.
- Não alterar o conteúdo das páginas.
- Não criar ou alterar URLs, slugs ou canonicals.
- Não publicar o site (publicação será feita sob demanda).
