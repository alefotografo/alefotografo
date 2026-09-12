import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { SmartImage } from "@/components/site/SmartImage";

const FOTOS = [
  {
    src: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/129397/foto-de-perfil-profissional-feminino_mila-rodrigues-da-silva-4.jpg",
    alt: "Retrato profissional feminino em São Paulo",
  },
  {
    src: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/66874/retrato-corporativo_helio-martins-borges-filho-4.jpg",
    alt: "Retrato corporativo individual em São Paulo",
  },
];

const LINK_CLASS =
  "inline-flex items-center gap-2 rounded-sm border border-border-strong px-5 py-3 text-[14px] font-medium leading-[1.4] hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none";

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
              Retratos profissionais
            </h3>
            <p className="mt-6 max-w-[68ch] text-[16px] leading-[1.6] text-muted-foreground md:text-[17px]">
              Retratos para executivos, profissionais e equipes, com direção durante a sessão e
              imagens preparadas para LinkedIn, sites, apresentações, imprensa e comunicação
              profissional.
            </p>

            <div className="mt-6 max-w-[68ch] rounded-sm border border-border bg-surface p-4">
              <p className="flex items-start gap-2 text-[14px] leading-[1.4] text-foreground">
                <MapPin size={16} className="mt-0.5 shrink-0 text-ember" aria-hidden="true" />
                <span>
                  <strong>Atendimento na região da Avenida Paulista</strong>
                  <br />
                  Contamos com local para sessões de retratos profissionais na Alameda Santos, 1165,
                  próximo à Avenida Paulista, além de atendimento nas empresas e em locações na
                  Grande São Paulo.
                </span>
              </p>
            </div>

            <p className="mt-8">
              <Link to="/foto-profissional" className={LINK_CLASS}>
                Conhecer Retratos Profissionais
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
