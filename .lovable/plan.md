# Corrigir as galerias fora do tema em /fotografia-para-clinicas

Abri a página e localizei de onde vêm as imagens que não têm nada a ver com saúde:

1. **Faixa "Siga no Instagram" (rodapé, aparece em todo o site)** — hoje ela usa capas de culinária, fotos aéreas, arquitetura de interiores e banco de imagens para escolas. É por isso que, dentro de uma página de clínicas, aparecem fotos de comida e imagens aéreas.
2. **Dobra "Exemplos por segmento da saúde"** — tem 6 cartões, mas o site só possui 5 galerias de saúde. "Hospitais e operadoras" e "Consultórios individuais" apontam para a mesma galeria ("Retratos de médicos"), o que gera repetição de foto e de link.

## O que vou corrigir

**Faixa do Instagram no rodapé (todo o site)**
Trocar a curadoria das 8 miniaturas por capas coerentes com o posicionamento corporativo: retrato corporativo, retratos executivos, eventos corporativos, fotografia corporativa em SP, fotografia institucional, industrial, clínicas médicas e grupos/equipes. Saem culinária, fotos aéreas, arquitetura/interiores e escolas.

**Dobra "Exemplos por segmento da saúde"**
- Reduzir para 5 cartões, um por galeria de saúde real, sem link nem capa repetida:
  - Clínicas médicas e centros diagnósticos → Fotos para clínicas médicas
  - Odontologia → Ensaio fotográfico para dentistas
  - Estética e dermatologia → Retratos de médicas
  - Psicologia, nutrição e terapias → Fotos profissionais para médicos
  - Hospitais e operadoras → Retratos de médicos
- O conteúdo de "Consultórios individuais" (meia diária, formato enxuto) passa a ser incorporado ao texto do cartão de clínicas, para não perder a informação comercial.

## O que NÃO muda

- Nenhuma URL, canonical, título, meta description, sitemap, domínio ou DNS.
- Nenhuma galeria é excluída do site; apenas deixam de ser exibidas nessa faixa/dobra.
- Layout, cores e tipografia permanecem iguais.

## Detalhes técnicos

- `src/components/site/Footer.tsx`: substituir a lista `INSTAGRAM_SLUGS` pelos slugs corporativos/saúde. Cada slug será validado contra `src/data/catalog.json` antes da edição, para não gerar tile vazio.
- `src/routes/fotografia-para-clinicas.tsx`: ajustar o array `segmentos` (5 itens, slugs únicos).
- Verificação: `bunx tsgo --noEmit`, mais abertura de `/fotografia-para-clinicas` no preview conferindo que nenhum link de galeria fora do tema aparece na página e que as 5 capas de saúde carregam.
