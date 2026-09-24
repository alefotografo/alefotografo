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
  "case-ativa-logistica-fotografia-video": {
    paragraphs: [
      [
        "Este artigo conta o projeto por dentro. As produções comprovadas — fotografias da operação e os vídeos publicados — estão reunidas no ",
        { to: "/cases/ativa-logistica", label: "case comercial da ATIVA Logística" },
        ", com o resumo do projeto e os links para cada material.",
      ],
    ],
  },
};

export function bridgeFor(slug: string): PostBridge | undefined {
  return postBridges[slug];
}
