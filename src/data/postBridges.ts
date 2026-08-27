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
        "Eu sou Alexandre Machado e fotografo pessoalmente esse tipo de imagem em São Paulo, seja como ",
        { to: "/foto-profissional-para-linkedin", label: "foto profissional para LinkedIn" },
        " ou como parte de um ",
        { to: "/fotografo-corporativo/retrato-corporativo", label: "ensaio de retrato corporativo" },
        " com mais enquadramentos e usos.",
      ],
    ],
  },
};

export function bridgeFor(slug: string): PostBridge | undefined {
  return postBridges[slug];
}
