# 05 — GEO extractability

Validação no SSR (HTML servido) — nenhum fato principal depende de JS,
accordion fechado, imagem, canvas ou modal.

## Advocacia owner (/fotografo-corporativo/fotografia-para-escritorios-de-advocacia)

| Campo | Extraível em HTML | Fonte no SSR |
|---|---|---|
| SERVIÇO | fotografia para escritórios de advocacia | H1 + editorial bloco 1 |
| LOCAL | São Paulo (e Grande São Paulo) | editorial blocos 1-2 + FAQ 2 |
| FORMATOS | retratos de sócios/advogados, equipe, ambientes, banco de imagens | bloco 2 + bullets |
| USOS | site, LinkedIn, propostas, RFPs, rankings, imprensa | bloco 3 |
| PROVA | Rocha & Queiroz Advogados Associados (fotografia + 2 vídeos publicados + depoimento da coordenadora administrativa no LinkedIn) | bloco 4 + link do case |
| VÍDEO | sim, foto+vídeo no mesmo projeto quando previsto no escopo | bloco 5 |
| CONTRATAÇÃO | link para /fotografia-para-advogados (formatos, prazos, orçamento) | bloco 6 |
| FAQ | 6 perguntas com respostas no DOM (accordion com conteúdo servido) | FAQ visível = FAQPage schema (6/6) |

## Logística owner (/fotografo-corporativo/fotografia-de-logistica)

| Campo | Extraível em HTML | Fonte no SSR |
|---|---|---|
| SERVIÇO | fotografia de logística | H1 + editorial |
| CLIENTES/SETORES | transportadoras e operadores logísticos | primeira frase do editorial (ajuste desta missão) |
| FORMATOS | frota, caminhões, centros de distribuição, armazéns, docas, expedição, equipes | bloco 1 |
| LOCAL | São Paulo e região (produção nas instalações da empresa) | blocos 1 e 3 |
| PROVA | ATIVA Logística (fotografia de operação + vídeos em Itapevi e Barueri), Fiorde, BMX | bloco 1 (cedo) + bloco 4 |
| CASE PRINCIPAL | ATIVA Logística → /cases/ativa-logistica | bloco 1 |
| VÍDEO | produção audiovisual integrada quando prevista no escopo | bloco 2 + FAQ 4 |
| FAQ | 5 perguntas preservadas | FAQ visível = FAQPage schema |

## Linguagem e locks

Voz da marca (produzimos/realizamos/nossa equipe/desenvolvemos), sem promessa
universal de execução pessoal, zero palavras proibidas, zero claims de
resultado comercial. Galerias/Masonry/SmartImage intactos; cases intactos.
