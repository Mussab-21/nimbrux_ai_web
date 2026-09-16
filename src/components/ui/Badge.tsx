import { cn } from "@/lib/utils";

const pillarColors: Record<string, string> = {
  "01": "border-[#4338CA]/30 text-[#4338CA] bg-[#4338CA]/10",
  "02": "border-[#0B57D0]/30 text-[#0B57D0] bg-[#0B57D0]/10",
  "03": "border-[#B45309]/30 text-[#B45309] bg-[#B45309]/10",
  "04": "border-[#0F766E]/30 text-[#0F766E] bg-[#0F766E]/10",
  "05": "border-[#1E40AF]/30 text-[#1E40AF] bg-[#1E40AF]/10",
  ai: "border-[#4338CA]/30 text-[#4338CA] bg-[#4338CA]/10",
  software: "border-[#0B57D0]/30 text-[#0B57D0] bg-[#0B57D0]/10",
  data: "border-[#B45309]/30 text-[#B45309] bg-[#B45309]/10",
  advisory: "border-[#0F766E]/30 text-[#0F766E] bg-[#0F766E]/10",
  products: "border-[#1E40AF]/30 text-[#1E40AF] bg-[#1E40AF]/10",
  default: "border-[#E3E8EF] text-[#4B5768] bg-transparent",
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
