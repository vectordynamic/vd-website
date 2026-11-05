/**
 * Engineering Case Studies — single source of truth for /work, /work/[slug],
 * Homepage FeaturedWork, service/industry cross-links, and llms.txt routes.
 */

export const workItems = [
  {
    slug: 'okebase',
    name: 'Okebase',
    domainBadge: 'Multi-Entity ERP & Operations Ledger',
    practice: 'erp',
    practiceLabel: 'Business Systems & ERP',
    image: '/images/work/okebase.webp',
    alt: 'Okebase multi-entity ERP architecture showing holding group tenant hierarchy, metadata-driven custom schema engine, and consolidated double-entry ledger.',
    headline:
      'Multi-entity ERP built for holding groups and regional branches.',
    summary:
      'Unifies inventory, purchasing, approvals, and consolidated accounting across subsidiaries with database-enforced tenant isolation and sub-50ms ledger queries.',
    problem: [
      'Operators running multiple legal entities, sister companies, or regional branches are forced into an expensive compromise. Off-the-shelf cloud ERPs charge punitive per-seat fees, hardcode rigid approval workflows that do not match actual floor operations, and require separate logins or brittle sync scripts between sister companies. Meanwhile, legacy on-premise ERPs degrade to multi-second page loads once inventory and journal tables cross a few million rows.',
      'Finance and operations leaders end up exporting CSVs from five disconnected systems every Friday just to reconcile inter-company stock transfers, branch-level margins, and consolidated cash positions. According to Panorama Consulting ERP benchmarks, 64% of mid-market ERP rollouts exceed budget or stall because rigid software forces businesses to rewrite their core operating procedures.'
    ],
    businessNeeds: [
      'Run multiple legal entities, tax jurisdictions, and physical branches inside one unified platform with strict tenant isolation and real-time group consolidation.',
      'Adapt data schemas, custom fields, document templates, and multi-stage approval rules per subsidiary without waiting on engineering redeployments.',
      'Maintain sub-50ms search, filter, and ledger rollup performance across 10M+ inventory movements and accounting journal entries.',
      'Eliminate punitive per-seat SaaS licensing with predictable, organization-wide deployment.'
    ],
    features: [
      {
        name: 'Multi-organization & branch hierarchy',
        text: 'Manage parent holding companies, operating subsidiaries, and regional warehouses under a single identity provider. Supports entity-specific base currencies, tax schedules, chart of accounts, and automated inter-company elimination journals.'
      },
      {
        name: 'Metadata-driven custom schema & workflow engine',
        text: 'Operations admins define custom attributes, document states, and conditional DAG approval chains (such as requiring regional director sign-off when a purchase order exceeds $25,000 or margin drops below 18%) directly at runtime.'
      },
      {
        name: 'Double-entry inventory & warehouse ledger',
        text: 'Every stock receipt, bin transfer, assembly build, and shipment is recorded as an immutable double-entry movement. Supports batch/lot traceability, FIFO and weighted-average costing, and automated reorder threshold alerts.'
      },
      {
        name: 'Real-time executive consolidation & audit trail',
        text: 'Drill down from group-wide P&L, balance sheet, and working-capital views into individual branch vouchers and cryptographically signed field-level change logs.'
      }
    ],
    architecture: [
      {
        stage: 'Tenant Context & Access Gateway',
        detail:
          'Session tokens bind every request to an explicit organization, branch, and role scope before any query reaches the database pool.'
      },
      {
        stage: 'Runtime Metadata & Rules Engine',
        detail:
          'Validates custom entity fields against JSON Schema definitions and evaluates multi-step approval state machines in memory.'
      },
      {
        stage: 'Partitioned Transactional Core',
        detail:
          'PostgreSQL with Row-Level Security (RLS) policies, range-partitioned journal tables, and GIN-indexed JSONB columns for custom attributes.'
      },
      {
        stage: 'Incremental Rollup & Event Bus',
        detail:
          'Materialized views and asynchronous workers compute real-time stock valuations, aging buckets, and consolidated group statements.'
      }
    ],
    complexities: [
      {
        name: 'Zero-leakage multi-tenancy with cross-entity consolidation',
        text: 'Enforced PostgreSQL Row-Level Security (RLS) tied to session context variables so branch staff can never query sibling entities, paired with scoped security-definer rollup views for group CFO reporting.'
      },
      {
        name: 'High-speed custom fields without EAV query collapse',
        text: 'Replaced traditional Entity-Attribute-Value join tables with hybrid relational columns and GIN-indexed JSONB attributes, preserving sub-50ms P95 filtering across millions of custom records.'
      },
      {
        name: 'Concurrency-safe inventory & financial posting',
        text: 'Implemented append-only double-entry ledger semantics with optimistic concurrency control and advisory locks on high-velocity SKUs, eliminating negative-stock race conditions during peak order bursts.'
      }
    ],
    stack: [
      'PostgreSQL (RLS + Partitioning + JSONB)',
      'Node.js / TypeScript',
      'Next.js App Router',
      'Redis',
      'Docker'
    ],
    lessons: [
      'Multi-entity ERPs fail when tenant isolation is handled only in application `WHERE` clauses; database-enforced RLS makes cross-entity leakage structurally impossible.',
      'Inventory and accounting must share the same immutable append-only ledger model—mutable balance columns always drift under concurrent warehouse activity.'
    ]
  },
  {
    slug: 'voxflow',
    name: 'VoxFlow',
    domainBadge: 'Autonomous Voice & Lead Dispatch Engine',
    practice: 'ai',
    practiceLabel: 'Applied AI',
    image: '/images/work/voxflow.webp',
    alt: 'VoxFlow autonomous voice and lead dispatch schematic showing SIP WebRTC voice streaming, sub-second barge-in detection, atomic calendar slot locking, and CRM writeback.',
    headline:
      '24/7 inbound voice reception and instant speed-to-lead calling.',
    summary:
      'Answers every inbound call on the first ring, dials new web leads within 45 seconds, locks live calendar slots, and syncs the CRM.',
    problem: [
      'High-intent buyers call when they have an immediate problem, or submit a web form expecting a call back within minutes. When calls hit voicemail during peak hours, evenings, or weekends—or when sales reps take four hours to dial a new inquiry—up to 60% of qualified revenue walks to the next provider who answers.',
      'Hiring 24/7 front-desk staff is expensive, turnover-prone, and still bottlenecks when three calls arrive at once. Meanwhile, generic IVR phone trees frustrate callers, and off-the-shelf voice bots suffer from awkward two-second pauses, talk over the customer, or hallucinate pricing and appointment availability.'
    ],
    businessNeeds: [
      'Pick up 100% of inbound calls on the first ring 24/7/365 with concurrent line bursting so no caller ever hears a busy signal or voicemail.',
      'Trigger instant outbound speed-to-lead calls within 45 seconds of a web form submission, ad lead, or missed call—plus scheduled follow-up cadences.',
      'Qualify callers against custom business criteria, book confirmed appointments directly into staff calendars, and execute warm transfers to human specialists when required.',
      'Write structured call summaries, qualification scores, transcripts, and recordings directly into the CRM.'
    ],
    features: [
      {
        name: '24/7 inbound reception & instant outbound speed-to-lead',
        text: 'Handles unlimited simultaneous inbound calls and automatically initiates outbound qualification or appointment-reminder calls triggered by CRM webhooks, web forms, or lead ads.'
      },
      {
        name: 'Sub-500ms full-duplex conversational voice engine',
        text: 'Streams raw telephony audio over WebSockets with Voice Activity Detection (VAD) and instant barge-in handling—stopping speech synthesis within 80ms the moment a caller interrupts.'
      },
      {
        name: 'Transactional calendar booking & conflict resolution',
        text: 'Queries real-time staff availability across Google Workspace, Microsoft 365, or industry scheduling software, negotiates time slots naturally, locks the booking, and sends SMS/email confirmations while on the call.'
      },
      {
        name: 'Warm human handoff & structured CRM dispatch',
        text: 'Transfers high-priority or emergency callers directly to on-call staff with a whispered context briefing, and logs structured JSON call outcomes, sentiment, and audio links into HubSpot, Salesforce, or custom ERPs.'
      }
    ],
    architecture: [
      {
        stage: 'SIP / WebRTC Telephony Edge',
        detail:
          'Twilio Elastic SIP Trunking streams bidirectional 8kHz mulaw audio over persistent WebSockets with sub-20ms jitter buffering.'
      },
      {
        stage: 'Streaming ASR & Barge-In Controller',
        detail:
          'Deepgram Nova-2 streaming transcription paired with acoustic VAD detects caller speech onset in under 80ms to cancel active TTS output.'
      },
      {
        stage: 'Guardrailed Conversation State Machine',
        detail:
          'Low-latency LLM orchestration constrained by deterministic state transitions (Greeting → Qualification → Slot Lock → Confirmation / Escalation).'
      },
      {
        stage: 'Transactional Tool & CRM Sync Worker',
        detail:
          'Executes atomic Redis-locked calendar reservations, dispatches SMS confirmations, and writes structured call payloads to the CRM.'
      }
    ],
    complexities: [
      {
        name: 'Eliminating the "awkward robot pause" (<500ms turn latency)',
        text: 'Co-located telephony media servers, streaming ASR, speculative tool prefetching, and chunked PCM voice synthesis so conversational turn-taking matches human phone cadence.'
      },
      {
        name: 'Zero hallucinated policies, prices, or time slots',
        text: 'Restricted the voice agent from quoting availability or pricing from memory; every figure and calendar slot must be returned by a deterministic tool call validated against strict JSON schemas.'
      },
      {
        name: 'Race-condition-free concurrent appointment booking',
        text: 'Implemented short-lived Redis slot holds while the caller confirms a proposed time on the phone, preventing double-bookings when multiple inbound calls negotiate the same calendar window.'
      }
    ],
    stack: [
      'Twilio SIP / WebRTC',
      'Deepgram Streaming ASR',
      'ElevenLabs Turbo / Cartesia TTS',
      'Node.js / Fastify WebSockets',
      'Redis',
      'PostgreSQL'
    ],
    lessons: [
      'Phone callers judge competence in the first four seconds; speculative greeting pre-synthesis and instant barge-in cancellation matter more than raw model size.',
      'Voice agents must never write directly to a production calendar without a short-lived reservation lock while the human verbally confirms the slot.'
    ]
  },
  {
    slug: 'advantage-ai',
    name: 'AdVantage',
    domainBadge: 'Omnichannel AI Sales & Campaign Engine',
    practice: 'automation',
    practiceLabel: 'Automation',
    image: '/images/work/advantage-ai.webp',
    alt: 'AdVantage omnichannel AI sales and campaign architecture showing unified WhatsApp, Instagram, and Messenger inbox, catalog-grounded AI sales closer, and Meta ad spend circuit breaker.',
    headline:
      'Omnichannel social inbox, AI sales closer, and ad planner.',
    summary:
      'Unifies WhatsApp, Instagram, and Messenger with a catalog-grounded AI sales representative and closed-loop Meta campaign automation.',
    problem: [
      'Commercial brands running paid social campaigns lose a massive share of conversions inside the inbox. Paid ads drive thousands of comments and DMs across Facebook, Instagram, and WhatsApp asking about sizing, stock availability, bulk pricing, or shipping timelines. Because human reps cannot answer across three separate apps at 11 PM, leads go cold and paid ad spend is wasted.',
      'At the same time, media buyers plan ad budgets in spreadsheets disconnected from which conversations actually closed into paid orders. Without closed-loop attribution from ad click to DM conversation to checkout, teams overspend on high-click, low-margin campaigns.'
    ],
    businessNeeds: [
      'Consolidate Facebook Messenger, Instagram DMs, WhatsApp Business threads, and public ad comments into one real-time workspace.',
      'Deploy an AI sales closer that answers product, inventory, and shipping questions from live catalog data, recommends bundles, and sends checkout links in under two seconds.',
      'Automate multi-day follow-up sequences and comment-to-DM triggers while escalating complex or VIP negotiations to human reps with full context.',
      'Plan, launch, and rebalance ad campaigns using actual DM-to-order revenue data, protected by hard code-level spend caps.'
    ],
    features: [
      {
        name: 'Unified Meta & WhatsApp omnichannel inbox',
        text: 'Single-pane thread management for WhatsApp Business API, Instagram Direct, Facebook Messenger, and ad comment triggers—complete with customer order history, ad source attribution, and instant human takeover.'
      },
      {
        name: 'Catalog-grounded AI sales representative',
        text: 'Queries live SKU inventory, variant pricing, technical specifications, and active promo rules before drafting replies—guiding buyers from initial question to an embedded Stripe or Shopify checkout link.'
      },
      {
        name: 'Automated follow-up & abandoned-thread recovery',
        text: 'Tracks buyer intent stage across channels and triggers personalized, policy-compliant re-engagement messages within Meta’s 24-hour messaging windows.'
      },
      {
        name: 'Closed-loop ad planner & budget circuit breaker',
        text: 'Links closed inbox orders back to specific ad creatives via Meta Conversions API (CAPI), generates data-backed campaign briefs, and enforces hard daily/lifetime spend ceilings in application code.'
      }
    ],
    architecture: [
      {
        stage: 'Omnichannel Webhook Gateway',
        detail:
          'Ingests high-throughput Meta Graph API and WhatsApp Cloud API webhooks with cryptographic signature verification and idempotency keys.'
      },
      {
        stage: 'Catalog RAG & Policy Guardrail Engine',
        detail:
          'Retrieves real-time SKU stock, pricing tiers, and shipping rules from PostgreSQL/pgvector; blocks any unverified price or discount claim.'
      },
      {
        stage: 'Conversational Sales & Handoff Router',
        detail:
          'Scores buyer intent, generates channel-formatted responses or checkout links, and routes high-value escalations to human reps.'
      },
      {
        stage: 'CAPI Attribution & Spend Enforcer',
        detail:
          'Streams server-side purchase events back to Meta Ads Manager and runs scheduled budget-cap checks with automatic campaign pause triggers.'
      }
    ],
    complexities: [
      {
        name: 'Zero fabricated prices, stock counts, or discount promises',
        text: 'Built a deterministic post-generation verification filter that cross-checks every currency figure, SKU code, and promo code in the AI draft against the live product database before transmission.'
      },
      {
        name: 'Meta 24-hour messaging window & template compliance',
        text: 'Engineered a state-aware policy scheduler that tracks the exact last-user-interaction timestamp per channel, automatically switching from free-form replies to pre-approved WhatsApp utility/marketing templates when windows expire.'
      },
      {
        name: 'Hard budget caps enforced in code, never prompts',
        text: 'Isolated all Meta Marketing API budget mutations behind a deterministic transaction service with hourly spend velocity circuit breakers and mandatory human sign-off above configurable thresholds.'
      }
    ],
    stack: [
      'Meta Graph & Marketing API',
      'WhatsApp Cloud API',
      'Next.js',
      'Node.js / BullMQ',
      'PostgreSQL + pgvector',
      'Redis'
    ],
    lessons: [
      'Social commerce speed-to-reply directly governs ROAS: answering an Instagram ad comment or WhatsApp inquiry in 2 seconds with a live checkout link converts 3x better than sending traffic to a static landing page.',
      'Never let an LLM call an ad-spend mutation API directly; financial guardrails belong in deterministic application middleware.'
    ]
  },
  {
    slug: 'opsera',
    name: 'Opsera',
    domainBadge: 'Slack-Native Company Operations OS',
    practice: 'custom-software',
    practiceLabel: 'Custom Software',
    image: '/images/work/opsera.webp',
    alt: 'Opsera Slack-native company operations OS schematic showing slash commands for standups and leave management, AI thread-to-task structuring, role-based access control, and unified web command center.',
    headline:
      'Company-wide project, standup, and leave operations inside Slack.',
    summary:
      'Runs daily standups, leave approvals, RBAC task tracking, and AI thread-to-task structuring in Slack, synced with an executive web cockpit.',
    problem: [
      'Engineering and operations teams live in Slack, but company administration is scattered across four separate tools: Jira or Linear for tasks, an HR portal for leave requests, status meetings for daily standups, and spreadsheets for executive visibility. Because engineers hate context-switching into heavy web forms, task boards fall days behind reality.',
      'Project managers end up spending 6 to 8 hours every week chasing people in Slack threads asking for status updates, manually copying decisions from chat into tickets, and cross-checking who is on leave before assigning urgent deliverables.'
    ],
    businessNeeds: [
      'Run daily standups, leave requests, task creation, backlog grooming, and status follow-ups entirely inside Slack using fast slash commands and interactive modals.',
      'Convert messy multi-person Slack discussions and client briefs into structured epics, tasks, owners, and deadlines using AI.',
      'Enforce project-scoped Role-Based Access Control (RBAC) so Admins, Project Leads, Contributors, and External Observers only execute authorized actions.',
      'Provide leadership with a real-time, two-way synced web dashboard showing company-wide sprint velocity, blockers, workload balance, and team availability.'
    ],
    features: [
      {
        name: 'Slash-command workspace execution (`/standup`, `/leave`, `/task`)',
        text: 'Submit asynchronous daily standups linked to active tickets, request and approve PTO with automatic sprint-capacity checks, assign tasks, and update backlog states in seconds without leaving Slack.'
      },
      {
        name: 'AI message & thread-to-task structuring engine',
        text: 'Trigger the bot on any Slack message or chaotic 20-reply thread to extract structured task titles, technical acceptance criteria, priority levels, and suggested assignees—presented as an interactive card for one-click human approval.'
      },
      {
        name: 'Project-scoped RBAC & automated follow-up engine',
        text: 'Granular role permissions govern who can approve leave, reprioritize backlogs, assign work, or view private client channels, while scheduled workers nudge owners on stalled or overdue tasks before deadlines slip.'
      },
      {
        name: 'Unified executive web command center',
        text: 'A real-time web cockpit synced bidirectionally with Slack—giving founders and delivery leads instant visibility into cross-project burndown, standup compliance, blocker heatmaps, and leave calendars.'
      }
    ],
    architecture: [
      {
        stage: 'Slack Bolt Gateway & <250ms Ack Edge',
        detail:
          'Verifies Slack cryptographic signatures, parses slash commands and Block Kit modal payloads, and acknowledges requests in under 250ms.'
      },
      {
        stage: 'RBAC Policy & AI Structuring Pipeline',
        detail:
          'Validates project role permissions (`Admin`, `Lead`, `Contributor`, `Observer`) and runs schema-constrained LLM extraction on Slack threads.'
      },
      {
        stage: 'Transactional Operations Core & Scheduler',
        detail:
          'PostgreSQL state machine + BullMQ cron workers managing tasks, standup logs, leave balances, capacity adjustments, and overdue follow-up nudges.'
      },
      {
        stage: 'Real-Time Web Dashboard Sync',
        detail:
          'WebSocket event broadcaster keeps the Next.js executive dashboard and Slack channel threads in lockstep with zero state drift.'
      }
    ],
    complexities: [
      {
        name: 'Sub-3-second Slack interaction limits under heavy load',
        text: 'Decoupled Slack HTTP ingress from AI structuring and database writes using an immediate acknowledgment queue and asynchronous Block Kit `response_url` updates, guaranteeing zero Slack timeout errors.'
      },
      {
        name: 'Enforcing multi-role project RBAC inside shared Slack channels',
        text: 'Mapped Slack user IDs to a hierarchical RBAC policy engine so slash commands dynamically render role-appropriate modals and reject unauthorized backlog or leave approvals inside public channels.'
      },
      {
        name: 'High-signal follow-ups without notification fatigue',
        text: 'Replaced naive hourly reminder spam with an intelligent digest scheduler that batches non-urgent nudges into each team member’s morning standup prompt and only escalates true critical-path blockers.'
      }
    ],
    stack: [
      'Slack Bolt SDK & Block Kit',
      'Next.js',
      'Node.js / TypeScript',
      'PostgreSQL',
      'Redis + BullMQ',
      'Structured LLM Extraction'
    ],
    lessons: [
      'Internal operations tools succeed or fail on friction: when updating a task or logging leave takes a 4-second slash command in Slack, adoption hits 98%+ without management policing.',
      'AI task extraction from chat must always present an editable preview card before writing to the backlog—human confirmation keeps the backlog clean.'
    ]
  },
  {
    slug: 'syncdaily',
    name: 'SyncDaily',
    domainBadge: 'Personalized AI Intelligence Platform',
    practice: 'ai',
    practiceLabel: 'Applied AI',
    image: '/images/work/syncdaily.webp',
    alt: 'SyncDaily personalized AI intelligence platform architecture showing multi-source arXiv and Big Tech ingestion, pgvector semantic deduplication, and role-tailored briefings for business leaders, engineers, and students.',
    headline:
      'Role-specific AI and Big Tech intelligence for decision-makers.',
    summary:
      'Ingests and deduplicates global AI research, model releases, and market moves into tailored impact briefings for leaders, engineers, and students.',
    problem: [
      'Every week brings hundreds of new AI papers, open-weight model checkpoints, framework updates, regulatory shifts, and Big Tech product launches. Decision-makers, engineers, and ambitious students drown in generic newsletters and social hype that repeat the same surface-level headlines without explaining the underlying technical or commercial reality.',
      'Crucially, the same breakthrough means something completely different depending on who you are: a founder needs to know how a new model shifts unit economics or defensibility; a staff engineer needs benchmark trade-offs, VRAM requirements, and migration paths; a student needs to know which foundational concepts and portfolio opportunities just opened up.'
    ],
    businessNeeds: [
      'Ingest and deduplicate thousands of daily items across arXiv, GitHub, engineering blogs, Big Tech announcements, and venture filings into single canonical stories.',
      'Synthesize role-specific impact analysis tailored to the reader’s persona (Business Leader, Software/ML Engineer, or Student/Researcher) and personal topic graph.',
      'Translate every major development into concrete, actionable next steps: what to pilot, refactor, study, or build right now.',
      'Keep LLM inference costs sub-linear as subscriber volume scales from hundreds to tens of thousands of daily readers.'
    ],
    features: [
      {
        name: 'Multi-source ingestion & semantic event clustering',
        text: 'Continuously crawls research preprints, code repositories, release notes, and tech press—using dense vector embeddings to collapse 40+ repetitive articles about the same launch into one verified event node.'
      },
      {
        name: 'Role-adaptive impact synthesis (Executive / Engineer / Student)',
        text: 'Generates distinct analytical lenses for each canonical event: commercial ROI and strategic risk for executives; architecture, latency, and implementation patterns for engineers; learning roadmaps and project ideas for students.'
      },
      {
        name: 'Actionable opportunity & playbook generator',
        text: 'Pairs every briefing with concrete "What to do in this situation" playbooks—linking directly to primary benchmarks, repositories, migration guides, or market gaps.'
      },
      {
        name: 'Personal interest graph & multi-channel delivery',
        text: 'Learns from explicit topic weights (such as Agentic Workflows, Rust Systems, Computer Vision, or FinTech) and engagement signals to deliver a ranked daily web feed and morning briefing.'
      }
    ],
    architecture: [
      {
        stage: 'Distributed Source Harvesters',
        detail:
          'Scheduled scrapers and RSS/API workers ingest arXiv, GitHub, Hacker News, lab blogs, and SEC/funding feeds into a normalized raw store.'
      },
      {
        stage: 'Vector Deduplication & Entity Graph',
        detail:
          'Computes embeddings in pgvector, merges duplicate coverage via cosine similarity thresholds, and extracts primary source citations.'
      },
      {
        stage: 'Two-Tier "Analyze Once, Tailor Cheaply" Engine',
        detail:
          'Runs deep multi-document synthesis once per canonical cluster, then generates persona-specific framing nodes cached by role and domain.'
      },
      {
        stage: 'Personalized Ranking & Dispatch Pipeline',
        detail:
          'Matches user interest vectors against canonical persona nodes to assemble individualized web feeds and scheduled email briefings.'
      }
    ],
    complexities: [
      {
        name: 'Decoupling LLM inference cost from subscriber growth',
        text: 'Engineered a two-stage "analyze once per story cluster, project across persona axes" pipeline so computational cost scales with daily world events rather than multiplying per subscriber.'
      },
      {
        name: 'Eliminating hype and enforcing primary-source grounding',
        text: 'Built a citation verifier that strips secondary commentary and forces every technical claim, benchmark score, or funding figure to link directly to the underlying arXiv paper, GitHub commit, or official filing.'
      },
      {
        name: 'Cross-day storyline deduplication',
        text: 'Implemented sliding-window semantic clustering with temporal decay so ongoing multi-day stories only trigger a new briefing when substantive new technical or commercial facts emerge.'
      }
    ],
    stack: [
      'Python',
      'PostgreSQL + pgvector',
      'Next.js',
      'Redis + BullMQ',
      'Structured LLM Pipelines',
      'Resend'
    ],
    lessons: [
      'Personalized AI media cannot call an LLM per user per article at delivery time; pre-computing canonical persona facets turns an O(Users × Stories) cost problem into O(Stories).',
      'Readers trust automated intelligence only when every claim is anchored to a clickable primary source rather than a summarized opinion.'
    ]
  },
  {
    slug: 'ledgerflow',
    name: 'LedgerFlow',
    domainBadge: 'Autonomous AP & 3-Way Match Pipeline',
    practice: 'automation',
    practiceLabel: 'Automation',
    image: '/images/work/ledgerflow.webp',
    alt: 'LedgerFlow autonomous accounts payable and 3-way match pipeline schematic showing multi-format PDF invoice extraction, deterministic math verification, PO/GRN matching, and ERP sync.',
    headline:
      'Autonomous invoice extraction and three-way purchase order matching.',
    summary:
      'Extracts multi-page vendor PDFs with deterministic math checks, reconciles lines against purchase orders and receipts, and posts clean vouchers to the ERP.',
    problem: [
      'Finance and operations teams processing hundreds or thousands of monthly vendor invoices spend 15+ hours a week keying PDF line items into QuickBooks, Xero, NetSuite, or their ERP, hunting down warehouse receiving slips in email threads, and fixing SKU unit-of-measure mismatches by hand.',
      'According to Ardent Partners Accounts Payable benchmarks, manual processing costs $12 to $30 per invoice, takes an average of 10.9 days to approve, and exposes the business to duplicate billings, unnoticed supplier price creep, and missed early-payment discounts.'
    ],
    businessNeeds: [
      'Ingest multi-page PDFs, scanned delivery tickets, and international invoices automatically from shared AP inboxes, supplier portals, and mobile uploads.',
      'Verify every extracted line item against deterministic mathematical rules (`Qty × Unit Price + Tax - Discount == Total`) before any data touches the general ledger.',
      'Automatically reconcile invoices against open Purchase Orders (PO) and warehouse Goods Received Notes (GRN), routing only genuine price or quantity variances to human reviewers.',
      'Post approved, GL-coded vouchers idempotently into the accounting ledger with the source PDF permanently attached.'
    ],
    features: [
      {
        name: 'Multi-channel document intake & layout-aware extraction',
        text: 'Monitors dedicated AP email inboxes, EDI feeds, and mobile warehouse uploads—extracting complex multi-page tables, tax breakdowns, freight charges, and vendor metadata regardless of template layout.'
      },
      {
        name: 'Deterministic math, tax & fuzzy duplicate guard',
        text: 'Cross-checks line-item arithmetic in code and screens every incoming bill against historical invoices using SHA-256 file hashes plus fuzzy matching on `(Vendor Tax ID + Invoice Number + Amount + ±5-day window)`.'
      },
      {
        name: 'Automated 3-Way Match (PO ↔ GRN ↔ Invoice)',
        text: 'Links vendor line descriptions to internal master SKUs, converts packaging units (such as cases of 24 to individual units), and verifies that billed quantities and prices fall within contract tolerance thresholds.'
      },
      {
        name: 'Side-by-side exception workbench & ERP sync',
        text: 'Auto-posts clean invoices straight through to QuickBooks, Xero, NetSuite, or Okebase, while presenting flagged variances in a split-screen UI that highlights the exact bounding box on the source PDF.'
      }
    ],
    architecture: [
      {
        stage: 'Document Ingestion & Pre-Processing',
        detail:
          'IMAP/Webhook listeners ingest PDFs and scans, deskew pages, and compute cryptographic hashes for instant duplicate rejection.'
      },
      {
        stage: 'Vision-LLM Extraction & Math Verifier',
        detail:
          'Layout-aware multimodal extraction outputs strict JSON schemas validated by a deterministic Python arithmetic and tax-rate engine.'
      },
      {
        stage: '3-Way Match & GL Coding Engine',
        detail:
          'Matches invoice lines against ERP Purchase Orders and warehouse GRNs using hybrid vector + fuzzy SKU resolution and historical GL account mapping.'
      },
      {
        stage: 'Exception Workbench & Ledger Connector',
        detail:
          'Routes out-of-tolerance bills to human approvers and writes approved vouchers idempotently to the ERP/accounting API.'
      }
    ],
    complexities: [
      {
        name: 'Zero tolerance for hallucinated numbers in financial ledgers',
        text: 'Never trusted raw model output for accounting totals: every invoice must pass a deterministic cross-footing equation (`sum(line_items) + tax + shipping - discount == header_total`); any 1-cent discrepancy triggers targeted re-OCR and highlights the exact cell.'
      },
      {
        name: 'Cross-unit SKU reconciliation across messy vendor catalogs',
        text: 'Built a self-improving vendor alias and unit-of-measure conversion table so when a supplier bills "2 Pallets (48 ct)" against a PO written for "96 Units", the 3-way match engine reconciles the math automatically.'
      },
      {
        name: 'Catching subtle double-billing across channels',
        text: 'Combined exact document hashing with fuzzy composite keys to block duplicate payment when a vendor emails a PDF invoice and later mails or uploads a re-scanned copy of the same bill.'
      }
    ],
    stack: [
      'Python / FastAPI',
      'Multimodal Document Vision',
      'PostgreSQL',
      'Next.js Exception Workbench',
      'QuickBooks / Xero / ERP APIs',
      'Redis'
    ],
    lessons: [
      'In financial document automation, AI should do the reading, but deterministic code must do the math and enforce tolerance gates.',
      'Designing the 12% exception review screen with bounding-box PDF highlights is what wins daily trust from controllers and bookkeepers.'
    ]
  },
  {
    slug: 'runwayiq',
    name: 'RunwayIQ',
    domainBadge: '13-Week Treasury, BI & Demand Forecaster',
    practice: 'erp',
    practiceLabel: 'Business Systems & ERP',
    image: '/images/work/runwayiq.webp',
    alt: 'RunwayIQ 13-week treasury, BI, and demand forecaster schematic showing cross-stack ETL, SKU stockout radar, interactive what-if scenario simulator, and backtested P10/P50/P90 cash runway bands.',
    headline:
      '13-week probabilistic cash-flow and SKU stockout forecasting.',
    summary:
      'Consolidates accounting, commerce, and warehouse data to project rolling 13-week cash runway, flag inventory stockouts early, and simulate financial scenarios.',
    problem: [
      'Founders, COOs, and CFOs of growing companies rarely suffer from a lack of raw data—they suffer from data scattered across six SaaS silos. Revenue lives in Shopify or Stripe, bills and payroll live in QuickBooks or Xero, pipeline lives in HubSpot, and stock counts live in a WMS. By the time finance stitches together a monthly spreadsheet, the numbers are two weeks stale.',
      'Worse, backward-looking dashboards only tell leadership what happened last month. They fail to warn when three large enterprise customers slow-pay their invoices at the exact same week a $120,000 inventory container deposit comes due—or when a top-selling SKU is 18 days from stocking out against a 21-day supplier lead time.'
    ],
    businessNeeds: [
      'Consolidate accounting, commerce, banking, CRM pipeline, and inventory data into one reconciled warehouse with automated daily schema and freshness checks.',
      'Project 13-week rolling cash inflows, outflows, and net runway with calibrated P10 / P50 / P90 confidence bands grounded in actual customer payment behavior.',
      'Forecast SKU-level demand against supplier lead times and safety stock buffers to flag stockout dates and exact cash required for purchase orders.',
      'Give leadership an interactive "What-If" simulator and a proactive Monday 7:00 AM executive briefing that highlights anomalies and required decisions.'
    ],
    features: [
      {
        name: 'Cross-stack ETL & reconciled executive warehouse',
        text: 'Automated connectors ingest and normalize transactions from Stripe, Shopify, QuickBooks/Xero, Plaid bank feeds, HubSpot, and ERP inventory tables into a single audited semantic layer.'
      },
      {
        name: '13-week probabilistic cash-flow & AR collection engine',
        text: 'Models accounts receivable collection curves per customer cohort (factoring in historical days-to-pay drift) alongside scheduled payroll, debt covenants, tax obligations, and supplier payables.'
      },
      {
        name: 'Lead-time-aware SKU stockout & purchasing radar',
        text: 'Combines seasonal time-series forecasting with supplier lead times and minimum order quantities (MOQs) to output exact reorder dates, recommended PO quantities, and their net cash impact.'
      },
      {
        name: 'Interactive "What-If" simulator & Monday 7 AM briefing',
        text: 'Allows executives to stress-test hiring plans, ad spend shifts, or delayed receivables in real time, and delivers a weekly narrative briefing every Monday morning flagging margin compression, AR slippage, and urgent POs.'
      }
    ],
    architecture: [
      {
        stage: 'Idempotent Cross-Stack ETL Connectors',
        detail:
          'Incremental sync workers pull normalized ledgers from accounting, commerce, banking, and inventory APIs with strict reconciliation checks.'
      },
      {
        stage: 'Semantic Warehouse & Metric Layer',
        detail:
          'PostgreSQL + dbt models enforce single-source-of-truth definitions for Net Cash, Gross Margin, Contribution Margin, and Available-to-Promise Stock.'
      },
      {
        stage: 'Backtested Quantitative Forecast Engine',
        detail:
          'Python statistical and gradient-boosted models (`statsforecast` + `LightGBM`) compute P10/P50/P90 cash and demand trajectories benchmarked against naive baselines.'
      },
      {
        stage: 'Scenario Simulator & Narrative Dispatch',
        detail:
          'Deterministic simulation API powers the Next.js executive cockpit and generates grounded Monday morning briefings via Slack and email.'
      }
    ],
    complexities: [
      {
        name: 'Beating naive baselines on noisy, seasonal mid-market data',
        text: 'Built an automated rolling-origin backtesting harness that evaluates candidate time-series models (`AutoETS`, `AutoARIMA`, `LightGBM`) per SKU and cash stream against a Seasonal Naive baseline (`WAPE` / `MASE`), deploying complex models only where they provably reduce forecast error.'
      },
      {
        name: 'Separating deterministic financial math from narrative AI',
        text: 'All forecasts, covenant checks, and "What-If" cash simulations execute in pure, reproducible Python/SQL models; the LLM layer is used strictly to translate natural-language scenario parameters and summarize pre-computed variance tables.'
      },
      {
        name: 'Customer-specific AR payment drift modeling',
        text: 'Instead of assuming net-30 invoices arrive on day 30, engineered survival-curve payment estimators per customer tier so the 13-week cash trough reflects real-world collection timing.'
      }
    ],
    stack: [
      'Python (statsforecast / LightGBM)',
      'PostgreSQL + dbt',
      'Next.js Executive Cockpit',
      'FastAPI',
      'Accounting & Commerce APIs',
      'Slack / Email Dispatch'
    ],
    lessons: [
      'A forecast without a backtested error metric against a naive baseline is just a guess; showing P10/P50/P90 confidence bands lets CFOs plan for the downside without freezing growth.',
      'Connecting inventory reorder triggers directly to the 13-week cash model prevents operations from placing a purchase order that blindsides treasury.'
    ]
  },
  {
    slug: 'vaultrag',
    name: 'VaultRAG',
    domainBadge: 'Permission-Scoped Knowledge & Data Engine',
    practice: 'ai',
    practiceLabel: 'Applied AI',
    image: '/images/work/vaultrag.webp',
    alt: 'VaultRAG permission-scoped knowledge and data engine schematic showing Splink probabilistic deduplication, pre-retrieval ACL security gate, hybrid BM25 and vector search, and verified citations.',
    headline:
      'Permission-scoped enterprise search and automated data hygiene.',
    summary:
      'Deduplicates messy CRM records and answers operational questions across internal SOPs, contracts, and databases with role-level access controls and exact page citations.',
    problem: [
      'Every scaling company accumulates two compounding data liabilities: dirty structured records (duplicate customer profiles, conflicting vendor spreadsheets, inconsistent SKU attributes) and fragmented unstructured knowledge (SOPs, client contracts, engineering specs, and HR policies buried across Google Drive, SharePoint, Notion, and Slack).',
      'Standard "chat with your docs" AI prototypes fail immediately in production for two reasons: they ingest duplicate or outdated v1 documents alongside current policies—causing the AI to cite deprecated rules—and they ignore file-level permissions, risking a junior employee or contractor retrieving confidential executive, legal, or payroll figures.'
    ],
    businessNeeds: [
      'Audit, deduplicate, and standardize messy CRM, vendor, and catalog records before they pollute reporting or AI retrieval.',
      'Unify search and question-answering across PDFs, Word docs, spreadsheets, wikis, and relational databases with sub-2-second latency.',
      'Enforce strict, zero-leakage Access Control Lists (ACLs) so users only ever retrieve answers from documents their identity role is authorized to read.',
      'Guarantee every answer includes clickable document/page citations, refuses to guess when confidence is low, and logs missing-documentation gaps for ops leaders.'
    ],
    features: [
      {
        name: 'Automated data hygiene & probabilistic entity deduplication',
        text: 'Scans relational tables and spreadsheets to score data health, normalize phone/address/tax schemas, and merge duplicate customer or supplier entities using probabilistic record linkage (`Splink`) with human-in-the-loop review for borderline matches.'
      },
      {
        name: 'Document version control & canonical SOP indexing',
        text: 'Detects near-duplicate and superseded policy drafts across Drive and SharePoint, automatically archiving stale versions so retrieval only indexes the active, approved SOP or contract.'
      },
      {
        name: 'Pre-retrieval ACL enforcement & hybrid search',
        text: 'Mirrors source identity groups (Google Workspace, Entra ID / Active Directory, RBAC roles) onto every indexed chunk—filtering at the database layer before running hybrid BM25 keyword + dense vector search and cross-encoder reranking.'
      },
      {
        name: 'Inline page citations, strict abstention & gap telemetry',
        text: 'Every generated response links directly to the exact document, page number, and highlighted passage. When retrieval confidence falls below the verification threshold, the system abstains and logs the unanswered question to an Operations Knowledge Gap dashboard.'
      }
    ],
    architecture: [
      {
        stage: 'Data Hygiene & Entity Resolution Stage',
        detail:
          'Runs schema validation, deterministic normalization, and Splink Fellegi-Sunter probabilistic deduplication across structured records and document metadata.'
      },
      {
        stage: 'ACL-Mirrored Connector & Chunking Pipeline',
        detail:
          'Incremental connectors ingest Drive, SharePoint, Notion, and SQL sources, preserving layout hierarchy and attaching explicit role/group ACL bitmasks to every chunk.'
      },
      {
        stage: 'Security-Trimmed Hybrid Retrieval + Reranker',
        detail:
          'Applies mandatory SQL `WHERE acl && user_roles` pre-filtering prior to Reciprocal Rank Fusion (BM25 + pgvector) and cross-encoder top-K reranking.'
      },
      {
        stage: 'Grounded Synthesis & Abstention Gate',
        detail:
          'Generates answers constrained strictly to retrieved passages, verifies citation alignment, and routes low-confidence queries to the Knowledge Gap telemetry log.'
      }
    ],
    complexities: [
      {
        name: 'Zero-leakage security trimming before vector similarity',
        text: 'Never relied on post-retrieval filtering or prompt instructions for security; engineered composite PostgreSQL indexes combining GIN role arrays with HNSW vector graphs so restricted chunks are excluded before similarity scoring.'
      },
      {
        name: 'Preventing "garbage-in" hallucinations from stale & duplicate files',
        text: 'Built an ingestion pre-flight pipeline that resolves duplicate entities and flags conflicting document versions (such as `Refund_Policy_2024.pdf` vs `Refund_Policy_2026_FINAL.pdf`) before embeddings are committed.'
      },
      {
        name: 'Calibrated abstention over confident fabrication',
        text: 'Implemented a two-threshold reranker gate: when the top cross-encoder relevance score falls below `0.78`, the engine refuses to speculate, states exactly what policy is missing, and alerts the documentation owner.'
      }
    ],
    stack: [
      'Python (Splink + FastAPI)',
      'PostgreSQL + pgvector + ParadeDB BM25',
      'Cross-Encoder Reranker',
      'Next.js',
      'Google Workspace / Entra ID ACL Sync',
      'Docker'
    ],
    lessons: [
      'Enterprise RAG is a data hygiene and permissions engineering problem first; cleaning duplicate records and deprecated files improves answer accuracy more than swapping foundation models.',
      'An internal assistant that knows when to say "That procedure is not documented in your authorized SOPs" is infinitely more valuable than one that guesses.'
    ]
  }
];

export const workPractices = [
  { id: 'all', label: 'All Case Studies' },
  { id: 'erp', label: 'Business Systems & ERP' },
  { id: 'ai', label: 'Applied AI' },
  { id: 'automation', label: 'Automation' },
  { id: 'custom-software', label: 'Custom Software' }
];

export function getWork(slug) {
  return workItems.find((w) => w.slug === slug) || null;
}

export const getWorkBySlug = getWork;

