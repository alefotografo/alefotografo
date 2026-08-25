import { Link } from "@tanstack/react-router";

const items = [
  { to: "/admin/desempenho", label: "Desempenho" },
  { to: "/admin/indexacao", label: "Indexação" },
  { to: "/admin/monitoramento", label: "Monitoramento" },
] as const;

/** Navegação entre os painéis internos de administração. */
export function AdminNav() {
  return (
    <nav aria-label="Painéis internos" className="mb-8 flex flex-wrap gap-2 border-b pb-4 print:hidden">
      {items.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          activeProps={{ className: "bg-foreground text-background" }}
          className="rounded-md border px-3 py-1.5 text-sm font-medium hover:bg-muted"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
