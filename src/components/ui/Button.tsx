"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
  magnetic?: boolean;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  showArrow = false,
  type = "button",
}: ButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const base =
    "group inline-flex items-center gap-2 font-mono text-sm font-semibold transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "px-6 py-3.5 bg-[#0B57D0] text-[#FFFFFF] hover:bg-[#B45309] hover:text-white",
    ghost:
      "px-6 py-3.5 border border-[#E3E8EF] text-[#4B5768] hover:border-[#4338CA] hover:text-[#4338CA]",
    outline:
      "px-6 py-3.5 border border-[#0B57D0] text-[#0B57D0] hover:bg-[#0B57D0] hover:text-[#FFFFFF]",
  };

  const inner = (
    <>
      {children}
      {showArrow && (
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} ref={ref} className={cn(base, variants[variant], className)}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      className={cn(base, variants[variant], className)}
    >
      {inner}
    </button>
  );
}
