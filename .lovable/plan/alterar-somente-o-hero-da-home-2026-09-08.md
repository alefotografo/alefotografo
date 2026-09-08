# Alterar somente o Hero da Home

## Arquivo

`src/components/site/home/HomeHeroNovo.tsx`

## Mudanças

1. **H1**: trocar para "Fotógrafo profissional e fotógrafo corporativo em São Paulo".
2. **Texto**: trocar para "Fotografia e produção audiovisual para empresas, executivos e profissionais. Nossa equipe realiza fotografia corporativa, retratos profissionais, eventos, banco de imagens e vídeos para empresas em São Paulo e região.".
3. **CTAs**:
   - Primário: "Solicitar orçamento" (WhatsApp, usando `waLink(WA_DEFAULT)`).
   - Secundário: "Ver portfólio" (link interno para `/fotografo-corporativo`).
   - Remover o botão "Ver o que sua empresa precisa produzir".
4. **Indicadores compactos**: usar números reais de `src/data/stats.ts`:
   - 30+ anos de experiência (de `experienceStat`, adaptando o rótulo).
   - 200+ empresas atendidas (de `companiesStat`).
   - 4,9 no Google (de `ratingStat`).
5. **Frase de abertura**: remover ou simplificar a linha atual "Alexandre Machado · Fotógrafo corporativo em São Paulo · desde 1991", mantendo o rótulo superior só se for enxuto. O H1 já cobre os termos SEO.
6. **Enquadramento responsivo**: ajustar se necessário para que o texto + CTAs + indicadores não fiquem sobre a área cortada da foto. A imagem não será trocada; se uma única imagem não funcionar bem nos três tamanhos, informo no relatório.

## O que não muda

- Nenhuma outra seção da Home.
- Nenhum outro arquivo.
- Nenhuma URL, slug, route, title, meta description, canonical, schema.
- A imagem do hero (mesma src, width, height, alt, srcSet, loading eager).
- Nenhuma dependência nova.
