import { SectionLabel } from "@/components/ui/SectionLabel";

const differentiators = [
  {
    label: "AI-first",
    color: "#8338EC",
    icon: "⬡",
    description:
      "We look for opportunities to eliminate repetitive work in every engagement — not as an add-on, but as a core design principle. If it can be automated intelligently, we'll architect it that way.",
  },
  {
    label: "Engineering-led",
    color: "#FFBE0B",
    icon: "◈",
    description:
      "Solutions are built around reliable architecture, not quick hacks. Every system we deliver is designed to hold up as you scale — readable code, documented, properly tested.",
  },
  {
    label: "Outcome-driven",
    color: "#FB5607",
    icon: "◎",
    description:
      "We measure success in business results: hours saved, processes automated, systems connected, revenue enabled. Not lines of code shipped.",
  },
  {
    label: "Long-term partner",
    color: "#FF006E",
    icon: "◉",
    description:
      "We build, then we can manage and improve. Most clients start with a project and grow into an ongoing relationship — managed services, advisory, new capabilities as your business evolves.",
  },
  {
    label: "Global delivery, local insight",
    color: "#FF3333",
    icon: "◆",
    description:
      "Built from Pakistan for international clients. We combine global-standard engineering practices with the cost efficiency and dedication of a team that genuinely wants your project to succeed.",
  },
];

export function WhyNimbrix() {
  return (
    <section className="py-24 lg:py-32 border-b border-[#1E2430] bg-[#070A0F]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <SectionLabel number="06">Why Nimbrix</SectionLabel>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-6">
            Not another{" "}
            <span className="text-[#FFBE0B]">software agency.</span>
          </h2>
          <p className="text-[#8A95A3] text-lg leading-relaxed">
            Any shop can build a website. We&apos;re here for the harder problem: helping organizations use technology to genuinely work smarter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1E2430]">
          {differentiators.map((d, i) => (
            <div
              key={d.label}
              className={`bg-[#070A0F] p-8 lg:p-10 group hover:bg-[#0A0D14] transition-colors ${
                i === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Icon */}
              <div
                className="text-3xl mb-6 opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ color: d.color }}
                aria-hidden
              >
                {d.icon}
              </div>

              <h3
                className="font-heading text-xl font-semibold mb-4 transition-colors"
                style={{ color: d.color }}
              >
                {d.label}
              </h3>

              <p className="text-[#8A95A3] text-sm leading-relaxed">
                {d.description}
              </p>

              {/* Bottom accent */}
              <div
                className="mt-8 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: d.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
