// Curated, original B2B engineering guides for /insights and /insights/[slug].
// Replaces scraped general news on vectordynamic.com so foreign B2B buyers see genuine technical authority.

export const articles = [
  {
    slug: 'custom-erp-vs-odoo-vs-off-the-shelf-cost-guide',
    title: 'Custom ERP vs. Odoo vs. Off-the-Shelf: A Realistic Decision Guide for 10–250 Person B2B Companies',
    excerpt:
      'When spreadsheets break, most companies get pitched either a bloated six-figure enterprise rollout or a rigid SaaS tool that forces new workarounds. Here is how we decide what to buy, what to configure in Odoo, and what actually earns custom code.',
    category: 'Business Systems & ERP',
    categories: ['Business Systems & ERP', 'Architecture'],
    published_at: '2026-10-28T09:00:00Z',
    updated_at: '2026-11-01T09:00:00Z',
    stats: { reading_time_minutes: 6 },
    tags: ['custom ERP', 'Odoo', 'business systems', 'software architecture', 'B2B operations'],
    content: `When a growing B2B distributor, service operator, or manufacturer hits 15 to 150 employees, the symptoms look identical almost everywhere: sales quotes sit in one tool, warehouse inventory lives in three shared spreadsheets, purchasing happens over email, and finance spends every Friday night reconciling numbers that still disagree on Monday morning.

At that moment, founders and COOs usually hear two extreme pitches:

1. **Enterprise ERP consultants** quote $120,000 to $300,000+ and a 9-to-14 month rollout for software built around Fortune 500 accounting departments.
2. **Low-end SaaS vendors** sell a $49/user monthly subscription that looks clean in a 20-minute demo—until your team realizes it cannot model split shipments, customer-specific contract pricing, or multi-step approvals, forcing everyone right back into sidecar spreadsheets.

As engineers who build custom ERP modules *and* configure platforms like Odoo, our rule is simple: **never pay custom engineering rates to rebuild commodity software, and never force your core operational advantage into a rigid template.**

## The Three-Bucket Architecture Rule

Before writing a single line of code, divide your business processes into three buckets:

### Bucket 1: Commodity & Statutory Processes — Buy Off-the-Shelf
- **Examples:** General ledger accounting, tax filing, standard payroll processing, basic email and calendar.
- **Right choice:** QuickBooks, Xero, Gusto, Microsoft 365, or Google Workspace.
- **Why:** Tax rules and statutory compliance change constantly. Rebuilding double-entry tax accounting from scratch has zero competitive upside.

### Bucket 2: Standard Operations With Moderate Tailoring — Configure an Extensible Platform
- **Examples:** Standard CRM pipelines, basic warehouse bin tracking, straightforward purchase orders.
- **Right choice:** Configure an extensible platform such as Odoo.
- **Why:** When 75–85% of your process matches standard distribution or service workflows, configuring Odoo gets you live in weeks at a fraction of custom cost.

### Bucket 3: Differentiated Operational Core — Build Focused Custom Software
- **Examples:** Complex quoting formulas, multi-party dispatch, custom customer/vendor portals, proprietary fulfillment logic.
- **Right choice:** Focused custom software integrated cleanly via API.
- **Why:** This is where your margin is won or lost—and where off-the-shelf workarounds burn hundreds of staff hours every month.

## What Real-World Hybrid Systems Look Like

In practice, the highest-ROI architecture for a 20-to-200 person company is rarely "100% custom" or "100% off-the-shelf." It is a **clean hybrid**:

- **Keep your existing accounting ledger** (QuickBooks, Xero, or NetSuite) as the statutory book of record for your accountant.
- **Build or tailor the operational layer** where orders, inventory reservations, dispatch, supplier receipts, and role-specific dashboards happen all day.
- **Connect the two through idempotent API syncs** so approved invoices, COGS entries, and payments post automatically without double entry.

## Five Questions to Ask Before Approving Any ERP Budget

1. **Have we traced one real order from quote to cash with the staff who actually type the data?** Executive summaries miss 80% of daily exceptions.
2. **Which exact spreadsheet or workaround costs the most weekly hours right now?** Ship that single module in 4–8 weeks before planning a year-long roadmap.
3. **Who owns the database, code, and hosting if we switch vendors in two years?** Avoid proprietary agency frameworks that hold your operational data hostage.
4. **How will legacy data be validated before cutover?** Demand scripted migrations and a parallel-run period where old and new totals must match.
5. **What will ongoing monthly support cost after launch?** Every operational system evolves as you add products, warehouses, and staff.

If you are weighing a custom build against Odoo or an existing SaaS tool right now, [request a free written Systems Review](/audit). If an off-the-shelf setup solves your problem for less money, we will tell you in writing.`,
  },
  {
    slug: 'why-b2b-ai-pilots-stall-before-production',
    title: 'Why 95% of B2B AI Pilots Stall Before Production—And How We Scope Sprints That Actually Ship',
    excerpt:
      'Building a 3-day AI demo on clean sample PDFs is easy. Keeping accuracy above 97%, latency low, and token bills predictable on Tuesday afternoon with real customer data requires a completely different engineering checklist.',
    category: 'Applied AI',
    categories: ['Applied AI', 'Production Engineering'],
    published_at: '2026-10-21T09:00:00Z',
    updated_at: '2026-11-01T09:00:00Z',
    stats: { reading_time_minutes: 7 },
    tags: ['AI agents', 'RAG', 'production AI', 'LLM evaluation', 'workflow automation'],
    content: `Over the past two years, almost every B2B leadership team has seen the same movie: someone wires OpenAI or Claude to five clean PDFs over a weekend, demos an impressive chat window on Monday, and declares that manual document work or customer triage is solved.

Three months later, nobody on the operations floor uses it.

Gartner expects over 40% of agentic AI initiatives to be canceled before the end of 2027 due to unclear ROI and weak risk controls, while MIT NANDA researchers reported that roughly 95% of enterprise generative AI pilots failed to produce measurable profit-and-loss impact within six months.

Having built and operated our own unattended AI pipeline ([SyncDaily](/work/syncdaily)) alongside voice and document workflows, we see the exact same four failure points kill pilots—and all four are preventable in week one.

## Failure Mode 1: No Golden Evaluation Set

Most teams tune prompts by "vibes"—testing three examples by hand, tweaking a system prompt, and hoping nothing else broke.

**How we engineer it instead:** Before building UI, we collect **50 to 100 real, messy historical inputs** from your business (scanned PDFs, half-written customer emails, edge-case SKUs) and write down the exact expected output for each. Every prompt, model, or retrieval change runs automatically against that golden test set in CI before reaching staging.

## Failure Mode 2: Asking an LLM to Do Deterministic Math or Unchecked Writes

Large language models are probabilistic text and reasoning engines—not calculators or database transactions. Letting a model calculate invoice totals, invent inventory availability, or fire irreversible API mutations without deterministic validation guarantees an expensive mistake.

**How we engineer it instead:**
- **LLMs handle unstructured translation:** reading messy PDFs, classifying intent, extracting candidate fields, and drafting grounded summaries.
- **Deterministic code handles rules & math:** schema validation, SKU/price lookups, totals verification, and permission checks run in plain, unit-tested code.
- **Confidence gates route edge cases to humans:** when an invoice scan is blurry or a purchase order exceeds $5,000, the workflow pauses in a fast one-click human review queue instead of guessing.

## Failure Mode 3: Permission-Blind Knowledge Search (RAG)

Dumping an entire company Google Drive into a vector database without document-level access controls means a junior rep's chat query can surface executive compensation notes or another client's contract terms.

**How we engineer it instead:** Every indexed chunk carries source metadata, version timestamps, and role/tenant access tags enforced *at query time* before context ever reaches the model—and every answer links directly to the exact source paragraph so staff can verify in one click.

## Failure Mode 4: Unbounded Token & Retry Loops

An autonomous agent stuck in a retry loop or fed 80-page documents on every turn can quietly burn thousands of dollars in API credits over a single weekend.

**How we engineer it instead:**
- Deduplicate and pre-filter inputs deterministically before calling any model.
- Route simpler classification steps to fast, low-cost models and reserve frontier reasoning models for complex synthesis.
- Enforce hard per-job, per-user, and daily token spend ceilings with instant Slack/email alerts.

## How to Scope Your First Production AI Sprint

Skip the "company-wide AI brain." Pick **one narrow, high-volume operational bottleneck**—such as parsing supplier bills of lading, triaging inbound service requests, or answering technician questions from 400 equipment manuals—and ship it end-to-end inside the tool your staff already keep open all day.

Want a realistic engineering assessment of an AI use case or stalled pilot? [Book a 30-minute discovery call](/book) or [request a free written Systems Review](/audit).`,
  },
  {
    slug: 'inside-syncdaily-running-an-autonomous-ai-pipeline',
    title: 'Inside SyncDaily: Lessons From Engineering and Operating an Unattended AI Pipeline in Production',
    excerpt:
      'What actually breaks when an ingestion, LLM summarization, and publishing pipeline runs 24/7 without human babysitting—and how those lessons shape every client system we build.',
    category: 'Case Study & Architecture',
    categories: ['Case Study & Architecture', 'Applied AI'],
    published_at: '2026-10-14T09:00:00Z',
    updated_at: '2026-11-01T09:00:00Z',
    stats: { reading_time_minutes: 5 },
    tags: ['SyncDaily', 'data pipelines', 'Python', 'reliability', 'case study'],
    content: `When buyers evaluate a young engineering firm, their sharpest question is fair: *"Do your systems keep running when nobody is watching them?"*

We built and operate **[SyncDaily](/work/syncdaily)**—our live automated technical ingestion, AI curation, and publishing engine—for two reasons: as a standalone product, and as a live proving ground for the exact reliability patterns we bring to client software.

Here is what running an unattended pipeline teaches you fast.

## 1. Upstream Inputs Will Break Every Assumption

External APIs, RSS feeds, and webhooks will eventually send truncated UTF-8, duplicate items with slightly altered query strings, 502 timeouts, or rate-limit headers at 3:00 AM.

In SyncDaily, ingestion is strictly decoupled from AI processing:
- Raw fetchers normalize URLs, strip tracking parameters, hash content, and write idempotently to staging tables.
- Duplicate and near-duplicate items are clustered *before* invoking any language model—protecting both editorial quality and API spend.

## 2. Treat LLM Responses Like Untrusted Webhook Payloads

Even with structured output modes, external model endpoints occasionally time out, refuse benign technical security text, or return subtly malformed fields.

Every curation step in SyncDaily passes through a deterministic validation gate:
- Required fields, character bounds, tag taxonomies, and slug formats are verified in code.
- Jobs that fail validation enter an isolated retry/quarantine state rather than publishing half-formed records to production endpoints.

## 3. Fast Read Paths Need Boring Caching

Downstream consumers—whether human readers, search crawlers, or Next.js server components—should never wait on live LLM calls or heavy joins. Published outputs sit behind clean cursor-paginated REST endpoints and pre-indexed lookup tables with explicit cache-control and ` + '`stale-while-revalidate`' + ` semantics.

## How This Translates to Client Engagements

Whether we are building an automated invoice-ingestion pipeline for a logistics team or an internal operations portal for a B2B SaaS company, the architecture blueprint is identical:

1. **Idempotent intake queues** so network blips never lose or duplicate business records.
2. **Strict validation boundaries** between AI steps and financial/operational databases.
3. **Observable health metrics and alerts** wired before launch day—not bolted on after the first outage.

Explore the full architecture breakdown on the [SyncDaily case study page](/work/syncdaily), or [talk with the engineers behind it](/book).`,
  },
  {
    slug: 'replacing-the-ten-spreadsheet-back-office',
    title: 'Replacing the 10-Spreadsheet Back Office: Where Workflow Automation Pays Back in Under 90 Days',
    excerpt:
      'Not every manual task deserves custom code. Here is the simple hours-and-error formula we use with COOs and founders to pick the first automation sprint that pays for itself.',
    category: 'Workflow Automation',
    categories: ['Workflow Automation', 'Operations'],
    published_at: '2026-10-06T09:00:00Z',
    updated_at: '2026-11-01T09:00:00Z',
    stats: { reading_time_minutes: 5 },
    tags: ['workflow automation', 'API integration', 'ROI', 'operations'],
    content: `Almost every profitable 10-to-150 person company has a hidden "human API layer": smart operations coordinators, bookkeepers, and account managers spending two to three hours every morning copying numbers from emails and PDFs into spreadsheets, then re-typing those same rows into a CRM, ERP, or accounting package.

When founders decide to fix it, the biggest mistake is trying to automate ten workflows at once. The fastest path to measurable ROI is ranking every candidate bottleneck on three concrete numbers.

## The 3-Factor Bottleneck Score

When we run a [Free Systems Review](/audit), we score candidate workflows across three questions:

1. **Direct Weekly Hours Burned:** How many staff hours per week go into copying, formatting, chasing approvals, or assembling the report? *(Example: 4 coordinators × 4.5 hours/week = 18 hours/week, or ~936 hours/year.)*
2. **Downstream Error Cost:** What happens when a row is mistyped or delayed by 24 hours? Delayed invoicing, wrong shipment quantities, missed inbound leads, and SLA penalties often cost more than the labor itself.
3. **Rule Stability:** Can 85%+ of cases follow clear validation rules, leaving only genuine 15% exceptions for a quick human check?

## Four Workflows That Consistently Pay Back Fastest

Across distribution, e-commerce, clinics, and B2B service companies, four builds repeatedly return their engineering cost quickest:

### 1. Order, Invoice & Manifest Extraction Into ERP / Accounting
Incoming PDFs and emails are parsed automatically, matched against open purchase orders or customer records, checked for math and price discrepancies, and queued for one-click posting into QuickBooks, Xero, Odoo, or your custom database.

### 2. Storefront, CRM & Warehouse Synchronization
Eliminates manual CSV exports/imports between sales channels (Shopify, HubSpot, custom B2B portals) and warehouse/fulfillment teams—complete with retry queues so temporary API outages never drop an order.

### 3. Automated Client & Executive Reporting
Replaces the Monday-morning ritual of pulling CSVs from four platforms to build margin, fulfillment, or campaign performance reports. Data refreshes automatically on schedule and flags anomalies in Slack or email.

### 4. Inbound Lead, Ticket & Call Triage
Qualifies inbound calls, forms, and emails 24/7, enriches records with existing customer history, books valid calendar slots, and routes urgent cases immediately to the right owner.

## When NOT to Automate Yet

If a process changes every week because two founders have not agreed how the service works yet, writing automation code just freezes chaos in concrete. Stabilize the process on a single clean checklist for two weeks first—then automate it with confidence.

Have a workflow in mind and want an honest math check on whether automating it makes financial sense? [Request a free written Systems Review](/audit) and we will map it out for you.`,
  },
];

export function getAllArticles() {
  return articles;
}

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug) || null;
}
