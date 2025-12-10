import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Tech Insights & Trends',
  description: 'Stay updated with the latest in AI, software development, and technology trends from the Vector Dynamic team.',
};

// Sample insights data
const insights = [
  {
    id: 1,
    title: 'The Future of AI in Enterprise Software',
    excerpt: 'Exploring how artificial intelligence is reshaping enterprise software development and what it means for businesses.',
    category: 'AI & Machine Learning',
    date: 'Dec 10, 2024',
    readTime: '5 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'Building Scalable SaaS Architecture',
    excerpt: 'Key principles and patterns for designing SaaS applications that can grow with your user base.',
    category: 'Development',
    date: 'Dec 8, 2024',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 3,
    title: 'Automation Trends to Watch in 2025',
    excerpt: 'From RPA to intelligent automation, discover the trends that will define business automation in the coming year.',
    category: 'Industry Trends',
    date: 'Dec 5, 2024',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 4,
    title: 'Choosing the Right Tech Stack for Your Project',
    excerpt: 'A practical guide to selecting technologies that align with your project goals and team capabilities.',
    category: 'Development',
    date: 'Dec 3, 2024',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 5,
    title: 'Digital Transformation: Beyond the Buzzword',
    excerpt: 'What digital transformation really means and how to approach it strategically for your organization.',
    category: 'Industry Trends',
    date: 'Dec 1, 2024',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 6,
    title: 'Introduction to Natural Language Processing',
    excerpt: 'A beginner-friendly overview of NLP and its practical applications in modern software.',
    category: 'AI & Machine Learning',
    date: 'Nov 28, 2024',
    readTime: '10 min read',
    featured: false,
  },
];

const categories = [
  'All',
  'AI & Machine Learning',
  'Development',
  'Industry Trends',
  'Product Updates',
];

export default function InsightsPage() {
  const featuredInsight = insights.find(i => i.featured);
  const regularInsights = insights.filter(i => !i.featured);

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <nav className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Insights</span>
          </nav>
          <h1 className={styles.title}>Tech Insights & Trends</h1>
          <p className={styles.subtitle}>
            Stay updated with the latest in AI, software development, and technology trends.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.categories}>
        <div className="container">
          <div className={styles.categoryPills}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.categoryPill} ${category === 'All' ? styles.active : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insight */}
      {featuredInsight && (
        <section className={styles.featured}>
          <div className="container">
            <div className={styles.featuredCard}>
              <div className={styles.featuredImage}></div>
              <div className={styles.featuredContent}>
                <span className={styles.badge}>Featured</span>
                <span className={styles.category}>{featuredInsight.category}</span>
                <h2 className={styles.featuredTitle}>{featuredInsight.title}</h2>
                <p className={styles.featuredExcerpt}>{featuredInsight.excerpt}</p>
                <div className={styles.meta}>
                  <span>{featuredInsight.date}</span>
                  <span>•</span>
                  <span>{featuredInsight.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Insights Grid */}
      <section className={styles.insights}>
        <div className="container">
          <div className={styles.grid}>
            {regularInsights.map((insight) => (
              <article key={insight.id} className={styles.insightCard}>
                <div className={styles.insightImage}></div>
                <div className={styles.insightContent}>
                  <span className={styles.insightCategory}>{insight.category}</span>
                  <h3 className={styles.insightTitle}>{insight.title}</h3>
                  <p className={styles.insightExcerpt}>{insight.excerpt}</p>
                  <div className={styles.insightMeta}>
                    <span>{insight.date}</span>
                    <span>•</span>
                    <span>{insight.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className={styles.newsletter}>
        <div className="container">
          <div className={styles.newsletterContent}>
            <h2>Stay Ahead of the Curve</h2>
            <p>Get the latest insights delivered to your inbox. No spam, just valuable content.</p>
            <form className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className={styles.newsletterInput}
              />
              <button type="submit" className="btn btn-primary">
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
