# Phase A "Launchpad" Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a believable, server-rendered launch site: a new homepage, `/audit` and `/contact` pages, a hardened contact API, and the new light visual system. It must be live before outreach starts.

**Architecture:** Copy and facts move into plain data modules under `src/content/`. Pure logic (validation, escaping, rate limiting, UTM, schema, analytics) lives in small tested modules under `src/lib/`. New UI uses a token stylesheet (`src/styles/brand.css`) plus CSS Modules. Legacy pages (services, about, partners, insights, privacy, terms) stay untouched until Phase B. They render in their existing light theme because `<html data-theme="light">` is now static.

**Tech Stack:** Next.js 16.1.6 (App Router), React 19.2.1, plain JS/JSX, CSS Modules, `next/font/google`, Resend, Vitest 3.2.4 (new, dev only).

**Spec:** `docs/superpowers/specs/2026-11-01-website-redesign-design.md` (sections 3, 3A, 4, 5, 6, 7, 8.1, 9, 10.1, 11 Phase A)

## Global Constraints

- Plain JavaScript (`.js`/`.jsx`), no TypeScript. Path alias `@/` maps to `src/`.
- Every page's content must be in the server-rendered HTML. Nothing may gate rendering on client mount.
- Light theme only. No theme toggle.
- Colour tokens (exact): Paper `#F6F3EC`, Surface `#FFFFFF`, Ink `#101418`, Graphite `#3A424B`, Muted `#5B636B`, Rule `#D9D3C7`, Signal `#C93D20`, Signal-hover `#A8321A`, Signal-on-ink `#F0835F`, Ink-muted `#A7ADB3`, Verdigris `#1F6F66`.
- Signal is only for primary buttons, focus rings and key highlights. On Ink backgrounds use Signal-on-ink, never Signal (3.67:1 fails).
- Fonts via `next/font/google`: Newsreader (headings), Hanken Grotesk (body/UI), JetBrains Mono (labels, figures).
- Banned copy words (case-insensitive): streamline, empower, supercharge, unlock, leverage, cutting-edge, world-class, enterprise-grade, seamless, revolutionize, revolutionise, next-gen, synergy.
- Copy uses US English (US is the primary market).
- Never invent facts: phone, street address, founding year, team size, client counts, retention figures and certifications stay `null` or absent until the owner supplies them.
- No gradients on text, no glow or blurred orbs, no emoji icons, no typing animation, no rows of identical rounded icon cards. Border radius: 2px on buttons and inputs, 0 on sections.
- Third-party scripts: Google Analytics only. No AdSense anywhere.
- Inquiry email: from `Vector Dynamic <info@vectordynamic.com>` to `info@vectordynamic.com`.
- Accessibility: WCAG 2.2 AA contrast, visible focus ring (2px Signal outline, 2px offset), `prefers-reduced-motion` respected, skip link kept.
- Work on branch `redesign/phase-a`; one commit per task.

## Review Focus

1. **HTML or script typed into any form field:** the team's email must show it as literal text, never as rendered markup (Task 5 route test).
2. **`RESEND_API_KEY` missing in production:** the form shows a readable error with the email address as a fallback. No `alert()`, no fake success (Task 5 route test, Task 6 manual check).
3. **Crawler or JS-disabled visitor:** headings and body copy are present in the raw HTML of every public page (Task 4 smoke script, re-run in Task 8).
4. **Same visitor submitting repeatedly:** the 6th submission inside 10 minutes gets HTTP 429 with a readable message, and other visitors are unaffected (Task 5 rate-limit test).
5. **Old bookmarked or indexed URLs (`/products/opsera`, `/solutions`):** they redirect instead of returning 404 (Task 8 smoke script).

---

### Task 1: Tooling (test runner, working lint, dependency cleanup)

**Files:**
- Modify: `package.json`
- Create: `vitest.config.mjs`

**Interfaces:**
- Produces: `npm test` (runs `vitest run`) and a working `npm run lint`.

- [ ] **Step 1: Create the branch**

Run: `git switch -c redesign/phase-a`. Expected: `Switched to a new branch 'redesign/phase-a'`.

- [ ] **Step 2: Fix the ESLint config dependency, add Vitest, remove unused packages**

Run: `npm i -D eslint-config-next@16.1.6 vitest@3.2.4 && npm uninstall nodemailer next-sitemap framer-motion lenis`.
If npm reports an ESLint peer conflict, pin `eslint@^9.39.0` and retry.

- [ ] **Step 3: Add scripts and config**

In `package.json` add `"test": "vitest run"` and change `"lint"` to `"eslint ."`. Create `vitest.config.mjs` with `test.environment: 'node'`, `test.include: ['src/**/*.test.{js,jsx}']` and `resolve.alias: { '@': <abs path of ./src> }` (use `fileURLToPath(new URL('./src', import.meta.url))`).

- [ ] **Step 4: Verify**

