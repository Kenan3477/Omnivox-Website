export const siteConfig = {
  name: "OMNIVOX",
  legalName: "Quanterae Solutions",
  tagline: "Voice operations for outbound campaigns, inbound queues, and live wallboards.",
  description:
    "UK/EU cloud contact centre: Twilio voice (preview, progressive, power + AMD, inbound ACD/IVR), a Work inbox for SMS, WhatsApp, email, live chat and social DMs, and custom wallboards. £25 a seat. Prepaid voice minutes. Digital is not in the voice wallet.",
  url: "https://omnivox-website-three.vercel.app",
  appLoginUrl: "https://omnivox.vercel.app/login",
  contactEmail: "hello@omnivox.co.uk",
  poweredBy: "Quanterae Solutions",
  platformFeePerAgent: 25,
  ratePerMinute: 0.05,
  inboundRatePerMinute: 0.04,
  workingDaysPerMonth: 22,
  topUpPacks: [50, 100, 250, 500] as const,
  locale: "en-GB",
  timezone: "Europe/London",
};

export const competitorBenchmark = {
  label: "Typical bundled dialer",
  seatPricePerMonth: 59,
  fairUseMinutesPerAgent: 3000,
  note: "Many CloudTalk-style plans advertise “unlimited” calling but fair-use caps land around ~3,000 minutes per user per month.",
} as const;

export const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/channels", label: "Channels" },
  { href: "/wallboards", label: "Wallboards" },
  { href: "/pricing", label: "Pricing" },
  { href: "/agencies", label: "Agencies" },
  { href: "/trust", label: "Trust" },
  { href: "/contact", label: "Contact" },
] as const;

export const trustMetrics = [
  { value: "£25", label: "per agent / month" },
  { value: "5p / 4p", label: "out / inbound minute" },
  { value: "8", label: "channels in catalog" },
  { value: "1 wallet", label: "voice credits" },
] as const;

export type FeatureStatus = "live" | "pilot" | "waitlist" | "coming" | "notus";

