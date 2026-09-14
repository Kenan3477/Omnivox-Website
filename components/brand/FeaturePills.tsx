const pills = [
  { label: "Preview · Progressive · Power" },
  { label: "WhatsApp 24h" },
  { label: "Floor wallboards" },
  { label: "Predictive waitlist" },
];

export function FeaturePills({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {pills.map((pill) => (
        <span
          key={pill.label}
          className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-medium tracking-wide text-slate-400"
        >
          {pill.label}
        </span>
      ))}
    </div>
  );
}
