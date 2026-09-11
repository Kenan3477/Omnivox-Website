export function Wordmark({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="font-display text-[1.05rem] font-extrabold tracking-tight text-paper" style={{ letterSpacing: "0.01em" }}>
        OMNIVOX
      </span>
      {!compact && (
        <span className="hidden items-center gap-1.5 sm:flex" aria-hidden="true">
          <span className="h-1.5 w-1.5 bg-signal-400 tick-live" />
        </span>
      )}
    </span>
  );
}

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="2" fill="#101318" />
      <rect x="0.5" y="0.5" width="31" height="31" rx="1.5" stroke="#2A323C" />
      <rect x="5" y="8" width="22" height="16" rx="1" fill="#08090B" stroke="#2EC8B0" strokeWidth="0.75" />
      <rect x="7" y="11" width="5" height="8" fill="#2EC8B0" />
      <rect x="13.5" y="14" width="5" height="5" fill="#E8A317" />
      <rect x="20" y="12.5" width="5" height="6.5" fill="#2EC8B0" opacity="0.55" />
    </svg>
  );
}
