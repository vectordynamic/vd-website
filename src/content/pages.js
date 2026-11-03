// Copy for inner pages: /services, /services/[id], /how-we-work, /about, /partners, /book.
// Plain words, US spelling, zero banned buzzwords, zero invented client stats.

export const services = {
  intro: {
    eyebrow: 'Services',
    title: 'Four practice areas. One production engineering standard.',
    lede: 'Whether we build a customer platform, an internal ERP, an AI agent, or a cross-system integration, the engineering discipline stays identical: small weekly releases, real data, automated tests, monitoring from day one, and full documentation.',
  },
  standard: {
    title: 'The engineering standard behind every engagement',
    items: [
      { name: 'Sized to scale', text: 'Clean data models, sensible service boundaries, and load testing where throughput grows.' },
      { name: 'Tested & monitored', text: 'Automated test suites, CI/CD, structured logs, and failure alerts wired before launch day.' },
      { name: '100% documented', text: 'Architecture diagrams, runbooks, and a recorded handover session so your team is never locked in.' },
      { name: 'Kept running', text: 'Optional monthly managed operations or dedicated pods to maintain, tune, and expand the system.' },
    ],
  },
  details: {
    'custom-software': {
      headline: 'Software shaped around how your business actually operates.',
      intro: 'Generic SaaS tools force your staff to bend their process around rigid screens. We design and ship web platforms, B2B SaaS products, internal operations tools, mobile apps, and APIs built around the exact rules that make your business run.',
      signs: [
        'Your team maintains messy spreadsheet sidecars because the current tool cannot model your workflow',
        'Customers or field staff need a clean portal or mobile app connected to live back-office data',
        'An aging PHP, .NET, or monolith codebase slows down every feature and integration',
      ],
      builds: [
        { name: 'Web platforms and B2B SaaS', text: 'Customer portals, marketplaces, and multi-tenant SaaS applications engineered with role-based permissions and clean billing hooks.' },
        { name: 'Internal operations dashboards', text: 'Fast admin consoles, dispatch boards, and approval tools that replace fragile email threads and shared sheets.' },
        { name: 'iOS and Android mobile apps', text: 'Field-ready mobile applications built against shared, versioned back-end APIs.' },
        { name: 'API engineering and integrations', text: 'Well-documented REST/webhook APIs and resilient two-way integrations with Stripe, QuickBooks, HubSpot, Shopify, and logistics carriers.' },
        { name: 'Cloud & service architecture', text: 'PostgreSQL, background job queues, caching, and containerized deployments sized for predictable cloud bills.' },
        { name: 'Step-by-step legacy modernization', text: 'Incremental replacement of brittle legacy modules behind clean interfaces—avoiding risky big-bang rewrites.' },
      ],
      approach: [
        { name: 'Shadow the real workflow', text: 'We interview the operators who use the system daily and map edge cases before writing specs.' },
        { name: 'Ship weekly on real data', text: 'Code lands in your Git repository every week with a live staging walkthrough so feedback happens early.' },
        { name: 'Hand over with confidence', text: 'Automated tests, CI/CD, monitoring alerts, and an operational runbook come standard.' },
      ],
      faq: [
        { q: 'Do we own the source code and cloud infrastructure?', a: 'Yes. Code lives in your GitHub or GitLab organization from week one, deploys into cloud accounts you control, and 100% of custom IP transfers upon milestone payment.' },
        { q: 'Can you modernize an existing app without taking it offline?', a: 'Yes. We isolate the highest-pain workflow first, migrate data with dual-run verification, and retire legacy screens module by module.' },
      ],
      work: ['opsera'],
      verticals: ['b2b-saas', 'logistics'],
    },
    erp: {
      headline: 'One source of truth for orders, inventory, finance, and staff.',
      intro: 'When orders sit in one app, stock lives in spreadsheets, and accounting reconciles everything on Friday night, every number is late and contested. We build modular custom ERP, CRM, and management systems—and tell you honestly when tailoring Odoo or an existing tool is the smarter financial move.',
      signs: [
        'Leadership waits days for weekly margin, cash, or inventory reports—and two sheets still disagree',
        'Warehouse, purchasing, sales, and finance teams re-type the same order numbers across tools',
        'Enterprise ERP quotes came back at six figures plus a 12-month rollout full of modules you will never touch',
      ],
      builds: [
        { name: 'Modular custom ERP', text: 'Only the exact operational modules your company needs—orders, fulfillment, purchasing, billing—without bloated licensing.' },
        { name: 'CRM, quoting & order pipelines', text: 'Complex pricing rules, multi-step quotes, approvals, and customer history in one fast interface.' },
        { name: 'Inventory, warehouse & purchasing', text: 'Multi-location stock levels, reorder triggers, supplier purchase orders, and landed-cost tracking.' },
        { name: 'Finance & live profit-and-loss views', text: 'Invoicing, receivables, cost allocation, and real-time margin dashboards synced with your accounting ledger.' },
        { name: 'HR, attendance & payroll inputs', text: 'Shift tracking, leave approvals, contractor logs, and clean payroll exports.' },
        { name: 'Spreadsheet & legacy data migration', text: 'Deduplication, schema mapping, validation scripts, and parallel test runs before cutover.' },
        { name: 'Odoo setup when custom is overkill', text: 'When standard Odoo modules cover 80% of your workflow, we configure and extend Odoo instead of reinventing commodity features.' },
      ],
      approach: [
        { name: 'Follow one order end-to-end', text: 'We trace a real quote, purchase order, shipment, and invoice across your business to find where numbers drift.' },
        { name: 'Deliver the highest-pain module first', text: 'Launch one high-ROI module in 4–8 weeks so staff feel immediate relief before expanding.' },
        { name: 'Parallel run & staff training', text: 'Run old and new side by side until reconciliations match 100%, then train every role.' },
      ],
      faq: [
        { q: 'Should we build a custom ERP module or buy off-the-shelf?', a: 'Commodity functions like standard general-ledger accounting belong in established tools like QuickBooks, Xero, or Odoo. Custom ERP pays off when your quoting, fulfillment, routing, or operational workflow is unique and off-the-shelf workarounds cost you daily margin. We give you an honest verdict in the initial review.' },
        { q: 'How do you prevent disruption during data migration?', a: 'We write repeatable migration scripts, validate row counts and financial totals in staging, and run parallel checks before retiring any legacy sheet.' },
      ],
      work: ['okebase'],
      verticals: ['ecommerce-operations', 'logistics'],
    },
    ai: {
      headline: 'AI that works inside your software—measured, grounded, and cost-capped.',
      intro: 'Demos are easy; dependable daily accuracy on messy company documents is hard. We build LLM features, private knowledge search, voice/chat intake, and tool-using agents connected to your live systems—complete with accuracy test suites, source citations, and hard token budgets.',
      signs: [
        'Critical answers sit buried across thousands of PDFs, SOPs, tickets, and contracts nobody can search reliably',
        'An internal AI prototype impressed executives in a slide deck but hallucinated on real edge cases',
        'Your SaaS or operations platform needs embedded AI capabilities without hiring a full-time ML team',
      ],
      builds: [
        { name: 'Embedded product AI features', text: 'Smart drafting, summarization, structured extraction, classification, and semantic search built natively into your application.' },
        { name: 'Private knowledge bases & RAG', text: 'Permission-aware search across SOPs, contracts, and tickets that cites exact paragraphs and refuses to guess when evidence is missing.' },
        { name: 'Bounded tool-using agents', text: 'Agents that query databases, draft responses, update records, and pause for human approval on high-stakes actions.' },
        { name: 'Voice & omnichannel intake assistants', text: '24/7 inbound call and chat qualification that books appointments and writes structured summaries to your CRM.' },
        { name: 'Document & vision extraction pipelines', text: 'High-accuracy parsing of invoices, bills of lading, medical/intake forms, and inspection photos into structured JSON.' },
        { name: 'Evaluation suites & spend guardrails', text: 'Automated golden-dataset testing before every deploy, latency tracking, and per-tenant token caps.' },
      ],
      approach: [
        { name: 'Start with a golden test set', text: 'We collect 50–100 real examples from your workflow and measure baseline accuracy before tuning prompts or models.' },
        { name: 'Model-agnostic architecture', text: 'Swap cleanly between OpenAI, Claude, Gemini, or private open-weight models without rewriting business logic.' },
        { name: 'Guardrails in production', text: 'Confidence thresholds, human-review queues, and cost alerts keep production behavior predictable.' },
      ],
      faq: [
        { q: 'Will OpenAI, Anthropic, or Google train on our private company data?', a: 'No. We deploy exclusively against commercial API tiers (or private cloud/open-weight endpoints) where customer inputs and outputs are contractually excluded from model training.' },
        { q: 'How do you stop hallucinations in financial or operational workflows?', a: 'We never let an LLM invent calculations or mutate critical records unchecked. Deterministic code handles math and validation, retrieval enforces source citations, and low-confidence cases route to a human review queue.' },
      ],
      work: ['syncdaily', 'ai-receptionist'],
      verticals: ['b2b-saas', 'healthcare-operations'],
    },
    automation: {
      headline: 'Remove repetitive manual work across your entire tool stack.',
      intro: 'Your operations, finance, and support staff should handle exceptions and customers—not copy rows between emails, PDFs, spreadsheets, and CRMs. We engineer resilient end-to-end automations with validation, dead-letter retry queues, and full audit trails.',
      signs: [
        'Staff copy-paste the same customer, order, or invoice fields across three or more systems every day',
        'Approvals, onboarding checklists, or client updates stall inside individual email inboxes',
        'Fragile no-code zaps silently fail whenever a webhook times out or a payload format shifts',
      ],
      builds: [
        { name: 'End-to-end operational workflows', text: 'Lead-to-order, order-to-cash, vendor onboarding, and SLA escalation pipelines with explicit state tracking.' },
        { name: 'Intelligent document processing', text: 'Purchase orders, invoices, carrier manifests, and intake PDFs parsed, validated against rules, and posted into your ERP/accounting.' },
        { name: 'Two-way system synchronization', text: 'Idempotent API syncs keeping CRM, ERP, storefront, warehouse, and billing tools consistent.' },
        { name: 'Automated reporting & anomaly alerts', text: 'Daily margin, fulfillment, and pipeline digests delivered to Slack or email automatically—flagging exceptions early.' },
        { name: 'AI-assisted triage & routing', text: 'Inbound emails and support tickets classified, enriched with account context, and drafted for one-click human approval.' },
      ],
      approach: [
        { name: 'Quantify hours saved first', text: 'We rank candidate workflows by weekly hours burned × error cost so the first sprint pays back fast.' },
        { name: 'Engineer for failure modes', text: 'Idempotency keys, retries, validation checks, and exception queues mean zero silent data drops.' },
        { name: 'Full run visibility', text: 'Every automated run is logged with inputs, outputs, and instant Slack/email alerts if an external API goes down.' },
      ],
      faq: [
        { q: 'When do you use custom code versus tools like n8n, Make, or Zapier?', a: 'Low-volume internal notifications can live in n8n or Make. Once a workflow handles high volume, complex branching, strict error recovery, or sensitive data, version-controlled code with automated tests is cheaper and far more reliable.' },
        { q: 'What happens if a third-party API goes down mid-workflow?', a: 'Jobs sit safely in a durable retry queue, raise an alert if the outage persists, and resume cleanly without creating duplicate records.' },
      ],
      work: ['advantage-ai', 'ai-receptionist'],
      verticals: ['logistics', 'ecommerce-operations', 'healthcare-operations'],
    },
  },
};

