# Deixar a rolagem das fotos fluida

## O que medi

Simulei um celular rolando a página de fotos (com processador limitado, como um aparelho comum):

- Mais da metade dos quadros da tela demorou mais que o dobro do ideal — é isso que você sente como travadinha.
- O pior travamento foi de 0,7 segundo parado.
- Desligando o efeito de vidro fosco da barra de cima, o pior travamento caiu de 0,7 s para 0,3 s.

Ou seja: há duas causas somadas, e as duas são de aparência, não de conteúdo.

## O que causa

1. **Barra do topo com desfoque (vidro fosco).** Ela fica fixa e o navegador precisa recalcular o desfoque de tudo que passa atrás dela, em cada quadro da rolagem. É o efeito mais caro que existe numa barra fixa.
2. **Cada foto avisa a página quando termina de carregar.** Numa galeria com dezenas de fotos, isso gera dezenas de recálculos da página inteira durante a rolagem, justamente no momento em que ela precisa estar livre.
3. **Fotos aparecendo com transição de meio segundo e ampliando ao passar o mouse com "transição de tudo"**, o que faz o navegador vigiar propriedades que nem mudam.
4. **A galeria carrega 24 fotos de uma vez** quando você chega perto do fim, num único bloco — um pico de trabalho no meio da rolagem.

## O que vou fazer

1. Trocar o desfoque da barra do topo por um fundo sólido (mesma aparência escura, sem custo por quadro) — ou mantê-lo só quando a página está no topo, se você preferir o efeito.
2. Fazer a foto aparecer sem depender de aviso à página: a transição passa a ser só de aparência, sem recálculo. O caso de foto quebrada continua tratado.
3. Limitar as transições ao que realmente muda (opacidade e ampliação), reduzir a duração do surgimento e isolar cada foto para o navegador não repintar a galeria toda.
4. Carregar as fotos em lotes menores e um pouco mais cedo, para diluir o trabalho em vez de concentrar.
5. Repetir a mesma medição depois, no site publicado, e comparar antes/depois.

Nada muda no texto, nas fotos, nos endereços das páginas nem no que o Google lê.

## Detalhes técnicos

- `Header.tsx`: remover `backdrop-blur-xl` da barra `sticky` (fundo opaco) — foi a mudança com efeito medido isolado.
- `SmartImage.tsx`: eliminar o estado `loaded`/`useEffect` por render; usar `opacity` inicial via CSS + `onLoad` puro em classe (sem `setState`), mantendo `onError`/`fallback`.
- `Masonry.tsx` e grid de `fotografo-corporativo.index.tsx`: `transition-all` → `transition-[opacity,transform]`, adicionar `contain: content` / `content-visibility: auto` nos itens, reduzir `duration-500` para ~200 ms.
- `Masonry.tsx`: `STEP` de 24 → 12 e `rootMargin` 600px → 1200px.
- Medição: `/tmp/browser/scroll/measure.py` (390×844, CPU 4x, 60 passos de scroll), mediana de 3 rodadas, no build de produção.
