import type { videos } from "@/data/catalog";

/* Conteúdo editorial da página /videos. Vive fora do arquivo de rota para não
   entrar no bundle compartilhado carregado em todas as páginas. */

export type Tipo = { title: string; text: string; wa: string; to?: string };

export const TIPOS: Tipo[] = [
  {
    title: "Vídeo institucional",
    text: "Apresenta a empresa, a estrutura, a equipe e os diferenciais para clientes, parceiros e licitações.",
    wa: "vídeo institucional",
    to: "/video-institucional",
  },
  {
    title: "Vídeo de treinamento",
    text: "Padroniza procedimentos e reduz retrabalho em equipes distribuídas em várias unidades.",
    wa: "vídeo de treinamento",
  },
  {
    title: "Vídeo de integração",
    text: "Recebe novos colaboradores com cultura, normas e estrutura explicadas sempre da mesma forma.",
    wa: "vídeo de integração",
  },
  {
    title: "Depoimentos em vídeo",
    text: "Prova social com clientes, parceiros e colaboradores falando de resultado real.",
    wa: "depoimentos em vídeo",
  },
  {
    title: "Vídeos para eventos corporativos",
    text: "Registro, aftermovie e cortes de convenções, congressos, palestras e premiações.",
    wa: "vídeo de evento corporativo",
    to: "/eventos-corporativos",
  },
  {
    title: "Vídeos para clínicas e hospitais",
    text: "Mostra estrutura, equipe e atendimento com linguagem sóbria e adequada à área da saúde.",
    wa: "vídeo para clínica",
    to: "/fotografia-para-clinicas",
  },
  {
    title: "Vídeos para escritórios e profissionais",
    text: "Constrói autoridade de advogados, consultores e profissionais liberais antes do primeiro contato.",
    wa: "vídeo para escritório de advocacia",
    to: "/fotografia-para-advogados",
  },
  {
    title: "Vídeos para indústria e logística",
    text: "Registra planta, operação, frota e centros de distribuição sem parar a produção.",
    wa: "vídeo para indústria e logística",
    to: "/fotos-corporativas",
  },
  {
    title: "Reels corporativos",
    text: "Cortes verticais com legendas para LinkedIn, Instagram, YouTube Shorts e TikTok.",
    wa: "reels corporativos",
  },
  {
    title: "Vídeos para campanhas e redes sociais",
    text: "Peças curtas para tráfego pago, lançamento de produto e marca empregadora.",
    wa: "vídeo para campanha e redes sociais",
  },
];

export type Servico = {
  title: string;
  quem: string;
  quando: string;
  entrega: string;
  cta: string;
  wa: string;
};

