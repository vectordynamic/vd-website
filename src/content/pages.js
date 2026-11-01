// Copy for the inner pages. Plain words, no invented numbers, no client claims, no location.
export const services = {
  intro: {
    eyebrow: 'Services',
    title: 'Four practice areas. One standard of engineering.',
    lede: 'Whatever the system, the way we build it is the same: small releases, real data, monitoring from day one, and a clean hand-over.',
  },
  standard: {
    title: 'The standard behind every project',
    items: [
      { name: 'Built to scale', text: 'Architecture sized for where your business is going, with load testing for systems that must grow.' },
      { name: 'Tested and monitored', text: 'Automated tests, CI/CD and alerting before launch day, so problems find us before they find you.' },
      { name: 'Documented', text: 'Runbooks, diagrams and a hand-over session, so the system is easy to run and to change.' },
      { name: 'Kept running', text: 'A monthly plan for monitoring, fixes and improvements, for as long as you want us.' },
    ],
  },
  details: {
    'custom-software': {
      headline: 'Software built around how your business actually works.',
      intro: 'Off-the-shelf tools make you work their way. We design and build web platforms, internal tools, mobile apps and the APIs that connect them, so the software fits the process and not the other way round.',
      signs: ['Your team works around the tool instead of with it', 'Data is copied by hand between systems', 'A legacy system slows down every change'],
      builds: [
        { name: 'Web platforms and SaaS', text: 'Customer portals, marketplaces and multi-tenant SaaS products designed to scale from the first release.' },
        { name: 'Internal tools and dashboards', text: 'Admin panels, reporting and operations tools that replace spreadsheets and email threads.' },
        { name: 'Mobile apps', text: 'iOS and Android apps for customers or staff, built to work with your back-end systems.' },
        { name: 'API development and integrations', text: 'Clean APIs for your own products and reliable integrations with payments, CRM, ERP, logistics and other third-party services.' },
        { name: 'Microservices and cloud architecture', text: 'Systems split along sensible boundaries and deployed on the cloud with automated pipelines.' },
        { name: 'Legacy modernization', text: 'Step-by-step migration of aging systems, without a risky big-bang rewrite.' },
      ],
      approach: [
        { name: 'Understand the workflow', text: 'We sit with the people who use the system and map what really happens, not only what the spec says.' },
        { name: 'Build in small releases', text: 'Working software every week, on real data, so problems surface early and cheaply.' },
        { name: 'Hand over cleanly', text: 'Tests, documentation and a runbook, so the system is easy to run and to change.' },
      ],
      faq: [
        { q: 'Do you build mobile apps as well as web platforms?', a: 'Yes. Native and cross-platform mobile apps are part of the same engagement, built against the same APIs as the web product.' },
        { q: 'Can you integrate with the tools we already use?', a: 'Yes. We build integrations through each tool’s API, such as CRM, accounting, payments, logistics and messaging, and test them against real data before launch.' },
      ],
      work: ['Opsera'],
    },
    erp: {
      headline: 'One system for sales, inventory, finance and people.',
      intro: 'When a business runs on spreadsheets and disconnected tools, every report is a manual job and every number is questioned. We build custom ERP, CRM and management systems around how you operate, and we tell you honestly when an existing platform would serve you better.',
      signs: ['Reports take days to assemble and still disagree', 'Inventory, sales and accounts live in different places', 'Your current system needs constant workarounds'],
      builds: [
        { name: 'Custom ERP and management systems', text: 'The modules you need, in one system, shaped around your processes.' },
        { name: 'CRM and sales pipelines', text: 'Leads, quotes, orders and follow-ups tracked in one place.' },
        { name: 'Inventory, sales and finance', text: 'Stock, purchasing, invoicing and cash views that agree with each other.' },
        { name: 'HR and payroll modules', text: 'Employee records, attendance, leave and payroll inputs without the spreadsheet.' },
        { name: 'Reporting and dashboards', text: 'Live profit and loss, stock and cash views for owners and managers.' },
        { name: 'Data migration', text: 'Clean, map and import data from spreadsheets and older systems, and run both side by side until you trust the new one.' },
        { name: 'Odoo, when it is the better fit', text: 'Where an established platform such as Odoo suits you better than a custom build, we set it up and tailor it to your process.' },
      ],
      approach: [
        { name: 'Map the operation', text: 'We follow an order, a purchase and an invoice through your business, and find where the process really breaks.' },
        { name: 'Build module by module', text: 'We start with the module that hurts most, so you feel the benefit early.' },
        { name: 'Migrate and train', text: 'Data moves over carefully, your team is trained, and the old system is retired only when you are ready.' },
      ],
      faq: [
        { q: 'Custom ERP or an existing platform?', a: 'It depends on how unusual your processes are. If a standard platform covers most of what you need, we say so. Custom pays off when your workflows are your advantage or no product fits.' },
        { q: 'Can you migrate our existing data?', a: 'Yes. We clean, map and import data from spreadsheets and older systems, and run both side by side until you trust the new one.' },
      ],
      work: ['Okebase'],
    },
    ai: {
      headline: 'AI that runs inside your software, not next to it.',
      intro: 'We build software with AI built in: assistants, agents and knowledge bases powered by OpenAI, Claude, Gemini and open models, connected to your data and your tools. The goal is a feature people use every day, not a pilot that stalls.',
      signs: ['You have documents and data nobody can search properly', 'An AI pilot impressed in a demo but never reached real users', 'You want AI inside your product and are not sure where to start'],
      builds: [
        { name: 'AI features inside your product', text: 'Summaries, drafting, classification, recommendations and search added to software you already run.' },
        { name: 'Assistants and AI agents', text: 'Agents that use tools, call your APIs and complete multi-step tasks, with limits and review where it matters.' },
        { name: 'Knowledge bases and document search', text: 'Ask questions of your own documents and data, and get answers with sources you can check.' },
        { name: 'Chatbots and voice assistants', text: 'Customer and staff assistants over chat or voice, connected to your systems.' },
        { name: 'Computer vision and predictive models', text: 'Image and document recognition, forecasting and scoring models trained on your data.' },
        { name: 'Monitoring, evaluation and cost control', text: 'Quality checks before launch, monitoring after it, and spending limits so costs stay predictable.' },
      ],
      approach: [
        { name: 'Pick one valuable use case', text: 'We start with the task where AI saves the most time or earns the most, not with the technology.' },
        { name: 'Build with real data and measure', text: 'We test accuracy on your own examples before anyone relies on the output.' },
        { name: 'Run it with guardrails', text: 'Monitoring, cost limits and human review where mistakes are expensive.' },
      ],
      faq: [
        { q: 'Which AI models do you use?', a: 'OpenAI, Anthropic Claude and Google Gemini, plus open-source models. We choose by quality, cost, speed and your data-privacy needs, and design the system so a model can be swapped later.' },
        { q: 'How do you keep our data private?', a: 'We choose models and hosting around your privacy needs, keep credentials in your own accounts, and limit what data the model can see. Where needed we use providers whose terms exclude training on your data, or private deployments.' },
      ],
      work: ['SyncDaily'],
    },
    automation: {
      headline: 'Take repetitive work off your team.',
      intro: 'Skilled people should not spend their days copying data between systems. We automate workflows end to end, connect the tools you already use, and add AI agents where judgment is needed.',
      signs: ['Staff re-key the same data in several systems', 'Approvals and handoffs wait in inboxes', 'Reports are assembled by hand every week'],
      builds: [
        { name: 'Workflow automation', text: 'Orders, approvals, onboarding and notifications that run themselves, with checks along the way.' },
        { name: 'AI agents and assistants', text: 'Agents that read, decide and act within limits you set, handing over to a person when unsure.' },
        { name: 'Document processing', text: 'Invoices, forms and emails read, checked and entered into your systems.' },
        { name: 'System-to-system integration', text: 'Reliable connections between your CRM, ERP, accounting, messaging and custom tools.' },
        { name: 'Automated reporting', text: 'The weekly and monthly reports your team builds by hand, produced and delivered automatically.' },
      ],
      approach: [
        { name: 'Find the work worth automating', text: 'We measure where the hours go and start with the process that returns the most time.' },
        { name: 'Automate end to end', text: 'We build the full flow with validation, error handling and a person in the loop for exceptions.' },
        { name: 'Monitor and improve', text: 'Alerts for failures, a record of every run, and regular tuning as your process changes.' },
      ],
      faq: [
        { q: 'Which processes are worth automating?', a: 'Repetitive, rule-based work that happens often and where mistakes are costly: data entry, document handling, approvals and reporting. We start with the one that returns the most time.' },
        { q: 'What happens when an automation fails?', a: 'Every automation has monitoring and a fallback. Failures raise an alert, nothing is dropped silently, and a person can step in.' },
      ],
      work: ['AdVantage AI', 'AI Receptionist'],
    },
  },
};

