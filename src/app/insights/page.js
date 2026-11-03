import { PageHero, Section, CtaBand } from '@/components/page/Page';
import ArticleGrid from '@/components/insights/ArticleGrid';
import LinkButton from '@/components/ui/LinkButton';
import { getAllArticles } from '@/content/articles';
import { site, auditHref } from '@/content/site';
import { jsonLd } from '@/lib/jsonld';

export const metadata = {
  title: 'Engineering Insights & B2B Architecture Guides',
  description:
    'Practical decision guides from Vector Dynamic engineers on custom ERP vs. Odoo, shipping production AI without pilot failure, and B2B workflow automation.',
  alternates: { canonical: '/insights' },
};

export default function InsightsPage() {
  const articles = getAllArticles();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Engineering Insights — Vector Dynamic',
    url: `${site.url}/insights`,
    publisher: { '@type': 'Organization', name: site.name, url: site.url },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: articles.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: a.title,
        url: `${site.url}/insights/${a.slug}`,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Insights' }]}
        eyebrow="Engineering Insights"
        title="Practical guides on custom ERP, applied AI, and B2B systems."
        lede="Written by the engineers who scope and ship our systems—covering build-vs-buy trade-offs, production AI guardrails, and operational ROI."
      >
        <LinkButton href={auditHref} event="cta_click" eventParams={{ location: 'insights_hero_audit' }}>
          Request a free written Systems Review
        </LinkButton>
        <LinkButton href="/work/syncdaily" variant="quiet">
          Inspect our live SyncDaily pipeline
        </LinkButton>
      </PageHero>

      <Section>
        <ArticleGrid articles={articles} />
      </Section>

      <CtaBand />
    </>
  );
}
