"use client";

/** Animated cyan sound bars forming a V shape (not the letter V). */
export function VoiceWaveV({ className = "" }: { className?: string }) {
  const leftBars = [0.35, 0.55, 0.75, 0.95, 1, 0.85, 0.65, 0.45];
  const rightBars = [0.45, 0.65, 0.85, 1, 0.95, 0.75, 0.55, 0.35];

  return (
    <span
      className={`inline-flex items-end justify-center gap-[2px] mx-0.5 ${className}`}
      aria-hidden="true"
    >
      {leftBars.map((h, i) => (
        <span
          key={`l-${i}`}
          className="w-[3px] md:w-1 rounded-full bg-cyan-400 animate-voice-bar"
          style={{
            height: `${h * 28}px`,
            animationDelay: `${i * 0.08}s`,
          }}
        />
      ))}
      <span className="w-1" />
      {rightBars.map((h, i) => (
        <span
          key={`r-${i}`}
          className="w-[3px] md:w-1 rounded-full bg-cyan-400 animate-voice-bar"
          style={{
            height: `${h * 28}px`,
            animationDelay: `${(i + 8) * 0.08}s`,
          }}
        />
      ))}
    </span>
  );
}
