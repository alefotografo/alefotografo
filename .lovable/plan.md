# Plano: corrigir canonical de /fotografo-corporativo

## Objetivo
Na rota `/fotografo-corporativo` apenas, alterar o `href` da tag `<link rel="canonical">` para `https://alefotografo.com.br/fotografo-corporativo` (self-referencing sem www).

## Estado atual
- Arquivo: `src/routes/fotografo-corporativo.index.tsx`.
- A canonical atual é `https://www.alefotografo.com.br/fotografo-corporativo`.
- Nenhuma outra página será alterada.

## Mudança
1. Em `src/routes/fotografo-corporativo.index.tsx`, linha 14, trocar:
   ```tsx
   links: [{ rel: "canonical", href: "https://www.alefotografo.com.br/fotografo-corporativo" }],
   ```
   por:
   ```tsx
   links: [{ rel: "canonical", href: "https://alefotografo.com.br/fotografo-corporativo" }],
   ```

## Verificação
- Typecheck com `bunx tsgo --noEmit`.
- `curl -sI http://localhost:8080/fotografo-corporativo` deve retornar `link: <https://alefotografo.com.br/fotografo-corporativo>; rel="canonical"` no HTML renderizado.
