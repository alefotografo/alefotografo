# Ajuste visual — Home / Retratos Profissionais (par executivo)

## Estado atual
A seção já exibe 2 retratos lado a lado (Mila + Hélio), mas o retrato masculino atual (jaleco, consultório, livros de acupuntura) lê como médico, não executivo, e a foto feminina é um close muito apertado. Troca cirúrgica das DUAS imagens por um par executivo coeso.

## Escopo
Somente `src/components/site/home/RetratoProfissional.tsx` — trocar os dois itens do array `FOTOS` (src e alt). Layout, H3, texto, box da Paulista, CTA: intocados.

## Imagens escolhidas (reais, já no acervo)
- MULHER: `foto-de-perfil-profissional-feminino_renata-marques-26.jpg` (galeria `/fotografo-corporativo/ensaio-feminino`)
  URL: https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/129397/foto-de-perfil-profissional-feminino_renata-marques-26.jpg
  Vertical, executiva, sorriso, luz suave, enquadramento meio-corpo — casa com o 3/4 do container.
  Alt: "Retrato profissional de mulher executiva em ambiente corporativo"
- HOMEM: `fotografia-de-retrato-profissional-em-sao-paulo_gustavo-pereira-13.jpg` (galeria `/fotografo-corporativo/fotografo-de-retratos-corporativos`)
  URL: https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/90047/fotografia-de-retrato-profissional-em-sao-paulo_gustavo-pereira-13.jpg
  Vertical, terno, estúdio, boa expressão — mesmo peso visual da foto feminina.
  Alt: "Retrato profissional de homem executivo em estúdio"

## Validação
Typecheck + screenshots desktop (lado a lado, mesmo peso) e mobile 390px (empilhadas, sem corte de rosto), sem erros de console.
