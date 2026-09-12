# Checkpoint geral — estado atual (somente leitura)

NENHUMA ALTERAÇÃO REALIZADA: SIM

## 1. Home

- TITLE: Fotógrafo Corporativo em São Paulo | Fotografia Profissional
- META: Fotografia corporativa em São Paulo para empresas, executivos e equipes. Retratos profissionais, eventos, indústria, logística e vídeos corporativos.
- CANONICAL: https://www.alefotografo.com.br/
- H1 (único): Fotógrafo profissional e corporativo em São Paulo

H2 na ordem: Soluções em fotografia e vídeo para empresas · Banco de imagens corporativo · Vídeos corporativos com produção completa · Soluções para eventos corporativos · Experiência que acompanha cada produção · Depoimentos de clientes · Trabalhos selecionados · Experiência em diferentes segmentos · Experiência à frente de cada projeto · Do blog · Dúvidas frequentes antes de contratar · Vamos conversar sobre seu projeto · (rodapé: Siga no Instagram, Fotografia, Vídeo, Contato)

6 cards de "Soluções em fotografia e vídeo para empresas":

1. Banco de Imagens Corporativo → /fotografo-corporativo/banco-de-imagens-para-empresas
2. Fotografia Corporativa → /fotos-corporativas
3. Retratos Profissionais → /foto-profissional
4. Eventos Corporativos → /eventos-corporativos
5. Vídeos Corporativos → /videos
6. Vídeos de Feiras e Eventos → /videos/sq-quimica-na-fce-pharma-cobertura-profissional-em-video-para-feiras-e-eventos-c

LINK DA HOME PARA URL QUE RESPONDE 301: nenhum. Todos os destinos testados respondem 200.

## 2. Redirects já implementados

| URL antiga | Destino | 301 direto | Chain | Destino 200 |
|---|---|---|---|---|
| /fotografo-corporativo/fotografia-industrial | .../fotografia-industrial-em-sp | SIM | NÃO | SIM |
| /fotografo-corporativo/fotografo-de-retratos-profissionais | .../banco-de-imagens-para-empresas | SIM | NÃO | SIM |
| /fotografo-corporativo/eventos-corporativos | .../fotografo-de-eventos-corporativos | SIM | NÃO | SIM |

## 3. Sitemap

324 URLs. Perdedoras fora do sitemap: fotografia-industrial SIM · fotografo-de-retratos-profissionais SIM · eventos-corporativos SIM. Vencedoras presentes: fotografia-industrial-em-sp SIM · banco-de-imagens-para-empresas SIM · fotografo-de-eventos-corporativos SIM. Varredura das 324: nenhuma URL com 301, 302, 404 ou 410.

## 4. Portfólio / galerias

O texto "Fotografia Industrial" aparece 6 vezes em /portfolio, mas todas se referem à mesma galeria (título + alt das miniaturas). Existe apenas 1 link: /fotografo-corporativo/fotografia-industrial-em-sp. A URL perdedora não é linkada. O hub /fotografo-corporativo filtra as perdedoras (REDIRECTED_CATEGORY_SLUGS) e também linka só a vencedora.

Não é duplicação de link — é duplicação de dados: existem duas entradas no catálogo com o mesmo título "Fotografia Industrial" (slug fotografia-industrial, 72 imagens, e slug fotografia-industrial-em-sp, 16 imagens). A vencedora tem o acervo menor.

## 5. Arquitetura principal

- / → hub comercial de topo (fotógrafo profissional e corporativo em SP)
- /fotografo-corporativo → hub de galerias "fotógrafo corporativo em São Paulo"
- /fotos-corporativas → página de serviço: fotografia corporativa de empresa/equipe/ambiente
- /foto-profissional → página de serviço: retrato profissional individual
- /fotografo-empresarial → página de serviço: pessoas no trabalho, escritório, operação
- /fotografo-corporativo/fotografo-profissional-em-sao-paulo → galeria reposicionada para "fotógrafo profissional em São Paulo"

