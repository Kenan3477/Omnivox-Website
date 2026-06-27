export const siteConfig = {
  name: "Omnivox",
  tagline: "The dialer that just works — no Twilio, no telecom headaches.",
  description:
    "Omnivox is an all-in-one agent workspace for outbound sales and inbound handling, with prepaid telephony credits, compliance built in, and onboarding in hours — not weeks.",
  url: "https://omnivox.co.uk",
  contactEmail: "hello@omnivox.co.uk",
};

export const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/agencies", label: "For Agencies" },
  { href: "/trust", label: "Trust & Security" },
  { href: "/contact", label: "Contact" },
];

export const faqItems = [
  {
    question: "Do I need a Twilio account?",
    answer:
      "No. Omnivox runs telephony on your behalf. You buy prepaid call credits and dial — no carrier account, no webhook plumbing, no separate telecom bill.",
  },
  {
    question: "How are calls charged?",
    answer:
      "Outbound calls are billed at approximately 5p per connected minute, with a one-minute minimum per call. Inbound calls include 500 minutes per month per organisation on the platform fee; overage is billed from your credit wallet at approximately 4p per minute.",
  },
  {
    question: "What dial modes are ready today?",
    answer:
      "Manual dial and preview dial are available now and pilot-proven. Progressive and predictive auto-dial at multi-agent scale is in development — join the waitlist if that is your priority.",
  },
  {
    question: "Can I try before committing?",
    answer:
      "Yes. We offer pilot onboarding with granted call credits and white-glove setup. No Stripe payment required for pilots — we provision your organisation and credits manually.",
  },
  {
    question: "Is recording included?",
    answer:
      "Yes. Call recording is included and configurable per organisation or campaign. Recording consent remains your responsibility as the data controller.",
  },
  {
    question: "Can I get inbound numbers?",
    answer:
      "Yes. Omnivox supports inbound DIDs with routing to agents, queues, voicemail, business hours, and greeting audio. 500 inbound minutes per month are included on the platform fee.",
  },
  {
    question: "What about GDPR and DNC compliance?",
    answer:
      "DNC registry tools and audit logs are built in. Role-based access, IP allowlisting, and recording controls help you stay compliant. You own your consent processes and data handling obligations.",
  },
  {
    question: "How fast is onboarding?",
    answer:
      "Same-day for pilots. Bring your contact list and campaign brief — we provision your organisation, credits, and agent workspace so your team can start dialling within hours, not weeks.",
  },
];

