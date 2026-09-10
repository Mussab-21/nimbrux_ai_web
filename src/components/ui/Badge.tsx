import { cn } from "@/lib/utils";

const pillarColors: Record<string, string> = {
  "01": "border-[#8338EC]/30 text-[#8338EC] bg-[#8338EC]/10",
  "02": "border-[#FFBE0B]/30 text-[#FFBE0B] bg-[#FFBE0B]/10",
  "03": "border-[#FB5607]/30 text-[#FB5607] bg-[#FB5607]/10",
  "04": "border-[#FF006E]/30 text-[#FF006E] bg-[#FF006E]/10",
  "05": "border-[#FF3333]/30 text-[#FF3333] bg-[#FF3333]/10",
  ai: "border-[#8338EC]/30 text-[#8338EC] bg-[#8338EC]/10",
  software: "border-[#FFBE0B]/30 text-[#FFBE0B] bg-[#FFBE0B]/10",
  data: "border-[#FB5607]/30 text-[#FB5607] bg-[#FB5607]/10",
  advisory: "border-[#FF006E]/30 text-[#FF006E] bg-[#FF006E]/10",
  products: "border-[#FF3333]/30 text-[#FF3333] bg-[#FF3333]/10",
  default: "border-[#1E2430] text-[#8A95A3] bg-transparent",
};

interface BadgeProps {
  children: React.ReactNode;
  pillar?: string;
  dot?: boolean;
  className?: string;
}

export function Badge({ children, pillar = "default", dot = false, className }: BadgeProps) {
  const colors = pillarColors[pillar] ?? pillarColors.default;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono uppercase tracking-widest border rounded-sm",
        colors,
        className
      )}
    >
      {dot && (
        <span
          className="inline-block w-1.5 h-1.5 rounded-full bg-current animate-pulse"
          aria-hidden
        />
      )}
      {children}
    </span>
  );
}
