export type SessionFormat = {
  /** Nome do formato de sessão. */
  formato: string;
  /** Onde a sessão acontece. */
  onde: string;
  /** Duração aproximada da captação. */
  duracao: string;
  /** O que é entregue e em quanto tempo. */
  entrega: string;
};

/**
 * Tabela comparativa de formatos de sessão.
 * Formato tabular é mais fácil de extrair por buscadores e assistentes de IA
 * do que a mesma informação em texto corrido.
 */
export function FormatsTable({
  items,
  title = "Formatos de sessão, duração e entrega",
  caption,
}: {
  items: SessionFormat[];
  title?: string;
  caption?: string;
}) {
  if (items.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <h2 className="font-display text-2xl font-semibold md:text-3xl">{title}</h2>
      <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
        {caption ??
          "Compare os formatos e veja qual resolve o seu caso. O valor é fechado por orçamento, no WhatsApp, antes do ensaio."}
      </p>
      <div className="mt-8 overflow-x-auto rounded-sm border border-border">
        <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
          <caption className="sr-only">{title}</caption>
          <thead className="bg-surface">
            <tr>
              <th scope="col" className="border-b border-border px-4 py-3 font-semibold">
                Formato da sessão
              </th>
              <th scope="col" className="border-b border-border px-4 py-3 font-semibold">
                Onde acontece
              </th>
              <th scope="col" className="border-b border-border px-4 py-3 font-semibold">
                Duração
              </th>
              <th scope="col" className="border-b border-border px-4 py-3 font-semibold">
                Entrega
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((i) => (
              <tr key={i.formato} className="align-top">
                <th
                  scope="row"
                  className="border-b border-border px-4 py-4 font-medium text-foreground"
                >
                  {i.formato}
                </th>
                <td className="border-b border-border px-4 py-4 text-muted-foreground">{i.onde}</td>
                <td className="border-b border-border px-4 py-4 text-muted-foreground">
                  {i.duracao}
                </td>
                <td className="border-b border-border px-4 py-4 text-muted-foreground">
                  {i.entrega}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
