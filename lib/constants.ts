export const siteConfig = {
  name: "OMNIVOX",
  tagline: "Campaigns, queues, and a Work Inbox — in one browser.",
  description:
    "OMNIVOX is a UK/EU cloud contact centre: preview, progressive, and power dial with AMD, inbound ACD, a Work Inbox for SMS, WhatsApp (24-hour sessions), email, chat, and social DMs, and floor wallboards. Prepaid voice at about 5p outbound and 4p inbound.",
  url: "https://omnivox-website-three.vercel.app",
  appLoginUrl: "https://omnivox.vercel.app/login",
  appWorkHost: "omnivox.vercel.app/work",
  contactEmail: "hello@omnivox.co.uk",
  poweredBy: "Quanterae Solutions",
  platformFeePerAgent: 25,
  ratePerMinute: 0.05,
  inboundRatePerMinute: 0.04,
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
    detail: "£25/seat + top up credits as you go (~5p outbound / ~4p inbound). Pay only for connected voice minutes.",
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
  { value: "5p / 4p", label: "outbound / inbound" },
  { value: "8", label: "channels in catalog" },
  { value: "Same day", label: "pilot onboarding" },
];

export const pillars = [
  {
    id: "dialing",
    eyebrow: "Outbound",
    title: "Preview, progressive, and power — with AMD",
    description:
      "Manual and preview for control. Progressive and power when the floor is ready to pace. Answering-machine detection on the paced modes. Predictive Live is waitlist only.",
    bullets: [
      "Click-to-call from the browser workspace",
      "Preview, progressive, and power are live",
      "AMD on progressive and power",
      "Predictive Live — waitlist, not in production",
    ],
    cta: "See dialing features",
    href: "/features#dialing",
    accent: "cyan",
  },
  {
    id: "inbox",
    eyebrow: "Work Inbox",
    title: "SMS, WhatsApp, email, chat, and social DMs",
    description:
      "Eight channels live in the product catalog. WhatsApp is a 24-hour customer-care session — not template broadcasts. Digital is not billed from Call Credits. Catalog live does not mean the org is ready until Admin → Channels is configured.",
    bullets: [
      "Voice plus SMS, WhatsApp, email, live chat",
      "Facebook, Instagram, and X DMs",
      "WhatsApp: 24-hour window, no HSM catalog",
      "Enable per org in Admin → Channels",
    ],
    cta: "See inbox features",
    href: "/features#inbox",
    accent: "violet",
  },
  {
    id: "floor",
    eyebrow: "Floor",
    title: "Wallboards, inbound ACD, and DNC",
    description:
      "Live floor wallboards, inbound queues and IVR, campaign lists, and a DNC registry. UK GDPR processor tools — DPA at onboarding. No invented SOC 2 or ISO claims.",
    bullets: [
      "Floor wallboards including Digital waiting",
      "Inbound DIDs, ACD, and IVR",
      "DNC registry and audit trail",
      "Admin, Supervisor, Agent roles",
    ],
    cta: "Trust & security",
    href: "/trust",
    accent: "emerald",
  },
];

export const faqItems = [
  {
    question: "Do I need my own telecom provider?",
    answer:
      "No. OMNIVOX includes platform-managed Twilio telephony. You buy prepaid call credits and dial — no carrier accounts or separate telecom bills. Digital channels are not billed from that wallet.",
  },
  {
    question: "How are calls charged?",
    answer:
      "Voice uses your Call Credits wallet: about 5p per connected outbound minute and 4p per connected inbound minute, with a one-minute minimum. SMS, WhatsApp, email, chat, and social DMs are not deducted from Call Credits.",
  },
  {
    question: "What's ready today?",
    answer:
      "Manual, preview, progressive, and power dial (AMD on the paced modes), campaigns, inbound ACD/IVR, prepaid voice credits, call recording, DNC, audit logs, floor wallboards, and a Work Inbox whose catalog includes SMS, WhatsApp (24-hour sessions), email, live chat, and Facebook/Instagram/X DMs. Catalog live does not mean every org has those channels enabled — that is Admin → Channels. Predictive Live is waitlist only.",
  },
  {
    question: "Is there a big per-agent fee?",
    answer:
      "The platform fee is £25 per agent per month as sales policy. Telephony is separate — you top up prepaid credits as you need them.",
  },
  {
    question: "Can I pilot first?",
    answer:
      "Yes. We can provision your organisation and grant starter credits. Pilot customers can start with £50 free call credits and white-glove setup. Login is at omnivox.vercel.app — access is IP-whitelisted.",
  },
  {
    question: "Do you have WhatsApp broadcasts?",
    answer:
      "No. WhatsApp in OMNIVOX is a 24-hour customer-care session in the Work Inbox. We do not sell HSM template catalogs or broadcast campaigns.",
  },
  {
    question: "Is recording included?",
    answer:
      "Yes. Call recording is configurable per organisation or campaign. Recording consent remains your responsibility as the data controller.",
  },
  {
    question: "How does OMNIVOX handle GDPR?",
    answer:
      "You are the data controller for your contacts, campaigns, and call data. OMNIVOX acts as your data processor. We provide a Data Processing Agreement (DPA) at onboarding, org-level data isolation, audit logs, DNC tools, and recording controls. See our Trust page for the full breakdown.",
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
      "Bundled plans look simple but often hide fair-use caps (~3,000 minutes per user/month on many CloudTalk-style tiers) and high per-seat fees. OMNIVOX separates a £25 platform fee from prepaid voice at ~5p outbound / ~4p inbound — you pay for usage, not empty seats, and the meter is always visible.",
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
      label: "OMNIVOX",
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
    detail: "Workspace, dial modes, inbox, wallboards, DNC, recording, roles — sales policy, not a Stripe seat SKU",
  },
  {
    label: "Telephony",
    value: "Prepaid credits",
    detail: "Platform-managed Twilio — no carrier accounts or bundled minute pools",
  },
  {
    label: "Outbound",
    value: "~5p per connected minute",
    detail: "One-minute minimum per call",
  },
  {
    label: "Inbound",
    value: "~4p per connected minute",
    detail: "Same Call Credits wallet as outbound",
  },
  {
    label: "Digital",
    value: "Not in Call Credits",
    detail: "SMS, WhatsApp, email, chat, and social DMs are not metered on the voice wallet",
  },
  {
    label: "Minimum top-up",
    value: "£50",
    detail: "Top-up packs: £50 · £100 · £250 · £500 via Stripe in Admin",
  },
] as const;

