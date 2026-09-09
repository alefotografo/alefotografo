import { Link } from "@tanstack/react-router";
import { SmartImage } from "@/components/site/SmartImage";
import { waLink } from "@/lib/whatsapp";

const FOTO = {
  src: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/66941/fotografo-de-eventos-corporativos-em-sao-paulo_tourhouse-105.jpg",
  alt: "Fotógrafo de Eventos Corporativos em São Paulo — plateia de participantes durante evento empresarial",
};

const SOLUCOES = [
  {
    title: "Cobertura fotográfica",
    texto: "Registro de palestras, público, networking, ativações, patrocinadores e bastidores.",
  },
  {
    title: "Fotos em tempo real",
    texto: "Disponibilização das imagens durante o evento para utilização imediata pela organização e participantes.",
  },
  {
    title: "Reconhecimento facial",
    texto: "Cada participante pode localizar suas fotografias por reconhecimento facial e fazer o download diretamente no celular.",
  },
  {
    title: "Produção audiovisual e aftermovie",
    texto: "Filmagem integral, captação em takes e produção de vídeos com os principais momentos do evento.",
  },
] as const;

const MENSAGEM =
  "Olá Alexandre, quero falar sobre cobertura de evento da minha empresa. Pode me ajudar?";

export default function EventoCompleto() {
  return (
    <section className="py-14 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="rounded-sm border-t-2 border-ember bg-surface-elevated">
          <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-[24px] font-semibold leading-[1.2] text-foreground md:text-[32px]">
                Soluções para eventos corporativos
              </h2>
              <p className="mt-6 max-w-[68ch] text-[16px] leading-[1.6] text-muted-foreground md:text-[17px]">
                Fotografia e produção audiovisual para congressos, convenções, feiras, palestras,
                lançamentos e encontros empresariais.
              </p>

              <ul className="mt-6 space-y-4">
                {SOLUCOES.map((item) => (
                  <li
                    key={item.title}
                    className="flex flex-col gap-1 text-[16px] leading-[1.6] text-foreground md:text-[17px]"
                  >
                    <span className="font-semibold">{item.title}</span>
                    <span className="text-muted-foreground">{item.texto}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-12">
                <a
                  href={waLink(MENSAGEM)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-sm bg-ember px-6 py-3 text-[16px] font-medium leading-[1.6] text-accent-foreground transition-colors hover:bg-ember-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none"
                >
                  Falar sobre cobertura de evento
                </a>
              </p>
            </div>

            <div className="overflow-hidden rounded-sm" style={{ aspectRatio: "3 / 2" }}>
              <SmartImage
                src={FOTO.src}
                alt={FOTO.alt}
                width={900}
                height={600}
                baseWidth={900}
                widths={[400, 640, 900]}
                sizes="(max-width: 1023px) 100vw, 560px"
                placeholderRatio="3 / 2"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
