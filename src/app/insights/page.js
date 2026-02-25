import Link from 'next/link';
import styles from './page.module.css';
import { getRawArticlesNewsFeed, getPublishedArticlesFeed, getLatestPublishedArticles } from '@/lib/syncdaily';
import InsightsFeedHub from '@/components/insights/InsightsFeedHub';

export const metadata = {
  title: 'Tech Insights & Vlogs',
  description: 'Deep engineering dives and real-time tech news aggregation from Vector Dynamic.',
};

const categories = [
  'All',
  'AI & Machine Learning',
  'Cloud & DevOps',
  'Software Engineering',
  'Startup & Funding'
];

export default async function InsightsPage() {
  // Parallel fetch: Original content, Initial News feed, and Sidebar Must Reads
  const [blogFeedRes, newsRes, latestRes] = await Promise.all([
    getPublishedArticlesFeed(null, 12), // First page of Our Blog
    getRawArticlesNewsFeed(null, 12, ''), // Get first page of Tech Radar
    getLatestPublishedArticles(3) // For Sidebar Must Reads
  ]);

  const initialBlogData = blogFeedRes || { articles: [] };
  const initialRadarData = newsRes || { items: [] };
  const latestArticles = latestRes?.articles || [];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: metadata.title,
    description: metadata.description,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: initialBlogData.articles.map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://vectordynamic.com'}/insights/${article.slug}`
      }))
    },
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://vectordynamic.com'}/insights`,
    publisher: {
      '@type': 'Organization',
      name: 'Vector Dynamic',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://vectordynamic.com'}/logo.svg`,
      },
    },
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className={styles.hero} style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <nav className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Insights</span>
          </nav>
          <h1 className={styles.title}>Tech Insights & Vlogs</h1>
          <p className={styles.subtitle}>
            Dive deep into our engineering editorials or scan the horizon with our live tech news aggregator.
          </p>
        </div>
      </section>

      {/* Interactive Insights Hub (Tabs + View Toggle + Sidebar + Infinite Scroll) */}
      <InsightsFeedHub
        initialBlogData={initialBlogData}
        initialRadarData={initialRadarData}
        categories={categories}
        latestArticles={latestArticles}
      />

      {/* Newsletter CTA */}
      <section className={styles.newsletter}>
        <div className="container">
          <div className={styles.newsletterContent}>
            <h2>Stay Ahead of the Curve</h2>
            <p>Get the latest AI and software insights delivered directly to you. No spam.</p>
            <form className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.newsletterInput}
              />
              <button type="submit" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', background: 'var(--gradient-primary)', color: 'white', borderRadius: 'var(--radius-lg)' }}>
                Subscribe
              </button>
            </form>
            <span className={styles.privacy}>
              We respect your inbox. Unsubscribe anytime.
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