export const howWeWork = {
  hero: {
    eyebrow: 'How we work',
    title: 'Clear scope. Weekly proof on real data. Zero vendor lock-in.',
    lede: 'Hiring an engineering partner across borders requires more than good code. It requires predictable overlap hours, transparent milestone billing, clean IP ownership, and weekly visibility you never have to chase.',
  },
  phases: [
    {
      num: '01',
      name: 'Systems Review / Discovery',
      timing: 'Week 1 (or standalone 1–2 week review)',
      summary: 'We map the real workflow with the people doing the work, inspect existing tools and data, and identify where off-the-shelf beats custom.',
      deliverable: 'Written Systems Review or Scope Brief, system architecture diagram, milestone breakdown, and fixed quote.',
    },
    {
      num: '02',
      name: 'Architecture & Interface Sign-Off',
      timing: 'Week 1–2 of build',
      summary: 'Before writing feature code, we lock the database schema, API contracts, security model, and core user screens with your team.',
      deliverable: 'Clickable screen flows / wireframes, schema & API spec, and your Git repository + CI pipeline initialized.',
    },
    {
      num: '03',
      name: 'Weekly Milestone Sprints',
      timing: 'Weeks 2–6+ (scoped per project)',
      summary: 'Engineers push tested commits to your repository daily. Every Friday you see a live demo running against realistic data—never static slides.',
      deliverable: 'Staging deployment, automated tests, live weekly demo, and a written Friday Engineering Report.',
    },
    {
      num: '04',
      name: 'Production Launch & Handover',
      timing: 'Final sprint week',
      summary: 'We configure production monitoring, error alerts, backups, and AI spend limits, run parallel checks where needed, and train your team.',
      deliverable: 'Production release, alerting dashboard, plain-English operational runbook, and recorded walkthrough.',
    },
    {
      num: '05',
      name: 'Managed Operations or Dedicated Pod',
      timing: 'Optional monthly plan',
      summary: 'Software that runs a business needs ongoing care. Stay on a lightweight monthly maintenance plan or scale velocity with a dedicated pod.',
      deliverable: 'Monthly health & cost report, SLA bug fixes, dependency/model updates, and continuous roadmap delivery.',
    },
  ],
  sampleReport: {
    eyebrow: 'Radical transparency',
    title: 'What hits your inbox every Friday',
    intro: 'Clients never have to ask "where does the build stand?" Every Friday during an engagement, your lead engineer sends a concise written update alongside a live staging link or Loom walkthrough.',
    meta: 'SAMPLE — FRIDAY ENGINEERING UPDATE · SPRINT WEEK 03 OF 06',
    blocks: [
      { label: 'Shipped to staging this week', text: ' Purchase-order ingestion parser (98.4% field match across 120 sample PDFs), QuickBooks invoice sync endpoint, and role permissions for warehouse leads.' },
      { label: 'Live staging link & 3-min demo', text: ' Interactive staging environment + 3-minute recorded walkthrough testing edge cases on your anonymized Q3 dataset.' },
      { label: 'Decisions / inputs needed from you', text: ' Confirm approval threshold ($2,500 vs. $5,000) for automated supplier PO dispatch before Tuesday’s sprint lock.' },
      { label: 'Milestone & budget status', text: ' Milestone 2 on schedule for Friday sign-off · Fixed budget 100% on track · 0 blockers.' },
    ],
  },
  timezone: {
    eyebrow: 'Global collaboration',
    title: 'How cross-timezone delivery stays effortless',
    points: [
      {
        name: 'Fixed 4-hour daily overlap',
        text: 'We lock a consistent 4-hour live overlap window with US East/Central mornings, UK/European business hours, Gulf hours, or APAC afternoons. Every call and live review happens inside your normal workday.',
      },
      {
        name: 'Direct Slack / Teams channel with builders',
        text: 'You share a channel directly with the engineers writing your code—no middleman project managers translating technical questions.',
      },
      {
        name: 'Async momentum while you sleep',
        text: 'Questions agreed during your morning overlap turn into tested pull requests and staging deploys ready for review by your next morning.',
      },
      {
        name: 'Written decisions, never verbal drift',
        text: 'Every scope choice, trade-off, and architecture update is logged in plain English in your repository and weekly update.',
      },
    ],
  },
  security: {
    eyebrow: 'IP, code & security',
    title: 'Your repository. Your cloud. Your intellectual property.',
    items: [
      { name: '100% custom IP assignment', text: 'Upon milestone payment, you own 100% of custom-developed code, schemas, prompts, and workflows. Optional pre-built internal accelerators include a perpetual, royalty-free source license agreed upfront.' },
      { name: 'Client-owned repos & cloud from week one', text: 'We commit directly into your GitHub/GitLab and deploy into your AWS, GCP, Azure, or Vercel account—so you never have to "rescue" code at the end.' },
      { name: 'Zero AI training on your data', text: 'LLM features use commercial API agreements or private model deployments that explicitly prohibit training on your company data.' },
      { name: 'Least-privilege & clean offboarding', text: 'Secrets stay in your vault, access is scoped by role, mutual NDAs are standard, and temporary credentials are revoked at handover.' },
    ],
  },
  pods: {
    eyebrow: 'Hiring vs. Dedicated Pods',
    title: 'Hiring developers vs. adding a Vector Dynamic engineering pod',
    intro: 'If you have an active product roadmap or job posting open for full-stack, ERP, or AI engineers, a dedicated pod gives you senior shipping velocity in two weeks without recruitment fees or permanent payroll risk.',
    rows: [
      { dimension: 'Time to first production commit', hiring: '8 to 14 weeks (sourcing, interviews, notice period, onboarding)', pod: '1 to 2 weeks from scope alignment' },
      { dimension: 'Skill breadth', hiring: 'Single hire covers one slice (e.g. backend OR frontend OR AI)', pod: 'Balanced unit: full-stack architecture, UI, APIs, AI/automation, and DevOps' },
      { dimension: 'Cost & commitment structure', hiring: 'Full salary + benefits, taxes, recruiter fees, and severance risk', pod: 'Predictable monthly rate · Scale up, pause, or hand over cleanly with 30 days notice' },
      { dimension: 'Delivery accountability', hiring: 'You manage sprint hygiene, QA standards, and architecture solo', pod: 'Includes weekly demos, automated CI/CD, test coverage, and written Friday reporting' },
    ],
  },
};

