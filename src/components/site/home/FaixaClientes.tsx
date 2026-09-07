const CLIENTES = [
  "Tecnisa",
  "Convatec",
  "Abradilan",
  "Ativa Logística",
  "SQ Química",
  "Galena",
  "Nitriflex",
  "FlexFunds",
  "Fiorde Logística",
  "Unipac",
  "Sitivesp",
  "Foseco",
];

export default function FaixaClientes() {
  return (
    <section className="bg-card py-12">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <p className="text-center text-[14px] leading-[1.4] text-muted-foreground">
          Empresas que já produziram comigo
        </p>

        {/* mobile: linha única com rolagem horizontal */}
        <ul className="mt-6 flex gap-5 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:hidden">
          {CLIENTES.map((nome) => (
            <li key={nome} className="text-[14px] leading-[1.4] text-muted-foreground">
              {nome}
            </li>
          ))}
        </ul>

        {/* desktop/tablet: 6 colunas, 2 linhas */}
        <ul className="mt-6 hidden grid-cols-6 gap-6 md:grid">
          {CLIENTES.map((nome) => (
            <li
              key={nome}
              className="text-center text-[14px] leading-[1.4] text-muted-foreground"
            >
              {nome}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
