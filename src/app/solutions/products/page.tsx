import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight, FlaskConical } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = buildMetadata({
  title: "Products and IP — Nimbrix Labs",
  description: "Our own AI tooling and SaaS products in development, plus the open-source engineering work that feeds them. Early access and pilots available.",
  path: "/solutions/products",
});

const labsProducts = [
  {
    name: "Nimbrix AI Document Intelligence",
    status: "In Development",
    description:
      "An AI-powered document processing platform — extract, classify, and act on information from PDFs, contracts, invoices, and forms without manual review.",
    category: "AI Platform",
  },
  {
    name: "Nimbrix Automation Engine",
    status: "In Development",
    description:
      "A visual workflow automation platform purpose-built for business operations teams — no-code, AI-native, and designed for non-technical users.",
    category: "Automation",
  },
  {
    name: "Nimbrix BI",
    status: "Concept",
    description:
      "Business intelligence for organizations that don't have a data team. Connect your tools, see your numbers, understand your business.",
    category: "Data & Analytics",
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-paper min-h-screen">
      {/* Hero */}
      <section className="pt-[120px] pb-24 border-b border-line relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none"
          style={{ backgroundColor: "rgba(255, 51, 51, 0.06)" }}
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #1E40AF 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Badge pillar="products" dot className="mb-8">
              Pillar 05 — Products & IP
            </Badge>

            <div className="font-mono text-sm italic text-cat-navy/80 mb-4">
              Building what we wish existed.
            </div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-tight text-ink leading-[1.05] mb-8">
              Technology we&apos;re building for{" "}
              <span className="text-cat-navy">the long game.</span>
            </h1>

            <p className="text-muted text-xl leading-relaxed mb-6 max-w-2xl">
              While we deliver projects for clients, we&apos;re also building our own. Nimbrix Labs is where we develop proprietary AI platforms, SaaS tools, and automation systems — products that come out of gaps we see repeatedly in the market.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-3 border border-cat-navy/30 bg-cat-navy/10 text-cat-navy font-mono text-sm mb-10">
              <FlaskConical className="w-4 h-4" />
              These products are actively in development — not fully launched yet.
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-4 bg-cat-navy text-white font-mono text-sm font-semibold hover:bg-cat-navy/80 transition-all duration-300"
              >
                Discuss Early Access
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 border-b border-line">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel>Nimbrix Labs</SectionLabel>
          <h2 className="font-heading text-4xl md:text-5xl tracking-tight text-ink mb-16">
            What we&apos;re <span className="text-cat-navy">building</span>
          </h2>

          <div className="space-y-6">
            {labsProducts.map((product) => (
              <div
                key={product.name}
                className="border border-line p-8 lg:p-10 group hover:border-cat-navy/30 hover:bg-mist transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs text-cat-navy/60 uppercase tracking-widest">
                        {product.category}
                      </span>
                      <span className="px-2 py-0.5 font-mono text-[10px] border border-cat-navy/30 text-cat-navy/70 uppercase tracking-widest">
                        {product.status}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-ink mb-3 group-hover:text-cat-navy transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed max-w-xl">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 font-mono text-xs text-cat-navy/60 hover:text-cat-navy transition-colors group/link"
                    >
                      Register interest
                      <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Labs philosophy */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <SectionLabel>Our approach</SectionLabel>
            <h2 className="font-heading text-4xl md:text-5xl tracking-tight text-ink mb-6">
              Why we build products
            </h2>
            <div className="space-y-5 text-muted text-base leading-relaxed">
              <p>
                Every time we deliver a project, we solve problems that will exist again for someone else. Products let us package those solutions at scale.
              </p>
              <p>
                Nimbrix Labs isn&apos;t a side project. It&apos;s the long-term moat. Client work funds it; client problems inspire it; client feedback shapes it.
              </p>
              <p>
                We&apos;re not pretending these are fully operational products today. But we&apos;re building them seriously, and we&apos;d rather show you the honest roadmap than fake a polished demo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
