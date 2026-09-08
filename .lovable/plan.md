# MAPA DA HOME — auditoria somente-leitura (nada alterado)

HOME:
src/routes/index.tsx (rota "/")

COMPONENTES (ordem na página):
Novos (exclusivos da home, seguros para alterar): HomeHeroNovo, FaixaClientes, SolucoesEmpresa, BancoDeImagens, VideoProducao, EventoCompleto, PontualOuPlano, AgilidadeProva, RetratoProfissional, ChamadaFinal — todos em src/components/site/home/.
Antigos (ainda renderizados abaixo): HomeSelectedWorks, ServiceChooser, SegmentGrid, HomeAbout, HomeVideos, HomeSocialProof, HomeBlog, HomeFaq, HomeCta.
Compartilhados com outras páginas: ServiceChooser (src/components/site/) e SegmentGrid (src/components/site/) — mexer neles afeta outras rotas. Nenhum outro componente da home é usado fora dela.

SEO ATUAL:
H1: "Fotografia e vídeo corporativo em São Paulo desde 1991" (HomeHeroNovo)
Title: "Fotógrafo Corporativo em São Paulo | Alê Fotógrafo"
Description: "Fotografia corporativa profissional em SP. Retratos, headshots e eventos. Nota 4,9 com 144 avaliações."
Canonical: https://www.alefotografo.com.br/
Schema: FAQPage (6 FAQs de faqsComerciais) + Person (Alexandre Machado). LocalBusiness/ProfessionalService global vem do __root.tsx (#business e #person no @graph).

SEÇÕES (ordem atual):
1. HomeHeroNovo 2. FaixaClientes 3. SolucoesEmpresa 4. BancoDeImagens 5. VideoProducao 6. EventoCompleto 7. PontualOuPlano 8. AgilidadeProva 9. RetratoProfissional 10. ChamadaFinal 11. HomeSelectedWorks 12. ServiceChooser 13. SegmentGrid 14. HomeAbout 15. HomeVideos 16. HomeSocialProof 17. HomeBlog 18. HomeFaq 19. HomeCta

LINKS INTERNOS (Home inteira):
- /fotografo-corporativo — ServiceChooser, HomeSelectedWorks, SolucoesEmpresa
- /fotografo-corporativo/$slug — ServiceChooser, SegmentGrid, HomeSelectedWorks, SolucoesEmpresa, BancoDeImagens (banco-de-imagens-para-empresas), EventoCompleto (totem-fotografico-totem-mania, foto-impressa-na-hora), RetratoProfissional (retrato-corporativo)
- /eventos-corporativos — HomeSelectedWorks, SolucoesEmpresa
- /videos e /videos/$slug — VideoProducao, HomeVideos
- /blog e /blog/$slug — HomeBlog
- /depoimentos — HomeAbout, HomeSocialProof
- /sobre — HomeAbout
- /contato — HomeCta
- /faq — HomeFaq
- /foto-profissional-para-linkedin — RetratoProfissional
(âncoras exatas dos 12 slugs de galeria e 3 posts do bloco antigo estão no relatório do PEDIDO 4, aprovado)

ARQUIVOS SEO (não alterar):
public/robots.txt, public/_redirects, public/_headers, src/routes/sitemap[.]xml.ts, sitemap-index[.]xml.ts, sitemap-videos[.]xml.ts, src/server.ts (redirects 301), src/routes/__root.tsx (schema global).

COMPONENTES SEGUROS PARA ALTERAÇÃO:
Todos os 10 componentes novos + os exclusivos em src/components/site/home/ (HomeAbout, HomeVideos, HomeSocialProof, HomeBlog, HomeFaq, HomeCta, HomeSelectedWorks) — nenhum é importado por outra rota.
NÃO seguros: ServiceChooser, SegmentGrid (compartilhados), __root.tsx, Header, Footer.

IMAGENS:
Home usa URLs Rackcdn hospedadas (reutilizadas de outras páginas). HomeHeroNovo: grupos...equipes_grupos-3.jpg + foto do Alê (homeCuration.ts); EventoCompleto: tourhouse-105.jpg; RetratoProfissional: helio-martins-borges-filho-4.jpg; BancoDeImagens: 8 miniaturas distintas.

RISCOS IDENTIFICADOS:
1. Remover os blocos antigos (11–19) perde 19 links internos exclusivos: 12 galerias /fotografo-corporativo/*, /blog + 3 posts, 3 vídeos /videos/* — conforme auditoria PEDIDO 4.
2. ServiceChooser e SegmentGrid são compartilhados: qualquer edição neles impacta outras páginas indexadas.
3. FAQPage da home vem de faqsComerciais — remover HomeFaq sem remover/ajustar o script no head desalinha schema e conteúdo visível.
4. Head da home (title/description/canonical/schemas) está dentro do próprio index.tsx — qualquer edição no arquivo exige cuidado para não tocar no head.

Nenhum arquivo foi criado, alterado ou removido nesta etapa (exceto este mapa, exigido pelo fluxo de plano). Aguardando sua próxima instrução.
