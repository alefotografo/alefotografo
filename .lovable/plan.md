# PLANEJAMENTO 11B — ARQUITETURA DE VÍDEO (somente leitura)

NENHUMA ALTERAÇÃO REALIZADA: SIM

## 1. ROTAS / ALIASES / REDIRECTS HISTÓRICOS

Rotas reais de vídeo existentes: `/videos` (índice) e `/videos/$slug` (72 cases). Não existe rota para institucional, eventos em vídeo, feiras em vídeo ou aftermovie.

Aliases históricos em `src/lib/legacy-redirects.ts` (EXACT), todos REDIRECT: SIM → `/videos`, não indexáveis, sem conteúdo próprio:

| URL/ROTA | STATUS | INDEXÁVEL | CONTEÚDO | REDIRECT | DESTINO |
|---|---|---|---|---|---|
| /video-institucional | 301 | NÃO | nenhum | SIM | /videos |
| /videos-institucionais | 301 | NÃO | nenhum | SIM | /videos |
| /video-corporativo | 301 | NÃO | nenhum | SIM | /videos |
| /videos-corporativos | 301 | NÃO | nenhum | SIM | /videos |
| /videos-para-empresas | 301 | NÃO | nenhum | SIM | /videos |
| /filmagem-corporativa | 301 | NÃO | nenhum | SIM | /videos |
| /producao-de-video | 301 | NÃO | nenhum | SIM | /videos |
| /videos-para-empresas/{slug} | 301 | NÃO | nenhum | SIM | /videos/{slug} |

Não existe qualquer alias/histórico para: vídeo de evento, filmagem de eventos, vídeo de feira, filmagem de feira, vídeo de stand, aftermovie. Único "patrimônio histórico aproveitável" é o par de aliases institucionais (hoje 301 → /videos).

## 2. TAXONOMIA E LINKS INTERNOS DE VÍDEO

- Header: "Vídeos" → /videos
- Footer: "Vídeo corporativo" → /videos · "Vídeo institucional" → /videos · "Portfólio de vídeos" → /videos#portfolio · "Reels e social" → /videos#portfolio
- LinkHub: "Vídeo institucional e depoimentos" → /videos (chaves: vídeo, depoimento, institucional, youtube)
- searchTaxonomy: grupo de vídeo institucional aponta para 5 cases (`flexfunds-...-video-institucional`, `ativa-log`, `unitec-video-institucional`, `video-institucional-rocha-queiroz-advogados`, `video-manifesto-...`) — nenhuma página comercial
- autoLink: nenhum termo de vídeo mapeado; "institucional" resolve para a galeria fotográfica `fotografia-institucional-em-saopaulo`
- Home: "Vídeos Corporativos" → /videos; "Vídeos de Feiras e Eventos" → case SQ Química/FCE Pharma
- Sitemap: /videos + 72 cases + sitemap-videos.xml (player_loc)

Inconsistência confirmada: quatro rótulos distintos do footer e do LinkHub apontam para a mesma URL; nenhuma âncora interna existe para eventos em vídeo, feiras em vídeo ou aftermovie.

## 3. /VIDEOS — PROPRIEDADE SEMÂNTICA

Pode assumir "vídeos corporativos em São Paulo": **SIM**.

O H1 atual já é "Vídeos corporativos em São Paulo…", e todos os 72 cases são produções corporativas, portanto o termo guarda-chuva descreve o acervo inteiro sem forçar recorte. O único ajuste é de TITLE, que hoje aposta em "vídeo institucional" — intenção que passaria a ter página própria. Os aliases históricos de institucional apontam para /videos, então mover essa intenção exige repontar redirect, não perder patrimônio. As seções de tipos, frentes e FAQ continuam válidas como hub.

Intenções que devem permanecer dentro do hub: treinamento, depoimentos, social/reels, aftermovie (patrimônio insuficiente para página própria). Saem do hub como página comercial própria, mantendo resumo + link no hub: institucional, eventos, feiras.

## 4. VÍDEO INSTITUCIONAL — 8 MELHORES CASES

