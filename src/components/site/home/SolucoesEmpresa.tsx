import { Link } from "@tanstack/react-router";
import { SmartImage } from "@/components/site/SmartImage";

const CDN =
  "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem";

const CARDS = [
  {
    title: "Você usa as mesmas fotos desde 2019",
    dores: [
      "Metade das pessoas daquelas fotos já saiu da empresa",
      "Toda área pede foto para o marketing e o marketing não tem",
    ],
    solucoes: [
      "Monto um acervo com as suas pessoas, seu ambiente e seus processos",
      "Entregue catalogado por tema, pronto para o ano inteiro",
    ],
    slug: "banco-de-imagens-para-empresas",
    img: `${CDN}/125396/banco-de-imagens-para-empresas_ala-servicos-39.jpg`,
    alt: "Banco de Imagens Empresarial — foto 1",
  },
  {
    title: "O site novo vai ao ar e não tem foto para colocar",
    dores: [
      "O layout ficou pronto antes do conteúdo, e agora falta imagem",
      "Foto de banco entrega um escritório que não é o seu",
    ],
    solucoes: [
      "Foto e vídeo institucional na mesma produção, com drone e locução",
      "Retratos da diretoria e da equipe no mesmo padrão",
    ],
    slug: "fotografia-institucional-em-saopaulo",
    img: `${CDN}/66911/banco-de-imagem-de-empresa_banco-de-imagens-empresas-negocios-alefotografo-fotografo0002.jpg`,
    alt: "Fotografia Institucional — foto 1",
  },
  {
    title: "Seu cliente não faz ideia do tamanho da sua operação",
    dores: [
      "A proposta fala em 12 mil m² e não mostra nenhum",
      "Concorrente menor parece maior porque tem imagem melhor",
    ],
    solucoes: [
      "Frota, armazenagem, separação, expedição e linha de produção",
      "Aérea com drone da planta inteira",
    ],
    slug: "fotografia-industrial",
    img: `${CDN}/66655/industrial_dsc7266.jpg`,
    alt: "Fotografia Industrial — foto 1",
  },
  {
    title: "A página da equipe tem uma foto de cada jeito",
    dores: [
      "Um recortado de festa, outro contra a janela, outro do celular",
      "Executivo novo entra e não tem foto para o LinkedIn",
    ],
    solucoes: [
      "Todo mundo fotografado no mesmo padrão, no seu escritório",
      "Cinquenta pessoas em um dia, entrega em um dia útil",
    ],
    slug: "fotografo-de-grupos-times-e-equipes",
    img: `${CDN}/77681/grupos-fotos-de-grupos-ou-equipes_grupos-1.jpg`,
    alt: "Fotógrafo de Grupos, Times e Equipes — foto 1",
  },
  {
    title: "No fim do evento todo mundo pergunta quando saem as fotos",
    dores: [
      "As fotos chegam três dias depois, quando ninguém mais posta",
      "O post do evento sai na quinta, o evento foi na segunda",
    ],
    solucoes: [
      "Fotos publicadas durante o evento, achadas por reconhecimento facial",
      "Aftermovie editado no local e exibido no encerramento",
    ],
    slug: null,
    img: `${CDN}/66941/eventos-corporativos_fotografo-de-eventos-corporativos-eventos-pessoas-em-evento-fotos-de-eventos-corporaticos-alefotografo0174.JPG`,
    alt: "Fotógrafo de Eventos Empresariais — foto 1",
  },
  {
    title: "Você gastou o ano inteiro de verba em quatro dias de feira",
    dores: [
      "Terminou a feira e sobraram três fotos de celular do estande",
      "Não há o que mostrar para a diretoria nem para as redes",
    ],
    solucoes: [
      "Estande em operação, atendimentos, produtos e visitantes",
      "Vídeo da participação pronto ainda durante a feira",
    ],
    slug: "fotografo-feiras-stands",
    img: `${CDN}/66936/feiras_feiras-stand-fotografo-oficial-de-feiras-stands-exposicoes-alefotografo0048.jpg`,
    alt: "Fotógrafo de Feiras de Negócios — foto 1",
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
          O que um fotógrafo corporativo resolve para a sua empresa
        </h2>
        <p className="mt-6 max-w-[68ch] text-[16px] leading-[1.6] text-muted-foreground md:text-[17px]">
          Ninguém contrata "uma sessão de fotos". Contrata porque o site vai ao ar em três
          semanas, porque a feira é em maio, porque a diretoria mudou. Escolha a situação que é
          a sua.
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
