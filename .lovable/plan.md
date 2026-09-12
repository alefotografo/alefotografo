# DIAGNÓSTICO 09C — Inventário e possíveis duplicidades em /fotografo-corporativo/ (somente leitura)

Fonte: src/data/catalog.cats.json (35 categorias) + src/data/categorySeo.ts + src/routes/fotografo-corporativo.$slug.tsx.
Todas as páginas são geradas pela mesma rota dinâmica; canonical padrão https://www.alefotografo.com.br/fotografo-corporativo/{slug}; nenhuma tem noindex.

## 1. INVENTÁRIO (URL → TITLE → H1 → INTENÇÃO)

Todas: INDEXÁVEL: sim. CANONICAL: https://www.alefotografo.com.br/fotografo-corporativo/{slug} (própria URL).

1. retrato-corporativo — T: "Retrato Corporativo em SP | Orçamento no Mesmo Dia" — H1: "Retrato Corporativo" — retratos executivos corporativos.
2. fotografo-de-retratos-corporativos — T: "Retratos Profissionais em São Paulo | Ensaio Executivo" — H1: "Retratos" — retratos pessoais profissionais (descrição começa com data "26/09/2025", parece texto migrado).
3. fotos-para-clinicas-medicas — T: "Fotos para Clínicas Médicas em SP | Orçamento Hoje" — H1: "Fotos para Clínicas Médicas" — foto/vídeo para clínicas.
4. fotografia-de-logistica — T: "Fotografia de Logística em SP | Armazém e Frota" — H1: "Fotografia de Logística" — logística/transportes.
5. fotografia-industrial-em-sp — T: "Fotografia Industrial em São Paulo | Fábrica e Produção" — H1: "Fotografia Industrial" — fotografia industrial em SP.
6. fotografo-feiras-stands — T: "Fotógrafo de Feiras e Stands em São Paulo" — H1: "Fotógrafo de Feiras de Negócios" — cobertura de feiras/estandes.
7. fotos-profissionais-para-medicos — T: "Fotos Profissionais para Médicos em São Paulo" — H1: "Fotos Profissionais para Médicos" — retratos/fotos para médicos.
8. retratos-de-medicos — T: "Retratos de Médicos em São Paulo | Fotógrafo Médico" — H1: "Retratos de Médicos" — retratos para médicos.
9. retratos-de-medicas — T: "Retratos de Médicas em São Paulo | Fotografia Profissional" — H1: "Retratos de Médicas" — retratos para médicas.
10. fotografo-profissional-em-sao-paulo — T: "Fotografia Empresarial em São Paulo | Fotógrafo Profissional" — H1: "Fotografia empresarial" — fotografia empresarial geral.
11. fotografia-corporativa-em-sao-paulo — T: "Fotografia Corporativa em SP | Orçamento no Mesmo Dia" — H1: "Fotografia Corporativa" — fotografia corporativa geral.
12. ensaio-fotografico-para-dentistas — T: "Ensaio Fotográfico para Dentistas em SP | Consultório" — H1: "Ensaio fotográfico para Dentistas" — fotografia para dentistas.
13. banco-de-imagens-para-empresas — T: "Banco de Imagens para Empresas | São Paulo" — H1: "Banco de Imagens Empresarial" — banco de imagens corporativo.
14. fotografo-de-retratos-profissionais — T: "Banco de Imagens Corporativo | Fotografia em São Paulo" — H1: "Banco de imagens para empresas" — banco de imagens (slug não corresponde ao conteúdo).
15. fotografia-institucional-em-saopaulo — T: "Fotografia Institucional em SP | Empresas e Liderança" — H1: "Fotografia Institucional" — foto/vídeo institucional.
16. eventos-corporativos — T: "Fotógrafo de Eventos Empresariais em São Paulo" — H1: "Fotógrafo de Eventos Empresariais" — cobertura de eventos empresariais.
17. fotografo-de-eventos-corporativos — T: "Fotógrafo de Eventos Corporativos em São Paulo" — H1: "Fotógrafo de Eventos Corporativos" — cobertura de eventos corporativos.
18. fotografia-industrial — T: "Fotografia Industrial em São Paulo | Indústrias e Plantas" — H1: "Fotografia Industrial" — fotografia industrial (Brasil/exterior).
19. fotografia-para-escritorios-de-advocacia — T: "Fotografia para Escritórios de Advocacia em São Paulo" — H1: "Fotografia para escritórios de advocacia" — advocacia.
20. empreendimentos-imobiliarios — T: "Fotografia de Empreendimentos Imobiliários em SP" — H1: "Fotografias de Empreendimentos imobiliários" — imobiliária/construção.
21. fotos-aereas — T: "Fotos e Vídeo Aéreo com Drone em São Paulo" — H1: "Fotos Aéreas" — drone/aéreas (subtitle menciona empreendimentos imobiliários).
22. fotografo-de-culinaria — T: "Fotografia de Culinária em São Paulo | Fotos de Pratos" — H1: "Fotografia de Culinária" — gastronomia.
23. fotografo-de-arquitetura-e-interiores — T: "Fotografia de Arquitetura e Interiores em São Paulo" — H1: "Fotografia de Arquitetura" — arquitetura/interiores.
24. banco-de-imagens-para-escolas — T: "Banco de Imagens para Escolas em São Paulo" — H1: "Banco de Imagens para escolas" — banco de imagens educacional.
25. foto-impressa-na-hora — T: "Foto Lembrança Impressa na Hora em SP | Alê Fotógrafo" — H1: "Foto Lembrança Impressa na Hora" — foto lembrança em eventos.
26. fotografo-de-grupos-times-e-equipes — T: "Fotógrafo de Grupos, Times e Equipes em São Paulo" — H1: "Fotógrafo de Grupos, Times e Equipes" — fotos de equipe.
27. fotografo-festa-de-confraternizacao — T: "Fotógrafo para Festa da Firma em São Paulo" — H1: "Festa da Firma" — confraternização de empresas.
28. fotografo-festa-de-confraternizacao-1-1 — T: "Fotografia para Festa de Confraternização em SP" — H1: "Festa de Confraternização" — confraternização (slug legado -1-1).
29. totem-fotografico-totem-mania — T: "Totem Fotográfico para Eventos e Feiras em São Paulo" — H1: "Totem Fotográfico" — totem fotográfico.
30. fotografo-de-drinks-coqueteis — T: "Fotografia de Drinks e Coquetéis em São Paulo" — H1: "Fotografia de Drinks" — bebidas.
31. ensaio-feminino — T: "Ensaio Fotográfico Feminino Corporativo em São Paulo" — H1: "Ensaio Fotográfico Feminino" — retratos femininos corporativos.
32. fotos-de-hamburguer — T: "Fotos de Hambúrguer em São Paulo | Food Photography" — H1: "Foto de Hambúrguer" — subnicho food.
33. fotos-para-restaurantes — T: "Fotos para Restaurantes em São Paulo | Pratos e Ambiente" — H1: "Fotos para Restaurantes" — restaurantes.
34. ensaio-fotografico-para-redes-sociais — T: "Ensaio para Redes Sociais em São Paulo | Fotos e Vídeos" — H1: "Ensaio Fotográfico para Redes Sociais" — conteúdo para influencers.
35. fotos-de-paes — T: "Fotos de Pães Artesanais em São Paulo | Padaria" — H1: "Fotos de pães" — subnicho food.

