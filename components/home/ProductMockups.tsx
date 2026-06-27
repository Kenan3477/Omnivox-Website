import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";

const mockups = [
  {
    title: "Agent Workspace",
    subtitle: "Manual & preview dial with live controls",
    badge: "available" as const,
    content: (
      <div className="space-y-3">
        <div className="flex items-center justify-between rounded-lg bg-navy-50 p-3">
          <div>
            <p className="text-sm font-semibold text-navy-900">Active call</p>
            <p className="text-xs text-navy-500">02:34 · Connected</p>
          </div>
          <div className="flex gap-2">
            <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-red-500" />
            </div>
            <div className="h-8 w-8 rounded-full bg-navy-100 flex items-center justify-center text-navy-600 text-xs">⏸</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {["Callback", "Not interested", "Sale", "Voicemail"].map((d) => (
            <div key={d} className="rounded-lg border border-navy-100 p-2 text-center text-xs font-medium text-navy-600">{d}</div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Call Credits",
    subtitle: "Prepaid wallet with transparent usage",
    badge: "available" as const,
    content: (
      <div className="space-y-3">
        <div className="rounded-lg bg-emerald-50 border border-emerald-100 p-4">
          <p className="text-xs text-emerald-600 font-medium">Credit balance</p>
          <p className="text-2xl font-bold text-emerald-700">£247.50</p>
        </div>
        <div className="space-y-2">
          {[
            { label: "Outbound — 12 min", cost: "-£0.60" },
            { label: "Outbound — 4 min", cost: "-£0.20" },
            { label: "Top-up £100", cost: "+£100.00" },
          ].map((item) => (
            <div key={item.label} className="flex justify-between text-xs">
              <span className="text-navy-600">{item.label}</span>
              <span className={item.cost.startsWith("+") ? "text-emerald-600 font-medium" : "text-navy-500"}>{item.cost}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Campaign Manager",
    subtitle: "Dial methods, scripts, and assignment",
    badge: "available" as const,
    content: (
      <div className="space-y-3">
        {[
          { name: "Q2 Renewal Outreach", method: "Preview", contacts: "1,247", status: "Active" },
          { name: "New Business — London", method: "Manual", contacts: "856", status: "Active" },
          { name: "Re-engagement", method: "Preview", contacts: "423", status: "Paused" },
        ].map((c) => (
          <div key={c.name} className="rounded-lg border border-navy-100 p-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-navy-900">{c.name}</p>
              <span className={`text-xs font-medium ${c.status === "Active" ? "text-emerald-600" : "text-amber-600"}`}>{c.status}</span>
            </div>
            <div className="mt-1 flex gap-3 text-xs text-navy-500">
              <span>{c.method} dial</span>
              <span>{c.contacts} contacts</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

export function ProductMockups() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Product"
          title="Everything your agents need in one workspace"
          description="Browser-based — no softphone install required. Real-time queues, customer cards, and dispositioning built in."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {mockups.map((mockup, i) => (
            <AnimateOnScroll key={mockup.title} delay={i * 100}>
              <div className="rounded-2xl border border-navy-100 bg-white overflow-hidden shadow-sm">
                <div className="bg-navy p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">{mockup.title}</h3>
                      <p className="text-sm text-navy-300">{mockup.subtitle}</p>
                    </div>
                    <Badge variant={mockup.badge} />
                  </div>
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
