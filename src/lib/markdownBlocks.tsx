import type { ReactNode } from "react";
import { autoLink } from "@/lib/autoLink";

/**
 * Renderizador de markdown leve para o corpo dos artigos do blog.
 *
 * Cada item de `post.body` é um bloco. Blocos sem marcação renderizam
 * exatamente como antes (um <p> passando pelo autoLink), o que preserva a
 * aparência dos artigos antigos. Blocos com marcação viram título, lista,
 * separador ou citação.
 *
 * Suporta: ## / ### (títulos), - (lista), --- (separador), > (citação),
 * **negrito**, *itálico*, [texto](url).
 */

export type AutoLinkCtx = {
  usedSlugs: Set<string>;
  usedPhrases: Set<string>;
};

const INLINE = /(\*\*[^*]+\*\*|\*[^*\n]+\*|\[[^\]]+\]\([^)\s]+\))/g;

/** Inline markdown → ReactNode. Texto puro passa pelo autoLink quando pedido. */
export function inlineMarkdown(
  text: string,
  ctx?: AutoLinkCtx,
  maxLinks = 3,
): ReactNode[] {
  const parts = text.split(INLINE).filter((s) => s !== "");
  return parts.map((part, i) => {
    if (/^\*\*[^*]+\*\*$/.test(part)) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (/^\*[^*\n]+\*$/.test(part)) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
    if (link) {
      const href = link[2];
      const external = /^https?:\/\//i.test(href);
      return (
        <a
          key={i}
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="text-ember underline decoration-ember/40 underline-offset-2 hover:decoration-ember"
        >
          {link[1]}
        </a>
      );
    }
    return (
      <span key={i}>
        {ctx ? autoLink(part, { ...ctx, maxLinks }) : part}
      </span>
    );
  });
}

/** Um bloco de `post.body` → elemento. */
export function MarkdownBlock({
  text,
  ctx,
  headingId,
}: {
  text: string;
  ctx?: AutoLinkCtx;
  headingId?: string;
}) {
  const raw = text.trim();

  if (/^-{3,}$/.test(raw) || /^\*{3,}$/.test(raw)) {
    return <hr className="my-8 border-border" />;
  }

  const heading = raw.match(/^(#{2,4})\s+(.*)$/s);
  if (heading) {
    const level = heading[1].length;
    const content = inlineMarkdown(heading[2].trim());
    if (level === 2) {
      return (
        <h2 id={headingId} className="mt-12 font-display text-2xl font-semibold leading-tight text-foreground md:text-3xl">
          {content}
        </h2>
      );
    }
    if (level === 3) {
      return (
        <h3 id={headingId} className="mt-9 font-display text-lg font-semibold leading-snug text-foreground md:text-xl">
          {content}
        </h3>
      );
    }
    return (
      <h4 id={headingId} className="mt-7 font-display text-base font-semibold text-foreground">
        {content}
      </h4>
    );
  }

  const lines = raw.split("\n").map((l) => l.trim()).filter(Boolean);
  const isBulletList = lines.length > 0 && lines.every((l) => /^[-•]\s+/.test(l));
  if (isBulletList) {
    return (
      <ul className="ml-1 list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground">
        {lines.map((l, i) => (
          <li key={i}>{inlineMarkdown(l.replace(/^[-•]\s+/, ""), ctx, 1)}</li>
        ))}
      </ul>
    );
  }

  const isOrderedList = lines.length > 1 && lines.every((l) => /^\d+[.)]\s+/.test(l));
  if (isOrderedList) {
    return (
      <ol className="ml-1 list-decimal space-y-2 pl-5 text-base leading-relaxed text-muted-foreground">
        {lines.map((l, i) => (
          <li key={i}>{inlineMarkdown(l.replace(/^\d+[.)]\s+/, ""), ctx, 1)}</li>
        ))}
      </ol>
    );
  }

  if (lines.length > 0 && lines.every((l) => l.startsWith(">"))) {
    return (
      <blockquote className="border-l-2 border-ember/50 pl-5 text-base italic leading-relaxed text-muted-foreground">
        {inlineMarkdown(lines.map((l) => l.replace(/^>\s?/, "")).join(" "), ctx, 1)}
      </blockquote>
    );
  }

  return (
    <p className="text-base leading-relaxed text-muted-foreground">
      {inlineMarkdown(raw, ctx)}
    </p>
  );
}
