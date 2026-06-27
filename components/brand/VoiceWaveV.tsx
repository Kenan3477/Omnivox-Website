"use client";

/** Single compact cyan waveform — one V glyph between OMNI and OX. */
export function VoiceWaveV({ className = "" }: { className?: string }) {
  // One valley in the centre (letter V), not two equalizer clusters
  const bars = [0.92, 0.62, 0.28, 0.62, 0.92];

  return (
    <span
      className={`inline-flex shrink-0 items-end justify-center gap-[2px] w-[1.15em] mx-0.5 ${className}`}
      aria-hidden="true"
    >
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-[3px] sm:w-[4px] rounded-full bg-gradient-to-t from-cyan-500 to-cyan-300 shadow-[0_0_6px_rgba(34,211,238,0.45)] animate-voice-bar"
          style={{
            height: `${h * 1.35}em`,
            maxHeight: "1.35em",
            animationDelay: `${i * 0.08}s`,
          }}
        />
      ))}
    </span>
  );
}