export const pricingTiers = [
  {
    name: "Starter",
    description: "For small teams getting started with outbound",
    agents: "1–5 agents",
    price: "From £59",
    priceNote: "per agent / month",
    features: [
      "Manual & preview dial",
      "Browser-based agent workspace",
      "Campaign management",
      "Prepaid call credits",
      "DNC registry & audit logs",
      "Call recording (policy-based)",
    ],
    cta: "Book a demo",
    highlighted: false,
  },
  {
    name: "Team",
    description: "For growing sales teams with inbound needs",
    agents: "6–20 agents",
    price: "From £59",
    priceNote: "per agent / month",
    features: [
      "Everything in Starter",
      "500 inbound minutes included",
      "Supervisor tools & reports",
      "Inbound routing & queues",
      "Business hours & voicemail",
      "Low-balance credit alerts",
    ],
    cta: "Book a demo",
    highlighted: true,
  },
  {
    name: "Agency / Custom",
    description: "For agencies and multi-org deployments",
    agents: "Custom",
    price: "Let's talk",
    priceNote: "volume pricing",
    features: [
      "Multi-organisation management",
      "Custom inbound allowances",
      "Pilot credit grants per client",
      "Manual invoicing available",
      "Dedicated onboarding support",
      "White-label-ready positioning",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

export const featureGroups = [
  {
    title: "Dialing",
    icon: "phone",
    features: [
      { name: "Manual dial", status: "available" as const, description: "Click-to-call with live call controls from the browser workspace." },
      { name: "Preview dial", status: "available" as const, description: "Review each contact, skip or dial — proven in production pilots." },
      { name: "Campaign dial methods", status: "available" as const, description: "Configure dial behaviour per campaign with flexible assignment." },
      { name: "AMD-assisted connect", status: "pilot" as const, description: "Smart connect reduces wasted agent time on answering machines." },
      { name: "Progressive / predictive dial", status: "coming-soon" as const, description: "Multi-agent auto-dial at scale — in development, waitlist open." },
    ],
  },
  {
    title: "Work surface",
    icon: "desktop",
    features: [
      { name: "Interaction queues", status: "available" as const, description: "Real-time queues: queued, allocated, outcomed, unallocated." },
      { name: "Dispositions & call notes", status: "available" as const, description: "Outcome every call with structured dispositioning and notes." },
      { name: "Customer info card", status: "available" as const, description: "Full contact context at your fingertips during every call." },
      { name: "Search & filter", status: "available" as const, description: "Find contacts and interactions quickly across your data." },
      { name: "Agent mobile access", status: "beta" as const, description: "Native mobile app complements the web PWA workspace." },
    ],
  },
  {
    title: "Telephony wallet",
    icon: "wallet",
    features: [
      { name: "Prepaid call credits", status: "available" as const, description: "Top up via Stripe packs: £50, £100, £250, £500." },
      { name: "Transparent usage", status: "available" as const, description: "~5p/min outbound, billable per connected minute." },
      { name: "Admin credit grants", status: "available" as const, description: "Grant pilot credits manually — no Stripe required for pilots." },
      { name: "Usage ledger", status: "available" as const, description: "Full visibility into credit spend and call costs." },
      { name: "Low-balance alerts", status: "available" as const, description: "Banner on Work when credits run low so agents are never surprised." },
    ],
  },
  {
    title: "Inbound",
    icon: "inbound",
    features: [
      { name: "Inbound DIDs", status: "available" as const, description: "Platform-managed phone numbers — no Twilio account needed." },
      { name: "Routing & queues", status: "available" as const, description: "Route inbound calls to agents, teams, or queues." },
      { name: "Business hours", status: "available" as const, description: "Set operating hours with after-hours handling." },
      { name: "Voicemail & greetings", status: "available" as const, description: "Custom greeting audio and voicemail capture." },
      { name: "500 min/month included", status: "available" as const, description: "Inbound allowance per organisation on the platform fee." },
    ],
  },
  {
    title: "Data",
    icon: "data",
    features: [
      { name: "Contacts & lists", status: "available" as const, description: "Manage contact data with filtering and list segmentation." },
      { name: "Campaigns", status: "available" as const, description: "Create campaigns with dial methods, scripts, and assignment rules." },
      { name: "Lead assignment", status: "available" as const, description: "Assign leads to agents with full interaction history." },
      { name: "Templates & scripts", status: "available" as const, description: "Talk tracks and templates to keep agents on message." },
      { name: "Import-ready", status: "available" as const, description: "Bring your existing contact data and start dialling." },
    ],
  },
  {
    title: "Compliance",
    icon: "shield",
    features: [
      { name: "DNC registry", status: "available" as const, description: "Do-not-call list management built into the platform." },
      { name: "Audit logs", status: "available" as const, description: "Full audit trail of platform activity and changes." },
      { name: "Recording controls", status: "available" as const, description: "Org and campaign-level recording policies." },
      { name: "Role-based access", status: "available" as const, description: "Admin, Supervisor, and Agent roles with appropriate permissions." },
      { name: "IP allowlisting", status: "available" as const, description: "Restrict platform access to approved IP addresses." },
    ],
  },
  {
    title: "Insights",
    icon: "chart",
    features: [
      { name: "Reports & analytics", status: "available" as const, description: "Campaign performance, agent activity, and call outcomes." },
      { name: "Call outcomes", status: "available" as const, description: "Track disposition trends across campaigns and teams." },
      { name: "Agent activity", status: "available" as const, description: "Supervisor visibility into team performance." },
      { name: "Flow automation", status: "available" as const, description: "Build voice channel automations with the flow builder." },
      { name: "AI dispositioning", status: "coming-soon" as const, description: "Advanced sentiment and auto-disposition — secondary feature in development." },
    ],
  },
];
