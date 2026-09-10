import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Surface / neutrals */
        ink:    "var(--ink)",
        paper:  "var(--paper)",
        slate:  "var(--slate)",
        line:   "var(--line)",
        mist:   "var(--mist)",

        /* Legacy alias (kept for backward compat) */
        signal: "var(--signal)",

        /* Fine Technology Secondary Palette */
        mango:       "var(--mango)",       /* #FFBE0B – primary CTA */
        orange:      "var(--orange)",      /* #FB5607 – hover / secondary */
        "winter-sky":  "var(--winter-sky)",
        "blue-violet": "var(--blue-violet)",
        "tart-orange": "var(--tart-orange)",

        /* Semantic aliases */
        background: "var(--ink)",
        foreground: "var(--paper)",
        accent:     "var(--mango)",
        "accent-2": "var(--blue-violet)",
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        mono:    ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-mango":    "linear-gradient(135deg, #FFBE0B, #FB5607)",
        "gradient-electric": "linear-gradient(135deg, #8338EC, #FF006E)",
        "gradient-fire":     "linear-gradient(135deg, #FB5607, #FF3333)",
      },
      boxShadow: {
        "glow-mango":  "0 0 40px rgba(255,190,11,0.3)",
        "glow-violet": "0 0 40px rgba(131,56,236,0.3)",
        "glow-pink":   "0 0 40px rgba(255,0,110,0.25)",
        "glow-orange": "0 0 40px rgba(251,86,7,0.3)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;

