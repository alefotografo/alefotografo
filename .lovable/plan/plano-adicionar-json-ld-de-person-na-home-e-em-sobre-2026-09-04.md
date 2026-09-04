# Plano: adicionar JSON-LD de Person na home e em /sobre

## Objetivo
Inserir o bloco `application/ld+json` de `Person` no `<head>` apenas da homepage (`/`) e da página `/sobre`, sem alterar nenhum conteúdo visível.

## Estado atual
- `src/routes/index.tsx` já tem `head().scripts` com um `FAQPage`.
- `src/routes/sobre.tsx` já tem `head().scripts` com um `AboutPage` cujo `mainEntity` é uma `Person`.
- O `__root.tsx` publica globalmente um nó `Person` em `@graph`, mas o usuário solicitou um bloco adicional específico nessas duas páginas.

## Mudança proposta
1. Em `src/routes/index.tsx`, adicionar ao array `head().scripts` um segundo objeto `application/ld+json` com o bloco solicitado.
2. Em `src/routes/sobre.tsx`, adicionar ao array `head().scripts` um segundo objeto `application/ld+json` com o mesmo bloco.
3. O bloco terá a estrutura exata fornecida:
   - `@context`: `"https://schema.org"`
   - `@type`: `"Person"`
   - `name`: `"Alexandre Machado"`
   - `alternateName`: `"Alê Fotógrafo"`
   - `jobTitle`: `"Fotógrafo Corporativo"`
   - `worksFor`: organização com `name` `"Alê Fotógrafo Corporativo"` e `url` `"https://alefotografo.com.br"`
   - `url`: `"https://alefotografo.com.br"`
   - `sameAs`: Instagram e LinkedIn

## Decisão a confirmar
O `sameAs` de LinkedIn fornecido é `https://www.linkedin.com/in/alexandremachado`, mas o projeto usa `https://www.linkedin.com/in/alefotografo` (em `site.linkedin`). Vou usar a URL real do site para evitar link quebrado, a menos que você confirme que `alexandremachado` é o perfil correto.

## Verificação
- Typecheck com `bunx tsgo --noEmit`.
- `curl -s http://localhost:8080/ | rg -o '<script type="application/ld\+json">[^<]*"@type":"Person"[^<]*</script>'`
- `curl -s http://localhost:8080/sobre | rg -o '<script type="application/ld\+json">[^<]*"@type":"Person"[^<]*</script>'`
- Confirmar que outras páginas não receberam o novo bloco (ex.: `/fotografo-corporativo`).
