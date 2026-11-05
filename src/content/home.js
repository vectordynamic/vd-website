// All homepage and /audit copy lives here. Plain words, US spelling, no invented numbers, no fake client claims.
export const home = {
  hero: {
    eyebrow: 'Senior Engineering Consultancy',
    title: 'The software and AI your business runs on.',
    lede: 'We engineer, integrate, and maintain custom platforms, business systems, and production AI for growing B2B companies—built around your workflow.',
    primary: { label: 'Book a discovery call', href: '/book' },
    secondary: { label: 'Free systems review', href: '/audit' },
    diagram: [
      { n: '01', label: 'Software', sub: 'Custom platforms, apps and APIs', href: '/services/custom-software' },
      { n: '02', label: 'Business Systems', sub: 'ERP, CRM and operations in one place', href: '/services/erp' },
      { n: '03', label: 'Applied AI', sub: 'Assistants, agents and knowledge base', href: '/services/ai' },
      { n: '04', label: 'Automation', sub: 'Repetitive manual work, handled', href: '/services/automation' },
    ],
  },
  problem: {
    eyebrow: 'The Operational Reality',
    title: 'Most software projects stall between the demo and the real workflow.',
    body: [
      'Gartner predicts over 40% of agentic AI projects will be canceled by the end of 2027 due to rising costs, unclear business value, and weak risk controls. Separate MIT NANDA research reported that roughly 95% of enterprise generative AI pilots showed no measurable profit-and-loss impact.',
      'ERP rollouts and custom platforms fail for the exact same reason: a prototype gets signed off, then collides with messy data, busy staff, and real production load. We engineer for daily operational reality from day one.',
    ],
    sources: [
      {
        label: 'Gartner Press Release, June 2025',
        href: 'https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027',
      },
      {
        label: 'MIT NANDA Report Coverage, Fortune 2025',
        href: 'https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/',
      },
    ],
  },
  practices: [
    {
      id: 'custom-software',
      num: '01',
      title: 'Custom Software and Platforms',
      summary: 'Web platforms, B2B SaaS products, internal operations tools, and mobile apps engineered around your business rules.',
      covers: [
        'Web platforms and multi-tenant SaaS',
        'Internal tools and operational dashboards',
        'iOS and Android mobile apps',
        'Role-based access and billing architecture',
        'Cloud architecture and service boundaries',
      ],
      trigger: 'Off-the-shelf tools force our team into clumsy workarounds.',
      href: '/services/custom-software',
    },
    {
      id: 'erp',
      num: '02',
      title: 'Business Systems and ERP',
      summary: 'Replace disconnected spreadsheets and fragile logins with one dependable system for orders, inventory, finance, and staff.',
      covers: [
        'Custom ERP and multi-branch platforms',
        'CRM, quoting and order pipelines',
        'Inventory, purchasing and invoicing',
        'HR, attendance and payroll workflows',
        'Clean data migration from spreadsheets',
        'Odoo implementation when off-the-shelf fits better',
      ],
      trigger: 'We run the company across ten spreadsheets and three logins that never agree.',
      note: 'We tell you upfront when off-the-shelf beats building custom.',
      href: '/services/erp',
    },
    {
      id: 'ai',
      num: '03',
      title: 'Applied AI and Production Agents',
      summary: 'Software with AI wired into the real workflow: grounded knowledge search, document extraction, and tool-using agents with hard cost and accuracy guardrails.',
      covers: [
        'AI features inside existing products',
        'Tool-using agents with human-in-the-loop review',
        'Private knowledge search (RAG) with source citations',
        'Voice and chat intake assistants',
        'Document classification and vision pipelines',
        'Accuracy evaluation, monitoring and spend caps',
      ],
      trigger: 'Our AI prototype looked good in a demo, then stalled before real staff used it.',
      href: '/services/ai',
    },
    {
      id: 'automation',
      num: '04',
      title: 'Workflow Automation',
      summary: 'End-to-end operational automation that removes repetitive data entry, manual approvals, and hand-built reports.',
      covers: [
        'Order, onboarding and approval workflows',
        'Invoice, form and email extraction',
        'Cross-system workflow orchestration',
        'Automated executive and client reporting',
        'Alerting, retry queues and audit logs',
      ],
      trigger: 'Skilled people spend hours re-keying the same data across tools.',
      href: '/services/automation',
    },
    {
      id: 'maintenance',
      num: '05',
      title: 'Product Maintenance, Modernization & API Integration',
      summary: 'Take over, stabilize, and scale existing software products, legacy codebases, and complex third-party API integrations without rebuilding from scratch.',
      covers: [
        'Existing codebase takeover, bug fixing and SLA maintenance',
        'Two-way API and webhook integrations (Stripe, ERP, CRM, 3PL, Telecom)',
        'Continuous feature delivery on existing web and mobile products',
        'Database query tuning, performance optimization and cloud cost reduction',
        'Zero-downtime legacy refactoring and framework upgrades',
      ],
      trigger: 'Our existing codebase or API integrations are slowing down the business, and we need senior engineers to take charge.',
      href: '/services/maintenance',
    },
  ],
  guide: {
    eyebrow: 'Why Vector Dynamic',
    title: 'Senior engineers who ship directly into your stack.',
    points: [
      {
        title: 'Proven production architectures',
        body: 'From multi-entity ERPs and sub-500ms voice agents to omnichannel AI sales engines, our systems are engineered with deterministic financial and data guardrails.',
      },
      {
        title: 'Flexible deployment & licensing',
        body: 'Choose the commercial model that fits your budget: cost-effective licensed deployment on our proven core engines, custom builds, or full source-code handover.',
      },
      {
        title: 'Direct senior engineers',
        body: 'You work directly with the senior builders designing and writing your software. No junior handoffs, no middle managers, and live milestone demos.',
      },
    ],
  },
  featuredWork: {
    eyebrow: 'Engineering Case Studies',
    title: 'Featured systems we have architected.',
    lede: 'Examine how we solve multi-entity operations, autonomous voice intake, and omnichannel revenue automation.',
    items: [
      {
        slug: 'okebase',
        name: 'Okebase',
        category: 'Business Systems & ERP',
        domainBadge: 'Multi-Entity ERP & Operations Ledger',
        summary: 'Multi-organization, multi-branch ERP with strict PostgreSQL row-level isolation, runtime custom schemas, and sub-50ms consolidated ledger queries.',
        image: '/images/work/okebase.webp',
        alt: 'Okebase multi-entity ERP architecture schematic',
      },
      {
        slug: 'voxflow',
        name: 'VoxFlow',
        category: 'Applied AI & Voice',
        domainBadge: 'Autonomous Voice & Lead Dispatch Engine',
        summary: '24/7 inbound AI call center and <45s outbound speed-to-lead voice engine that qualifies intent, locks live calendar slots, and syncs the CRM.',
        image: '/images/work/voxflow.webp',
        alt: 'VoxFlow autonomous voice and lead dispatch schematic',
      },
      {
        slug: 'advantage-ai',
        name: 'AdVantage',
        category: 'Omnichannel Automation',
        domainBadge: 'Omnichannel AI Sales & Campaign Engine',
        summary: 'Unifies Facebook Messenger, WhatsApp Business, and Instagram DMs with a catalog-grounded AI sales closer and guardrailed Meta ad campaign planner.',
        image: '/images/work/advantage-ai.webp',
        alt: 'AdVantage omnichannel AI sales and campaign architecture schematic',
      },
    ],
    viewAll: { label: 'Explore all 8 engineering case studies', href: '/work' },
  },
  plan: {
    eyebrow: 'Engagement Ladder',
    title: 'A structured, low-risk engagement model.',
    steps: [
      {
        num: '01',
        name: 'Diagnostic & Systems Review',
        time: 'Stage 01 · Scope & Architecture',
        scope: 'Complimentary for qualified B2B operators',
        body: 'We audit one bottleneck workflow, existing codebase, or stalled AI pilot and deliver a written technical brief: workflow map, 3 quick wins, target architecture, and commercial quote.',
        href: '/audit',
        cta: 'Request free review',
      },
      {
        num: '02',
        name: 'Scoped Project & Milestone Delivery',
        time: 'Stage 02 · Scoped by Contract',
        scope: 'Milestone-gated contract',
        body: 'We engineer and deploy your custom platform, ERP module, AI system, or API integration with schedules, deliverables, and licensing structured around your project size and contract.',
        href: '/book',
        cta: 'Book discovery call',
      },
      {
        num: '03',
        name: 'Ongoing Maintenance, Retainers & Pods',
        time: 'Stage 03 · Retainer & SLA',
        scope: 'Dedicated senior engineers',
        body: 'Continuous product maintenance, third-party API management, SLA monitoring, model tuning, or an embedded pod of senior engineers dedicated to your roadmap.',
        href: '/how-we-work',
        cta: 'See how we work',
      },
    ],
  },
  faq: {
    eyebrow: 'Common Questions',
    title: 'Frequently asked questions.',
    items: [
      {
        q: 'How do you handle US, UK, European, or APAC time zone collaboration?',
        a: 'We maintain a fixed 4-hour daily live overlap window with your business hours for standups, pairing, and architecture reviews. Outside that window, async progress continues with tested pull requests and structured milestone reports.',
      },
      {
        q: 'How do codebase ownership, licensing, and exclusivity work?',
        a: 'Your company data and proprietary business rules are always 100% yours. For the software itself, we offer flexible commercial models that adjust pricing to your needs: cost-effective licensed deployments built on our core engines, custom builds with shared core libraries, or full source-code handover and category exclusivity under a dedicated enterprise agreement.',
      },
      {
        q: 'How do you determine project timelines and milestones?',
        a: 'We never force arbitrary calendar promises before understanding your system. Timelines, sprint checkpoints, and milestone gates are defined during scoping based on project complexity, integration dependencies, and the contract structure we agree on.',
      },
      {
        q: 'Can you maintain our existing software product or build API integrations?',
        a: 'Yes. We regularly step into existing web, mobile, and backend repositories to handle ongoing maintenance, fix performance bottlenecks, modernize legacy modules, and engineer resilient two-way API integrations.',
      },
      {
        q: 'How are projects structured and quoted?',
        a: 'Every project is quoted against clear, verifiable milestones and your chosen licensing or ownership model before engineering begins—eliminating open-ended billing surprises.',
      },
    ],
    moreLink: { label: 'View all questions & commercial policies', href: '/faq' },
  },
  closing: {
    title: 'Tell us about the system your operations need.',
    lede: 'Book a 30-minute discovery call with a senior engineer, or request a free written review of one workflow—and leave with a clear technical plan either way.',
    primary: { label: 'Book a 30-minute call', href: '/book' },
    secondary: { label: 'Request free review', href: '/audit' },
  },
};