export const about = {
  hero: {
    eyebrow: 'About Vector Dynamic',
    title: 'Engineers who build it, ship it to production, and stay accountable.',
    lede: 'Vector Dynamic is an independent software and AI engineering team building custom platforms, business systems, and operational automation for growing B2B companies worldwide.',
  },
  story: {
    title: 'Why we started Vector Dynamic',
    body: [
      'Most software and AI initiatives do not fail on demo day. They fail three weeks after launch—when clean sample prompts meet messy customer PDFs, real warehouse staff, rate-limited APIs, and Tuesday-afternoon edge cases.',
      'We started Vector Dynamic to close that gap between impressive prototypes and durable operational systems. Because we engineer and run our own software products in production—including our live SyncDaily data and publishing pipeline—we design client systems with the monitoring, cost controls, and documentation we demand for ourselves.',
      'We are a focused, young company, and we never hide behind inflated headcount claims or fake enterprise logos. Instead, we earn trust the hard way: direct access to senior engineers, fixed milestone pricing, code in your repository from week one, and weekly working software you can verify yourself.',
    ],
  },
  principles: {
    title: 'Four rules we do not bend',
    items: [
      { name: 'Production is the only finish line', text: 'A slide deck or sandbox prototype solves nothing. Every engagement is planned backward from daily use in your real workflow.' },
      { name: 'Advise against custom when off-the-shelf wins', text: 'If Odoo, an existing SaaS tool, or a two-day integration solves your problem better than a custom build, we tell you in writing—even when it means a smaller contract.' },
      { name: 'Boring, maintainable architecture first', text: 'Proven databases, clear API boundaries, automated tests, and plain runbooks beat clever complexity your future team cannot debug.' },
      { name: 'Engineers on the call do the work', text: 'No bait-and-switch from senior sales pitches to unvetted juniors. You collaborate directly with the builders writing your system.' },
    ],
  },
  global: {
    eyebrow: 'How we operate',
    title: 'Built for international B2B teams',
    items: [
      { name: 'Daily timezone overlap', text: 'Structured 4-hour live overlap windows covering US/Canada mornings, UK/European business hours, Gulf schedules, and APAC.' },
      { name: 'Clear written English', text: 'Crisp specifications, self-explanatory pull requests, recorded Loom demos, and structured Friday engineering briefs.' },
      { name: 'Transparent commercial terms', text: 'Mutual NDAs, milestone-gated invoicing, 100% custom IP assignment on payment, and international B2B invoicing.' },
    ],
  },
};

