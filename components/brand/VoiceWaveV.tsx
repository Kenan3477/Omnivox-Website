"use client";

/** Equalizer bars used as a compact brand accent. */
export function VoiceWaveV({ className = "" }: { className?: string }) {
  const bars = [0.55, 1, 0.72];

  return (
    <span
      className={`inline-flex w-[0.85em] shrink-0 items-end justify-center gap-[2px] mx-0.5 ${className}`}
      aria-hidden="true"
    >
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-[3px] rounded-full bg-blue-400 shadow-[0_0_6px_rgba(37,99,235,0.45)] animate-voice-bar sm:w-[3.5px]"
          style={{
            height: `${h * 1.15}em`,
            maxHeight: "1.2em",
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </span>
  );
}
