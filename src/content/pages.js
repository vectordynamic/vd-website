// Copy for inner pages: /services, /services/[id], /how-we-work, /about, /partners, /book.
// Plain words, US spelling, zero banned buzzwords, zero invented client stats.

export const services = {
  intro: {
    eyebrow: 'Services',
    title: 'Five practice areas. One production engineering standard.',
    lede: 'Whether we build a customer platform, configure a multi-branch ERP, deploy an AI agent, automate cross-system workflows, or take over and maintain your existing codebase, our engineering discipline stays identical: clear milestone checkpoints, real data verification, automated tests, and monitoring from day one.',
  },
  standard: {
    title: 'The engineering standard behind every engagement',
    items: [
      { name: 'Sized to scale', text: 'Clean data models, sensible service boundaries, and load testing where throughput grows.' },
      { name: 'Tested & monitored', text: 'Automated test suites, CI/CD, structured logs, and failure alerts wired before launch day.' },
      { name: 'Documented architecture', text: 'Architecture diagrams, API specs, and operational runbooks so your system is clear and maintainable.' },
      { name: 'Flexible commercial terms', text: 'Deploy on our licensed core modules for speed and lower cost, or contract for custom builds and full source handover.' },
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
        { name: 'Deliver by verified milestones', text: 'Progress is demonstrated on live staging environments against real data at every agreed milestone checkpoint.' },
        { name: 'Deploy with confidence', text: 'Automated tests, CI/CD, monitoring alerts, and an operational runbook come standard.' },
      ],
      faq: [
        { q: 'How do codebase ownership and licensing work?', a: 'We structure codebase custody around your budget and commercial goals: you can opt for a lower-cost licensed deployment powered by our reusable core modules, a custom build with a perpetual operational license, or a full source-code buyout and repository transfer.' },
        { q: 'Can you modernize an existing app without taking it offline?', a: 'Yes. We isolate the highest-pain workflow first, migrate data with dual-run verification, and retire legacy screens module by module.' },
      ],
      work: ['opsera', 'vaultrag'],
      verticals: ['b2b-saas', 'logistics'],
    },
    erp: {
      headline: 'One source of truth for orders, inventory, finance, and staff.',
      intro: 'When orders sit in one app, stock lives in spreadsheets, and accounting reconciles everything by hand, every number is late and contested. We deliver modular ERP, CRM, and management systems—configuring our multi-entity ERP architecture, building custom modules, or implementing Odoo when off-the-shelf is the smarter financial move.',
      signs: [
        'Leadership waits days for margin, cash, or inventory reports—and two sheets still disagree',
        'Warehouse, purchasing, sales, and finance teams re-type the same order numbers across tools',
        'Enterprise ERP quotes came back at six figures plus a massive rollout full of modules you will never touch',
      ],
      builds: [
        { name: 'Modular multi-entity ERP', text: 'Only the exact operational modules your company needs—orders, fulfillment, purchasing, billing—tailored to your org hierarchy.' },
        { name: 'CRM, quoting & order pipelines', text: 'Complex pricing rules, multi-step quotes, approvals, and customer history in one fast interface.' },
        { name: 'Inventory, warehouse & purchasing', text: 'Multi-location stock levels, reorder triggers, supplier purchase orders, and landed-cost tracking.' },
        { name: 'Finance & live profit-and-loss views', text: 'Invoicing, receivables, cost allocation, and real-time margin dashboards synced with your accounting ledger.' },
        { name: 'HR, attendance & payroll inputs', text: 'Shift tracking, leave approvals, contractor logs, and clean payroll exports.' },
        { name: 'Spreadsheet & legacy data migration', text: 'Deduplication, schema mapping, validation scripts, and parallel test runs before cutover.' },
        { name: 'Odoo setup when custom is overkill', text: 'When standard Odoo modules cover 80% of your workflow, we configure and extend Odoo instead of reinventing commodity features.' },
      ],
      approach: [
        { name: 'Follow one order end-to-end', text: 'We trace a real quote, purchase order, shipment, and invoice across your business to find where numbers drift.' },
        { name: 'Prioritize the highest-pain module', text: 'Scope and launch the highest-ROI operational module first so staff feel immediate relief before expanding.' },
        { name: 'Parallel run & staff training', text: 'Run old and new side by side until reconciliations match 100%, then train every role.' },
      ],
      faq: [
        { q: 'Should we license your ERP core, build custom, or configure off-the-shelf?', a: 'Commodity functions like standard general-ledger accounting belong in established tools or our pre-built ERP core. Custom engineering pays off when your quoting, multi-branch routing, or approval workflow is unique. We give you an honest cost comparison during scoping.' },
        { q: 'How do you prevent disruption during data migration?', a: 'We write repeatable migration scripts, validate row counts and financial totals in staging, and run parallel checks before retiring any legacy sheet.' },
      ],
      work: ['okebase', 'runwayiq'],
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
      work: ['voxflow', 'syncdaily', 'vaultrag'],
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
        { name: 'Quantify hours saved first', text: 'We rank candidate workflows by hours burned × error cost so the first automation delivers immediate operational relief.' },
        { name: 'Engineer for failure modes', text: 'Idempotency keys, retries, validation checks, and exception queues mean zero silent data drops.' },
        { name: 'Full run visibility', text: 'Every automated run is logged with inputs, outputs, and instant Slack/email alerts if an external API goes down.' },
      ],
      faq: [
        { q: 'When do you use custom code versus tools like n8n, Make, or Zapier?', a: 'Low-volume internal notifications can live in n8n or Make. Once a workflow handles high volume, complex branching, strict error recovery, or sensitive data, version-controlled code with automated tests is cheaper and far more reliable.' },
        { q: 'What happens if a third-party API goes down mid-workflow?', a: 'Jobs sit safely in a durable retry queue, raise an alert if the outage persists, and resume cleanly without creating duplicate records.' },
      ],
      work: ['advantage-ai', 'ledgerflow', 'voxflow'],
      verticals: ['logistics', 'ecommerce-operations', 'healthcare-operations'],
    },
    maintenance: {
      headline: 'Keep your existing software fast, stable, and connected to every API in your stack.',
      intro: 'You do not always need a ground-up rebuild. When an existing web platform, mobile app, or internal system suffers from technical debt, broken integrations, slow queries, or an absent previous development team, our senior engineers step in to audit, stabilize, integrate, and continuously improve your system.',
      signs: [
        'Your previous agency or developer left, and nobody wants to touch the existing codebase without breaking production',
        'Customers and operations staff are blocked waiting on third-party API integrations, payment gateways, or webhook syncs',
        'Slow database queries, recurring bugs, or outdated dependencies are hurting reliability and burning engineering hours',
      ],
      builds: [
        { name: 'Existing codebase takeover & stabilization', text: 'Rapid architectural audit of undocumented repositories, dependency upgrades, security patching, automated test coverage, and CI/CD pipelines.' },
        { name: 'Third-party API & webhook engineering', text: 'Resilient two-way integrations with payment systems (Stripe, Adyen), ERPs & accounting (QuickBooks, Xero, NetSuite, Odoo), CRMs (HubSpot, Salesforce), 3PLs, and telecom APIs.' },
        { name: 'Ongoing maintenance & feature retainers', text: 'Predictable SLA-backed bug resolution, uptime monitoring, database health checks, and continuous feature delivery on your existing product.' },
        { name: 'Performance & database optimization', text: 'Profiling and fixing N+1 queries, PostgreSQL indexing bottlenecks, memory leaks, slow API endpoints, and bloated cloud infrastructure bills.' },
        { name: 'Zero-downtime legacy modernization', text: 'Incrementally refactoring aging monoliths, migrating databases, or upgrading frontend/backend frameworks without disrupting active users.' },
        { name: 'Partner API & webhook gateway design', text: 'Building clean, versioned REST/GraphQL APIs, rate limiters, and webhook emitters so your software connects cleanly with enterprise customers.' },
      ],
      approach: [
        { name: 'Codebase & integration health audit', text: 'We inspect your repository, database schemas, error logs, and API failure points to isolate immediate stability risks.' },
        { name: 'Stabilize & lock CI/CD first', text: 'Before shipping major changes, we put staging environments, automated regression tests, and rollback safety nets in place.' },
        { name: 'Predictable ongoing execution', text: 'Whether scoped as a dedicated API integration project or a monthly maintenance retainer, we ship clean pull requests with full visibility.' },
      ],
      faq: [
        { q: 'Can you take over a messy codebase written by another agency or former developer?', a: 'Yes. We start with a structured codebase audit to map architecture, security risks, and deployment pipelines, stabilize critical bugs first, and then transition into steady feature delivery and refactoring.' },
        { q: 'Do we need a long-term retainer for API integration work?', a: 'No. Standalone API integrations or performance overhauls can be contracted as a fixed-scope milestone project, while ongoing product maintenance, monitoring, and backlog execution are available on flexible monthly retainers.' },
      ],
      work: ['opsera', 'ledgerflow', 'okebase'],
      verticals: ['b2b-saas', 'ecommerce-operations', 'logistics'],
    },
  },
};

