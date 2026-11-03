import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { getAllArticles, getArticleBySlug } from '@/content/articles';
import ArticleCard, { formatDate } from '@/components/insights/ArticleCard';
import SocialShare from '@/components/insights/SocialShare';
import { Section, CtaBand } from '@/components/page/Page';
import Reveal from '@/components/ui/Reveal';
import { site } from '@/content/site';
import { jsonLd } from '@/lib/jsonld';
import s from '@/components/insights/insights.module.css';

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: 'Article not found' };

  const description = article.excerpt || `Read ${article.title}`;
  return {
    title: article.title,
    description,
    keywords: article.tags || [],
    alternates: { canonical: `/insights/${slug}` },
    openGraph: {
      title: article.title,
      description,
      type: 'article',
      publishedTime: article.published_at,
      authors: ['Vector Dynamic Engineering'],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description,
    },
  };
}

const markdownComponents = {
  a: ({ href = '', children }) => {
    if (href.startsWith('/')) {
      return <Link href={href}>{children}</Link>;
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  },
};

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getAllArticles()
    .filter((a) => a.slug !== slug)
    .slice(0, 2);
  const mins = article.stats?.reading_time_minutes;
  const url = `${site.url}/insights/${slug}`;

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: article.title,
      description: article.excerpt,
      datePublished: article.published_at,
      dateModified: article.updated_at || article.published_at,
      author: [{ '@type': 'Organization', name: site.name, url: site.url }],
      publisher: { '@type': 'Organization', name: site.name, logo: { '@type': 'ImageObject', url: `${site.url}/logo.svg` } },
      mainEntityOfPage: url,
      keywords: (article.tags || []).join(', '),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: 'Insights', item: `${site.url}/insights` },
        { '@type': 'ListItem', position: 3, name: article.title, item: url },
      ],
    },
  ];

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />
      <header className={s.articleHead}>
        <div className="vd-container">
          <nav className={s.crumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link> / <Link href="/insights">Insights</Link>
          </nav>
          {article.categories?.length > 0 && (
            <div className={s.tags}>{article.categories.map((c) => <span key={c} className={s.tag}>{c}</span>)}</div>
          )}
          <h1 className={s.articleTitle}>{article.title}</h1>
          <div className={s.articleMeta}>
            <span>{formatDate(article.published_at)}</span>
            {mins && <span>{mins} min read</span>}
            <span>Vector Dynamic Engineering</span>
          </div>
        </div>
      </header>

      {article.image_url && (
        <div className="vd-container">
          <div className={s.hero}>
            <Image src={article.image_url} alt={article.title} fill priority sizes="(max-width: 1000px) 100vw, 1000px" />
          </div>
        </div>
      )}

      <div className={s.narrow}>
        <div className={s.prose}>
          <ReactMarkdown components={markdownComponents}>{article.content}</ReactMarkdown>
        </div>
        <SocialShare title={article.title} slug={slug} />
      </div>

      {related.length > 0 && (
        <Section tone="surface" eyebrow="Keep Reading" title="More engineering guides">
          <Reveal className={s.grid}>
            {related.map((a) => <ArticleCard key={a.slug} article={a} />)}
          </Reveal>
        </Section>
      )}

      <CtaBand
        title="Weighing a build like this for your business?"
        body="Book a 30-minute discovery call with an engineer, or request a free 2–4 page written review of your workflow."
      />
    </article>
  );
}
