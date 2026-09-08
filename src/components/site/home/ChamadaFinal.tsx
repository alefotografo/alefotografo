import { waLink } from "@/lib/whatsapp";

const MENSAGEM =
  "Olá Alexandre, minha empresa precisa produzir foto e vídeo. Posso te contar o projeto?";

export default function ChamadaFinal() {
  return (
    <section className="py-14 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="font-display text-[24px] font-semibold leading-[1.2] text-foreground md:text-[32px]">
            Me conte o que precisa produzir
          </h2>
          <p className="mt-6 text-[16px] leading-[1.6] text-muted-foreground md:text-[17px]">
            Tipo de produção, quantas pessoas, onde e para quando. Respondo com escopo e valor no
            mesmo dia útil. Se não for o meu tipo de trabalho, eu falo na hora.
          </p>

          <p className="mt-12">
            <a
              href={waLink(MENSAGEM)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-sm bg-ember px-6 py-3 text-[16px] font-medium leading-[1.6] text-accent-foreground transition-colors hover:bg-ember-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none"
            >
              Chamar no WhatsApp
            </a>
          </p>

          <p className="mt-6 text-[14px] leading-[1.4] text-muted-foreground">
            Atendimento para empresas em São Paulo e região metropolitana
          </p>
        </div>
      </div>
    </section>
  );
}
