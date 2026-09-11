import Link from "next/link";

export function Breadcrumbs({
  crumbs,
  light = false,
}: {
  crumbs: { name: string; href: string }[];
  light?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb" className={`mb-4 ${light ? "text-left" : ""}`}>
      <ol
        className={`flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-widest ${
          light ? "text-ink-500" : "text-ink-400"
        }`}
      >
        {crumbs.map((crumb, index) => {
          const last = index === crumbs.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {last ? (
                <span className={light ? "text-ink" : "text-ink-200"} aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <Link href={crumb.href} className={light ? "hover:text-signal-700" : "hover:text-signal-300"}>
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
