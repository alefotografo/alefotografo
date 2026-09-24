# 04 — Schema check

Verificação programática no SSR (dev local, branch feat/p19c-named-client-cases).

## /cases (hub)
- BreadcrumbList: 1 (componente Breadcrumbs — padrão do site)
- canonical: https://www.alefotografo.com.br/cases
- robots: default (index,follow)

## /cases/ativa-logistica
- BreadcrumbList: 1 (componente)
- Article: 1 — headline, description, url, mainEntityOfPage, inLanguage pt-BR,
  author/publisher = Alê Fotógrafo (Organization), about = "ATIVA Logística"
  (Organization, sem URL oficial inventada)
- FAQPage: 1 — derivado de faqJsonLd(FAQS), MESMA constante do FaqList visível
- Sync visível × schema: 4/4 exatos (validado por parser no HTML)
- canonical: https://www.alefotografo.com.br/cases/ativa-logistica
- Sem AggregateRating, sem Review, sem VideoObject (campos de duração/uploadDate
  não verificáveis por completo — preferido não declarar a declarar pela metade)

## /cases/rocha-e-queiroz-advogados
- BreadcrumbList: 1 (componente)
- Article: 1 — about = "Rocha & Queiroz Advogados Associados"
- Sem FAQ (estrutura da missão não prevê FAQ para R&Q — sem material factual
  para perguntas específicas; inventar seria proibido)
- Depoimento em HTML normal com autoria + link da fonte LinkedIn (sem Review
  schema — decisão da missão: não adicionar Review só por rich result)

## Correção aplicada durante a validação
O head das 3 rotas inicialmente duplicava BreadcrumbList (o do head + o do
componente Breadcrumbs). Removido o do head — ficou 1 por página, igual às
páginas existentes.