Run `npx vitest run --passWithNoTests`. Expected: exit 0.
Run `npm run lint`. Expected: ESLint runs (no `ERR_MODULE_NOT_FOUND`). Save the error list to the task notes. Legacy errors are allowed until Task 8. `src/components/ui/SmoothScroll.jsx` will break once `lenis` is gone: that is expected because Task 4 deletes it. Do not run `next build` until Task 4.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json vitest.config.mjs
git commit -m "chore: fix eslint config, add vitest, drop unused deps"
```

---

### Task 2: Content modules and copy rules

**Files:**
- Create: `src/content/site.js`, `src/content/home.js`, `src/content/copy-rules.test.js`, `src/content/home.test.js`

**Interfaces:**
- Produces:
  - `site`: `{ name, url, email, bookingUrl: string|null, phone: null, address: null, foundedYear: null, location: string, tagline, description, social: { linkedin, twitter, github } }`
  - `home`: `{ hero, problem, practices, portfolio, ladder, process, engineering, commitments, fit, faq, closing }`, with the shapes defined below.
  - `BANNED_WORDS: string[]` exported from `copy-rules.test.js`'s helper `src/content/copy-rules.js` (create it too) with `findBannedWords(value: unknown): string[]`, which walks any nested object/array and returns the offending strings.

- [ ] **Step 1: Write the failing tests**

`src/content/copy-rules.test.js`:
- `findBannedWords({ a: ['We streamline ops'] })` returns `['We streamline ops']`. `findBannedWords({ a: 'Plain words' })` returns `[]`.
- It loads every module in `src/content/*.js` (except `copy-rules.js`) via `import.meta.glob('./*.js', { eager: true })` and asserts that `findBannedWords(module)` is `[]` for each one.
- Every content string contains none of: `To be anounced`, `99%`, `555-0123`, `Retention Rate`.

`src/content/home.test.js`:
- `home.practices.map(p => p.id)` equals `['custom-software', 'erp', 'ai', 'automation']`.
- `home.ladder.length === 3`, `home.process.length === 4`, `home.commitments.length === 6`.
- `home.portfolio` ids equal `['syncdaily', 'okebase', 'opsera', 'advantage-ai', 'ai-receptionist']` (no `amardera`), and each item's `practice` is one of the practice ids.
- `home.hero.title === 'The software and AI your business runs on. Built to scale. Kept running.'`
- `site.phone === null && site.address === null && site.foundedYear === null`.

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm test`. Expected: FAIL, modules not found.

- [ ] **Step 3: Implement `src/content/copy-rules.js`, `src/content/site.js` and `src/content/home.js`**

`site.js`: `url` from `process.env.NEXT_PUBLIC_SITE_URL || 'https://vectordynamic.com'`; `bookingUrl` from `process.env.NEXT_PUBLIC_BOOKING_URL || null`; `email: 'info@vectordynamic.com'`; `location: 'Dhaka, Bangladesh'` (owner to confirm); `tagline: 'Custom software, ERP and AI, built to scale and kept running.'`; `description: 'Vector Dynamic builds custom software, ERP and business systems, AI and automation for growing B2B companies, then keeps them running.'`; `social` keeps the three existing URLs from `src/data/navigation.js`.

`home.js`: exact copy below (US spelling):

```js
hero: {
  eyebrow: 'Custom software · ERP · AI · Automation',
  title: 'The software and AI your business runs on. Built to scale. Kept running.',
  lede: 'Vector Dynamic is a senior engineering team. We build custom platforms, ERP and business systems, AI and automation for growing B2B companies, with the code in your repository from day one.',
  primaryCta: { label: 'Book a 30-minute systems review', href: '/audit' },
  secondaryCta: { label: 'See how we work', href: '/#process' },
  facts: ['Code in your repository from day one', 'You own all code and IP', 'Fixed-price build sprints', 'Weekly demo and written update'],
},
problem: {
  title: 'Most software projects stall between the demo and the real workflow.',
  body: [
    'Gartner expects over 40% of agentic AI projects to be canceled by the end of 2027, citing rising costs and unclear business value. MIT researchers found that about 95% of enterprise generative AI pilots showed no measurable profit-and-loss impact within six months.',
    'ERP rollouts and custom platforms fail the same way: the build gets signed off, then meets real data, real users and real load. We plan for that moment from the first week.',
  ],
  sources: [
    { label: 'Gartner, June 2025', href: 'https://www.thestar.com.my/tech/tech-news/2025/06/25/over-40-of-agentic-ai-projects-will-be-scrapped-by-2027-gartner-says' },
    { label: 'MIT NANDA, The GenAI Divide, 2025', href: 'https://tiaton-web.pages.dev/blog/2026-02-22-why-95-percent-of-enterprise-ai-pilots-fail' },
  ],
},
practices: [
  { id: 'custom-software', title: 'Custom Software and Platforms',
    summary: 'Web platforms, SaaS products, internal tools and mobile apps, designed around how your team works.',
    covers: ['Web platforms and SaaS', 'Internal tools and dashboards', 'Mobile apps', 'APIs and microservices', 'Legacy modernization'],
    trigger: 'Off-the-shelf tools don’t fit how we work.' },
  { id: 'erp', title: 'ERP and Business Systems',
    summary: 'Custom ERP, CRM, HR, inventory and finance modules, or extensions to the ERP you already run.',
    covers: ['Custom ERP and CRM', 'Inventory, sales and finance', 'HR and payroll modules', 'Odoo and NetSuite extensions', 'Data migration'],
    trigger: 'We run the business on ten spreadsheets and three logins.',
    note: 'We’ll tell you when not to build custom.' },
  { id: 'ai', title: 'AI and Machine Learning',
    summary: 'LLM applications, knowledge search, computer vision and predictive models that run in production, not only in a demo.',
    covers: ['LLM applications and RAG', 'Computer vision', 'Predictive models', 'ML pipelines that scale', 'Evaluation and monitoring'],
    trigger: 'Our AI pilot never made it into the real workflow.' },
  { id: 'automation', title: 'Automation and Integration',
    summary: 'Workflow automation, AI agents and integrations that take repetitive work off your team.',
    covers: ['Workflow automation', 'AI agents and assistants', 'Document processing', 'System-to-system integration', 'Automated reporting'],
    trigger: 'Smart people spend hours copying data between systems.' },
],
portfolio: [
  { id: 'syncdaily', name: 'SyncDaily', practice: 'ai', status: 'Live',
    summary: 'AI news pipeline that ingests sources, curates and summarizes with AI, publishes articles and feeds, and serves search-engine sitemaps.' },
  { id: 'okebase', name: 'Okebase', practice: 'erp', status: 'In development',
    summary: 'Business operating system: sales, inventory, suppliers, employees and real-time profit and loss in one place.' },
  { id: 'opsera', name: 'Opsera', practice: 'custom-software', status: 'In development',
    summary: 'Project and team orchestration with task assignment, deadline alerts, performance tracking and Slack, GitHub and Jira sync.' },
  { id: 'advantage-ai', name: 'AdVantage AI', practice: 'automation', status: 'In development',
    summary: 'Marketing automation that plans content, launches Meta campaigns and tunes them against live ROI data.' },
  { id: 'ai-receptionist', name: 'AI Receptionist', practice: 'automation', status: 'In development',
    summary: 'Voice agent that answers calls, books appointments, routes callers and syncs with the CRM.' },
],
ladder: [
  { step: '01', name: 'Systems Review', duration: '1–2 weeks', price: 'Free for qualified teams',
    body: 'We study one workflow or system and send a written review: where time and money leak, what to build or fix, and a rough estimate.',
    cta: { label: 'Request a review', href: '/audit' } },
  { step: '02', name: 'Build Sprint', duration: '4–8 weeks', price: 'Fixed price, from $15,000',
    body: 'One working system, module or automation in production, with documentation and hand-over. Billed by milestone.' },
  { step: '03', name: 'Run and Grow', duration: 'Monthly, 3-month minimum', price: 'Managed from $2,000 a month · Dedicated pods priced per engineer',
    body: 'We monitor, fix and improve what we built, or add a dedicated team of 2 to 5 engineers to your roadmap.' },
],
process: [
  { name: 'Discover', duration: 'Week 1', deliverable: 'Written scope, architecture sketch and a fixed quote' },
  { name: 'Build', duration: 'Weeks 2–6', deliverable: 'Weekly demo on real data and a written weekly update' },
  { name: 'Launch', duration: 'Final week', deliverable: 'Production release, monitoring, runbook and hand-over session' },
  { name: 'Run', duration: 'Ongoing', deliverable: 'Monthly report, fixes and improvements' },
],
engineering: {
  title: 'Built to scale from the first commit.',
  points: ['Architecture sized for your next three years, not the demo', 'Automated tests and CI/CD on every project',
    'Monitoring and alerts before launch day', 'Load testing for systems that must scale', 'Documentation and a runbook your team can use'],
},
commitments: ['Fixed price, billed by milestone', 'You own all code and IP once paid', 'Code in your repository from day one',
  'Mutual NDA on request', 'A weekly demo and a written update', 'No lock-in: full documentation and hand-over'],
fit: {
  for: ['B2B companies with 20 to 300 people', 'Teams with a real operational problem and a budget to fix it', 'Founders and operators who want a long-term engineering partner'],
  notFor: ['Projects under $15,000', 'Teams shopping for the lowest hourly rate', 'Ideas with no decision-maker involved'],
},
faq: [
  { q: 'Where is your team, and how do we work across time zones?',
    a: 'Our engineering team is based in Dhaka, Bangladesh. We agree a daily overlap window with your working hours, hold every call inside it, and send a written update every week, so nothing depends on being awake at the same time.' },
  { q: 'Who owns the code and the data?',
    a: 'You do. Code lives in your repository from the first day, systems run in cloud accounts you own, and all intellectual property transfers to you on payment.' },
  { q: 'How do you protect our systems and data?',
    a: 'Access is limited by role and removed at hand-over, credentials stay in your own secrets manager, and we sign a mutual NDA on request.' },
  { q: 'Will we be one of your first clients?',
    a: 'We are a young company, and we say so. That is why engagements use fixed prices, milestone billing and full code ownership: your risk stays small and visible at every step.' },
  { q: 'Can you work with our existing ERP, CRM or codebase?',
    a: 'Yes. Most projects extend or connect systems you already run. When building custom is not worth it, we say so in the review.' },
  { q: 'What does a project cost?',
    a: 'Build sprints start at $15,000 at a fixed price. Ongoing support starts at $2,000 a month. The Systems Review is free for qualified teams.' },
],
closing: {
  title: 'Tell us about the system you need.',
  body: 'Book a 30-minute call and leave with a clear next step, whether or not we work together.',
  primaryCta: { label: 'Book a 30-minute systems review', href: '/audit' },
},
```

Before publishing, replace the two `problem.sources` links with the primary Gartner press release and MIT report URLs if they can be found and verified. Otherwise keep these.

- [ ] **Step 4: Run tests to verify they pass**

Run: `npm test`. Expected: all tests in both files PASS.

- [ ] **Step 5: Commit**

```bash
git add src/content
git commit -m "feat: add site facts and homepage copy as content modules"
```

---

### Task 3: Design tokens, fonts and logo

**Files:**
- Create: `src/styles/tokens.js`, `src/styles/tokens.test.js`, `src/styles/brand.css`, `src/components/brand/Logo.jsx`
- Modify: `src/app/icon.js`, `src/app/opengraph-image.js`

**Interfaces:**
- Produces:
  - `tokens`: `{ paper, surface, ink, graphite, muted, rule, signal, signalHover, signalOnInk, inkMuted, verdigris }` (hex strings) and `contrastRatio(hexA: string, hexB: string): number` (WCAG 2.x formula).
  - CSS custom properties `--vd-paper`, `--vd-surface`, `--vd-ink`, `--vd-graphite`, `--vd-muted`, `--vd-rule`, `--vd-signal`, `--vd-signal-hover`, `--vd-signal-on-ink`, `--vd-ink-muted`, `--vd-verdigris`, `--vd-font-serif`, `--vd-font-sans`, `--vd-font-mono`, `--vd-max: 1200px`, `--vd-gutter: clamp(16px, 4vw, 40px)`, `--vd-section: clamp(64px, 10vw, 128px)`, plus utility class `.vd-container`.
  - `<Logo size?: number = 32, title?: string = 'Vector Dynamic', className?: string />` renders an inline SVG with `fill="currentColor"`, `role="img"` and `<title>`, using the three paths and `viewBox="30 8 50 50"` from `public/logo.svg`.

- [ ] **Step 1: Write the failing test** (`src/styles/tokens.test.js`)

- `contrastRatio('#000000', '#FFFFFF')` is about 21 (`toBeCloseTo(21, 1)`).
- Each of these is at least 4.5: ink/paper, graphite/paper, muted/paper, verdigris/paper, signal/paper, `#FFFFFF`/signal, `#FFFFFF`/signalHover, signalOnInk/ink, inkMuted/ink, paper/ink.
- `contrastRatio(tokens.signal, tokens.ink) < 4.5`. This test documents why Signal-on-ink exists.
- Reading `src/styles/brand.css` with `fs`, every token hex appears in it (case-insensitive), so CSS and JS cannot drift apart.

- [ ] **Step 2: Run it to verify it fails**

Run: `npm test -- src/styles`. Expected: FAIL, module not found.

- [ ] **Step 3: Implement `tokens.js`, `brand.css` and `Logo.jsx`**

`brand.css` defines the custom properties on `:root`, sets `body { background: var(--vd-paper); color: var(--vd-ink); font-family: var(--vd-font-sans); font-size: 1.0625rem; line-height: 1.6; }`, headings in `var(--vd-font-serif)` with weight 500 and `letter-spacing: -0.01em`, a type scale with a 1.25 ratio, `:focus-visible { outline: 2px solid var(--vd-signal); outline-offset: 2px; }`, and `.vd-container`. It also aliases the legacy font variables so legacy pages adopt the new type: `--font-inter: var(--vd-font-sans); --font-space-grotesk: var(--vd-font-serif);`.

- [ ] **Step 4: Update the icon and OG image**

`icon.js`: replace the gradient tile with a solid `#101418` square (radius 18px) holding the white mark. `opengraph-image.js`: Paper background (`#F6F3EC`), Ink mark plus "Vector Dynamic", then the headline `The software and AI your business runs on.` in Ink and the tagline in Graphite. No gradients.

- [ ] **Step 5: Run tests and commit**

Run: `npm test`. Expected: PASS.

```bash
git add src/styles/tokens.js src/styles/tokens.test.js src/styles/brand.css src/components/brand src/app/icon.js src/app/opengraph-image.js
git commit -m "feat: add brand tokens, contrast tests, logo component and new icon/OG image"
```

---

### Task 4: Server-rendered layout, new header and footer, ads removed

**Files:**
- Modify: `src/app/layout.js`, `src/components/analytics/GoogleAnalytics.js`, `src/data/navigation.js`, `src/components/insights/ArticleSidebar.jsx`, `src/components/insights/InsightsSidebar.jsx`, `src/app/insights/[slug]/page.js` (delete the two `[DEBUG]` `console.log` lines)
- Rewrite: `src/components/layout/Header.jsx` (+ `Header.module.css`), `src/components/layout/Footer.jsx` (+ `Footer.module.css`)
- Create: `src/lib/schema.js`, `src/lib/schema.test.js`, `src/lib/analytics.js`, `src/lib/analytics.test.js`, `src/components/ui/TrackedLink.jsx`, `src/components/ui/LinkButton.jsx` (+ `LinkButton.module.css`), `scripts/smoke-ssr.mjs`
- Delete: `src/lib/ThemeContext.jsx`, `src/components/ui/SmoothScroll.jsx`, `src/components/ui/FloatingCTA.jsx` (+ css), `src/components/ui/BackToTop.jsx` (+ css), `src/components/ads/GoogleAd.js`, `public/ads.txt`, `src/styles/components/header.css`, `src/styles/components/footer.css`

**Interfaces:**
- Consumes: `site` (Task 2), `Logo` and `brand.css` (Task 3).
- Produces:
  - `buildOrganizationSchema(site): object`: `@type: 'Organization'`, `name`, `url`, `logo` (`${url}/logo.svg`), `email`, `description`, `sameAs` (non-null social URLs), `contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email, availableLanguage: 'en' }`. Adds `telephone` / `address` only when non-null.
  - `trackEvent(name: string, params?: object): void`: calls `window.gtag('event', name, params)` only when `window.gtag` is a function. Never throws.
  - `<TrackedLink href event? params? ...anchorProps>` (client): a `next/link` that calls `trackEvent(event, params)` on click when `event` is set.
  - `<LinkButton href variant?: 'primary'|'quiet' = 'primary' event? params? children />`: primary is a solid Signal fill with white text and 2px radius; quiet is Ink text with a 1px underline.
  - `navigation`: `{ main: [{name:'Services',href:'/services'},{name:'Work',href:'/#work'},{name:'How we work',href:'/#process'},{name:'Insights',href:'/insights'},{name:'About',href:'/about'}], cta: {label:'Book a review', href:'/audit'}, footer: { services: <the 5 existing service links>, company: [About /about, Agency partners /partners, Insights /insights, Contact /contact], legal: [Privacy /privacy, Terms /terms] } }`. Remove `products`, `socialLinks` and `contactInfo` (now in `site`).
  - `scripts/smoke-ssr.mjs`: reads `BASE_URL` (default `http://localhost:3100`) and `PATHS` (default list below), and exits 1 if any check fails.

- [ ] **Step 1: Write the failing unit tests**

`schema.test.js`: `buildOrganizationSchema({...site, phone: null})` has no `telephone` key, `contactPoint.email === 'info@vectordynamic.com'`, `sameAs` excludes nulls. With `phone: '+880 1700 000000'` it includes `telephone`.
`analytics.test.js`: with `globalThis.window = { gtag: vi.fn() }`, `trackEvent('cta_click', {a:1})` calls `gtag('event','cta_click',{a:1})`. With `globalThis.window = {}` it does not throw. With `window` undefined it does not throw.

- [ ] **Step 2: Run them to verify they fail**

Run: `npm test -- src/lib`. Expected: FAIL, modules not found.

- [ ] **Step 3: Implement `schema.js`, `analytics.js`, `TrackedLink`, `LinkButton`**

- [ ] **Step 4: Rebuild the layout**

In `layout.js`:
- Remove `ThemeProvider`, `SmoothScroll`, `FloatingCTA`, `BackToTop`, the AdSense `<Script>` and the `google-adsense-account` meta.
- Remove the `header.css` and `footer.css` imports. Import `@/styles/brand.css` last.
- Load the fonts: `Newsreader({ subsets:['latin'], variable:'--vd-font-serif', display:'swap' })`, `Hanken_Grotesk({ ..., variable:'--vd-font-sans' })`, `JetBrains_Mono({ ..., variable:'--vd-font-mono' })`. Drop Inter and Space Grotesk.
- Set `<html lang="en" data-theme="light" className={fonts}>` and drop both `suppressHydrationWarning`.
- Render the Organization JSON-LD from `buildOrganizationSchema(site)`.
- Change the default `metadata` title to `'Vector Dynamic | Custom Software, ERP and AI'` and the description to `site.description`. Replace the keyword list with the four practice areas plus "custom ERP development", "AI automation", "software development partner".

In `GoogleAnalytics.js`: guard the effect with `typeof window.gtag === 'function'`. Remove the `GoogleAd` import and usage from both insights sidebars.

- [ ] **Step 5: Write the header and footer**

Header (client component, still server-rendered):
- `Logo` in Ink plus the "Vector Dynamic" wordmark (Hanken Grotesk 600), then `navigation.main` links with `aria-current` on the active one, then `LinkButton` for the CTA.
- Below 960px, a menu button with `aria-expanded` and `aria-controls` opens a full-screen panel with the same links and the CTA.
- The panel closes on Escape, on link click and on pathname change, and locks body scroll while open.
- Sticky on Paper. Gains a 1px `--vd-rule` bottom border after scrolling 8px.

Footer (server component):
- Ink background. Logo in white, `site.tagline`, `mailto:` link to `site.email`, `site.location`.
- Columns: Services, Company, Legal. Social icons only for non-null `site.social` entries.
- `© {year} Vector Dynamic`.
- Text in `--vd-ink-muted`; link hover in `--vd-signal-on-ink`.

- [ ] **Step 6: Write the smoke script**

`scripts/smoke-ssr.mjs`: for each path, `fetch(BASE_URL+path)`. Fail unless all of these hold:
- status 200
- HTML contains `<h1`
- visible text (after stripping `<script>`/`<style>` blocks and tags) is at least 400 characters
- HTML contains none of `adsbygoogle`, `555-0123`, `To be anounced`, `Retention Rate`

Print one `PASS`/`FAIL path reason` line per path. Default `PATHS` = `/`, `/services`, `/about`, `/insights`, `/partners`, `/privacy`, `/terms`.

- [ ] **Step 7: Verify**

Run `npm test`. Expected: PASS.
Run `npm run build`. Expected: build succeeds.
Run `npm start -- -p 3100` in the background, then `node scripts/smoke-ssr.mjs`. Expected: every line `PASS`. The old homepage may still fail the length check; that is acceptable here because Task 7 replaces it. Note the result.
Run `npm run lint` and confirm no new errors in files touched by this task.

- [ ] **Step 8: Commit**

```bash
git add -A src public scripts
git commit -m "fix: render all pages on the server; new header/footer; remove ads and theme toggle"
```

---

### Task 5: Hardened inquiry API

**Files:**
- Create: `src/lib/inquiry.js`, `src/lib/inquiry.test.js`, `src/lib/rate-limit.js`, `src/lib/rate-limit.test.js`, `src/lib/utm.js`, `src/lib/utm.test.js`, `src/app/api/contact/route.test.js`
- Rewrite: `src/app/api/contact/route.js`

**Interfaces:**
- Produces:
  - `INQUIRY_TYPES = ['Systems Review', 'New project', 'ERP or business system', 'AI or automation', 'Agency partnership', 'Something else']`
  - `escapeHtml(value: unknown): string`: escapes `& < > " '`. `null`/`undefined` become `''`.
  - `isSpam(input: object): boolean`: true when `input.website` is a non-empty string (honeypot).
  - `validateInquiry(input: object): { ok: true, data: Inquiry } | { ok: false, errors: Record<string,string> }`. `Inquiry = { name, email, company, companyUrl, phone, inquiryType, message, utm_source, utm_medium, utm_campaign, page }`, all trimmed strings (`''` when absent). Rules:
    - `name` required, 2–100 characters
    - `email` required, ≤254 characters, matches `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/`
    - `company` ≤120 characters
    - `companyUrl` ≤200 characters
    - `phone` ≤40 characters
    - `inquiryType` is `''` or one of `INQUIRY_TYPES`
    - `message` required, 10–5000 characters
    - `utm_*` and `page` are never rejected, only truncated to 100 / 200 characters
  - `buildInquiryEmail(data: Inquiry): { subject: string, html: string, text: string }`:
    - `subject` is `` `New ${inquiryType || 'inquiry'} from ${name}` `` with CR/LF removed.
    - `html` is a two-column table with every value escaped. The message is escaped, then newlines become `<br>`.
    - `text` is the plain equivalent.
    - Includes the UTM fields and the page.
  - `createRateLimiter({ limit: number, windowMs: number }): { check(key: string, now?: number): boolean }`: a fixed window per key, in memory. Returns false once `limit` is exceeded inside the window.
  - `parseUtm(search: string): { utm_source?, utm_medium?, utm_campaign? }`: keeps only those three, trimmed, at most 100 characters each, skipping empty values.
  - `storeUtm(utm, storage): void`: first touch wins, so an existing `vd-utm` value is never overwritten. Errors are swallowed.
  - `readStoredUtm(storage): object`: returns `{}` on any error.
  - `POST /api/contact` responses:

    | Condition | Status and body |
    |---|---|
    | Rate-limited (5 per 10 minutes, keyed by the first `x-forwarded-for` entry, otherwise `'unknown'`) | `429 { error: 'Too many requests. Please email info@vectordynamic.com.' }` |
    | Body is not JSON | `400 { error: 'Invalid request.' }` |
    | Honeypot filled | `200 { ok: true }`, no email sent |
    | Validation fails | `400 { error: 'Please check the highlighted fields.', fields: errors }` |
    | `RESEND_API_KEY` missing | `503 { error: 'Our form is temporarily unavailable. Please email info@vectordynamic.com.' }` |
    | Resend returns an error | `502 { error: 'We could not send your message. Please email info@vectordynamic.com.' }`. The provider error is logged, never returned. |
    | Success | `200 { ok: true }` |

    Send with `{ from, to, replyTo: data.email, subject, html, text }` (Resend v6 uses `replyTo`).

- [ ] **Step 1: Write the failing tests**

`inquiry.test.js`:
- `escapeHtml('<script>"x"&\'y\'</script>')` returns `'&lt;script&gt;&quot;x&quot;&amp;&#39;y&#39;&lt;/script&gt;'`.
- `validateInquiry({})` has errors for `name`, `email` and `message`.
- A bad email (`'a@b'`) is rejected.
- `inquiryType: 'Hack'` is rejected.
- A valid input returns `ok: true` with trimmed values.
- A 300-character `utm_source` is truncated to 100, not rejected.
- `buildInquiryEmail` with `name: 'Eve\r\nBcc: x'` gives a subject without `\r` or `\n`.
- With `message: '<img src=x onerror=alert(1)>'`, the html contains `&lt;img` and not `<img`.

`rate-limit.test.js`:
- With limit 5 and a 600000 ms window, five checks at `now=0` are true and the sixth is false.
- Another key is still true.
- A check at `now=600001` is true again.

`utm.test.js`:
- `parseUtm('?utm_source=linkedin&utm_medium=dm&x=1')` returns `{utm_source:'linkedin', utm_medium:'dm'}`.
- `storeUtm` does not overwrite an existing value.
- `readStoredUtm` returns `{}` when `getItem` throws.

`route.test.js` mocks `resend` with `vi.mock('resend', ...)` and gives each test its own IP:
- The success case asserts `send` received `replyTo: 'jane@acme.com'` and html without raw `<`.
- The honeypot case returns 200 without calling `send`.
- An invalid body returns 400 with `fields`.
- A missing key returns 503.
- The 6th request from the same IP returns 429.

- [ ] **Step 2: Run them to verify they fail**

Run: `npm test -- src/lib src/app/api`. Expected: FAIL.

- [ ] **Step 3: Implement the three modules and the route**

- [ ] **Step 4: Run tests to verify they pass**

Run: `npm test`. Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/lib src/app/api
git commit -m "fix: escape, validate and rate-limit contact submissions; capture UTM"
```

---

### Task 6: Inquiry form, /audit and /contact pages

**Files:**
- Create: `src/components/forms/InquiryForm.jsx` (+ `InquiryForm.module.css`), `src/components/analytics/UtmCapture.jsx`, `src/content/audit.js`, `src/content/contact.js`, `src/app/audit/page.js` (+ `page.module.css`)
- Rewrite: `src/app/contact/page.js` (+ `page.module.css`)
- Delete: `src/app/contact/ContactForm.jsx`
- Modify: `src/app/layout.js` (mount `<UtmCapture />`)

**Interfaces:**
- Consumes: `INQUIRY_TYPES`, `parseUtm`, `storeUtm`, `readStoredUtm` (Task 5), `trackEvent`, `LinkButton`, `TrackedLink` (Task 4), `site` (Task 2).
- Produces:
  - `<InquiryForm variant: 'contact'|'audit' />`
    - **audit fields:** name, email, company, companyUrl, message (label "Which workflow or system should we review?"), plus hidden `inquiryType='Systems Review'`.
    - **contact fields:** name, email, company, phone, inquiryType (`<select>` of `INQUIRY_TYPES`), message.
    - Every variant has the honeypot input `website`: visually hidden, `tabIndex={-1}`, `autoComplete="off"`, `aria-hidden`.
    - On submit it POSTs JSON with `readStoredUtm(sessionStorage)` and `page: location.pathname`.
    - States: `idle | submitting | success | error`.
    - Field errors from `fields` render under each input, linked with `aria-describedby`. The error banner has `role="alert"` and shows the API's `error` text plus a `mailto:` link.
    - On success it shows a thank-you panel and calls `trackEvent(variant === 'audit' ? 'audit_submitted' : 'contact_submitted', utm)`.
    - Never uses `alert()`.
  - `<UtmCapture />` (client, renders null): on mount, `storeUtm(parseUtm(location.search), sessionStorage)` inside try/catch.

- [ ] **Step 1: Write the content files**

`audit.js`:

```js
{ title: 'Get a written review of one system or workflow.',
  lede: 'Tell us which process, system or AI project is costing you time. We study it and send a short written review with what to fix, what to build and a rough estimate. Free for qualified B2B teams.',
  looksAt: ['Where time and money leak in the workflow', 'What to automate, fix, replace or leave alone', 'Risks in the current system: data, security and scale'],
  receive: ['A 2 to 4 page written review', 'Three prioritized quick wins', 'A rough build estimate and timeline'],
  timing: 'A 30-minute call, then the written review within 1 to 2 weeks.',
  qualify: 'Best for B2B companies with 20 to 300 people and a real operational problem.' }
```

`contact.js`:

```js
{ title: 'Talk to us.',
  lede: 'Tell us what you need built, fixed or automated. We reply within one business day.',
  bookingLabel: 'Book a 30-minute call' }
```

The copy-rules test from Task 2 picks up both files automatically.

- [ ] **Step 2: Build the pages**

`/audit`:
- Metadata title `'Free Systems Review'`, description = `lede`.
- Two-column layout on desktop. Left: title, lede, "What we look at", "What you receive", timing and qualify note. Right: the `audit` form.
- If `site.bookingUrl` is set, show a quiet `TrackedLink` "Prefer to talk first? Book a 30-minute call" with `event="booking_started"`.

`/contact`:
- Title and lede.
- A booking `LinkButton` (`event="booking_started"`) when `site.bookingUrl` is set.
- `site.email` as a `mailto:` link.
- The `contact` form.

- [ ] **Step 3: Verify in the browser**

Run `npm run build && npm start -- -p 3100` with `RESEND_API_KEY` unset. Then:
1. Submit `/audit` empty: field errors appear and no request is sent until required fields are filled.
2. Submit a valid form: the error banner shows the 503 message and the email link.
3. With the key set (use the real `.env` locally), submit with `?utm_source=test` in the original landing URL: the email arrives with `utm_source: test` and escaped content.
4. Run `PATHS="/audit /contact" node scripts/smoke-ssr.mjs`: both PASS.

Use the Chrome browser tools for checks 1 and 2, and capture a GIF of the audit flow.

- [ ] **Step 4: Commit**

```bash
git add -A src
git commit -m "feat: add audit and contact pages with accessible inquiry form"
```

---

### Task 7: New homepage

**Files:**
- Create: `src/components/ui/Section.jsx` (+ `Section.module.css`), `src/components/home/{Hero,Problem,Practices,Portfolio,Ladder,Process,Engineering,Commitments,Fit,Faq,Closing}.jsx`, `src/components/home/home.module.css`
- Rewrite: `src/app/page.js`, `src/app/page.module.css`
- Modify: `src/lib/schema.js`, `src/lib/schema.test.js`
- Delete: `src/components/sections/` (all files)

**Interfaces:**
- Consumes: `home`, `site` (Task 2), `LinkButton`, `TrackedLink` (Task 4), `buildOrganizationSchema` (Task 4).
- Produces:
  - `<Section id? eyebrow? title? tone?: 'paper'|'surface'|'ink' = 'paper' children />` renders `<section>` with `--vd-section` vertical padding, a `.vd-container` and an optional mono eyebrow and serif `<h2>`.
  - `buildServicesSchema(practices, site): object[]` returns one `{ '@type': 'Service', name: title, description: summary, provider: { '@type': 'Organization', name: site.name, url: site.url }, areaServed: 'Worldwide' }` per practice.

- [ ] **Step 1: Write the failing test**

In `schema.test.js`: `buildServicesSchema(home.practices, site)` has length 4, `[1].name === 'ERP and Business Systems'`, and every item has `provider.name === 'Vector Dynamic'`.

- [ ] **Step 2: Run it to verify it fails**

Run: `npm test -- src/lib/schema`. Expected: FAIL, `buildServicesSchema` is not a function.

- [ ] **Step 3: Implement `buildServicesSchema` and the section components**

Each component is a server component that takes its slice of `home` as props. Layout notes (the spec, section 8.1, sets the order):

- **Hero:**
  - Mono eyebrow, then a serif `<h1>` at `clamp(2.5rem, 6vw, 4.75rem)` with a max width of 16ch, then the lede at 60ch, then the primary `LinkButton` (`event="cta_click"`, `params={{ location: 'hero' }}`) and a quiet secondary link.
  - The facts strip is a ruled row of four mono items. It wraps to a 2×2 grid on mobile.
  - Right column on desktop: an SVG diagram built inline from the four practice names arranged around the logo mark, drawn with 1px Ink strokes. No images.
- **Problem:** a two-column layout with the title on the left and the body plus a "Sources" list of external links (`rel="noopener"`) on the right.
- **Practices:** a numbered ruled list (`01`–`04`). Each row shows the title, summary, the `covers` list in two columns and the trigger as an italic quote. Show `note` when present, in Verdigris.
- **Portfolio:** `id="work"`, title "Built by Vector Dynamic", intro "Our own products, built and run by the same team that would build yours." Each item is a bordered row (no shadow) with the name, the practice title (looked up from `home.practices`), a status pill (Verdigris for `Live`, Graphite outline otherwise) and the summary. No images in Phase A.
- **Ladder:** title "How you start". Three columns on desktop separated by vertical rules. Each column shows the step number in mono, the name, duration, price and body, plus a CTA when present.
- **Process:** `id="process"`, title "How an engagement runs". A horizontal timeline on desktop that becomes a vertical one on mobile.
- **Engineering:** `tone="ink"`. The title, then the points as a ruled list in `--vd-ink-muted`, with mono indices in `--vd-signal-on-ink`.
- **Commitments:** title "What we commit to". A 3×2 grid of short ruled statements, no icons.
- **Fit:** title "Who we work best with". Two lists, "A good fit" and "Not a fit".
- **Faq:** title "Questions buyers ask us". Native `<details>`/`<summary>`, each one opening independently. Also emit `FAQPage` JSON-LD from the same data.
- **Closing:** `tone="surface"`, the title, body and primary `LinkButton` (`params={{ location: 'closing' }}`), plus a `mailto:` link to `site.email`.

Motion: only the hero fades in (opacity 0 to 1 and translateY 8px to 0 over 400ms), inside `@media (prefers-reduced-motion: no-preference)`.

`page.js`:
- Metadata title `{ absolute: 'Vector Dynamic | Custom Software, ERP and AI, Built to Scale' }`, description `home.hero.lede`.
- Render JSON-LD `buildServicesSchema(home.practices, site)`, replacing the SoftwareApplication `ComingSoon` block.
- Render the sections in order: Hero, Problem, Practices, Portfolio, Ladder, Process, Engineering, Commitments, Fit, Faq, Closing.

- [ ] **Step 4: Verify**

Run `npm test`. Expected: PASS.
Run `npm run build && npm start -- -p 3100`, then `PATHS="/" node scripts/smoke-ssr.mjs`. Expected: PASS.

In the browser at 375px, 768px and 1280px widths, check:
- no horizontal scroll
- the header menu works with the keyboard (Tab, Enter, Escape)
- every focus ring is visible
- `/#work` and `/#process` scroll to their sections

Take a screenshot at 1280px and 375px.

- [ ] **Step 5: Commit**

```bash
git add -A src
git commit -m "feat: new homepage with practices, portfolio, engagement ladder and FAQ"
```

---

### Task 8: Retire products and solutions, redirects, final verification

**Files:**
- Delete: `src/app/products/` (all), `src/app/solutions/` (all), `public/images/*-mockup.png`
- Modify: `next.config.mjs`, `src/lib/data.js` (remove `products` and `techCategories`, fix the "Sollution" typo), `src/app/sitemap.xml/route.js` (static list), `scripts/smoke-ssr.mjs`, plus any legacy files that still have lint errors

**Interfaces:**
- Consumes: everything above.
- Produces: temporary (307) redirects `/products` → `/#work`, `/products/:id` → `/#work`, `/solutions` → `/services`, defined with `permanent: false`. They become permanent in Phase B once `/work` exists.

- [ ] **Step 1: Extend the smoke script first**

Add a `REDIRECTS` check: `fetch(url, { redirect: 'manual' })` for `/products`, `/products/opsera` and `/solutions` must return 307 with a `location` ending in `/#work`, `/#work` and `/services` respectively. Add `/audit` and `/contact` to the default `PATHS`.

- [ ] **Step 2: Run it against the current build to verify it fails**

Run: `npm run build && npm start -- -p 3100`, then `node scripts/smoke-ssr.mjs`. Expected: FAIL on the three redirect checks.

- [ ] **Step 3: Implement**

- Add `async redirects()` to `next.config.mjs`.
- Delete the products and solutions routes and the mockup images.
- Clean up `data.js`.
- Set the sitemap's static routes to `'' , '/services', '/audit', '/partners', '/insights', '/about', '/contact', '/privacy', '/terms'`.
- Confirm with `grep -rn "products\|techCategories" src` that nothing imports removed exports.

- [ ] **Step 4: Make lint clean**

Run `npm run lint`. Fix every remaining **error**, in legacy files too, with the smallest change (for example unescaped entities or unused imports). Warnings may stay. Expected: `0 errors`.

- [ ] **Step 5: Full verification**

Run each of these:
- `npm test`: all pass.
- `npm run lint`: 0 errors.
- `npm run build`: succeeds.
- `npm start -- -p 3100` then `node scripts/smoke-ssr.mjs`: every line PASS.
- `curl -s localhost:3100/ | grep -c 'adsbygoogle'`: `0`.

Run Lighthouse on `/` (Chrome DevTools or `npx lighthouse http://localhost:3100 --only-categories=performance,accessibility,seo --quiet`) and record the scores. Targets from the spec: performance and accessibility of at least 95, LCP under 2.0s, CLS under 0.05.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "chore: retire products/solutions with redirects; lint clean"
```

---

## Out of scope for Phase A (Phase B and C in the spec)

- Practice pages `/services/*` in the new design, `/engagements`, `/work/[slug]`, `/how-we-work`, and the About and Partners rewrites.
- Restyling insights, moving the news feed, sitemap chunking and dedupe, the cookie consent banner, `llms.txt`.
- The People section: it needs the founders' names, photos and bios from the owner.
- Product screenshots: they need real captures from the owner.
