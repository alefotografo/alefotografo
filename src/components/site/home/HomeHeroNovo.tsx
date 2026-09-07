import { Link } from "@tanstack/react-router";
import { imgSrcSet, imgUrl } from "@/lib/img";
import { WA_DEFAULT, waLink } from "@/lib/whatsapp";

// Foto de origem: /fotografo-corporativo/fotografo-de-grupos-times-e-equipes (grupos-3, horizontal)
const HERO = {
  src: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/77681/grupos-fotos-de-grupos-ou-equipes_grupos-3.jpg",
  alt: "Fotógrafo de Grupos, Times e Equipes — foto 2",
  width: 1920,
  height: 1275,
};

export default function HomeHeroNovo() {
  return (
    <section className="border-b border-border">
      <div className="relative">
        <figure className="relative m-0">
          <img
            src={imgUrl(HERO.src, 1440)}
            srcSet={imgSrcSet(HERO.src, [720, 1024, 1440, 1920], HERO.width)}
            sizes="100vw"
            alt={HERO.alt}
            width={HERO.width}
            height={HERO.height}
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            referrerPolicy="no-referrer"
            className="block w-full object-cover"
            style={{ height: "320px" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden bg-background/75 md:block"
          />
        </figure>

        <div className="md:absolute md:inset-0 md:flex md:items-center">
          <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-6 md:py-0 lg:px-8">
            <div style={{ maxWidth: "660px" }}>
              <p
                className="uppercase text-muted-foreground"
                style={{ fontSize: "12px", letterSpacing: "0.12em", lineHeight: 1.4 }}
              >
                Alexandre Machado · Fotógrafo corporativo em São Paulo · desde 1991
              </p>
              <h1
                className="mt-6 font-display font-semibold text-foreground"
                style={{ fontSize: "32px", lineHeight: 1.1 }}
              >
                Fotógrafo corporativo em São Paulo: sua empresa para de usar foto de banco
              </h1>
              <p
                className="mt-6 text-muted-foreground"
                style={{ fontSize: "16px", lineHeight: 1.6 }}
              >
                Olhe o site da sua empresa agora. Quantas fotos são realmente suas — suas
                pessoas, seu galpão, seu escritório? Faço foto profissional e vídeo para
                empresas em São Paulo desde 1991: banco de imagens, institucional, indústria,
                evento e retrato de equipe.
              </p>
              <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#solucoes"
                  className="inline-flex w-full items-center justify-center rounded-sm bg-ember px-6 py-3.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-ember-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:w-auto"
                >
                  Ver o que sua empresa precisa produzir
                </a>
                <a
                  href={waLink(WA_DEFAULT)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-sm border border-border-strong px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:w-auto"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          section > div > figure > img { height: 560px !important; }
          section h1 { font-size: 48px !important; }
          section p.uppercase + h1 + p { font-size: 17px !important; }
        }
      `}</style>
      {/* fallback de link interno para rastreabilidade do crawler */}
      <Link to="/fotografo-corporativo" className="sr-only">
        Fotógrafo corporativo
      </Link>
    </section>
  );
}