| EMPRESA | CASE | URL | SEGMENTO |
|---|---|---|---|
| FlexFunds | Soluções Financeiras Inteligentes — Vídeo Institucional | /videos/flexfunds-solucoes-financeiras-inteligentes-para-empresas-video-institucional | financeiro |
| ATIVA Log | Vídeo Institucional | /videos/ativa-log | logística |
| Rocha & Queiroz | Vídeo institucional Rocha & Queiroz advogados | /videos/video-institucional-rocha-queiroz-advogados | jurídico |
| Nitriflex | Indústria Química de Polímeros Especiais | /videos/nitriflex-industria-quimica-de-polimeros-especiais-e-borrachas-nitrilicas | química/indústria |
| Fiorde Logística | Soluções Logísticas Integradas | /videos/fiorde-logistica-solucoes-logisticas-integradas-para-empresas | logística |
| BMX Logística | Video Institucional BMX Logistica | /videos/video-institucional-bmx-logistica | logística |
| UNITEC | UNITEC — Video Institucional | /videos/unitec-video-institucional | tecnologia/indústria |
| SQ Química | Unidade Vinhedo | /videos/sq-quimica-unidade-vinhedo | química |

Reserva: ATIVA Log — Estrutura, Operação e Eficiência Logística; Centro de Distribuição Itapevi; Vídeo Manifesto; IBIS Botucatu — Video manifesto.

## 5. VÍDEOS DE EVENTOS — 8 MAIS FORTES

| EMPRESA/EVENTO | URL | TIPO |
|---|---|---|
| 11º Fórum ABRADILAN 2026 | /videos/video-corporativo-do-11o-forum-abradilan-2026-cobertura-de-evento-empresarial | fórum |
| 15ª Convenção ABRADILAN — Punta Cana | /videos/15-convencao-abradilan-barcelo-bavaro-palace-punta-cana-01-a-06-nov-2022 | convenção internacional |
| Tecnisa — Convenção de Vendas 2023 | /videos/convencao-de-vendas-2023-tecnisa | convenção |
| IBDE — VIII Congresso Brasileiro de Direito da Empresa (Rio) | /videos/ibde-rio2026 | congresso |
| IBDE Mendoza — III Congresso Internacional | /videos/ibde-mendoza-iii-congresso-internacional | congresso internacional |
| Convatec — Latam Sales Meeting 2021 | /videos/passion-for-excellence-latam-sales-meeting-2021-convatec | sales meeting |
| Copapharma — Coquetel de Lançamento | /videos/copapharma-coquetel-de-lancamento | lançamento |
| 22º Fórum de Compras & Sourcing | /videos/22-forum-de-comprasive-university | fórum/encontro empresarial |

Reserva: Encontro Farmarcas 2023; Sustainable Foods Summit; SITIVESP 80 Anos; Galena 35 anos.

## 6. VÍDEOS DE FEIRAS E STANDS — TODOS OS 7

| EMPRESA | FEIRA | URL | TIPO DE PRODUÇÃO |
|---|---|---|---|
| — (cobertura da feira) | Beauty Fair 2026 (3º dia) | /videos/beauty-fair-2026-3o-dia-tendencias-lancamentos-e-os-melhores-momentos-da-feira | melhores momentos / aftermovie |
| Procooler | FEBRAVA | /videos/procooler-na-febrava-cobertura-profissional-de-feiras-e-eventos-corporativos | cobertura de stand |
| SQ Química | FCE Pharma | /videos/sq-quimica-na-fce-pharma-cobertura-profissional-de-feira-de-negocios-com-fotogra | foto + vídeo |
| SQ Química | FCE Pharma | /videos/sq-quimica-na-fce-pharma-cobertura-profissional-em-video-para-feiras-e-eventos-c | vídeo |
| G-TECH | Conexão Farma 2023 | /videos/g-tech-na-conexao-farma-2023-inovacao-tecnologia-e-solucoes-para-a-saude | cobertura de stand |
| Genesis IA | Feira Hospitalar | /videos/genesis-inteligencia-artificial-na-feira-hospitalar | cobertura de stand |
| SQ Química | ABRAFATI Show 2022 | /videos/sq-quimica-na-abrafati-show-2022 | cobertura de stand |

SQ Química / FCE Pharma:
- SÃO CONTEÚDOS/VÍDEOS DIFERENTES: SIM (entradas distintas no catálogo, embeds distintos, uma apresentada como foto+vídeo e outra como vídeo)
- SÃO PÁGINAS QUASE DUPLICADAS: SIM (mesma empresa, mesma feira, títulos quase homônimos, textos equivalentes)
- Risco de canibalização: MÉDIO

## 7. /eventos-corporativos — LEITURA SEMÂNTICA

Predominantemente: **FOTOGRAFIA**, com vídeo como serviço secundário.

