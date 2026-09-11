import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          DEFAULT: "#09090B",
          50: "#F8FAFC",
          100: "#E2E8F0",
          200: "#CBD5E1",
          300: "#94A3B8",
          400: "#64748B",
          500: "#475569",
          600: "#1E293B",
          700: "#162032",
          800: "#111827",
          900: "#0C1018",
          950: "#09090B",
        },
        // Product dark accent (app dark theme --theme-accent)
        signal: {
          DEFAULT: "#6366F1",
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
        },
        // App Sign in / light accent (#2563eb)
        cta: {
          DEFAULT: "#2563EB",
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#2563EB",
          600: "#1D4ED8",
          700: "#1E40AF",
        },
        // Credits / money only — not chrome
        amber: {
          DEFAULT: "#E8A317",
          50: "#FBF3DE",
          100: "#F7E4B3",
          200: "#F0CC6E",
          300: "#F5C14A",
          400: "#E8A317",
          500: "#C8880F",
          600: "#A06B0C",
          700: "#7A520A",
          800: "#5C3E08",
        },
        live: {
          DEFAULT: "#3DDC97",
          dim: "#1F8A5E",
        },
        paper: "#F8FAFC",
        panel: "#101318",
        raised: "#171C22",
      },
      boxShadow: {
        board: "0 40px 80px -32px rgba(0,0,0,0.7), 0 0 0 1px rgba(99,102,241,0.16)",
        raised: "0 12px 40px -16px rgba(0,0,0,0.55)",
      },
      letterSpacing: {
        display: "-0.03em",
        kicker: "0.18em",
      },
      maxWidth: {
        site: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
