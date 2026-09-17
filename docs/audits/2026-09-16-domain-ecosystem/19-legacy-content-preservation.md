# 19 — Preservação de conteúdo dos legados

Data: 16/09/2026 · Pergunta-guia: existe conteúdo nos legados que ainda NÃO existe no alefotografo.com.br?

## Resposta: SIM — 4 categorias

### A. Galerias nomeadas por cliente (fotografoale.com.br) — PRESERVAR COMO PROVA SOCIAL

Produções reais identificadas no legado sem equivalente próprio no principal (o principal tem /videos/* e blog, mas não páginas-galeria desses trabalhos em foto):

| old_url | cliente/trabalho | destino sugerido | forma de integração |
|---|---|---|---|
| /ensaio-fotografico-na-zattar-advogados | Zattar Advogados | futuro /portfolio/cases ou galeria em /fotografia-para-advogados | selecionar melhores fotos + texto curto |
| /ensaio-com-socios-da-live-clin | Live Clin (saúde) | /fotografia-para-clinicas ou case | idem |
| /tjb-logistica | TJB Logística | cluster logística P17 (/fotografo-corporativo/fotografia-de-logistica) | galeria apoia o nicho — ALTO valor temático |
| /sq-quimica-na-abrafati-2025, /sq-quimica-unidade-vinhedo, /sq-quimica-na-abrafati-show-2022 | SQ Química (indústria, 3 trabalhos) | /fotografo-corporativo/fotografia-industrial-em-sp | prova de recorrência de cliente |
| /latin-sales-meeting-2022-convatec | Convatec | /eventos-corporativos | — |
| /7o-forum-abradilan, /confraternizacao-abradilan, /i-congresso-brasileiro-de-direito-da-empresa-no-novo-futebol-ibde, /jantar-febrafar-2022, /encontro-farmarcas-2022(2), /faz-negocios-3-da-faz-farma-com-depoimentos, /salomao-concursos-aulao-em-sao-paulo, /curso-de-prestacao-de-contas-eleitorais-professora-rita, /sitivesp-80-anos, /galena-35-anos, /renove-mudancas, /ibis-botucatu-* (2 vídeos) | farmácias/farma + institucional | /eventos-corporativos, /fotografia-para-clinicas ou cases | galerias curtas; IBIS (vídeo) → /videos ou VC |
| /retratos-profissionais-em-estudio-salomao-concursos-ale-fotografo | Salomão (estúdio) | /foto-profissional | prova de estúdio |

Risco de duplicidade: BAIXO (não existem no principal). Risco de perda se 301 direto sem captura: ALTO.

### B. Páginas de serviço legadas com intenção viva (fotodeperfilprofissional.com.br)

| old_url | conteúdo | destino | nota |
|---|---|---|---|
| /fotografia-de-produtos/ | serviço que NÃO tem página dedicada no principal | criar /fotografo-corporativo/fotografia-de-produtos OU avaliar demanda | GAP de conteúdo no principal |
| /ale-em-acao/, /foto_profissional_quem_e_o_ale/ | quem é o Alê | /quem-e-o-ale | duplicado — redirecionar só |
| /linktree/, /whatsapp/ | contato | /contato | redirecionar |

### C. Posts editoriais antigos (ambos legados)

fotografoale: /posicionamento-e-reposicionamento-de-imagem-voce-sabe-qual-a-diferenca, /5-poses-para-retrato-corporativo, categorias/tags. fotodeperfil: 4 posts de dicas (como-tirar-uma-boa-fotografia, psicologia-das-cores (x2 títulos duplicados), como-se-destacar...).
**Avaliação:** conteúdo genérico de 2019–2024, sem sinais de tráfego disponíveis. Recomendação: NÃO migrar como páginas; se algum tiver backlinks (GSC indisponível — verificar), reescrever como post novo no /blog do principal com redirecionamento. Caso contrário: deixar morrer com 301 para tema equivalente.

### D. Pacotes de preço (fotodeperfil, Wayback)

/pacote-prata, /pacote-ouro, /pacote-diamante, /pacote-influencer — fora do sitemap atual; status atual DESCONHECIDO. Seguir regra P18A: 301 → /foto-profissional. Se ainda exibem preços antigos e estiverem 200, **desativar/migrar com prioridade** (risco de promessa comercial defasada).

## Gate antes de migrar qualquer legado

1. GSC de cada legado: URLs com impressões/backlinks (DADO NÃO DISPONÍVEL — obter com Alexandre).
2. Capturar galerias da categoria A (imagens já são do Alexandre — reaproveitamento livre).
3. Corrigir telefone 99483-8127 no fotodeperfil ANTES/DURANTE a migração (senão o sinal errado permanece indexável).
4. Só então: 301 página a página (05-legacy-migration-map.csv) + manter domínios registrados.
