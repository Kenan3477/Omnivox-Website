import { VoiceWaveV } from "./VoiceWaveV";

interface WordmarkProps {
  size?: "sm" | "md" | "lg" | "hero";
  className?: string;
  showAi?: boolean;
}

const sizes = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-4xl",
  hero: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
};

export function Wordmark({ size = "md", className = "", showAi = true }: WordmarkProps) {
  return (
    <h1
      className={`font-display font-bold tracking-tight text-white flex flex-wrap items-center justify-center gap-x-1 ${sizes[size]} ${className}`}
    >
      <span className="bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
        OMNI
      </span>
      <VoiceWaveV className={size === "hero" ? "scale-110 md:scale-125" : ""} />
      <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
        OX
      </span>
      {showAi && (
        <span className="text-cyan-400 font-semibold ml-1">AI</span>
      )}
    </h1>
  );
}