Conflitos restantes: / × /fotografo-corporativo BAIXO · /fotos-corporativas × /fotografo-empresarial MÉDIO · /foto-profissional × galeria fotografo-profissional-em-sao-paulo MÉDIO · demais BAIXO/NENHUM.

## 6. Saúde

| Página | TITLE | H1 | Status | Intenção atual |
|---|---|---|---|---|
| A fotos-profissionais-para-medicos | Fotos Profissionais para Médicos em São Paulo | Fotos Profissionais para Médicos | 200 | página-mãe de fotos para médicos |
| B retratos-de-medicos | Retratos de Médicos em São Paulo \| Fotógrafo Médico | Retratos de Médicos | 200 | retrato de médico, consultório ou estúdio |
| C retratos-de-medicas | Retratos de Médicas em São Paulo \| Fotografia Profissional | Retratos de Médicas | 200 | retrato profissional feminino na saúde |
| D fotos-para-clinicas-medicas | Fotos para Clínicas Médicas em SP \| Orçamento Hoje | Fotos para Clínicas Médicas | 200 | estrutura e ambientes da clínica (PJ) |

Referências inadequadas confirmadas em src/routes/fotografia-para-clinicas.tsx: card "Estética e dermatologia" → C · card "Psicologia, nutrição e terapias" → A · card "Hospitais e operadoras" → B. Além disso a mesma página lista B e C entre as galerias de clínicas (linhas 51–54). Não corrigido.

## 7. www × non-www

- HOST OFICIAL: www.alefotografo.com.br
- NON-WWW → WWW: **302** (não 301) em todas as 5 URLs testadas (/, /fotografo-corporativo, /fotos-corporativas, /videos, /blog)
- Alguma URL em 200 nos dois hosts: NÃO
- CANONICAL das páginas testadas: WWW em todas

Causa confirmada: o 302 é emitido pela borda da plataforma (`server: cloudflare`, resposta sem passar pela aplicação), pela regra de domínio primário — o apex está `active`/`connect` com `redirects_to: www.alefotografo.com.br`. O `redirectCanonicalHost` em src/server.ts (301) nunca é alcançado porque a borda responde antes. Não há correção possível em código: alterar src/server.ts não muda o comportamento observado.

## 8. Links internos para redirect

Nenhum link interno aponta para as 3 URLs perdedoras. As ocorrências restantes dos slugs antigos não geram link:

| Origem | Uso | Slug antigo |
|---|---|---|
| src/routes/servicos.tsx:43 | apenas capa (imagem) do card "Foto profissional" | fotografo-de-retratos-profissionais |
| src/routes/servicos.tsx:100 | apenas capa do card "Empresas e indústrias" | fotografia-industrial |
| src/routes/eventos-corporativos.tsx:67, fotografo-de-feira-de-negocios.tsx:67 | lista de galerias relacionadas | eventos-corporativos |
| src/data/catalog.cats.json, categorySeo.ts, categoryImages.json | dados da entrada legada | os 3 |

## 9. Vídeo

| URL | TITLE | H1 | Status |
|---|---|---|---|
| /videos | Vídeo Institucional para Empresas em São Paulo | Vídeos corporativos em São Paulo | 200 |
| /videos/$slug (72 no sitemap) | título do case | título do case | 200 |
| /eventos-corporativos | Fotos de Pessoas em Eventos de Empresa — SP | Retratos e fotos de equipe em eventos de empresa | 200 |
| /fotografo-de-feira-de-negocios | Fotos de Equipe em Feiras de Negócios — SP | Retratos da equipe comercial em feiras de negócios | 200 |
| /fotografo-corporativo/fotografo-feiras-stands | Fotógrafo de Feiras e Stands em São Paulo | Fotógrafo de Feiras de Negócios | 200 |
| /depoimentos | Depoimentos de Clientes de Fotos Corporativas | O que dizem nossos clientes | 200 |

