export type ChatDoc = {
  id: string;
  title: string;
  tags: string[];
  answer: string;
};

export const chatDocs: ChatDoc[] = [
  {
    id: "what",
    title: "What Omnivox is",
    tags: ["what", "omnivox", "product", "platform", "contact centre", "dialer", "who"],
    answer:
      "Omnivox is a UK/EU cloud contact centre for outbound sales and inbound voice. Agents work in the browser on Twilio — no desktop install. Closest honest analogue: a modern owned outbound dialer plus inbound ACD, with custom wallboards. It is not a conversational-AI platform, not omnichannel, not CloudTalk, and not Connex One.",
  },
  {
    id: "not",
    title: "What Omnivox is not",
    tags: ["omnichannel", "whatsapp", "sms", "email", "chat", "instagram", "ai", "predictive live", "salesforce phone"],
    answer:
      "Omnivox does not offer WhatsApp, SMS inbox, email, live chat, or Instagram. It is not an “advanced conversational AI platform”. Predictive dial is not live. There is no native App Store Voice app, no 100-app marketplace, and no shipped white-label customer branding. Salesforce and HubSpot are coming soon — Zoho CRM import is live today.",
  },
  {
    id: "pricing",
    title: "Pricing",
    tags: ["price", "pricing", "cost", "seat", "£25", "25", "bundle", "unlimited", "fair use"],
    answer:
      "£25 per agent per month platform fee. Prepaid call credits at about 5p per connected minute, inbound and outbound, one wallet, one-minute minimum. Stripe top-up packs: £50, £100, £250, £500. Optional seat + monthly credit bundles for predictable spend. “Unlimited” competitor seats are typically £50–90 with ~3,000 minutes per user fair-use.",
  },
  {
    id: "minutes",
    title: "How minutes are billed",
    tags: ["minutes", "credits", "5p", "wallet", "billing", "top up", "stripe", "connected"],
    answer:
      "Inbound and outbound both deduct from one prepaid wallet at ~5p per connected minute, with a one-minute minimum. Usage shows in Admin → Call Credits. Top up via Stripe packs or receive a pilot credit grant (no Stripe required for qualified pilots). We run Twilio — you do not bring your own carrier.",
  },
  {
    id: "carrier",
    title: "Do I need a carrier?",
    tags: ["carrier", "byoc", "twilio", "did", "number", "telecom", "provider"],
    answer:
      "No. Omnivox includes platform-managed UK numbers and telephony. There is no BYOC and no multi-carrier option. We run Twilio. You buy credits and dial.",
  },
  {
    id: "dial",
    title: "Dial methods",
    tags: ["preview", "progressive", "power", "manual", "click to call", "adaptive", "predictive", "amd", "dial"],
    answer:
      "Live today: manual / click-to-call, preview (review, skip, or dial — used in production pilots), progressive (1:1 auto-dial), and power (ratio > 1, AMD-gated). Adaptive Power (ratio that adjusts from occupancy/abandon) is in development / waitlist — do not headline it. Predictive (statistical / multi-line) is not shipped. Waitlist only. Never treat predictive as live.",
  },
  {
    id: "amd",
    title: "Answering machine detection",
    tags: ["amd", "voicemail", "machine", "answering", "human"],
    answer:
      "Twilio AMD is live. Human vs machine routing so agents are not burned on voicemail. It sits next to Power dial — that is why auto-dial is usable on a real floor.",
  },
  {
    id: "wallboards",
    title: "Wallboards",
    tags: ["wallboard", "dashboard", "tv", "playlist", "widget", "kpi", "floor"],
    answer:
      "Custom wallboards are a first-class product. Drag-and-drop builder (grid, resize, lock), TV mode (fullscreen, wall density, themes: Dark Ops, Light, High Contrast, Brand), playlist rotation with dwell seconds, shareable view links, and role-aware templates (agent, supervisor, dialler operations, admin). About 40 widgets scoped to Me / Campaign / Organisation — live calls, occupancy, queue depth, AMD scoreboard, power ratio, credits remaining, clock, and more. Built for a wall-mounted display. Not public unauthenticated kiosk URLs, not custom HTML/CSS injection, not digital-channel widgets.",
  },
  {
    id: "inbound",
    title: "Inbound / ACD / IVR",
    tags: ["inbound", "acd", "ivr", "queue", "did", "hours", "voicemail", "ring group", "flow"],
    answer:
      "Inbound is a contact-centre stack, not a spare number. Platform-managed UK DIDs, route to agents/teams/queues/overflow, ring groups, business hours and after-hours voicemail, greeting audio library, and a visual flow builder (hours, IVR menus, collect input, play audio, TTS, queue, voicemail, end call).",
  },
  {
    id: "workspace",
    title: "Agent workspace",
    tags: ["agent", "workspace", "softphone", "webrtc", "disposition", "callback", "status"],
    answer:
      "Browser WebRTC softphone — no desktop install. Click-to-call, mute/hold/keypad/recording, contact card, campaign scripts/talk tracks where configured, structured dispositions and notes, callback scheduling, interaction history (queued / allocated / outcomed / unallocated), agent statuses (Available, Unavailable, Break, Lunch, Training, Meeting), and a low-balance credit banner.",
  },
  {
    id: "gdpr",
    title: "GDPR, DPA, recording",
    tags: ["gdpr", "dpa", "privacy", "controller", "processor", "recording", "consent", "tps", "pecr", "dnc"],
    answer:
      "You (the customer) are the data controller. Omnivox is the data processor. A DPA is provided at onboarding. UK/EU GDPR. PECR and TPS remain your job. DNC is enforced before dial. Recording is configurable per org or campaign; consent is yours. We do not claim SOC 2, ISO 27001, PCI-DSS, SSO/SAML, or enforced company-wide 2FA.",
  },
  {
    id: "pilot",
    title: "Pilot and demo",
    tags: ["pilot", "demo", "onboard", "credits", "same day", "trial"],
    answer:
      "Qualified pilots get same-day onboarding, £50 free call credits, and white-glove setup. Admin can grant credits so Stripe is not required to start. Book a demo from the Contact page or email hello@omnivox.co.uk.",
  },
  {
    id: "agencies",
    title: "Agencies",
    tags: ["agency", "agencies", "multi-org", "client", "invoice"],
    answer:
      "Agencies run multiple client organisations: separate users, contacts, campaigns, call data, and credit wallets per client. Same-day onboard, pilot credit grants, manual invoicing possible. £25/seat per client agent. Wallboards can sit on each client floor.",
  },
  {
    id: "integrations",
    title: "Integrations",
    tags: ["integration", "zoho", "salesforce", "hubspot", "api", "webhook", "stripe"],
    answer:
      "Live: Stripe (billing), Twilio (voice), Zoho CRM (OAuth import). Salesforce and HubSpot are coming soon. Webhooks and API keys have a UI; Omnivox does not sell a public developer platform yet.",
  },
  {
    id: "mobile",
    title: "Mobile",
    tags: ["mobile", "ios", "android", "app store", "pwa"],
    answer:
      "Agents work in the browser (WebRTC). There is a web/PWA-style wrapper only. There is no native iOS/Android Voice app and no App Store presence. Native mobile is on the waitlist.",
  },
  {
    id: "coaching",
    title: "Supervisor tools",
    tags: ["whisper", "barge", "takeover", "listen", "coaching", "ai disposition"],
    answer:
      "Supervisor listen exists. Whisper, barge, and take-over are not sold as live coaching. AI dispositioning, conversation intelligence, and live coaching transcripts are coming / waitlist — not the product identity.",
  },
  {
    id: "signin",
    title: "Sign in",
    tags: ["sign in", "login", "account"],
    answer:
      "Use the Sign in button in the header. It opens the current Omnivox app login. For a new org, book a demo rather than self-serve signup.",
  },
  {
    id: "contact",
    title: "Contact",
    tags: ["email", "hello", "contact", "sales"],
    answer:
      "Email hello@omnivox.co.uk or use the form on /contact. We typically reply within one UK business day — often the same day.",
  },
];

export const suggestedQuestions = [
  "Is predictive live?",
  "Do you have wallboards?",
  "How are minutes billed?",
  "Do I need a carrier?",
  "What’s included for £25?",
];
