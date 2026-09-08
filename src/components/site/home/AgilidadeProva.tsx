import { googleBusinessProfileUrl } from "@/data/reviews";

interface NumeroItem {
  valor: string;
  legenda: string;
  href?: string;
}

const NUMEROS: readonly NumeroItem[] = [
  { valor: "30", legenda: "anos — de carreira, desde 1991" },
  { valor: "200+", legenda: "empresas atendidas" },
  { valor: "300+", legenda: "executivos fotografados" },
  {
    valor: "4,9",
    legenda: "no Google, em 144 avaliações",
    href: googleBusinessProfileUrl,
  },
];

const DEPOIMENTOS: readonly {
  texto: string;
  autor: string;
}[] = [
  {
    texto:
      "Trabalho com o Alexandre há mais de dez anos. Pontualidade, qualidade e resultado sempre acima do esperado. As fotos chegam organizadas e prontas para usar.",
    autor: "Diretor Comercial, Empresa de Logística, SP",
  },
  {
    texto:
      "Fizemos o banco de imagens da empresa inteiro em um dia de produção. Temos material para o site, LinkedIn e apresentações. Valeu cada centavo.",
    autor: "Gerente de Marketing, Indústria de Embalagens, SP",
  },
  {
    texto:
      "O totem fotográfico no nosso congresso foi um sucesso. As pessoas adoraram a foto na hora, e nós tivemos a cobertura completa entregue no dia seguinte.",
    autor: "Coordenadora de Eventos, Associação Médica, SP",
  },
];

function StarRow({ ariaLabel }: { ariaLabel: string }) {
  return (
    <span
      role="img"
      aria-label={ariaLabel}
      className="text-ember"
      aria-hidden="true"
    >
      ★★★★★
    </span>
  );
}

export default function AgilidadeProva() {
  return (
    <section className="py-14 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="font-display text-[24px] font-semibold leading-[1.2] text-foreground md:text-[32px]">
            Trinta anos de câmera aparecem no prazo, não no discurso
          </h2>
          <p className="mt-6 text-[16px] leading-[1.6] text-muted-foreground md:text-[17px]">
            Luz, exposição e enquadramento resolvidos na hora da foto. O tratamento vira ajuste fino
            em vez de reconstrução. Na prática: fotos tratadas em um dia útil, e em evento, entrega
            durante o próprio evento. Fotografo pessoalmente — não mando assistente no meu lugar.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {NUMEROS.map((item) => (
            <div key={item.valor} className="text-center">
              <p
                className="font-display text-[32px] font-semibold leading-[1.1] text-foreground md:text-[48px]"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {item.valor}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex flex-col items-center gap-1 text-[14px] leading-[1.4] text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none"
                >
                  <span>{item.legenda}</span>
                  <StarRow ariaLabel="5 de 5 estrelas no Google" />
                </a>
              ) : (
                <p className="mt-2 text-[14px] leading-[1.4] text-muted-foreground">
                  {item.legenda}
                </p>
              )}
            </div>
          ))}
        </div>

        {DEPOIMENTOS.length > 0 && (
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {DEPOIMENTOS.map((depoimento) => (
              <article
                key={depoimento.autor}
                className="flex h-full flex-col rounded-sm border border-border bg-card p-6"
              >
                <blockquote className="flex-grow text-[16px] leading-[1.6] text-foreground md:text-[17px]">
                  {depoimento.texto}
                </blockquote>
                <cite className="mt-6 not-italic border-t border-border pt-4 text-[14px] leading-[1.4] text-muted-foreground">
                  <span className="block text-foreground">{depoimento.autor}</span>
                </cite>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
