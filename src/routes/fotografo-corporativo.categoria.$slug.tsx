import { createFileRoute, redirect } from "@tanstack/react-router";
import { categoryBySlug } from "@/data/catalog";

// Legacy URL pattern from the original site:
// /fotografo-corporativo/categoria/{slug} → canonical /fotografo-corporativo/{slug}
export const Route = createFileRoute("/fotografo-corporativo/categoria/$slug")({
  loader: ({ params }) => {
    const cat = categoryBySlug(params.slug);
    if (cat) {
      throw redirect({ to: "/fotografo-corporativo/$slug", params: { slug: params.slug }, statusCode: 301 });
    }
    throw redirect({ to: "/fotografo-corporativo", statusCode: 301 });
  },
});
