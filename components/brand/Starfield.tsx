"use client";

export function Starfield() {
  const stars = Array.from({ length: 150 }, (_, i) => ({
    id: i,
    left: `${((i * 37 + 13) % 97) + 1}%`,
    top: `${((i * 53 + 7) % 93) + 2}%`,
    size: i % 7 === 0 ? 2.5 : i % 3 === 0 ? 1.5 : 1,
    delay: `${(i % 25) * 0.2}s`,
    duration: `${2 + (i % 5) * 0.5}s`,
    opacity: 0.2 + (i % 6) * 0.12,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-[#0c1445] to-[#1a0a2e]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(34,211,238,0.18),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_80%,rgba(139,92,246,0.15),transparent)]" />
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: star.duration,
            opacity: star.opacity,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,23,42,0.4)_100%)]" />
    </div>
  );
}
