import { Link } from "@tanstack/react-router";
import { SmartImage } from "@/components/site/SmartImage";

const FOTO = {
  src: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/66874/retrato-corporativo_helio-martins-borges-filho-4.jpg",
  alt: "Retrato corporativo individual em São Paulo",
};

const LINK_CLASS =
  "text-[14px] leading-[1.4] text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none";

export default function RetratoProfissional() {
  return (
    <section className="py-14 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
          <div className="overflow-hidden rounded-sm lg:col-span-1" style={{ aspectRatio: "3 / 2" }}>
            <SmartImage
              src={FOTO.src}
              alt={FOTO.alt}
              width={1920}
              height={1280}
              baseWidth={900}
              widths={[400, 640, 900, 1200]}
              sizes="(max-width: 1023px) 100vw, 380px"
              placeholderRatio="3 / 2"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-[18px] font-semibold leading-[1.3] text-foreground md:text-[20px]">
              Precisa só da sua foto?
            </h3>
            <p className="mt-6 max-w-[68ch] text-[16px] leading-[1.6] text-muted-foreground md:text-[17px]">
              Executivos, médicos e advogados que precisam de uma foto profissional decente para
              LinkedIn, site e palestra. Sessão individual com direção de pose do primeiro ao
              último clique — você não precisa saber posar, isso é problema meu.
            </p>

            <p className="mt-6 flex flex-wrap gap-6">
              <Link
                to="/fotografo-corporativo/$slug"
                params={{ slug: "retrato-corporativo" }}
                className={LINK_CLASS}
              >
                Retrato corporativo
              </Link>
              <Link to="/foto-profissional-para-linkedin" className={LINK_CLASS}>
                Foto profissional para LinkedIn
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
