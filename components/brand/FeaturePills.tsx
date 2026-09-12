const pills = [
  { label: "Smart dialing" },
  { label: "Live analytics" },
  { label: "Campaign ops" },
];

export function FeaturePills({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {pills.map((pill) => (
        <span
          key={pill.label}
          className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-400"
        >
          {pill.label}
        </span>
      ))}
    </div>
  );
}
