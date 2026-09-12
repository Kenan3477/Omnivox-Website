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
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(37, 99, 235, 0.4)",
        "glow-violet": "0 0 60px -12px rgba(99, 102, 241, 0.3)",
        card: "0 4px 24px -4px rgba(15, 23, 42, 0.08), 0 8px 48px -8px rgba(15, 23, 42, 0.04)",
        "card-hover": "0 20px 60px -12px rgba(37, 99, 235, 0.14), 0 8px 24px -8px rgba(15, 23, 42, 0.1)",
      },
      backgroundImage: {
        "mesh-dark":
          "radial-gradient(at 40% 20%, rgba(37,99,235,0.16) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(99,102,241,0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(37,99,235,0.08) 0px, transparent 50%)",
        "gradient-cta": "linear-gradient(135deg, #020617 0%, #1e3a8a 50%, #1d4ed8 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
