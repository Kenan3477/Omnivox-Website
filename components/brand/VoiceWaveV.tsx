"use client";

/** Animated cyan sound bars forming a V shape. */
export function VoiceWaveV({ className = "" }: { className?: string }) {
  const leftBars = [0.3, 0.5, 0.7, 0.95, 1, 0.8, 0.55, 0.35];
  const rightBars = [0.35, 0.55, 0.8, 1, 0.95, 0.7, 0.5, 0.3];

  return (
    <span className={`inline-flex items-end justify-center gap-[3px] ${className}`} aria-hidden="true">
      {leftBars.map((h, i) => (
        <span
          key={`l-${i}`}
          className="w-1 md:w-1.5 rounded-full bg-gradient-to-t from-cyan-500 to-cyan-300 animate-voice-bar shadow-[0_0_8px_rgba(34,211,238,0.5)]"
          style={{ height: `${h * 36}px`, animationDelay: `${i * 0.07}s` }}
        />
      ))}
      <span className="w-1.5" />
      {rightBars.map((h, i) => (
        <span
          key={`r-${i}`}
          className="w-1 md:w-1.5 rounded-full bg-gradient-to-t from-cyan-500 to-cyan-300 animate-voice-bar shadow-[0_0_8px_rgba(34,211,238,0.5)]"
          style={{ height: `${h * 36}px`, animationDelay: `${(i + 8) * 0.07}s` }}
        />
      ))}
    </span>
  );
}
