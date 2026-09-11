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
          Empresas que confiam em nosso trabalho
        </p>

        <ul className="mt-6 flex gap-5 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-6 md:gap-6 md:overflow-visible md:whitespace-normal">
          {CLIENTES.map((nome) => (
            <li
              key={nome}
              className="text-[14px] leading-[1.4] text-muted-foreground md:text-center"
            >
              {nome}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
