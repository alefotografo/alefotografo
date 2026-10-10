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
        { to: "/fotografo-corporativo/retrato-corporativo", label: "meu trabalho de retrato corporativo" },
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
        { to: "/fotografo-corporativo/retrato-corporativo", label: "ensaio de retrato corporativo" },
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
        { to: "/fotografo-corporativo/retrato-corporativo", label: "ensaio de retrato corporativo" },
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
        { to: "/fotografo-corporativo/fotografia-corporativa-em-sao-paulo", label: "fotografia corporativa no escritório" },
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
        { to: "/fotografo-corporativo/fotografia-corporativa-em-sao-paulo", label: "ensaios corporativos em São Paulo" },
        " com equipes e times, no escritório ou em locação externa.",
      ],
    ],
  },
  "fotografo-ensina-que-foto-profissional-aparece-14-vezes-mais-do-que-uma-foto-amadora-no-linkedin": {
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
        { to: "/fotografo-corporativo/fotografo-festa-de-confraternizacao", label: "fotografia de festa de confraternização empresarial" },
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
  "fotografia-logistica-centros-distribuicao": {
    paragraphs: [
      [
        "Fotografar operação logística exige acesso, segurança e leitura do processo — do recebimento ao expedição. Produzimos esse tipo de ",
        { to: "/fotografo-corporativo/fotografia-de-logistica", label: "fotografia de logística e centros de distribuição" },
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
};

export function bridgeFor(slug: string): PostBridge | undefined {
  return postBridges[slug];
}
