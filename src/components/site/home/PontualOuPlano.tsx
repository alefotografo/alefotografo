import { waLink } from "@/lib/whatsapp";

const MENSAGEM_PLANO =
  "Olá Alexandre, quero entender o plano anual de produção de imagem.";
const MENSAGEM_PRODUCAO =
  "Olá Alexandre, quero falar sobre uma produção de foto e vídeo para minha empresa. Pode me ajudar?";

export default function PontualOuPlano() {
  return (
    <section className="py-14 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="rounded-sm border border-border bg-card p-6 md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[68ch]">
              <h2 className="font-display text-[24px] font-semibold leading-[1.2] text-foreground md:text-[32px]">
                Contrate uma produção ou um ano de produção
              </h2>
              <p className="mt-6 text-[16px] leading-[1.6] text-muted-foreground md:text-[17px]">
                Toda vez que aparece uma necessidade de imagem, começa de novo: pedir orçamento,
                aprovar, agendar. No plano anual sua empresa compra crédito uma vez e vai consumindo
                ao longo do ano — o crédito vale mais que o valor pago, a agenda é prioritária e o
                prazo de entrega é menor. Sem processo de compra a cada foto.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-shrink-0">
              <a
                href={waLink(MENSAGEM_PLANO)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-sm bg-ember px-6 py-3 text-center text-[16px] font-medium leading-[1.6] text-accent-foreground transition-colors hover:bg-ember-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none"
              >
                Conhecer os planos
              </a>
              <a
                href={waLink(MENSAGEM_PRODUCAO)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-sm border border-border-strong px-6 py-3 text-center text-[16px] font-medium leading-[1.6] text-foreground transition-colors hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none"
              >
                Falar sobre uma produção
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