export const featureGroups: {
  title: string;
  id: string;
  summary: string;
  features: { name: string; status: FeatureStatus; description: string }[];
}[] = [
  {
    title: "Dialer",
    id: "dialer",
    summary: "Browser agents. Campaign-level dial methods. AMD so power does not burn people on voicemail.",
    features: [
      {
        name: "Manual / click-to-call",
        status: "live",
        description: "Dial from the browser workspace. Mute, hold, keypad, recording — no desktop install.",
      },
      {
        name: "Preview dial",
        status: "live",
        description: "Review the contact, skip, or dial. Used in production pilots. Agents stay in control of the list.",
      },
      {
        name: "Progressive (1:1 auto-dial)",
        status: "live",
        description: "One live attempt per available agent. No multi-line predictive. Shipped, not waitlisted.",
      },
      {
        name: "Power dial (ratio > 1, AMD-gated)",
        status: "live",
        description: "Dial ahead of agents. Answering machine detection routes humans to agents so voicemail does not eat the floor.",
      },
      {
        name: "Answering machine detection (Twilio AMD)",
        status: "live",
        description: "Human vs machine routing on auto-dial. Sell it next to Power — this is why agents are not burned on tapes.",
      },
      {
        name: "Adaptive Power",
        status: "waitlist",
        description: "Ratio adjusts from occupancy and abandon feedback. In development — join the waitlist, do not expect it on day one.",
      },
      {
        name: "Predictive (statistical / multi-line)",
        status: "waitlist",
        description: "Not shipped. Waitlist only. We will never badge Predictive as live.",
      },
    ],
  },
  {
    title: "Inbound",
    id: "inbound",
    summary: "Platform-managed UK numbers, queues, hours, IVR studio. A contact-centre inbound stack, not a spare DID.",
    features: [
      {
        name: "Platform-managed UK numbers",
        status: "live",
        description: "We provide the DIDs. You do not bring a carrier account. No BYOC.",
      },
      {
        name: "ACD, queues and overflow",
        status: "live",
        description: "Route to agents, teams, queues, overflow. Ring groups included.",
      },
      {
        name: "Business hours and after-hours",
        status: "live",
        description: "Hours, after-hours voicemail, greeting audio library.",
      },
      {
        name: "Visual IVR / flow builder",
        status: "live",
        description: "Hours, IVR menus, collect input, play audio, TTS, queue, voicemail, end call.",
      },
      {
        name: "AI Voice Agent (inbound)",
        status: "pilot",
        description:
          "Channels → Voice → AI Voice Agent. Bounded inbound experiment. Not the homepage and not a conversational-AI platform.",
      },
      {
        name: "Attended transfer, whisper, barge, take-over",
        status: "coming",
        description:
          "Conference bridge is off by default. Until it is on for a deploy, transfer / listen / whisper / barge return 501. Do not sell as live.",
      },
    ],
  },
  {
    title: "Digital inbox",
    id: "inbox",
    summary:
      "Eight channels live in the catalog. Shared Work Inbox. Catalog live is not the same as this org being receive/send ready.",
    features: [
      {
        name: "8-channel catalog",
        status: "live",
        description:
          "Admin → Channels → Channel Types. Voice, SMS, WhatsApp, live chat, email, Facebook DMs, Instagram DMs, X DMs. Tiles show catalog status, not org readiness.",
      },
      {
        name: "Shared Work Inbox",
        status: "live",
        description:
          "Work → Inbox. Open / Mine / Unassigned / Closed, channel chips. One OmniConversation per channel — SMS and WhatsApp for the same mobile stay two rows.",
      },
      {
        name: "SMS (Twilio)",
        status: "live",
        description:
          "SMS-capable DID plus campaign. UK 01/02 landlines are voice-only unless Twilio sms:true. No MMS product. Closed threads reuse then reopen.",
      },
      {
        name: "WhatsApp (Twilio WABA)",
        status: "live",
        description:
          "24h customer-care window. Free text only inside the window. Outside: approved Twilio Content SID (HX…) or SMS fallback. No stored HSM catalog, no broadcasts.",
      },
      {
        name: "Email",
        status: "live",
        description: "Mailbox + campaign. Inbound parse (SendGrid/Mailgun). Replies need SMTP. Not a ticket product.",
      },
      {
        name: "Live chat widget",
        status: "live",
        description: "Own embed at /chat-widget?key=…. Campaign required. Org from the widget key, not the visitor body. Not Intercom.",
      },
      {
        name: "Facebook / Instagram / X DMs",
        status: "live",
        description:
          "Messenger, Instagram professional, and X DMs only. Not comments, ads, feed, stories, tweets or mentions. Needs tokens on that org — catalog live ≠ this customer is live.",
      },
      {
        name: "Unified timeline / tickets / digital SLA",
        status: "notus",
        description:
          "No one-customer-one-thread. No tickets. No digital SLA widgets. Voice and Inbox are two views on /work, not the same contact card.",
      },
    ],
  },
  {
    title: "Wallboards",
    id: "wallboards",
    summary: "First-class ops display. Builder, TV mode, playlists, role templates, ~40 widgets. Built for the wall, not a browser tab.",
    features: [
      {
        name: "Drag-and-drop dashboard builder",
        status: "live",
        description: "Grid, resize, lock. Role-aware templates for agent, supervisor, dialler operations, and admin.",
      },
      {
        name: "TV / wallboard mode",
        status: "live",
        description: "Fullscreen, wall density, themes: Dark Ops, Light, High Contrast, Brand. Designed for a mounted display.",
      },
      {
        name: "Playlist rotation",
        status: "live",
        description: "Sequence boards with dwell seconds — Operations 30s → Agent capacity 45s → Campaign 60s.",
      },
      {
        name: "Share a board (view link)",
        status: "live",
        description: "Share a board with a view link. Not a public unauthenticated internet kiosk URL.",
      },
      {
        name: "Widget library (~40)",
        status: "live",
        description:
          "Scoped to Me / Campaign / Organisation. Live calls, occupancy, queue depth, AMD scoreboard, pacing, power ratio, credits, clock, Digital waiting (inbox waitingOnAgent, last 24h).",
      },
    ],
  },
  {
    title: "Data",
    id: "data",
    summary: "Campaigns, lists, DNC before dial, CSV, custom fields, reporting that belongs to voice — not a ticket product.",
    features: [
      {
        name: "Campaigns",
        status: "live",
        description: "Per-campaign dial method, CLI/caller ID, hours, retries, recording policy.",
      },
      {
        name: "Contact lists and CSV import",
        status: "live",
        description: "Filtering, segmentation, custom fields. Load the list, set the campaign, dial.",
      },
      {
        name: "DNC registry",
        status: "live",
        description: "Enforced before dial. You still own PECR/TPS as controller.",
      },
      {
        name: "Auto-dial monitor",
        status: "live",
        description: "Start, pause, stop the campaign from operations — not a hidden admin flag.",
      },
      {
        name: "Reporting and recordings",
        status: "live",
        description:
          "Campaign performance, agent activity, inbound/queue, CLI, data-list, call records, recording playback/download with ACL, exports.",
      },
      {
        name: "Zoho CRM",
        status: "live",
        description: "OAuth import. Not a 100-app marketplace.",
      },
      {
        name: "HubSpot",
        status: "live",
        description:
          "Pilot / live-narrow: OAuth plus completed calls written back as HubSpot call engagements. Not a HubSpot-native phone.",
      },
      {
        name: "Salesforce",
        status: "coming",
        description: "Not implemented. Product copy: “Salesforce is not implemented.” Not a native CRM phone.",
      },
    ],
  },
  {
    title: "Compliance",
    id: "compliance",
    summary: "UK/EU GDPR processor. Org isolation, roles, audit, recording controls. No SOC2 theatre.",
    features: [
      {
        name: "Org isolation",
        status: "live",
        description: "Separate users, contacts, campaigns, call data, and credit wallets per organisation.",
      },
      {
        name: "Roles",
        status: "live",
        description:
          "Admin, Supervisor, Agent. Supervisor listen is pilot only if the conference bridge is on for that deploy; otherwise Coming. 2FA is enforced for admins when ENABLE_2FA is on.",
      },
      {
        name: "Audit logs",
        status: "live",
        description: "Administrative actions and configuration changes, logged.",
      },
      {
        name: "Recording controls",
        status: "live",
        description: "Per organisation or campaign. Consent remains the customer’s job.",
      },
      {
        name: "2FA for admins",
        status: "live",
        description: "Enforced for admins when ENABLE_2FA is on (default on). Not advertised as a customer-facing USP.",
      },
      {
        name: "Data Processing Agreement",
        status: "live",
        description: "DPA at onboarding. You are the controller. Omnivox is the processor.",
      },
    ],
  },
  {
    title: "Credits",
    id: "credits",
    summary:
      "Prepaid voice wallet. Outbound default 5p/min, inbound default 4p/min. Digital (SMS / WhatsApp / email) is not in this wallet.",
    features: [
      {
        name: "Voice wallet",
        status: "live",
        description:
          "Inbound and outbound from the same prepaid balance. Outbound ~5p/min, inbound ~4p/min in code defaults. 1-minute minimum. Meter in Admin → Call Credits.",
      },
      {
        name: "Stripe top-up packs",
        status: "live",
        description: "£50 / £100 / £250 / £500. Visible ledger, not a mystery overage.",
      },
      {
        name: "Pilot credit grants",
        status: "live",
        description: "Admin can grant credits. No Stripe required for qualified pilots.",
      },
      {
        name: "Seat + monthly credit bundles",
        status: "live",
        description: "Optional. Same £25 seat with a committed pack when you want predictable spend.",
      },
      {
        name: "Low-balance banner",
        status: "live",
        description: "Agents see remaining credits on the work surface before the floor goes silent.",
      },
    ],
  },
];

