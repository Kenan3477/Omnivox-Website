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
        glow: "0 0 60px -12px rgba(34, 211, 238, 0.35)",
        "glow-violet": "0 0 60px -12px rgba(139, 92, 246, 0.35)",
        card: "0 4px 24px -4px rgba(15, 23, 42, 0.08), 0 8px 48px -8px rgba(15, 23, 42, 0.04)",
        "card-hover": "0 20px 60px -12px rgba(34, 211, 238, 0.15), 0 8px 24px -8px rgba(15, 23, 42, 0.1)",
      },
      backgroundImage: {
        "mesh-dark":
          "radial-gradient(at 40% 20%, rgba(34,211,238,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(139,92,246,0.12) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(59,130,246,0.08) 0px, transparent 50%)",
        "gradient-cta": "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0c4a6e 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
