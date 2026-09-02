import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { searchSite, type SearchHit } from "@/lib/search";

export const Route = createFileRoute("/busca")({
  validateSearch: (search: Record<string, unknown>): { q: string } => ({
    q: typeof search.q === "string" ? search.q.slice(0, 120) : "",
  }),
  head: () => ({
    meta: [
      ...buildMeta({
        title: "Busca no site",
        description:
          "Encontre serviços de fotografia corporativa, galerias, vídeos e artigos do blog do Alê Fotógrafo.",
        path: "/busca",
      }),
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: BuscaPage,
});

const GROUPS = ["Serviços e páginas", "Artigos do blog", "Vídeos"] as const;

function BuscaPage() {
  const { q } = Route.useSearch();
  const navigate = useNavigate();
  const [term, setTerm] = useState(q);

  const results = useMemo(() => searchSite(q), [q]);

  const grouped = useMemo(() => {
    const map = new Map<string, SearchHit[]>();
    for (const hit of results) {
      const list = map.get(hit.group) ?? [];
      list.push(hit);
      map.set(hit.group, list);
    }
    return map;
  }, [results]);

  return (
    <main id="conteudo" className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-ember">Busca</p>
      <h1 className="font-display text-3xl font-semibold md:text-4xl">
        {q ? `Resultados para “${q}”` : "O que você procura?"}
      </h1>

      <form
        role="search"
        className="mt-8"
        onSubmit={(e) => {
          e.preventDefault();
          navigate({ to: "/busca", search: { q: term.trim() } });
        }}
      >
        <label htmlFor="busca-input" className="sr-only">
          Buscar no site
        </label>
        <div className="flex items-center gap-2 rounded-sm border border-border bg-surface px-3 focus-within:border-ember">
          <Search size={16} className="shrink-0 text-muted-foreground" aria-hidden="true" />
          <input
            id="busca-input"
            type="search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Ex.: foto para LinkedIn, advogados, poses"
            className="min-h-11 w-full bg-transparent py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
          <button type="submit" className="whitespace-nowrap rounded-sm bg-ember px-3 py-1.5 text-xs font-medium text-accent-foreground hover:bg-ember-glow">
            Buscar
          </button>
        </div>
      </form>

      {q && results.length === 0 && (
        <div className="mt-12 rounded-sm border border-border bg-surface p-6">
          <p className="text-sm text-muted-foreground">
            Nenhum resultado para “{q}”. Talvez estas páginas ajudem:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {[
              { to: "/foto-profissional", label: "Retrato profissional" },
              { to: "/foto-profissional-para-linkedin", label: "Foto para LinkedIn" },
              { to: "/portfolio", label: "Portfólio" },
              { to: "/contato", label: "Solicitar orçamento" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-foreground underline decoration-ember/60 hover:decoration-ember">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {results.length > 0 && (
        <p className="mt-6 text-sm text-muted-foreground">
          {results.length} {results.length === 1 ? "resultado" : "resultados"} encontrados.
        </p>
      )}

      <div className="mt-8 space-y-12">
        {GROUPS.map((group) => {
          const hits = grouped.get(group);
          if (!hits?.length) return null;
          return (
            <section key={group}>
              <h2 className="font-display text-lg font-semibold">{group}</h2>
              <ul className="mt-4 divide-y divide-border/60 border-y border-border/60">
                {hits.map((hit) => {
                  const body = (
                    <>
                      <span className="block text-sm font-medium text-foreground">{hit.title}</span>
                      {hit.description && (
                        <span className="mt-1 block text-sm text-muted-foreground line-clamp-2">
                          {hit.description}
                        </span>
                      )}
                    </>
                  );
                  const cls = "block py-4 hover:bg-surface";
                  if (hit.kind === "page") {
                    return (
                      <li key={`page-${hit.to}`}>
                        <Link to={hit.to} className={cls}>{body}</Link>
                      </li>
                    );
                  }
                  if (hit.kind === "post") {
                    return (
                      <li key={`post-${hit.slug}`}>
                        <Link to="/blog/$slug" params={{ slug: hit.slug }} className={cls}>{body}</Link>
                      </li>
                    );
                  }
                  return (
                    <li key={`video-${hit.slug}`}>
                      <Link to="/videos/$slug" params={{ slug: hit.slug }} className={cls}>{body}</Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </main>
  );
}
