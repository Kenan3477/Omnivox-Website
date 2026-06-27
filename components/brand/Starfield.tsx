"use client";

export function Starfield() {
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    left: `${(i * 17 + 7) % 100}%`,
    top: `${(i * 23 + 11) % 100}%`,
    size: i % 5 === 0 ? 2 : 1,
    delay: `${(i % 20) * 0.3}s`,
    duration: `${2 + (i % 4)}s`,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
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
            opacity: 0.4 + (star.id % 5) * 0.12,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-950/80 to-purple-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(34,211,238,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_60%,rgba(168,85,247,0.1),transparent_45%)]" />
    </div>
  );
}
