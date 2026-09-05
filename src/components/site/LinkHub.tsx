import { Link } from "@tanstack/react-router";
import { categories, posts } from "@/data/catalog";
import { bairros } from "@/data/bairros";
import { relatedCategories, relatedPosts } from "@/lib/related";

/**
 * Hub de links internos: entrega sempre 10 links contextuais por página
 * (páginas comerciais, galerias, bairros e posts do blog) para distribuir
 * autoridade interna e aumentar o rastreamento das URLs mais estratégicas.
 */

type Item = { to: string; label: string; kind: "servico" | "galeria" | "bairro" | "post" };

const SERVICOS: Array<{ to: string; label: string; keys: string[] }> = [
  { to: "/fotos-corporativas", label: "Fotos corporativas em São Paulo", keys: ["corporativ", "empresa", "equipe", "escritório", "institucional", "banco de imagens"] },
  { to: "/foto-profissional", label: "Foto profissional em São Paulo", keys: ["foto profissional", "ensaio", "retrato", "pose", "estúdio", "carreira"] },
  { to: "/foto-profissional-para-linkedin", label: "Foto profissional para LinkedIn", keys: ["linkedin", "perfil", "currículo", "headshot", "recrut"] },
  { to: "/fotografia-executiva", label: "Fotografia executiva", keys: ["executiv", "diretor", "sócio", "liderança", "c-level", "palestrante"] },
  { to: "/fotografo-empresarial", label: "Fotógrafo empresarial", keys: ["empresarial", "empresa", "negócio", "indústria", "operação", "logística"] },
  { to: "/fotografia-para-clinicas", label: "Fotografia para clínicas", keys: ["clínica", "clinic", "saúde", "consultório", "dentista", "paciente"] },
  { to: "/fotos-profissionais-medicos", label: "Fotos profissionais para médicos", keys: ["médic", "doutor", "consultório", "doctoralia", "saúde"] },
  { to: "/fotografia-para-advogados", label: "Fotografia para advogados", keys: ["advogad", "advocacia", "jurídic", "direito", "compliance"] },
  { to: "/eventos-corporativos", label: "Eventos corporativos", keys: ["evento", "congresso", "convenção", "palestra", "premiação", "confraterniza"] },
  { to: "/fotografo-de-feira-de-negocios", label: "Fotógrafo de feira de negócios", keys: ["feira", "stand", "expositor", "congresso", "evento"] },
  { to: "/videos", label: "Vídeo institucional e depoimentos", keys: ["vídeo", "video", "depoimento", "institucional", "youtube"] },
  { to: "/fotografo-corporativo", label: "Galeria de fotos corporativas", keys: ["galeria", "portfólio", "portfolio", "fotos"] },
];

function norm(s: string) {
  return (s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function LinkHub({
  seed,
  exclude = [],
  excludeSlug,
  title = "Continue navegando",
}: {
  seed: string;
  /** rotas fixas a não repetir (ex.: a própria página) */
  exclude?: string[];
  /** slug de galeria ou post atual */
  excludeSlug?: string;
  title?: string;
}) {
  const text = norm(seed);
  const skip = new Set(exclude);

  const servicos: Item[] = SERVICOS.filter((s) => !skip.has(s.to))
    .map((s) => ({
      ...s,
      score: s.keys.reduce((acc, k) => acc + (text.includes(norm(k)) ? 1 : 0), 0),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map((s) => ({ to: s.to, label: s.label, kind: "servico" as const }));

  const cats = relatedCategories(seed, excludeSlug, 3);
  const catFallback = categories.filter((c) => c.slug !== excludeSlug).slice(0, 3);
  const galerias: Item[] = (cats.length ? cats : catFallback).slice(0, 3).map((c) => ({
    to: `/fotografo-corporativo/${c.slug}`,
    label: c.title,
    kind: "galeria" as const,
  }));

  const rel = relatedPosts(seed, excludeSlug, 2);
  const postFallback = posts.filter((p) => p.slug !== excludeSlug).slice(0, 2);
  const artigos: Item[] = (rel.length ? rel : postFallback).slice(0, 2).map((p) => ({
    to: `/blog/${p.slug}`,
    label: p.title,
    kind: "post" as const,
  }));

  const bairroPick = bairros
    .filter((b) => !skip.has(`/fotografo-corporativo-em/${b.slug}`))
    .map((b) => ({ b, s: text.includes(norm(b.nome)) ? 1 : 0 }))
    .sort((a, b) => b.s - a.s)
    .slice(0, 1)
    .map(({ b }) => ({
      to: `/fotografo-corporativo-em/${b.slug}`,
      label: `Fotógrafo corporativo no ${b.nome}`,
      kind: "bairro" as const,
    }));

  const seen = new Set<string>();
  const items: Item[] = [...servicos, ...galerias, ...artigos, ...bairroPick].filter((i) => {
    if (seen.has(i.to) || skip.has(i.to)) return false;
    seen.add(i.to);
    return true;
  });

  // Completa até 10 links com páginas comerciais e galerias restantes.
  for (const s of SERVICOS) {
    if (items.length >= 10) break;
    if (seen.has(s.to) || skip.has(s.to)) continue;
    seen.add(s.to);
    items.push({ to: s.to, label: s.label, kind: "servico" });
  }
  for (const c of categories) {
    if (items.length >= 10) break;
    const to = `/fotografo-corporativo/${c.slug}`;
    if (seen.has(to) || c.slug === excludeSlug) continue;
    seen.add(to);
    items.push({ to, label: c.title, kind: "galeria" });
  }

  const list = items.slice(0, 10);
  if (!list.length) return null;

  return (
    <nav className="mt-12 rounded-sm border border-border bg-surface p-6 md:p-8" aria-label={title}>
      <h2 className="font-display text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Serviços, galerias e leituras relacionadas ao que você está vendo agora.
      </p>
      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {list.map((i) => (
          <li key={i.to}>
            <Link
              to={i.to}
              className="group flex items-start gap-2 rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground/90 transition-colors hover:border-ember hover:text-ember"
            >
              <span className="mt-0.5 text-xs uppercase tracking-wider text-ember">
                {i.kind === "post" ? "Blog" : i.kind === "galeria" ? "Fotos" : i.kind === "bairro" ? "Região" : "Serviço"}
              </span>
              <span className="line-clamp-2 font-medium">{i.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
