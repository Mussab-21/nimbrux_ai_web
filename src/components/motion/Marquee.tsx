"use client";

import { useRef, useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface MarqueeProps {
  children: React.ReactNode[];
  speed?: number; // px per second
  gap?: number;   // gap between items in px
  className?: string;
}

/**
 * Seamless horizontally-scrolling marquee with:
 * - Edge fade masks
 * - Pause on hover
 * - Pause when off-screen (IntersectionObserver)
 * - Pause when tab is hidden (visibilitychange)
 * - prefers-reduced-motion: renders static, no scroll
 */
export function Marquee({ children, speed = 40, gap = 0, className }: MarqueeProps) {
  const reduced = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [offScreen, setOffScreen] = useState(false);

  // Pause when tab hidden
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) setOffScreen(true);
      else setOffScreen(false);
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  // Pause when scrolled off-screen
  useEffect(() => {
    const el = trackRef.current?.parentElement;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setOffScreen(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const shouldPause = paused || offScreen;

  if (reduced) {
    return (
      <div className={className}>
        <div className="flex flex-wrap gap-4">
          {children}
        </div>
      </div>
    );
  }

  // We double the children to create a seamless loop
  const doubled = [...children, ...children];
  // Animation duration: total track width / speed
  // We approximate: 220px per item × items / speed
  const itemCount = children.length;
  const approxDuration = (itemCount * 220) / speed;

  return (
    <div
      className={`relative overflow-hidden ${className ?? ""}`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-hidden
    >
      <div
        ref={trackRef}
        className="flex whitespace-nowrap"
        style={{
          animation: `marquee ${approxDuration}s linear infinite`,
          animationPlayState: shouldPause ? "paused" : "running",
          gap: gap > 0 ? `${gap}px` : undefined,
        }}
      >
        {doubled}
      </div>
    </div>
  );
}
