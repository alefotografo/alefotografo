import { createFileRoute, redirect } from "@tanstack/react-router";

// Permanent redirect to the SEO-preserved path used by the original site
export const Route = createFileRoute("/portfolio/")({
  loader: () => {
    throw redirect({ to: "/fotografo-corporativo", statusCode: 301 });
  },
});
