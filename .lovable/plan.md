# Ajuste visual — Home / Retratos Profissionais (dois retratos)

## Escopo
Alterar somente `src/components/site/home/RetratoProfissional.tsx`. Hoje a seção tem UMA foto (retrato masculino). Passa a ter DUAS: mulher e homem, lado a lado no desktop, empilhadas no mobile.

## Imagens (reais, já existentes no projeto)
- MULHER: capa da galeria `/fotografo-corporativo/ensaio-feminino`
  `https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/129397/foto-de-perfil-profissional-feminino_mila-rodrigues-da-silva-4.jpg`
- HOMEM: a foto que JÁ está na seção hoje (retrato corporativo Hélio Martins Borges Filho)
  `https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/66874/retrato-corporativo_helio-martins-borges-filho-4.jpg`
- Src reutilizado exatamente como está no acervo; sem mover, renomear, duplicar ou gerar imagem.

## Layout
- Coluna de imagem (`lg:col-span-1`) vira um grid de 2 colunas no desktop (`grid-cols-2`), 1 coluna no mobile (empilha), gap 24px.
- Cada retrato em `aspect-ratio 3/4` (vertical, enquadramento de retrato), `object-cover` com `object-position: top` para não cortar rostos.
- As duas imagens com `SmartImage` (mesmo padrão atual), `loading="lazy"`, `decoding="async"`, width/height explícitos, sizes ajustado.
- Texto, H3, box da Paulista, CTA e restante da seção: intocados.

## Não será alterado
H2/título da seção (h3 "Retratos profissionais"), texto, CTAs, links, TITLE/META/H1/canonical/schema, nenhuma outra seção da Home, nenhum outro arquivo.

## Validação
Typecheck + screenshot desktop (duas imagens lado a lado) e mobile 390px (empilhadas, rostos visíveis).
