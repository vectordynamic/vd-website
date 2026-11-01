// All homepage copy lives here. Plain words, no invented numbers, no client claims.
export const home = {
  hero: {
    eyebrow: 'Custom software · ERP · AI · Automation',
    title: 'The software and AI your business runs on. Built to scale. Kept running.',
    lede: 'Vector Dynamic is a senior engineering team. We build custom platforms, ERP and business systems, AI and automation for growing B2B companies, with the code in your repository from day one.',
    primary: 'Book a 30-minute systems review',
    secondary: { label: 'See how we work', href: '/#process' },
    facts: [
      'Code in your repository from day one',
      'You own all code and IP',
      'Fixed-price build sprints',
      'Weekly demo and written update',
    ],
  },
  problem: {
    title: 'Most software projects stall between the demo and the real workflow.',
    body: [
      'Gartner expects over 40% of agentic AI projects to be canceled by the end of 2027, citing rising costs and unclear business value. MIT researchers found that about 95% of enterprise generative AI pilots showed no measurable profit-and-loss impact within six months.',
      'ERP rollouts and custom platforms fail the same way: the build gets signed off, then meets real data, real users and real load. We plan for that moment from the first week.',
    ],
    sources: [
      { label: 'Gartner forecast, June 2025', href: 'https://www.thestar.com.my/tech/tech-news/2025/06/25/over-40-of-agentic-ai-projects-will-be-scrapped-by-2027-gartner-says' },
      { label: 'MIT NANDA, “The GenAI Divide”', href: 'https://tiaton-web.pages.dev/blog/2026-02-22-why-95-percent-of-enterprise-ai-pilots-fail' },
    ],
  },
  practices: [
    {
      id: 'custom-software',
      title: 'Custom Software and Platforms',
      summary: 'Web platforms, SaaS products, internal tools and mobile apps, designed around how your team works.',
      covers: ['Web platforms and SaaS', 'Internal tools and dashboards', 'Mobile apps', 'APIs and microservices', 'Legacy modernization'],
      trigger: 'Off-the-shelf tools don’t fit how we work.',
    },
    {
      id: 'erp',
      title: 'ERP and Business Systems',
      summary: 'Custom ERP, CRM, HR, inventory and finance modules, or extensions to the ERP you already run.',
      covers: ['Custom ERP and CRM', 'Inventory, sales and finance', 'HR and payroll modules', 'Odoo and NetSuite extensions', 'Data migration'],
      trigger: 'We run the business on ten spreadsheets and three logins.',
      note: 'We’ll tell you when not to build custom.',
    },
    {
      id: 'ai',
      title: 'AI and Machine Learning',
      summary: 'LLM applications, knowledge search, computer vision and predictive models that run in production, not only in a demo.',
      covers: ['LLM applications and RAG', 'Computer vision', 'Predictive models', 'ML pipelines that scale', 'Evaluation and monitoring'],
      trigger: 'Our AI pilot never made it into the real workflow.',
    },
    {
      id: 'automation',
      title: 'Automation and Integration',
      summary: 'Workflow automation, AI agents and integrations that take repetitive work off your team.',
      covers: ['Workflow automation', 'AI agents and assistants', 'Document processing', 'System-to-system integration', 'Automated reporting'],
      trigger: 'Smart people spend hours copying data between systems.',
    },
  ],
  portfolio: {
    title: 'Built by Vector Dynamic',
    intro: 'Our own products, designed and run by the same team that would build yours.',
    items: [
      { name: 'SyncDaily', practice: 'ai', status: 'Live', summary: 'AI news pipeline: ingests sources, curates and summarizes with AI, publishes articles and feeds, and serves search-engine sitemaps.' },
      { name: 'Okebase', practice: 'erp', status: 'In development', summary: 'Business operating system: sales, inventory, suppliers, employees and real-time profit and loss in one place.' },
      { name: 'Opsera', practice: 'custom-software', status: 'In development', summary: 'Project and team orchestration with task assignment, deadline alerts, performance tracking and Slack, GitHub and Jira sync.' },
      { name: 'AdVantage AI', practice: 'automation', status: 'In development', summary: 'Marketing automation that plans content, launches Meta campaigns and tunes them against live ROI data.' },
      { name: 'AI Receptionist', practice: 'automation', status: 'In development', summary: 'Voice agent that answers calls, books appointments, routes callers and syncs with the CRM.' },
    ],
  },
  ladder: {
    title: 'How you start',
    steps: [
      { n: '01', name: 'Systems Review', time: '1–2 weeks', price: 'Free for qualified teams', body: 'We study one workflow or system and send a written review: where time and money leak, what to build or fix, and a rough estimate.', cta: { label: 'Request a review', href: '/audit' } },
      { n: '02', name: 'Build Sprint', time: '4–8 weeks', price: 'Fixed price, from $15,000', body: 'One working system, module or automation in production, with documentation and hand-over. Billed by milestone.' },
      { n: '03', name: 'Run and Grow', time: 'Monthly, 3-month minimum', price: 'Managed from $2,000 a month · Dedicated pods priced per engineer', body: 'We monitor, fix and improve what we built, or add a dedicated team of 2 to 5 engineers to your roadmap.' },
    ],
  },
  process: {
    title: 'How an engagement runs',
    steps: [
      { name: 'Discover', time: 'Week 1', out: 'Written scope, architecture sketch and a fixed quote' },
      { name: 'Build', time: 'Weeks 2–6', out: 'Weekly demo on real data and a written weekly update' },
      { name: 'Launch', time: 'Final week', out: 'Production release, monitoring, runbook and hand-over session' },
      { name: 'Run', time: 'Ongoing', out: 'Monthly report, fixes and improvements' },
    ],
  },
  engineering: {
    title: 'Built to scale from the first commit.',
    points: [
      'Architecture sized for your next three years, not the demo',
      'Automated tests and CI/CD on every project',
      'Monitoring and alerts before launch day',
      'Load testing for systems that must scale',
      'Documentation and a runbook your team can use',
    ],
  },
  commitments: {
    title: 'What we commit to',
    items: [
      'Fixed price, billed by milestone',
      'You own all code and IP once paid',
      'Code in your repository from day one',
      'Mutual NDA on request',
      'A weekly demo and a written update',
      'No lock-in: full documentation and hand-over',
    ],
  },
  fit: {
    title: 'Who we work best with',
    good: ['B2B companies with 20 to 300 people', 'Teams with a real operational problem and a budget to fix it', 'Founders and operators who want a long-term engineering partner'],
    bad: ['Projects under $15,000', 'Teams shopping for the lowest hourly rate', 'Ideas with no decision-maker involved'],
  },
  faq: {
    title: 'Questions buyers ask us',
    items: [
      { q: 'Where is your team, and how do we work across time zones?', a: 'Our engineering team is based in Dhaka, Bangladesh. We agree a daily overlap window with your working hours, hold every call inside it, and send a written update every week, so nothing depends on being awake at the same time.' },
      { q: 'Who owns the code and the data?', a: 'You do. Code lives in your repository from the first day, systems run in cloud accounts you own, and all intellectual property transfers to you on payment.' },
      { q: 'How do you protect our systems and data?', a: 'Access is limited by role and removed at hand-over, credentials stay in your own secrets manager, and we sign a mutual NDA on request.' },
      { q: 'Will we be one of your first clients?', a: 'We are a young company, and we say so. That is why engagements use fixed prices, milestone billing and full code ownership: your risk stays small and visible at every step.' },
      { q: 'Can you work with our existing ERP, CRM or codebase?', a: 'Yes. Most projects extend or connect systems you already run. When building custom is not worth it, we say so in the review.' },
      { q: 'What does a project cost?', a: 'Build sprints start at $15,000 at a fixed price. Ongoing support starts at $2,000 a month. The Systems Review is free for qualified teams.' },
    ],
  },
  closing: {
    title: 'Tell us about the system you need.',
    body: 'Book a 30-minute call and leave with a clear next step, whether or not we work together.',
  },
};

export const audit = {
  title: 'Get a written review of one system or workflow.',
  lede: 'Tell us which process, system or AI project is costing you time. We study it and send a short written review with what to fix, what to build and a rough estimate. Free for qualified B2B teams.',
  looksAt: ['Where time and money leak in the workflow', 'What to automate, fix, replace or leave alone', 'Risks in the current system: data, security and scale'],
  receive: ['A 2 to 4 page written review', 'Three prioritized quick wins', 'A rough build estimate and timeline'],
  timing: 'A 30-minute call, then the written review within 1 to 2 weeks.',
  qualify: 'Best for B2B companies with 20 to 300 people and a real operational problem.',
};
