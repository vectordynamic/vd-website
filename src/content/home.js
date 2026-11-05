// All homepage and /audit copy lives here. Plain words, US spelling, no invented numbers, no fake client claims.
export const home = {
  hero: {
    eyebrow: 'Senior Engineering Consultancy',
    title: 'The software and AI your business runs on.',
    lede: 'We engineer custom platforms, business systems, and production AI for growing B2B companies—with 100% code ownership in your repository.',
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
      num: '01',
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
      href: '/services/custom-software',
    },
    {
      id: 'erp',
      num: '02',
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
      href: '/services/automation',
    },
  ],
  guide: {
    eyebrow: 'Why Vector Dynamic',
    title: 'Senior engineers who ship directly into your stack.',
    points: [
      {
        title: 'SyncDaily live in production',
        body: 'Our unattended ingestion and AI curation pipeline runs 24/7 in production—proving our architecture, schemas, and cost guardrails under continuous load.',
      },
      {
        title: 'Client repository week one',
        body: 'Every schema, test suite, and pull request lives in your GitHub or GitLab organization from day one. You own 100% of custom IP upon milestone payment.',
      },
      {
        title: 'Direct senior engineers',
        body: 'You work directly with the senior builders designing and writing your software. No junior handoffs, no middle managers, and weekly live demos.',
      },
    ],
  },
  featuredWork: {
    eyebrow: 'Production Proof',
    title: 'Featured production systems.',
    lede: 'Real architectures engineered and operated with our production standards.',
    items: [
      {
        slug: 'syncdaily',
        name: 'SyncDaily',
        category: 'AI & Data Pipeline',
        status: 'Live in production',
        summary: 'Autonomous ingestion, LLM curation, and edge-cached SEO publishing pipeline running continuously in production.',
        image: '/images/work/syncdaily.webp',
        alt: 'SyncDaily pipeline architecture schematic',
      },
      {
        slug: 'okebase',
        name: 'Okebase',
        category: 'Business Systems & ERP',
        status: 'Internal platform',
        summary: 'Modular business operating system unifying sales orders, warehouse inventory, suppliers, and daily profit-and-loss.',
        image: '/images/work/okebase.webp',
        alt: 'Okebase modular ERP architecture schematic',
      },
      {
        slug: 'ai-receptionist',
        name: 'AI Receptionist',
        category: 'Voice & Automation',
        status: 'Pilot ready',
        summary: 'Low-latency voice intake assistant that qualifies callers, books calendar slots, and writes structured CRM notes.',
        image: '/images/work/ai-receptionist.webp',
        alt: 'AI Receptionist voice intake architecture schematic',
      },
    ],
    viewAll: { label: 'Explore all 5 case studies', href: '/work' },
  },
  plan: {
    eyebrow: 'Engagement Ladder',
    title: 'A structured, low-risk engagement model.',
    steps: [
      {
        num: '01',
        name: 'Diagnostic & Systems Review',
        time: '1–2 weeks',
        scope: 'Complimentary for qualified B2B operators',
        body: 'We audit one bottleneck workflow or stalled AI pilot and deliver a 2–4 page written technical brief: workflow map, 3 quick wins, target architecture, and fixed quote.',
        href: '/audit',
        cta: 'Request free review',
      },
      {
        num: '02',
        name: 'Milestone Build Sprint',
        time: '4–8 weeks typical',
        scope: 'Fixed-price milestone contract',
        body: 'One production system, ERP module, or AI workflow shipped into your cloud and Git repository, with automated test suites, CI/CD, and runbooks.',
        href: '/book',
        cta: 'Book discovery call',
      },
      {
        num: '03',
        name: 'Dedicated Pods & Managed Ops',
        time: 'Monthly engagement',
        scope: 'Dedicated senior engineers',
        body: 'Ongoing SLA monitoring, uptime alerting, model tuning, and spend guardrails—or an embedded pod of senior engineers dedicated to your roadmap.',
        href: '/how-we-work',
        cta: 'See how pods work',
      },
    ],
  },
  faq: {
    eyebrow: 'Common Questions',
    title: 'Frequently asked questions.',
    items: [
      {
        q: 'How do you handle US, UK, European, or APAC time zone collaboration?',
        a: 'We maintain a fixed 4-hour daily live overlap window with your business hours for standups, pairing, and architecture reviews. Outside that window, async progress continues with tested pull requests and a written Friday status report.',
      },
      {
        q: 'Who owns the source code and intellectual property?',
        a: 'You do. 100% of custom code, database schemas, prompts, and IP transfer to your company upon milestone payment, committed directly to your Git repository and cloud accounts.',
      },
      {
        q: 'How do you protect company data and credentials?',
        a: 'We sign a mutual NDA before accessing internal systems. Secrets stay in your own cloud vault, and all AI features connect to commercial APIs that contractually prohibit training on customer data.',
      },
      {
        q: 'Will we deal with salespeople or actual engineers?',
        a: 'You speak directly with the senior engineers designing and building your software—from the initial 30-minute discovery call through weekly live demos and production launch.',
      },
      {
        q: 'How are projects structured and quoted?',
        a: 'Every build sprint is quoted at a fixed price based on verified milestones before code begins—zero open-ended hourly surprises. The initial Systems Review is complimentary for qualified B2B teams.',
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