export const about = {
  hero: {
    eyebrow: 'About',
    title: 'Engineers who build it, run it and stay accountable.',
    lede: 'Vector Dynamic is a senior engineering team building custom software, business systems, AI and automation for growing B2B companies.',
  },
  story: {
    title: 'Why we exist',
    body: [
      'Most software projects do not fail on launch day. They stall after it, when the demo meets real data, real users and real load. We started Vector Dynamic to close that gap.',
      'We build our own products and run them in production, so we know what breaks after launch and what it takes to keep a system healthy. That experience shapes how we build for clients: smaller releases, honest estimates and monitoring from day one.',
      'We are a young company, and we say so. What we offer in return is direct access to the engineers building your system, fixed prices, written terms and weekly proof of progress.',
    ],
  },
  principles: {
    title: 'How we think about the work',
    items: [
      { name: 'Ship to production', text: 'A system nobody uses every day has not solved anything. We plan every project backwards from launch.' },
      { name: 'Say no when no is right', text: 'If an off-the-shelf tool fits, or custom is not worth it, we say so, even when it means a smaller project for us.' },
      { name: 'Keep it simple', text: 'The simplest design that meets the need is easier to run, change and pay for.' },
      { name: 'Be easy to reach', text: 'You deal directly with the engineers. Questions get plain answers, and progress is shown weekly, not described.' },
    ],
  },
};

