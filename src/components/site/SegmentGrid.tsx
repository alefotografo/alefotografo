import { Link } from "@tanstack/react-router";
import { waLink } from "@/lib/whatsapp";
import { GRID_WIDTHS, imgSrcSet, imgUrl } from "@/lib/img";
import { segmentPhotos } from "@/data/homeCuration";
import { ArrowUpRight } from "lucide-react";

type Segment = {
  title: string;
  dor: string;
  imagem: string;
  beneficio: string;
  wa: string;
  to?: "/fotografia-para-clinicas" | "/foto-profissional" | "/fotos-corporativas" | "/videos";
  catSlug?: string;
  seeLabel: string;
};

const SEGMENTS: Segment[] = [
  {
    title: "Advogados e escritórios de advocacia",
    dor: "Perfis e sites com fotos improvisadas enfraquecem a percepção de solidez do escritório.",
    imagem: "Retratos individuais padronizados, fotos de sócios, equipe e ambiente do escritório.",
    beneficio: "Reputação e credibilidade coerentes em site, LinkedIn, propostas e imprensa.",
    wa: "Olá Alexandre, sou da área jurídica e quero um orçamento de fotos para o escritório.",
    catSlug: "fotografia-para-escritorios-de-advocacia",
    seeLabel: "Ver fotos para advocacia",
  },
  {
    title: "Médicos e clínicas",
    dor: "O paciente decide antes de entrar: sem imagens reais, a insegurança trava o agendamento.",
    imagem: "Retratos dos profissionais, ambientes, recepção, equipamentos e equipe em atendimento.",
    beneficio: "Mais confiança no site, no Google e nos anúncios da clínica.",
    wa: "Olá Alexandre, sou da área da saúde e quero um orçamento de fotos para clínica/consultório.",
    to: "/fotografia-para-clinicas",
    seeLabel: "Ver fotografia para clínicas",
  },
  {
    title: "Executivos e empresários",
    dor: "Foto antiga ou informal não sustenta o cargo e a autoridade que a carreira já conquistou.",
    imagem: "Retrato corporativo com direção de pose, luz controlada e enquadramentos versáteis.",
    beneficio: "Presença executiva consistente em LinkedIn, palestras, mídia e apresentações.",
    wa: "Olá Alexandre, quero um retrato executivo profissional. Pode me passar valores?",
    to: "/foto-profissional",
    seeLabel: "Ver foto profissional",
  },
  {
    title: "Empresas e equipes",
    dor: "Banco de imagens genérico não comunica quem a empresa realmente é.",
    imagem: "Retratos de equipe, diretoria, ambientes, processos e cultura interna.",
    beneficio: "Um acervo próprio para site, recrutamento, campanhas e comunicação interna.",
    wa: "Olá Alexandre, preciso de fotos corporativas para a minha empresa e equipe.",
    to: "/fotos-corporativas",
    seeLabel: "Ver fotografia corporativa",
  },
  {
    title: "Eventos corporativos",
    dor: "Eventos bem produzidos que rendem pouco conteúdo depois desperdiçam investimento.",
    imagem: "Cobertura de palcos, público, networking, patrocinadores e bastidores, em foto e vídeo.",
    beneficio: "Material imediato para divulgação, relatório para patrocinadores e próxima edição.",
    wa: "Olá Alexandre, quero orçamento para cobertura de um evento corporativo.",
    catSlug: "fotografo-de-eventos-corporativos",
    seeLabel: "Ver cobertura de eventos",
  },
  {
    title: "Palestrantes e profissionais liberais",
    dor: "Sem imagens de autoridade, a negociação de cachê e de contratos fica mais difícil.",
    imagem: "Retratos de marca pessoal, fotos em ação no palco e conteúdo vertical para redes.",
    beneficio: "Autoridade percebida antes da primeira conversa comercial.",
    wa: "Olá Alexandre, sou palestrante/profissional liberal e quero fotos de marca pessoal.",
    to: "/foto-profissional",
    seeLabel: "Ver retratos profissionais",
  },
];

export function SegmentGrid() {
  return (
    <section className="border-b border-border" aria-labelledby="segmentos">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">Segmentos</p>
        <h2 id="segmentos" className="font-display text-3xl font-semibold text-balance md:text-4xl">
          Fotografia corporativa para diferentes segmentos
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          A necessidade de imagem muda conforme o público. Veja o que costuma ser prioridade em cada
          segmento atendido em São Paulo.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SEGMENTS.map((s) => {
            const photo = segmentPhotos[s.title];
            return (
              <article
                key={s.title}
                className="flex flex-col overflow-hidden rounded-sm border border-border bg-surface transition-colors hover:border-ember"
              >
                {photo && (
                  <img
                    src={imgUrl(photo.src, 640)}
                    srcSet={imgSrcSet(photo.src, GRID_WIDTHS)}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full"
                  />
                )}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                  <dl className="mt-4 space-y-3 text-sm leading-relaxed">
                    <div>
                      <dt className="text-xs uppercase tracking-[0.15em] text-ember">Desafio</dt>
                      <dd className="mt-1 text-muted-foreground">{s.dor}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-[0.15em] text-ember">Imagens necessárias</dt>
                      <dd className="mt-1 text-muted-foreground">{s.imagem}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-[0.15em] text-ember">Resultado</dt>
                      <dd className="mt-1 text-muted-foreground">{s.beneficio}</dd>
                    </div>
                  </dl>
                  <a
                    href={waLink(s.wa)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-sm bg-ember px-5 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
                  >
                    Solicitar orçamento
                  </a>
                  {s.to ? (
                    <Link to={s.to} className="mt-3 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-ember">
                      {s.seeLabel} <ArrowUpRight size={14} />
                    </Link>
                  ) : (
                    <Link
                      to="/fotografo-corporativo/$slug"
                      params={{ slug: s.catSlug as string }}
                      className="mt-3 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-ember"
                    >
                      {s.seeLabel} <ArrowUpRight size={14} />
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