export const howWeWork = {
  hero: {
    eyebrow: 'How we work',
    title: 'Clear scope. Milestone proof on real data. Flexible commercial terms.',
    lede: 'Every project is sized and structured around your actual technical complexity and commercial goals—with predictable overlap hours, milestone-gated billing, and live staging verification.',
  },
  phases: [
    {
      num: '01',
      name: 'Discovery & Systems Review',
      timing: 'Phase 01 · Scope Alignment',
      summary: 'We map your workflow or existing codebase, inspect API dependencies, and identify where reusable modules beat custom code.',
      deliverable: 'Written review, architecture diagram, milestone plan, and contract options.',
    },
    {
      num: '02',
      name: 'Architecture, Contract & Licensing Lock',
      timing: 'Phase 02 · Pre-Build Lock',
      summary: 'Before feature code begins, we lock the database schema, API contracts, security model, milestone schedule, and licensing structure.',
      deliverable: 'Screen flows, API spec, commercial terms, and initialized CI/CD pipeline.',
    },
    {
      num: '03',
      name: 'Milestone Execution Sprints',
      timing: 'Phase 03 · Scoped to Project Size',
      summary: 'Timeline and cadence follow your project scope and contract. At every milestone gate, you verify a staging deployment on real data.',
      deliverable: 'Staging deploy, automated test suite, live demo, and written progress report.',
    },
    {
      num: '04',
      name: 'Production Cutover & Verification',
      timing: 'Phase 04 · Launch Gate',
      summary: 'We configure production monitoring, alerts, backups, and spend limits, run parallel checks, and onboard your operators.',
      deliverable: 'Production release, live alerts, operational runbook, and team training.',
    },
    {
      num: '05',
      name: 'Maintenance, SLA Ops or Dedicated Pod',
      timing: 'Phase 05 · Ongoing Retainer',
      summary: 'Stay on a maintenance plan for bug fixes, API updates, and hosting—or scale velocity with a dedicated engineering pod.',
      deliverable: 'System health monitoring, SLA bug fixes, API maintenance, and continuous delivery.',
    },
  ],
  sampleReport: {
    eyebrow: 'Radical transparency',
    title: 'What hits your inbox at every milestone checkpoint',
    intro: 'During an active build or maintenance retainer, your lead engineer delivers a concise written checkpoint brief and a live staging walkthrough.',
    meta: 'SAMPLE — MILESTONE ENGINEERING CHECKPOINT REPORT',
    blocks: [
      { label: 'Shipped to staging in this milestone', text: 'PO ingestion parser (98.4% match across 120 PDFs), QuickBooks invoice sync, and warehouse lead roles.' },
      { label: 'Live staging link & demo', text: 'Interactive staging environment + recorded walkthrough testing edge cases on your anonymized data.' },
      { label: 'Decisions needed from you', text: 'Confirm approval threshold ($2,500 vs. $5,000) for automated supplier PO dispatch before production cutover.' },
      { label: 'Milestone & budget status', text: 'Milestone deliverables verified · Contract budget 100% on track · 0 blockers.' },
    ],
  },
  timezone: {
    eyebrow: 'Global collaboration',
    title: 'How cross-timezone delivery stays effortless',
    points: [
      {
        name: 'Fixed 4-hour daily overlap',
        text: 'A locked 4-hour live overlap window with US, UK, European, Gulf, or APAC hours for calls, demos, and pairing.',
      },
      {
        name: 'Direct Slack / Teams channel',
        text: 'Direct communication with the engineers writing your code—zero middleman account managers.',
      },
      {
        name: 'Async momentum while you sleep',
        text: 'Decisions agreed during your morning overlap turn into tested pull requests ready by your next workday.',
      },
      {
        name: 'Written decisions, never verbal drift',
        text: 'Every scope choice, trade-off, and architecture change is documented in writing across milestone updates.',
      },
    ],
  },
  security: {
    eyebrow: 'Commercial models, IP & security',
    title: 'Your data is always yours. Codebase and licensing fit your contract.',
    items: [
      { name: '100% client data ownership & NDA', text: 'Your company data, customer records, and business rules remain 100% yours under strict mutual NDA.' },
      { name: 'Cost-effective licensed deployment', text: 'Deploy faster and at a lower upfront price by licensing Vector Dynamic’s proven core engines and reusable modules.' },
      { name: 'Custom build or full IP buyout options', text: 'Need full source-code custody in your own repository or category exclusivity? We structure and price the contract accordingly.' },
      { name: 'Zero AI training on your data', text: 'AI integrations use commercial APIs or private endpoints that contractually prohibit training on your data.' },
    ],
  },
  pods: {
    eyebrow: 'Hiring vs. Dedicated Pods',
    title: 'Hiring developers vs. adding a Vector Dynamic engineering pod',
    intro: 'If you have an active product roadmap, legacy backlog, or open engineering roles, a dedicated pod delivers senior velocity without recruiter fees or payroll overhead.',
    rows: [
      { dimension: 'Onboarding & ramp-up', hiring: 'Months of sourcing, interviews, notice periods, and setup', pod: 'Rapid kickoff aligned to your repository and architecture scope' },
      { dimension: 'Skill breadth', hiring: 'Single hire covers one slice (backend OR frontend)', pod: 'Balanced unit: architecture, UI, APIs, AI, and DevOps' },
      { dimension: 'Cost & commitment', hiring: 'Full salary, benefits, recruiter fees, and severance risk', pod: 'Predictable retainer · Scale up, adjust scope, or transition cleanly per contract' },
      { dimension: 'Accountability', hiring: 'You manage sprint hygiene, QA, and architecture solo', pod: 'Includes milestone demos, CI/CD, test coverage, and written reporting' },
    ],
  },
};

