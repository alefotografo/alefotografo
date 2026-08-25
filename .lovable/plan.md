# Trocar galeria em /eventos-corporativos

Na dobra de exemplos e galerias relacionadas da página **Eventos corporativos**, substituir a galeria de **drinks e coquetéis** pela de **Totem fotográfico**.

## O que muda

- Sai: "Fotógrafo de drinks e coquetéis"
- Entra: "Totem fotográfico (Totem Mania)"
- As outras cinco galerias (eventos corporativos, eventos, feiras e stands, confraternização, grupos/times) permanecem na mesma ordem.

## Detalhe técnico

Em `src/routes/eventos-corporativos.tsx`, no array `gallerySlugs`, trocar `fotografo-de-drinks-coqueteis` por `totem-fotografico-totem-mania` (slug já existente no catálogo).

Sem alterações de SEO, canonical, domínio ou demais páginas. Depois é necessário publicar para refletir em produção.
