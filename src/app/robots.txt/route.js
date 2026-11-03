import { NextResponse } from 'next/server';
import { site } from '@/content/site';

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /private/
Disallow: /api/

Sitemap: ${site.url}/sitemap.xml
`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=3600',
    },
  });
}
