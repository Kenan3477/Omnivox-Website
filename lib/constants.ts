export const siteConfig = {
  name: "OMNIVOX AI",
  tagline: "Advanced conversational AI platform with intelligent workflow automation",
  description:
    "OMNIVOX AI is a cloud dialer and agent workspace for UK/EU sales teams — manual and preview outbound, platform-managed telephony, and one prepaid credit wallet for all calls.",
  url: "https://omnivox-website-three.vercel.app",
  appLoginUrl: "https://omnivox-ai.vercel.app/login",
  contactEmail: "hello@omnivox.co.uk",
  poweredBy: "Quanterae Solutions",
  platformFeePerAgent: 25,
  ratePerMinute: 0.05,
  topUpPacks: [50, 100, 250, 500] as const,
};

export const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/agencies", label: "Agencies" },
  { href: "/trust", label: "Trust" },
  { href: "/contact", label: "Contact" },
];

export const trustMetrics = [
  { value: "£25", label: "per agent / month" },
  { value: "~5p", label: "per connected minute" },
  { value: "Same day", label: "pilot onboarding" },
  { value: "1 wallet", label: "inbound + outbound" },
];

export const pillars = [
  {
    id: "dialing",
    eyebrow: "Outbound",
    title: "Preview dial your team will actually use",
    description:
      "Manual and preview modes are live today — review each contact, skip or call, disposition in one flow. Built for outbound sales teams who need control before every dial, not auto-dial chaos.",
    bullets: [
      "Click-to-call from the browser workspace",
      "Preview dial — pilot-proven in production",
      "Real-time queues: queued, allocated, outcomed",
      "Campaign dial methods per team",
    ],
    cta: "See dialing features",
    href: "/features#dialing",
    accent: "cyan",
  },
  {
    id: "wallet",
    eyebrow: "Telephony",
    title: "One credit wallet. Transparent per-minute pricing.",
    description:
      "Platform-managed telephony with prepaid credits — no carrier accounts, no surprise invoices. Top up in Admin, track every minute in the ledger, low-balance alerts on Work.",
    bullets: [
      "£50 · £100 · £250 · £500 top-up packs",
      "Inbound and outbound from one balance",
      "Stripe top-ups + pilot credit grants",
      "Usage ledger in Admin → Call Credits",
    ],
    cta: "See how credits work",
    href: "/pricing",
    accent: "violet",
  },
  {
    id: "compliance",
    eyebrow: "Operations",
    title: "Compliance and coaching without the spreadsheet",
    description:
      "DNC registry, audit logs, recording policies, and role-based access — so supervisors stay accountable as you scale from 3 agents to 20.",
    bullets: [
      "DNC registry and audit trail",
      "Recording per org or campaign",
      "Admin, Supervisor, Agent roles",
      "Reports on outcomes and activity",
    ],
    cta: "Trust & security",
    href: "/trust",
    accent: "emerald",
  },
];

export const testimonials = [
  {
    quote:
      "We were live with preview dial the same afternoon. Credits are transparent — our team always knows what a call costs.",
    metric: "Same-day",
    metricLabel: "pilot go-live",
    role: "Sales Director",
    company: "B2B outbound team, 8 agents",
  },
  {
    quote:
      "£25 a seat beats what we were quoted elsewhere. One wallet for inbound callbacks and outbound prospecting simplified everything.",
    metric: "£25",
    metricLabel: "per agent / month",
    role: "Operations Manager",
    company: "Agency, 12 agents",
  },
  {
    quote:
      "Preview dial changed how agents work. They review, skip bad fits, and disposition properly — connection quality went up without burning lists.",
    metric: "Preview",
    metricLabel: "dial mode daily",
    role: "Team Lead",
    company: "SaaS sales, 5 agents",
  },
];

export const faqItems = [
  {
    question: "Do I need my own telecom provider?",
    answer:
      "No. OMNIVOX AI includes platform-managed telephony. You buy prepaid call credits and dial — no carrier accounts or separate telecom bills.",
  },
  {
    question: "How are calls charged?",
    answer:
      "Inbound and outbound both use your credit balance at approximately 5p per connected minute, with a one-minute minimum per call. One wallet for all telephony.",
  },
  {
    question: "What's ready today?",
    answer:
      "Manual dial, preview dial, campaigns, inbound routing, prepaid credits, call recording, DNC registry, and audit logs. Progressive and predictive auto-dial is coming soon.",
  },
  {
    question: "Is there a big per-agent fee?",
    answer:
      "The platform fee is £25 per agent per month. Telephony is separate — you top up prepaid credits as you need them.",
  },
  {
    question: "Can I pilot first?",
    answer:
      "Yes. We can provision your organisation and grant starter credits. Pilot customers can start with £50 free call credits and white-glove setup.",
  },
  {
    question: "Is recording included?",
    answer:
      "Yes. Call recording is configurable per organisation or campaign. Recording consent remains your responsibility as the data controller.",
  },
];

