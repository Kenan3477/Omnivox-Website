import Link from "next/link";

export function Breadcrumbs({
  crumbs,
  light = false,
}: {
  crumbs: { name: string; href: string }[];
  light?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className={`flex flex-wrap items-center gap-2 text-xs ${light ? "text-slate-500" : "text-slate-400"}`}>
        {crumbs.map((crumb, index) => {
          const last = index === crumbs.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {last ? (
                <span className={light ? "text-slate-700" : "text-slate-300"} aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <Link href={crumb.href} className={light ? "hover:text-blue-700" : "hover:text-blue-300"}>
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
