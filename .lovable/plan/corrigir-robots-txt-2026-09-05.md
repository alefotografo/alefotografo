# Corrigir robots.txt

## O que será feito
Substituir a diretiva inválida `LLMs: https://www.alefotografo.com.br/llms.txt` no arquivo `/public/robots.txt` por um comentário válido.

## Mudança exata
- **Arquivo:** `public/robots.txt`
- **Linha atual (34):** `LLMs: https://www.alefotografo.com.br/llms.txt`
- **Nova linha:** `# For AI/LLM reference: https://www.alefotografo.com.br/llms.txt`

## O que será preservado
Todas as demais diretivas permanecem inalteradas:
- `User-agent: *` com `Allow: /` e `Disallow: /auth`, `/admin`
- Todos os blocos específicos de bots de IA (GPTBot, ClaudeBot, etc.)
- `Sitemap: https://www.alefotografo.com.br/sitemap-index.xml`

## Validação
Após a edição, o robots.txt terá apenas comentários e diretivas válidas, eliminando o erro de validação do SEO audit.
