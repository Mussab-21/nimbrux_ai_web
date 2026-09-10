import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getCaseStudies, getCaseStudyBySlug } from "@/lib/content";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getCaseStudies().map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const result = getCaseStudyBySlug(params.slug);
  if (!result) return { title: "Case Study" };
  return {
    title: result.meta.title,
    description: result.meta.summary,
  };
}

export default function CaseStudyPage({ params }: Props) {
  const result = getCaseStudyBySlug(params.slug);
  if (!result) notFound();

  const { meta, content } = result;

  return (
    <div className="bg-[#0A0D14] min-h-screen">
      {/* Hero */}
      <section className="pt-[120px] pb-24 border-b border-[#1E2430] relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none opacity-[0.07]"
          style={{ backgroundColor: meta.accentColor }}
          aria-hidden
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Back link */}
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#8A95A3] hover:text-white transition-colors mb-12"
          >
            <ArrowLeft className="w-3 h-3" />
            All Case Studies
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs text-[#8A95A3] uppercase tracking-widest">{meta.industry}</span>
            <span className="w-px h-4 bg-[#1E2430]" />
            <span className="font-mono text-xs text-[#8A95A3] uppercase tracking-widest">{meta.category}</span>
          </div>

          <h1 className="font-heading text-5xl md:text-6xl tracking-tight text-white mb-8 leading-[1.05]">
            {meta.title}
          </h1>

          <p className="text-[#8A95A3] text-xl leading-relaxed mb-10 max-w-2xl">
            {meta.summary}
          </p>

          {/* Meta grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[#1E2430]">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A95A3]/50 mb-1">Client</div>
              <div className="font-mono text-sm text-white">{meta.client}</div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A95A3]/50 mb-1">Industry</div>
              <div className="font-mono text-sm text-white">{meta.industry}</div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A95A3]/50 mb-1">Outcome</div>
              <div className="font-mono text-xs text-[#8A95A3] leading-relaxed">{meta.outcome.slice(0, 80)}…</div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A95A3]/50 mb-2">Tech</div>
              <div className="flex flex-wrap gap-1">
                {meta.tech.map((t) => (
                  <span key={t} className="font-mono text-[10px] px-1.5 py-0.5 border border-[#1E2430] text-[#8A95A3]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MDX Content */}
      <section className="py-24 border-b border-[#1E2430]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-invert prose-headings:font-heading prose-headings:tracking-tight prose-p:text-[#8A95A3] prose-p:leading-relaxed prose-li:text-[#8A95A3] prose-h2:text-3xl prose-h2:text-white prose-h3:text-xl prose-h3:text-white prose-hr:border-[#1E2430] prose-strong:text-white max-w-none">
            <MDXRemote source={content} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-2">
              Have a similar challenge?
            </h2>
            <p className="text-[#8A95A3] text-base">
              Tell us what you&apos;re working on. We&apos;ll give you an honest read.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 group inline-flex items-center gap-2 px-7 py-4 bg-[#FFBE0B] text-[#0A0D14] font-mono text-sm font-semibold hover:bg-[#FB5607] hover:text-white transition-all duration-300"
          >
            Start a Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
