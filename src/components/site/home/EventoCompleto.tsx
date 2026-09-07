import { Link } from "@tanstack/react-router";
import { SmartImage } from "@/components/site/SmartImage";
import { waLink } from "@/lib/whatsapp";

const FOTO = {
  src: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/66941/fotografo-de-eventos-corporativos-em-sao-paulo_tourhouse-105.jpg",
  alt: "Fotógrafo de Eventos Corporativos em São Paulo — plateia de participantes durante evento empresarial",
};

const ITENS = [
  "QR code personalizado com a arte do seu evento",
  "Fotos publicadas durante o evento, não depois",
  "Reconhecimento facial: cada pessoa acha as próprias fotos",
  "Download direto no celular, pronto para postar",
] as const;

const LINK_CLASS =
  "text-[14px] leading-[1.4] text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none";

export default function EventoCompleto() {
  return (
    <section className="py-14 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="rounded-sm border-t-2 border-ember bg-surface-elevated">
          <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-[24px] font-semibold leading-[1.2] text-foreground md:text-[32px]">
                As fotos no celular de quem foi, antes de o evento acabar
              </h2>
              <p className="mt-6 max-w-[68ch] text-[16px] leading-[1.6] text-muted-foreground md:text-[17px]">
                Hoje é assim: o evento termina, as fotos chegam três dias depois num link, alguém do
                marketing garimpa e posta na quinta-feira. O assunto já morreu. Com QR code na
                entrada, o participante aponta a câmera, o reconhecimento facial acha as fotos dele
                e ele posta ainda no coffee break — marcando a sua empresa.
              </p>

              <ul className="mt-6 space-y-2">
                {ITENS.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-[16px] leading-[1.6] text-foreground md:text-[17px]"
                  >
                    <span aria-hidden="true">–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 max-w-[68ch] text-[14px] leading-[1.4] text-muted-foreground">
                No mesmo evento entram fotógrafo e filmmaker, aftermovie editado no local e exibido
                no encerramento, totem fotográfico e foto lembrança impressa na hora.
              </p>

              <p className="mt-6 flex flex-wrap gap-6">
                <Link
                  to="/fotografo-corporativo/$slug"
                  params={{ slug: "totem-fotografico-totem-mania" }}
                  className={LINK_CLASS}
                >
                  Totem fotográfico
                </Link>
                <Link
                  to="/fotografo-corporativo/$slug"
                  params={{ slug: "foto-impressa-na-hora" }}
                  className={LINK_CLASS}
                >
                  Foto lembrança impressa na hora
                </Link>
              </p>

              <p className="mt-12">
                <a
                  href={waLink(
                    "Olá Alexandre, quero falar sobre cobertura de evento da minha empresa. Pode me ajudar?",
                  )}
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