Não existem páginas próprias para vídeo institucional, vídeos de eventos, vídeos de feiras, aftermovie ou depoimentos em vídeo: /video-institucional, /videos-corporativos, /video-corporativo, /filmagem-corporativa e /producao-de-video são todos 301 para /videos. Toda a intenção de vídeo está concentrada em /videos + 72 cases.

## 10. Problemas restantes

| Nível | Problema | URL/arquivo | Impacto | Risco de corrigir |
|---|---|---|---|---|
| ALTO | 3 âncoras semanticamente invertidas e B/C listadas como galerias de clínicas | src/routes/fotografia-para-clinicas.tsx | dilui sinal de A, B, C e D | baixo |
| ALTO | Acervo maior (72 imagens) preso na URL perdedora fotografia-industrial; vencedora tem 16 | src/data/categoryImages.json | vencedora com prova visual inferior | médio |
| MÉDIO | non-www responde 302 e não 301 | borda da plataforma | transferência de sinal menos explícita | fora do código |
| MÉDIO | Nenhuma página de intenção para vídeo além de /videos | src/routes/videos.index.tsx | perde "vídeo institucional", "aftermovie", "vídeo de evento" | médio |
| MÉDIO | Sobreposição /fotos-corporativas × /fotografo-empresarial | ambas as rotas | canibalização parcial | médio |
| BAIXO | Duas entradas de catálogo com o mesmo título "Fotografia Industrial" | src/data/catalog.cats.json | rótulos repetidos em listagens internas | baixo |
| BAIXO | Introdução da galeria fotografo-profissional-em-sao-paulo cortada em ~220 caracteres | template das galerias | leitura truncada | médio |

## 11. Nota atual

- SEO estrutural 8,5 — sitemap limpo, canonical consistente, 301 diretos sem chain.
- Arquitetura de palavras-chave 7,0 — hubs e serviços bem separados, mas empresarial × corporativa ainda se tocam.
- Links internos 7,5 — nenhum link para 301, porém há âncoras invertidas na área de saúde.
- Controle de canibalização 7,0 — médicos e industrial resolvidos; saúde e empresarial ainda com sobreposição residual.
- Home 9,0 — H1 único, hierarquia correta, todos os destinos em 200.
- SEO local 8,0 — bairros, LocalBusiness e host canônico consistentes.
- Arquitetura de vídeo 5,0 — 72 cases sob uma única página, sem páginas de intenção.
- Mobile/UX técnico 8,0 — imagens dimensionadas, lazy abaixo da dobra, alvos de toque de 44px.

## Resumo executivo

RESOLVIDO: 3 consolidações com 301 direto; sitemap sem redirect/404; Home sem link para 301; galeria de fotógrafo profissional e retratos de médicos reposicionadas; âncora "fotografia empresarial" apontando para a página certa; host canônico único.

ABERTO: âncoras da página de clínicas; acervo industrial na URL perdedora; arquitetura de vídeo; sobreposição corporativa × empresarial; introdução truncada.

MAIOR RISCO SEO ATUAL: as referências invertidas em /fotografia-para-clinicas, que enviam intenção de clínica para páginas de retrato.

MAIOR OPORTUNIDADE SEO ATUAL: arquitetura de vídeo — 72 produções sem nenhuma página de intenção que as capture.

PRÓXIMAS 5 AÇÕES (recomendações, não executar): 1. corrigir as âncoras de /fotografia-para-clinicas; 2. resolver o acervo industrial; 3. diagnóstico de arquitetura de vídeo; 4. separar corporativa × empresarial; 5. corrigir a introdução truncada.

## Ação escolhida: item 4 (non-www → www em 302)

Diagnóstico concluído acima. **Não há plano de código a executar**: o 302 é da borda da plataforma, aplicado antes da aplicação, por o apex estar configurado como domínio que redireciona ao primário. Nada em src/server.ts altera isso, e o impacto é baixo — o Google consolida o sinal em www porque todos os canonicals já apontam para www e nenhuma URL responde 200 nos dois hosts.

Nenhum arquivo a alterar.
