import { Link } from "@tanstack/react-router";
import type { Category, Post } from "@/data/catalog";

export function RelatedLinks({
  cats = [],
  posts = [],
  title = "Continue explorando",
}: {
  cats?: Category[];
  posts?: Post[];
  title?: string;
}) {
  if (!cats.length && !posts.length) return null;
  return (
    <aside className="mt-12 rounded-sm border border-border bg-surface p-6 md:p-8" aria-label={title}>
      <h2 className="font-display text-xl font-semibold">{title}</h2>
      {cats.length > 0 && (
        <div className="mt-5">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-ember">Segmentos relacionados</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {cats.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/fotografo-corporativo/$slug"
                  params={{ slug: c.slug }}
                  className="inline-flex rounded-sm border border-border-strong px-3 py-1.5 text-sm text-foreground/90 transition-colors hover:border-ember hover:text-ember"
                  title={c.title}
                >
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {posts.length > 0 && (
        <div className="mt-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-ember">Leituras recomendadas</p>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group block rounded-sm border border-border bg-background p-4 hover:border-ember"
                >
                  <span className="line-clamp-2 font-display text-sm font-semibold text-foreground group-hover:text-ember">
                    {p.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}
