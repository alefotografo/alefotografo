# Faixa de clientes + cards de soluções

## FaixaClientes
- Trocar a frase "Empresas que já produziram comigo" por "Empresas que confiam em nosso trabalho".
- Nada mais muda. Observação: hoje esse bloco lista os clientes em texto, não há arquivos de logo — nada será removido, apenas a frase muda.

## SolucoesEmpresa
- Título da seção: "Soluções em fotografia e vídeo para empresas".
- Substituir os 6 cards atuais (que hoje trazem uma lista de "dores" e outra de "soluções") por 6 cards com um único parágrafo descritivo, eliminando toda linguagem de dor. O JSX perde as duas listas e o divisor; imagem, título e link permanecem.
- Novos cards, na ordem pedida, com destino e foto:

```text
1 Banco de Imagens Corporativo -> link atual banco-de-imagens-para-empresas (foto atual mantida)
2 Fotografia Corporativa       -> link atual fotografia-institucional-em-saopaulo (foto atual mantida)
3 Retratos Profissionais       -> /foto-profissional (página já existente)
4 Eventos Corporativos         -> link atual /eventos-corporativos (foto atual mantida)
5 Vídeos Corporativos          -> /videos (página já existente)
6 Fotografia Industrial        -> link atual fotografia-industrial (foto atual mantida)
```

- Cards 3 e 5 são novos: reaproveitam as duas fotos que ficam livres (a de retrato de equipe e a aérea), sem baixar, criar ou duplicar nenhuma imagem, mantendo o alt de origem.
- O card "Imagem Aérea com Drone" deixa de existir na lista pedida; seu link para a galeria de fotos aéreas sai da home. Se preferir mantê-lo, avise antes da execução.
- Textos dos cards exatamente como enviados.

## Arquivos
- src/components/site/home/FaixaClientes.tsx
- src/components/site/home/SolucoesEmpresa.tsx

Nada fora desses dois arquivos é tocado: rotas, títulos, meta, sitemap, robots, schemas e demais seções ficam intactos.
