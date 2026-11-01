# Vector Dynamic website redesign: positioning, funnel and design plan

Date: 2026-11-01
Status: draft for owner approval. No code has been written.
Written for: the owner of Vector Dynamic, and whoever builds the site from this document.

---

## 0. Summary

The current site cannot win high-ticket international clients, for four reasons:

1. **Google and AI crawlers see an empty page.** Fetching the live homepage returns 53 characters of body text and no `<h1>`. A bug in the theme provider hides the entire page until JavaScript runs.
2. **It makes claims it cannot prove.** "99% Retention Rate" and "Global Enterprise Clients" appear on a company with no clients yet. A buyer who checks one claim and finds it false stops trusting everything else.
3. **It says everything and nothing.** The hero cycles through "Digital Dominance / Intelligent Ecosystem / Autonomous Future / Enterprise Success". There are five services, six products named "To be anounced" (sic), and a SaaS-plus-ERP-plus-consulting message. Nobody can repeat what the company does.
4. **It looks like the template everyone recognises.** Inter and Space Grotesk, dark mode with glowing orbs, cyan, violet and magenta accents, typing animation, and three-card grids. This is the pattern that design writers now call "AI slop". Google AdSense blocks on a services site also read as cheap.

The plan:

- **Position** Vector Dynamic broadly, as the engineering partner that builds the software and AI a business runs on: custom software, ERP and business systems, AI and machine learning, automation, all built to scale and kept running. One sharp promise sits on top of a wide capability range (section 3).
- **Sell a ladder**, not a service menu: paid audit, then fixed-price sprint, then monthly retainer or dedicated pod (section 4).
- **Replace borrowed credibility with true credibility.** Show real systems, real people, real process and explicit risk reversal (section 6).
- **Rebuild the site** as an editorial, light-first, text-forward design in a new visual system (sections 8 and 9), shipped in phases so a credible landing page exists in days, not weeks (section 11).

---

## 1. Evidence and what it does and does not tell us

Sources are listed in section 13. Much of the market data comes from vendor blogs. I treat it as directional and say so where it matters.

| Finding | Source quality | What we take from it |
|---|---|---|
| Niche positioning is repeatedly linked to higher fees and close rates (claims range from 20% to 60% higher fees). | Agency-marketing blogs, numbers vary widely. | Direction is consistent, the numbers are not reliable. We commit to a focus, but don't promise ourselves a specific premium. |
| Upwork's 2026 report: skills that mention AI grew 109% year on year, "AI integration" grew 178%, full-stack stayed steady. | Platform data from a company with a commercial interest. | Real demand for putting AI into existing software. Not proof that cold outreach converts. |
| Gartner (June 2025) predicts over 40% of agentic AI projects will be cancelled by end of 2027, citing cost, unclear value and weak risk controls. The MIT "GenAI Divide" report found about 95% of enterprise pilots showed no measurable P&L impact within six months. | Widely cited, but we only saw secondary coverage. The MIT figure is narrower than headlines suggest. | Buyers have been burned by stalled pilots. "We get it to production and keep it working" is a sharper promise than "we build AI". |
| Buyer research: about one in three B2B buyers rank a provider's grasp of their specific business as the top selection factor. Reviews and prior experience are the most-consulted trust sources. | Older Clutch research and a TrustRadius report. | Industry fluency and verifiable proof beat generic capability lists. |
| Older IDC and Robert Half findings: for offshore work, practical barriers (communication, time zone, legal rights to IP) worried US executives more than security. | Old (some pre-2010). | Our objection handling should lead with overlap hours, communication rhythm and IP ownership. |
| Agency-site guidance: primary call to action in the first screen, proof next to the call to action, case studies in Challenge, Approach, Shipped, Result order. | Design-agency blogs. | Reasonable conventions. We follow them. |
| Fixed-price, time-and-materials and dedicated-team are the standard engagement models. Dedicated teams are billed monthly. | Vendor blogs. | Matches our ladder. No data on retainer churn was found. |
| AI agent build cost bands (vendor guides): about $25K to $150K for business-grade agents, $80K to $350K for enterprise, and roughly $500 to $5,000 a month for ongoing support. | Vendors selling these services. | Planning anchors only. Validate on real sales calls. |

**What I could not find:** independent data on how US buyers perceive Bangladeshi vendors, or tested rebuttals. Our objection handling in section 6 is therefore reasoned from the general offshore research, not proven for this market.

