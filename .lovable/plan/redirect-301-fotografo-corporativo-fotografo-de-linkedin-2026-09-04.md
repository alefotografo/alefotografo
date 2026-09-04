# Redirect 301: /fotografo-corporativo/fotografo-de-linkedin

## Objetivo
Adicionar um redirecionamento permanente (301) no nível do servidor para que qualquer acesso a `/fotografo-corporativo/fotografo-de-linkedin` seja imediatamente redirecionado para `/foto-profissional-para-linkedin`, sem alterar conteúdo de página ou outras rotas.

## Como o projeto já faz redirects
O entrypoint do Worker em `src/server.ts` executa `redirectLegacy(request)` antes de entregar a requisição ao SSR. Essa função usa `resolveLegacyPath()` exportado por `src/lib/legacy-redirects.ts`, que consulta um mapa `EXACT` de path → path destino e devolve 301 quando encontra correspondência.

## Passos
1. Em `src/lib/legacy-redirects.ts`, adicionar ao objeto `EXACT`:
   ```text
   "/fotografo-corporativo/fotografo-de-linkedin": "/foto-profissional-para-linkedin",
   ```
2. Verificar localmente com `curl -I` que a rota antiga responde `HTTP/1.1 301 Moved Permanently` e header `location` apontando para `/foto-profissional-para-linkedin`.
3. Rodar typecheck (`bunx tsgo --noEmit`) para garantir que nada quebrou.

## Fora de escopo
- Nenhuma mudança em conteúdo de páginas, schema, metadados ou outras rotas.
- Nenhuma alteração em `src/server.ts`, pois o mecanismo de 301 já está centralizado em `resolveLegacyPath`.
