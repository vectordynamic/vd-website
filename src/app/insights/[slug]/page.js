import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import styles from './page.module.css';
import { getPublishedArticleBySlug } from '@/lib/syncdaily';
import ArticleSidebar from '@/components/insights/ArticleSidebar';

// Dynamically generate SEO Metadata
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const article = await getPublishedArticleBySlug(slug);

    if (!article) {
        return {
            title: 'Article Not Found | Vector Dynamic',
        };
    }

    return {
        title: article.meta?.meta_title || `${article.title} | Vector Dynamic`,
        description: article.meta?.meta_description || article.excerpt || `Read ${article.title}`,
        keywords: article.tags || [],
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://vectordynamic.com'}/insights/${slug}`
        },
        openGraph: {
            title: article.title,
            description: article.meta?.meta_description || article.excerpt,
            type: 'article',
            publishedTime: article.published_at,
            authors: ['Vector Dynamic'],
            images: [
                {
                    url: article.image_url || '/og-image.png',
                    width: 1200,
                    height: 630,
                    alt: article.title,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: article.title,
            description: article.meta?.meta_description || article.excerpt,
            images: [article.image_url || '/og-image.png'],
        }
    };
}

export default async function ArticlePage({ params }) {
    const { slug } = await params;
    const article = await getPublishedArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    console.log(`[DEBUG] Loaded Article: ${slug}`);
    console.log(`[DEBUG] Content Length: ${article.content?.length} characters`);

    // Prepeare JSON-LD Structured Data
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: article.title,
        image: article.image_url ? [article.image_url] : [],
        datePublished: article.published_at,
        dateModified: article.updated_at || article.published_at,
        author: [{
            '@type': 'Organization',
            name: 'Vector Dynamic',
            url: process.env.NEXT_PUBLIC_SITE_URL || 'https://vectordynamic.com'
        }],
        publisher: {
            '@type': 'Organization',
            name: 'Vector Dynamic',
            logo: {
                '@type': 'ImageObject',
                url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://vectordynamic.com'}/logo.svg`
            }
        },
        keywords: article.tags ? article.tags.join(', ') : '',
    };

    return (
        <article className={styles.articlePage}>
            {/* Inject JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <header className={styles.articlePageHeader}>
                <div className="container">
                    <div className={styles.articlePageHeaderContent}>
                        <div className={styles.categoryTags}>
                            {article.categories?.map(cat => (
                                <span key={cat} className={styles.tag}>{cat}</span>
                            ))}
                            <span className={styles.sourceTag}>VD Original</span>
                        </div>

                        <h1 className={styles.articlePageTitle}>{article.title}</h1>

                        <div className={styles.meta}>
                            <div className={styles.metaItem}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                <span suppressHydrationWarning>{new Date(article.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            </div>
                            {article.stats?.reading_time_minutes && (
                                <div className={styles.metaItem}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    <span>{article.stats.reading_time_minutes} min read</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            <div className={styles.contentWrapper}>
                <div className={`container ${styles.articleLayout}`}>

                    {/* Main Content Area */}
                    <div className={styles.mainContentArea}>
                        {/* Constrained Hero Image */}
                        {article.image_url && (
                            <div className={styles.professionalImageWrap}>
                                <Image
                                    src={article.image_url}
                                    alt={article.title}
                                    width={800}
                                    height={450}
                                    className={styles.professionalImage}
                                    priority
                                />
                            </div>
                        )}

                        {/* Main Content (Markdown) */}
                        <div className={styles.markdownBody}>
                            {!article.content ? (
                                <p>Error: No content found for this article.</p>
                            ) : (
                                <ReactMarkdown>
                                    {article.content}
                                </ReactMarkdown>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <ArticleSidebar article={article} />
                </div>
            </div>
        </article>
    );
}
