# 18 — Separação de domínios: Ale Fotógrafo × Vídeos Corporativos

Data: 16/09/2026 · Base: main 560d6e2 · Método: crawl completo dos 2 domínios + SERP amostral (15 queries)

## Resposta direta às 8 perguntas da missão

1. **Quem está tentando possuir "vídeo corporativo"?** Hoje, ninguém com sucesso. `alefotografo.com.br/videos` tem title "Vídeos Corporativos em São Paulo Produção para Empresas" e ranqueia 2º na amostra para "produção de vídeo corporativo". `videoscorporativos.com.br` tem a intenção no domínio, no H1 da home e em landings dedicadas — mas **não apareceu em nenhuma das 15 queries do baseline**. O dono técnico do conteúdo é o VC; quem acumula sinais no Google, hoje, é o Ale.
2. **"Vídeo institucional"?** Mesmo quadro. VC tem `/video-institucional-sao-paulo` (title "Vídeo Institucional em São Paulo · Produtora com +30 anos"). Ale tem `/video-institucional`. Na amostra, **nenhum dos dois ranqueou** para a query — o espaço está aberto e o VC é o candidato natural.
3. **"Vídeo para eventos"?** VC tem `/filmagem-evento-corporativo-sao-paulo`. Ale tem `/video-de-eventos-corporativos`. Ambos disputam; nenhum apareceu na amostra.
4. **Title/H1 muito parecidos?** SIM, estrutural: o **H1 da home do VC é literalmente igual ao H1 de `/videos` do Ale** ("Vídeos corporativos em São Paulo para empresas que precisam vender, treinar e comunicar melhor"). Além disso: VC `/video-institucional-sao-paulo` H1 "Vídeo Institucional em São Paulo" ≈ Ale `/video-institucional` H1 "Vídeo institucional para empresas em São Paulo".
5. **Texto duplicado?** Entre os dois, similaridade moderada (os 72 slugs `/videos/*` existem em Ale e em **alefotografos** — VC tem corpus próprio de 192 páginas, incl. 106 Articles e 64 FAQs). A duplicidade aguda é Ale × AleFotógrafos, não Ale × VC. Mas as **intenções** se sobrepõem quase 1:1 nos temas vídeo institucional / eventos / feiras.
6. **Onde as URLs competem?** "vídeo corporativo são paulo", "vídeo institucional são paulo", "produção de vídeo corporativo são paulo", "vídeo para empresas são paulo", "filmagem evento corporativo". Em todas, o ideal é VC na frente; hoje Ale (e até AleFotógrafos) ocupa o espaço.
7. **Como reposicionar o Ale SEM apagar o portfólio de vídeo?**
   - Manter `/videos` como **hub de produção integrada foto+ vídeo** (showreel ATIVA, cases integrados, índice das 72 produções — tudo já construído na missão mobile-UX).
   - Mudar o **ângulo**: de "produtora de vídeo" (disputa com VC) para "fotógrafo corporativo que também entrega o vídeo do projeto" (intenção foto+vídeo integrada, onde ninguém compete).
   - Reescrever title/H1/meta futuros no eixo "integrado": sugestão H1 futuro: "Vídeo e fotografia corporativa integradas em São Paulo"; title futuro: "Foto e Vídeo Corporativo Integrados em SP · Alê Fotógrafo". (Sugestão — NÃO implementado.)
   - As 3 páginas de serviço de vídeo (`/video-institucional`, `/video-de-eventos-corporativos`, `/video-para-feiras-e-stands`) devem virar páginas de **prova integrada** (case ATIVA etc.) com link para o VC como especialista, em vez de páginas de captura genéricas de intenção "vídeo institucional".
8. **Como tornar o VC o especialista vertical?**
   - VC já tem: 192 páginas, `/precos` (R$ 3.000–30.000 — único domínio do ecossistema com página de preços), `/cases` (66+), blog com 106 Articles, 64 FAQs, landings por serviço e região.
   - Faltas detectadas: (a) 302 em vez de 301 no www→apex (sinal fraco); (b) zero presença na amostra SERP — precisa de backlinks/authority e IndexNow (ver 13-indexnow-plan.md); (c) H1 da home genérico duplicado com o Ale — diferenciar; (d) criar landings vídeo logística/indústria se ainda não existirem (cluster P17 pertence ao Ale em foto; o par audiovisual pertence ao VC).

## Regra de ownership proposta (futura — não implementada)

| Tema | Dono | Papel do outro |
|---|---|---|
| vídeo corporativo/institucional/eventos/feiras/treinamento | videoscorporativos.com.br | Ale: cases integrados + link "versão audiovisual completa no VC" |
| foto + vídeo integrado, produção completa do Alê | alefotografo.com.br | VC: link "fotografia do projeto no Ale" nos cases com foto |
| logística foto | alefotografo.com.br | VC: landing vídeo logística quando criada |
| logística vídeo | videoscorporativos.com.br | Ale: case integrado ATIVA |

## Internal linking / cross-domain (sugestões, não implementadas)

- `/videos` do Ale: bloco "Especialista em vídeo corporativo" → https://videoscorporativos.com.br (1 link contextual, não sitewide).
- VC home/cases: quando o case incluiu fotografia → link para o case/página correspondente no Ale.
- Âncoras naturais, nunca sitewide footer.

## Conteúdo (sugestões futuras)

- VC: manter cadência do blog (106 artigos), priorizar intenções "preço/prazo/guia" (já forte) + landings nicho logística/indústria/saúde em vídeo.
- Ale: 72 páginas `/videos/[slug]` permanecem (SEO próprio preservado); adicionar em cada uma, quando houver, link para o case integrado e para o VC.

## Evidências

- Inventário: 02-url-inventory.csv (VC 192 páginas; Ale /videos 340 únicas incl. 72 vídeos).
- Baseline SERP: 14-search-baseline-public.md (queries 10–13: VC ausente; Ale/ales presentes).
- llms.txt do VC já está correto e completo (telefone 91355, +30 anos, links absolutos).