export const partners = {
  hero: {
    eyebrow: 'Strategic Partnerships',
    title: 'Win bigger projects together—without adding engineering payroll.',
    lede: 'We build long-term, mutually profitable partnerships with consultants, design and marketing agencies, and software houses across the US, UK, Europe, Gulf, and Australia. You bring trusted client relationships; we bring senior custom software, ERP, and AI delivery.',
  },
  tracks: {
    title: 'Three win-win partnership models',
    items: [
      {
        name: 'Referral & Advisory Partners (Consultants, Fractional COOs/CTOs, Accountants & Marketing Agencies)',
        text: 'Your clients trust your operational or growth advice—and constantly run into broken spreadsheets, manual handoffs, or custom software needs outside your core service. Refer them to Vector Dynamic: you earn a recurring/milestone referral revenue share (or pass a partner discount to your client), receive reciprocal introductions when our software clients need marketing, finance, or advisory help, and look like a hero when the system ships cleanly.',
      },
      {
        name: 'Agency Co-Delivery & White-Label Partners (Design, Webflow, Branding & Boutique AI Agencies)',
        text: 'Stop turning down $15k–$60k+ custom portals, ERP integrations, and production AI builds. We quote fixed wholesale milestones so you add a healthy 30%–50% margin, keep 100% ownership of the client relationship under strict NDA and non-solicitation, and expand your agency’s capabilities overnight.',
      },
      {
        name: 'Software House Overflow & Specialist Pods (Product Studios & Dev Shops)',
        text: 'When client demand spikes faster than local hiring, bring our engineers into defined modules—custom APIs, Odoo/ERP workflows, or LLM/RAG pipelines. Start with a single fixed-price 1-week trial task inside your Git workflow so you judge our code quality firsthand before scaling.',
      },
    ],
  },
  winWin: {
    eyebrow: 'Mutual Value',
    title: 'How both sides benefit',
    items: [
      { name: 'New revenue from existing relationships', text: 'Monetize technical requests you currently turn away—via wholesale agency margin or transparent referral revenue share.' },
      { name: 'Two-way client referrals', text: 'We strictly build software, ERP, and AI. When our clients ask for paid growth, branding, accounting, or fractional ops consulting, we introduce trusted partners.' },
      { name: '100% client protection', text: 'Written mutual NDA and non-solicitation upfront. Your clients stay your clients—we work behind your domain or alongside you as your technical arm.' },
      { name: 'Start with a 1-week trial task', text: 'Zero long-term lock-in. Test our code standards, speed, and communication on one small scoped task first.' },
    ],
  },
  how: {
    title: 'How a partnership starts',
    items: [
      { name: '25-minute founder intro', text: 'Align on your clients, preferred model (referral share, co-delivery, or white-label), and communication style.' },
      { name: 'Mutual NDA & partner terms', text: 'Sign clean confidentiality, non-solicitation, and referral or wholesale milestone terms before sharing any client brief.' },
      { name: 'First referral or 1-week trial task', text: 'Run one scoped pilot task or co-audit a live client opportunity together—we prepare the technical scope and estimate for free.' },
      { name: 'Repeatable delivery rhythm', text: 'Weekly client-ready demos, clean documentation, and predictable payouts or wholesale milestones on every engagement.' },
    ],
  },
  commitments: {
    title: 'Our written partner guarantees',
    items: [
      'Mutual NDA and strict client non-solicitation before any brief is shared',
      'Transparent referral revenue share + reciprocal leads for advisory/marketing partners',
      'Fixed wholesale milestone quotes you can mark up predictably',
      'Client-ready weekly updates and staging demos you can forward with pride',
      '100% custom code ownership transferred cleanly to you or your end client',
      'Direct Slack/Teams access to senior engineers during your business hours',
    ],
  },
  fit: {
    good: [
      'Fractional COOs/CTOs, operations consultants, ERP advisors, and B2B marketing/growth agencies',
      'Design, Webflow/Shopify, and branding studios whose clients ask for custom web apps, portals, or AI',
      'Small and mid-size software houses needing reliable overflow or applied-AI capacity',
    ],
    bad: [
      'Unscoped crisis rescues with no written requirements or realistic timeline',
      'Middlemen brokering projects across multiple layers without end-client clarity',
    ],
  },
};

export const book = {
  eyebrow: '30-Minute Discovery Call',
  title: 'Talk directly with a senior engineer.',
  lede: 'No pitch deck and no junior account reps. Spend 30 minutes walking through the workflow, platform, or AI system you want built—and leave with an honest technical recommendation and rough scope.',
  agenda: [
    'Your current workflow, tools, and where time or margin is leaking (10 min)',
    'Whether off-the-shelf software or custom engineering is the smarter path (10 min)',
    'Recommended architecture, milestone breakdown, budget band, and next steps (10 min)',
  ],
  asyncNote: 'Not ready for a call yet? Request our free 2–4 page written Systems Review instead—async, zero pressure.',
};