export const comingSoon = [
  {
    name: "Predictive dial",
    note: "Statistical / multi-line predictive. isPredictiveLiveAllowed() is always false. Waitlist only.",
  },
  {
    name: "Adaptive Power live",
    note: "Ratio that learns from occupancy and abandon. ADAPTIVE_POWER_LIVE_ALLOWED default false. Waitlist.",
  },
  {
    name: "Salesforce",
    note: "Not implemented. HubSpot is live-narrow (OAuth + call write-back). Zoho import is live.",
  },
  {
    name: "Native iOS / Android agent app",
    note: "Expo WebView / PWA-ish only. Not in the stores.",
  },
  {
    name: "AI dispositioning / conversation intelligence",
    note: "AI Voice Agent is a bounded inbound Pilot. Do not buy us as an AI platform.",
  },
  {
    name: "Conference transfer / listen / whisper / barge",
    note: "DIALER_CONFERENCE_BRIDGE default OFF. 501 until that deploy turns it on.",
  },
] as const;

export const notUs = [
  "One customer, one timeline, any channel",
  "Tickets / Zendesk-style CX",
  "Instagram or Facebook comments, ads, feed, story replies",
  "WhatsApp broadcasts or a stored HSM catalog",
  "MMS",
  "TikTok, LinkedIn, Telegram",
  "Digital SLA widgets",
  "Public unauthenticated wallboard URLs / HTML injection",
  "Native WhatsApp without Twilio WABA",
  "SOC 2 / ISO 27001 / PCI / SSO/SAML",
] as const;

