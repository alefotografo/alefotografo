export interface Faq {
  q: string;
  a: string;
}

// FAQ central — usada no /faq, na home e em páginas de vídeo.
// Escrita na primeira pessoa e centrada em retrato/imagem de pessoas, que é o
// escopo deste domínio. Perguntas de cobertura de evento com equipe vivem no
// site irmão (alefotografos.com.br) — a redação aqui não se repete lá.
export const faqs: Faq[] = [
  {
    q: "Qual a diferença entre alefotografo.com.br e alefotografos.com.br?",
    a: "Aqui, no alefotografo.com.br, sou eu, Alexandre Machado, quem fotografa: retratos profissionais, headshots para LinkedIn, executivos, sócios e equipes. O alefotografos.com.br é operado pela equipe Alê Fotógrafo e cuida de coberturas de grande porte — feiras, congressos, convenções e produções com vários fotógrafos ao mesmo tempo. Se o seu projeto é imagem de pessoas com direção de pose, é comigo.",
  },
  {
    q: "Quem fotografa o meu ensaio: você ou um assistente?",
    a: "Eu. Em todos os projetos contratados por este site sou eu quem atende, dirige o ensaio, fotografa e finaliza as imagens. Não há repasse para terceiros nem substituição de última hora — se eu não tiver a data disponível, eu digo, em vez de mandar outra pessoa.",
  },
  {
    q: "Quanto custa um retrato profissional em São Paulo?",
    a: "Depende do número de pessoas, do local (meu estúdio ou o seu escritório) e da quantidade de imagens finalizadas. Ensaios individuais de retrato têm valor fechado; para times, o cálculo é por bloco de horas, com custo por pessoa caindo conforme o volume. Me envie quantas pessoas e a data desejada pelo WhatsApp e eu devolvo o orçamento no mesmo dia.",
  },
  {
    q: "Nunca fico bem em foto. Isso tem solução?",
    a: "Tem, e quase sempre é direção, não aparência. Postura de ombros, distância do queixo em relação ao peito, ângulo de rosto, para onde o olhar vai e o momento de respirar antes do clique mudam completamente o resultado. Eu conduzo isso do começo ao fim do ensaio — ninguém precisa saber posar sozinho.",
  },
  {
    q: "Quanto tempo dura um ensaio de retrato e quando recebo as fotos?",
    a: "Um retrato individual leva de 20 a 40 minutos; em ensaios de equipe, de 10 a 15 minutos por pessoa. As imagens tratadas ficam prontas em 1 a 3 dias úteis, com ajuste de cor, retoque natural de pele e cortes já prontos para LinkedIn, site e apresentações.",
  },
  {
    q: "Você fotografa no escritório da empresa?",
    a: "Sim, e é o formato mais usado. Levo iluminação, fundo portátil e roteiro de poses, monto em uma sala qualquer e fotografo o time em sequência. Em meio período dá para atender de 15 a 25 pessoas sem travar a agenda de ninguém.",
  },
  {
    q: "Como garantir que os retratos de todo o time fiquem padronizados?",
    a: "Uso o mesmo esquema de luz, fundo, distância focal e enquadramento para todas as pessoas, e finalizo o lote com o mesmo perfil de cor. O resultado é uma página de equipe visualmente coerente, inclusive quando alguém novo é fotografado meses depois — o setup é reproduzível.",
  },
  {
    q: "Qual roupa usar no retrato para LinkedIn?",
    a: "Cores sólidas, sem estampa e sem brilho: azul-marinho, cinza, preto ou branco off. Evite logos visíveis e peças amassadas. Camisa social com ou sem blazer resolve para a maioria dos homens; blusas de decote em V valorizam o pescoço no enquadramento fechado. Eu envio um guia curto de preparação antes do ensaio.",
  },
  {
    q: "A empresa fica com os direitos de uso das imagens?",
    a: "Sim. Você recebe o uso comercial e institucional das imagens contratadas, sem limite de prazo ou plataforma — site, LinkedIn, anúncios, apresentações, recrutamento e imprensa. Eu mantenho apenas o direito moral de autoria, previsto na Lei de Direitos Autorais.",
  },
  {
    q: "Faz retrato de médicos, dentistas e advogados?",
    a: "Sim, é uma parte grande do meu trabalho. Nesses casos o retrato precisa comunicar confiança sem parecer distante, e o ambiente entra em cena com cuidado: consultório, clínica ou escritório aparecem como contexto, nunca competindo com o rosto.",
  },
  {
    q: "Você também gera imagens de ambiente e bastidores no mesmo dia?",
    a: "Sim. Depois dos retratos costumo aproveitar o mesmo deslocamento para registrar reuniões, ambiente de trabalho e detalhes do escritório. Isso monta um banco de imagens próprio da empresa, no lugar de fotos de banco genéricas.",
  },
  {
    q: "É possível gravar vídeo junto com o ensaio?",
    a: "Sim. No mesmo dia consigo captar depoimentos curtos e apresentações em vídeo com a mesma luz do retrato. É a forma mais econômica de sair com foto e vídeo de cada pessoa em uma única agenda.",
  },
  {
    q: "Atende fora de São Paulo?",
    a: "Sim. Minha base é São Paulo capital e atendo toda a Grande São Paulo sem custo extra de deslocamento. Para outras cidades e estados, a viagem entra no orçamento com logística e hospedagem definidas antes.",
  },
  {
    q: "Como pedir um orçamento?",
    a: "Me chame no WhatsApp ou use o formulário de contato com quatro informações: quantas pessoas serão fotografadas, onde, a data desejada e onde as imagens serão usadas. Com isso eu devolvo escopo, prazo e valor fechado no mesmo dia útil.",
  },
];

export function faqJsonLd(items: Faq[] = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
