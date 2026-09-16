import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  number?: string;
  className?: string;
}

export function SectionLabel({ children, number, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[#4B5768] mb-6",
        className
      )}
    >
      {number && (
        <span className="text-accent opacity-60">{number}</span>
      )}
      <span className="w-8 h-px bg-line" />
      {children}
    </div>
  );
}
