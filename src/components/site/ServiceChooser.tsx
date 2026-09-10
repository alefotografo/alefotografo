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
  to?: "/fotos-corporativas" | "/foto-profissional" | "/eventos-corporativos" | "/videos" | "/banco-de-imagens" | "/fotografo-empresarial";
  catSlug?: string;
  img: string;
};

const SERVICES: Service[] = [
  {
    title: "Fotografia Corporativa",
    text: "Produções fotográficas para empresas, equipes, ambientes e operações, alinhadas à identidade e aos objetivos de comunicação de cada organização.",
    cta: "Solicitar orçamento",
    wa: "Olá Alexandre, preciso de fotografia corporativa para minha empresa. Pode me enviar um orçamento?",
    see: "Ver fotografia corporativa",
    to: "/fotos-corporativas",
    img: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/102590/fotografia-corporativa-em-sao-paulo_antonio-logigo-120.jpg",
  },
  {
    title: "Retratos Profissionais",
    text: "Retratos de executivos, profissionais e equipes para LinkedIn, sites, apresentações, imprensa e comunicação corporativa.",
    cta: "Solicitar orçamento",
    wa: "Olá Alexandre, quero fazer um retrato profissional. Pode me passar valores e disponibilidade?",
    see: "Ver retratos profissionais",
    to: "/foto-profissional",
    img: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/66874/retrato-corporativo_helio-martins-borges-filho-4.jpg",
  },
  {
    title: "Eventos Corporativos",
    text: "Fotografia e vídeo para congressos, convenções, feiras, palestras e encontros empresariais.",
    cta: "Solicitar orçamento",
    wa: "Olá Alexandre, gostaria de orçar a cobertura de um evento corporativo.",
    see: "Ver eventos corporativos",
    to: "/eventos-corporativos",
    img: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/90046/fotografo-de-eventos-corporativos_encontro-farmarcas-2022-2467.JPG",
  },
  {
    title: "Vídeos Corporativos",
    text: "Produção audiovisual para apresentar empresas, serviços, estruturas, equipes, projetos e cases.",
    cta: "Solicitar orçamento",
    wa: "Olá Alexandre, quero planejar um vídeo corporativo para minha empresa.",
    see: "Ver vídeos corporativos",
    to: "/videos",
    img: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/66911/banco-de-imagem-de-empresa_banco-de-imagens-empresas-negocios-alefotografo-fotografo0002.jpg",
  },
  {
    title: "Banco de Imagens",
    text: "Desenvolvemos acervos fotográficos exclusivos com equipes, ambientes, operações, produtos e serviços para comunicação consistente ao longo do ano.",
    cta: "Solicitar orçamento",
    wa: "Olá Alexandre, quero montar um banco de imagens para minha empresa. Pode me ajudar?",
    see: "Ver banco de imagens",
    to: "/banco-de-imagens",
    img: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/125396/banco-de-imagens-para-empresas_ala-servicos-39.jpg",
  },
  {
    title: "Fotografia Industrial",
    text: "Registro de instalações, processos, equipamentos, equipes e operações para comunicação institucional, comercial e técnica.",
    cta: "Solicitar orçamento",
    wa: "Olá Alexandre, preciso de fotografia industrial para minha empresa. Pode me enviar um orçamento?",
    see: "Ver fotografia industrial",
    to: "/fotografo-empresarial",
    img: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/66655/industrial_dsc7266.jpg",
  },
];

export function ServiceChooser() {
  return (
    <section className="border-b border-border bg-surface" aria-labelledby="escolha-servico">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">Serviços</p>
        <h2 id="escolha-servico" className="font-display text-3xl font-semibold text-balance md:text-4xl">
          Soluções em fotografia e vídeo para empresas
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Cada projeto recebe planejamento, execução e entrega alinhados aos objetivos de comunicação da empresa.
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
                  width={1200}
                  height={750}
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

        <div className="mt-10 flex justify-end border-t border-border pt-8">
          <Link
            to="/fotografo-corporativo"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-muted-foreground hover:text-ember"
          >
            Ver todas as especialidades <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