## 2/3. AGRUPAMENTO E DUPLICIDADES

### A. FOTOGRAFIA INDUSTRIAL
- URL A: /fotografo-corporativo/fotografia-industrial
- URL B: /fotografo-corporativo/fotografia-industrial-em-sp
- SOBREPOSIÇÃO: alta
- MOTIVO: H1 idêntico ("Fotografia Industrial") e titles quase iguais ("Fotografia Industrial em São Paulo | ..."); ambos apresentam o mesmo serviço (máquinas, equipamentos, processos).
- TITLE/H1 MUITO SEMELHANTES: sim
- CONTEÚDO MUITO SEMELHANTE: parcialmente (mesma oferta; textos e galerias diferentes — 72 vs 16 fotos)

### B. BANCO DE IMAGENS
- URL A: /fotografo-corporativo/banco-de-imagens-para-empresas
- URL B: /fotografo-corporativo/fotografo-de-retratos-profissionais
- SOBREPOSIÇÃO: alta
- MOTIVO: ambos têm H1 "Banco de Imagens..." e descrições quase idênticas ("Banco de imagens para empresas é um acervo de fotos produzido sob medida..."); o slug B ("fotografo-de-retratos-profissionais") não corresponde ao conteúdo.
- TITLE/H1 MUITO SEMELHANTES: sim
- CONTEÚDO MUITO SEMELHANTE: sim (56 vs 55 fotos)

