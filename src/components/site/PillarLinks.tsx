import { Link } from "@tanstack/react-router";

type Pillar = { path: string; label: string; blurb: string; keys: string[] };

// Páginas-pilar do site: recebem crosslinks contextuais dos posts do blog
// para concentrar autoridade nos termos de maior volume de busca.
const PILLARS: Pillar[] = [
  {
    path: "/fotos-corporativas",
    label: "Fotos corporativas em São Paulo",
    blurb: "Retratos, equipes, escritório, eventos e produtos com entrega em 1 a 3 dias úteis.",
    keys: ["corporativ", "empresa", "equipe", "escritório", "evento", "indústria", "institucional", "banco de imagens"],
  },
  {
    path: "/foto-profissional",
    label: "Foto profissional em São Paulo",
    blurb: "Retrato profissional com direção de pose para LinkedIn, currículo, site e imprensa.",
    keys: ["foto profissional", "ensaio", "retrato", "pose", "estúdio", "lugares para tirar foto", "são paulo", "carreira", "marca pessoal"],
  },
  {
    path: "/foto-profissional-para-linkedin",
    label: "Foto profissional para LinkedIn",
    blurb: "Headshot com direção de pose e luz, pronto para perfil, currículo e apresentações.",
    keys: ["linkedin", "perfil", "currículo", "headshot", "retrato", "pose", "carreira", "recrut"],
  },
  {
    path: "/fotografia-para-clinicas",
    label: "Fotografia para clínicas",
    blurb: "Ambientes, equipe, equipamentos e retratos de médicos com padrão de credibilidade.",
    keys: ["clínica", "clinic", "médic", "saúde", "consultório", "dentista", "paciente", "hospital"],
  },
];

function norm(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function PillarLinks({ seed, max = 2 }: { seed: string; max?: number }) {
  const text = norm(seed);
  const ranked = PILLARS.map((p) => ({
    ...p,
    score: p.keys.reduce((acc, k) => acc + (text.includes(norm(k)) ? 1 : 0), 0),
  }))
    .sort((a, b) => b.score - a.score)
    .slice(0, max);

  return (
    <aside
      className="mt-8 rounded-sm border border-border bg-surface p-6 md:p-8"
      aria-label="Serviços relacionados"
    >
      <h2 className="font-display text-xl font-semibold">Serviços relacionados</h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {ranked.map((p) => (
          <li key={p.path}>
            <Link
              to={p.path}
              className="group block h-full rounded-sm border border-border bg-background p-4 hover:border-ember"
            >
              <span className="block font-display text-sm font-semibold text-foreground group-hover:text-ember">
                {p.label}
              </span>
              <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                {p.blurb}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
