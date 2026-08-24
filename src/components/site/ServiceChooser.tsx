import { Link } from "@tanstack/react-router";
import { waLink } from "@/lib/whatsapp";
import { imgUrl } from "@/lib/img";
import { ArrowUpRight } from "lucide-react";

type Service = {
  title: string;
  text: string;
  cta: string;
  wa: string;
  see: string;
  to?: "/foto-profissional" | "/fotos-corporativas" | "/foto-profissional-para-linkedin" | "/videos";
  catSlug?: string;
  img: string;
};

const SERVICES: Service[] = [
  {
    title: "Retrato profissional",
    text: "Fotos profissionais para LinkedIn, site, apresentações, imprensa e posicionamento executivo.",
    cta: "Quero meu retrato profissional",
    wa: "Olá Alexandre, quero fazer um retrato profissional. Pode me passar valores e disponibilidade?",
    see: "Ver foto profissional",
    to: "/foto-profissional",
    img: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/66874/retrato-corporativo_helio-martins-borges-filho-4.jpg",
  },
  {
    title: "Fotografia corporativa para empresas",
    text: "Fotos de equipe, diretoria, ambientes, processos e comunicação institucional.",
    cta: "Solicitar orçamento para empresa",
    wa: "Olá Alexandre, preciso de fotografia corporativa para minha empresa. Pode me enviar um orçamento?",
    see: "Ver fotografia corporativa",
    to: "/fotos-corporativas",
    img: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/102590/fotografia-corporativa-em-sao-paulo_antonio-logigo-120.jpg",
  },
  {
    title: "Eventos corporativos",
    text: "Cobertura fotográfica e audiovisual para congressos, palestras, convenções, lançamentos e encontros empresariais.",
    cta: "Orçar cobertura de evento",
    wa: "Olá Alexandre, gostaria de orçar a cobertura de um evento corporativo.",
    see: "Ver cobertura de eventos",
    catSlug: "fotografo-de-eventos-corporativos",
    img: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/90046/fotografo-de-eventos-corporativos_encontro-farmarcas-2022-2467.JPG",
  },
  {
    title: "Vídeo institucional",
    text: "Vídeos para apresentar sua empresa, serviço, estrutura, equipe e diferenciais comerciais.",
    cta: "Planejar meu vídeo institucional",
    wa: "Olá Alexandre, quero planejar um vídeo institucional para minha empresa.",
    see: "Ver vídeos institucionais",
    to: "/videos",
    img: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/66911/banco-de-imagem-de-empresa_banco-de-imagens-empresas-negocios-alefotografo-fotografo0002.jpg",
  },
  {
    title: "Foto para LinkedIn",
    text: "Imagem profissional para aumentar confiança, autoridade e presença digital.",
    cta: "Agendar foto para LinkedIn",
    wa: "Olá Alexandre, quero agendar uma foto profissional para o meu LinkedIn.",
    see: "Ver foto para LinkedIn",
    to: "/foto-profissional-para-linkedin",
    img: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/98854/fotografo-profissional-em-sao-paulo_rodrigo-trindade-batista-31.jpg",
  },
];

export function ServiceChooser() {
  return (
    <section className="border-b border-border bg-surface" aria-labelledby="escolha-servico">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">Serviços</p>
        <h2 id="escolha-servico" className="font-display text-3xl font-semibold text-balance md:text-4xl">
          Escolha o serviço ideal para sua empresa
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Cada objetivo pede um tipo de imagem. Selecione o serviço mais próximo da sua necessidade
          e receba o orçamento direto pelo WhatsApp.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="flex flex-col overflow-hidden rounded-sm border border-border bg-background transition-colors hover:border-ember"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                <img
                  src={imgUrl(s.img, 480)}
                  alt={s.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <a
                  href={waLink(s.wa)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-sm bg-ember px-5 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
                >
                  {s.cta}
                </a>
                {s.to ? (
                  <Link
                    to={s.to}
                    className="mt-3 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-ember"
                  >
                    {s.see} <ArrowUpRight size={14} />
                  </Link>
                ) : (
                  <Link
                    to="/fotografo-corporativo/$slug"
                    params={{ slug: s.catSlug as string }}
                    className="mt-3 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-ember"
                  >
                    {s.see} <ArrowUpRight size={14} />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
