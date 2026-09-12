import { Link } from "@tanstack/react-router";
import { waLink } from "@/lib/whatsapp";

export default function BancoDeImagens() {
  return (
    <section className="py-14 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="font-display text-[24px] font-semibold leading-[1.2] text-foreground md:text-[32px]">
            Banco de imagens corporativo
          </h2>
          <p className="mt-6 text-[16px] leading-[1.6] text-muted-foreground md:text-[17px]">
            Um banco de imagens próprio cria consistência na comunicação da empresa e oferece
            material profissional para diferentes necessidades ao longo do ano.
          </p>
          <p className="mt-6 text-[16px] leading-[1.6] text-muted-foreground md:text-[17px]">
            Planejamos cada produção de acordo com o negócio, reunindo imagens de pessoas,
            ambientes, produtos, serviços e operações em um acervo organizado e pronto para
            utilização em diferentes canais.
          </p>
          <p className="mt-12 flex flex-wrap justify-center gap-3">
            <Link
              to="/fotografo-corporativo/$slug"
              params={{ slug: "banco-de-imagens-para-empresas" }}
              className="inline-block rounded-sm bg-ember px-6 py-3 text-[16px] font-medium leading-[1.6] text-accent-foreground transition-colors hover:bg-ember-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none"
            >
              Conhecer Banco de Imagens
            </Link>
            <a
              href={waLink(
                "Olá Alexandre, gostaria de conversar sobre banco de imagens para a nossa empresa.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-sm border border-border px-6 py-3 text-[16px] font-medium leading-[1.6] text-foreground transition-colors hover:bg-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none"
            >
              Vamos conversar
            </a>
          </p>

          <p className="mt-6 text-center">
            <Link
              to="/fotografo-corporativo/$slug"
              params={{ slug: "banco-de-imagens-para-empresas" }}
              className="inline-flex min-h-11 items-center text-[14px] leading-[1.4] text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none md:min-h-0"
            >
              Como funciona o banco de imagens
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
