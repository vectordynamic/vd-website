// Portfolio & Engineering Case Studies (/work and /work/[slug]).
// Honest labels: internal products and architectures built by Vector Dynamic.
// To add your first client case study (Course Week 4 / Week 12), prepend an entry with `clientType: 'Client Engagement'`.

export const workItems = [
  {
    slug: 'syncdaily',
    name: 'SyncDaily',
    practice: 'ai',
    practiceLabel: 'AI-Powered Software and Agents',
    clientType: 'Internal Product · Live in Production',
    status: 'Live in production',
    isLive: true,
    image: '/images/work/syncdaily.webp',
    alt: 'SyncDaily automated data pipeline and digest architecture schematic',
    headline: 'An autonomous ingestion, AI curation, and SEO publishing pipeline running continuously in production.',
    summary:
      'SyncDaily ingests high-volume technical sources, deduplicates stories, runs multi-stage LLM summarization with schema validation, and serves low-latency REST and sitemap feeds.',
    problem: [
      'Most AI content and research pipelines work on five hand-picked examples in a notebook, then break within 48 hours of unattended operation: upstream RSS/HTML layouts change, duplicate stories flood the queue, LLM outputs drift from the required schema, and unthrottled API calls spike monthly token spend.',
      'We built SyncDaily as an unattended production system to solve those exact failure modes: ingesting external feeds around the clock, clustering related coverage, generating structured briefings under strict validation rules, and exposing fast, cacheable API endpoints.',
    ],
    architecture: [
      { stage: '01 · Ingestion & Deduplication', detail: 'Scheduled workers fetch upstream sources, normalize text, and cluster duplicate coverage before spending LLM tokens.' },
      { stage: '02 · Guardrailed LLM Curation', detail: 'Structured prompts extract key facts, categories, and reading metadata with strict JSON schema validation and retry caps.' },
      { stage: '03 · Editorial & Quality Gate', detail: 'Automated checks verify completeness, length bounds, slug uniqueness, and metadata integrity prior to publication.' },
      { stage: '04 · Edge-Cached API & Sitemaps', detail: 'Fast Python/REST service delivers cursor-paginated feeds, slug lookups, and chunked XML sitemaps with stale-while-revalidate caching.' },
    ],
    capabilities: [
      { name: 'Idempotent ingestion queues', text: 'Upstream timeouts, malformed feeds, and duplicate URLs are caught and retried cleanly without corrupting downstream tables.' },
      { name: 'Token-budgeted LLM pipeline', text: 'Pre-filtering and deterministic clustering ensure model calls run only on net-new items, keeping daily inference costs predictable.' },
      { name: 'Cursor pagination & SEO endpoints', text: 'Dedicated REST endpoints power instant article lookups, cursor-based feeds, and automated search-engine sitemap generation.' },
    ],
    stack: ['Python Backend API', 'Structured LLM Extraction', 'PostgreSQL', 'Automated Worker Queues', 'Next.js App Router', 'REST & Sitemap Endpoints'],
    lessons: [
      'Never call an LLM before deterministic deduplication and input cleaning—pre-filtering cut wasted model calls dramatically.',
      'Treat every model output as untrusted external input: validate against a strict schema and quarantine failures instead of publishing broken records.',
    ],
  },
  {
    slug: 'okebase',
    name: 'Okebase',
    practice: 'erp',
    practiceLabel: 'Business Systems and ERP',
    clientType: 'Internal Platform · Architecture Case Study',
    status: 'Internal platform',
    isLive: false,
    image: '/images/work/okebase.webp',
    alt: 'Okebase modular business operating system architecture schematic',
    headline: 'Modular business operating system unifying sales, multi-location inventory, suppliers, staff, and live profit-and-loss.',
    summary:
      'Designed for growing wholesale, distribution, and multi-branch B2B operators outgrowing disconnected spreadsheets without needing a bloated six-figure legacy ERP.',
    problem: [
      'Growing 10-to-150 person distributors and operational businesses hit a painful ceiling: orders sit in WhatsApp or a basic storefront, stock counts live in shared spreadsheets, purchasing happens over email, and owners wait until month-end to discover whether margins actually held.',
      'Enterprise ERPs force rigid 12-month implementations full of unused complexity, while lightweight accounting apps lack real warehouse, supplier, and multi-step operational controls. Okebase bridges that gap with clean, modular business building blocks.',
    ],
    architecture: [
      { stage: '01 · Order & Quoting Core', detail: 'Captures quotes, customer price tiers, approvals, and confirmed sales orders with instant stock reservation.' },
      { stage: '02 · Inventory & Purchasing Ledger', detail: 'Event-sourced stock movements across locations, low-stock alerts, supplier PO generation, and goods-received reconciliation.' },
      { stage: '03 · Staff & Role Permissions', detail: 'Granular role access separating warehouse staff, sales reps, branch managers, and finance approvers.' },
      { stage: '04 · Live Margin & Cash Rollup', detail: 'Real-time revenue, COGS, supplier payables, and operating expense rollups so leadership sees true daily profit and loss.' },
    ],
    capabilities: [
      { name: 'Double-checked stock ledger', text: 'Every stock adjustment records who, when, why, and the linked order or purchase receipt—eliminating mystery inventory drift.' },
      { name: 'Module-by-module adoption', text: 'Teams can start with Inventory + Orders alone, then enable Purchasing, HR/Attendance, or Financial Dashboards without re-implementing.' },
      { name: 'Spreadsheet import & reconciliation', text: 'Guided CSV/XLSX mappers validate SKUs, opening balances, and supplier records before live cutover.' },
    ],
    stack: ['Modular Monolith Architecture', 'PostgreSQL Relational Ledger', 'Role-Based Access Control (RBAC)', 'REST APIs', 'Real-Time Reporting Views'],
    lessons: [
      'In ERP engineering, auditability beats cleverness: append-only stock and financial ledgers prevent silent reconciliation nightmares months later.',
      'Operators adopt fast keyboard-friendly tables and clear exception flags far faster than decorative chart dashboards.',
    ],
  },
  {
    slug: 'opsera',
    name: 'Opsera',
    practice: 'custom-software',
    practiceLabel: 'Custom Software and Platforms',
    clientType: 'Internal Platform · Architecture Case Study',
    status: 'Internal platform',
    isLive: false,
    image: '/images/work/opsera.webp',
    alt: 'Opsera real-time dispatch and operations engine schematic',
    headline: 'Multi-workspace project orchestration connecting tasks, SLA alerts, and engineering tools in one operational view.',
    summary:
      'A multi-tenant B2B SaaS platform demonstrating clean workspace isolation, real-time deadline risk detection, and two-way webhook synchronization across Slack, GitHub, and Jira.',
    problem: [
      'Delivery teams lose hours every week reconciling status across GitHub pull requests, Jira tickets, Slack threads, and client milestone sheets. Managers only spot a slipping milestone after the deadline has already passed.',
      'Opsera brings cross-tool activity into one multi-tenant workspace: linking code commits and ticket transitions directly to client deliverables and raising early alerts when dependencies stall.',
    ],
    architecture: [
      { stage: '01 · Multi-Tenant Workspace Core', detail: 'Strict tenant-scoped data isolation, organization roles, project templates, and milestone dependency graphs.' },
      { stage: '02 · Bi-Directional Webhook Engine', detail: 'Idempotent webhook consumers and outbound dispatchers syncing GitHub PRs, Jira issues, and Slack notifications.' },
      { stage: '03 · SLA & Bottleneck Monitor', detail: 'Scheduled background workers score blocked tasks, unreviewed PRs, and approaching milestone dates.' },
      { stage: '04 · Executive & Client Views', detail: 'Clean delivery digests summarizing shipped work, upcoming milestones, and risk items without manual status meetings.' },
    ],
    capabilities: [
      { name: 'Tenant-safe SaaS foundation', text: 'Row-level workspace isolation, invite flows, audit trails, and role permissions engineered from day one.' },
      { name: 'Resilient webhook ingestion', text: 'Signature verification, deduplication keys, and dead-letter retry queues ensure zero missed external events.' },
      { name: 'Actionable Slack digests', text: 'Targeted morning summaries notify owners only when a deliverable needs attention—avoiding notification fatigue.' },
    ],
    stack: ['Next.js & React', 'Node / Python API Services', 'PostgreSQL', 'Webhook & Queue Workers', 'Slack, GitHub & Jira APIs'],
    lessons: [
      'Third-party webhooks always arrive out of order or twice eventually—designing every integration around idempotency keys saves weeks of production firefighting.',
      'Multi-tenant permissions belong in the data-access layer, never scattered across UI conditionals.',
    ],
  },
  {
    slug: 'advantage-ai',
    name: 'AdVantage AI',
    practice: 'automation',
    practiceLabel: 'Workflow Automation and Integration',
    clientType: 'Internal Platform · Architecture Case Study',
    status: 'Internal platform',
    isLive: false,
    image: '/images/work/advantage-ai.webp',
    alt: 'AdVantage AI multi-touch attribution and creative variation matrix schematic',
    headline: 'Closed-loop campaign automation pairing AI creative workflows with live ad-spend guardrails.',
    summary:
      'Automates campaign preparation, Meta Marketing API dispatch, performance ingestion, and rule-governed budget alerts with mandatory human approval gates.',
    problem: [
      'Growth teams and boutique agencies spend hours manually formatting ad variations, uploading campaign structures, pulling daily spend CSVs, and catching underperforming ad sets too late.',
      'Unchecked "autonomous marketing agents" are dangerous when connected to real ad budgets. AdVantage AI pairs fast AI creative drafting with deterministic spend ceilings and human sign-off before a dollar moves.',
    ],
    architecture: [
      { stage: '01 · Brief & Brand Rules Intake', detail: 'Captures product offer, target audience, historical winners, and strict compliance/brand tone rules.' },
      { stage: '02 · AI Variant Generation & Review', detail: 'Generates structured copy and angle variants into a side-by-side approval queue for one-click human sign-off.' },
      { stage: '03 · Meta API Campaign Dispatch', detail: 'Pushes approved campaign, ad-set, and creative payloads via API with hard daily spend caps enforced in code.' },
      { stage: '04 · ROAS Ingestion & Alert Loop', detail: 'Pulls hourly spend, CPA, and conversion metrics—pausing anomalies and proposing budget shifts within preset guardrails.' },
    ],
    capabilities: [
      { name: 'Hard financial guardrails', text: 'Deterministic rule checks enforce maximum daily and campaign-level spend ceilings that no LLM prompt can override.' },
      { name: 'Human-in-the-loop publishing', text: 'Drafts and budget reallocations require explicit one-click operator approval with a complete audit trail.' },
      { name: 'Live attribution reporting', text: 'Consolidates ad platform metrics with downstream lead and conversion events into plain daily summaries.' },
    ],
    stack: ['Workflow Orchestration Engine', 'Meta Marketing API', 'LLM Structured Drafting', 'PostgreSQL', 'Automated Alerting'],
    lessons: [
      'Any automation touching real money must separate AI suggestion from deterministic execution—hard-coded spend limits are mandatory.',
      'Side-by-side batch review cuts human approval time from 45 minutes to 3 minutes while keeping 100% editorial control.',
    ],
  },
  {
    slug: 'ai-receptionist',
    name: 'AI Receptionist',
    practice: 'automation',
    practiceLabel: 'Workflow Automation and Integration',
    clientType: 'Internal System · Pilot Ready',
    status: 'Pilot ready',
    isLive: false,
    image: '/images/work/ai-receptionist.webp',
    alt: 'AI Receptionist voice intake assistant architecture schematic',
    headline: 'Low-latency voice intake assistant that answers calls, qualifies leads, books calendar slots, and syncs CRM.',
    summary:
      'Built for service businesses, clinics, and operations teams that miss high-intent inbound phone calls after hours or during peak dispatch windows.',
    problem: [
      'Service companies, clinics, property managers, and logistics desks lose high-value bookings every week when inbound callers hit voicemail during busy hours or evenings.',
      'Traditional IVR phone trees frustrate callers, while unscripted voice bots ramble or book invalid slots. AI Receptionist uses bounded conversation states connected directly to live calendar availability and CRM records.',
    ],
    architecture: [
      { stage: '01 · Telephony & Real-Time Voice Stream', detail: 'Answers inbound PSTN/SIP calls in under a second with natural turn-taking and barge-in handling.' },
      { stage: '02 · Bounded Intent & Policy Engine', detail: 'Follows approved qualification questions, pricing/FAQ boundaries, and urgent-call escalation rules.' },
      { stage: '03 · Live Calendar & Slot Locking', detail: 'Queries real-time calendar availability, confirms time zones, books slots, and sends SMS/email confirmations.' },
      { stage: '04 · Structured CRM & Transcript Sync', detail: 'Writes call summary, caller intent, audio/transcript link, and follow-up tasks directly into the client CRM.' },
    ],
    capabilities: [
      { name: 'Warm human transfer for edge cases', text: 'Urgent callers or out-of-scope questions transfer immediately to an on-call staff member with a brief summary.' },
      { name: 'Zero double-booked appointments', text: 'Calendar checks and slot reservations run through transactional API calls rather than conversational guesswork.' },
      { name: 'Instant CRM enrichment', text: 'Sales and ops teams see clean structured fields—caller name, need, urgency, booked slot—seconds after hang-up.' },
    ],
    stack: ['Streaming Voice Pipeline', 'Telephony / SIP Webhooks', 'Function-Calling LLM', 'Cal.com / Google Calendar API', 'CRM Webhook Sync'],
    lessons: [
      'Voice latency budgets are unforgiving: concise prompts, streaming audio, and fast local tool lookups determine whether callers stay on the line.',
      'Giving the voice agent a clear "I will connect you with our team right now" fallback builds far more caller trust than bluffing.',
    ],
  },
];

export function getWorkBySlug(slug) {
  return workItems.find((item) => item.slug === slug) || null;
}

