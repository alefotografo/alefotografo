# 17 — Case ATIVA — Readiness (inventário factual)

Data: 21/09/2026 · Fonte: repo (src/data, rotas, blog) + GSC. Nada inventado; fontes citadas.

## FACTS VERIFIED

| Fato | Fonte |
|---|---|
| 8 vídeos ATIVA no catálogo | src/data/catalog.vids.json (linhas conforme catalogo) |
| Vídeos: "ATIVA Logística 30 anos" (yt WQTc4MdL0o0) · "ATIVA Log" institucional (yt nkHJbeXx5Qo) · "Estrutura, operação e eficiência" (yt x_XuKwIA5cE) · Sustentabilidade (yt aOiYST9L8ec) · Apresentação de serviços (yt jRq5LqzarHc) · Boas Festas com unidade decorada e 3 veículos da frota (yt M5rpZqjInHE, descrição do catálogo) · CD Itapevi — evento com clientes e parceiros (yt T4Uh7_Zcka8, descrição) · Unidade Barueri (yt 1KcbM0hU5vY) | catalog.vids.json |
| "ATIVA Log" é o showreel da página /videos e aparece na home | src/routes/videos.index.tsx:35,108; src/components/site/home/SolucoesEmpresa.tsx:50 |
| Blog case publicado em 14/09/2026: "ATIVA Logística: fotografia e vídeo para mostrar estrutura e operação" — afirma que é "a empresa do setor com a qual mais produzimos"; descreve fotografia de armazém, docas, movimentação de cargas e equipes; linka 4 vídeos | src/data/catalog.posts.json + postBodies.json + postSeo.ts:739-743 |
| Editorial da categoria logística: "série de projetos que documentam a operação e a estrutura da empresa" | src/data/categoryEditorial.ts:517-524 |
| Case listado como segmento "Logística" em /video-institucional | src/routes/video-institucional.tsx:35 |
| GSC: "ativa logistica" 417 impr pos 7,35; "ativa logística barueri" 269 impr (P18A.6R) | docs/audits/2026-09-17-gsc-commercial |
| URLs legadas /videos-para-empresas/ativa-* somam ~4.750 impr no snapshot | GSC Pages 09/17 |

## ASSETS AVAILABLE

- **Vídeos (8):** IDs acima; thumbs automáticas do YouTube (mqdefault/hqdefault via src/lib/videoThumb.ts).
- **Fotos (20):** `banco-de-imagens-para-empresas_ativa-itapevi-*.jpg` — GaleriaImagem/125396, números 8–349 (lista completa em categoryImages.json). Servidas pela CDN atual via /api/public/img.
- **Capa de post:** imagem genérica de logística (não nomeada ATIVA) — postCovers.ts:178.

## LOCATIONS MENTIONED (comprovadas)

Barueri (vídeo "Unidade Barueri"; blog case; GSC "ativa logística barueri") · Itapevi (CD + 20 fotos nomeadas). Nenhum endereço.

## SERVICE TYPES PROVABLE

Vídeo corporativo/institucional (8 produções) · fotografia de estrutura/operação + banco de imagens (blog case: "armazém, docas, movimentação de cargas e equipes") · uso em site, propostas, comunicação interna e recrutamento (blog case). **Drone para ATIVA: não comprovado.**

## DELIVERABLES PROVABLE

Vídeos (institucional de estrutura; unidades Barueri/Itapevi; 30 anos; sustentabilidade; Boas Festas; CD Itapevi) · acervo fotográfico de operação para uso comercial.

## UNKNOWN FACTS (não publicar sem briefing)

Datas de cada produção · volume de fotos entregues · escopo contratual · resultados/impacto · endereços das unidades · pessoas nomeadas da empresa · número de unidades/frota (a descrição do Boas Festas menciona "3 veículos da frota" — é fato do vídeo, usável com cuidado) · razão da parceria "a empresa do setor com a qual mais produzimos" é afirmação do próprio blog — usável.

## READINESS: ALTO

Material comprovável: 8 vídeos + 20 fotos + blog case + showreel em 2 páginas-chave. Faltam apenas: consentimento de uso do nome/logotipo (implícito pelo blog publicado e vídeos públicos no canal do Ale — confirmar), 3–5 linhas de briefing (datas aproximadas, escopo de 1–2 produções) e decisão de rota (22).
