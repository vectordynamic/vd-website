import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import styles from './page.module.css';
import { getPublishedArticleBySlug } from '@/lib/syncdaily';

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
            url: 'https://vectordynamic.com'
        }],
        publisher: {
            '@type': 'Organization',
            name: 'Vector Dynamic',
            logo: {
                '@type': 'ImageObject',
                url: 'https://vectordynamic.com/logo.svg'
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
                    <aside className={styles.sidebar}>
                        <div className={styles.sidebarWidget}>
                            <h3 className={styles.widgetTitle}>Share Article</h3>
                            <div className="flex gap-4">
                                {/* Share buttons (e.g. Twitter, LinkedIn) can go here */}
                                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=https://vectordynamic.com/insights/${article.slug}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-sm glass">Twitter / X</a>
                                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://vectordynamic.com/insights/${article.slug}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-sm glass">LinkedIn</a>
                            </div>
                        </div>

                        {article.tags && article.tags.length > 0 && (
                            <div className={styles.sidebarWidget}>
                                <h3 className={styles.widgetTitle}>Topics</h3>
                                <div className={styles.topicsList}>
                                    {article.tags.map(tag => (
                                        <span key={tag} className={styles.topicPill}>#{tag}</span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {article.sources && article.sources.length > 0 && (
                            <div className={styles.sidebarWidget}>
                                <h3 className={styles.widgetTitle}>References & Sources</h3>
                                <div className={styles.sourcesList}>
                                    {article.sources.map((src, i) => (
                                        <a key={i} href={src.url || '#'} target="_blank" rel="noopener noreferrer" className={styles.sourceItem}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                            {src.name || src.source_id || 'External Reference'}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </aside>

                </div>
            </div>
        </article>
    );
}