export const pricingIncludes = [
  "Preview, progressive & power dial + AMD",
  "Work Inbox — 8 channels in catalog",
  "Floor wallboards & Digital waiting",
  "Browser agent workspace",
  "Campaigns, lists & DNC registry",
  "Inbound DIDs, ACD & IVR",
  "Call recording (configurable)",
  "Admin, Supervisor & Agent roles",
] as const;

export const featureGroups = [
  {
    title: "Dialing",
    id: "dialing",
    icon: "phone" as const,
    features: [
      { name: "Manual dial", status: "available" as const, description: "Click-to-call with live controls from the browser workspace." },
      { name: "Preview dial", status: "available" as const, description: "Review each contact, skip or dial — used in production pilots." },
      { name: "Progressive dial", status: "available" as const, description: "One line per agent. Next record dials when the previous call ends." },
      { name: "Power dial + AMD", status: "available" as const, description: "Agents stay on the line. Answering-machine detection drops machines." },
      { name: "Predictive Live", status: "waitlist" as const, description: "Waitlist only — not enabled in production." },
      { name: "Campaign dial methods", status: "available" as const, description: "Configure dial behaviour per campaign and team." },
    ],
  },
  {
    title: "Work Inbox",
    id: "inbox",
    icon: "inbox" as const,
    features: [
      { name: "SMS threads", status: "available" as const, description: "Inbound and outbound SMS in the agent workspace. Not billed from Call Credits." },
      { name: "WhatsApp 24h sessions", status: "available" as const, description: "Customer-care window only. No HSM template broadcasts or broadcast catalog." },
      { name: "Email, live chat, social DMs", status: "available" as const, description: "Email, web chat, Facebook, Instagram, and X DMs in the same inbox." },
      { name: "Admin → Channels", status: "available" as const, description: "Catalog live does not mean org-ready. Enable channels per organisation." },
    ],
  },
  {
    title: "Work surface",
    id: "work",
    icon: "desktop" as const,
    features: [
      { name: "Interaction queues", status: "available" as const, description: "Real-time queues: queued, allocated, outcomed, unallocated." },
      { name: "Dispositions & call notes", status: "available" as const, description: "Structured dispositioning and notes on every call." },
      { name: "Customer info card", status: "available" as const, description: "Contact context during every interaction." },
      { name: "Low-balance warnings", status: "available" as const, description: "Banner on Work when voice credits run low." },
    ],
  },
  {
    title: "Credit wallet",
    id: "wallet",
    icon: "wallet" as const,
    features: [
      { name: "Voice wallet", status: "available" as const, description: "Inbound and outbound voice deduct from the same prepaid balance." },
      { name: "~5p outbound / ~4p inbound", status: "available" as const, description: "Per connected minute, one-minute minimum. Digital is not in this wallet." },
      { name: "Stripe top-ups", status: "available" as const, description: "£50, £100, £250, £500 credit packs." },
      { name: "Admin credit grants", status: "available" as const, description: "Manual pilot credits — no Stripe required for pilots." },
      { name: "Usage ledger", status: "available" as const, description: "Full visibility in Admin → Call Credits." },
    ],
  },
  {
    title: "Inbound & floor",
    id: "inbound",
    icon: "inbound" as const,
    features: [
      { name: "Inbound DIDs", status: "available" as const, description: "Platform-managed numbers — we handle the telecom stack." },
      { name: "ACD, queues & IVR", status: "available" as const, description: "Route to agents, teams, or queues with IVR." },
      { name: "Business hours & voicemail", status: "available" as const, description: "After-hours handling and greeting audio." },
    ],
  },
  {
    title: "Wallboards",
    id: "wallboards",
    icon: "board" as const,
    features: [
      { name: "Floor wallboards", status: "available" as const, description: "Live agent, queue, and outcome boards for the floor." },
      { name: "Digital waiting", status: "available" as const, description: "Digital interactions wait until the channel is org-ready in Admin → Channels." },
      { name: "Public wallboard URLs", status: "coming-soon" as const, description: "Not offered — boards are inside the authenticated app." },
    ],
  },
  {
    title: "Data & campaigns",
    id: "data",
    icon: "data" as const,
    features: [
      { name: "Contacts & lists", status: "available" as const, description: "Filtering, segmentation, and import-ready data." },
      { name: "Campaigns & scripts", status: "available" as const, description: "Templates, talk tracks, and assignment rules." },
      { name: "Interaction history", status: "available" as const, description: "Lead assignment and call history." },
    ],
  },
  {
    title: "Compliance",
    id: "compliance",
    icon: "shield" as const,
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
    icon: "chart" as const,
    features: [
      { name: "Reports & analytics", status: "available" as const, description: "Campaign performance and agent activity." },
      { name: "Real-time analytics", status: "available" as const, description: "Call outcomes and disposition trends." },
      { name: "AI dispositioning", status: "coming-soon" as const, description: "Secondary feature in development — not a homepage AI agent." },
    ],
  },
];