export const SERVICOS: Servico[] = [
  {
    title: "Vídeo institucional",
    quem: "Indústrias, logística, escritórios e companhias que precisam apresentar estrutura e credibilidade.",
    quando: "Em propostas comerciais, no site, em licitações, em feiras e na apresentação para novos clientes.",
    entrega: "Roteiro, direção de cena, captação nas suas unidades, edição, color grading, trilha e versões para site, YouTube e apresentações.",
    cta: "Planejar meu vídeo institucional",
    wa: "vídeo institucional",
  },
  {
    title: "Vídeo de treinamento",
    quem: "RH, qualidade, segurança do trabalho e áreas técnicas que treinam equipes em várias unidades.",
    quando: "Quando o mesmo treinamento se repete presencialmente, há alta rotatividade ou o procedimento precisa ser padronizado.",
    entrega: "Roteiro didático a partir do procedimento da empresa, gravação em operação, narração, legendas e módulos por tema.",
    cta: "Falar sobre meu vídeo de treinamento",
    wa: "vídeo de treinamento",
  },
  {
    title: "Vídeo de integração",
    quem: "RH e comunicação interna que recebem novos colaboradores todo mês e querem padronizar o onboarding.",
    quando: "No primeiro dia do colaborador, na apresentação da cultura, das normas internas e da estrutura.",
    entrega: "Vídeo de boas-vindas, tour pelas áreas, mensagem da liderança, versões curtas por assunto e formato pronto para o portal de RH.",
    cta: "Planejar meu vídeo de integração",
    wa: "vídeo de integração",
  },
  {
    title: "Depoimentos em vídeo",
    quem: "Times comerciais que precisam de prova real para encurtar a decisão de compra em vendas B2B.",
    quando: "Em propostas, no funil de vendas, em landing pages e quando o cliente pede referências antes de fechar.",
    entrega: "Condução da entrevista, direção para quem não é acostumado à câmera, áudio limpo e cortes de 30s, 60s e versão completa.",
    cta: "Quero gravar depoimentos de clientes",
    wa: "depoimentos em vídeo com clientes",
  },
  {
    title: "Cobertura de eventos corporativos",
    quem: "Empresas e associações que realizam convenções, fóruns, premiações, SIPAT e confraternizações.",
    quando: "Quando o evento precisa render conteúdo depois: relatório para a diretoria, divulgação da próxima edição e comunicação interna.",
    entrega: "Cobertura durante o evento, entrevistas com participantes, aftermovie, cortes para redes sociais e entrega acelerada.",
    cta: "Orçar cobertura do meu evento",
    wa: "cobertura de vídeo do meu evento corporativo",
  },
  {
    title: "Reels corporativos",
    quem: "Marketing e comunicação que precisam alimentar LinkedIn e Instagram com constância e padrão profissional.",
    quando: "Em ações recorrentes de marca empregadora, bastidores, lançamentos e presença em eventos.",
    entrega: "Captação vertical, edição dinâmica, legendas queimadas e pacotes com vários cortes gravados na mesma diária.",
    cta: "Falar sobre reels corporativos",
    wa: "reels corporativos",
  },
];

export type Segmento = { title: string; desafio: string; indicado: string; beneficio: string; cta: string };

export const SEGMENTOS: Segmento[] = [
  {
    title: "Empresas e indústrias",
    desafio: "A operação é complexa e difícil de explicar em texto ou apresentação de slides.",
    indicado: "Vídeo institucional e vídeo de processo, gravados na planta ou no escritório.",
    beneficio: "Encurta a explicação técnica em reuniões, licitações e propostas comerciais.",
    cta: "Quero vídeos para minha empresa",
  },
  {
    title: "Clínicas e hospitais",
    desafio: "O paciente decide por confiança e chega ao site sem conhecer a estrutura nem a equipe.",
    indicado: "Vídeo institucional da estrutura e vídeos curtos explicando procedimentos.",
    beneficio: "Reduz a insegurança antes do agendamento e valoriza o atendimento.",
    cta: "Quero um vídeo para minha clínica",
  },
  {
    title: "Escritórios de advocacia",
    desafio: "O serviço é intangível e a escolha depende da autoridade percebida do profissional.",
    indicado: "Vídeo institucional sóbrio e série de vídeos de conteúdo com os sócios.",
    beneficio: "Constrói autoridade e sustenta a indicação com material próprio.",
    cta: "Falar sobre vídeo para meu escritório",
  },
  {
    title: "Empresas de logística",
    desafio: "Frota, armazém e capacidade operacional só convencem quando são vistos.",
    indicado: "Vídeo institucional em CDs e filiais, mais vídeo de processo operacional.",
    beneficio: "Prova capacidade de atendimento em negociações de contrato.",
    cta: "Orçar vídeo para logística",
  },
  {
    title: "RH e treinamento",
    desafio: "O mesmo treinamento é repetido presencialmente e a rotatividade consome a agenda.",
    indicado: "Vídeo de treinamento e vídeo de integração modulados por tema.",
    beneficio: "Padroniza a informação e libera horas do time interno.",
    cta: "Orçar vídeo de treinamento",
  },
  {
    title: "Marketing e comunicação",
    desafio: "Falta material de vídeo com constância e padrão para alimentar os canais.",
    indicado: "Vídeo comercial, reels corporativos e cortes para campanhas.",
    beneficio: "Mantém a presença digital ativa sem cair na estética genérica de banco de imagens.",
    cta: "Quero vídeos para campanhas",
  },
  {
    title: "Eventos corporativos",
    desafio: "O evento acontece, gera investimento alto e sobra pouco material aproveitável.",
    indicado: "Cobertura em vídeo, aftermovie, gravação de palestras e depoimentos no local.",
    beneficio: "Transforma o evento em conteúdo para relatório interno e divulgação da próxima edição.",
    cta: "Orçar cobertura de evento",
  },
  {
    title: "Profissionais liberais",
    desafio: "A venda depende de reputação pessoal, mas não há nada em vídeo que mostre o trabalho.",
    indicado: "Vídeo de apresentação profissional e cortes verticais para redes.",
    beneficio: "Aproxima o cliente antes do primeiro contato e diferencia da concorrência.",
    cta: "Falar sobre meu projeto",
  },
];

