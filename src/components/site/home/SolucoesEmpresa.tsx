import { Link } from "@tanstack/react-router";
import { SmartImage } from "@/components/site/SmartImage";

const CDN =
  "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem";

const CARDS = [
  {
    title: "Banco de Imagens Corporativo",
    texto:
      "Desenvolvemos acervos fotográficos exclusivos com equipes, ambientes, operações, produtos e serviços. Imagens profissionais para sites, apresentações, campanhas, redes sociais e comunicação interna.",
    slug: "banco-de-imagens-para-empresas",
    to: null,
    img: `${CDN}/125396/banco-de-imagens-para-empresas_ala-servicos-39.jpg`,
    alt: "Banco de Imagens Empresarial — foto 1",
  },
  {
    title: "Fotografia Corporativa",
    texto:
      "Produções fotográficas para empresas, equipes, ambientes e operações, alinhadas à identidade e aos objetivos de comunicação de cada organização.",
    slug: null,
    to: "/fotos-corporativas",
    img: `${CDN}/66911/banco-de-imagem-de-empresa_banco-de-imagens-empresas-negocios-alefotografo-fotografo0002.jpg`,
    alt: "Fotografia Institucional — foto 1",
  },
  {
    title: "Retratos Profissionais",
    texto:
      "Retratos de executivos, profissionais e equipes para LinkedIn, sites, apresentações, imprensa e comunicação corporativa.",
    slug: null,
    to: "/foto-profissional",
    img: `${CDN}/77681/grupos-fotos-de-grupos-ou-equipes_grupos-1.jpg`,
    alt: "Fotógrafo de Grupos, Times e Equipes — foto 1",
  },
  {
    title: "Eventos Corporativos",
    texto:
      "Fotografia e vídeo para congressos, convenções, feiras, palestras e encontros empresariais.",
    slug: null,
    to: "/eventos-corporativos",
    img: `${CDN}/66941/eventos-corporativos_fotografo-de-eventos-corporativos-eventos-pessoas-em-evento-fotos-de-eventos-corporaticos-alefotografo0174.JPG`,
    alt: "Fotógrafo de Eventos Empresariais — foto 1",
  },
  {
    title: "Vídeos Corporativos",
    texto:
      "Produção audiovisual para apresentar empresas, serviços, estruturas, equipes, projetos e cases.",
    slug: null,
    to: "/videos",
    img: "https://img.youtube.com/vi/nkHJbeXx5Qo/hqdefault.jpg",
    alt: "Capa do vídeo institucional da Ativa Logística",
  },
  {
    title: "Vídeos de Eventos Corporativos",
    texto:
      "Produção de vídeos para congressos, convenções, fóruns e encontros empresariais, com captação de palco, plateia, entrevistas e melhores momentos.",
    slug: null,
    to: "/video-de-eventos-corporativos",
    img: "https://img.youtube.com/vi/gSngB97GbcQ/hqdefault.jpg",
    alt: "Capa do vídeo do 11º Fórum ABRADILAN",
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
          Soluções em fotografia e vídeo para empresas
        </h2>

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
                  sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1279px) calc(50vw - 40px), 620px"
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
                    <Link to={card.to!} className={LINK_CLASS}>
                      {card.title}
                    </Link>
                  )}
                </h3>

                <p className="mt-6 max-w-[68ch] text-[16px] leading-[1.6] text-muted-foreground">
                  {card.texto}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[14px] leading-[1.4] text-muted-foreground">
          <span>Outras soluções:</span>
          <Link
            to="/fotografo-corporativo/$slug"
            params={{ slug: "fotografo-de-grupos-times-e-equipes" }}
            className="inline-flex min-h-11 items-center underline underline-offset-4 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:min-h-0"
          >
            Grupos, times e equipes
          </Link>
          <span aria-hidden="true">·</span>
          <Link
            to="/fotografo-corporativo/$slug"
            params={{ slug: "fotografo-feiras-stands" }}
            className="inline-flex min-h-11 items-center underline underline-offset-4 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:min-h-0"
          >
            Feiras e stands
          </Link>
        </p>

      </div>
    </section>
  );
}
