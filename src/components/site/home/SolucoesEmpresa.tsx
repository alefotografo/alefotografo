import { Link } from "@tanstack/react-router";
import { SmartImage } from "@/components/site/SmartImage";

const CDN =
  "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem";

const CARDS = [
  {
    title: "Banco de Imagens Corporativo",
    dores: [
      "Seu site e apresentações usam fotos de stock que não representam a sua empresa",
      "Cada novo material exige buscar imagens que nunca encaixam direito",
    ],
    solucoes: [
      "Crio um acervo completo com sua equipe, operação, produtos e espaços",
      "Imagens exclusivas da sua empresa, prontas para usar em qualquer canal",
    ],
    slug: "banco-de-imagens-para-empresas",
    img: `${CDN}/125396/banco-de-imagens-para-empresas_ala-servicos-39.jpg`,
    alt: "Banco de Imagens Empresarial — foto 1",
  },
  {
    title: "Vídeo Institucional",
    dores: [
      "Apresentar a empresa em reuniões ainda depende de texto e fala",
      "Potenciais clientes saem sem uma impressão visual forte",
    ],
    solucoes: [
      "Produzo vídeo institucional com roteiro, locução e trilha profissional",
      "Seu cliente entende quem você é antes mesmo de sentar à mesa",
    ],
    slug: "fotografia-institucional-em-saopaulo",
    img: `${CDN}/66911/banco-de-imagem-de-empresa_banco-de-imagens-empresas-negocios-alefotografo-fotografo0002.jpg`,
    alt: "Fotografia Institucional — foto 1",
  },
  {
    title: "Fotografia Industrial e de Infraestrutura",
    dores: [
      "A estrutura da empresa nunca foi registrada como merece",
      "Propostas mostram o que a empresa faz, mas não o que ela é",
    ],
    solucoes: [
      "Fotografo instalações, processos e logística com luz e composição profissional",
      "Imagens que mostram a capacidade operacional da sua empresa com clareza",
    ],
    slug: "fotografia-industrial",
    img: `${CDN}/66655/industrial_dsc7266.jpg`,
    alt: "Fotografia Industrial — foto 1",
  },
  {
    title: "Retrato Corporativo de Equipe",
    dores: [
      "As fotos da equipe no site e no LinkedIn têm qualidades completamente diferentes",
      "Não passa profissionalismo — e a própria equipe sabe disso",
    ],
    solucoes: [
      "Sessão com direção de poses para toda a equipe, do analista ao CEO",
      "Padrão visual uniforme que transmite coesão e profissionalismo",
    ],
    slug: "fotografo-de-grupos-times-e-equipes",
    img: `${CDN}/77681/grupos-fotos-de-grupos-ou-equipes_grupos-1.jpg`,
    alt: "Fotógrafo de Grupos, Times e Equipes — foto 1",
  },
  {
    title: "Cobertura de Eventos Corporativos",
    dores: [
      "O evento acontece, as pessoas aprovam — mas as fotos não traduzem o que foi vivido",
      "O registro não chega às redes nem à comunicação interna",
    ],
    solucoes: [
      "Cobertura completa com entrega organizada por momento e por pessoa",
      "Fotos que realmente contam o evento e que a equipe quer compartilhar",
    ],
    slug: null,
    img: `${CDN}/66941/eventos-corporativos_fotografo-de-eventos-corporativos-eventos-pessoas-em-evento-fotos-de-eventos-corporaticos-alefotografo0174.JPG`,
    alt: "Fotógrafo de Eventos Empresariais — foto 1",
  },
  {
    title: "Imagem Aérea com Drone",
    dores: [
      "A extensão e a localização da operação nunca foram mostradas com impacto",
      "Concorrentes com estrutura menor parecem maiores por terem imagens aéreas",
    ],
    solucoes: [
      "Voo fotográfico sobre instalações, empreendimentos e eventos",
      "Perspectiva que só o ar oferece — e que transforma como a empresa é percebida",
    ],
    slug: "fotos-aereas",
    img: `${CDN}/66650/fotos-aereas_fotos-aereas-de-empresas-empreendimentos-captadas-por-drone-helicopetero-fotografo-aereo-especializado-2.jpg`,
    alt: "Fotos Aéreas — foto 1",
  },
] as const;

const LINK_CLASS =
  "rounded-sm after:absolute after:inset-0 after:content-[''] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export default function SolucoesEmpresa() {
  return (
    <section
      id="solucoes"
      className="scroll-mt-[57px] py-14 md:scroll-mt-[73px] md:py-24 lg:scroll-mt-[81px]"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="font-display text-[24px] font-semibold leading-[1.2] text-foreground md:text-[32px]">
          O que posso produzir para a sua empresa
        </h2>
        <p className="mt-6 max-w-[68ch] text-[16px] leading-[1.6] text-muted-foreground md:text-[17px]">
          Seis formas de usar foto e vídeo para fortalecer a presença da sua empresa no site, nas
          redes e nos materiais comerciais.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card"
            >
              <div className="overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
                <SmartImage
                  src={card.img}
                  alt={card.alt}
                  width={640}
                  height={480}
                  baseWidth={640}
                  sizes="(max-width: 767px) 100vw, 50vw"
                  placeholderRatio="4 / 3"
                  className="h-full w-full object-cover transition-transform duration-300 motion-reduce:transition-none group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-[18px] font-semibold leading-[1.3] text-foreground md:text-[20px]">
                  {card.slug ? (
                    <Link
                      to="/fotografo-corporativo/$slug"
                      params={{ slug: card.slug }}
                      className={LINK_CLASS}
                    >
                      {card.title}
                    </Link>
                  ) : (
                    <Link to="/eventos-corporativos" className={LINK_CLASS}>
                      {card.title}
                    </Link>
                  )}
                </h3>

                <ul className="mt-6 space-y-2">
                  {card.dores.map((d) => (
                    <li
                      key={d}
                      className="flex gap-2 text-[16px] leading-[1.6] text-muted-foreground"
                    >
                      <span aria-hidden="true">–</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <hr className="my-6 border-t border-border" />

                <ul className="space-y-2">
                  {card.solucoes.map((s) => (
                    <li
                      key={s}
                      className="flex gap-2 text-[16px] font-medium leading-[1.6] text-foreground"
                    >
                      <span aria-hidden="true" className="text-ember">
                        +
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center">
          <Link
            to="/fotografo-corporativo"
            className="text-[14px] leading-[1.4] text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Conheça o trabalho do fotógrafo corporativo
          </Link>
        </p>
      </div>
    </section>
  );
}
