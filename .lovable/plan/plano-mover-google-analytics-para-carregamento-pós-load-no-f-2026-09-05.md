# Plano: mover Google Analytics para carregamento pós-load no final do body

## O que será feito

1. **Atualizar `src/components/site/DeferredAnalytics.tsx`**
   - Substituir o mecanismo atual (`requestIdleCallback` + eventos de interação) por um único listener `window.addEventListener('load', ...)`.
   - Manter o ID `G-5TV6CEKT2G` e a lógica de inicialização do `dataLayer`/`gtag`.
   - Continuar inserindo o script do gtag.js via `document.head.appendChild(s)` com `s.async = true`, conforme o padrão solicitado.
   - Manter o componente renderizado no final de `RootComponent` (já está depois de `<Footer />` e `<WhatsappCta />`), garantindo que o script inline apareça próximo ao fechamento do `<body>`.

2. **Verificar `src/routes/__root.tsx` e rotas**
   - Confirmar que não existe tag `<script src="https://www.googletagmanager.com/...">` no `<head>`.
   - Auditar todos os `scripts:` das rotas para garantir que nenhum outro script externo seja injetado no `<head>` sem `defer` ou `async`. Atualmente todos são `application/ld+json` (schemas), sem scripts externos.

3. **Validar o HTML gerado**
   - Rodar typecheck.
   - Fazer `curl` na home local e verificar que:
     - Não há script do Google Analytics no `<head>`.
     - O script inline do GA aparece no final do `<body>`.
     - O `<head>` não contém outros scripts externos sem `defer`/`async`.

## Resultado esperado

- O navegador só inicia o download do `gtag.js` após o evento `load` da página, removendo qualquer competição com a renderização inicial.
- O HTML final reflete o padrão solicitado: nenhum script GA no `<head>`, script inline no final do `<body>`.
