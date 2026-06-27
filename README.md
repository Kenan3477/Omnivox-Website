# Omnivox Marketing Website

Conversion-focused marketing site for **Omnivox** — a cloud contact centre and outbound sales dialer for UK/EU teams.

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript
- Deployed on [Vercel](https://vercel.com/)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, value pillars, product mockups, FAQ |
| `/features` | Full feature breakdown with availability badges |
| `/pricing` | Three-tier pricing with worked example |
| `/agencies` | Agency positioning and multi-org benefits |
| `/contact` | Demo/pilot enquiry form |
| `/trust` | Trust & security |
| `/privacy` | Privacy policy (stub) |
| `/terms` | Terms of service (stub) |

## Deploy to Vercel

1. Push this repo to GitHub (`Kenan3477/Omnivox-Website`)
2. Import the project in [Vercel](https://vercel.com/new)
3. Framework preset: **Next.js** (auto-detected)
4. Deploy

### Environment variables (optional)

| Variable | Description |
|----------|-------------|
| `CONTACT_WEBHOOK_URL` | Webhook URL to forward contact form submissions (e.g. Zapier, Make, Slack) |

Without `CONTACT_WEBHOOK_URL`, form submissions are logged server-side and return success to the user.

## Customisation

- **Site URL**: Update `siteConfig.url` in `lib/constants.ts`
- **Contact email**: Update `siteConfig.contactEmail` in `lib/constants.ts`
- **Calendar embed**: Replace placeholder in `components/contact/ContactForm.tsx`
- **OG image**: Replace `public/og-image.svg` (or add `public/og-image.png` and update `app/layout.tsx`)
- **Legal pages**: Review stubs in `app/privacy/page.tsx` and `app/terms/page.tsx` with legal counsel

## Build

```bash
npm run build
npm start
```

## Licence

Proprietary — Omnivox
