import { VoiceWaveV } from "./VoiceWaveV";

interface WordmarkProps {
  size?: "sm" | "md" | "lg" | "hero";
  className?: string;
  showAi?: boolean;
}

const sizes = {
  sm: "text-lg gap-0",
  md: "text-2xl gap-0",
  lg: "text-4xl gap-1",
  hero: "text-5xl sm:text-6xl md:text-7xl gap-1",
};

export function Wordmark({ size = "md", className = "", showAi = true }: WordmarkProps) {
  return (
    <h1
      className={`font-bold tracking-tight text-white inline-flex flex-wrap items-end justify-center ${sizes[size]} ${className}`}
    >
      <span className="text-white">OMNI</span>
      <VoiceWaveV className={size === "hero" ? "mx-1 mb-1 md:mb-2" : "mx-0.5 mb-0.5"} />
      <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">OX</span>
      {showAi && <span className="text-cyan-400 font-semibold ml-2 self-center text-[0.55em] md:text-[0.5em]">AI</span>}
    </h1>
  );
}
