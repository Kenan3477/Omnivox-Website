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
  workingDaysPerMonth: 22,
  topUpPacks: [50, 100, 250, 500] as const,
};

/** Illustrative bundled-dialer benchmark for calculator comparisons (not a specific vendor quote). */
export const competitorBenchmark = {
  label: "Typical bundled dialer",
  seatPricePerMonth: 59,
  fairUseMinutesPerAgent: 3000,
  note: "Many CloudTalk-style plans advertise “unlimited” calling but fair-use caps land around ~3,000 minutes per user per month.",
} as const;

export const pricingAdvantages = [
  {
    title: "Pay for usage, not empty seats",
    description:
      "£25 platform fee per active seat — telephony on prepaid credits. Ideal for part-time agents, seasonal ramps, and teams that do not dial every day.",
  },
  {
    title: "No fair-use surprises",
    description:
      "Competitors often bundle “unlimited” minutes with hidden caps (~3,000 min/user/month). We show the meter in Admin → Call Credits. Every minute is visible.",
  },
  {
    title: "Total cost clarity",
    description:
      "Separate platform and telephony line items. No guessing what “included minutes” actually cost when you scale or slow down.",
  },
  {
    title: "Optional bundled plans",
    description:
      "Want predictable monthly spend? Ask about seat + credit bundles — committed top-up packs alongside your agent count. Metered transparency with a fixed credit budget.",
  },
] as const;

export const bundledPlanOptions = [
  {
    name: "Metered (default)",
    bestFor: "Variable volume, part-time agents, pilots",
    detail: "£25/seat + top up credits as you go (~5p/min). Pay only for connected minutes.",
  },
  {
    name: "Seat + credit bundle",
    bestFor: "Predictable monthly telephony spend",
    detail: "Same £25/seat with a committed monthly credit pack (e.g. £250 or £500). Still metered — you see every minute in the ledger.",
  },
] as const;

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
      "UK GDPR-aligned processor tools — DNC registry, audit logs, recording policies, and role-based access. DPA provided at onboarding.",
    bullets: [
      "Data controller / processor roles documented",
      "DNC registry and audit trail",
      "Recording per org or campaign",
      "Admin, Supervisor, Agent roles",
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
  {
    question: "How does OMNIVOX handle GDPR?",
    answer:
      "You are the data controller for your contacts, campaigns, and call data. OMNIVOX AI acts as your data processor. We provide a Data Processing Agreement (DPA) at onboarding, org-level data isolation, audit logs, DNC tools, and recording controls. See our Trust page for the full breakdown.",
  },
  {
    question: "Do you sign a Data Processing Agreement?",
    answer:
      "Yes. A DPA is provided when you onboard as a customer. It covers how we process personal data on your behalf, subprocessors, security measures, and breach notification. Email hello@omnivox.co.uk if you need a copy before signing up.",
  },
  {
    question: "Who is responsible for calling compliance (TPS, consent, recording)?",
    answer:
      "You remain responsible as the data controller — including PECR, TPS/CTPS checks, lawful basis for processing, and recording announcements. OMNIVOX gives you DNC lists, audit trails, and configurable recording so your team can operate accountably.",
  },
  {
    question: "Why not just buy an “unlimited minutes” dialer plan?",
    answer:
      "Bundled plans look simple but often hide fair-use caps (~3,000 minutes per user/month on many CloudTalk-style tiers) and high per-seat fees (£50–90+). OMNIVOX separates a low £25 platform fee from prepaid telephony at ~5p/min — you pay for usage, not empty seats, and the meter is always visible.",
  },
  {
    question: "Do you offer bundled or flat-rate plans?",
    answer:
      "Yes — optionally. Default is metered (£25/seat + credits). If you want predictable spend, we can quote seat + monthly credit bundles. You still get full usage transparency in the ledger.",
  },
];

export const dataCompliance = {
  roles: {
    title: "Clear data roles under UK GDPR",
    description:
      "Outbound dialers process personal data every day. We keep the split simple: you control your customer and prospect data; we process it to run the platform.",
    controller: {
      label: "You (customer)",
      subtitle: "Data controller",
      points: [
        "Contact lists, campaigns, and dispositions",
        "Lawful basis, consent, and TPS/CTPS obligations",
        "Recording announcements and retention policies for your leads",
        "Responding to data subject requests from your contacts",
      ],
    },
    processor: {
      label: "OMNIVOX AI",
      subtitle: "Data processor",
      points: [
        "Hosts and processes data only to deliver the dialer service",
        "Provides org isolation, access controls, and audit logging",
        "Signs a DPA covering security, subprocessors, and breach notification",
        "Supports your compliance workflows — DNC, recording controls, exports on request",
      ],
    },
  },
  controls: [
    {
      title: "Org-level isolation",
      description: "Each customer organisation has separate users, contacts, campaigns, and call records.",
    },
    {
      title: "DNC registry",
      description: "Maintain do-not-call lists inside the platform and block dialling to flagged numbers.",
    },
    {
      title: "Audit logs",
      description: "Track administrative actions and configuration changes for accountability.",
    },
    {
      title: "Recording controls",
      description: "Enable or disable call recording per organisation or campaign. Consent is your responsibility.",
    },
    {
      title: "Role-based access",
      description: "Admin, Supervisor, and Agent roles limit who can change settings, listen to recordings, or export data.",
    },
    {
      title: "Data Processing Agreement",
      description: "Standard DPA provided at onboarding. Covers UK GDPR and EU GDPR processor obligations.",
    },
  ],
  practices: [
    {
      title: "UK & EU focus",
      content:
        "Built for UK and European sales teams. We align our processor obligations with UK GDPR and EU GDPR. Subprocessor and hosting details are listed in your DPA.",
    },
    {
      title: "Telemarketing & PECR",
      content:
        "You must comply with PECR, TPS/CTPS, and sector-specific rules for outbound calling. OMNIVOX does not replace legal advice — we give you tools (DNC, preview dial, audit trail) to run campaigns accountably.",
    },
    {
      title: "Recording & call data",
      content:
        "Call recordings and metadata are processed to provide the service. Configure recording per org or campaign. Inform callers where required and define retention in your own policies.",
    },
    {
      title: "Retention & deletion",
      content:
        "You control how long contact and call data is kept for your business needs. On contract end, we delete or return customer data per the DPA. Contact us for specific retention or export requests.",
    },
    {
      title: "Security",
      content:
        "Encrypted connections, authenticated access, and role-scoped permissions. Administrative changes are logged. We do not claim certifications we have not earned — ask us for our current security posture during procurement.",
    },
    {
      title: "Breaches & enquiries",
      content:
        "Processor breach notification terms are in the DPA. For privacy enquiries or to exercise rights relating to data we process on your behalf, contact hello@omnivox.co.uk.",
    },
  ],
} as const;

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
      { name: "DNC registry", status: "available" as const, description: "Do-not-call list management — block flagged numbers before dialling." },
      { name: "Audit logs", status: "available" as const, description: "Administrative actions and configuration changes logged for review." },
      { name: "Recording controls", status: "available" as const, description: "Org and campaign-level recording. Consent remains your responsibility." },
      { name: "Role-based access", status: "available" as const, description: "Admin, Supervisor, and Agent roles with scoped permissions." },
      { name: "Data Processing Agreement", status: "available" as const, description: "UK/EU GDPR-aligned DPA provided at customer onboarding." },
      { name: "Org data isolation", status: "available" as const, description: "Separate contacts, campaigns, and call data per organisation." },
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
