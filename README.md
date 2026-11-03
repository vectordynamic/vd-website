# Vector Dynamic Website

Marketing and lead-generation site for [vectordynamic.com](https://vectordynamic.com), built with Next.js 16 (App Router), React 19, and the React Compiler.

## Getting started

```bash
npm install
cp .env.example .env   # or create .env manually (see below)
npm run dev            # http://localhost:3000
```

## Scripts

| Command | What it does |
| :--- | :--- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build (Google Fonts need network access) |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint across the project |
| `npm test` | Vitest unit tests (inquiry validation, rate limiter, UTM, analytics, `/api/contact`, copy rules) |
| `npm run smoke` | SSR smoke suite: starts `next start` on port 3105 if needed, then checks every page (HTTP 200, `<h1>`, SSR text), `robots.txt`, `sitemap.xml`, `llms.txt`, redirects, and `POST /api/contact` validation and honeypot. Run `npm run build` first. |

Typical pre-deploy check:

```bash
npm test && npm run lint && npm run build && npm run smoke
```

## Environment variables

Set these in `.env` locally and in your hosting provider's environment settings for production. `.env*` files are git-ignored.

| Variable | Required | Purpose |
| :--- | :--- | :--- |
| `RESEND_API_KEY` | Yes | Resend API key used by `POST /api/contact` to email inquiries. Without it the form returns a 503 with a direct-email fallback. |
| `CONTACT_FROM_EMAIL` | No | Sender, e.g. `Vector Dynamic <info@vectordynamic.com>`. The domain must be verified in Resend. Defaults to `Vector Dynamic <info@vectordynamic.com>`. |
| `CONTACT_TO_EMAIL` | No | Inbox that receives inquiries. Defaults to `info@vectordynamic.com`. |
| `NEXT_PUBLIC_SITE_URL` | No | Canonical site URL used in metadata, sitemap, and JSON-LD. Defaults to `https://vectordynamic.com`. |
| `NEXT_PUBLIC_BOOKING_URL` | No | Cal.com or Calendly URL. When set, `/book` embeds the scheduler; otherwise it shows a call-request form. |
| `NEXT_PUBLIC_DEMO_VIDEO_URL` | No | Loom or YouTube embed URL. When set, the homepage shows a walkthrough link and `/work/syncdaily` embeds the video. |
| `SMOKE_PORT` / `SMOKE_BASE_URL` | No | Only for `npm run smoke`. Override the port (default `3105`) or point the suite at an already-running server. |

## Content

All copy lives in `src/content/` so it can be edited without touching components:

- `site.js`: company facts. Unknown facts stay `null` or empty; never invent them. Add `founders: [{ name, role, bio, linkedin }]` to show Leadership cards on `/` and `/about`.
- `home.js`, `pages.js`: homepage, services, how-we-work, about, partners, and book copy.
- `work.js`, `industries.js`, `articles.js`: case studies (`/work`), industry pages (`/for/[industry]`), and insight guides (`/insights`).

`src/content/copy-rules.test.js` fails the test run if banned buzzwords or non-US spellings slip into the content.

## Lead capture

Forms (`/book`, `/audit`, `/partners`, `/contact`, `/for/[industry]`) post to `POST /api/contact`, which validates input, drops honeypot spam silently, rate-limits by IP (5 requests per 10 minutes), and sends the email through Resend with first-touch UTM data attached. Analytics (GA4) loads only after the visitor accepts the cookie notice.