### C. RETRATOS / RETRATO CORPORATIVO
- URL A: /fotografo-corporativo/retrato-corporativo
- URL B: /fotografo-corporativo/fotografo-de-retratos-corporativos
- SOBREPOSIÇÃO: média
- MOTIVO: ambos tratam de retratos profissionais; A é executivo/corporativo, B é "retratos pessoais profissionais" (descrição inicia com data "26/09/2025", aparentando conteúdo migrado de post).
- TITLE/H1 MUITO SEMELHANTES: não (H1 B é apenas "Retratos")
- CONTEÚDO MUITO SEMELHANTE: não

### D. FOTOGRAFIA CORPORATIVA / INSTITUCIONAL / EMPRESARIAL
- URLs: /fotografo-corporativo/fotografia-corporativa-em-sao-paulo; /fotografo-corporativo/fotografia-institucional-em-saopaulo; /fotografo-corporativo/fotografo-profissional-em-sao-paulo
- SOBREPOSIÇÃO: alta (corporativa × empresarial) / média (institucional × ambas)
- MOTIVO: "fotografia-corporativa-em-sao-paulo" e "fotografo-profissional-em-sao-paulo" (H1 "Fotografia empresarial") têm descrições quase idênticas ("...fortalecem sua marca e aumentam a confiança no primeiro contato") e mesma proposta. "institucional" cobre o mesmo guarda-chuva (equipe, estrutura, processos).
- TITLE/H1 MUITO SEMELHANTES: parcialmente (titles diferentes; H1 "Fotografia Corporativa" vs "Fotografia empresarial" vs "Fotografia Institucional")
- CONTEÚDO MUITO SEMELHANTE: sim entre corporativa e empresarial

### E. EVENTOS
- URLs: /fotografo-corporativo/fotografo-de-eventos-corporativos; /fotografo-corporativo/eventos-corporativos
- SOBREPOSIÇÃO: alta
- MOTIVO: "eventos corporativos" e "eventos empresariais" são sinônimos; H1 e descriptions são paráfrases ("Eventos corporativos/empresariais acontecem...") com a mesma oferta de cobertura completa.
- TITLE/H1 MUITO SEMELHANTES: sim
- CONTEÚDO MUITO SEMELHANTE: sim (47 vs 73 fotos)

- URLs: /fotografo-corporativo/fotografo-festa-de-confraternizacao; /fotografo-corporativo/fotografo-festa-de-confraternizacao-1-1
- SOBREPOSIÇÃO: alta
- MOTIVO: mesma intenção (festa de confraternização de empresas); slugs indicam duplicata legada ("-1-1"); descrições se repetem ("Fotografo para Festa de Confraternização em São Paulo... 30 anos atendendo grandes empresas").
- TITLE/H1 MUITO SEMELHANTES: parcialmente ("Festa da Firma" vs "Festa de Confraternização")
- CONTEÚDO MUITO SEMELHANTE: sim (106 vs 124 fotos)

- URLs: fotografo-feiras-stands / totem-fotografico-totem-mania / foto-impressa-na-hora
- SOBREPOSIÇÃO: baixa (serviços específicos adjacentes a eventos, não a mesma intenção)

### F. MÉDICOS / CLÍNICAS
- URLs: /fotografo-corporativo/retratos-de-medicos; /fotografo-corporativo/fotos-profissionais-para-medicos
- SOBREPOSIÇÃO: alta
- MOTIVO: mesma intenção (retrato/foto profissional para médicos); a description de retratos-de-medicos abre com "Fotos Profissionais para Médicos em São Paulo", praticamente o H1 da outra página.
- TITLE/H1 MUITO SEMELHANTES: sim
- CONTEÚDO MUITO SEMELHANTE: sim

- URLs: retratos-de-medicos × retratos-de-medicas
- SOBREPOSIÇÃO: média (mesma intenção segmentada por gênero; titles e H1 distintos)