export const about = {
  hero: {
    eyebrow: 'About Vector Dynamic',
    title: 'Engineers who build it, ship it to production, and stay accountable.',
    lede: 'Vector Dynamic is an independent software and AI engineering team building custom platforms, business systems, API integrations, and operational automation for growing B2B companies worldwide.',
  },
  story: {
    title: 'Why we started Vector Dynamic',
    body: [
      'Most software and AI initiatives do not fail on demo day. They fail after launch—when clean sample prompts meet messy customer PDFs, real warehouse staff, rate-limited APIs, and daily operational edge cases.',
      'We started Vector Dynamic to close that gap between impressive prototypes and durable operational systems. Because we engineer and run our own core platforms—across multi-entity ERP, voice operations, and AI intelligence—we design client systems with the monitoring, cost controls, and architectural discipline we demand for ourselves.',
      'We earn trust through technical clarity: direct access to senior engineers, milestone-gated contracts, flexible deployment and licensing options, and working software you can verify on real data.',
    ],
  },
  principles: {
    title: 'Four rules we do not bend',
    items: [
      { name: 'Production is the only finish line', text: 'A slide deck or sandbox prototype solves nothing. Every engagement is planned backward from daily use in your real workflow.' },
      { name: 'Advise against ground-up builds when simpler wins', text: 'If an API integration, Odoo configuration, or licensing one of our existing core engines solves your problem better than a ground-up build, we tell you upfront.' },
      { name: 'Boring, maintainable architecture first', text: 'Proven databases, clear API boundaries, automated tests, and plain runbooks beat clever complexity nobody can debug.' },
      { name: 'Engineers on the call do the work', text: 'No bait-and-switch from senior sales pitches to unvetted juniors. You collaborate directly with the builders writing your system.' },
    ],
  },
  global: {
    eyebrow: 'How we operate',
    title: 'Built for international B2B teams',
    items: [
      { name: 'Daily timezone overlap', text: 'Structured 4-hour live overlap windows covering US/Canada mornings, UK/European business hours, Gulf schedules, and APAC.' },
      { name: 'Clear written English', text: 'Crisp specifications, self-explanatory pull requests, recorded walkthroughs, and structured milestone engineering briefs.' },
      { name: 'Tailored commercial agreements', text: 'Mutual NDAs, milestone-gated invoicing, and flexible licensing or source-ownership terms priced to match your business goals.' },
    ],
  },
};

