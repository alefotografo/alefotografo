import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { homePosts } from "@/data/homeSummary";
import { postCover } from "@/lib/postCover";
import { imgUrl } from "@/lib/img";

export default function HomeBlog() {
  return (
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-24 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-10 md:gap-6">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">Insights</p>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">Do blog</h2>
          </div>
          <Link to="/blog" className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground hover:text-foreground md:min-h-0">
            Todos os posts <ArrowUpRight size={14} />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {homePosts.slice(0, 3).map((p) => {
            const cover = postCover(p);
            return (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col overflow-hidden rounded-sm border border-border bg-surface transition-colors hover:border-ember"
              >
                <div className="aspect-video overflow-hidden bg-background">
                  {cover ? (
                    <img
                      src={imgUrl(cover, 480)}
                      alt={p.title}
                      width={480}
                      height={270}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full bg-surface" />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  {p.date && <time className="text-xs uppercase tracking-wider text-muted-foreground">{p.date}</time>}
                  <h3 className="mt-3 font-display text-lg font-semibold leading-snug group-hover:text-ember">{p.title}</h3>
                  <p className="mt-3 line-clamp-3 flex-1 text-sm text-muted-foreground">{p.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
  );
}