export const PROCESSO = [
  { n: "01", title: "Briefing e roteiro", text: "Entendemos o objetivo comercial e desenhamos a narrativa." },
  { n: "02", title: "Pré-produção", text: "Planejamento, locações, equipe e cronograma definidos." },
  { n: "03", title: "Captação", text: "Filmagem com equipamentos de cinema e direção de cena." },
  { n: "04", title: "Edição e finalização", text: "Montagem, color grading, trilha e mixagem." },
  { n: "05", title: "Entrega", text: "Versões para institucional, Reels, YouTube e apresentações." },
];

export const DIFERENCIAIS = [
  { title: "Mais de 30 anos em imagem corporativa", text: "Repertório em indústria, logística, saúde, jurídico e eventos." },
  { title: "Direção de cena", text: "Executivos e colaboradores raramente são atores. Conduzimos a gravação para a fala sair natural." },
  { title: "Captação profissional", text: "Câmeras de cinema, iluminação e áudio dedicados, com equipe treinada para gravar na empresa em operação." },
  { title: "Edição voltada à comunicação", text: "Montagem clara, no tempo certo do canal e alinhada à identidade visual da companhia." },
  { title: "Atendimento em São Paulo e região", text: "Grande SP, ABC, Alphaville, Faria Lima, Paulista e Berrini — e projetos em todo o Brasil." },
  { title: "Processo previsível", text: "Cronograma, escopo e aprovações definidos antes da primeira diária." },
];

/* ------------------------------------------------------------------ */

export type Group = { id: string; label: string; blurb: string; items: typeof videos };

export const GROUP_DEFS = [
  {
    id: "institucional",
    label: "Vídeo Institucional",
    blurb:
      "Conte a história, os valores e o diferencial da sua empresa em um filme que transmite credibilidade.",
    test: (t: string) =>
      /institucional|manifesto|unidade|estrutura|opera[çc][ãa]o|log[íi]stic|ind[úu]stri|solu[çc][õo]es|sustentabilidade|centro de distribui|moda infantil/i.test(t),
  },
  {
    id: "eventos",
    label: "Eventos Corporativos",
    blurb:
      "Cobertura completa de convenções, congressos, lançamentos e confraternizações, com entrega ágil e qualidade de cinema.",
    test: (t: string) =>
      /f[óo]rum|congress|conven[çc][ãa]o|festa|confraterniza|encontro|jantar|pr[êe]mio|celebra|summit|kick ?off|meeting|curso|aul[ãa]o|evento|sipat|almo[çc]o|coquetel|anos|boas festas|women in tech|fincon|mba/i.test(t),
  },
  {
    id: "feiras",
    label: "Feiras de Negócios",
    blurb:
      "Registro e aftermovie da sua participação em feiras, para gerar conteúdo e provar resultado.",
    test: (t: string) =>
      /feira|beauty fair|abrafati|febrava|fce pharma|hospitalar|conex[ãa]o farma|show|stand/i.test(t),
  },
  {
    id: "reels",
    label: "Reels e Vídeos Verticais",
    blurb:
      "Cortes verticais com legendas para LinkedIn, Instagram, YouTube Shorts e TikTok, gravados na mesma diária.",
    test: (t: string) => /reels?|vertical|short|teaser|corte/i.test(t),
  },
  {
    id: "depoimentos",
    label: "Depoimentos e Retratos",
    blurb:
      "Prova social com clientes falando de resultado real e retratos corporativos gravados em estúdio ou na empresa.",
    test: (t: string) => /depoimento|retrato|ensaio/i.test(t),
  },
] as const;
