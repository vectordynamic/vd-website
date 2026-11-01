import { PageHero, Section } from '@/components/page/Page';
import ArticleGrid from '@/components/insights/ArticleGrid';
import { getPublishedArticlesFeed } from '@/lib/syncdaily';
import { site } from '@/content/site';

export const metadata = {
  title: 'Insights',
  description: 'Briefings on AI, security, cloud and software from Vector Dynamic.',
  alternates: { canonical: '/insights' },
};

export default async function InsightsPage() {
  const initial = (await getPublishedArticlesFeed(null, 12)) || { articles: [] };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Insights',
    url: `${site.url}/insights`,
    publisher: { '@type': 'Organization', name: site.name, url: site.url },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: (initial.articles || []).map((a, i) => ({ '@type': 'ListItem', position: i + 1, url: `${site.url}/insights/${a.slug}` })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Insights' }]}
        eyebrow="Insights"
        title="Technology news and analysis."
        lede="Briefings on AI, security, cloud and software, published by our own AI-assisted editorial pipeline."
      />
      <Section>
        <ArticleGrid initial={initial} />
      </Section>
    </>
  );
}
