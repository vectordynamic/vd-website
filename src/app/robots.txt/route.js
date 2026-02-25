import { NextResponse } from 'next/server';

const SITE_URL = process.env.SITE_URL || 'https://vectordynamic.com';

export async function GET() {
    const robotsTxt = `User-agent: *
Allow: /
Disallow: /private/

Sitemap: ${SITE_URL}/sitemap.xml
Sitemap: ${SITE_URL}/sitemap-news.xml
`;

    return new NextResponse(robotsTxt, {
        headers: {
            'Content-Type': 'text/plain',
            'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=3600',
        },
    });
}
