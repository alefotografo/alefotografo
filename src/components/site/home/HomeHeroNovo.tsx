import { Link } from "@tanstack/react-router";
import { companiesStat, ratingStat } from "@/data/stats";
import { imgSrcSet, imgUrl } from "@/lib/img";
import { WA_DEFAULT, waLink } from "@/lib/whatsapp";

// Foto de origem: /fotografo-corporativo/fotografo-de-grupos-times-e-equipes (grupos-3, horizontal)
const HERO = {
  src: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/77681/grupos-fotos-de-grupos-ou-equipes_grupos-3.jpg",
  alt: "Fotógrafo de Grupos, Times e Equipes — foto 2",
  width: 1920,
  height: 1275,
};

const HERO_STATS = [
  { value: "30+", label: "anos de experiência" },
  { value: companiesStat.value, label: "empresas atendidas" },
  { value: ratingStat.value, label: "no Google" },
];

export default function HomeHeroNovo() {
  return (
    <section className="border-b border-border">
      <div className="relative">
        <figure className="relative m-0 aspect-[4/3] md:aspect-auto md:h-[440px] lg:h-[600px]">
          <img
            src={imgUrl(HERO.src, 1440)}
            srcSet={imgSrcSet(HERO.src, [480, 720, 900, 1200, 1440, 1920], HERO.width)}
            sizes="100vw"
            alt={HERO.alt}
            width={HERO.width}
            height={HERO.height}
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            referrerPolicy="no-referrer"
            className="block h-full w-full object-cover object-[center_35%] md:object-[center_30%]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden bg-background/75 md:block"
          />
        </figure>

        <div className="md:absolute md:inset-0 md:flex md:items-center">
          <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-6 md:py-0 lg:px-8">
            <div className="max-w-[660px]">
              <h1 className="font-display text-[32px] font-semibold leading-[1.1] text-foreground md:text-[48px]">
                Fotógrafo profissional e corporativo em São Paulo
              </h1>
              <p className="mt-6 text-[16px] leading-[1.6] text-muted-foreground md:text-[17px]">
                Fotografia e produção audiovisual para empresas, executivos e profissionais. Nossa
                equipe realiza fotografia corporativa, retratos profissionais, eventos, banco de
                imagens e vídeos para empresas em São Paulo e região.
              </p>
              <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={waLink(WA_DEFAULT)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-sm bg-ember px-6 py-3.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-ember-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:w-auto"
                >
                  Solicitar orçamento
                </a>
                <Link
                  to="/fotografo-corporativo"
                  className="inline-flex w-full items-center justify-center rounded-sm border border-border-strong bg-background/40 px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:w-auto"
                >
                  Fotografia corporativa
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-2 min-[376px]:grid-cols-3 min-[376px]:gap-4">
                {HERO_STATS.map((stat) => (
                  <div key={stat.label} className="flex items-baseline gap-2 min-[376px]:block">
                    <p className="font-display text-xl font-semibold text-foreground md:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
