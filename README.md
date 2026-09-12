# OMNIVOX marketing site

Public site for **OMNIVOX** — a UK/EU cloud dialer and agent workspace, operated by Quanterae Solutions.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- Deployed on Vercel

## Scripts

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — OmniCube hero, pillars, product mocks, pricing, FAQ |
| `/features` | Dialing, workspace, credits, inbound, campaigns, compliance |
| `/pricing` | £25 seat + prepaid credits calculator |
| `/agencies` | Multi-org |
| `/trust` | Controller / processor |
| `/contact` | Demo / pilot form |
| `/privacy` `/terms` | Legal |

## Environment

| Variable | Description |
| --- | --- |
| `CONTACT_WEBHOOK_URL` | Forward contact form submissions |
| `NEXT_PUBLIC_CALENDLY_URL` | Optional calendar embed on Contact |

Sign-in CTA points at `siteConfig.appLoginUrl` (`https://omnivox.vercel.app/login`). Do not invent a custom domain.

## Build

```bash
npm run build
npm start
```

## Licence

Proprietary — Omnivox / Quanterae Solutions
