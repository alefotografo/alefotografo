import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Image as ImageIcon, Newspaper, Play } from "lucide-react";
import type { BlogResult, PhotoResult, SearchResults as SearchResultsModel, VideoResult } from "@/lib/search";
import { normalize } from "@/lib/search";
import { imgUrl } from "@/lib/img";

function Highlight({ text, query }: { text: string; query: string }) {
  const normalizedText = normalize(text);
  const normalizedQuery = normalize(query);
  const start = normalizedText.indexOf(normalizedQuery);
  if (!normalizedQuery || start < 0) return <>{text}</>;
  return <>{text.slice(0, start)}<mark className="bg-ember/25 text-foreground">{text.slice(start, start + normalizedQuery.length)}</mark>{text.slice(start + normalizedQuery.length)}</>;
}

function GallerySegmentCard({ item, query, onSelect }: { item: PhotoResult; query: string; onSelect?: () => void }) {
  return (
    <Link to="/fotografo-corporativo/$slug" params={{ slug: item.slug }} onClick={onSelect} className="group grid min-h-24 grid-cols-[6rem_1fr] overflow-hidden rounded-sm border border-border bg-surface hover:border-ember">
      <div className="aspect-square bg-surface-elevated">
        {item.cover ? <img src={imgUrl(item.cover, 400)} alt="" width={160} height={160} loading="lazy" decoding="async" className="h-full w-full object-cover" /> : <ImageIcon className="m-auto h-full text-muted-foreground" aria-hidden="true" />}
      </div>
      <span className="flex min-w-0 flex-col justify-center p-3">
        <span className="line-clamp-2 text-sm font-medium"><Highlight text={item.title} query={query} /></span>
        <span className="mt-1 text-xs text-muted-foreground">{item.image_count} fotos</span>
      </span>
    </Link>
  );
}

function VideoSegmentCard({ item, query, onSelect }: { item: VideoResult; query: string; onSelect?: () => void }) {
  return (
    <Link to="/videos/$slug" params={{ slug: item.slug }} onClick={onSelect} className="group grid min-h-24 grid-cols-[6rem_1fr] overflow-hidden rounded-sm border border-border bg-surface hover:border-ember">
      <div className="relative aspect-video self-center bg-surface-elevated">
        {item.thumbnail ? <img src={item.thumbnail} alt="" width={320} height={180} loading="lazy" decoding="async" className="h-full w-full object-cover" /> : null}
        <span className="absolute inset-0 grid place-items-center bg-background/25"><Play size={22} className="fill-foreground" aria-hidden="true" /></span>
      </div>
      <span className="flex min-w-0 flex-col justify-center p-3">
        <span className="line-clamp-2 text-sm font-medium"><Highlight text={item.title} query={query} /></span>
        <span className="mt-1 text-xs text-muted-foreground">Assistir vídeo</span>
      </span>
    </Link>
  );
}

function BlogResultCard({ item, query, onSelect }: { item: BlogResult; query: string; onSelect?: () => void }) {
  return (
    <Link to="/blog/$slug" params={{ slug: item.slug }} onClick={onSelect} className="group grid min-h-24 grid-cols-[6rem_1fr] overflow-hidden rounded-sm border border-border bg-surface hover:border-ember">
      <div className="aspect-square bg-surface-elevated">
        {item.cover ? <img src={imgUrl(item.cover, 400)} alt="" width={160} height={160} loading="lazy" decoding="async" className="h-full w-full object-cover" /> : <Newspaper className="m-auto h-full text-muted-foreground" aria-hidden="true" />}
      </div>
      <span className="flex min-w-0 flex-col justify-center p-3">
        <span className="line-clamp-2 text-sm font-medium"><Highlight text={item.title} query={query} /></span>
        <span className="mt-1 line-clamp-2 text-xs text-muted-foreground"><Highlight text={item.description} query={query} /></span>
      </span>
    </Link>
  );
}

export function SearchResults({ query, results, onSelect, compact = false }: { query: string; results: SearchResultsModel; onSelect?: () => void; compact?: boolean }) {
  if (query.trim().length < 2) return <p className="p-5 text-sm text-muted-foreground">Digite pelo menos 2 caracteres.</p>;
  if (!results.total) return (
    <div className="p-5">
      <p className="text-sm font-medium">Nenhum resultado para “{query}”.</p>
      <p className="mt-2 text-sm text-muted-foreground">Tente “LinkedIn”, “advogados”, “eventos” ou “vídeo institucional”.</p>
    </div>
  );

  return (
    <div className={compact ? "space-y-6 p-4" : "space-y-10"} aria-label={`${results.total} resultados de busca`}>
      {results.photos.length ? <ResultSection title="Fotos" count={results.photos.length} compact={compact}>{results.photos.map((item) => <GallerySegmentCard key={item.slug} item={item} query={query} onSelect={onSelect} />)}</ResultSection> : null}
      {results.videos.length ? <ResultSection title="Vídeos" count={results.videos.length} compact={compact}>{results.videos.map((item) => <VideoSegmentCard key={item.slug} item={item} query={query} onSelect={onSelect} />)}</ResultSection> : null}
      {results.blog.length ? <ResultSection title="Blog" count={results.blog.length} compact={compact}>{results.blog.map((item) => <BlogResultCard key={item.slug} item={item} query={query} onSelect={onSelect} />)}</ResultSection> : null}
      {compact ? <Link to="/busca" search={{ q: query.trim().slice(0, 120) }} onClick={onSelect} className="inline-flex items-center gap-1 text-sm text-ember underline underline-offset-4">Ver resultados em página inteira <ArrowUpRight size={14} /></Link> : null}
    </div>
  );
}

function ResultSection({ title, count, compact, children }: { title: string; count: number; compact: boolean; children: React.ReactNode }) {
  const id = `search-${normalize(title)}`;
  return <section aria-labelledby={id}>
    <div className="mb-3 flex items-center justify-between">
      <h2 id={id} className="font-display text-base font-semibold">{title}</h2>
      <span className="text-xs text-muted-foreground">{count}</span>
    </div>
    <div className={compact ? "grid gap-2" : "grid gap-3 sm:grid-cols-2"}>{children}</div>
  </section>;
}

export { GallerySegmentCard, VideoSegmentCard, BlogResultCard };