---

## 2. Who we are selling to

The two course documents already choose: one niche, one country, decision-makers only. This section refines who and why, from the buyer's side.

### 2.1 Primary buyer

**A founder, COO, or head of operations/engineering at a 20 to 300 person B2B company in the US (UK and Australia second).** They have:

- Manual, repetitive work that is costing real money (data entry, document handling, reporting, lead handling, approvals).
- Already tried something with AI (a pilot, a chatbot, a vendor tool) that did not stick, or are under pressure to "do something with AI".
- A small internal engineering team (or none) that is busy with the core product.
- A budget for projects in the $15K to $150K range and the authority to sign it.

### 2.2 What they are actually afraid of, in the order they check

1. "Is this a real company, or two people with a template site?"
2. "Will this vanish after I pay a deposit?"
3. "Will it work in production, or become another pilot that stalls?"
4. "Can I reach them when I need to? Time zone, language, responsiveness."
5. "Who owns the code and my data?"
6. "Will I be the first customer they ever had?"

The site's job is to answer these six questions before a visitor asks them. The current site answers none of them.

### 2.3 Secondary audience (separate page, separate message)

**Small software and AI agencies that need delivery capacity** (course module M5). Different buyer, different promise (white-label, NDA, fixed rates), lower margin, steady volume. They get their own page at `/partners`, not a place in the main nav message. Do not let the agency pitch dilute the main brand.

---

## 3. Positioning

### 3.1 Recommendation (revised after owner feedback: broad positioning)

> **Vector Dynamic engineers the software and AI that businesses run on: custom platforms, ERP and business systems, AI and automation. Built to scale, shipped to production, and kept running.**

Short form for profiles and directories: **"Custom software, ERP and AI, built to scale and kept running."**

**How to be broad without sounding generic.** Large full-service firms list a wide range of services but pair it with one differentiator: Itransition with breadth across business systems, Netguru with design-led product work, Thoughtworks with engineering quality. Vector Dynamic does the same:

- **Wide in what we build:** the four practice areas in section 3A.
- **Narrow in what we promise:** every system reaches production, is built to scale, and is run after launch. That promise is the same whether the project is an ERP, an AI agent or a web platform, so the brand stays one story.
- **Specific in proof:** each practice area has its own portfolio piece, so "we can do anything" is shown, not claimed.

The audience is still the operations-heavy B2B company (section 2). The difference is that the homepage no longer narrows the offer to AI.

Three pillars hold the claim up:

1. **Production, not pilots.** Every engagement ends in something running inside the client's real workflow, with monitoring and a named owner. This answers the Gartner/MIT-style fear directly.
2. **Senior-only, small team.** No account managers, no bait-and-switch. The people on the call build the system. (Only claim this if true. See section 12.)
3. **You own everything.** Code in the client's repository from day one, client-owned cloud accounts, full IP assignment, documented hand-off.

### 3.2 Why this and not the alternatives

