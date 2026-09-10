import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getInsights, getInsightBySlug } from "@/lib/content";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getInsights().map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const result = getInsightBySlug(params.slug);
  if (!result) return { title: "Insight" };
  return {
    title: result.meta.title,
    description: result.meta.excerpt,
  };
}

export default function InsightPage({ params }: Props) {
  const result = getInsightBySlug(params.slug);
  if (!result) notFound();

  const { meta, content } = result;

  return (
    <div className="bg-[#0A0D14] min-h-screen">
      {/* Hero */}
      <section className="pt-[120px] pb-16 border-b border-[#1E2430]">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#8A95A3] hover:text-white transition-colors mb-12"
          >
            <ArrowLeft className="w-3 h-3" />
            All Insights
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs text-[#FFBE0B]/70 uppercase tracking-widest">{meta.category}</span>
            <span className="w-px h-4 bg-[#1E2430]" />
            <span className="font-mono text-xs text-[#8A95A3] uppercase tracking-widest">{meta.readTime}</span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl tracking-tight text-white mb-6 leading-[1.1]">
            {meta.title}
          </h1>

          <p className="text-[#8A95A3] text-xl leading-relaxed">
            {meta.excerpt}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 border-b border-[#1E2430]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-invert prose-headings:font-heading prose-headings:tracking-tight prose-p:text-[#8A95A3] prose-p:leading-relaxed prose-li:text-[#8A95A3] prose-h2:text-3xl prose-h2:text-white prose-h3:text-xl prose-h3:text-white prose-hr:border-[#1E2430] prose-strong:text-white max-w-none">
            <MDXRemote source={content} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-2xl text-white mb-1">Want help applying this?</h2>
            <p className="text-[#8A95A3] text-sm">Talk to us — we&apos;ll help you figure out what actually makes sense for your situation.</p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 group inline-flex items-center gap-2 px-6 py-3.5 bg-[#FFBE0B] text-[#0A0D14] font-mono text-sm font-semibold hover:bg-[#FB5607] hover:text-white transition-all duration-300"
          >
            Talk to us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
