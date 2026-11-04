import { site } from '@/content/site';
import { home } from '@/content/home';
import { workItems } from '@/content/work';
import { industries } from '@/content/industries';
import { getAllArticles } from '@/content/articles';

// Plain-text summary for AI assistants and crawlers (llms.txt convention).
export function GET() {
  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    '## Core Practice Areas',
    ...home.practices.map((p) => `- [${p.title}](${site.url}/services/${p.id}): ${p.summary}`),
    '',
    '## Engineering Case Studies & Internal Systems',
    ...workItems.map((w) => `- [${w.name} (${w.status})](${site.url}/work/${w.slug}): ${w.summary}`),
    '',
    '## Industry Playbooks',
    ...industries.map((ind) => `- [${ind.name}](${site.url}/for/${ind.slug}): ${ind.lede}`),
    '',
    '## How to Work With Us',
    `- [Book a 30-Minute Discovery Call](${site.url}/book): Speak directly with a senior engineer (${site.overlapWindow}).`,
    `- [Free Written Systems Review](${site.url}/audit): 2–4 page written engineering review of one workflow with 3 quick wins and a fixed-price build estimate.`,
    `- [How We Work & Dedicated Pods](${site.url}/how-we-work): Weekly live demos, Friday written updates, 100% custom IP ownership, and senior engineering pods.`,
    `- [Frequently Asked Questions](${site.url}/faq): Time zone overlap, IP ownership, pricing, data security, and communication.`,
    `- [Full Documentation for LLMs](${site.url}/llms-full.txt): Complete operational and architectural brief.`,
    `- [Strategic Partnerships](${site.url}/partners): Win-win referral revenue share, white-label agency delivery, and 1-week trial tasks.`,
    `- [Contact](${site.url}/contact): ${site.email}`,
    '',
    '## Engineering Guides',
    ...getAllArticles().map((a) => `- [${a.title}](${site.url}/insights/${a.slug}): ${a.excerpt}`),
    '',
    '## Company & Legal',
    `- [About Vector Dynamic](${site.url}/about)`,
    `- [Privacy Policy](${site.url}/privacy)`,
    `- [Terms of Service](${site.url}/terms)`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400',
    },
  });
}
