/** Honest product surfaces for the marketing site. Catalog live ≠ org-ready. */

export const appOrigin = "https://omnivox.vercel.app";
export const appWorkUrl = `${appOrigin}/work`;
export const appLoginUrl = `${appOrigin}/login`;

export const dialModes = [
  {
    id: "preview",
    label: "Preview",
    status: "live" as const,
    summary: "Review the card, skip or dial. Disposition in the same flow.",
  },
  {
    id: "progressive",
    label: "Progressive",
    status: "live" as const,
    summary: "One line per agent. The next record dials when the previous call ends.",
  },
  {
    id: "power",
    label: "Power",
    status: "live" as const,
    summary: "Agents stay on the line. AMD drops machines so they hear people, not greetings.",
  },
  {
    id: "predictive",
    label: "Predictive",
    status: "waitlist" as const,
    summary: "Predictive Live is on the waitlist — not enabled in production.",
  },
] as const;

export const channels = [
  {
    id: "voice",
    name: "Voice",
    stack: "Twilio",
    ready: "live" as const,
    note: "Preview, progressive, power + AMD. Inbound ACD / IVR.",
  },
  {
    id: "sms",
    name: "SMS",
    stack: "Twilio",
    ready: "catalog" as const,
    note: "Work Inbox threads. Not billed from Call Credits.",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    stack: "Twilio",
    ready: "catalog" as const,
    note: "Customer-care sessions, 24-hour window. No HSM template broadcasts.",
  },
  {
    id: "email",
    name: "Email",
    stack: "Inbox",
    ready: "catalog" as const,
    note: "Threaded in Work Inbox. Not in the voice wallet.",
  },
  {
    id: "chat",
    name: "Live chat",
    stack: "Inbox",
    ready: "catalog" as const,
    note: "Web chat into the same agent workspace.",
  },
  {
    id: "facebook",
    name: "Facebook",
    stack: "DMs",
    ready: "catalog" as const,
    note: "Messenger threads in Work Inbox.",
  },
  {
    id: "instagram",
    name: "Instagram",
    stack: "DMs",
    ready: "catalog" as const,
    note: "Instagram DMs in Work Inbox.",
  },
  {
    id: "x",
    name: "X",
    stack: "DMs",
    ready: "catalog" as const,
    note: "X DMs in Work Inbox.",
  },
] as const;

export const proofPoints = [
  {
    metric: "Same day",
    label: "pilot go-live",
    detail: "Org provisioned, starter credits granted, agents on preview the same afternoon.",
  },
  {
    metric: "Prepaid",
    label: "visible meter",
    detail: "Every connected voice minute in Admin → Call Credits. Digital is not in this wallet.",
  },
  {
    metric: "24h",
    label: "WhatsApp honesty",
    detail: "Customer-care sessions only. We do not sell template broadcasts or an HSM catalog.",
  },
] as const;

export type CompareCell =
  | { kind: "yes"; note?: string }
  | { kind: "no"; note?: string }
  | { kind: "limited"; note?: string }
  | { kind: "waitlist"; note?: string }
  | { kind: "text"; text: string };

export const compareVendors = [
  { id: "omnivox", name: "OMNIVOX", highlight: true },
  { id: "cloudtalk", name: "CloudTalk", highlight: false },
  { id: "aircall", name: "Aircall", highlight: false },
  { id: "connex", name: "Connex One", highlight: false },
] as const;

export const compareRows: { label: string; hint?: string; cells: CompareCell[] }[] = [
  {
    label: "Preview / Progressive / Power",
    hint: "AMD on progressive and power",
    cells: [
      { kind: "yes", note: "Live, with AMD" },
      { kind: "limited", note: "Preview-class" },
      { kind: "limited", note: "Click-to-call" },
      { kind: "yes", note: "Full dialler" },
    ],
  },
  {
    label: "Predictive Live",
    cells: [
      { kind: "waitlist", note: "Not in production" },
      { kind: "no" },
      { kind: "no" },
      { kind: "yes" },
    ],
  },
  {
    label: "Campaign lists + DNC",
    cells: [{ kind: "yes" }, { kind: "limited" }, { kind: "limited" }, { kind: "yes" }],
  },
  {
    label: "Work Inbox",
    hint: "SMS, WhatsApp 24h, email, chat, social DMs",
    cells: [
      { kind: "yes", note: "8 channels in catalog" },
      { kind: "limited", note: "Templates / limited" },
      { kind: "limited" },
      { kind: "yes", note: "Full suite" },
    ],
  },
  {
    label: "Floor wallboards",
    cells: [{ kind: "yes" }, { kind: "limited" }, { kind: "limited" }, { kind: "yes" }],
  },
  {
    label: "Native iOS / Android",
    cells: [{ kind: "no", note: "Browser workspace" }, { kind: "yes" }, { kind: "yes" }, { kind: "yes" }],
  },
  {
    label: "CRM marketplace",
    cells: [{ kind: "no" }, { kind: "yes" }, { kind: "yes" }, { kind: "yes" }],
  },
  {
    label: "Seat + telephony",
    cells: [
      { kind: "text", text: "£25/seat + ~5p / 4p" },
      { kind: "text", text: "Higher seat + bundled mins" },
      { kind: "text", text: "Higher seat + bundled mins" },
      { kind: "text", text: "Enterprise quote" },
    ],
  },
];

export const compareFootnote =
  "Category-level contrast, not a vendor quote. CloudTalk and Aircall win native mobile and CRM app stores. Connex One is the fuller suite (WFM, live predictive). OMNIVOX is a thinner Twilio stack: campaign dialling, prepaid voice, floor wallboards, and a Work Inbox with WhatsApp 24-hour sessions.";
