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
        /* Surfaces */
        paper: "rgb(var(--paper-rgb, 255 255 255) / <alpha-value>)",
        mist:  "var(--mist)",
        line:  "var(--line)",
        navy:  "var(--navy)",

        /* Text */
        ink:   "var(--ink)",
        body:  "var(--body)",
        muted: "var(--muted)",

        /* Accent */
        accent: {
          DEFAULT: "var(--accent)",
          hover:   "var(--accent-hover)",
          soft:    "var(--accent-soft)",
        },

        /* Category accents */
        cat: {
          blue:   "var(--cat-blue)",
          indigo: "var(--cat-indigo)",
          amber:  "var(--cat-amber)",
          teal:   "var(--cat-teal)",
          navy:   "var(--cat-navy)",
        },

        /* Semantic aliases */
        background: "var(--paper)",
        foreground: "var(--ink)",
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono:    ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        "elev-1": "0 1px 2px rgba(10,15,28,.05), 0 1px 3px rgba(10,15,28,.06)",
        "elev-2": "0 4px 6px -1px rgba(10,15,28,.07), 0 2px 4px -2px rgba(10,15,28,.06)",
        "elev-3": "0 12px 24px -8px rgba(10,15,28,.12), 0 4px 8px -4px rgba(10,15,28,.06)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
