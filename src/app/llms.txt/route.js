import { site } from '@/content/site';
import { home } from '@/content/home';

// Plain-text summary for AI assistants and crawlers (llms.txt convention).
export function GET() {
  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    '## What we do',
    ...home.practices.map((p) => `- [${p.title}](${site.url}/services/${p.id}): ${p.summary}`),
    '',
    '## How to work with us',
    `- [Free systems review](${site.url}/audit): a written review of one workflow or system.`,
    `- [Contact](${site.url}/contact): ${site.email}`,
    `- [Agency partners](${site.url}/partners): white-label delivery and extra capacity for agencies.`,
    '',
    '## More',
    `- [Insights](${site.url}/insights): engineering articles.`,
    `- [About](${site.url}/about)`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, s-maxage=86400' } });
}
