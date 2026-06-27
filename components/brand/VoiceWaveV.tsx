"use client";

/** Single cyan waveform forming one V (replaces the letter V in OMNI∨OX). */
export function VoiceWaveV({ className = "" }: { className?: string }) {
  // One symmetric valley in the centre — not two separate waves
  const bars = [0.45, 0.7, 0.95, 0.55, 0.22, 0.55, 0.95, 0.7, 0.45];

  return (
    <span
      className={`inline-flex items-end justify-center gap-[2px] mx-0.5 ${className}`}
      aria-hidden="true"
    >
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-[3px] sm:w-1 rounded-full bg-cyan-400 animate-voice-bar"
          style={{
            height: `${h * 28}px`,
            animationDelay: `${i * 0.06}s`,
          }}
        />
      ))}
    </span>
  );
}
