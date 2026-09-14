/** Recorte editorial mínimo usado pela home; evita carregar o catálogo completo. */
export const homeVideos = [
  {
    slug: "beauty-fair-2026-3o-dia-tendencias-lancamentos-e-os-melhores-momentos-da-feira",
    title: "Beauty Fair 2026 | 3º Dia | Tendências, Lançamentos e os Melhores Momentos da Feira",
    youtube: "BmavB5WmEi0",
  },
  {
    slug: "flexfunds-solucoes-financeiras-inteligentes-para-empresas-video-institucional",
    title: "FlexFunds | Soluções Financeiras Inteligentes para Empresas | Vídeo Institucional",
    youtube: "uQxT-qYd79U",
  },
  {
    slug: "procooler-na-febrava-cobertura-profissional-de-feiras-e-eventos-corporativos",
    title: "Procooler na FEBRAVA | Cobertura Profissional de Feiras e Eventos Corporativos",
    youtube: "uFNcEB1uvAA",
  },
] as const;

export const homePosts = [
  {
    slug: "fotografia-imobiliaria-corporativa-aceleracao-vendas",
    title: "Fotografia imobiliária corporativa: como imagens profissionais aceleram vendas",
    date: "07 de junho de 2026",
    description: "Imóveis com fotografia profissional vendem até 50% mais rápido. Para incorporadoras e imobiliárias corporativas, isso significa fluxo de caixa acelerado e menos tempo de estoque.",
    // Capa do acervo (galeria de empreendimentos) — o recorte mínimo não carrega o
    // catálogo, e a capa original do post é externa (Unsplash).
    cover:
      "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130742/empreendimentos-imobiliarios_ach-142.jpg",
  },
  {
    slug: "foto-perfil-linkedin-gestor-contratos",
    title: "Por que a foto de perfil do LinkedIn do seu gestor está custando contratos",
    date: "07 de junho de 2026",
    description: "Uma foto de perfil profissional no LinkedIn pode ser o fator decisivo entre fechar ou perder um negócio. Veja por que e como resolver isso hoje.",
    // Mesma capa cadastrada no catálogo — repetida aqui porque o recorte mínimo
    // da Home não carrega os dados do post.
    cover:
      "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/66874/retrato-corporativo_helio-martins-borges-filho-4.jpg",
  },
  {
    slug: "10-lugares-em-sao-paulo-para-tirar-boas-fotos",
    title: "10 Lugares em São Paulo para tirar boas fotos",
    date: "1 de setembro de 2026",
    description: "Você mora em São Paulo? Sabia que existem locais que podem ser excelentes planos de fundo para suas fotos? Alguns, gratuitos. Saiba mais neste post.",
    // Capa própria do post (mesma URL cadastrada no catálogo).
    cover:
      "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/PostImagem/31617/10-lugares-em-sao-paulo-para-tirar-boas-fotos-vista-da-cidade-alefotografo_capa.jpg",
  },
] as const;