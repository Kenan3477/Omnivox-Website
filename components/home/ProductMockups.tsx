import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";

const mockups = [
  {
    title: "Agent Work",
    subtitle: "Preview dial — review, skip, or call",
    badge: "available" as const,
    content: (
      <div className="space-y-3">
        <div className="flex items-center justify-between rounded-lg bg-slate-100 p-3">
          <div>
            <p className="text-sm font-semibold text-slate-900">Sarah Mitchell — Acme Ltd</p>
            <p className="text-xs text-slate-500">+44 7700 900123</p>
          </div>
          <Badge variant="available" />
        </div>
        <div className="flex gap-2">
          <div className="flex-1 rounded-lg bg-cyan-500 py-2 text-center text-sm font-semibold text-white">Dial</div>
          <div className="flex-1 rounded-lg border border-slate-200 py-2 text-center text-sm text-slate-600">Skip</div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {["Callback", "Sale", "Voicemail", "Not interested"].map((d) => (
            <div key={d} className="rounded-lg border border-slate-100 p-2 text-center text-xs text-slate-600">{d}</div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Call Credits",
    subtitle: "Admin — one wallet for all telephony",
    badge: "available" as const,
    content: (
      <div className="space-y-3">
        <div className="rounded-lg bg-cyan-50 border border-cyan-100 p-4">
          <p className="text-xs text-cyan-700 font-medium">Credit balance</p>
          <p className="text-2xl font-bold text-cyan-800">£247.50</p>
        </div>
        {[
          { label: "Outbound — 12 min", cost: "-£0.60" },
          { label: "Inbound — 8 min", cost: "-£0.40" },
          { label: "Top-up £100", cost: "+£100.00" },
        ].map((item) => (
          <div key={item.label} className="flex justify-between text-xs">
            <span className="text-slate-600">{item.label}</span>
            <span className={item.cost.startsWith("+") ? "text-emerald-600 font-medium" : "text-slate-500"}>{item.cost}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Campaigns",
    subtitle: "Dial methods, scripts, assignment",
    badge: "available" as const,
    content: (
      <div className="space-y-3">
        {[
          { name: "Q2 Renewal", method: "Preview", contacts: "1,247" },
          { name: "New Business", method: "Manual", contacts: "856" },
        ].map((c) => (
          <div key={c.name} className="rounded-lg border border-slate-100 p-3">
            <p className="text-sm font-semibold text-slate-900">{c.name}</p>
            <p className="text-xs text-slate-500 mt-1">{c.method} dial · {c.contacts} contacts</p>
          </div>
        ))}
      </div>
    ),
  },
];

export function ProductMockups() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Product"
          title="Ready for onboarding today"
          description="Browser-based agent workspace. Platform-managed telephony. No softphone install."
          light
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {mockups.map((mockup, i) => (
            <AnimateOnScroll key={mockup.title} delay={i * 100}>
              <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-lg">
                <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-purple-950 p-4">
                  <h3 className="text-lg font-bold text-white">{mockup.title}</h3>
                  <p className="text-sm text-cyan-200/70">{mockup.subtitle}</p>
                </div>
                <div className="p-5">{mockup.content}</div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
