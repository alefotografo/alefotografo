import type { Faq } from "@/lib/faqs";

/**
 * Conteúdo editorial exclusivo das galerias comerciais com histórico de
 * ranqueamento. É ADIÇÃO: nada do texto que já existe no catálogo é removido,
 * e nenhum title, H1, slug ou canonical muda por causa deste arquivo.
 *
 * Escrito na primeira pessoa (voz do site autoral, Alexandre Machado),
 * priorizando situação real, método e decisão de contratação — não repetição
 * de palavra-chave.
 */

/** Trecho de parágrafo: texto simples ou link interno contextual. */
export type Seg = string | { to: string; label: string };

export interface EditorialSection {
  h: string;
  /** Cada item é um parágrafo composto de trechos. */
  paragraphs: Seg[][];
  bullets?: string[];
}

export interface CategoryEditorial {
  /** Chapéu curto acima do bloco. */
  eyebrow: string;
  sections: EditorialSection[];
  faqs: Faq[];
  /** CTA contextual desta página. */
  ctaLabel: string;
  waMessage: string;
}

const RETRATO = "/fotografo-corporativo/retrato-corporativo";
const CORPORATIVA = "/fotografo-corporativo/fotografia-corporativa-em-sao-paulo";
const INSTITUCIONAL = "/fotografo-corporativo/fotografia-institucional-em-saopaulo";

