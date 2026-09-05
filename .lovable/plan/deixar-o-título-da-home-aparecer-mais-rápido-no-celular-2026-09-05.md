# Deixar o título da home aparecer mais rápido no celular

## O que a medição mostrou

Medi a home publicada simulando um celular em rede lenta (4G fraco, processador 4x mais devagar):

- O texto da página (o título grande) só aparece em **1,98 s**.
- O conteúdo em texto chega do servidor em **0,69 s** — ou seja, o texto está pronto muito antes, mas fica invisível esperando outras coisas.
- O que atrasa a pintura: o **arquivo de estilos**, que só começa a baixar em 1,04 s e termina em 1,81 s, e as **três fontes** de letra, que terminam entre 1,73 s e 1,78 s.
- O arquivo grande de programação (512 KB) só termina em **4,2 s**, bem depois do título já ter aparecido em 1,98 s. Ele **não é** o que está segurando o título.

Conclusão honesta: a divisão do arquivo de programação em pedaços menores (o que você pediu) melhora a interatividade e a nota geral, mas **não muda o tempo do título**. Quem segura o título são os estilos, as fontes e a briga por banda com a foto de capa.

## O que eu faria, em ordem de impacto

1. **Fontes deixam de bloquear o texto.** Hoje o navegador espera as fontes baixarem antes de mostrar o título. Vou fazer o texto aparecer imediatamente com a fonte do sistema e trocar pela fonte definitiva quando ela chegar, escolhendo uma fonte de reserva com medidas parecidas para não haver "salto" perceptível. Também reduzo de três para as fontes realmente usadas no primeiro trecho visível, adiando as outras.
   Ganho estimado: título visível em torno de 1,1–1,3 s.

2. **Estilos essenciais embutidos na própria página.** O pouco de estilo necessário para a primeira tela vai dentro do próprio arquivo da página, e o resto continua vindo em arquivo separado, sem travar a pintura. Isso remove a espera de 0,77 s do arquivo de estilos.

3. **Foto de capa mais leve no celular.** Hoje o celular baixa a versão maior (1217 px, 39 KB) porque a regra de tamanho diz "largura toda da tela". Vou corrigir essa regra para o celular pegar a versão de 480/720 px, liberando banda para os estilos e as fontes chegarem antes.

4. **Divisão do arquivo de programação em pedaços menores** (o que você pediu): separar as partes que só são usadas em páginas específicas das partes comuns, para o celular baixar e processar menos no começo. Isso melhora a nota de interatividade e o tempo total, sem risco visual.

5. **Medir de novo** no mesmo cenário de celular, antes e depois, e te mostrar os números.

Nada disso muda o que aparece na tela: mesmas cores, mesma tipografia final, mesmo layout.

## Detalhes técnicos

- `src/styles.css`: substituir os seis `@import "@fontsource/..."` por `@font-face` próprios com `font-display: swap`, `unicode-range` latino e métricas de fallback (`size-adjust`, `ascent-override`) para CLS ~0. Manter os arquivos `.woff2` vindos do pacote via `?url`.
- `src/routes/__root.tsx`: manter apenas os preloads das fontes de fato usadas acima da dobra (Space Grotesk 600 e DM Sans 400); remover o preload de DM Sans 500.
- CSS crítico: extrair as regras da primeira tela e injetá-las como `<style>` no `head()` do `__root`, mantendo o `<link rel="stylesheet">` do bundle (React já o emite com `data-precedence`).
- `src/data/homeCuration.ts`: `heroPhoto.sizes` de `"(max-width: 768px) 100vw, 40vw"` para algo como `"(max-width: 768px) 60vw, 40vw"` (ou fixar `imageSizes` do preload), para o DPR 3 não escalar até a variante 1217.
- `vite.config.ts`: passar `vite: { build: { rollupOptions: { output: { manualChunks } } } }` pelo `defineConfig` do `@lovable.dev/vite-tanstack-config` (não adicionar plugins), agrupando `react`/`react-dom`, `@tanstack/*`, Radix UI e `lucide-react` em chunks separados dos dados do catálogo.
- Verificação: script Playwright em `/tmp/browser/lcp/` com viewport 390x844, DPR 3, throttling 4G + CPU 4x, comparando FCP/LCP e a lista de recursos antes/depois; typecheck com `bunx tsgo --noEmit`; publicar e repetir a medição no domínio ao vivo.
