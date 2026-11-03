// All homepage and /audit copy lives here. Plain words, US spelling, no invented numbers, no fake client claims.
export const home = {
  hero: {
    eyebrow: 'Custom software · ERP & business systems · Applied AI · Automation',
    diagram: [
      { n: '01', label: 'Software', sub: 'Custom platforms, apps and APIs', href: '/services/custom-software' },
      { n: '02', label: 'Business Systems', sub: 'ERP, CRM and operations in one place', href: '/services/erp' },
      { n: '03', label: 'Applied AI', sub: 'Assistants, agents and knowledge search', href: '/services/ai' },
      { n: '04', label: 'Automation', sub: 'Repetitive manual work, handled', href: '/services/automation' },
    ],
    title: 'The software and AI your business runs on. Built to scale. Kept running.',
    lede: 'Vector Dynamic is a senior engineering team. We design, ship, and maintain custom platforms, ERP systems, AI-powered software, and workflow automation for growing B2B companies—with 100% custom code ownership in your repository.',
    primary: { label: 'Book a 30-minute discovery call', href: '/book' },
    secondary: { label: 'Or get a free written systems review', href: '/audit' },
    facts: [
      '100% custom code & IP ownership',
      'Fixed-price builds, billed by milestone',
      'Weekly live demo & written Friday report',
      'Direct line to the engineers building it',
    ],
  },
  problem: {
    title: 'Most software projects stall between the demo and the real workflow.',
    body: [
      'Gartner predicts over 40% of agentic AI projects will be canceled by the end of 2027 due to rising costs, unclear business value, and weak risk controls. Separate MIT NANDA research reported that roughly 95% of enterprise generative AI pilots showed no measurable profit-and-loss impact within six months.',
      'ERP rollouts and custom platforms fail for the exact same reason: a prototype gets signed off, then collides with messy data, busy staff, and real production load. We engineer for Tuesday afternoon reality from week one.',
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
      title: 'Custom Software and Platforms',
      summary: 'Web platforms, B2B SaaS products, internal operations tools, and mobile apps—plus the APIs that connect them cleanly to the rest of your stack.',
      covers: [
        'Web platforms and multi-tenant SaaS',
        'Internal tools and operational dashboards',
        'iOS and Android mobile apps',
        'API development and third-party integrations',
        'Cloud architecture and service boundaries',
        'Step-by-step legacy modernization',
      ],
      trigger: 'Off-the-shelf tools force our team into clumsy workarounds.',
    },
    {
      id: 'erp',
      title: 'Business Systems and ERP',
      summary: 'Replace disconnected spreadsheets and fragile logins with one dependable system for orders, inventory, finance, and staff.',
      covers: [
        'Custom ERP and operations platforms',
        'CRM, quoting and order pipelines',
        'Inventory, purchasing and invoicing',
        'HR, attendance and payroll workflows',
        'Clean data migration from spreadsheets',
        'Odoo implementation when off-the-shelf fits better',
      ],
      trigger: 'We run the company across ten spreadsheets and three logins that never agree.',
      note: 'We tell you upfront when off-the-shelf beats building custom.',
    },
    {
      id: 'ai',
      title: 'AI-Powered Software and Agents',
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
    },
    {
      id: 'automation',
      title: 'Workflow Automation and Integration',
      summary: 'End-to-end automation and API integrations that remove repetitive data entry, manual approvals, and hand-built weekly reports.',
      covers: [
        'Order, onboarding and approval workflows',
        'Invoice, form and email extraction',
        'Two-way CRM, ERP and accounting sync',
        'Automated executive and client reporting',
        'Alerting, retry queues and audit logs',
      ],
      trigger: 'Skilled people spend hours re-keying the same data across tools.',
    },
  ],
  aiBand: {
    eyebrow: 'Applied AI architecture',
    title: 'AI wired into production systems—not bolted on as a toy.',
    lede: 'Whether we build a custom platform, an ERP module, or an operations pipeline, we connect the right models to your real data with strict evaluation and cost controls.',
    points: [
      {
        name: 'Model-agnostic routing',
        text: 'We integrate OpenAI, Anthropic Claude, Google Gemini, and open-weight models—selecting per task for accuracy, latency, cost, and data-residency rules.',
      },
      {
        name: 'Grounded in your data',
        text: 'Retrieval pipelines and structured tool calls answer strictly from your permissions-checked records and cite every source document.',
      },
      {
        name: 'Bounded agents',
        text: 'Agents execute defined steps against your APIs with spending ceilings, audit logs, and human sign-off where mistakes carry financial risk.',
      },
    ],
    tools: ['OpenAI', 'Anthropic Claude', 'Google Gemini', 'Open-weight LLMs', 'PostgreSQL & pgvector', 'Structured Tool Calling', 'Eval & Cost Guardrails'],
  },
  portfolio: {
    title: 'Built by Vector Dynamic',
    intro: 'Systems engineered and operated by our own team—showing how we structure data pipelines, business logic, and production monitoring.',
    items: [
      {
        slug: 'syncdaily',
        name: 'SyncDaily',
        practice: 'ai',
        status: 'Live in production',
        isLive: true,
        summary: 'Automated ingestion, LLM curation, editorial publishing, and structured SEO delivery pipeline running continuously in production.',
      },
      {
        slug: 'okebase',
        name: 'Okebase',
        practice: 'erp',
        status: 'Internal platform · Case study',
        isLive: false,
        summary: 'Modular business operating system unifying sales orders, multi-warehouse inventory, supplier ledgers, payroll inputs, and live profit-and-loss.',
      },
      {
        slug: 'opsera',
        name: 'Opsera',
        practice: 'custom-software',
        status: 'Internal platform · Case study',
        isLive: false,
        summary: 'Multi-workspace delivery orchestration platform with milestone tracking, workload alerts, and bi-directional Slack, GitHub, and Jira sync.',
      },
      {
        slug: 'advantage-ai',
        name: 'AdVantage AI',
        practice: 'automation',
        status: 'Internal platform · Case study',
        isLive: false,
        summary: 'Campaign operations engine that generates ad variants, dispatches Meta campaigns via API, and reallocates spend against live ROAS thresholds.',
      },
      {
        slug: 'ai-receptionist',
        name: 'AI Receptionist',
        practice: 'automation',
        status: 'Pilot ready · Case study',
        isLive: false,
        summary: 'Low-latency voice intake agent that answers inbound calls, qualifies intent, books calendar slots, and logs structured notes into CRM.',
      },
    ],
  },
  ladder: {
    title: 'Three clear ways to start',
    intro: 'Every engagement follows the same low-risk ladder—so you validate our thinking before committing to a build.',
    steps: [
      {
        n: '01',
        name: 'Systems Review',
        time: '1–2 weeks',
        price: 'Free for qualified B2B teams',
        body: 'We audit one workflow, spreadsheet bottleneck, or stalled AI pilot and deliver a 2–4 page written review: where hours leak, 3 quick wins, and a rough build estimate.',
        cta: { label: 'Request a free written review', href: '/audit' },
      },
      {
        n: '02',
        name: 'Fixed-Price Build Sprint',
        time: '4–8 weeks typical',
        price: 'Focused automations from $5k · Core systems from $15k',
        body: 'One production system, ERP module, or AI workflow shipped into your cloud and repository, with automated tests, monitoring, and team handover. Billed by milestone.',
        cta: { label: 'Book a 30-minute discovery call', href: '/book' },
      },
      {
        n: '03',
        name: 'Run, Maintain & Grow',
        time: 'Monthly plan',
        price: 'Managed ops from $1,500/mo · Dedicated pods',
        body: 'We monitor uptime, ship monthly improvements, and keep AI costs in check—or embed a dedicated pod of 2–4 senior engineers directly into your roadmap.',
        cta: { label: 'See how pods & retainers work', href: '/how-we-work#pods' },
      },
    ],
  },
  process: {
    title: 'How an engagement runs',
    note: 'No black-box months. Scope and price are locked before code begins, and you test working software on real data every single week.',
    steps: [
      { name: 'Discover', out: 'We trace the real workflow with your team. You receive a written scope, architecture diagram, and fixed milestone quote.' },
      { name: 'Design', out: 'Data models, permissions, API contracts, and user screens are reviewed and signed off before implementation.' },
      { name: 'Build', out: 'Code lands in your repository from week one, paired with a live weekly demo on real data and a written Friday status report.' },
      { name: 'Launch', out: 'Production rollout with CI/CD, error alerting, cost limits, an operational runbook, and a recorded handover session.' },
      { name: 'Maintain', out: 'Ongoing monitoring, SLA bug fixes, model updates, and roadmap iterations on a predictable monthly plan.' },
    ],
  },
  engineering: {
    title: 'Built to scale from the first commit.',
    points: [
      'Architecture sized for your next three years of volume, not just launch week',
      'Automated test suites and CI/CD pipelines on every repository',
      'Uptime monitoring, structured logs, and failure alerts wired before go-live',
      'Load testing and LLM token-budget caps on high-throughput paths',
      'Plain-English runbooks and architecture diagrams your own engineers can maintain',
    ],
  },
  commitments: {
    title: 'Six commitments in every contract',
    items: [
      'Fixed price per scope, billed on verified milestones',
      '100% ownership of custom code and IP upon milestone payment',
      'Code in your Git repository and cloud account from week one',
      'Mutual NDA signed before you share internal data',
      'Live weekly demo plus a written Friday engineering update',
      'Zero vendor lock-in: full documentation, runbook, and clean handover',
    ],
  },
  fit: {
    title: 'Who we work best with',
    good: [
      'Founder-led and mid-market B2B companies (5 to 250 people) in the US, UK, Europe, Gulf, and APAC',
      'Operations-heavy teams losing real hours or margin to spreadsheets, disconnected tools, or manual handoffs',
      'Design, marketing, and software agencies looking for a reliable white-label or referral engineering partner',
    ],
    bad: [
      'Buyers shopping strictly for the lowest hourly freelancer bid',
      'Open-ended ideas with no operational owner or decision-maker involved',
      'Teams expecting unverified AI magic without guardrails or clean data',
    ],
  },
  faq: {
    title: 'Questions foreign buyers ask us first',
    items: [
      {
        q: 'How do we collaborate across US, UK, European, or APAC time zones?',
        a: 'We lock a fixed 4-hour daily live overlap window with your business hours for standups, architecture reviews, and pairing. Outside that window, asynchronous progress continues so you wake up to tested pull requests—plus a structured written engineering report and live demo every Friday.',
      },
      {
        q: 'Who owns the source code, intellectual property, and data?',
        a: 'You do. Your company data is always 100% yours, and 100% of the custom software and business logic we write for your project transfers to you upon milestone payment—committed directly in your Git repository and cloud accounts. If we optionally include pre-built Vector Dynamic internal modules to cut your build time and cost, you receive a perpetual, royalty-free commercial license with full source code access, agreed in writing upfront.',
      },
      {
        q: 'How do you protect our company data and credentials?',
        a: 'We sign a mutual NDA before reviewing internal systems. Access follows least-privilege roles, secrets stay inside your own cloud vault, AI integrations use business tiers that exclude training on customer data, and temporary credentials are revoked at handover.',
      },
      {
        q: 'Will we deal with account managers or the actual engineers?',
        a: 'You speak directly with the senior engineers designing and writing your system—from the first 30-minute discovery call through production launch. There is no sales handoff to junior subcontractors.',
      },
      {
        q: 'Will we be one of your early clients?',
        a: 'We are a focused, young engineering company, and we state that plainly. That is exactly why we structure engagements around a free upfront Systems Review, fixed milestone pricing, code in your repository from week one, and weekly demos on real data—so your risk stays small and verifiable at every step.',
      },
      {
        q: 'Can you integrate with or extend our existing ERP, CRM, or legacy codebase?',
        a: 'Yes. Most engagements connect to or modernize software you already rely on—such as Shopify, HubSpot, Salesforce, QuickBooks, Xero, Odoo, custom PostgreSQL databases, or aging internal web apps. When an off-the-shelf tool solves the problem cheaper than custom code, we tell you in the review.',
      },
      {
        q: 'What does a typical project cost?',
        a: 'Every build is quoted at a fixed price after discovery so there are no hourly surprises. Focused workflow automations and integrations typically range from $5,000 to $12,000; custom web platforms, ERP modules, and production AI systems typically start at $15,000 and scale with scope. Ongoing managed operations start at $1,500/month, and the initial Systems Review is free for qualified B2B teams.',
      },
    ],
  },
  closing: {
    title: 'Tell us about the system your operations need.',
    body: 'Book a 30-minute discovery call with an engineer, or request a free written review of one workflow—and leave with a clear technical plan either way.',
  },
};