export const partners = {
  hero: {
    eyebrow: 'Agency partners',
    title: 'Your engineering team, behind your brand.',
    lede: 'We deliver software, AI and automation for agencies and software houses that need extra capacity or specialist skills, under your name and on your terms.',
  },
  offers: {
    title: 'Three ways we work with agencies',
    items: [
      { name: 'White-label delivery', text: 'We build to your client’s brief and your standards. Your brand stays in front, and we stay out of sight.' },
      { name: 'Overflow capacity', text: 'More projects than people? We take defined pieces of work so your deadlines hold.' },
      { name: 'Specialist skills', text: 'AI integration, ERP and business systems, API integrations and automation, without a full-time hire.' },
    ],
  },
  how: {
    title: 'How a partnership starts',
    items: [
      { name: 'Sign an NDA', text: 'A mutual NDA comes before any detail is shared.' },
      { name: 'Try a small task', text: 'We start with one defined piece of work, so you judge our quality before committing more.' },
      { name: 'Agree rates and scope', text: 'Fixed rates and a written scope for every project.' },
      { name: 'Deliver and repeat', text: 'Weekly progress you can pass to your client, then more work as trust grows.' },
    ],
  },
  commitments: {
    title: 'What we commit to',
    items: [
      'Mutual NDA before any detail is shared',
      'Your clients stay your clients, with no direct contact unless you ask',
      'Fixed rates and written scope',
      'A weekly update you can pass on',
      'Code and ownership terms agreed per project',
      'Plain, fast communication',
    ],
  },
  fit: {
    good: ['Small and mid-size agencies and software houses', 'Teams with client work to deliver and a need for extra hands', 'Agencies adding AI or ERP work to their offer'],
    bad: ['Projects with no written scope', 'Teams looking only for the cheapest bid'],
  },
};
