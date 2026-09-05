import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { homePosts } from "@/data/homeSummary";

export default function HomeBlog() {
  return (
      {/* Blog teaser */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">Insights</p>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">Do blog</h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            Todos os posts <ArrowUpRight size={14} />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {homePosts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group block rounded-sm border border-border bg-surface p-6 transition-colors hover:border-ember"
            >
              {p.date && <time className="text-xs uppercase tracking-wider text-muted-foreground">{p.date}</time>}
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug group-hover:text-ember">{p.title}</h3>
              <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{p.description}</p>
            </Link>
          ))}
        </div>
      </section>
  );
}
