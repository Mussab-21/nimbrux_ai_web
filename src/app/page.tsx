import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/home/Hero";
import { ProblemSection } from "@/components/home/ProblemSection";
import { CapabilityMap } from "@/components/home/CapabilityMap";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { IndustriesStrip } from "@/components/home/IndustriesStrip";
import { HowWeWork } from "@/components/home/HowWeWork";
import { WhyNimbrix } from "@/components/home/WhyNimbrix";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = buildMetadata({
  title: "Nimbrix — AI systems and software engineering",
  description: "Nimbrix builds AI document automation, custom software and data systems for growing businesses. Registered in Pakistan, delivering to clients worldwide.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <CapabilityMap />
      <FeaturedWork />
      <IndustriesStrip />
      <HowWeWork />
      <WhyNimbrix />
      <FinalCTA />
    </>
  );
}
