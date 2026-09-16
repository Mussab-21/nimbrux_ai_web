import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, GitBranch } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getCaseStudies, getCaseStudyBySlug } from "@/lib/content";
import { TechIcon } from "@/components/ui/TechIcons";
import { buildMetadata, breadcrumbSchema, JsonLd } from "@/lib/seo";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getCaseStudies().map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const result = getCaseStudyBySlug(params.slug);
  if (!result) return { title: "Not found", robots: { index: false, follow: false } };
  return buildMetadata({
    title: result.meta.title,
    description: result.meta.summary,
    path: `/work/${params.slug}`,
    type: "article",
    publishedTime: result.meta.date,
  });
}

export default function CaseStudyPage({ params }: Props) {
  const result = getCaseStudyBySlug(params.slug);
  if (!result) notFound();

  const { meta, content } = result;

  return (
    <div className="bg-paper min-h-screen">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
          { name: meta.title, path: `/work/${params.slug}` },
        ])}
      />
      {/* Hero */}
      <section className="pt-[120px] pb-24 border-b border-line relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none opacity-[0.07]"
          style={{ backgroundColor: meta.accentColor }}
          aria-hidden
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Back link */}
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-ink transition-colors mb-12"
          >
            <ArrowLeft className="w-3 h-3" />
            All Case Studies
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs text-muted uppercase tracking-widest">{meta.industry}</span>
            <span className="w-px h-4 bg-line" />
            <span className="font-mono text-xs text-muted uppercase tracking-widest">{meta.category}</span>
          </div>

          <h1 className="font-heading text-5xl md:text-6xl tracking-tight text-ink mb-8 leading-[1.05]">
            {meta.title}
          </h1>

          <p className="text-muted text-xl leading-relaxed mb-6 max-w-2xl">
            {meta.summary}
          </p>

          {meta.githubUrl && (
            <div className="mb-8">
              <a
                href={meta.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs border border-line px-4 py-2.5 text-ink hover:border-accent hover:text-accent transition-colors bg-mist"
              >
                <GitBranch className="w-3.5 h-3.5 text-muted" />
                View Repository on GitHub
                <ExternalLink className="w-3.5 h-3.5 text-muted" />
              </a>
            </div>
          )}

          {/* Meta grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-line">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted/50 mb-1">Client</div>
              <div className="font-mono text-sm text-ink">{meta.client}</div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted/50 mb-1">Industry</div>
              <div className="font-mono text-sm text-ink">{meta.industry}</div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted/50 mb-1">Outcome</div>
              <div className="font-mono text-xs text-muted leading-relaxed">{meta.outcome.slice(0, 80)}…</div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted/50 mb-2">Tech</div>
              <div className="flex flex-wrap gap-1.5">
                {meta.tech.map((t) => (
                  <TechIcon key={t} name={t} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MDX Content */}
      <section className="py-24 border-b border-line">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-invert prose-headings:font-heading prose-headings:tracking-tight prose-p:text-muted prose-p:leading-relaxed prose-li:text-muted prose-h2:text-3xl prose-h2:text-ink prose-h3:text-xl prose-h3:text-ink prose-hr:border-line prose-strong:text-ink max-w-none">
            <MDXRemote source={content} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-ink mb-2">
              Have a similar challenge?
            </h2>
            <p className="text-muted text-base">
              Tell us what you&apos;re working on. We&apos;ll give you an honest read.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 group inline-flex items-center gap-2 px-7 py-4 bg-accent text-white font-mono text-sm font-semibold hover:bg-cat-amber hover:text-white transition-all duration-300"
          >
            Start a Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
