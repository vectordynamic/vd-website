// Full FAQ data for the dedicated /faq page and JSON-LD schema
export const faqData = {
  eyebrow: 'Frequently Asked Questions',
  title: 'Direct answers on delivery, licensing, and operations.',
  lede: 'How we handle global time zones, codebase licensing and ownership, milestone pricing, security, and ongoing maintenance.',
  items: [
    {
      q: 'How do we collaborate across US, UK, European, Gulf, or APAC time zones?',
      a: 'We operate a 24/7 dedicated client-handling and support desk so urgent communication and operational issues are handled around the clock. For core engineering, standard engagements include a guaranteed daily live overlap window (4+ hours standard) for standups, architecture reviews, and pairing—and if your project or dedicated pod requires full working-hour alignment, we shift our dedicated team’s hours directly to match your time zone.',
    },
    {
      q: 'How do codebase ownership, licensing, and exclusivity work?',
      a: 'Your company data, customer records, and proprietary business rules are always 100% yours under mutual NDA. For the software itself, we offer three commercial structures that adjust pricing to your needs: (1) Cost-Effective Licensed Deployment, where we deploy and customize our proven core engines (ERP, Voice, AI, or Automation) for your business at a lower upfront cost; (2) Custom Build with Shared Core Libraries, where you receive a perpetual commercial license to operate the delivered system while Vector Dynamic retains ownership of reusable underlying frameworks; or (3) Full Source-Code Handover & Category Exclusivity, priced specifically for organizations requiring full repository transfer or exclusive IP rights.',
    },
    {
      q: 'How do you determine project timelines and milestone schedules?',
      a: 'We never quote arbitrary calendar durations before inspecting your workflow or codebase. Project timelines, sprint cadence, and milestone gates are determined during scoping based on technical complexity, third-party API dependencies, and the contract model you choose.',
    },
    {
      q: 'Can you take over, maintain, or integrate APIs into our existing codebase?',
      a: 'Yes. Through our Product Maintenance, Modernization & API Integration practice, we step into existing web, mobile, and backend repositories—even those left behind by previous agencies—to audit stability, fix bugs, optimize database queries, ship new features, and engineer two-way API integrations with Stripe, QuickBooks, Xero, NetSuite, Odoo, HubSpot, Salesforce, 3PLs, and telecom providers.',
    },
    {
      q: 'How do you protect our company data and credentials?',
      a: 'We sign a mutual NDA before reviewing internal systems. Access follows least-privilege roles, secrets stay inside your cloud vault, AI integrations use commercial API tiers that contractually exclude training on customer data, and temporary credentials can be rotated at any time.',
    },
    {
      q: 'Will we deal with account managers or the actual engineers?',
      a: 'You speak directly with the senior engineers designing, integrating, and maintaining your system—from the first 30-minute discovery call through production deployment. There is no sales handoff to junior subcontractors.',
    },
    {
      q: 'How are engagements structured and priced?',
      a: 'Every project is quoted against explicit milestones and your selected commercial model (licensed deployment, custom build, full source buyout, or monthly maintenance retainer) before engineering starts—so there are zero open-ended hourly surprises. The initial Systems Review is complimentary for qualified B2B teams.',
    },
  ],
};
