import { site } from '@/content/site';
import { home } from '@/content/home';
import { workItems } from '@/content/work';
import { industries } from '@/content/industries';
import { getAllArticles } from '@/content/articles';

const esc = (v) =>
  String(v)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export function GET() {
  const staticPaths = [
    '',
    '/services',
    ...home.practices.map((p) => `/services/${p.id}`),
    '/work',
    ...workItems.map((w) => `/work/${w.slug}`),
    '/how-we-work',
    '/faq',
    '/audit',
    '/book',
    '/partners',
    '/about',
    '/contact',
    ...industries.map((ind) => `/for/${ind.slug}`),
    '/insights',
    '/privacy',
    '/terms',
  ];

  const urls = new Map(staticPaths.map((p) => [`${site.url}${p}`, null]));

  for (const article of getAllArticles()) {
    urls.set(`${site.url}/insights/${article.slug}`, article.updated_at || article.published_at || null);
  }

  const body = [...urls.entries()]
    .map(([loc, lastmod]) => `  <url><loc>${esc(loc)}</loc>${lastmod ? `<lastmod>${esc(lastmod)}</lastmod>` : ''}</url>`)
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
    {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=600',
      },
    }
  );
}
