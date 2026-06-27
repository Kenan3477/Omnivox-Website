import { VoiceWaveV } from "./VoiceWaveV";

interface WordmarkProps {
  size?: "sm" | "md" | "lg" | "hero";
  className?: string;
  showAi?: boolean;
}

const sizes = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-3xl sm:text-4xl",
  hero: "text-4xl sm:text-5xl",
};

export function Wordmark({ size = "md", className = "", showAi = true }: WordmarkProps) {
  return (
    <h1
      className={`font-bold tracking-tight text-white inline-flex flex-wrap items-end ${sizes[size]} ${className}`}
    >
      <span>OMNI</span>
      <VoiceWaveV className={size === "lg" || size === "hero" ? "mx-1 mb-0.5" : "mx-0.5"} />
      <span className="text-cyan-300">OX</span>
      {showAi && <span className="text-cyan-400 font-semibold ml-1.5 self-center text-[0.45em]">AI</span>}
    </h1>
  );
}