| Option | Verdict |
|---|---|
| **"AI automation developer"** (the ChatGPT suggestion's rejected option) | Too narrow for your actual capability (ERP, microservices, custom platforms). Also the most crowded phrase in 2026. |
| **"Technical development partner for agencies"** (the ChatGPT recommendation) | Good for fast early revenue, but it caps margin, the buyer never sees your brand, and it contradicts your stated goal of high-ticket direct clients. Keep it as a secondary channel (`/partners`), not the brand. |
| **"Enterprise Software & AI Solutions"** (current) | Says nothing. Every offshore firm says it. |
| **Recommended: broad capability (software, ERP, AI, automation) under one "built to scale and kept running" promise** | Covers everything the team can do, so any client need can be sold, while the single promise keeps the brand memorable. Naturally recurring, because production systems need running. |

### 3.3 Where focus still matters: outbound, not the brand

The research consistently links focus to better close rates, and the course says one niche and one country. With broad brand positioning, focus moves to **outbound campaigns**: each campaign targets one industry and one practice area (for example "custom ERP for distributors" or "AI document processing for logistics"), and links to a matching landing page. The brand stays broad; the message each prospect receives stays specific.

Research on navigation is mixed: some agencies report that buyers mostly use service pages and ignore industry pages, others that industry-first navigation converts better. So the site makes **practice areas the primary navigation** and treats **industry pages as landing pages** for campaigns, then lets analytics decide whether industry navigation earns a place in the menu.

Which industries to start with is still your call: **My default suggestion: pick one operations-heavy vertical where you have real project experience** (candidates: logistics and freight, healthcare administration, property and real-estate operations, professional services back-office, distribution/inventory). I do not know which of these you have real work in, so I have left this as an open decision (section 12). The site is built so a vertical page (`/for/<industry>`) is a template, and adding one takes hours.

---

## 3A. Capability map and portfolio

### 3A.1 Four practice areas

Everything the team does fits into four practice areas. Each one gets a page, a portfolio piece and its own outbound angle. "Scalable" is not a fifth service: it is the engineering standard across all four, shown on every page.

| Practice area | What it covers | Buyer's trigger |
|---|---|---|
| **Custom Software and Platforms** | Web platforms, SaaS products, internal tools and dashboards, mobile apps, APIs, microservices, legacy modernisation. | "Off-the-shelf tools don't fit how we work" or "our old system can't keep up." |
| **ERP and Business Systems** | Custom ERP, CRM, HRM, inventory, finance and reporting modules; integrating or extending existing ERPs (for example Odoo or NetSuite); data migration. | "Our workarounds cost more than the software" or "we need one system instead of ten spreadsheets." |
| **AI and Machine Learning** | Custom AI, LLM applications, RAG and knowledge systems, computer vision, predictive models, ML pipelines that scale, model deployment and evaluation. | "We have data and want it to do work" or "our AI pilot never reached production." |
| **Automation and Integration** | Workflow automation, AI agents, document processing, system-to-system integration, reporting automation. | "People are doing repetitive work that a system should do." |

**Built to scale (the standard across all four):** cloud-native architecture, microservices where they earn their place, load testing, monitoring, CI/CD, documented hand-over. Shown as a short "How we engineer" band on every practice page, not as a separate service.

**A trust move for ERP:** vendor sources (with their own bias) agree that full custom ERP only pays off for genuinely complex workflows, and that a hybrid of buying commodity functions and building the operational core is often cheaper. The ERP page should say this openly: "We'll tell you when not to build custom." Advising against a sale signals honesty and is rare among offshore firms.

### 3A.2 The portfolio: products you built become proof

With no client case studies yet, your own products are the proof that each practice area is real. They are mapped to practice areas, labelled honestly as **"Built by Vector Dynamic"** with their true status (live, in pilot, in development), and shown with real screenshots, not AI-generated mockups.

| Practice area | Portfolio piece (existing product) | What it proves |
|---|---|---|
| AI and Machine Learning, built to scale | **SyncDaily** (live: the API answers today) | A production AI pipeline: ingestion, AI curation, publishing, SEO endpoints. |
| ERP and Business Systems | **Okebase** (business OS: P&L, sales, inventory, employees, suppliers) | You can build an ERP-class system. |
| Custom Software and Platforms | **Opsera** (project and team orchestration) | Complex multi-user SaaS with integrations. |
| Automation and Integration | **AdVantage AI** (marketing automation) and **AI Receptionist** (voice agent, scheduling, CRM sync) | Agents and automations that act inside real tools. |

Not shown on the B2B site: **Amardera** (consumer app for shared flats). It is a different audience and would blur the message.

Each portfolio page follows the case-study shape: problem, approach, architecture diagram, what shipped, current status, what we learned. When the first client pilot finishes (course Week 4 and onward), client case studies go above the product pieces.

---

## 4. What we sell: the offer ladder

Five services plus six products is too many things. Replace with **three offers on one ladder**. Each has a fixed shape, a clear output and a starting price.

| Step | Offer | What the client gets | Typical shape | Starting price signal (my planning assumption, validate on calls) |
|---|---|---|---|---|
| 1 | **Systems Review** (the "hook", course module M2) | A written review of one workflow or system: where time and money leak, what to automate or fix, a rough build estimate. | 1 to 2 weeks | Free for qualified prospects at first (course plan). Move to a paid fixed fee once you have two case studies. |
| 2 | **Build Sprint** | One working automation, AI feature or system module in production, with documentation and hand-over. | 4 to 8 weeks, fixed price, milestone billing | "Projects start at $15,000." A published floor filters out bad-fit buyers and signals seriousness. |
| 3 | **Run and Grow** (the recurring revenue) | Either **Managed Operations** (monitoring, fixes, small improvements, monthly report) or a **Dedicated Pod** (2 to 5 engineers working inside the client's roadmap). | Monthly, 3-month minimum | Managed: from roughly $2,000 a month. Pod: priced per engineer per month. |

Why this ladder fits your goal (high-ticket and recurring):

- The audit earns the first meeting and shows skill (course plan: "often the highest-converting outbound tactic").
- The sprint is a bounded risk for the client, so it is easy to say yes to.
- The retainer or pod is where lifetime value lives, and it is natural: a system in production needs running.

The ladder is the same for every practice area in section 3A: a review, then a fixed-price build, then running and growing the system. So the site shows **what we build** (four practice areas) and **how you start** (three steps) as two separate, simple ideas. A buyer who wants an ERP and a buyer who wants an AI agent take the same path.

---

## 5. Brand story and voice

### 5.1 The story (for the About page and the founders' LinkedIn)

Draft, to be rewritten once the true facts in section 12 are supplied:

> Most AI projects stall between the demo and the real workflow. We started Vector Dynamic to be the team that closes that gap. We build our own AI products and run them in production, so we know what breaks after launch. We bring that experience to operations teams that need systems to keep working on a Tuesday afternoon, not just in a demo.

The "we run our own AI in production" claim is true today: the Insights platform sits on a live SyncDaily API with article ingestion, AI curation, publishing and sitemap endpoints. It is the strongest proof asset you have with zero customers, so the plan builds around it (section 6.2).

### 5.2 Voice rules

- Specific over impressive. "Cut invoice processing from 2 days to 20 minutes" beats "unlock efficiency".
- Plain words. Short sentences. Name the thing.
- First person plural, one clear verb per sentence.
- Banned words (all are AI-copy tells): streamline, empower, supercharge, unlock, leverage, cutting-edge, world-class, enterprise-grade, seamless, revolutionise, next-gen, synergy.
- No invented numbers. Every statistic carries a source or is removed.
- No claims about clients, retention or scale until they are true.

### 5.3 Headline options for the homepage (pick one)

1. **"The software and AI your business runs on. Built to scale. Kept running."**
2. "Custom software, ERP and AI, engineered for the way your business actually works."
3. "We build the systems your operations depend on, from ERP to AI agents, and keep them running."

Sub-headline: "Vector Dynamic is a senior engineering team. We build custom platforms, ERP and business systems, AI and automation for growing B2B companies, with the code in your repository from day one."

Primary call to action: **"Book a 30-minute systems review."** Secondary: **"See how we work."**

---

## 6. Trust architecture (with zero customers)

### 6.1 Remove immediately (these actively damage trust)

- Fake stats: "99% Retention Rate", "Global Enterprise Clients".
- "To be anounced" product names and the fake "Project O-1 / R-AI / ..." code names. Hiding your own products behind placeholders looks unfinished. Use the real names and present them as portfolio pieces (section 3A.2).
- The placeholder phone `+1-555-0123-456` in the structured data.
- Google AdSense blocks and the AdSense script. Ads on a services site reduce perceived quality.
- Typing-headline animation and floating orbs.
- The six AI-generated product mockup images.

### 6.2 Replace with true proof

| Proof asset | What it is | Where it appears |
|---|---|---|
| **Our own system in production** | A short, honest technical case study of SyncDaily: what it ingests, how AI curation works, how it publishes, how it is monitored, what broke and what we changed. Labelled "Internal product", never "client". An architecture diagram drawn for the page. | `/work` and the homepage proof section |
| **Named humans** | Founder photos, short bios, real LinkedIn links, real email addresses, a Dhaka office address (also needed for Google Business Profile). | About page, footer, contact page |
| **Process in public** | The actual weekly rhythm, deliverables per stage, a sample statement of work, a sample weekly report (redacted/fictional but clearly labelled as sample). | `/how-we-work` |
| **Risk reversal** | Fixed price with milestone billing, full IP assignment, mutual NDA on request, code in client repo from day one, a weekly demo, a no-lock-in clause. | Homepage strip and `/how-we-work` |
| **Engineering writing** | Original technical articles from the Insights engine (already built). Quality over volume. | `/insights` |
| **Verified third-party profiles** | Google Business Profile, Crunchbase, Wellfound, then Clutch and GoodFirms once there are reviews. All must use the same name, address and description as the site. | Footer links and schema |
| **First case studies** | Course plan already says: offer a discounted pilot to one friendly business in exchange for a case study. Add the case-study template now so it takes an hour to publish. | `/work` |

### 6.3 Answer the offshore objections openly

An FAQ block on the homepage and `/how-we-work`:

- **Time zone:** "We work a fixed overlap window of [X] hours with your morning/afternoon. Calls are scheduled inside it." (Dhaka is UTC+6, so a US East Coast overlap is early evening for the team. State the real window.)
- **Communication:** weekly demo, shared channel, written weekly update, one named lead.
- **IP and data:** assignment of all IP on payment, client-owned cloud accounts, NDA, access limited by role. Do not claim SOC 2 or ISO until you hold them.
- **"Will we be your first client?"** Be honest: "We are a young company. That is why the first engagements have fixed prices, milestone billing and full code ownership: your risk is small and visible." Honesty beats a bluff a buyer can disprove in one call.

---

## 7. Site architecture and funnel

### 7.1 Sitemap

```
/                          Home (conversion page)
/services                  Four practice areas + the three-step engagement ladder
/services/custom-software  Custom Software and Platforms
/services/erp              ERP and Business Systems
/services/ai               AI and Machine Learning
/services/automation       Automation and Integration
/engagements               Review, Build Sprint, Run and Grow (Managed / Dedicated Pod)
/work                      Portfolio, filterable by practice area
/work/[slug]               SyncDaily, Okebase, Opsera, AdVantage AI, AI Receptionist, later client cases
/how-we-work           Process, engagement models, security, IP, FAQ
/audit                 The Systems Review request page (course module M2 hook)
/partners              White-label for agencies (course module M5)
/about                 Story, founders, location
/insights              Original engineering articles only (see decision 3)
/contact               Booking + form
/privacy  /terms
/for/[industry]        Vertical landing template (phase 3)
```

Delete or retire: `/solutions` (duplicates services); `/products` and `/products/[id]` (folded into `/work`, with a redirect from each old URL); the news-aggregator "Tech Radar" view on `/insights`.

Navigation (six items maximum): **Services** (a small dropdown listing the four practice areas), Work, How we work, Insights, About, then a persistent **Book a review** button. No theme toggle in the nav.

### 7.2 The funnel, mapped to the six course modules

```
M1 LinkedIn    ─┐
M3 Cold email  ─┤
M5 Partners    ─┼─►  Landing page with ONE next step  ─►  Discovery call  ─►  Proposal
M6 Profiles    ─┤     (/audit, /partners, or /)            (30 min)          (fixed price)
SEO / content  ─┘                                                              │
                                                                               ▼
                                           Build Sprint ─► Run and Grow (retainer / pod)
```

- Every outbound message links to a page that matches it: LinkedIn and email go to `/audit` (or a vertical page later), agency outreach goes to `/partners`.
- Every page has exactly one primary call to action, repeated, never competing.
- Booking runs through an embedded free Cal.com or Calendly link (course plan, Day 2).
- The contact and audit forms capture hidden `utm_source`, `utm_medium` and `utm_campaign` fields and include them in the notification email, so the weekly review can compare channels with real data.
- Google Analytics events: `cta_click`, `booking_started`, `audit_submitted`, `contact_submitted`, `case_study_viewed`.
- Every new inquiry emails the team and creates a row for the shared tracking sheet (manual at first, automated later).

---

## 8. Page blueprint

### 8.1 Homepage (top to bottom)

1. **Hero.** Headline from section 5.3, sub-headline, one primary and one quiet secondary link. To the right (or below on mobile), not a stock image: a real, small system diagram or a screenshot of the SyncDaily dashboard. Under it, a plain "facts strip" of true statements, for example: Senior-only team, Code in your repo from day one, Fixed-price sprints, [X]-hour overlap with US mornings.
2. **The problem.** Two or three sentences on why AI projects stall, with the Gartner and MIT figures cited and linked. This frames the buyer's own experience.
3. **What we build.** The four practice areas from section 3A, each with one line of what it covers, its buyer trigger and a link. Shown as a numbered, ruled list or an asymmetric 2×2, not four identical rounded icon cards.
4. **Built by us.** The portfolio strip: one real screenshot per practice area (SyncDaily, Okebase, Opsera, AdVantage AI or AI Receptionist), labelled with practice area and true status. This is where "we can do anything" becomes visible.
5. **How you start.** The three-step ladder from section 4 (review, build sprint, run and grow) with price signals.
6. **How an engagement runs.** Four stages, with the duration and the deliverable of each. This is the concrete process buyers say they trust.
7. **Built to scale.** A short engineering band: architecture, testing, monitoring, hand-over. Use the SyncDaily diagram and real numbers from the system.
8. **Risk reversal.** Six short commitments (section 6.2).
9. **Who this is for, and who it is not for.** Includes the price floor. Qualifying out bad fits saves sales time and signals confidence.
10. **People.** Founder photos and one-line bios.
11. **FAQ.** The offshore objections (section 6.3), written as straight answers.
12. **Closing call to action.** Booking widget inline, plus the free-review option.

### 8.2 Other key pages

- **/audit:** what the review covers, what you will receive, how long it takes, a sample (redacted or fictional, clearly labelled), and a short form. This page is the target of most outbound links.
- **/work:** the SyncDaily write-up now; case-study template (Challenge, Approach, What shipped, Result, Quote) ready for the first pilot.
- **/how-we-work:** the stages in detail, engagement models, tools, reporting, security and IP, FAQ, sample SOW and weekly report.
- **/partners:** white-label offer, NDA, fixed rates, quality guarantees, a one-small-project start. Separate tone, same design system.
- **/about:** the story, founders, location, what we believe about software (three or four specific principles instead of "Innovation, Integrity, Excellence, Partnership").
- **/contact:** booking widget first, form second, email and address visible.

---

## 9. Visual design system

### 9.1 Principles

1. **Editorial, not "tech template."** Think a well-made consultancy or engineering journal: strong typography, generous space, thin rules, real diagrams.
2. **Light-first.** Warm off-white paper, dark ink text. A dark theme is optional later and not part of launch. One theme halves design and QA effort and reads as more premium to non-technical buyers.
3. **One accent, used sparingly.** The call to action and a few data highlights. No gradients on text, no glow, no multi-colour accent set.
4. **Show real things.** Diagrams drawn for this site, real screenshots, real people. No stock photos and no AI-generated mockups.
5. **Quiet motion.** A short fade-and-rise on scroll, nothing continuous. Remove the smooth-scroll library, typing effect, orbs and parallax.

### 9.2 Starting palette (to be validated)

These are proposed starting values. Validate contrast with an accessibility audit before the build (I can run the colour-palette tools for this, see section 12).

| Role | Starting value | Use |
|---|---|---|
| Paper | `#F6F3EC` | Page background |
| Surface | `#FFFFFF` | Cards, form fields |
| Ink | `#101418` | Body text, headings, footer background |
| Graphite | `#3A424B` | Secondary text |
| Rule | `#D9D3C7` | Dividers and borders |
| Signal | `#C93D20` | Primary buttons and key highlights only |
| Verdigris | `#1F6F66` | Diagrams, success states, secondary highlights |

The logo is a white mark, so it sits on Ink (header on scroll, footer, diagram tiles). A dark-ink version of the mark is needed for the paper background. I will derive it from the existing SVG if you approve.

### 9.3 Type

Replace Inter and Space Grotesk, the most recognisable "default" pair.

- **Display and headings:** a serif with character, for example Newsreader (Google Fonts, variable).
- **Body and UI:** a clean humanist or grotesque sans, for example Hanken Grotesk.
- **Labels, numbers, code:** a mono, for example JetBrains Mono, used for small caps-style labels and figures.
- Scale: 1.25 ratio, body 17 to 18px, line length 60 to 70 characters, headings with tight tracking.

(Fonts are my suggested starting point. The final choice should be judged on screen with real copy.)

### 9.4 Layout and components

- 12-column grid, 1200px max width, large vertical rhythm (96 to 128px between sections on desktop).
- Ruled lists and numbered rows instead of rounded icon cards. Where a card is needed, a flat bordered surface with no shadow.
- Buttons: two styles only (solid Signal, quiet underlined link).
- Forms: large labels, visible borders, inline validation, no `alert()` popups.
- Accessibility: WCAG 2.2 AA contrast, visible focus states, keyboard-reachable everything, reduced-motion respected, skip link kept.
- Mobile: the booking button stays reachable (sticky bottom bar), the nav collapses to a full-screen panel.

---

## 10. Technical plan

### 10.1 Foundation fixes (before any design work)

1. **Render the page on the server.** Remove the `mounted` gate that makes the theme provider return `null` (`src/lib/ThemeContext.jsx`). With a single light theme, delete the provider entirely.
2. **Contact route:** escape every field in the email HTML, validate email and lengths, add a honeypot and basic rate limiting, fail clearly when the email key is missing instead of falling back to a placeholder key.
3. **Fix ESLint:** replace `eslint-config-next@^0.2.4` with the matching Next 16 version and make lint pass.
4. **Remove dead and risky code:** AdSense script and component, debug `console.log` lines, unused dependencies (`nodemailer`, `next-sitemap`, `framer-motion`, `lenis` if smooth scroll is dropped), the unused `sitemap-api.js` (or use it to fix the sitemap, see below).
5. **Sitemap:** use the chunked index, de-duplicate URLs, drop invented `lastmod`/`changefreq` values, escape XML.

### 10.2 Build approach

- Keep Next.js 16 App Router and React 19. The framework is fine, the implementation is the problem.
- Keep the Insights data layer (`src/lib/syncdaily.js`), the article page and its SEO code. Re-skin them.
- Replace the global CSS and CSS Modules with a small token-based stylesheet (CSS custom properties from section 9.2) and a limited set of components. Delete the old themes and component CSS.
- Structured data: Organization (real contact details), WebSite, Service for each offer, Article on insight pages, BreadcrumbList. Remove anything not true.
- Cookie consent banner before Google Analytics fires for UK/EU visitors (required for the EU/UK outreach in the guide).
- Add the public `llms.txt` and clean `robots.txt`; make the site readable by AI crawlers because buyers now research vendors with AI assistants.
- Performance budget: LCP under 2.0s, CLS under 0.05, Lighthouse 95 or higher on the homepage, fonts self-hosted through `next/font`.

### 10.3 Content model

Move copy out of JSX into typed content files (`content/home.js`, `content/offers.js`, `content/faq.js`, `content/work/*.mdx`) so the team can edit text without touching components, and adding a case study or industry page is one new file.

---

## 11. Phasing (aligned with the 90-day course)

The course needs a one-page site with offer, demo and booking link by Day 2. Waiting for a full redesign would block outreach, so the work ships in layers.

| Phase | When | Deliverable | Why now |
|---|---|---|---|
| **A. Launchpad** | Days 1 to 5 | Server-rendering fix; contact-route fixes; fake claims, placeholder products and ads removed; new homepage hero, offers, process, risk reversal, FAQ; `/audit`; `/contact` with booking; correct schema and real contact details. Light version of the new visual system. | Outreach starts on Day 3. Every prospect who clicks must find a believable page. |
| **B. Full system** | Weeks 2 to 3 | Complete design system; `/services` and three sub-pages; `/how-we-work`; `/about`; `/partners`; restyled `/insights`; sitemap and consent fixes. | Supports the Phase 1 audit engine and LinkedIn profile traffic. |
| **C. Proof** | Weeks 3 to 5 | SyncDaily technical case study with diagram; sample SOW and weekly report; case-study template; directory profile copy that matches the site exactly. | Needed for the Week 4 calls and the Month 2 partner outreach. |
| **D. Scale** | Month 2 onward | Vertical landing pages; free audit checker as a lead magnet (guide channel 25); first real case studies and testimonials (course Week 12). | Feeds SEO and the content channels once outbound is proven. |

---

## 12. Decisions and information I need from you

Defaults are stated so work can proceed if you do not answer.

1. **Vertical wedge.** Which industry have you built real software for? *Default: stay industry-neutral on the homepage and choose the vertical for outbound lists after you tell me.*
2. **True facts for the site.** Founding year, team size, founders' names and roles, office address, whether you hold any certification, the overlap hours you will commit to, and your real phone number. *Default: leave these as clearly marked gaps, never invent them.*
3. **Insights scope.** Keep only original engineering articles on vectordynamic.com, and move the external-news "Tech Radar" and ads to the SyncDaily domain? *Default: yes. News aggregation and ads dilute a B2B services brand, and a feed of other people's headlines does not build trust.*
4. **Logo.** You offered the logo. The existing `public/logo.svg` is a white mark only. I need a dark version and any wordmark files. *Default: derive a dark version from the existing SVG.*
5. **Products as portfolio.** What is the true status of Okebase, Opsera, AdVantage AI and AI Receptionist (live, pilot, in development), and can you supply real screenshots? *Default: show them as "Built by Vector Dynamic" portfolio pieces with honest status labels (section 3A.2); leave out Amardera.*
5a. **Past client work.** Has the team built ERP, AI or custom systems for clients before Vector Dynamic (as employees or freelancers)? If yes and you may describe it (anonymised if needed), it becomes the strongest proof on the site. *Default: none shown until you confirm.*
6. **Pricing signals.** Are you comfortable publishing "Projects start at $15,000"? *Default: yes, as a qualifier; adjust after the first three sales conversations.*
7. **Colour and type.** Approve the direction in sections 9.2 and 9.3, or ask for alternatives. I can generate and accessibility-audit a full palette first.

Assumptions I made that you should correct if wrong: the primary market is the US with UK and Australia second; the team is based in Bangladesh; the company is two founders doing sales plus delivery teams (from the course document); no paying client exists yet.

---

## 13. Sources

- [Niche positioning for web development agencies (100signals)](https://100signals.com/positioning-for-web-development-agencies/)
- [Niche vs generalist agency valuation (Lightning Path Partners)](https://lightningpathpartners.com/agency-blog/niche-vs-generalist-agency-valuation)
- [Upwork In-Demand Skills 2026, press release](https://www.upwork.com/press/releases/upworks-in-demand-skills-2026-demand-for-top-ai-skills-more-than-doubles-as-ai-is-embedded-into-everyday-work)
- [Gartner: over 40% of agentic AI projects will be scrapped by 2027 (coverage)](https://www.thestar.com.my/tech/tech-news/2025/06/25/over-40-of-agentic-ai-projects-will-be-scrapped-by-2027-gartner-says)
- [MIT "GenAI Divide" 95% figure, what it actually means](https://tiaton-web.pages.dev/blog/2026-02-22-why-95-percent-of-enterprise-ai-pilots-fail)
- [Clutch: what B2B buyers want](https://clutch.co/resources/b2b-buyer-data)
- [TrustRadius: B2B tech buying in the age of AI](https://solutions.trustradius.com/vendor-blog/bridging-the-trust-gap-b2b-tech-buying-in-the-age-of-ai/)
- [IDC: security is not the barrier to offshore outsourcing (CSO)](https://www.csoonline.com/article/2117791/idc--security-isn-t-a-barrier-to-offshore-outsourcing.html)
- [Considerations in offshore software development (Cooley)](https://www.cooley.com/news/insight/2023/2023-05-08-considerations-in-offshore-software-development)
- [Best B2B homepage examples 2026 (Blend B2B)](https://www.blendb2b.com/blog/the-10-best-b2b-homepage-examples)
- [Agency landing pages that work (Muffin Group)](https://muffingroup.com/blog/agency-landing-pages)
- [AI agent development cost guide 2026 (Codewave)](https://codewave.com/feeds/blog/ai-agent-development-cost)
- [Fixed price vs T&M vs dedicated team (Cubix)](https://www.cubix.co/blog/software-development-engagement-models/)
- [AI slop design tells (925 Studios)](https://www.925studios.co/blog/ai-slop-design-tells)
- [Fix AI slop in web design, tell by tell (Capital and Compute)](https://capitalandcompute.net/blog/fix-ai-slop-design/)
- [How full-service firms structure services (Andersen, top custom software companies)](https://andersenlab.com/blueprint/top-custom-software-development-companies)
- [Custom vs off-the-shelf ERP decision framework (Vinsys)](https://www.vinsys.com/blog/custom-vs-off-the-shelf-erp-decision-framework-for-mid-size-enterprises)
- [Custom ERP vs off-the-shelf true cost for SMBs (Differ)](https://differ.blog/p/custom-erp-vs-off-the-shelf-true-cost-for-smbs-191387)
- [Building an agency portfolio with no clients (OutlierKit)](https://outlierkit.com/resources/how-to-build-ai-automation-agency-portfolio/)
- [Building trust without case studies](https://agency-site-7to.pages.dev/blog/building-trust-without-case-studies)
- [B2B website navigation design (LowCode Agency)](https://www.lowcode.agency/blog/b2b-website-navigation-design-how-to-structure-it-for-buyers)
- [Bangladesh software company comparison (Riseup Labs, self-ranked: biased)](https://riseuplabs.com/best-software-development-company-in-bangladesh/)
- Internal: `90_Day_Client_Acquisition_Course.docx`, `Client_Hunting_Guide.docx`, a live fetch of vectordynamic.com on 2026-11-01, and a review of this codebase.
