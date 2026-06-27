export const siteConfig = {
  name: "OMNIVOX AI",
  tagline: "Advanced conversational AI platform with intelligent workflow automation",
  description:
    "OMNIVOX AI is a cloud dialer and agent workspace for UK/EU teams — manual and preview outbound, platform-managed telephony, and one prepaid credit wallet for all calls.",
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
  { href: "/agencies", label: "For Agencies" },
  { href: "/trust", label: "Trust" },
  { href: "/contact", label: "Contact" },
];

export const faqItems = [
  {
    question: "Do I need my own telecom provider?",
    answer:
      "No. OMNIVOX AI includes platform-managed telephony. You buy prepaid call credits and dial — no carrier accounts, no webhook plumbing, no separate telecom bill.",
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

export const pricingComparison = {
  starter: {
    name: "Starter",
    platform: "£25/agent/mo",
    telephony: "Prepaid credits",
    outbound: "~5p/min",
    inbound: "~5p/min (same wallet)",
    minTopUp: "£50",
    bestFor: "1–5 agents, outbound sales",
  },
  team: {
    name: "Team",
    platform: "£25/agent/mo",
    telephony: "Prepaid credits",
    outbound: "~5p/min",
    inbound: "~5p/min (same wallet)",
    minTopUp: "£50",
    bestFor: "5–20 agents + inbound DIDs",
  },
};

export const featureGroups = [
  {
    title: "Dialing",
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
    icon: "inbound",
    features: [
      { name: "Inbound DIDs", status: "available" as const, description: "Platform-managed numbers included — we handle the telecom stack." },
      { name: "Routing & queues", status: "available" as const, description: "Route to agents, teams, or queues." },
      { name: "Business hours & voicemail", status: "available" as const, description: "After-hours handling and greeting audio." },
    ],
  },
  {
    title: "Data & campaigns",
    icon: "data",
    features: [
      { name: "Contacts & lists", status: "available" as const, description: "Filtering, segmentation, and import-ready data." },
      { name: "Campaigns & scripts", status: "available" as const, description: "Templates, talk tracks, and assignment rules." },
      { name: "Interaction history", status: "available" as const, description: "Full lead assignment and call history." },
    ],
  },
  {
    title: "Compliance",
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
    icon: "chart",
    features: [
      { name: "Reports & analytics", status: "available" as const, description: "Campaign performance and agent activity." },
      { name: "Real-time analytics", status: "available" as const, description: "Call outcomes and disposition trends." },
      { name: "AI dispositioning", status: "coming-soon" as const, description: "Secondary feature in development." },
    ],
  },
];
