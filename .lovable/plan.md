# PEDIDO 4 — ETAPA 1: auditoria dos blocos antigos da home

Nenhum arquivo foi alterado. Só leitura.

## a) Blocos antigos remanescentes, na ordem em que aparecem

Ordem atual em `src/routes/index.tsx`: blocos novos (Hero → ChamadaFinal) e, abaixo deles, os 9 blocos antigos:

1. `HomeSelectedWorks` — "Fotos / Trabalhos selecionados / Ver todos os segmentos / Retrato Corporativo"
2. `ServiceChooser` — "Serviços / Escolha o serviço ideal para sua empresa / Cada objetivo pede um tipo"
3. `SegmentGrid` — "Segmentos / Fotografia corporativa para diferentes segmentos / A necessidade de imagem muda"
4. `HomeAbout` — "Quem está por trás / Alexandre Machado — três décadas traduzindo empresas em imagem."
5. `HomeVideos` — "Vídeo / Produções audiovisuais / Todos os vídeos / Beauty Fair 2026"
6. `HomeSocialProof` — "Prova social / O que dizem nossos clientes / Ver todos os depoimentos / Nota 4,9"
7. `HomeBlog` — "Insights / Do blog / Todos os posts / Fotografia imobiliária corporativa: como imagens"
8. `HomeFaq` — "FAQ / Dúvidas frequentes antes de contratar / Ver todas as perguntas"
9. `HomeCta` — "Pronto para fortalecer a imagem da sua empresa? / Atendimento em toda Grande São Paulo."

## b) Links internos nesses blocos (âncora → destino)

HomeSelectedWorks
- Ver todos os segmentos → /fotografo-corporativo
- Retrato Corporativo → /fotografo-corporativo/retrato-corporativo
- Fotografia para escritórios de advocacia → /fotografo-corporativo/fotografia-para-escritorios-de-advocacia
- Retratos → /fotografo-corporativo/fotografo-de-retratos-corporativos
- Fotos Profissionais para Médicos → /fotografo-corporativo/fotos-profissionais-para-medicos
- Fotógrafo de Grupos, Times e Equipes → /fotografo-corporativo/fotografo-de-grupos-times-e-equipes
- Retratos de Médicas → /fotografo-corporativo/retratos-de-medicas
- Fotógrafo de Eventos Corporativos → /fotografo-corporativo/fotografo-de-eventos-corporativos
- Fotógrafo de Eventos Empresariais → /fotografo-corporativo/eventos-corporativos
- Fotógrafo de Feiras de Negócios → /fotografo-corporativo/fotografo-feiras-stands
- Festa da Firma → /fotografo-corporativo/fotografo-festa-de-confraternizacao
- Retratos Corporativos (CTA) → /fotografo-corporativo/retrato-corporativo
- Cobertura de Eventos Corporativos (CTA) → /eventos-corporativos

ServiceChooser
- Ver foto profissional → /foto-profissional
- Ver fotografia corporativa → /fotos-corporativas
- Ver cobertura de eventos → /fotografo-corporativo/fotografo-de-eventos-corporativos
- Ver vídeos institucionais → /videos
- Ver foto para LinkedIn → /foto-profissional-para-linkedin
- Fotografia industrial → /fotografo-corporativo/fotografia-industrial
- Fotos aéreas → /fotografo-corporativo/fotos-aereas
- Fotografia de culinária → /fotografo-corporativo/fotografo-de-culinaria
- Arquitetura e interiores → /fotografo-corporativo/fotografo-de-arquitetura-e-interiores
- Feiras de negócios → /fotografo-corporativo/fotografo-feiras-stands
- Empreendimentos imobiliários → /fotografo-corporativo/empreendimentos-imobiliarios
- Fotografia de drinks → /fotografo-corporativo/fotografo-de-drinks-coqueteis
- Totem fotográfico → /fotografo-corporativo/totem-fotografico-totem-mania
- Festa da firma → /fotografo-corporativo/fotografo-festa-de-confraternizacao
- Banco de imagens → /fotografo-corporativo/banco-de-imagens-para-empresas
- Ver todas as especialidades → /fotografo-corporativo
- (5 CTAs "Solicitar/Quero/Agendar…" → WhatsApp, externos)

