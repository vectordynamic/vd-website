import Link from 'next/link';
import Image from 'next/image';
import s from './insights.module.css';

export const formatDate = (d) =>
  d ? new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }) : '';

export default function ArticleCard({ article }) {
  const cat = article.categories?.[0] || article.category || 'Engineering Guide';
  const mins = article.stats?.reading_time_minutes;
  return (
    <Link href={`/insights/${article.slug}`} className={s.card}>
      {article.image_url ? (
        <div className={s.media}>
          <Image src={article.image_url} alt="" fill sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw" />
        </div>
      ) : (
        <div className={s.editorialRule} aria-hidden="true" />
      )}
      <p className={s.cat}>{cat}</p>
      <h3 className={s.cardH3}><span className={s.title}>{article.title}</span></h3>
      {article.excerpt && <p className={s.excerpt}>{article.excerpt}</p>}
      <p className={s.meta}>{formatDate(article.published_at)}{mins ? ` · ${mins} min read` : ''}</p>
    </Link>
  );
}