export const wallboardWidgets = [
  { name: "Live calls", scope: "Organisation", why: "How many conversations are up right now." },
  { name: "Agents online", scope: "Organisation", why: "Signed in vs scheduled." },
  { name: "Available", scope: "Organisation", why: "Ready to take the next live connect." },
  { name: "On call", scope: "Organisation", why: "Talk time on the floor." },
  { name: "ACW", scope: "Organisation", why: "Wrap-up still blocking the next dial." },
  { name: "Occupancy", scope: "Organisation", why: "Are you under-staffed or burning agents." },
  { name: "Idle rate", scope: "Organisation", why: "Time waiting on supply or pacing." },
  { name: "Queue depth", scope: "Organisation", why: "Inbound voice waiting." },
  { name: "Digital waiting", scope: "Organisation", why: "Inbox waitingOnAgent, last 24h. DIGITAL_WAITING is a real module — not per-channel WhatsApp tiles." },
  { name: "Campaign performance", scope: "Campaign", why: "Connects, outcomes, remaining supply." },
  { name: "Connection rate", scope: "Campaign", why: "Human answers vs attempts." },
  { name: "Sales today", scope: "Campaign", why: "Dispositions that pay the floor." },
  { name: "AMD scoreboard", scope: "Campaign", why: "Human vs machine vs unknown." },
  { name: "Pacing status", scope: "Campaign", why: "Running, paused, stopped." },
  { name: "Power ratio", scope: "Campaign", why: "How hard the dialler is pushing." },
  { name: "Inflight calls", scope: "Campaign", why: "Attempts in flight before an agent is free." },
  { name: "Contact supply", scope: "Campaign", why: "How long the list will last." },
  { name: "Callbacks due", scope: "Me / Organisation", why: "Promises that must be kept today." },
  { name: "Credits remaining", scope: "Organisation", why: "The wallet on the wall, not buried in billing." },
  { name: "Clock", scope: "Organisation", why: "Europe/London on the TV. Shift discipline." },
] as const;

export const wallboardThemes = ["Dark Ops", "Light", "High Contrast", "Brand"] as const;

export const wallboardTemplates = [
  {
    role: "Dialler operations",
    use: "Campaign pacing, AMD, inflight, supply, power ratio.",
  },
  {
    role: "Supervisor",
    use: "Occupancy, available, ACW, queue depth, callbacks due.",
  },
  {
    role: "Agent",
    use: "My status, my callbacks, my sales today.",
  },
  {
    role: "Admin",
    use: "Credits remaining, agents online, org-level live calls.",
  },
] as const;

export const agentStatuses = [
  "Available",
  "Unavailable",
  "Break",
  "Lunch",
  "Training",
  "Meeting",
] as const;

export const pricingAdvantages = [
  {
    title: "Pay for usage, not empty seats",
    description:
      "£25 platform fee per active seat — telephony on prepaid credits. Part-time agents and seasonal ramps do not subsidise a fair-use pool.",
  },
  {
    title: "No fair-use fiction",
    description:
      "Competitors often bundle “unlimited” minutes with hidden caps (~3,000 min/user/month). We show the meter in Admin → Call Credits.",
  },
  {
    title: "Wallboards and inbound on every seat",
    description:
      "Custom dashboards, TV mode, playlists, Digital waiting, platform DIDs, queues, IVR and the Work Inbox catalog are included. Not a premium SKU.",
  },
  {
    title: "Optional bundles when you want a budget",
    description:
      "Same £25 seat with a committed monthly credit pack (£250 / £500 typical). Still metered. Still visible.",
  },
] as const;

