import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { getPublishedArticleBySlug, getLatestPublishedArticles } from '@/lib/syncdaily';
import ArticleCard, { formatDate } from '@/components/insights/ArticleCard';
import SocialShare from '@/components/insights/SocialShare';
import { Section, CtaBand } from '@/components/page/Page';
import Reveal from '@/components/ui/Reveal';
import { site } from '@/content/site';
import s from '@/components/insights/insights.module.css';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = await getPublishedArticleBySlug(slug);
  if (!article) return { title: 'Article not found' };

  const description = article.meta?.meta_description || article.excerpt || `Read ${article.title}`;
  const images = article.image_url ? [{ url: article.image_url, width: 1200, height: 630, alt: article.title }] : undefined;
  return {
    title: article.meta?.meta_title || article.title,
    description,
    keywords: article.tags || [],
    alternates: { canonical: `${site.url}/insights/${slug}` },
    openGraph: { title: article.title, description, type: 'article', publishedTime: article.published_at, authors: ['Vector Dynamic'], images },
    twitter: { card: 'summary_large_image', title: article.title, description, images: images && [article.image_url] },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const [article, latestRes] = await Promise.all([getPublishedArticleBySlug(slug), getLatestPublishedArticles(4)]);
  if (!article) notFound();

  const related = (latestRes?.articles || []).filter((a) => a.slug !== slug).slice(0, 3);
  const mins = article.stats?.reading_time_minutes;
  const url = `${site.url}/insights/${slug}`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: article.title,
      image: article.image_url ? [article.image_url] : [],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
            <span>Vector Dynamic</span>
          </div>
        </div>
      </header>

      <div className="vd-container">
        {article.image_url && (
          <div className={s.hero}>
            <Image src={article.image_url} alt={article.title} fill priority sizes="(max-width: 1000px) 100vw, 1000px" />
          </div>
        )}
      </div>

      <div className={s.narrow}>
        <div className={s.prose}>
          {article.content ? <ReactMarkdown>{article.content}</ReactMarkdown> : <p>This article is not available right now.</p>}
        </div>
        <SocialShare title={article.title} slug={slug} />
      </div>

      {related.length > 0 && (
        <Section tone="surface" eyebrow="Keep reading" title="More insights">
          <Reveal className={s.grid}>
            {related.map((a) => <ArticleCard key={a.id || a.slug} article={a} />)}
          </Reveal>
        </Section>
      )}
      <CtaBand title="Need software or AI built for your business?" body="Book a 30-minute call. We will tell you what we would build, what we would not, and what it would take." />
    </article>
  );
}
