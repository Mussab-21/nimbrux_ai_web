import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { IndustriesPageContent } from "@/components/industries/IndustriesPageContent";

export const metadata: Metadata = buildMetadata({
  title: "Industries we serve",
  description:
    "The sectors where our AI automation and software work has the clearest payback, and the specific operational problems we solve inside each of them.",
  path: "/industries",
});

export default function IndustriesPage() {
  return <IndustriesPageContent />;
}