Capta intenção de vídeo porque o schema declara serviceType "Fotografia e vídeo de eventos corporativos", há bloco "Foto e vídeo na mesma diária", item "Anúncios e conteúdo em vídeo", menção a vídeo no processo e três FAQs citando vídeo. Uma futura página de vídeo de eventos deve evitar exatamente esses termos como títulos e tratar vídeo como produto principal (roteiro, captação multicâmera, entrevistas, cortes), deixando a diária fotográfica em /eventos-corporativos, com links recíprocos.

## 8. PROPRIEDADE SEMÂNTICA RECOMENDADA

- HUB — principal: "vídeos corporativos"; secundários: produção de vídeo para empresas, produtora de vídeo corporativo, filmagem corporativa, portfólio de vídeos corporativos, vídeo para comunicação interna
- INSTITUCIONAL — principal: "vídeo institucional"; secundários: filme institucional, vídeo institucional para empresas, vídeo de apresentação da empresa, vídeo manifesto, roteiro de vídeo institucional
- EVENTOS — principal: "vídeo de eventos corporativos"; secundários: filmagem de eventos corporativos, cobertura em vídeo de congresso, vídeo de convenção, vídeo de premiação, aftermovie de evento
- FEIRAS — principal: "vídeo para feiras e stands"; secundários: filmagem de feira de negócios, cobertura de stand em vídeo, vídeo de participação em feira, entrevistas no stand, melhores momentos da feira

Sem sobreposição: hub = termo guarda-chuva; institucional = filme da empresa; eventos = ocasião com público; feiras = ambiente de exposição comercial.

## 9. SLUGS PROPOSTOS

Não existe URL histórica indexável para nenhuma das três. Recomendação:

- Institucional → `/video-institucional` (reaproveita o alias histórico, hoje 301 → /videos; passaria a ser página real)
- Eventos → `/video-de-eventos-corporativos`
- Feiras → `/video-para-feiras-e-stands`

## 10. HOME FUTURA (destinos ideais, sem alterar)

- "Vídeos Corporativos" → /videos (hub)
- "Vídeos de Feiras e Eventos" → separar em dois cards: /video-para-feiras-e-stands e /video-de-eventos-corporativos (hoje aponta para um case individual)
- Seção "Vídeos corporativos com produção completa" → /videos, com links de apoio para institucional, eventos e feiras

## 11. CROSS-SELL

- /eventos-corporativos ↔ vídeo de eventos
- /fotografo-de-feira-de-negocios e /fotografo-corporativo/fotografo-feiras-stands ↔ vídeo para feiras e stands
- /fotos-corporativas, /fotografo-empresarial e /fotografo-corporativo/banco-de-imagens-para-empresas ↔ vídeo institucional
- /depoimentos ↔ depoimentos em vídeo dentro do hub
- Cases /videos/$slug ↔ página comercial da respectiva intenção

## 12. RISCO SEO DE CRIAÇÃO

- INSTITUCIONAL: **MÉDIO** — 20 cases sustentam a página, mas /videos hoje ocupa o termo no TITLE e os aliases históricos apontam para o hub; exige repontar TITLE e redirects na mesma cirurgia
- EVENTOS: **MÉDIO** — 37 cases, porém /eventos-corporativos já cita vídeo em schema e FAQ; risco de canibalização com fotografia se o recorte não for estritamente audiovisual
- FEIRAS: **MÉDIO/ALTO** — apenas 7 cases, dois quase homônimos, e duas páginas fotográficas de feiras já ranqueando; menor patrimônio e maior chance de diluição

## RESUMO PARA DECISÃO

- /videos DEVE SER: hub principal de "vídeos corporativos", mantendo treinamento, depoimentos, social/reels e aftermovie internos
- URL histórica para institucional: /video-institucional e /videos-institucionais (hoje 301 → /videos)
- URL histórica para eventos: não existe
- URL histórica para feiras: não existe
- Slugs recomendados: institucional → /video-institucional · eventos → /video-de-eventos-corporativos · feiras → /video-para-feiras-e-stands
- 8 cases institucionais e 8 de eventos: seções 4 e 5
- Cases de feiras: 7, listados na seção 6
- SQ Química: vídeos diferentes, páginas quase duplicadas, canibalização MÉDIA
- /eventos-corporativos: fotográfica com vídeo secundário
- Home futura: Vídeos Corporativos → /videos; Vídeos de Feiras e Eventos → dois cards dedicados
- Risco de criação: institucional MÉDIO · eventos MÉDIO · feiras MÉDIO/ALTO

NENHUMA ALTERAÇÃO REALIZADA: SIM
