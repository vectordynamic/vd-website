import { fetchSitemapIndex } from '@/lib/sitemap-api';

export async function GET() {
    const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://vectordynamic.com';
    const index = await fetchSitemapIndex();

    const entries = [];

    // Published sitemaps
    for (let i = 0; i < (index.published_chunks || 1); i++) {
        entries.push(`
    <sitemap>
      <loc>${SITE}/sitemap-published-${i}.xml</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </sitemap>`);
    }

    // Google News sitemap
    entries.push(`
    <sitemap>
      <loc>${SITE}/sitemap-news.xml</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </sitemap>`);

    // Static site sitemap (example fallback)
    entries.push(`
    <sitemap>
      <loc>${SITE}/sitemap-static.xml</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </sitemap>`);

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${entries.join('\n')}
</sitemapindex>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
    });
}
