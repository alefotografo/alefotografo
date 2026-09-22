# 18 — Case ATIVA — DRAFT (para revisão do proprietário; NÃO publicado; NADA implementado)

Regras aplicadas: só fatos de 17; linguagem da marca (produzimos/desenvolvemos/realizamos/entrega); zero palavras proibidas; sem datas/números não comprovados. Estrutura segue 22 (cases routing).

---

## METADADOS SUGERIDOS

- **URL:** /portfolio/cases/ativa-logistica (ver 22 — gate de rota)
- **Title:** Case ATIVA Logística | Fotografia e Vídeo Corporativo em SP
- **Meta description:** Como produzimos fotografia e vídeo para a ATIVA Logística documentar estrutura, operação e unidades em Barueri e Itapevi. Case real com produções publicadas.
- **H1:** ATIVA Logística — fotografia e vídeo para mostrar estrutura e operação

## RASCUNHO

**O cliente.** ATIVA Logística, empresa de logística com operação na região de São Paulo — incluindo o centro de distribuição em Itapevi e a unidade de Barueri. É a empresa do setor com a qual mais produzimos: nossa parceria reúne uma série de projetos de fotografia e vídeo ao longo dos anos.

**A necessidade.** Uma operação logística não se mostra em catálogo: CD, docas, movimentação de cargas e equipes trabalhando precisam de registro real para comunicar escala, organização e capacidade — em site, propostas, comunicação interna e recrutamento.

**O que produzimos.**
- **Vídeo institucional "ATIVA Log"** — apresentação da operação; é também o vídeo de abertura do nosso portfólio de vídeos corporativos.
- **Vídeo dos 30 anos da empresa** — registro institucional de marco da companhia.
- **Vídeo do centro de distribuição de Itapevi** — produzido para o evento de apresentação do CD a clientes e parceiros.
- **Vídeo da unidade de Barueri** — apresentação da operação local.
- **Vídeo do programa de sustentabilidade** e **vídeo de Boas Festas** (com unidade e frota decoradas para o Natal, conforme a produção publicada).
- **Banco de imagens de operação** — fotografia de armazém, docas, movimentação de cargas e equipes, com cessão de uso comercial.

**Como trabalhamos.** [AGUARDA BRIEFING: 2–4 linhas sobre processo — ex.: roteiro a partir da operação real, captação em planta com acompanhamento da equipe, edição voltada ao uso em cada canal.]

**Aplicações.** Site institucional, materiais comerciais, comunicação interna, recrutamento e apresentação de estrutura para clientes e parceiros.

**Galeria.** Seleção das 20 fotos `ativa-itapevi-*` (CDN) + thumbnails dos 8 vídeos com link para as páginas /videos/*. [Na implementação: otimizar alt das escolhidas — hoje genéricos.]

**Produções relacionadas.** Lista dos 8 vídeos com links para /videos/$slug.

**Serviços relacionados.** Fotografia de logística · vídeo institucional · banco de imagens para empresas · cobertura de eventos corporativos.

**FAQ (só se factual).**
- As produções podem ser assistidas? → Sim, todas publicadas no portfólio de vídeos (links).
- A ATIVA atende outras regiões? → Não confirmado; não publicar.
- [Demais perguntas só com briefing.]

**Schema recomendado (na implementação):** Article/CasePage não é tipo Schema.org — usar `Article` (about: ATIVA Logística) + `VideoObject` por produção listada + breadcrumbs; manter BASE do site.

**Links internos:** desde /fc/fotografia-de-logistica, /videos, /video-institucional, home (bloco cases), blog case (link recíproco).

---

### O que falta para publicar (checklist)

1. Briefing do proprietário: datas aproximadas das principais produções; 2 linhas de "como trabalhamos"; confirmação do uso do nome.
2. Decisão de rota (22) + implementação na feature branch.
3. Revisão do texto acima pelo proprietário (tom e fatos).
