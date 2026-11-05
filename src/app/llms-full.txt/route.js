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
- **Flexible Commercial, Licensing & Codebase Models:** Client data and proprietary business rules are always 100% client-owned under mutual NDA. Software deployment and IP ownership are structured around the contract: (a) Cost-effective licensed deployment on Vector Dynamic's core engines, (b) Custom build with shared core libraries and a perpetual operational license, or (c) Full source-code handover and category exclusivity priced per enterprise agreement.
- **Scope & Contract-Driven Milestone Delivery:** Timelines and milestone gates are determined by actual project complexity, integration dependencies, and contract structure—eliminating arbitrary calendar guesses and open-ended hourly billing creep.
- **Radical Milestone Transparency:** Clients receive a working staging release, a live walkthrough demo, and a concise written engineering report at every milestone checkpoint.
- **Direct Senior Builders:** Clients speak and collaborate directly with senior engineers designing, integrating, and maintaining the system. No junior subcontractors or intermediate non-technical account managers.

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
    (w) => `### ${w.name} (${w.domainBadge}) — ${w.practiceLabel}
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

## 4. Engagement Ladder & Commercial Structure

1. **Stage 1: Systems Review (Free for qualified B2B teams)**
   - Deliverable: 2–4 page written technical brief, workflow or codebase bottleneck map, 3 quick wins, target architecture, and commercial options.
   - URL: ${site.url}/audit

2. **Stage 2: Scoped Project & Milestone Delivery**
   - Scope: Custom software platforms, ERP modules, production AI systems, or standalone API integrations.
   - Commercial Options: Licensed deployment on Vector Dynamic core engines, custom build with perpetual usage license, or full source-code handover / exclusivity.
   - Schedule: Defined during scoping based on project size and contract terms.
   - URL: ${site.url}/book

3. **Stage 3: Ongoing Maintenance, API Management & Dedicated Pods**
   - Scope: Existing codebase takeover, SLA bug resolution, third-party API maintenance, performance optimization, or embedded senior engineering pods.
   - URL: ${site.url}/services/maintenance

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

