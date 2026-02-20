import { fetchSitemapNews } from '@/lib/sitemap-api';

export async function GET() {
    const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://vectordynamic.com';
    const PUBLICATION_NAME = 'Vector Dynamic';
    const data = await fetchSitemapNews();

    const urls = (data.items || []).map((item) => {
        const imageTag = item.image_url
            ? `<image:image><image:loc>${item.image_url}</image:loc></image:image>`
            : '';

        // Route external news to /insights/news/[slug] (if handled) or direct external via JS. 
        // Usually Google expects news to be on your domain. If 'articles' are external, 
        // it's tricky to submit to Google News unless you have a proxy page.
        // For now we map it to /insights for discovery.

        return `
    <url>
      <loc>${SITE}/insights/${item.slug || ''}</loc>
      <news:news>
        <news:publication>
          <news:name>${PUBLICATION_NAME}</news:name>
          <news:language>en</news:language>
        </news:publication>
        <news:publication_date>${item.published_at}</news:publication_date>
        <news:title>${escapeXml(item.title)}</news:title>
      </news:news>
      ${imageTag}
    </url>`;
    });

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>
  ${urls.join('\n')}
</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=900',
        },
    });
}

function escapeXml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}
