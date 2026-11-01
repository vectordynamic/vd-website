import Link from 'next/link';
import Image from 'next/image';
import s from './insights.module.css';

export const formatDate = (d) =>
  d ? new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }) : '';

export default function ArticleCard({ article }) {
  const cat = article.categories?.[0] || article.category || 'Insight';
  const mins = article.stats?.reading_time_minutes;
  return (
    <Link href={`/insights/${article.slug}`} className={s.card}>
      <div className={s.media}>
        {article.image_url ? (
          <Image src={article.image_url} alt="" fill sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw" />
        ) : (
          <div className={s.placeholder} aria-hidden="true" />
        )}
      </div>
      <p className={s.cat}>{cat}</p>
      <h3><span className={s.title}>{article.title}</span></h3>
      {article.excerpt && <p className={s.excerpt}>{article.excerpt}</p>}
      <p className={s.meta}>{formatDate(article.published_at)}{mins ? ` · ${mins} min read` : ''}</p>
    </Link>
  );
}
