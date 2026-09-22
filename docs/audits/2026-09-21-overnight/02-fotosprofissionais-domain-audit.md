# 02 — Auditoria pública do fotosprofissionais.com.br (READ-ONLY, 21/09/2026)

Coleta: ~12 requisições GET, zero alterações. Todas as afirmações abaixo têm evidência em HTML/headers servidos.

## 1. HTTP / www-apex

Host canônico de fato: `https://www.fotosprofissionais.com.br/` (200). Cadeias: http→apex 308 → www 307; https apex 307 → www; http www 308 → https www. HSTS ativo (max-age 63072000).

## 2. robots / sitemap / llms

- **robots.txt** (608 B): liberal — GPTBot, Claude-Web, PerplexityBot, Bytespider e `*` todos Allow. Sitemap declarado.
- **sitemap.xml:** urlset com **exatamente 1 URL** (home; lastmod 2026-02-06). Sem blog, sem subpáginas.
- **llms.txt:** EXISTE (4.643 B) — "Alexandre Machado Fotografia", posiciona "fotógrafo corporativo especializado em escritórios de advocacia", email comercial@alefotografo.com.br, WhatsApp 91355-0533, link para alefotografo.com.br como website. Ver inconsistência de avaliações em 01.

## 3. Home

- `<title>Fotógrafo Corporativo para Escritórios de Advocacia</title>`
- Meta description: "Fotografia corporativa e vídeo institucional para escritórios de advocacia em São Paulo. Retratos, equipes e ambientes com 30 anos de experiência."
- H1: "Alexandre Machado — Fotógrafo Corporativo" · lang pt-BR · hreflang pt-BR + x-default.
- **Canonical: ausente no HTML servido** (comentário no código: definido via react-helmet-async por rota — ou seja, só após JS). Risco: HTML cru sem canonical.
- Dois códigos de verificação GSC próprios no meta (o domínio tem propriedade GSC separada do principal — relevante para o levantamento pendente).
- Menu: Início, Sobre, Retratos, Escritório, Vídeo, Contato, Área do cliente — tudo âncoras `#` na mesma página; `/auth` para área do cliente.

## 4. Tecnologia

React SPA + Vite (chunks vendor-react/router/motion/query), **Lovable.dev** (rota `/.lovable/oauth/consent`, /auth Supabase), hospedagem **Vercel** (edge gru1), GA4 G-PTJF121DQ7, formulário via formsubmit.co → comercial@alefotografo.com.br, Google Fonts, manifest "Alexandre Machado Fotografia / Alê Fotógrafo". Não é WordPress/Wix/Alboom. SSR shell: HTML de 18 KB com conteúdo renderizado client-side (crawl depende de JS para conteúdo profundo).

## 5. Entidade e NAP

Marca "Alexandre Machado Fotografia" (alternateName "Alê Fotógrafo"); Person Alexandre Machado, jobTitle Fotógrafo Corporativo; tel/wa.me +55 11 91355-0533; email comercial@alefotografo.com.br; endereço apenas "São Paulo – SP" (geo -23.5505,-46.6333); "30 anos de experiência" (não usa "mais de", não cita 1999). JSON-LD @graph: ProfessionalService, Person, WebSite, WebPage, BreadcrumbList, ImageGallery, VideoObject (embed "Rocha e Queiroz", yt 3Jm3PyVBZDo), FAQPage; aggregateRating 5.0/140 + 6 reviews nomeadas (advogados). **sameAs: [] vazio**; ícones sociais do rodapé com href="#" (placeholders mortos).

## 6. Conteúdo

Landing page única de conversão para o nicho jurídico: Retratos Profissionais (in loco), Fotografia de Ambientes e Equipe, Vídeo Institucional para Escritórios (roteiro, captação, locução, trilha, letterings, animações), "Por que nos escolher" (especialização em advocacia), etapas da produção, FAQ 6 perguntas, galerias Retratos/Ambientes/Equipe, CTA WhatsApp + formulário. Tom: autoridade jurídica. Blog: não existe.

## 7. Overlap de intenção vs. principal

| Cluster | Overlap | Base |
|---|---|---|
| FOTO PROFISSIONAL | HIGH | Domínio inteiro é "retratos/fotos profissionais"; principal tem /foto-profissional |
| RETRATO | HIGH | Seção principal "Retratos Profissionais" + galeria vs. /retrato-corporativo |
| LINKEDIN | MEDIUM | Citado como uso do retrato; sem página dedicada (principal tem /foto-profissional-para-linkedin) |
| EXECUTIVO | MEDIUM | Alt "retrato executivo SP" no acervo; enquadramento comercial é "advogados" |
| CORPORATIVO | HIGH | Title/H1 "Fotógrafo Corporativo" vs. /fotografo-corporativo |
| PERFIL PROFISSIONAL | HIGH | Funil inteiro é perfil profissional; no principal a intenção vive na home |

## Leitura (fatosa, sem decisão)

- O ativo é uma landing de nicho (advocacia) com NAP idêntico ao principal e conversão para o mesmo WhatsApp/email — **não é concorrente; é um duplicador de intenção head**.
- Singularidade real: domínio exato-keyword "fotos profissionais" + foco inédito no vertical jurídico.
- **Levantamento exigido antes de qualquer decisão** (GSC do domínio — há 2 códigos de verificação no HTML, backlinks, URLs indexadas além do sitemap, tráfego, intenção). Sem esses dados, KEEP/MIGRATE/REDIRECT/DEACTIVATE ficam todos bloqueados (ver 29).
