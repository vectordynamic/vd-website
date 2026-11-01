// All homepage copy lives here. Plain words, no invented numbers, no client claims.
export const home = {
  hero: {
    eyebrow: 'Custom software · Business systems · AI integration · Automation',
    diagram: [
      { n: '01', label: 'Software', sub: 'Custom platforms, apps and APIs' },
      { n: '02', label: 'Business Systems', sub: 'Your operations in one place' },
      { n: '03', label: 'AI Integration', sub: 'Assistants, agents, knowledge bases' },
      { n: '04', label: 'Automation', sub: 'Repetitive work, handled' },
    ],
    title: 'The software and AI your business runs on. Built to scale. Kept running.',
    lede: 'Vector Dynamic is a senior engineering team. We build custom software, business systems, AI-powered products and automation for growing B2B companies, and we stay on to keep them running.',
    primary: 'Book a 30-minute systems review',
    secondary: { label: 'See how we work', href: '/#process' },
    facts: [
      'Fixed-price builds, billed by milestone',
      'Ownership terms agreed upfront',
      'Weekly demo and written update',
      'Direct line to the engineers building it',
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
      summary: 'Web platforms, SaaS products, internal tools and mobile apps, plus the APIs and integrations that connect them to the rest of your stack.',
      covers: ['Web platforms and SaaS', 'Internal tools and dashboards', 'Mobile apps', 'API development and integrations', 'Microservices and cloud architecture', 'Legacy modernization'],
      trigger: 'Off-the-shelf tools don’t fit how we work.',
    },
    {
      id: 'erp',
      title: 'Business Systems and ERP',
      summary: 'Replace spreadsheets and disconnected tools with one system for sales, inventory, finance and people. We build custom ERP, CRM and management systems around how you operate.',
      covers: ['Custom ERP and management systems', 'CRM and sales pipelines', 'Inventory, sales and finance', 'HR and payroll modules', 'Data migration', 'Odoo, when it is the better fit'],
      trigger: 'We run the business on ten spreadsheets and three logins.',
      note: 'We’ll tell you when not to build custom.',
    },
    {
      id: 'ai',
      title: 'AI-Powered Software and Agents',
      summary: 'We build software with AI built in: assistants, agents and knowledge bases powered by OpenAI, Claude, Gemini and open models, connected to your data and your tools.',
      covers: ['AI features inside your product', 'Assistants and AI agents', 'Knowledge bases and document search', 'Chatbots and voice assistants', 'Computer vision and predictive models', 'Monitoring, evaluation and cost control'],
      trigger: 'Our AI pilot never made it into the real workflow.',
    },
    {
      id: 'automation',
      title: 'Workflow Automation and Integration',
      summary: 'Workflow automation, AI agents and integrations that take repetitive work off your team.',
      covers: ['Workflow automation', 'AI agents and assistants', 'Document processing', 'System-to-system integration', 'Automated reporting'],
      trigger: 'Smart people spend hours copying data between systems.',
    },
  ],
  aiBand: {
    eyebrow: 'AI inside',
    title: 'AI is built into what we build.',
    lede: 'Whatever the system, we can wire in the models and data that make it smarter, so AI is part of the product and not a separate project.',
    points: [
      { name: 'Models', text: 'We integrate OpenAI, Anthropic Claude, Google Gemini and open-source models, and choose between them on quality, cost and your data-privacy needs.' },
      { name: 'Knowledge', text: 'Knowledge bases and document search that let the AI answer from your own data, with sources you can check.' },
      { name: 'Agents', text: 'Assistants and agents that use tools, call your APIs and finish tasks, with monitoring and cost limits around them.' },
    ],
    tools: ['OpenAI', 'Anthropic Claude', 'Google Gemini', 'Google Cloud AI', 'Open-source models', 'Vector databases', 'Agent frameworks'],
  },
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
      { n: '01', name: 'Systems Review', time: 'About 1–2 weeks', price: 'Free for qualified teams', body: 'We study one workflow or system and send a written review: where time and money leak, what to build or fix, and a rough estimate.', cta: { label: 'Request a review', href: '/audit' } },
      { n: '02', name: 'Fixed-Price Build', time: 'Scoped per project', price: 'Fixed price, set after the review', body: 'One working system, module or automation in production, with documentation and hand-over. Billed by milestone.' },
      { n: '03', name: 'Run and Grow', time: 'Monthly plan', price: 'Sized to the system you run', body: 'We monitor, fix and improve what we built, or add a dedicated team of engineers to your roadmap.' },
    ],
  },
  process: {
    title: 'How an engagement runs',
    note: 'Every project is different. Timelines are agreed in the proposal, and you see progress every week.',
    steps: [
      { name: 'Discover', out: 'We map the problem, the users and the systems involved. You get a written scope, an architecture sketch and a fixed quote.' },
      { name: 'Design', out: 'Workflows, screens and the data model are agreed with you before any code is written.' },
      { name: 'Build', out: 'Weekly demos on real data and a written update every week, so nothing is a surprise.' },
      { name: 'Launch', out: 'Production release with monitoring, a runbook and a hand-over session for your team.' },
      { name: 'Maintain', out: 'Monitoring, fixes, updates and improvements on a monthly plan, for as long as you need us.' },
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
      'Ownership terms agreed in writing before work starts',
      'Your data stays yours',
      'Mutual NDA on request',
      'A weekly demo and a written update',
      'Full documentation and a clear hand-over plan',
    ],
  },
  fit: {
    title: 'Who we work best with',
    good: ['Founder-led and growing B2B companies with 5 to 50 people', 'Teams with a real operational problem and a budget to fix it', 'Owners and operators who want a long-term engineering partner'],
    bad: ['Teams shopping only for the lowest hourly rate', 'Ideas with no decision-maker involved', 'Projects that need a final price before any discussion'],
  },
  faq: {
    title: 'Questions buyers ask us',
    items: [
      { q: 'How do we work across time zones?', a: 'We agree a daily overlap window with your working hours, hold every call inside it, and send a written update every week, so nothing depends on being awake at the same time.' },
      { q: 'Who owns the code and the data?', a: 'Your data is always yours. Code ownership is agreed in the proposal before work starts: either a full transfer to you, or a license to use and run the system while we keep the source. We explain the trade-off on the first call, because a full transfer changes the price.' },
      { q: 'Which AI models and tools do you work with?', a: 'OpenAI, Anthropic Claude and Google Gemini, plus open-source models, with knowledge bases and agent workflows around them. We choose by quality, cost and your data-privacy needs.' },
      { q: 'How do you protect our systems and data?', a: 'Access is limited by role and removed at hand-over, credentials stay in your own secrets manager, and we sign a mutual NDA on request.' },
      { q: 'Will we be one of your first clients?', a: 'We are a young company, and we say so. That is why engagements use fixed prices, milestone billing and written terms: your risk stays small and visible at every step.' },
      { q: 'Can you work with our existing ERP, CRM or codebase?', a: 'Yes. Most projects extend or connect systems you already run, through their APIs. When building custom is not worth it, we say so in the review.' },
      { q: 'What does a project cost?', a: 'Every project is scoped and quoted at a fixed price after a short discovery, so you know the cost before work starts. Ongoing support is a monthly plan sized to the system. The Systems Review is free for qualified teams.' },
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
  qualify: 'Best for founder-led B2B companies with 5 to 50 people and a real operational problem.',
};