export const audit = {
  eyebrow: 'Free Systems Review',
  title: 'Get a written engineering review of one workflow or system.',
  lede: 'Tell us which manual process, spreadsheet bottleneck, legacy tool, or stalled AI pilot is costing your team hours. We study it and send a concise 2–4 page written review with 3 quick wins and a realistic build estimate—free for qualified B2B companies.',
  looksAt: [
    'Where staff hours, margin, and handoffs leak in the current workflow',
    'What to automate, what to buy off-the-shelf, and what is worth custom engineering',
    'Hidden production risks: data quality, API limits, security, and ongoing AI/cloud cost',
  ],
  receive: [
    'A clear 2–4 page written engineering brief (PDF / shared doc) you keep',
    'Three prioritized quick wins your team can act on immediately',
    'A recommended target architecture plus a fixed-price milestone estimate',
  ],
  timing: 'Turnaround: optional 30-minute walkthrough call, followed by your written review within 5–10 business days.',
  qualify: 'Built for founder-led and growing B2B companies (5 to 250 staff) with an active operational bottleneck.',
  sampleDeliverable: {
    badge: 'Sample Deliverable Structure',
    title: 'What your written review looks like',
    sections: [
      {
        num: '01',
        heading: 'Current Workflow & Cost Map',
        detail: 'Step-by-step trace of where manual re-keying, approval delays, or data mismatches occur—quantified in weekly team hours.',
      },
      {
        num: '02',
        heading: 'Build vs. Buy Verdict',
        detail: 'Honest recommendation on whether an off-the-shelf tool (e.g., Odoo, Zapier/Make, existing CRM) solves 80% of the need before writing custom code.',
      },
      {
        num: '03',
        heading: 'Three Immediate Quick Wins',
        detail: 'Low-effort fixes you can apply right away—whether you hire Vector Dynamic or implement them internally.',
      },
      {
        num: '04',
        heading: 'Target Architecture & Milestone Quote',
        detail: 'System diagram, milestone breakdown, timeline, and fixed-price range for a production build sprint.',
      },
    ],
  },
};
