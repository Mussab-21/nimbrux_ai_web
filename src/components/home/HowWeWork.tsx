import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    label: "Discover",
    description: "We start by understanding your business, not your technology. What problem needs solving? What's the outcome you need?",
    color: "#8338EC",
  },
  {
    number: "02",
    label: "Assess",
    description: "Audit your current systems, data flows, and technology stack. Identify the highest-leverage automation and modernization opportunities.",
    color: "#FFBE0B",
  },
  {
    number: "03",
    label: "Design",
    description: "Architecture diagrams, UX wireframes, and a phased implementation roadmap. No surprises during build.",
    color: "#FB5607",
  },
  {
    number: "04",
    label: "Build",
    description: "Agile development in focused sprints. Weekly progress. Working software shipped early, refined continuously.",
    color: "#FF006E",
  },
  {
    number: "05",
    label: "Deploy",
    description: "Production-grade deployment, training, and go-live support. We don't disappear at handoff.",
    color: "#8338EC",
  },
  {
    number: "06",
    label: "Optimize",
    description: "Post-launch monitoring, performance tuning, and user feedback integration. Systems improve over time.",
    color: "#FFBE0B",
  },
  {
    number: "07",
    label: "Scale",
    description: "Managed services, new capabilities, and ongoing partnership as your business grows. From project to long-term technology partner.",
    color: "#FB5607",
  },
];

export function HowWeWork() {
  return (
    <section className="py-24 lg:py-32 border-b border-[#1E2430] bg-[#0A0D14]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: heading */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <SectionLabel number="05">How We Work</SectionLabel>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-6">
              From problem{" "}
              <span className="text-[#FFBE0B]">to impact.</span>
            </h2>
            <p className="text-[#8A95A3] text-lg leading-relaxed mb-8">
              A structured process that connects advisory, engineering, and managed services — so every engagement has a clear path from discovery to scale.
            </p>
            <div className="font-mono text-sm text-[#8A95A3]">
              <span className="text-[#FFBE0B]">Advise</span>
              {" → "}
              <span className="text-[#FB5607]">Build</span>
              {" → "}
              <span className="text-[#8338EC]">Deploy</span>
              {" → "}
              <span className="text-[#FF006E]">Manage</span>
              {" → "}
              <span className="text-white">Scale</span>
            </div>
          </div>

          {/* Right: steps */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="group flex gap-6 pb-8 relative"
              >
                {/* Vertical connecting line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[19px] top-10 bottom-0 w-px bg-[#1E2430]" aria-hidden />
                )}

                {/* Number circle */}
                <div
                  className="w-10 h-10 rounded-full border flex-shrink-0 flex items-center justify-center font-mono text-xs font-semibold relative z-10 bg-[#0A0D14] group-hover:border-opacity-100 transition-all duration-300"
                  style={{
                    borderColor: `${step.color}40`,
                    color: step.color,
                  }}
                >
                  {step.number}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1.5">
                  <h3
                    className="font-heading text-lg font-semibold mb-2 group-hover:opacity-100 transition-colors"
                    style={{ color: step.color }}
                  >
                    {step.label}
                  </h3>
                  <p className="text-[#8A95A3] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