export const bundledPlanOptions = [
  {
    name: "Metered (default)",
    bestFor: "Variable volume, part-time agents, pilots",
    detail: "£25/seat + top up voice credits as you go (~5p outbound / ~4p inbound). Digital is not in that wallet.",
  },
  {
    name: "Seat + credit bundle",
    bestFor: "Predictable monthly telephony spend",
    detail: "Same £25/seat with a committed monthly credit pack (e.g. £250 or £500). Still metered — you see every minute in the ledger.",
  },
] as const;

export const pricingBreakdown = [
  {
    label: "Platform",
    value: "£25 per agent / month",
    detail: "Workspace, dial methods, inbound, Work Inbox, wallboards, DNC, recording, roles. Sales policy, not a Stripe seat SKU.",
  },
  {
    label: "Telephony",
    value: "Prepaid credits",
    detail: "We run Twilio. No customer carrier account. No BYOC.",
  },
  {
    label: "Outbound",
    value: "~5p per connected minute",
    detail: "One-minute minimum per call",
  },
  {
    label: "Inbound",
    value: "~4p per connected minute",
    detail: "Code default. Same voice wallet as outbound. Confirm on the demo if a contract uses a different inbound rate.",
  },
  {
    label: "SMS / WhatsApp / email",
    value: "Not in the voice wallet",
    detail: "No per-message debit in Call Credits. Do not invent a WhatsApp pence rate.",
  },
  {
    label: "Minimum top-up",
    value: "£50",
    detail: "Packs: £50 · £100 · £250 · £500 via Stripe in Admin. Custom top-up £1–500 also allowed.",
  },
  {
    label: "Teams",
    value: "1–20+ agents",
    detail: "Outbound sales, inbound DIDs, agencies — same pricing",
  },
] as const;

export const pricingIncludes = [
  "Manual, preview, progressive and power dial",
  "Twilio AMD on auto-dial",
  "Work Inbox for SMS, WhatsApp, email, chat, social DMs",
  "Browser agent workspace",
  "Campaigns, lists, CSV, DNC",
  "Inbound DIDs, queues, hours, IVR studio",
  "Custom wallboards, TV mode, playlists, Digital waiting",
  "Reporting, recordings (ACL), exports",
  "Admin, Supervisor and Agent roles",
] as const;

