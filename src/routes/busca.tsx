import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { searchSite, trackSearch } from "@/lib/search";
import { SearchResults } from "@/components/site/SearchResults";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/busca")({
  validateSearch: (search: Record<string, unknown>): { q: string } => ({ q: typeof search.q === "string" ? search.q.slice(0, 120) : "" }),
  head: () => ({
    meta: [...buildMeta({ title: "Busca no site | Alê Fotógrafo", description: "Encontre galerias de fotografia corporativa, vídeos e artigos do Alê Fotógrafo.", path: "/busca" }), { name: "robots", content: "noindex, follow" }],
    links: [{ rel: "canonical", href: "https://www.alefotografo.com.br/busca" }],
  }),
  component: BuscaPage,
});

function BuscaPage() {
  const { q } = Route.useSearch();
  const navigate = useNavigate();
  const [term, setTerm] = useState(q);
  const results = useMemo(() => searchSite(q), [q]);
  useEffect(() => { setTerm(q); }, [q]);
  useEffect(() => { if (q.trim().length >= 2) trackSearch(q, results.total); }, [q, results.total]);
  return (
    <main id="conteudo" className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-20">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-ember">Busca</p>
      <h1 className="font-display text-3xl font-semibold md:text-4xl">{q ? `Resultados para “${q}”` : "O que você procura?"}</h1>
      <form role="search" className="mt-8" onSubmit={(event) => { event.preventDefault(); navigate({ to: "/busca", search: { q: term.trim().slice(0, 120) } }); }}>
        <label htmlFor="busca-input" className="sr-only">Buscar no site</label>
        <div className="flex items-center gap-2 rounded-sm border border-border bg-surface px-3 focus-within:border-ember">
          <Search size={16} className="shrink-0 text-muted-foreground" aria-hidden="true" />
          <input id="busca-input" type="search" value={term} onChange={(event) => setTerm(event.target.value.slice(0, 120))} placeholder="Ex.: foto para LinkedIn, advogados, eventos" className="min-h-11 w-full bg-transparent py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground" />
          <Button type="submit" size="sm">Buscar</Button>
        </div>
      </form>
      {q ? <div className="mt-10"><SearchResults query={q} results={results} /></div> : <p className="mt-8 text-sm text-muted-foreground">Busque por um serviço, profissão, tipo de evento ou assunto.</p>}
    </main>
  );
}