- URLs: fotos-para-clinicas-medicas × (retratos-de-medicos / fotos-profissionais-para-medicos)
- SOBREPOSIÇÃO: média (clínica = estrutura; médico = pessoa; descriptions compartilham trechos como "A decisão do paciente começa antes da consulta")
- fotos-para-clinicas-medicas × ensaio-fotografico-para-dentistas: baixa (subnicho distinto)

### G. OUTROS
- URLs: fotos-aereas × empreendimentos-imobiliarios — SOBREPOSIÇÃO: baixa/média. MOTIVO: o subtitle de fotos-aereas fala de empreendimentos imobiliários, mas o H1/title é drone; intenções distintas com sobreposição de texto.
- URLs: fotos-de-paes / fotos-de-hamburguer / fotografo-de-culinaria / fotos-para-restaurantes / fotografo-de-drinks-coqueteis — SOBREPOSIÇÃO: baixa (subnichos food distintos).

## 4. VERIFICAÇÕES ESPECÍFICAS (solicitadas)
1. fotografia-industrial × fotografia-industrial-em-sp: H1 IDÊNTICO, titles quase iguais, mesma oferta → duplicidade real.
2. banco-de-imagens-para-empresas × fotografo-de-retratos-profissionais: conteúdo quase idêntico; slug B incoerente com o conteúdo → duplicidade real.
3. fotografia-corporativa-em-sao-paulo × fotografia-institucional-em-saopaulo: titles/H1 distintos, propostas sobrepostas; o terceiro vértice é fotografo-profissional-em-sao-paulo (empresarial), mais próximo de corporativa.
4. fotografo-de-eventos-corporativos × eventos-corporativos: paráfrases quase idênticas → duplicidade real.
5. fotografo-festa-de-confraternizacao × fotografo-festa-de-confraternizacao-1-1: duplicata técnica legada (sufixo -1-1) → duplicidade real.

## 5. ROTAS SUSPEITAS
- /fotografo-corporativo/fotografo-festa-de-confraternizacao-1-1 — sufixo legado "-1-1", típico de duplicata de migração (Joomla).
- /fotografo-corporativo/fotografo-de-retratos-profissionais — slug promete "retratos profissionais", conteúdo é "banco de imagens para empresas".
- /fotografo-corporativo/fotografo-de-retratos-corporativos — H1 genérico "Retratos"; descrição inicia com data "26/09/2025", aparentando texto de post migrado.
- /fotografo-corporativo/fotografia-industrial-em-sp — H1 idêntico a /fotografia-industrial.
- Duas rotas com mesmo H1: "Fotografia Industrial" (fotografia-industrial e fotografia-industrial-em-sp). Nenhum title idêntico; nenhum canonical igual.
- Páginas indexáveis com pouca substância: nenhuma crítica (mínimo 15 fotos; ensaio-feminino 16, fotografia-industrial-em-sp 16, fotografo-de-retratos-corporativos 15).

## 7. RESUMO FINAL

DUPLICIDADE ALTA:
- fotografia-industrial × fotografia-industrial-em-sp
- banco-de-imagens-para-empresas × fotografo-de-retratos-profissionais
- fotografia-corporativa-em-sao-paulo × fotografo-profissional-em-sao-paulo
- fotografo-de-eventos-corporativos × eventos-corporativos
- fotografo-festa-de-confraternizacao × fotografo-festa-de-confraternizacao-1-1
- retratos-de-medicos × fotos-profissionais-para-medicos

DUPLICIDADE MÉDIA:
- retrato-corporativo × fotografo-de-retratos-corporativos
- fotografia-institucional-em-saopaulo × (corporativa / empresarial)
- retratos-de-medicos × retratos-de-medicas
- fotos-para-clinicas-medicas × (retratos-de-medicos / fotos-profissionais-para-medicos)

DUPLICIDADE BAIXA:
- fotos-aereas × empreendimentos-imobiliarios
- feiras-stands × totem-fotografico × foto-impressa-na-hora
- cluster food (pães / hambúrguer / culinária / restaurantes / drinks)

ROTAS SUSPEITAS:
- fotografo-festa-de-confraternizacao-1-1
- fotografo-de-retratos-profissionais
- fotografo-de-retratos-corporativos
- fotografia-industrial-em-sp

SEM PROBLEMA APARENTE: 17
