// Vertical / Niche Landing Pages (/for/[industry])
// High-ticket, high-converting B2B verticals aligned with Vector Dynamic's 8 case studies and 5 practices.

export const industries = [
  {
    slug: 'logistics',
    eyebrow: 'Industry Playbook · Logistics & Distribution',
    name: 'Logistics, Freight & Distribution',
    headline: 'Unified dispatch, freight documents, and warehouse inventory.',
    lede: 'We build carrier portals, automated document extraction, and multi-warehouse inventory systems for freight forwarders, 3PLs, and wholesale distributors.',
    pains: [
      'Coordinators spend hours re-keying bills of lading, carrier rate sheets, commercial invoices, and proof-of-delivery PDFs into spreadsheets and accounting tools',
      'Customers email or call all day asking "where is my shipment?" because tracking lives across disconnected carrier portals',
      'Inventory counts across warehouses disagree with sales commitments, causing stockouts or rush freight charges',
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
      'Send us one manual dispatch, document-entry, or inventory workflow. We will return a free 2–4 page engineering review showing where hours leak, 3 quick wins, and a milestone estimate.',
    relatedWork: ['okebase', 'ledgerflow', 'runwayiq'],
    relatedPractice: 'erp',
  },
  {
    slug: 'ecommerce-operations',
    eyebrow: 'Industry Playbook · E-Commerce & Wholesale',
    name: 'E-Commerce, Wholesale & Retail Groups',
    headline: 'Connect storefronts, social commerce, and warehouse operations.',
    lede: 'We unify Shopify, B2B wholesale, Meta social channels, and 3PL inventory into one reliable operations and revenue stack.',
    pains: [
      'Thousands of WhatsApp, Instagram DM, and Facebook ad inquiries go unanswered after hours, wasting paid ad spend',
      'Stock levels drift between retail storefronts, B2B wholesale portals, marketplaces, and warehouse counts',
      'Finance reconciles payouts, refunds, shipping fees, and landed COGS manually in giant end-of-month spreadsheets',
    ],
    solutions: [
      {
        name: 'Omnichannel AI Sales Inbox & Ad Attribution',
        text: 'Consolidate WhatsApp, Instagram, and Messenger into one catalog-grounded AI sales engine that answers product questions and sends live checkout links in seconds.',
      },
      {
        name: 'Unified Order, Inventory & 3PL Sync Engine',
        text: 'Idempotent API pipelines with retry queues and instant failure alerts keeping storefronts, warehouses, and accounting 100% aligned.',
      },
      {
        name: '13-Week Cash & SKU Stockout Forecasting',
        text: 'Real-time SKU profitability after ad spend, freight, and returns—paired with lead-time-aware supplier reorder triggers before bestsellers run dry.',
      },
    ],
    auditOffer:
      'Tell us where social leads, stock counts, or financial reconciliations break today. We will map the bottleneck and send a free written Systems Review with 3 quick wins.',
    relatedWork: ['advantage-ai', 'runwayiq', 'okebase'],
    relatedPractice: 'automation',
  },
  {
    slug: 'manufacturing',
    eyebrow: 'Industry Playbook · Manufacturing & Industrial',
    name: 'Manufacturing & Industrial Supply',
    headline: 'Modern ERP, lot traceability, and AP automation for plants.',
    lede: 'We engineer multi-plant ERP modules, double-entry stock ledgers, automated three-way invoice matching, and demand forecasting for industrial operators.',
    pains: [
      'Legacy on-premise ERPs charge punitive per-seat fees, stall on custom shop-floor workflows, and take seconds to load large stock tables',
      'AP teams manually cross-check hundreds of multi-page supplier invoices against purchase orders and warehouse receiving slips',
      'Raw material shortages blindside production schedules because purchasing relies on static spreadsheet reorder rules',
    ],
    solutions: [
      {
        name: 'Multi-Plant ERP & Double-Entry Stock Ledger',
        text: 'Track raw materials, work-in-progress (WIP) assemblies, batch/lot serials, and inter-branch transfers with sub-50ms query performance.',
      },
      {
        name: 'Autonomous 3-Way Match (PO ↔ GRN ↔ Invoice)',
        text: 'Extract supplier PDF invoices, verify line-item arithmetic, reconcile unit-of-measure conversions against warehouse receipts, and flag price creep automatically.',
      },
      {
        name: 'Lead-Time-Aware Demand & Purchasing Radar',
        text: 'Backtested statistical forecasting paired with supplier lead times and MOQs so purchasing locks in raw materials before production lines stall.',
      },
    ],
    auditOffer:
      'Share one production tracking, inventory valuation, or supplier invoicing bottleneck. We will deliver a free written Systems Review and target architecture.',
    relatedWork: ['okebase', 'ledgerflow', 'runwayiq'],
    relatedPractice: 'erp',
  },
  {
    slug: 'real-estate-construction',
    eyebrow: 'Industry Playbook · Real Estate & Construction',
    name: 'Real Estate, Property & Construction',
    headline: 'Multi-entity project accounting, subcontractor AP, and 24/7 intake.',
    lede: 'We build consolidated multi-SPV accounting systems, automated subcontractor billing verification, and 24/7 voice reception for property and construction groups.',
    pains: [
      'Finance manages each project SPV or property entity in separate accounting logins, making consolidated group cash flow and job-cost reporting a monthly nightmare',
      'Inbound buyer, leasing, and maintenance calls go to voicemail outside office hours, losing high-value deals and delaying urgent site dispatches',
      'Project managers and controllers spend days verifying subcontractor progress bills, lien waivers, and change orders against contract budgets',
    ],
    solutions: [
      {
        name: 'Multi-Entity Holding & Job-Costing ERP',
        text: 'Manage unlimited property SPVs, construction sites, and regional branches in one database-isolated platform with real-time group consolidation.',
      },
      {
        name: '24/7 AI Voice Reception & Lead Qualification',
        text: 'Answer every leasing, buyer, or tenant maintenance call on the first ring, qualify budgets and timelines, book site viewings, and dispatch urgent tickets.',
      },
      {
        name: 'Automated Subcontractor Invoice & Contract Audit',
        text: 'Parse draw requests and vendor bills, verify math against approved project POs, and search construction specs and lease agreements with page-cited RAG.',
      },
    ],
    auditOffer:
      'Walk us through your multi-entity reporting, subcontractor AP, or buyer intake workflow for a free 2–4 page written Systems Review.',
    relatedWork: ['okebase', 'voxflow', 'ledgerflow'],
    relatedPractice: 'erp',
  },
  {
    slug: 'field-services',
    eyebrow: 'Industry Playbook · Commercial Field Services',
    name: 'Commercial Field Services & Franchises',
    headline: '24/7 voice reception, instant lead dispatch, and branch ERP.',
    lede: 'We deploy first-ring AI call reception, sub-45-second outbound lead calling, and multi-branch dispatch software for commercial service brands.',
    pains: [
      'High-margin emergency or commercial quote calls hit voicemail during peak hours, evenings, and weekends—sending buyers straight to competitors',
      'Web form and paid-ad leads wait hours for a human callback, crushing conversion rates and driving up customer acquisition cost',
      'Multi-location franchise owners lack a unified view of branch call conversion, technician capacity, and regional P&L',
    ],
    solutions: [
      {
        name: '24/7 AI Voice Reception & <45s Speed-to-Lead',
        text: 'Pick up 100% of inbound calls on the first ring and automatically dial new web/ad leads within 45 seconds—qualifying job scope and locking live calendar slots.',
      },
      {
        name: 'Omnichannel Social & WhatsApp Lead Closer',
        text: 'Convert Facebook, Instagram, and WhatsApp inquiries into booked estimates automatically with guardrailed ad-spend attribution.',
      },
      {
        name: 'Multi-Branch Operations & Dispatch ERP',
        text: 'Track branch-level inventory, purchase orders, technician schedules, and consolidated financial performance in one platform.',
      },
    ],
    auditOffer:
      'Tell us your monthly inbound call and lead volume. We will return a free written Systems Review showing how to capture missed revenue and automate scheduling.',
    relatedWork: ['voxflow', 'advantage-ai', 'okebase'],
    relatedPractice: 'ai',
  },
  {
    slug: 'healthcare-operations',
    eyebrow: 'Industry Playbook · Healthcare Operations',
    name: 'Clinics, Diagnostics & Healthcare Groups',
    headline: 'Automate patient scheduling, document intake, and clinic workflows.',
    lede: 'We build privacy-first voice scheduling, automated referral and form extraction, and multi-site operations software for clinics and diagnostic groups.',
    pains: [
      'High inbound call volume sends new patients to voicemail during peak clinic hours, losing bookings',
      'Staff re-type patient intake forms, referral PDFs, and lab/appointment updates across disconnected portals',
      'Multi-location clinic managers lack a single real-time view of provider utilization, no-shows, and pending follow-ups',
    ],
    solutions: [
      {
        name: '24/7 Voice & Digital Patient Scheduling',
        text: 'Answer inbound calls and web inquiries immediately, book valid provider calendar slots, send reminders, and transfer urgent clinical calls straight to staff.',
      },
      {
        name: 'Automated Referral, Claim & Document Triage',
        text: 'Extract structured fields from incoming faxes, PDFs, and forms into a clean human-review queue with role-based access and full audit logs.',
      },
      {
        name: 'Multi-Site Clinic Operations & SOP Assistant',
        text: 'Track appointment capacity and administrative SLAs across locations while giving staff instant, permission-scoped answers from clinical and billing SOPs.',
      },
    ],
    auditOffer:
      'Share one front-desk scheduling, referral, or document-handling bottleneck. We will prepare a free written Systems Review detailing security controls and 3 quick wins.',
    relatedWork: ['voxflow', 'vaultrag', 'okebase'],
    relatedPractice: 'ai',
  },
  {
    slug: 'finance-accounting',
    eyebrow: 'Industry Playbook · Finance & Advisory',
    name: 'Financial Services, Accounting & Advisory',
    headline: 'Deterministic invoice reconciliation, treasury forecasting, and compliance search.',
    lede: 'We engineer code-verified document extraction, rolling 13-week cash models, and permission-scoped contract search for finance and advisory teams.',
    pains: [
      'Controllers and analysts burn days keying vendor bills, bank statements, and portfolio company reports into accounting systems',
      'Rolling 13-week cash-flow forecasts break every week because AR aging, AP commitments, and payroll live in disconnected silos',
      'Auditors and advisors struggle to search across thousands of tax, legal, and client contract PDFs without risking permission leakage',
    ],
    solutions: [
      {
        name: 'Deterministic AP Extraction & 3-Way Reconciliation',
        text: 'Ingest invoices and financial statements with code-enforced cross-footing math checks, duplicate detection, and direct QuickBooks/Xero/NetSuite sync.',
      },
      {
        name: 'Automated 13-Week Treasury & Portfolio BI',
        text: 'Consolidate multi-company accounting, Stripe/commerce, and bank feeds into calibrated P10/P50/P90 cash runway projections and interactive scenario simulators.',
      },
      {
        name: 'ACL-Scoped Contract & Regulatory Knowledge Engine',
        text: 'Search client agreements, audit workpapers, and regulatory manuals with strict role-level security trimming and exact page citations.',
      },
    ],
    auditOffer:
      'Send us one reconciliation, cash-reporting, or document-audit workflow. We will return a free 2–4 page written engineering review.',
    relatedWork: ['ledgerflow', 'runwayiq', 'vaultrag'],
    relatedPractice: 'automation',
  },
  {
    slug: 'b2b-saas',
    eyebrow: 'Industry Playbook · B2B SaaS & Technology',
    name: 'B2B SaaS & Technology Companies',
    headline: 'Ship production AI features, customer integrations, and codebase upgrades.',
    lede: 'We embed alongside your product team to deliver native CRM/ERP connectors, grounded AI capabilities, and ongoing repository maintenance.',
    pains: [
      'Enterprise prospects block deals waiting on CRM/ERP integrations, SSO/RBAC permissions, or data-migration tooling',
      'Leadership wants practical AI capabilities—grounded search, drafting, or agents—shipped safely without pulling core engineers off the roadmap',
      'Technical debt, slow database queries, or an inherited legacy module slows down every sprint',
    ],
    solutions: [
      {
        name: 'Embedded Applied-AI & Permission-Scoped RAG',
        text: 'Production LLM features with tenant isolation, source citations, golden-dataset evaluation suites, and per-account token budgets.',
      },
      {
        name: 'Codebase Maintenance & Customer Integration Pods',
        text: 'Resilient two-way connectors (Salesforce, HubSpot, Slack, Jira, QuickBooks, Stripe) plus ongoing repository maintenance and performance tuning.',
      },
      {
        name: 'Slack-Native Internal Operations & Delivery Tools',
        text: 'Run standups, leave management, AI thread-to-task structuring, and project RBAC directly inside Slack with an executive web cockpit.',
      },
    ],
    auditOffer:
      'Point us to a stalled AI feature, integration backlog, or legacy repository bottleneck. We will deliver a concise written engineering review and milestone estimate.',
    relatedWork: ['opsera', 'vaultrag', 'syncdaily'],
    relatedPractice: 'maintenance',
  },
];

export function getIndustryBySlug(slug) {
  return industries.find((ind) => ind.slug === slug) || null;
}