SegmentGrid
- Ver fotos para advocacia → /fotografo-corporativo/fotografia-para-escritorios-de-advocacia
- Ver fotografia para clínicas → /fotografia-para-clinicas
- Ver foto profissional → /foto-profissional
- Ver fotografia corporativa → /fotos-corporativas
- Ver cobertura de eventos → /fotografo-corporativo/fotografo-de-eventos-corporativos
- Ver retratos profissionais → /foto-profissional
- (6 × Solicitar orçamento → WhatsApp)

HomeAbout
- Conheça a trajetória → /sobre
- Ver depoimentos de clientes → /depoimentos

HomeVideos
- Todos os vídeos → /videos
- Beauty Fair 2026 | 3º Dia… → /videos/beauty-fair-2026-3o-dia-tendencias-lancamentos-e-os-melhores-momentos-da-feira
- FlexFunds | Soluções Financeiras… → /videos/flexfunds-solucoes-financeiras-inteligentes-para-empresas-video-institucional
- Procooler na FEBRAVA… → /videos/procooler-na-febrava-cobertura-profissional-de-feiras-e-eventos-corporativos

HomeSocialProof
- Ver todos os depoimentos → /depoimentos
- Ver avaliações no Google / Avaliar → externos (nofollow)

HomeBlog
- Todos os posts → /blog
- Fotografia imobiliária corporativa… → /blog/fotografia-imobiliaria-corporativa-aceleracao-vendas
- Por que a foto de perfil do LinkedIn… → /blog/foto-perfil-linkedin-gestor-contratos
- 10 Lugares em São Paulo para tirar boas fotos → /blog/10-lugares-em-sao-paulo-para-tirar-boas-fotos

HomeFaq
- Ver todas as perguntas → /faq

HomeCta
- Outras formas de contato → /contato
- Solicitar orçamento no WhatsApp → externo

## c) Imagens nesses blocos (src → alt)

HomeSelectedWorks (10, CDN `…rackcdn.com/GaleriaImagem/`)
- 66874/retrato-corporativo-em-sao-paulo_salomao-concursos-34.JPG → "Retrato corporativo em São Paulo com direção de pose"
- 130271/…advogados-2.jpg → "Fotografia profissional de advogados em escritório de advocacia"
- 90047/…paulo-henrique-gomes-camara-8.jpg → "Retrato profissional corporativo com iluminação de estúdio"
- 132060/…driuri-tomaz-de-vasconcelos-7.JPG → "Foto profissional de médico para divulgação e redes sociais"
- 77681/grupos…grupos-1.jpg → "Foto de equipe corporativa em grupo no escritório"
- 153050/retratos-de-medicas_mila-rodrigues-da-silva-4.JPG → "Retrato profissional de médica em consultório"
- 90046/…encontro-farmarcas-2022-2467.JPG → "Cobertura fotográfica de evento corporativo em São Paulo"
- 66941/…jantar-abradilan-2019-278.jpg → "Jantar de evento empresarial fotografado em São Paulo"
- 66936/…procooler-39.jpg → "Cobertura fotográfica de feira de negócios e stand"
- 89025/…swift-701.jpg → "Festa de confraternização de empresa fotografada em São Paulo"

ServiceChooser (5, alt = título do card)
- 66874/retrato-corporativo_helio-martins-borges-filho-4.jpg → "Retrato profissional" (mesma foto usada hoje em RetratoProfissional e no rodapé)
- 102590/…antonio-logigo-120.jpg → "Fotografia corporativa para empresas"
- 90046/…encontro-farmarcas-2022-2467.JPG → "Eventos corporativos"
- 66911/banco-de-imagem-de-empresa_…0002.jpg → "Vídeo institucional"
- 98854/…rodrigo-trindade-batista-31.jpg → "Foto para LinkedIn"

