type BadgeVariant = "available" | "pilot" | "beta" | "coming-soon" | "waitlist";

interface BadgeProps {
  variant: BadgeVariant;
  className?: string;
}

const labels: Record<BadgeVariant, string> = {
  available: "Available now",
  pilot: "Pilot",
  beta: "Beta",
  "coming-soon": "Coming soon",
  waitlist: "Waitlist",
};

const styles: Record<BadgeVariant, string> = {
  available: "bg-emerald-50 text-emerald-700 border-emerald-200",
  pilot: "bg-amber-50 text-amber-700 border-amber-200",
  beta: "bg-blue-50 text-blue-700 border-blue-200",
  "coming-soon": "bg-slate-100 text-slate-600 border-slate-200",
  waitlist: "bg-amber-50 text-amber-800 border-amber-200",
};

export function Badge({ variant, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${styles[variant]} ${className}`}
    >
      {labels[variant]}
    </span>
  );
}
