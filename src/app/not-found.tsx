import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page does not exist.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-paper px-6">
      <div className="text-center max-w-md">
        <p className="font-mono text-sm text-accent mb-4">404</p>
        <h1 className="font-heading text-4xl md:text-5xl text-ink mb-4">
          That page doesn&apos;t exist.
        </h1>
        <p className="text-muted mb-8">
          The link may be out of date. Try the work we&apos;ve shipped, or just tell us what
          you&apos;re looking for.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="px-6 py-3 bg-accent text-white font-mono text-sm hover:bg-accent-hover transition-colors">
            Back to home
          </Link>
          <Link href="/contact" className="px-6 py-3 border border-line text-ink font-mono text-sm hover:border-accent hover:text-accent transition-colors">
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
