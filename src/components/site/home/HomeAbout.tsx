import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { imgUrl } from "@/lib/img";

export default function HomeAbout() {
  return (
      {/* Quem está por trás — retrato do Alê */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:gap-16 md:px-8 md:py-28">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-surface ring-1 ring-border-strong">
              <img
                src={imgUrl("https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/PaginaConteudo/alexandre-machado-1.JPG", 640)}
                alt="Alexandre Machado, fotógrafo corporativo em São Paulo"
                width={800}
                height={1000}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="h-full w-full object-cover"
              />
              <div className="absolute -bottom-3 -right-3 hidden h-24 w-24 border border-ember md:block" />
            </div>
          </div>
          <div className="md:col-span-7 md:pt-6">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">Quem está por trás</p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-balance md:text-5xl">
              Alexandre Machado — três décadas traduzindo empresas em imagem.
            </h2>
            <p className="mt-6 text-base text-muted-foreground md:text-lg text-pretty">
              Fotógrafo profissional em São Paulo, especializado em fotografia corporativa, retratos executivos e cobertura de eventos para empresas que precisam de imagens com intenção estratégica — não só estética.
            </p>
            <p className="mt-4 text-muted-foreground">
              Cada produção começa pelo entendimento do posicionamento, do público e do objetivo da comunicação. Resultado: fotos que transmitem autoridade, geram confiança e valorizam a marca.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/sobre" className="inline-flex items-center gap-2 rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-surface">
                Conheça a trajetória <ArrowUpRight size={14} />
              </Link>
              <Link to="/depoimentos" className="inline-flex items-center gap-2 text-sm text-ember hover:underline">
                Ver depoimentos de clientes
              </Link>
            </div>
          </div>
        </div>
      </section>
  );
}
