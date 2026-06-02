import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28 ${className}`}>
      {(eyebrow || title || description) && (
        <header className="mb-12 max-w-3xl">
          {eyebrow && (
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="font-display text-3xl font-semibold leading-tight text-balance md:text-5xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-5 text-base text-muted-foreground md:text-lg text-pretty">{description}</p>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