export const partners = {
  hero: {
    eyebrow: 'Strategic Partnerships',
    title: 'Win bigger projects together—without adding engineering payroll.',
    lede: 'We build long-term, mutually profitable partnerships with consultants, design and marketing agencies, and software houses across the US, UK, Europe, Gulf, and Australia. You bring trusted client relationships; we bring senior custom software, ERP, API integration, and AI delivery.',
  },
  tracks: {
    title: 'Three win-win partnership models',
    items: [
      {
        name: 'Referral & Advisory Partners (Consultants, Fractional COOs/CTOs, Accountants & Marketing Agencies)',
        text: 'Your clients trust your operational or growth advice—and constantly run into broken spreadsheets, manual handoffs, legacy codebases, or custom software needs outside your core service. Refer them to Vector Dynamic: you earn a transparent referral revenue share (or pass a partner discount to your client) and receive reciprocal introductions when our software clients need advisory or growth help.',
      },
      {
        name: 'Agency Co-Delivery & White-Label Partners (Design, Webflow, Branding & Boutique AI Agencies)',
        text: 'Stop turning down $15k–$60k+ custom portals, ERP integrations, and production AI builds. We quote fixed wholesale milestones so you add a healthy 30%–50% margin, keep 100% ownership of the client relationship under strict NDA and non-solicitation, and expand your agency’s capabilities.',
      },
      {
        name: 'Software House Overflow & Specialist Pods (Product Studios & Dev Shops)',
        text: 'When client demand spikes faster than local hiring, bring our engineers into defined modules—custom APIs, codebase maintenance, Odoo/ERP workflows, or LLM/RAG pipelines. Start with a single scoped pilot task inside your Git workflow so you judge our code quality firsthand before scaling.',
      },
    ],
  },
  winWin: {
    eyebrow: 'Mutual Value',
    title: 'How both sides benefit',
    items: [
      { name: 'New revenue from existing relationships', text: 'Monetize technical requests you currently turn away—via wholesale agency margin or transparent referral revenue share.' },
      { name: 'Two-way client referrals', text: 'We strictly build software, ERP, integrations, and AI. When our clients ask for paid growth, branding, accounting, or fractional ops consulting, we introduce trusted partners.' },
      { name: '100% client protection', text: 'Written mutual NDA and non-solicitation upfront. Your clients stay your clients—we work behind your domain or alongside you as your technical arm.' },
      { name: 'Start with a scoped pilot task', text: 'Zero long-term lock-in. Test our code standards, speed, and communication on one small scoped task first.' },
    ],
  },
  how: {
    title: 'How a partnership starts',
    items: [
      { name: '25-minute founder intro', text: 'Align on your clients, preferred model (referral share, co-delivery, or white-label), and communication style.' },
      { name: 'Mutual NDA & partner terms', text: 'Sign clean confidentiality, non-solicitation, and referral or wholesale milestone terms before sharing any client brief.' },
      { name: 'First referral or scoped pilot task', text: 'Run one scoped pilot task or co-audit a live client opportunity together—we prepare the technical scope and estimate for free.' },
      { name: 'Repeatable delivery rhythm', text: 'Milestone-gated staging demos, clean documentation, and predictable payouts or wholesale milestones on every engagement.' },
    ],
  },
  commitments: {
    title: 'Our written partner guarantees',
    items: [
      'Mutual NDA and strict client non-solicitation before any brief is shared',
      'Transparent referral revenue share + reciprocal leads for advisory/marketing partners',
      'Fixed wholesale milestone quotes you can mark up predictably',
      'Client-ready milestone updates and staging demos you can forward with pride',
      'Flexible white-label licensing or source-transfer terms tailored to each client contract',
      'Direct Slack/Teams access to senior engineers during your business hours',
    ],
  },
  fit: {
    good: [
      'Fractional COOs/CTOs, operations consultants, ERP advisors, and B2B marketing/growth agencies',
      'Design, Webflow/Shopify, and branding studios whose clients ask for custom web apps, portals, or AI',
      'Small and mid-size software houses needing reliable overflow, maintenance, or applied-AI capacity',
    ],
    bad: [
      'Unscoped crisis rescues with no written requirements or realistic contract structure',
      'Middlemen brokering projects across multiple layers without end-client clarity',
    ],
  },
};

export const book = {
  eyebrow: '30-Minute Discovery Call',
  title: 'Talk directly with a senior engineer.',
  lede: 'No pitch deck and no junior account reps. Spend 30 minutes walking through the workflow, existing codebase, integration, or AI system you need—and leave with an honest technical recommendation and commercial structure.',
  agenda: [
    'Your current workflow, codebase, or API bottleneck and where time or margin is leaking (10 min)',
    'Whether licensing an existing core module, integrating APIs, or custom engineering is the smarter path (10 min)',
    'Recommended architecture, milestone breakdown, licensing/ownership options, and next steps (10 min)',
  ],
  asyncNote: 'Not ready for a call yet? Request our free 2–4 page written Systems Review instead—async, zero pressure.',
};
