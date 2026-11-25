import type { Seg } from "@/data/categoryEditorial";

/**
 * Pontes editoriais entre artigos com tráfego orgânico e as páginas comerciais
 * correspondentes. É adição: title, H1, URL, data e corpo dos posts continuam
 * exatamente como estão. Formato de texto, sem botão e sem WhatsApp.
 */
export interface PostBridge {
  paragraphs: Seg[][];
}

export const postBridges: Record<string, PostBridge> = {
  "fotografo-5-poses-para-retrato-corporativo": {
    paragraphs: [
      [
        "Pose se aprende lendo, mas quase nunca se executa sozinho na frente do espelho — o que faz a foto funcionar é alguém corrigindo ombro, queixo e olhar no momento do clique. É exatamente isso que eu faço no ",
        {
          to: "/fotografo-corporativo/retrato-corporativo",
          label: "meu trabalho de retrato corporativo",
        },
        ", em São Paulo, com direção do começo ao fim do ensaio.",
      ],
      [
        "Quando a demanda é a empresa inteira no mesmo padrão, e não uma pessoa só, o caminho é a ",
        {
          to: "/fotografo-corporativo/fotografia-corporativa-em-sao-paulo",
          label: "fotografia corporativa feita no seu escritório",
        },
        ".",
      ],
    ],
  },
  "7-erros-que-voce-deve-evitar-na-foto-de-perfil-no-linkedin": {
    paragraphs: [
      [
        "Vale lembrar por que esses detalhes pesam tanto: a sua foto de perfil comunica antes da primeira conversa. Ela é lida em segundos e sinaliza senioridade, cuidado e coerência com o que você diz fazer — muitas vezes antes de alguém rolar até a sua experiência.",
      ],
      [
        "Eu sou Alexandre Machado e dirijo pessoalmente esse tipo de produção em São Paulo — retratos individuais podem ser fotografados por mim, conforme agenda e formato —, seja como ",
        { to: "/foto-profissional-para-linkedin", label: "foto profissional para LinkedIn" },
        " ou como parte de um ",
        {
          to: "/fotografo-corporativo/retrato-corporativo",
          label: "ensaio de retrato corporativo",
        },
        " com mais enquadramentos e usos.",
      ],
    ],
  },
  "11-ideias-para-o-plano-de-fundo-de-seu-retrato-profissional": {
    paragraphs: [
      [
        "Escolher o fundo é metade do resultado. A outra metade é a condução: no ",
        { to: "/foto-profissional", label: "ensaio de foto profissional" },
        " que produzimos, nossa equipe dirige a pose e o enquadramento do início ao fim da sessão, no escritório ou em locação.",
      ],
      [
        "Quando as fotos são para a empresa inteira — time, site e materiais — o formato é o ",
        {
          to: "/fotografo-corporativo/retrato-corporativo",
          label: "ensaio de retrato corporativo",
        },
        ", realizado no seu escritório.",
      ],
    ],
  },
  "7-dicas-para-voce-nunca-mais-errar-na-aparencia-ao-tirar-fotos-profissionais": {
    paragraphs: [
      [
        "Postura, roupa e expressão funcionam melhor com direção em tempo real. É assim que conduzimos a ",
        { to: "/foto-profissional", label: "sessão de foto profissional" },
        ": cada detalhe ajustado antes do clique.",
      ],
      [
        "Para equipes, realizamos a ",
        {
          to: "/fotografo-corporativo/fotografia-corporativa-em-sao-paulo",
          label: "fotografia corporativa no escritório",
        },
        ", padronizando a aparência de todo o time em uma única produção.",
      ],
    ],
  },
  "7-lugares-incriveis-para-tirar-fotos-profissionais-em-sao-paulo": {
    paragraphs: [
      [
        "Esses mesmos cenários funcionam em uma ",
        { to: "/foto-profissional", label: "produção de retrato profissional em locação" },
        ": nossa equipe prepara o percurso, a luz e a direção de pose em cada ponto.",
      ],
      [
        "Para empresas, desenvolvemos ",
        {
          to: "/fotografo-corporativo/fotografia-corporativa-em-sao-paulo",
          label: "ensaios corporativos em São Paulo",
        },
        " com equipes e times, no escritório ou em locação externa.",
      ],
    ],
  },
  "fotografo-ensina-que-foto-profissional-aparece-14-vezes-mais-do-que-uma-foto-amadora-no-linkedin":
    {
      paragraphs: [
        [
          "Para atualizar o perfil com esse padrão, produzimos a ",
          { to: "/foto-profissional-para-linkedin", label: "foto profissional para LinkedIn" },
          " com direção de pose pensada para o recorte do perfil e a leitura no feed.",
        ],
      ],
    },
  "fotografia-estande-feiras-eventos-setor": {
    paragraphs: [
      [
        "Um exemplo de cobertura com foto e vídeo na mesma operação é o trabalho feito para a SQ Química na FCE Pharma e no ABRAFATI Show, reunido no ",
        { to: "/cases/sq-quimica", label: "case SQ Química" },
        ".",
      ],
    ],
  },
  "fotografia-industrial-fabrica-operacao": {
    paragraphs: [
      [
        "Na indústria química, produzimos vídeo institucional da unidade de Vinhedo e coberturas de feiras do setor para a SQ Química — veja o ",
        { to: "/cases/sq-quimica", label: "case SQ Química" },
        " com as produções publicadas.",
      ],
    ],
  },
  "case-ativa-logistica-fotografia-video": {
    paragraphs: [
      [
        "Este artigo conta o projeto por dentro. As produções comprovadas — fotografias da operação e os vídeos publicados — estão reunidas no ",
        { to: "/cases/ativa-logistica", label: "case comercial da ATIVA Logística" },
        ", com o resumo do projeto e os links para cada material.",
      ],
    ],
  },
  "retrato-executivo-x-foto-de-cracha-3-diferencas": {
    paragraphs: [
      [
        "A diferença entre as duas fotos está menos na câmera e mais na condução: direção de pose, luz desenhada para o rosto e seleção do melhor enquadramento. É esse o padrão que produzimos no ",
        { to: "/fotografia-executiva", label: "ensaio de retrato executivo" },
        ", feito para diretoria e C-level em São Paulo.",
      ],
    ],
  },
  "foto-para-linkedin-o-que-realmente-funciona": {
    paragraphs: [
      [
        "O que funciona no LinkedIn é o mesmo que funciona numa reunião de negócio: clareza, postura e naturalidade. É assim que produzimos a ",
        { to: "/foto-profissional-para-linkedin", label: "foto profissional para LinkedIn" },
        " — no escritório do cliente ou em locação, com direção durante toda a sessão.",
      ],
    ],
  },
  "headshots-equipe-escala-50-colaboradores-um-dia": {
    paragraphs: [
      [
        "Escala desse tamanho só funciona com método: mesmo fundo, mesma luz e sessão cronometrada por pessoa. É o formato que aplicamos nos ",
        { to: "/fotos-corporativas", label: "ensaio de fotos corporativas para equipes" },
        ", no escritório da empresa, sem tirar o time da rotina por mais tempo do que o necessário.",
      ],
    ],
  },
  "12-dicas-de-como-planejar-sua-festa-de-confraternizacao-fotografo-de-eventos": {
    paragraphs: [
      [
        "Depois do planejamento, a festa precisa de registro para valer o investimento: fotos de presença, de entrega de premiações e do clima da noite. Produzimos essa cobertura como ",
        {
          to: "/fotografo-corporativo/fotografo-festa-de-confraternizacao",
          label: "fotografia de festa de confraternização empresarial",
        },
        ", com entrega ágil das imagens.",
      ],
    ],
  },
  "retratos-corporativos-advogados-contadores": {
    paragraphs: [
      [
        "Sócios de escritório pedem um retrato ainda mais controlado: terno, fundo sóbrio e expressão que transmita confiança sem rigidez. É o padrão que produzimos na ",
        { to: "/fotografia-para-advogados", label: "fotografia para advogados e sócios" },
        ", individualmente ou para o quadro inteiro do escritório.",
      ],
    ],
  },
  "video-institucional-para-transportadoras": {
    paragraphs: [
      [
        "Na prática, essa estrutura só se entende vendo um caso real: para a BMX Soluções Logísticas fotografamos a frota e produzimos o vídeo institucional junto de uma série de roteiros temáticos — do transporte químico à logística promocional. O resultado está no ",
        { to: "/cases/bmx-logistica", label: "case BMX Soluções Logísticas" },
        ".",
      ],
    ],
  },
  "fotografia-logistica-centros-distribuicao": {
    paragraphs: [
      [
        "Fotografar operação logística exige acesso, segurança e leitura do processo — do recebimento ao expedição. Produzimos esse tipo de ",
        {
          to: "/fotografo-corporativo/fotografia-de-logistica",
          label: "fotografia de logística e centros de distribuição",
        },
        " com equipe própria; a ",
        { to: "/cases/ativa-logistica", label: "ATIVA Logística" },
        " é um case comercial com as produções publicadas.",
      ],
    ],
  },
  "uso-de-drones-e-eventos-corporativos-tem-feito-toda-a-diferenca": {
    paragraphs: [
      [
        "Imagem aérea acrescenta o contexto que o chão não alcança: a fachada, o estande, o público em escala. Nossa equipe produz ",
        { to: "/fotografo-corporativo/fotos-aereas", label: "fotos e vídeo aéreo com drone" },
        " para empresas e eventos em São Paulo, com operador habilitado.",
      ],
    ],
  },
  // Lote 1 do calendário editorial (publicação programada: 22 a 26/11/2026)
"5-erros-que-fazem-sua-foto-de-perfil-parecer-amadora": {
    paragraphs: [
      [
        "Corrigir os cinco erros é metade do caminho; a outra metade é a foto nascer certa, com enquadramento, luz e direção pensados para o LinkedIn. É isso que fazemos no ensaio de ",
        { to: "/foto-profissional-para-linkedin", label: "foto profissional para LinkedIn" },
        ", produzido para durar dois ou três anos de uso — sem parecer datado na semana seguinte.",
      ],
    ],
  },
  "melhores-apps-gratuitos-para-editar-fotos-no-celular": {
    paragraphs: [
      [
        "App de edição recupera margem, não cria luz nem direção. Quando a foto é o cartão de visita de uma empresa inteira — equipe, site, proposta — o caminho é a ",
        { to: "/fotos-corporativas", label: "fotografia corporativa com padrão profissional" },
        ", feita uma vez e usada por anos em todas as superfícies da marca.",
      ],
    ],
  },
  "ensaio-corporativo-externo-ou-em-estudio": {
    paragraphs: [
      [
        "Nos dois formatos, o que decide o resultado é a direção de quem está atrás da câmera. No ",
        { to: "/fotografia-executiva", label: "ensaio de fotografia executiva" },
        " que produzimos, a decisão entre estúdio e rua é tomada junto com você, no briefing — com base no uso que a foto vai ter, não na moda do momento.",
      ],
    ],
  },
  "6-spots-para-ensaio-corporativo-em-sao-paulo": {
    paragraphs: [
      [
        "Spot bom é o que tem luz certa no horário certo — e isso se planeja antes do dia da sessão. Nos ",
        { to: "/fotografo-corporativo/fotografia-corporativa-em-sao-paulo", label: "ensaios corporativos em São Paulo" },
        " que produzimos, roteiro de locação e horário de luz fazem parte do planejamento junto com a escolha do figurino.",
      ],
    ],
  },
  "por-que-padronizar-as-fotos-da-sua-equipe": {
    paragraphs: [
      [
        "Padronizar não exige semana de produção: no modelo de ",
        { to: "/fotos-corporativas", label: "fotos corporativas feitas no escritório" },
        ", o cenário é montado uma vez e cada pessoa passa poucos minutos — a equipe inteira sai padronizada em um único dia.",
      ],
    ],
  },

  // Ponte do cluster de totem para o novo cluster de fotolembrança (interna)
  "totem-fotografico-para-evento-corporativo": {
    paragraphs: [
      [
        "Se a pergunta é o que o convidado tira de verdade do evento, vale ler também: ",
        { to: "/blog/que-lembranca-e-melhor-que-uma-foto/", label: "Que lembrança é melhor que uma foto?" },
        " — a diferença entre a foto que fica na galeria e a que vai para a geladeira.",
      ],
    ],
  },

  // Lote fotolembrança — pontes para a página de serviço /fotolembranca
  "que-lembranca-e-melhor-que-uma-foto": {
    paragraphs: [
      [
        "Em eventos, essa lembrança não depende de boa vontade: ela é entregue na mão do convidado minutos depois do clique. É a ",
        { to: "/fotolembranca", label: "fotolembrança produzida em eventos corporativos" },
        " — captura profissional, impressão na hora e entrega física, dentro do próprio evento.",
      ],
    ],
  },
  "fotolembranca-o-que-e-e-como-funciona-em-eventos": {
    paragraphs: [
      [
        "A operação completa — estação de captura, impressão na hora e entrega ao convidado — é o que produzimos nos ",
        { to: "/fotolembranca", label: "eventos corporativos em São Paulo" },
        ", geralmente integrada à cobertura fotográfica, com um único fornecedor e um único briefing.",
      ],
    ],
  },
  "foto-impressa-x-digital-qual-lembranca-o-convidado-guarda": {
    paragraphs: [
      [
        "A escolha entre digital e impressa deixa de ser dilema quando o evento entrega as duas: a cobertura registra tudo e a ",
        { to: "/fotolembranca", label: "estação de impressão entrega a lembrança" },
        " que o convidado realmente guarda.",
      ],
    ],
  },
  "formatos-de-foto-para-imprimir-em-eventos-corporativos": {
    paragraphs: [
      [
        "Os formatos certos nascem do briefing do evento — e é assim que planejamos cada ",
        { to: "/fotolembranca", label: "produção com impressão na hora" },
        ": uso, volume de convidados e identidade da marca definem o formato antes do dia do evento.",
      ],
    ],
  },
  "foto-impressa-com-a-marca-do-evento-a-lembranca-que-vira-marketing": {
    paragraphs: [
      [
        "Para a marca circular, a foto precisa sair do evento na mão de alguém. É exatamente o ciclo que montamos na ",
        { to: "/fotolembranca", label: "fotolembrança corporativa com moldura personalizada" },
        ": captura, impressão com a marca e entrega — a lembrança trabalhando para o evento por anos.",
      ],
    ],
  },

  // Lote 2 do calendário editorial (publicação programada: 02 a 08/12/2026)
  "jpeg-ou-heic-qual-formato-usar": {
    paragraphs: [
      [
        "Formato é meio, não fim: o que manda é o resultado. Se a meta é uma ",
        { to: "/foto-profissional", label: "foto profissional em São Paulo" },
        " que funcione no LinkedIn, no site e no cartão, o formato certo é o que preserva a qualidade até a entrega final.",
      ],
    ],
  },
  "como-escolher-o-fundo-do-retrato-executivo": {
    paragraphs: [
      [
        "Escolher o fundo é metade da direção de um retrato — a outra metade é a condução de pose. É o trabalho de uma ",
        { to: "/fotografia-executiva", label: "sessão de fotografia executiva" },
        ", onde fundo, luz e expressão são decididos antes do clique.",
      ],
    ],
  },
  "ensaio-feminino-corporativo-como-se-preparar-do-inicio-ao-fim": {
    paragraphs: [
      [
        "Com a preparação certa, o dia do ensaio vira o momento mais leve da semana. É assim que conduzo o ",
        { to: "/fotografo-corporativo/ensaio-feminino", label: "ensaio corporativo feminino em São Paulo" },
        ": direção em cada etapa, do look à entrega.",
      ],
    ],
  },
  "poses-para-foto-de-equipe-e-diretoria": {
    paragraphs: [
      [
        "As melhores poses de grupo nascem de uma direção conduzida, não de improviso. No serviço de ",
        { to: "/fotos-corporativas", label: "fotos corporativas para empresas" },
        ", cada composição é montada com o time completo em minutos.",
      ],
    ],
  },
  "cores-da-roupa-no-linkedin-o-que-cada-tom-comunica": {
    paragraphs: [
      [
        "Cor é estratégia, mas não substitui direção de pose e luz. Para a foto que carrega sua carreira, combine a cor certa com uma ",
        { to: "/foto-profissional-para-linkedin", label: "foto profissional para LinkedIn" },
        " feita com direção completa.",
      ],
    ],
  },
  "lightroom-na-pratica-edite-suas-fotos-em-10-minutos": {
    paragraphs: [
      [
        "Edição boa é a que ninguém percebe. Na entrega de uma ",
        { to: "/foto-profissional", label: "foto profissional feita em estúdio" },
        ", o tratamento segue esse mesmo princípio: correção realista, sem filtros que denunciam retoque.",
      ],
    ],
  },
  "o-que-levar-para-o-dia-do-ensaio-corporativo": {
    paragraphs: [
      [
        "O checklist existe para o dia correr sem imprevisto — e a entrega final é o que justifica o cuidado. Veja o que uma ",
        { to: "/fotos-corporativas", label: "produção de fotos corporativas" },
        " entrega depois do dia do ensaio.",
      ],
    ],
  },
  "como-contratar-fotografo-para-confraternizacao-de-fim-de-ano": {
    paragraphs: [
      [
        "A confraternização é o evento do ano — e a cobertura segue o mesmo padrão de qualquer ",
        { to: "/eventos-corporativos", label: "cobertura de eventos corporativos" },
        ": briefing claro, contrato, NF e entrega em galeria privada.",
      ],
    ],
  },
  "sorriso-no-retrato-corporativo-quando-sorrir-e-quando-nao": {
    paragraphs: [
      [
        "A expressão certa é decisão de ensaio, não de sorte — em um ",
        { to: "/fotografia-executiva", label: "retrato executivo" },
        " a direção de expressão faz parte do trabalho.",
      ],
    ],
  },
  "o-que-um-fotografo-de-evento-entrega-alem-das-fotos": {
    paragraphs: [
      [
        "Este é o padrão de um trabalho sério de ",
        { to: "/eventos-corporativos", label: "fotografia de eventos" },
        " — e vale para qualquer evento, de 20 a mil pessoas.",
      ],
    ],
  },
  "retrato-corporativo-para-times-que-trabalham-de-casa": {
    paragraphs: [
      [
        "O padrão unificado nasce de um ",
        { to: "/fotos-corporativas", label: "ensaio corporativo em estúdio" },
        " com briefing técnico documentado — a base para qualquer time remoto.",
      ],
    ],
  },
  "quanto-custa-fotografo-para-evento-de-fim-de-ano-em-sao-paulo": {
    paragraphs: [
      [
        "Se o orçamento permitir um item que eleva a festa, some ",
        { to: "/fotolembranca", label: "fotolembrança com impressão na hora" },
        " — a lembrança que o convidado leva para casa.",
      ],
    ],
  },
  "os-5-erros-na-foto-de-perfil-do-linkedin": {
    paragraphs: [
      [
        "O padrão acima é exatamente o que um ",
        { to: "/foto-profissional-para-linkedin", label: "retrato profissional para LinkedIn" },
        " entrega em 20 minutos de sessão.",
      ],
    ],
  },
  "cabelo-barba-e-pele-no-dia-do-retrato-o-cuidado-de-72-horas": {
    paragraphs: [
      [
        "Com essa preparação, o ",
        { to: "/foto-profissional", label: "ensaio de foto profissional" },
        " rende o dobro: mais opções boas na seleção final.",
      ],
    ],
  },
};

export function bridgeFor(slug: string): PostBridge | undefined {
  return postBridges[slug];
}