export const faqItems = [
  {
    question: "Do I need a carrier?",
    answer:
      "No. Omnivox includes platform-managed telephony on Twilio. You buy prepaid call credits and dial. There is no BYOC and no multi-carrier option — we run the stack.",
  },
  {
    question: "How are minutes billed?",
    answer:
      "Inbound uses the same prepaid wallet as outbound, at approximately 4p per connected minute (code default). Outbound is approximately 5p. One-minute minimum per call. Digital (SMS / WhatsApp / email) is not in that wallet. Top up in Admin → Call Credits via Stripe packs (£50 / £100 / £250 / £500), or receive a pilot grant.",
  },
  {
    question: "Is predictive live?",
    answer:
      "No. Statistical / multi-line predictive is not shipped. Manual, preview, progressive (1:1) and power (ratio > 1, AMD-gated) are live. Adaptive Power is in development. Predictive is waitlist only — we will not badge it as available.",
  },
  {
    question: "Do you have wallboards?",
    answer:
      "Yes — they are a first-class product. Drag-and-drop builder, dedicated TV mode, playlist rotation, shareable view links, role-aware templates, and a widget library of about 40 tiles including Digital waiting (inbox waitingOnAgent, last 24h). Not per-channel WhatsApp tiles. Not public unauthenticated kiosk URLs.",
  },
  {
    question: "Do you have WhatsApp, SMS, email and chat?",
    answer:
      "Yes — in the Work Inbox, not as a Genesys/Zendesk suite. Admin → Channels → Channel Types lists eight live catalog tiles. An org is only receive/send ready after numbers, WABA, mailbox, widget key or social tokens are configured. Catalog live ≠ this customer can take WhatsApp tomorrow. WhatsApp uses Twilio WABA and Meta’s 24h window. DMs only for Facebook, Instagram and X — not comments. No tickets, no unified timeline, no MMS.",
  },
  {
    question: "Is this a conversational AI platform?",
    answer:
      "No. AI Voice Agent is a bounded inbound Pilot under Channels → Voice. AI dispositioning, live coaching transcripts and RAG are Coming — not the homepage. We are not an Intercom or conversational-AI product.",
  },
  {
    question: "What about GDPR and a DPA?",
    answer:
      "You are the data controller. Omnivox (operated by Quanterae Solutions) is the data processor. A DPA is provided at onboarding. We align processor obligations with UK GDPR and EU GDPR. PECR and TPS remain your job.",
  },
  {
    question: "Who is responsible for recording consent?",
    answer:
      "You are. Recording can be enabled per organisation or campaign. Playback and download sit behind ACL. Informing callers and setting retention is the controller’s responsibility.",
  },
  {
    question: "Can I pilot first?",
    answer:
      "Yes. Qualified pilots get same-day onboarding, £50 free call credits, and white-glove setup. Admin can grant credits so Stripe is not required to start.",
  },
  {
    question: "Is there a native mobile Voice app?",
    answer:
      "No App Store / Play Store native Voice app. Agents work in the browser (WebRTC). There is a web/PWA-style wrapper only. Native iOS/Android is on the waitlist.",
  },
  {
    question: "Which integrations exist?",
    answer:
      "Stripe for billing, Twilio for voice and WhatsApp/SMS, Zoho CRM via OAuth import. HubSpot is live-narrow (OAuth + completed calls → call engagements). Salesforce is not implemented. Webhooks and API keys have a UI; we do not sell a public developer platform yet.",
  },
  {
    question: "Why not just buy an “unlimited minutes” plan?",
    answer:
      "Bundled plans look simple but often hide fair-use caps (~3,000 minutes per user/month) and high per-seat fees (£50–90+). Omnivox separates a £25 platform fee from prepaid voice at ~5p outbound / ~4p inbound. Digital is not in that meter. The voice ledger is always visible.",
  },
  {
    question: "Do you offer bundled or flat-rate plans?",
    answer:
      "Optionally. Default is metered (£25/seat + credits). If you want predictable spend, we quote seat + monthly credit bundles. You still see every minute in the ledger.",
  },
] as const;

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
        "Hosts and processes data only to deliver the contact-centre service",
        "Provides org isolation, access controls, and audit logging",
        "Signs a DPA covering security, subprocessors, and breach notification",
        "Supports your compliance workflows — DNC, recording controls, exports on request",
      ],
    },
  },
  controls: [
    {
      title: "Org-level isolation",
      description: "Each customer organisation has separate users, contacts, campaigns, call records, and credit wallets.",
    },
    {
      title: "DNC registry",
      description: "Maintain do-not-call lists inside the platform and block dialling to flagged numbers before the attempt.",
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
        "Built for UK and European outbound and inbound voice teams. We align processor obligations with UK GDPR and EU GDPR. Subprocessor and hosting details are listed in your DPA.",
    },
    {
      title: "Telemarketing & PECR",
      content:
        "You must comply with PECR, TPS/CTPS, and sector-specific rules for outbound calling. Omnivox does not replace legal advice — we give you tools (DNC, preview dial, audit trail) to run campaigns accountably.",
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
        "Encrypted transport, authenticated access, and role-scoped permissions. Administrative changes are logged. 2FA is live for admins when ENABLE_2FA is on (default on). We do not claim SOC 2, ISO 27001, PCI-DSS, or SSO/SAML. Ask us for the current security posture during procurement.",
    },
    {
      title: "Breaches & enquiries",
      content:
        "Processor breach notification terms are in the DPA. For privacy enquiries or to exercise rights relating to data we process on your behalf, contact hello@omnivox.co.uk.",
    },
  ],
} as const;

