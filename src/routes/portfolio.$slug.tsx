import { createFileRoute, redirect } from "@tanstack/react-router";

// Permanent redirect to the SEO-preserved path used by the original site
export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    throw redirect({
      to: "/fotografo-corporativo/$slug",
      params: { slug: params.slug },
      statusCode: 301,
    });
  },
});
