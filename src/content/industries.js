// Vertical / Niche Landing Pages (/for/[industry]) supporting the 90-Day Course & Hunting Guide #23.
// Plain operational language, US spelling, zero banned words, zero fake client claims.

export const industries = [
  {
    slug: 'logistics',
    eyebrow: 'Software & Automation for Logistics & Distribution',
    name: 'Logistics, Freight & Distribution',
    headline: 'Stop running freight, warehouse stock, and dispatch across ten spreadsheets.',
    lede: 'We build custom dispatch portals, multi-warehouse inventory systems, document extraction pipelines, and ERP/accounting integrations for growing freight forwarders, 3PLs, and wholesale distributors.',
    pains: [
      'Coordinators spend hours re-keying bills of lading, carrier rate sheets, commercial invoices, and proof-of-delivery PDFs into spreadsheets and accounting tools',
      'Customers email or call all day asking "where is my shipment?" because tracking lives across disconnected carrier portals',
      'Inventory counts across warehouses disagree with sales commitments, causing stockouts or Rush freight charges',
    ],
    solutions: [
      {
        name: 'Automated Freight & Order Document Processing',
        text: 'Extract line items, weights, SKUs, and charges from PDFs and emails automatically—validated against purchase orders and posted cleanly into your TMS, ERP, or accounting software.',
      },
      {
        name: 'Customer & Carrier Operations Portals',
        text: 'Give shippers, brokers, and warehouse leads one fast web portal for live shipment status, document uploads, quoting, and exception alerts.',
      },
      {
        name: 'Multi-Warehouse Inventory & Margin Visibility',
        text: 'Unify stock reservations, supplier POs, landed costs, and invoicing so leadership sees accurate SKU availability and margin every day.',
      },
    ],
    auditOffer:
      'Send us one manual dispatch, document-entry, or inventory workflow. We will return a free 2–4 page engineering review showing where hours leak, 3 quick wins, and a fixed-price build estimate.',
    relatedWork: ['okebase', 'ledgerflow'],
    relatedPractice: 'erp',
  },
  {
    slug: 'ecommerce-operations',
    eyebrow: 'Systems & Automation for E-Commerce & Wholesale Brands',
    name: 'E-Commerce, Wholesale & Multi-Channel Operations',
    headline: 'Connect storefronts, wholesale orders, inventory, and finance without brittle zaps.',
    lede: 'When order volume grows across Shopify, B2B wholesale, marketplaces, and 3PL warehouses, patchwork spreadsheets and fragile no-code zaps start dropping orders. We engineer dependable back-office operations systems that keep every channel in sync.',
    pains: [
      'Stock levels drift between retail storefronts, B2B wholesale portals, Amazon/marketplaces, and warehouse counts',
      'Finance reconciles payouts, refunds, shipping fees, and landed COGS manually in giant end-of-month spreadsheets',
      'B2B wholesale buyers still submit orders via emailed spreadsheets because off-the-shelf apps cannot handle custom price tiers and split shipments',
    ],
    solutions: [
      {
        name: 'Unified Order, Inventory & 3PL Sync Engine',
        text: 'Idempotent API pipelines with retry queues and instant failure alerts keeping storefronts, warehouses, and accounting 100% aligned.',
      },
      {
        name: 'Custom B2B Wholesale & Dealer Portals',
        text: 'Customer-specific price lists, net-terms limits, repeat-order workflows, and live stock visibility built around how you sell.',
      },
      {
        name: 'Live Contribution Margin & Reorder Automation',
        text: 'Real-time SKU profitability after ad spend, freight, and returns—paired with automated supplier reorder triggers before stock runs dry.',
      },
    ],
    auditOffer:
      'Tell us where orders, stock counts, or financial reconciliations break today. We will map the bottleneck and send a free written Systems Review with 3 quick wins.',
    relatedWork: ['advantage-ai', 'runwayiq'],
    relatedPractice: 'automation',
  },
  {
    slug: 'healthcare-operations',
    eyebrow: 'Software & Workflow Automation for Healthcare Operations',
    name: 'Clinics, Diagnostics & Healthcare Administration',
    headline: 'Cut administrative intake, scheduling, and billing backlogs without burning out staff.',
    lede: 'Front-desk and back-office healthcare teams lose hours every day to phone tag, paper/PDF intake forms, referral tracking, and manual status updates. We build privacy-first intake, scheduling, and administrative workflow software.',
    pains: [
      'High inbound call volume sends new patients to voicemail during peak clinic hours, losing bookings',
      'Staff re-type patient intake forms, referral PDFs, and lab/appointment updates across disconnected portals',
      'Multi-location clinic managers lack a single real-time view of provider utilization, no-shows, and pending follow-ups',
    ],
    solutions: [
      {
        name: '24/7 Voice & Digital Intake Assistants',
        text: 'Answer inbound calls and web inquiries immediately, book valid calendar slots, send reminders, and transfer urgent clinical calls straight to staff.',
      },
      {
        name: 'Automated Referral & Document Triage',
        text: 'Extract structured fields from incoming faxes, PDFs, and forms into a clean human-review queue with role-based access and full audit logs.',
      },
      {
        name: 'Multi-Site Clinic Operations Dashboards',
        text: 'Track appointment capacity, referral conversion, no-show recovery, and administrative SLAs across locations in one secure portal.',
      },
    ],
    auditOffer:
      'Share one front-desk scheduling, referral, or document-handling bottleneck. We will prepare a free written Systems Review detailing security considerations, 3 quick wins, and a milestone estimate.',
    relatedWork: ['voxflow', 'vaultrag'],
    relatedPractice: 'ai',
  },
  {
    slug: 'b2b-saas',
    eyebrow: 'Product & AI Engineering Partner for B2B Software Teams',
    name: 'B2B SaaS & Technology Companies',
    headline: 'Ship production AI features, integrations, and roadmap milestones without a 3-month hiring delay.',
    lede: 'Your core engineers are busy protecting the main product while customers ask for native integrations, enterprise permissions, and embedded AI features. We ship production-ready modules directly inside your Git workflow and CI standards.',
    pains: [
      'Enterprise prospects block deals waiting on CRM/ERP integrations, SSO/RBAC permissions, or data-migration tooling',
      'Leadership wants practical AI capabilities—grounded search, drafting, or agents—shipped safely without pulling core engineers off the roadmap',
      'Recruiting a senior full-stack or applied-AI engineer locally takes 10–14 weeks before their first meaningful pull request',
    ],
    solutions: [
      {
        name: 'Embedded Applied-AI & RAG Features',
        text: 'Production LLM features with tenant isolation, source citations, golden-dataset evaluation suites, and per-account token budgets.',
      },
      {
        name: 'Customer Integration & Onboarding Accelerators',
        text: 'Resilient two-way connectors (Salesforce, HubSpot, Slack, Jira, QuickBooks, webhooks) and CSV/legacy import pipelines that unblock enterprise deals.',
      },
      {
        name: 'Dedicated Senior Engineering Pods',
        text: '2 to 4 senior engineers working inside your repo, PR review standards, and daily overlap hours—ready in two weeks with fixed monthly predictability.',
      },
    ],
    auditOffer:
      'Point us to a stalled AI feature, integration backlog, or architecture bottleneck. We will deliver a concise written engineering review or scope a 4–6 week fixed-price build sprint.',
    relatedWork: ['opsera', 'syncdaily'],
    relatedPractice: 'custom-software',
  },
];

export function getIndustryBySlug(slug) {
  return industries.find((ind) => ind.slug === slug) || null;
}

