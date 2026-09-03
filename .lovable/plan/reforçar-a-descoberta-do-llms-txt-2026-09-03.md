# Reforçar a descoberta do llms.txt

## O que já está validado (preview local)

- `/llms.txt` responde 200, `text/plain`, 2.722 bytes, conteúdo completo.
- A tag `<link rel="llms.txt" href="/llms.txt" type="text/plain">` aparece no head de todas as rotas (vem do `head()` do `__root.tsx`).
- `public/robots.txt` libera os bots de IA (GPTBot, ClaudeBot, PerplexityBot, CCBot, etc.) mas não menciona o `llms.txt`.

## Mudança

Adicionar ao final de `public/robots.txt`, junto da linha `Sitemap:`:

```text
# Resumo do site para agentes de IA
LLMs: https://www.alefotografo.com.br/llms.txt
```

Nada mais é alterado: os blocos `User-agent`, os `Disallow: /auth` e `/admin` e o `Sitemap:` permanecem exatamente como estão.

## Verificação

1. Conferir `robots.txt` e `llms.txt` no preview local (status, tipo e conteúdo).
2. Publicar.
3. Verificar em `https://www.alefotografo.com.br/llms.txt` e `https://www.alefotografo.com.br/robots.txt` que ambos retornam 200 com o conteúdo esperado, e que a tag no head aparece na home e em uma página de blog do domínio publicado.

## Nota

`LLMs:` não é uma diretiva oficial do padrão robots.txt — crawlers a ignoram sem erro, e alguns agentes de IA já a leem. É aditiva e sem risco para o rastreamento existente.
