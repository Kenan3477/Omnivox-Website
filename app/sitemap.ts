import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

const lastModified = new Date("2026-09-11");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] =
    [
      { path: "", changeFrequency: "weekly", priority: 1 },
      { path: "/features", changeFrequency: "monthly", priority: 0.9 },
      { path: "/channels", changeFrequency: "monthly", priority: 0.9 },
      { path: "/wallboards", changeFrequency: "monthly", priority: 0.9 },
      { path: "/inbound", changeFrequency: "monthly", priority: 0.8 },
      { path: "/pricing", changeFrequency: "monthly", priority: 0.9 },
      { path: "/agencies", changeFrequency: "monthly", priority: 0.8 },
      { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
      { path: "/trust", changeFrequency: "monthly", priority: 0.8 },
      { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
      { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
      { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
    ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