export const pricingBreakdown = [
  {
    label: "Platform",
    value: "£25 per agent / month",
    detail: "Full workspace — manual & preview dial, campaigns, DNC, recording, roles",
  },
  {
    label: "Telephony",
    value: "Prepaid credits",
    detail: "Platform-managed — no carrier accounts or bundled minute pools",
  },
  {
    label: "Outbound",
    value: "~5p per connected minute",
    detail: "One-minute minimum per call",
  },
  {
    label: "Inbound",
    value: "~5p per connected minute",
    detail: "Same credit wallet as outbound",
  },
  {
    label: "Minimum top-up",
    value: "£50",
    detail: "Top-up packs: £50 · £100 · £250 · £500 via Stripe in Admin",
  },
  {
    label: "Teams",
    value: "1–20+ agents",
    detail: "Outbound sales, inbound DIDs, agencies — same pricing for everyone",
  },
] as const;

export const pricingIncludes = [
  "Manual & preview dial",
  "Browser agent workspace",
  "Campaigns & contact lists",
  "Inbound DIDs & routing",
  "DNC registry & audit logs",
  "Call recording (configurable)",
  "Admin, Supervisor & Agent roles",
] as const;

export const featureGroups = [
  {
    title: "Dialing",
    id: "dialing",
    icon: "phone",
    features: [
      { name: "Manual dial", status: "available" as const, description: "Click-to-call with live controls from the browser workspace." },
      { name: "Preview dial", status: "available" as const, description: "Review each contact, skip or dial — pilot-proven in production." },
      { name: "Campaign dial methods", status: "available" as const, description: "Configure dial behaviour per campaign." },
      { name: "Progressive / predictive dial", status: "coming-soon" as const, description: "Multi-agent auto-dial — in development, waitlist open." },
    ],
  },
  {
    title: "Work surface",
    id: "work",
    icon: "desktop",
    features: [
      { name: "Interaction queues", status: "available" as const, description: "Real-time queues: queued, allocated, outcomed, unallocated." },
      { name: "Dispositions & call notes", status: "available" as const, description: "Structured dispositioning and notes on every call." },
      { name: "Customer info card", status: "available" as const, description: "Full contact context during every interaction." },
      { name: "Low-balance warnings", status: "available" as const, description: "Banner on Work when credits run low." },
    ],
  },
  {
    title: "Credit wallet",
    id: "wallet",
    icon: "wallet",
    features: [
      { name: "One wallet for all calls", status: "available" as const, description: "Inbound and outbound both deduct from the same prepaid balance." },
      { name: "Stripe top-ups", status: "available" as const, description: "£50, £100, £250, £500 credit packs." },
      { name: "Admin credit grants", status: "available" as const, description: "Manual pilot credits — no Stripe required for pilots." },
      { name: "Usage ledger", status: "available" as const, description: "Full visibility in Admin → Call Credits." },
      { name: "~5p/min transparent", status: "available" as const, description: "Approximately 5p per connected minute, inbound or outbound." },
    ],
  },
  {
    title: "Inbound",
    id: "inbound",
    icon: "inbound",
    features: [
      { name: "Inbound DIDs", status: "available" as const, description: "Platform-managed numbers — we handle the telecom stack." },
      { name: "Routing & queues", status: "available" as const, description: "Route to agents, teams, or queues." },
      { name: "Business hours & voicemail", status: "available" as const, description: "After-hours handling and greeting audio." },
    ],
  },
  {
    title: "Data & campaigns",
    id: "data",
    icon: "data",
    features: [
      { name: "Contacts & lists", status: "available" as const, description: "Filtering, segmentation, and import-ready data." },
      { name: "Campaigns & scripts", status: "available" as const, description: "Templates, talk tracks, and assignment rules." },
      { name: "Interaction history", status: "available" as const, description: "Full lead assignment and call history." },
    ],
  },
  {
    title: "Compliance",
    id: "compliance",
    icon: "shield",
    features: [
      { name: "DNC registry", status: "available" as const, description: "Do-not-call list management built in." },
      { name: "Audit logs", status: "available" as const, description: "Full audit trail of platform activity." },
      { name: "Recording controls", status: "available" as const, description: "Org and campaign-level recording policies." },
      { name: "Role-based access", status: "available" as const, description: "Admin, Supervisor, and Agent roles." },
    ],
  },
  {
    title: "Insights",
    id: "insights",
    icon: "chart",
    features: [
      { name: "Reports & analytics", status: "available" as const, description: "Campaign performance and agent activity." },
      { name: "Real-time analytics", status: "available" as const, description: "Call outcomes and disposition trends." },
      { name: "AI dispositioning", status: "coming-soon" as const, description: "Secondary feature in development." },
    ],
  },
];
