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
          DEFAULT: "#08090B",
          50: "#F4F1EA",
          100: "#E8E4D8",
          200: "#C9C3B4",
          300: "#9AA3AE",
          400: "#6E7886",
          500: "#4A5360",
          600: "#2A323C",
          700: "#1A2028",
          800: "#12171D",
          900: "#0C1014",
          950: "#08090B",
        },
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
        },
        live: {
          DEFAULT: "#3DDC97",
          dim: "#1F8A5E",
        },
        paper: "#F4F1EA",
        panel: "#101318",
        raised: "#171C22",
      },
      boxShadow: {
        board: "0 40px 80px -32px rgba(0,0,0,0.7), 0 0 0 1px rgba(232,163,23,0.12)",
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
