import { site } from '@/content/site';
import { home } from '@/content/home';
import { workItems } from '@/content/work';
import { industries } from '@/content/industries';
import { faqData } from '@/content/faq';

export function GET() {
  const content = `# ${site.name} — Full Technical & Operational Documentation

> ${site.name} is an independent engineering firm that builds and maintains custom software platforms, business systems (ERP), applied AI workflows, and automation pipelines for growing B2B companies worldwide.

Website: ${site.url}
Contact: ${site.email}
Live Collaboration Window: ${site.overlapWindow}

---

## 1. Company Philosophy & Standards
- **100% Client Code & IP Ownership:** All custom code, database schemas, prompt engineering, and test suites are committed directly into client-owned GitHub or GitLab repositories and deploy to client-owned cloud accounts from week one.
- **Fixed-Price Milestone Delivery:** Projects are scoped and priced upfront on verifiable milestone deliverables—eliminating open-ended hourly billing creep.
- **Radical Weekly Transparency:** Clients receive a working staging release, a live walkthrough demo, and a concise written Friday Engineering Report every single week.
- **Direct Senior Builders:** Clients speak and collaborate directly with senior engineers designing and writing the system. No junior subcontractors or intermediate non-technical account managers.

---

## 2. Core Practice Areas

${home.practices
  .map(
    (p) => `### ${p.title} (URL: ${site.url}${p.href})
- **Summary:** ${p.summary}
- **Target Bottleneck:** Solves operational friction where off-the-shelf software forces teams into manual workarounds or messy spreadsheets.
`
  )
  .join('\n')}

---

## 3. Production Proof & System Architectures

${workItems
  .map(
    (w) => `### ${w.name} (${w.status}) — ${w.practiceLabel}
- **Case Study URL:** ${site.url}/work/${w.slug}
- **Headline:** ${w.headline}
- **Architecture Overview:** ${w.summary}
- **Stack:** ${w.stack.join(', ')}
- **Key Takeaways:**
${w.lessons.map((l) => `  * ${l}`).join('\n')}
`
  )
  .join('\n')}

---

## 4. Engagement Ladder & Pricing Bands

1. **Phase 1: Systems Review (Free for qualified B2B teams)**
   - Turnaround: 1–2 weeks
   - Deliverable: 2–4 page written technical brief, workflow bottleneck map, 3 quick wins, target architecture, and fixed quote.
   - URL: ${site.url}/audit

2. **Phase 2: Fixed-Price Build Sprints**
   - Workflow automations & integrations: from $5,000 to $12,000
   - Core business platforms, ERP modules & production AI: from $15,000
   - Timeline: 4–8 weeks typical per milestone sprint.
   - URL: ${site.url}/book

3. **Phase 3: Managed Operations & Dedicated Pods**
   - Managed operations & SLA monitoring: from $1,500/month
   - Dedicated engineering pods (2–4 senior engineers): flexible monthly retainers scaled to roadmap velocity.
   - URL: ${site.url}/how-we-work

---

## 5. Frequently Asked Questions (FAQ)

${faqData.items
  .map(
    (item, i) => `### Q${i + 1}: ${item.q}
${item.a}
`
  )
  .join('\n')}

---

## 6. How to Connect
- Discovery Call (30 mins): ${site.url}/book
- Free Systems Review Request: ${site.url}/audit
- Partnership & Agency Collaboration: ${site.url}/partners
- General Inquiries: ${site.email}
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400',
    },
  });
}