export const categoryEditorial: Record<string, CategoryEditorial> = {
  "fotografo-de-eventos-corporativos": {
    // Entrada mínima: existe apenas para fornecer as 5 FAQs específicas e
    // derrubar o fallback de retrato do template. Sem bloco editorial visível
    // (sections vazio; o template só renderiza EditorialBlock quando há
    // seções) e sem CTA próprio — eyebrow/ctaLabel/waMessage são exigidos
    // pelo tipo, mas não chegam a renderizar.
    eyebrow: "",
    sections: [],
    faqs: [
      {
        q: "Vocês fazem cobertura fotográfica de eventos corporativos?",
        a: "Sim. Nossa equipe realiza cobertura fotográfica de eventos corporativos em São Paulo, registrando os principais momentos do evento de acordo com o briefing e a programação definida com a empresa.",
      },
      {
        q: "Quais tipos de eventos corporativos vocês fotografam?",
        a: "Atendemos diferentes formatos de eventos empresariais, como congressos, convenções, encontros corporativos, palestras, premiações, confraternizações e outros projetos realizados por empresas e organizações.",
      },
      {
        q: "A cobertura pode incluir palco, plateia e networking?",
        a: "Sim. O planejamento pode contemplar diferentes momentos do evento, incluindo apresentações, interação entre participantes, networking, convidados e demais situações relevantes para a comunicação da empresa.",
      },
      {
        q: "As fotografias podem ser usadas na comunicação da empresa?",
        a: "Sim. As imagens podem ser utilizadas em canais corporativos como site, LinkedIn, redes sociais, comunicação interna, imprensa e materiais institucionais, conforme a necessidade do projeto.",
      },
      {
        q: "Vocês atendem eventos corporativos em São Paulo?",
        a: "Sim. Atendemos eventos corporativos em São Paulo e região. Para projetos em outras localidades, o atendimento é definido conforme briefing e logística da produção.",
      },
    ],
    ctaLabel: "",
    waMessage: "",
  },
  "fotografia-corporativa-em-sao-paulo": {
    eyebrow: "O trabalho por dentro",
    sections: [
      {
        h: "O que eu chamo de fotografia corporativa",
        paragraphs: [
          [
            "Fotografia corporativa é tudo aquilo que a empresa usa para se apresentar sem estar presente: o retrato do sócio na proposta comercial, a foto da equipe na página “quem somos”, o registro do escritório, da linha de produção, de uma reunião real acontecendo. Não é uma foto bonita isolada — é um conjunto coerente, com a mesma luz, o mesmo tratamento e a mesma intenção.",
          ],
          [
            "Sou Alexandre Machado. Trabalho com fotografia corporativa em São Paulo há mais de 30 anos e participo da direção dos projetos. Conforme o escopo, a produção é executada por mim e/ou pela equipe, mantendo o mesmo padrão de direção, iluminação e tratamento. Quando o assunto é ",
            { to: RETRATO, label: "retratos de liderança e equipe" },
            ", essa continuidade importa mais do que equipamento — é o que faz o CEO e o analista recém-contratado parecerem parte da mesma empresa.",
          ],
        ],
      },
      {
        h: "Para quem costumo fotografar",
        paragraphs: [
          [
            "A maior parte dos projetos chega de empresas que precisam padronizar a imagem de um time inteiro, de escritórios profissionais (advocacia, medicina, consultoria, engenharia) e de áreas de marketing que cansaram de improvisar com foto de celular.",
          ],
        ],
        bullets: [
          "Empresas que vão refazer o site e não têm imagem própria de gente",
          "Times de 5 a 60 pessoas que precisam de retrato no mesmo padrão",
          "Sócios e diretores que aparecem em proposta, palestra e imprensa",
          "RH e marketing montando material de recrutamento e comunicação interna",
          "Escritórios e clínicas que querem mostrar estrutura e atendimento reais",
        ],
      },
      {
        h: "O que dá para produzir em uma diária",
        paragraphs: [
          [
            "Em um período eu costumo cobrir mais do que as pessoas imaginam. O que define o alcance é a ordem das coisas: retratos primeiro, enquanto todo mundo está arrumado, e depois ambiente e operação, que dependem menos de agenda.",
          ],
        ],
        bullets: [
          "Retratos individuais com fundo padronizado",
          "Foto de equipe e de grupos por área",
          "Pessoas trabalhando de verdade — reunião, atendimento, bancada",
          "Escritório, recepção, salas e detalhes de arquitetura",
          "Processos, produção, laboratório, obra e operação",
          "Equipamentos, tecnologia e produtos no contexto de uso",
        ],
      },
      {
        h: "Por que contratar quem já fez isso muitas vezes",
        paragraphs: [
          [
            "Trinta anos não servem para operar a câmera melhor. Servem para o dia render: eu chego, leio o espaço, escolho onde a luz funciona, resolvo teto baixo e vidro atrás da mesa, e conduzo uma fila de executivos ocupados sem travar a agenda de ninguém. É esse tipo de repertório que evita a diária que termina com trinta fotos parecidas e nenhuma utilizável.",
          ],
          [
            "É o mesmo motivo pelo qual costumo sugerir pensar o material como acervo, e não como avulso — o raciocínio de ",
            { to: INSTITUCIONAL, label: "banco de imagens da empresa" },
            " muda o que se fotografa no dia.",
          ],
        ],
      },
      {
        h: "Como funciona, do primeiro contato à entrega",
        paragraphs: [
          [
            "Começa com uma conversa curta: quantas pessoas, onde, para que as imagens vão servir. Com isso eu monto um roteiro por horário, envio orientação de roupa e defino os pontos de captação. No dia, levo iluminação e fundo portátil, fotografo dirigindo cada pessoa e mostro no monitor quando faz sentido. A entrega vem tratada, com cor ajustada, retoque natural e cortes prontos para site, LinkedIn e apresentação.",
          ],
          [
            "Atendo em toda a cidade — Paulista, Faria Lima, Itaim, Berrini, Vila Olímpia, Alphaville — e também em fábricas e centros de distribuição na Grande São Paulo. Se você quiser ver como isso aparece em outros segmentos antes de decidir, os ",
            { to: "/portfolio", label: "cases por segmento" },
            " estão organizados por tipo de empresa.",
          ],
        ],
      },
    ],
    faqs: [
      {
        q: "Quanto tempo leva uma sessão de fotografia corporativa na empresa?",
        a: "Para retratos, trabalho com 10 a 15 minutos por pessoa: um time de 20 pessoas cabe em meio período. Quando entram ambientes, reuniões e operação, o dia inteiro rende retratos, fotos de equipe e um bloco sólido de imagens de rotina. Eu monto a escala por horário para ninguém ficar esperando.",
      },
      {
        q: "Preciso preparar o escritório antes?",
        a: "Pouco. Eu peço apenas uma sala ou um corredor com espaço para o fundo e a luz, e aviso com antecedência o que costuma aparecer na foto e incomodar depois: caixa de papelão, cabo solto, quadro branco escrito, mesa cheia. Levo iluminação própria, então não dependo da janela nem do dia estar aberto.",
      },
      {
        q: "Vocês orientam sobre roupa e aparência?",
        a: "Sim, envio antes uma orientação simples: tons sólidos funcionam melhor que estampa fina, camisa passada, evitar logo grande, e trazer uma segunda peça quando a pessoa aparece em contextos diferentes. No dia eu ajusto ombro, colarinho e postura antes de cada sequência.",
      },
      {
        q: "Quem fotografa é você mesmo?",
        a: "A direção é sempre minha. Retratos individuais podem ser fotografados pessoalmente por mim, de acordo com o formato contratado; produções maiores são executadas por mim e/ou pela equipe, conforme o escopo. Coberturas de grande porte com vários fotógrafos ao mesmo tempo são atendidas pela equipe, em alefotografos.com.br.",
      },
      {
        q: "A empresa pode usar as imagens em qualquer lugar?",
        a: "Sim. A cessão é para uso comercial e institucional sem limite de prazo ou plataforma: site, redes, anúncios, apresentações, propostas e imprensa. Os arquivos vão em alta resolução e em versões já cortadas para web.",
      },
    ],
    ctaLabel: "Falar com o Alê sobre fotografia corporativa",
    waMessage:
      "Olá Alexandre, quero fotografia corporativa para a minha empresa em São Paulo. Pode me passar as condições?",
  },

  "retrato-corporativo": {
    eyebrow: "Como eu conduzo o ensaio",
    sections: [
      {
        h: "Quase ninguém sabe posar — e isso não é problema",
        paragraphs: [
          [
            "Boa parte das pessoas que eu fotografo começa dizendo a mesma frase: “eu não sei posar” ou “nunca gosto das minhas fotos”. Elas estão certas sobre o desconforto e erradas sobre a causa. Não é aparência, é direção. Ombro girado meio palmo, queixo levemente à frente do peito, peso do corpo em um pé, respirar e soltar o ar antes do clique: são ajustes pequenos que mudam completamente quem aparece na imagem.",
          ],
          [
            "Meu trabalho no retrato é conduzir isso do início ao fim, até a foto representar como a pessoa quer ser percebida profissionalmente — firme sem ser dura, acessível sem parecer informal demais.",
          ],
        ],
      },
      {
        h: "O que eu decido junto com você antes de fotografar",
        paragraphs: [
          [
            "Um retrato corporativo tem finalidade. Uma foto para perfil de rede pede enquadramento fechado e fundo limpo; um retrato para imprensa ou capa de relatório pede respiro e contexto; uma sequência para apresentação institucional pede a mesma luz em todo mundo. Definir o uso antes evita descobrir depois que falta o corte certo.",
          ],
        ],
        bullets: [
          "Expressão: olhar de escuta, olhar de comando, sorriso contido",
          "Enquadramento: fechado para perfil, meio corpo para site, corpo inteiro para imprensa",
          "Roupa: tom sólido, camisa passada, segunda peça para variar sem refazer o ensaio",
          "Fundo: neutro padronizado, parede do próprio escritório ou ambiente com profundidade",
          "Formato: cortes verticais, horizontais e quadrados já prontos na entrega",
        ],
      },
      {
        h: "Onde esses retratos vão trabalhar depois",
        paragraphs: [
          [
            "O retrato é a imagem que chega antes de você. Ela abre a conversa no ",
            { to: "/foto-profissional-para-linkedin", label: "perfil do LinkedIn" },
            ", assina a proposta comercial, aparece na página de sócios e vai para o release quando a imprensa pede foto com urgência. Para diretoria e conselho, esse cuidado tem nome próprio: é o território da ",
            { to: "/fotografia-executiva", label: "fotografia executiva" },
            ".",
          ],
          [
            "Se você quer ver o raciocínio antes de marcar, escrevi um texto que resume bem o que costumo ajustar na prática: ",
            { to: "/blog/fotografo-5-poses-para-retrato-corporativo", label: "5 poses para retrato corporativo" },
            ".",
          ],
        ],
      },
      {
        h: "Individual, ou o time inteiro no mesmo padrão",
        paragraphs: [
          [
            "Retrato individual é ensaio: tempo para experimentar expressão e ângulo. Time é logística: mesma luz, mesmo fundo e mesma distância para trinta pessoas, uma depois da outra, sem que a última fique diferente da primeira. Quando o projeto envolve também ambientes, equipe e rotina, ele deixa de ser retrato e passa a ser ",
            { to: CORPORATIVA, label: "fotografia corporativa" },
            " — e vale planejar o dia inteiro de uma vez.",
          ],
        ],
      },
    ],
    faqs: [
      {
        q: "Quanto tempo dura um ensaio de retrato corporativo?",
        a: "Individual: de 20 a 40 minutos, tempo suficiente para variar expressão, enquadramento e uma troca de roupa. Em ensaios de equipe, trabalho com 10 a 15 minutos por pessoa, em escala por horário.",
      },
      {
        q: "Que roupa devo levar?",
        a: "Tons sólidos e bem passados funcionam melhor do que estampa fina, que vibra na imagem. Traga uma segunda peça — normalmente um blazer e uma camisa mais leve — para render duas leituras diferentes no mesmo ensaio. Sapato e barra também aparecem quando o retrato é de corpo inteiro.",
      },
      {
        q: "Quantas fotos eu recebo?",
        a: "Você escolhe entre as melhores selecionadas do ensaio e recebe as imagens finalizadas em alta resolução, mais os cortes prontos para perfil, site e apresentação. Prefiro entregar poucas imagens realmente boas a um volume grande de repetições.",
      },
      {
        q: "É melhor fotografar em estúdio ou na empresa?",
        a: "Depende do uso. Estúdio dá fundo neutro absoluto e controle total, ideal para perfil e padronização. Na empresa, o retrato ganha contexto e reduz o deslocamento de gente ocupada — eu levo iluminação e fundo portátil, então o resultado é equivalente.",
      },
      {
        q: "E se eu travar na frente da câmera?",
        a: "É o cenário mais comum, e o ensaio é construído para isso. Começo pelas variações fáceis, converso durante todo o processo, mostro a tela quando ajuda e vou ajustando postura e olhar. Ninguém precisa chegar sabendo posar — quem dirige sou eu.",
      },
    ],
    ctaLabel: "Conversar sobre um ensaio de retrato",
    waMessage:
      "Olá Alexandre, gostaria de fazer um retrato corporativo. Pode me explicar como funciona?",
  },

  "fotografia-institucional-em-saopaulo": {
    eyebrow: "Imagem própria em vez de banco genérico",
    sections: [
      {
        h: "Por que vale ter um banco de imagens seu",
        paragraphs: [
          [
            "Empresa que não tem imagem própria acaba usando foto de banco: o escritório que não é o seu, a equipe que não existe, o aperto de mão de sempre. Funciona por um tempo e cobra a conta depois — o site não parece com a visita, a apresentação não sustenta a proposta e nada é reaproveitável.",
          ],
          [
            "Fotografia institucional resolve isso de forma acumulativa. Em vez de contratar foto para cada demanda, você constrói um acervo com a sua cara: as suas pessoas, o seu espaço, o seu processo. No ano seguinte, o material continua servindo, e é só complementar o que mudou.",
          ],
        ],
      },
      {
        h: "Onde o acervo é usado no dia a dia",
        paragraphs: [
          [
            "É o material que o time de marketing e o comercial abrem toda semana. Quanto mais completo, menos tempo se perde procurando uma imagem que sirva.",
          ],
        ],
        bullets: [
          "Site institucional e páginas de serviço",
          "LinkedIn da empresa e dos executivos",
          "Apresentações, propostas comerciais e licitações",
          "Relatórios, materiais impressos e mídia",
          "Campanhas e conteúdo para redes sociais",
          "Recrutamento, onboarding e comunicação interna",
        ],
      },
      {
        h: "O que eu fotografo em um projeto institucional",
        paragraphs: [
          [
            "A regra é registrar a empresa funcionando, não montar cena. Pessoas concentradas no que estão fazendo, espaço organizado como ele é, processo na sequência real. É por isso que esse tipo de projeto quase sempre inclui um bloco de ",
            { to: RETRATO, label: "retratos de liderança e equipe" },
            " no mesmo dia: são as imagens que mais circulam depois.",
          ],
        ],
        bullets: [
          "Pessoas trabalhando: reunião, atendimento, bancada, campo",
          "Liderança e sócios em contexto",
          "Escritório, recepção, salas e detalhes de arquitetura",
          "Fábrica, laboratório, logística e centro de distribuição",
          "Equipamentos, tecnologia e produtos em uso",
          "Etapas de processo, do pedido à entrega",
        ],
      },
      {
        h: "Quando entra vídeo no mesmo dia",
        paragraphs: [
          [
            "Em parte dos projetos institucionais vale gravar junto com a foto: a equipe já está preparada, o espaço já está arrumado e a autorização de imagem já foi resolvida. Aí eu capto também depoimento curto de liderança e planos de apoio de ambiente e processo, que rendem vídeo institucional e cortes verticais para redes. Se esse é o seu caso, os ",
            { to: "/videos", label: "trabalhos de vídeo institucional" },
            " mostram o formato de entrega. Se você só precisa de foto, o dia é mais simples e sai mais barato — não recomendo somar vídeo por completude.",
          ],
          [
            "Quando o foco é a padronização de retratos e ambientes sem produção audiovisual, a conversa é a mesma da ",
            { to: CORPORATIVA, label: "fotografia corporativa" },
            ".",
          ],
        ],
      },
    ],
    faqs: [
      {
        q: "Qual a diferença entre fotografia institucional e fotografia corporativa?",
        a: "Na prática se sobrepõem, mas a intenção muda. Chamo de institucional o projeto pensado como acervo da empresa — estrutura, processos, pessoas, equipamentos — para alimentar site, propostas e comunicação ao longo do ano. Corporativa é o termo mais amplo, que inclui também demandas pontuais como retratos de um time.",
      },
      {
        q: "A empresa fica com o direito de uso das imagens?",
        a: "Sim, uso comercial e institucional sem limite de prazo ou plataforma. A autoria continua sendo minha, como manda a lei, mas você usa livremente em site, redes, anúncios, impressos e apresentações.",
      },
      {
        q: "Como o acervo é entregue e organizado?",
        a: "Entrego em galeria online por pastas — retratos, equipe, ambientes, processos, detalhes — com arquivos em alta resolução e versões otimizadas para web, além dos cortes verticais para redes. Nomeação e estrutura ficam prontas para o time de marketing usar sem precisar renomear nada.",
      },
      {
        q: "De quanto em quanto tempo vale refazer?",
        a: "A maioria das empresas atualiza a cada 18 a 24 meses, ou antes disso quando há mudança de sede, troca na diretoria, nova linha de produto ou reformulação de marca. Costumo sugerir uma diária maior no início e complementos curtos depois.",
      },
      {
        q: "Preciso avisar os funcionários?",
        a: "Sim, e faz diferença no resultado. Um aviso interno com dia, horário e orientação simples de roupa deixa as pessoas menos surpresas e mais colaborativas. Também alinho antes quais áreas não podem ser fotografadas por confidencialidade.",
      },
    ],
    ctaLabel: "Conversar sobre banco de imagens",
    waMessage:
      "Olá Alexandre, quero fotografia institucional / banco de imagens para a minha empresa. Pode me explicar como funciona?",
  },
  "fotografo-profissional-em-sao-paulo": {
    eyebrow: "A experiência por dentro",
    sections: [
      {
        h: "Experiência em diferentes tipos de produção",
        paragraphs: [
          [
            "Ao longo dos anos, produzimos imagens para empresas, profissionais, eventos, ambientes e operações em diferentes setores. A experiência em situações variadas permite adaptar direção, iluminação e linguagem visual às necessidades de cada projeto.",
          ],
        ],
      },
      {
        h: "Fotografia profissional para empresas e profissionais",
        paragraphs: [
          [
            "As produções podem envolver pessoas, equipes, ambientes, serviços, eventos e outros elementos importantes para a comunicação de uma empresa ou profissional. O planejamento considera onde as imagens serão utilizadas e qual mensagem precisam transmitir.",
          ],
        ],
      },
      {
        h: "Atendimento em São Paulo e região",
        paragraphs: [
          [
            "Atendemos empresas e profissionais em São Paulo, Grande São Paulo e região do ABC, além de produções em outras localidades conforme o projeto.",
          ],
        ],
      },
    ],
    // Mesmas perguntas genéricas já exibidas nesta página antes do editorial —
    // falam da contratação do fotógrafo, sem depender de "fotografia empresarial".
    faqs: [
      {
        q: "Qual a diferença entre alefotografo.com.br e alefotografos.com.br?",
        a: "Aqui, no alefotografo.com.br, sou eu, Alexandre Machado, quem fotografa: retratos profissionais, headshots para LinkedIn, executivos, sócios e equipes. O alefotografos.com.br é operado pela equipe Alê Fotógrafo e cuida de coberturas de grande porte — feiras, congressos, convenções e produções com vários fotógrafos ao mesmo tempo. Se o seu projeto é imagem de pessoas com direção de pose, é comigo.",
      },
      {
        q: "Quem fotografa o meu ensaio: você ou um assistente?",
        a: "Os projetos são dirigidos por mim e executados por mim e por profissionais da equipe, conforme o escopo. Em retratos individuais, quem fotografa sou eu. Se eu não tiver a data disponível, eu digo, em vez de prometer o impossível.",
      },
      {
        q: "Quanto custa um retrato profissional em São Paulo?",
        a: "Depende do número de pessoas, do local (meu estúdio ou o seu escritório) e da quantidade de imagens finalizadas. Ensaios individuais de retrato têm valor fechado; para times, o cálculo é por bloco de horas, com custo por pessoa caindo conforme o volume. Me envie quantas pessoas e a data desejada pelo WhatsApp e eu devolvo o orçamento em até 1 dia útil.",
      },
      {
        q: "Nunca fico bem em foto. Isso tem solução?",
        a: "Tem, e quase sempre é direção, não aparência. Postura de ombros, distância do queixo em relação ao peito, ângulo de rosto, para onde o olhar vai e o momento de respirar antes do clique mudam completamente o resultado. Eu conduzo isso do começo ao fim do ensaio — ninguém precisa saber posar sozinho.",
      },
      {
        q: "Quanto tempo dura um ensaio de retrato e quando recebo as fotos?",
        a: "Um retrato individual leva de 20 a 40 minutos; em ensaios de equipe, de 10 a 15 minutos por pessoa. As imagens tratadas ficam prontas em até 1 dia útil, conforme o escopo, com ajuste de cor, retoque natural de pele e cortes já prontos para LinkedIn, site e apresentações. Em cobertura de evento, a seleção das melhores imagens sai no mesmo dia, quando prevista no escopo.",
      },
    ],
    ctaLabel: "Conversar sobre seu projeto",
    waMessage:
      "Olá Alexandre, quero conversar sobre uma produção fotográfica em São Paulo. Pode me explicar como funciona?",
  },
  "retratos-de-medicos": {
    eyebrow: "A sessão por dentro",
    sections: [
      {
        h: "Retratos profissionais para médicos",
        paragraphs: [
          [
            "A sessão é planejada de acordo com a especialidade, o ambiente e a forma como as imagens serão utilizadas. Trabalhamos expressão, postura, enquadramento e iluminação para produzir retratos profissionais com naturalidade e consistência.",
          ],
        ],
      },
      {
        h: "No consultório ou em estúdio",
        paragraphs: [
          [
            "Os retratos podem ser produzidos no próprio consultório, aproveitando elementos do ambiente profissional, ou em estúdio com fundo e iluminação controlados. Também contamos com local para sessões na Alameda Santos, próximo à Avenida Paulista.",
          ],
        ],
      },
      {
        h: "Imagens para diferentes canais profissionais",
        paragraphs: [
          [
            "Os retratos podem ser utilizados em sites, perfis profissionais, LinkedIn, redes sociais, apresentações, materiais de imprensa e comunicação do consultório.",
          ],
        ],
      },
    ],
    faqs: [
      {
        q: "Onde podem ser feitos os retratos profissionais para médicos?",
        a: "No próprio consultório, aproveitando o ambiente profissional, ou em estúdio com fundo e iluminação controlados. Também contamos com local para sessões na Alameda Santos, próximo à Avenida Paulista, em São Paulo.",
      },
      {
        q: "Vocês orientam poses e expressão durante a sessão?",
        a: "Sim. A direção faz parte da sessão: trabalhamos postura, expressão, enquadramento e iluminação para que o retrato saia natural e consistente, sem que o médico precise saber posar.",
      },
      {
        q: "As fotos podem ser feitas dentro do consultório?",
        a: "Podem. A sessão no consultório aproveita elementos do próprio ambiente profissional e é planejada para acontecer com o mínimo de interferência na rotina de atendimento.",
      },
      {
        q: "Os retratos podem ser usados no LinkedIn e no site profissional?",
        a: "Sim. Os retratos são produzidos já pensando nos canais em que serão publicados: site, perfis profissionais, LinkedIn, redes sociais, apresentações, materiais de imprensa e comunicação do consultório.",
      },
      {
        q: "Vocês possuem local para realizar a sessão em São Paulo?",
        a: "Sim. Contamos com local para sessões na Alameda Santos, próximo à Avenida Paulista, com fundo e iluminação controlados.",
      },
    ],
    ctaLabel: "Conversar sobre seus retratos",
    waMessage:
      "Olá Alexandre, quero conversar sobre retratos profissionais para médico. Pode me explicar como funciona?",
  },
  "fotografia-de-logistica": {
    eyebrow: "Fotografia para logística e transportes",
    sections: [
      {
        h: "O que documentamos em uma operação logística",
        paragraphs: [
          [
            "Produzimos fotografia em operações logísticas de verdade: frotas, caminhões, centros de distribuição, armazéns, docas e áreas de expedição. O roteiro também pode incluir as pessoas que movem a operação — equipes, motoristas, liderança e executivos — e a estrutura física que sustenta o processo. Tudo é definido no briefing, conforme o que cada empresa precisa mostrar. No blog, detalhamos ",
            { to: "/blog/fotografia-para-transportadoras", label: "o que fotografar para montar o acervo de uma transportadora" },
            " — da frota às docas.",
          ],
          [
            "Esse material é parte da nossa atuação de ",
            { to: "/fotografo-empresarial", label: "fotografia empresarial" },
            " e segue o mesmo padrão de ",
            { to: "/fotos-corporativas", label: "fotografia corporativa" },
            ": imagens consistentes, com direção e tratamento profissionais, prontas para os canais da empresa.",
          ],
        ],
        bullets: [
          "Frota: caminhões, vans, carretas e padronização visual",
          "Centros de distribuição e armazéns",
          "Operação: docas, expedição e movimentação de cargas",
          "Equipes, motoristas e liderança",
          "Estrutura física e processos",
        ],
      },
      {
        h: "Para onde vão as imagens",
        paragraphs: [
          [
            "Transportadoras e operadores logísticos usam esse material no site institucional, em apresentações comerciais e propostas, na comunicação corporativa e interna, em materiais de RH e recrutamento e nas redes profissionais da empresa. Para quem precisa de acervo contínuo, estruturamos um ",
            { to: "/fotografo-corporativo/banco-de-imagens-para-empresas", label: "banco de imagens corporativo" },
            " com as fotografias organizadas por tema, prontas para uso ao longo do ano.",
          ],
          [
            "Quando o projeto pede uma visão mais ampla da estrutura, a cobertura também pode integrar ",
            { to: "/fotografo-corporativo/fotos-aereas", label: "fotografia aérea" },
            ", para mostrar a dimensão da operação a partir de outra perspectiva.",
          ],
          [
            "Projetos podem ainda unir fotografia e ",
            { to: "/videos", label: "produção de vídeos corporativos" },
            " em um mesmo planejamento, quando isso faz sentido para o objetivo da empresa — um único roteiro de captação alimenta os dois materiais. No blog, mostramos ",
            { to: "/blog/video-institucional-para-transportadoras", label: "como o vídeo institucional apresenta estrutura, operação e pessoas de uma transportadora" },
            ", com cases reais do setor.",
          ],
        ],
      },
      {
        h: "Como planejamos a produção",
        paragraphs: [
          [
            "Tudo começa com o briefing: entendemos o objetivo das imagens, os locais disponíveis (frota, armazém, docas, escritório) e as áreas de acesso. A partir disso, montamos um roteiro de captação junto com a equipe de operações, definindo horários e percursos que buscam reduzir interferências na rotina da empresa, dentro das normas de segurança de cada local. Depois da captação, fazemos a seleção e o tratamento das imagens, com entrega conforme o escopo contratado.",
          ],
        ],
      },
      {
        h: "Projetos em logística",
        paragraphs: [
          [
            "Nossa equipe já produziu fotografia e vídeo para empresas do setor logístico. Na ATIVA Logística, desenvolvemos uma série de projetos que documentam a operação e a estrutura da empresa — como o vídeo ",
            { to: "/videos/ativa-log-estrutura-operacao-e-eficiencia-logistica", label: "Estrutura, Operação e Eficiência Logística" },
            ", a apresentação do ",
            { to: "/videos/ativa-logistica-apresenta-o-seu-centro-de-distribuicao-em-itapevi", label: "Centro de Distribuição em Itapevi" },
            " e o registro da ",
            { to: "/videos/ativa-logistica-unidade-barueri", label: "unidade de Barueri" },
            " — além de outros projetos institucionais e comemorativos. Contamos esse trabalho em detalhes no ",
            { to: "/blog/case-ativa-logistica-fotografia-video", label: "case da ATIVA Logística" },
            ", publicado no blog.",
          ],
          [
            "Também produzimos vídeos institucionais para outras empresas do setor, como a ",
            { to: "/videos/fiorde-logistica-solucoes-logisticas-integradas-para-empresas", label: "Fiorde Logística" },
            " e a ",
            { to: "/videos/video-institucional-bmx-logistica", label: "BMX Logística" },
            ". Quando o projeto prevê, fotografia e audiovisual são planejados em conjunto — conheça a variedade de formatos em ",
            { to: "/videos", label: "outros vídeos corporativos" },
            ".",
          ],
        ],
      },
    ],
    faqs: [
      {
        q: "Que tipos de imagens podem ser produzidas em uma operação logística?",
        a: "Depende do escopo definido no briefing. Em geral, o roteiro pode contemplar frota, centros de distribuição e armazéns, docas e expedição, movimentação de cargas, equipes em operação, liderança e estrutura física da empresa.",
      },
      {
        q: "Vocês fotografam frotas, armazéns e centros de distribuição?",
        a: "Sim. Esses são os cenários mais recorrentes em projetos de fotografia de logística. Atendemos em São Paulo e região; projetos em outras regiões são avaliados conforme a logística da produção.",
      },
      {
        q: "É possível fotografar a operação sem interromper a rotina da empresa?",
        a: "O planejamento busca reduzir interferências: roteiro de locais e horários é definido junto com a equipe de operações, respeitando as normas de segurança de cada área e os fluxos de trabalho do dia a dia.",
      },
      {
        q: "É possível produzir fotos e vídeos no mesmo projeto?",
        a: "Sim, quando previsto no escopo. Fotografia e produção audiovisual podem ser planejadas em um mesmo roteiro de captação, com equipes integradas e direção visual consistente entre os materiais.",
      },
      {
        q: "Como funciona o planejamento de uma produção fotográfica para transportadoras e empresas de logística?",
        a: "O processo parte de um briefing sobre objetivo, locais e equipes envolvidas. A partir dele definimos o roteiro de captação, realizamos a produção nas instalações da empresa e entregamos a seleção de imagens tratadas, conforme o escopo acordado.",
      },
    ],
    ctaLabel: "Falar sobre sua operação",
    waMessage:
      "Olá! Trabalhamos com logística e queremos fotografar nossa operação. Pode me explicar como funciona?",
  },
  "banco-de-imagens-para-empresas": {
    eyebrow: "Acervo fotográfico da empresa",
    sections: [
      {
        h: "Um acervo planejado para render o ano inteiro",
        paragraphs: [
          [
            "Banco de imagens empresarial é o conjunto de fotos profissionais que a sua empresa passa a ter sob medida: retratos de liderança e equipe, ambientes, processos, atendimento, produtos e cultura. Produzo esse acervo em São Paulo para empresas que precisam de volume com consistência — imagens prontas para alimentar site, LinkedIn, campanhas e apresentações sem depender de foto genérica de banco.",
          ],
          [
            "O planejamento é parte do serviço: cada sessão é roteirizada para render variações — horizontal, vertical, close e plano aberto — com o mesmo padrão de luz e linguagem, para o material servir a diferentes formatos ao longo do ano.",
          ],
        ],
      },
      {
        h: "Operações reais no acervo",
        paragraphs: [
          [
            "Parte do nosso acervo vem de operações industriais e logísticas: frotas, armazéns, centros de distribuição, docas e equipes em operação. Para empresas do setor, o banco é estruturado com esse recorte — o mesmo trabalho que detalhamos na página de ",
            { to: "/fotografo-corporativo/fotografia-de-logistica", label: "fotografia de logística" },
            ".",
          ],
        ],
      },
    ],
    faqs: [],
    ctaLabel: "Planejar meu banco de imagens",
    waMessage:
      "Olá Alexandre, quero estruturar um banco de imagens para minha empresa. Pode me explicar como funciona?",
  },
};

export function editorialFor(slug: string): CategoryEditorial | undefined {
  return categoryEditorial[slug];
}