SegmentGrid (6)
- 130271/…advogados-11.jpg → "Fotografia profissional de advogado em escritório de advocacia em São Paulo"
- 132060/…draeugenia-5.jpg → "Foto profissional de médica em ambiente de consultório"
- 90047/…gustavo-pereira-13.jpg → "Retrato profissional de executivo fotografado em São Paulo"
- 77681/grupos…grupos-3.jpg → "Foto de equipe corporativa reunida em ambiente de trabalho"
- 90046/…febrafar-2024-532.JPG → "Público e interação em evento corporativo fotografado em São Paulo"
- 90046/…8-forum-abradilan-2023-707.jpg → "Palestrante em apresentação no palco de fórum corporativo"

HomeAbout (1)
- PaginaConteudo/alexandre-machado-1.JPG → "Alexandre Machado, fotógrafo corporativo em São Paulo"

HomeVideos (3 thumbs YouTube, alt vazio)
- i.ytimg.com/vi/BmavB5WmEi0 / uQxT-qYd79U / uFNcEB1uvAA → alt=""

HomeBlog, HomeSocialProof, HomeFaq, HomeCta: sem imagens.

## d) JSON-LD dentro desses blocos

Nenhum. Busca por `application/ld+json` nos 9 blocos, em `Faq.tsx` e no `Footer.tsx` não retornou ocorrência. Todo o JSON-LD da home vive no `head()` da rota (`FAQPage` + `Person`) e no `__root`. Remover qualquer um dos 9 blocos não apaga schema.

## e) Links que existem SÓ nesses blocos (não estão na home nova nem no rodapé) — perda real se remover

Cobertura conferida: rodapé real (`src/components/site/Footer.tsx`, incluindo as 3 colunas, o bloco de contato e a faixa dos 33 bairros) + todos os blocos novos.

Galerias de segmento (`/fotografo-corporativo/…`):
1. /fotografo-corporativo/fotografia-para-escritorios-de-advocacia
2. /fotografo-corporativo/fotografo-de-retratos-corporativos
3. /fotografo-corporativo/fotos-profissionais-para-medicos
4. /fotografo-corporativo/retratos-de-medicas
5. /fotografo-corporativo/fotografo-de-eventos-corporativos
6. /fotografo-corporativo/eventos-corporativos
7. /fotografo-corporativo/fotografo-festa-de-confraternizacao
8. /fotografo-corporativo/fotos-aereas
9. /fotografo-corporativo/fotografo-de-culinaria
10. /fotografo-corporativo/fotografo-de-arquitetura-e-interiores
11. /fotografo-corporativo/empreendimentos-imobiliarios
12. /fotografo-corporativo/fotografo-de-drinks-coqueteis

Blog e vídeos (páginas internas):
13. /blog  (não está no rodapé)
14. /blog/fotografia-imobiliaria-corporativa-aceleracao-vendas
15. /blog/foto-perfil-linkedin-gestor-contratos
16. /blog/10-lugares-em-sao-paulo-para-tirar-boas-fotos
17. /videos/beauty-fair-2026-3o-dia-tendencias-lancamentos-e-os-melhores-momentos-da-feira
18. /videos/flexfunds-solucoes-financeiras-inteligentes-para-empresas-video-institucional
19. /videos/procooler-na-febrava-cobertura-profissional-de-feiras-e-eventos-corporativos

Links que podem sair sem perda (já cobertos na home nova ou no rodapé): /fotografo-corporativo, /fotografo-corporativo/retrato-corporativo, /fotografo-corporativo/fotografo-de-grupos-times-e-equipes, /fotografo-corporativo/fotografo-feiras-stands, /fotografo-corporativo/fotografia-industrial, /fotografo-corporativo/totem-fotografico-totem-mania, /fotografo-corporativo/banco-de-imagens-para-empresas, /eventos-corporativos, /foto-profissional, /fotos-corporativas, /foto-profissional-para-linkedin, /fotografia-para-clinicas, /videos, /sobre, /depoimentos, /faq, /contato.

## Observações objetivas
- Remover `HomeBlog` derruba o único link da home para /blog e para os 3 posts.
- Remover `HomeVideos` derruba os 3 links de vídeo individuais (/videos em si continua no rodapé).
- Remover `ServiceChooser` derruba 6 galerias secundárias (itens 8–12 e a de eventos) que não aparecem em nenhum outro lugar da home.
- `SegmentGrid` e `HomeSelectedWorks` juntos concentram os itens 1–7.

Parado aqui, aguardando "confirmado".
