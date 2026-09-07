import { Link } from "@tanstack/react-router";
import { SmartImage } from "@/components/site/SmartImage";
import { waLink } from "@/lib/whatsapp";

const CDN =
  "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/125396";

const MINIATURAS = [
  { legenda: "Fachada e portaria", src: `${CDN}/banco-de-imagens-para-empresas_ala-servicos-178.jpg` },
  { legenda: "Frota", src: `${CDN}/banco-de-imagens-para-empresas_ativa-itapevi-74.jpg` },
  { legenda: "Recebimento", src: `${CDN}/banco-de-imagens-para-empresas_carriers-24.jpg` },
  { legenda: "Armazenagem", src: `${CDN}/banco-de-imagens-para-empresas_ativa-itapevi-260.jpg` },
  {
    legenda: "Separação e expedição",
    src: `${CDN}/banco-de-imagens-para-empresas_ativa-itapevi-113.jpg`,
  },
  { legenda: "Linha de produção", src: `${CDN}/banco-de-imagens-para-empresas_ativa-itapevi-34.jpg` },
  { legenda: "Equipe em operação", src: `${CDN}/banco-de-imagens-para-empresas_carriers-11.jpg` },
  {
    legenda: "Vista aérea com drone",
    src: `${CDN}/banco-de-imagens-para-empresas_ativa-itapevi-11.jpg`,
  },
] as const;

export default function BancoDeImagens() {
  return (
    <section className="py-14 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="font-display text-[24px] font-semibold leading-[1.2] text-foreground md:text-[32px]">
            Sua empresa paga por foto de banco e o concorrente usa a mesma imagem
          </h2>
          <p className="mt-6 text-[16px] leading-[1.6] text-muted-foreground md:text-[17px]">
            É a mesma biblioteca para todo mundo. O sorriso da recepcionista do site da sua empresa
            está no site de mais três. Banco de imagens próprio resolve isso de uma vez: um ou dois
            dias de produção na sua operação geram o acervo que abastece site, apresentação
            comercial, proposta, rede social, folder e catálogo pelo ano inteiro. Quem precisar de
            foto pega na pasta, em vez de pedir para o marketing.
          </p>
          <p className="mt-12">
            <a
              href={waLink(
                "Olá Alexandre, quero montar o banco de imagens da minha empresa. Pode me ajudar?",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-sm bg-ember px-6 py-3 text-[16px] font-medium leading-[1.6] text-accent-foreground transition-colors hover:bg-ember-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none"
            >
              Montar o banco de imagens da minha empresa
            </a>
          </p>
        </div>

        <h3 className="mt-12 font-display text-[18px] font-semibold leading-[1.3] text-foreground md:text-[20px]">
          O que uma cobertura completa registra
        </h3>

        <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {MINIATURAS.map((foto) => (
            <li key={foto.legenda}>
              <div className="overflow-hidden rounded-sm" style={{ aspectRatio: "1 / 1" }}>
                <SmartImage
                  src={foto.src}
                  alt={foto.legenda}
                  width={300}
                  height={300}
                  baseWidth={400}
                  widths={[300, 400, 600]}
                  sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 300px"
                  placeholderRatio="1 / 1"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-2 text-[14px] leading-[1.4] text-muted-foreground">{foto.legenda}</p>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-center">
          <Link
            to="/fotografo-corporativo/$slug"
            params={{ slug: "banco-de-imagens-para-empresas" }}
            className="text-[14px] leading-[1.4] text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none"
          >
            Como funciona o banco de imagens
          </Link>
        </p>
      </div>
    </section>
  );
}