export const proofPoints = [
  {
    metric: "Same day",
    label: "preview-dial go-live",
    detail: "Qualified pilots have been provisioned and dialling preview the same afternoon — not a six-week implementation.",
  },
  {
    metric: "Metered",
    label: "prepaid wallet in Admin",
    detail: "Every connected voice minute lands in Admin → Call Credits. Outbound ~5p, inbound ~4p. Agents see a low-balance banner on Work. Digital is not in this wallet.",
  },
  {
    metric: "Production",
    label: "preview dial in live pilots",
    detail: "Preview is not a demo toggle. Teams review, skip, or dial, then disposition in the same flow.",
  },
  {
    metric: "Inbox",
    label: "SMS / WhatsApp in Work",
    detail: "Shared OmniConversation inbox is in production code and in PRs #258 / #259. WhatsApp tells the truth about Meta’s 24h window.",
  },
  {
    metric: "Multi-org",
    label: "agencies, isolated clients",
    detail: "Separate users, contacts, campaigns, call data and credit wallets per client organisation. £25/seat per client agent.",
  },
] as const;

export const comparisonRows = [
  {
    label: "Seat price",
    omnivox: "£25 / agent / month",
    typical: "Often £50–90+ / seat",
  },
  {
    label: "Minutes",
    omnivox: "~5p outbound / ~4p inbound, 1-min minimum. Digital not in the wallet.",
    typical: "“Unlimited” with ~3k min/user fair-use",
  },
  {
    label: "Dial methods live today",
    omnivox: "Manual, preview, progressive, power + AMD",
    typical: "Click-to-call strong; campaign power/AMD weaker or add-on",
  },
  {
    label: "Predictive",
    omnivox: "Waitlist — not shipped",
    typical: "Connex-class platforms sell live statistical predictive at 2–3× seat cost",
  },
  {
    label: "Inbound",
    omnivox: "Platform DIDs, queues, hours, visual IVR",
    typical: "Numbers yes; full ACD/IVR varies, often a different SKU",
  },
  {
    label: "Wallboards",
    omnivox: "Builder, TV mode, playlists, ~40 widgets including Digital waiting",
    typical: "KPI tiles in-app; few true floor TVs for dialler ops",
  },
  {
    label: "Channels",
    omnivox: "8-channel catalog + Work Inbox. Catalog live ≠ org-ready. No unified timeline.",
    typical: "CloudTalk/Aircall win CRM + mobile; Connex sells the fuller omnichannel suite",
  },
  {
    label: "CRM",
    omnivox: "Zoho import live; HubSpot call write-back (narrow); Salesforce not implemented",
    typical: "Stronger native Salesforce / HubSpot / mobile apps",
  },
  {
    label: "Onboarding",
    omnivox: "Same-day pilot, £50 credits, white-glove",
    typical: "Weeks of carrier, numbers, and project theatre",
  },
] as const;

export const competitorNotes = [
  {
    name: "CloudTalk / Aircall",
    take: "They win CRM marketplace and native mobile. We win campaign lists, DNC, preview/progressive/power, AMD, floor wallboards, and WhatsApp with Meta’s 24h rules. They are phone products; we are contact-centre ops. Not “voice-only vs omnichannel”.",
  },
  {
    name: "Connex One",
    take: "The fuller suite: WFM, live predictive, deeper digital. Omnivox is a cheaper owned Twilio stack with a real but thinner inbox. Do not buy Connex “because they have WhatsApp” — we have WhatsApp (Twilio, 24h). Buy them for suite depth.",
  },
  {
    name: "“Unlimited” seats",
    take: "Usually ~3,000 minutes per user fair-use and £50–90 a seat. Fine at average volume. Painful when the floor actually dials.",
  },
] as const;

export const whoBuys = [
  {
    title: "B2B outbound teams",
    detail: "Preview, progressive and power. Lists, DNC, dispositions. Agents who live in a work queue, not a CRM sidebar.",
  },
  {
    title: "Small contact centres",
    detail: "Outbound plus inbound on platform DIDs, plus a Work Inbox for SMS/WhatsApp/email/chat if those assets are configured. Queues, hours, IVR, one voice wallet.",
  },
  {
    title: "Outbound agencies",
    detail: "Multiple client orgs, isolated data and credits, same-day onboard, £25/seat per client agent.",
  },
] as const;

export const whoDoesNotBuy = [
  "Teams that need comments, tickets, broadcasts, or one customer / one timeline",
  "Salesforce- or HubSpot-native phone as the buying reason",
  "Native mobile Voice / App Store presence",
  "Live statistical predictive on day one",
  "WhatsApp without Twilio WABA, or a stored HSM catalog",
] as const;
