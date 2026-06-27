const pills = [
  { emoji: "📞", label: "Smart Dialing" },
  { emoji: "📊", label: "Real-time Analytics" },
  { emoji: "🎯", label: "Campaign Management" },
];

export function FeaturePills({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
      {pills.map((pill) => (
        <span
          key={pill.label}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-white/5 px-4 py-2 text-sm text-cyan-100 backdrop-blur-sm"
        >
          <span aria-hidden="true">{pill.emoji}</span>
          {pill.label}
        </span>
      ))}
    </div>
  );
}