export const audit = {
  eyebrow: 'Free Systems Review',
  title: 'Get a written engineering review of one workflow or system.',
  lede: 'Tell us which manual process, spreadsheet bottleneck, existing codebase, or stalled AI pilot is costing your team hours. We study it and send a concise 2–4 page written review with 3 quick wins and a realistic build estimate—free for qualified B2B companies.',
  looksAt: [
    'Where staff hours, margin, and handoffs leak in the current workflow or codebase',
    'What to automate, what to buy off-the-shelf, and what is worth custom engineering',
    'Hidden production risks: data quality, API limits, security, and ongoing AI/cloud cost',
  ],
  receive: [
    'A clear 2–4 page written engineering brief (PDF / shared doc) you keep',
    'Three prioritized quick wins your team can act on immediately',
    'A recommended target architecture plus a milestone and commercial options estimate',
  ],
  timing: 'Process: optional 30-minute discovery walkthrough, followed by your written engineering review scoped to your system.',
  qualify: 'Built for founder-led and growing B2B companies (5 to 250 staff) with an active operational or software bottleneck.',
  sampleDeliverable: {
    badge: 'Sample Deliverable Structure',
    title: 'What your written review looks like',
    sections: [
      {
        num: '01',
        heading: 'Current Workflow & Bottleneck Map',
        detail: 'Step-by-step trace of where manual re-keying, API failures, approval delays, or data mismatches occur.',
      },
      {
        num: '02',
        heading: 'Build, Integrate, or Buy Verdict',
        detail: 'Honest recommendation on whether an off-the-shelf tool, an API integration, or a licensed Vector Dynamic core module solves the need faster.',
      },
      {
        num: '03',
        heading: 'Three Immediate Quick Wins',
        detail: 'High-impact fixes you can apply right away—whether you hire Vector Dynamic or implement them internally.',
      },
      {
        num: '04',
        heading: 'Target Architecture & Commercial Options',
        detail: 'System diagram, milestone breakdown, and pricing options across licensed deployment, custom build, or full source handover.',
      },
    ],
  },
};
