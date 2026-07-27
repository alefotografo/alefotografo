import { Link } from "@tanstack/react-router";
import { Fragment } from "react";
import { SITE_ORIGIN } from "@/lib/seo";

const absolute = (to: string) =>
  /^https?:\/\//i.test(to) ? to : `${SITE_ORIGIN}${to.startsWith("/") ? "" : "/"}${to}`;

export interface Crumb {
  label: string;
  to?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.to ? { item: absolute(c.to) } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-surface/40">
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-5 py-3 text-xs text-muted-foreground md:px-8">
        {items.map((c, i) => (
          <Fragment key={i}>
            {i > 0 && <li aria-hidden="true">/</li>}
            <li>
              {c.to && i < items.length - 1 ? (
                <Link to={c.to} className="hover:text-foreground">{c.label}</Link>
              ) : (
                <span className="text-foreground">{c.label}</span>
              )}
            </li>
          </Fragment>
        ))}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </nav>
  );
}
