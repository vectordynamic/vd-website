import BookingEmbed from '@/components/forms/BookingEmbed';
import LinkButton from '@/components/ui/LinkButton';
import { book } from '@/content/pages';
import { site, auditHref } from '@/content/site';
import s from '@/components/forms/forms.module.css';

export const metadata = {
  title: 'Book a 30-Minute Discovery Call',
  description: book.lede,
  alternates: { canonical: '/book' },
};

export default function BookPage() {
  return (
    <div className={`vd-container ${s.page}`}>
      <div className={s.grid}>
        <div>
          <p className={s.eyebrow}>{book.eyebrow}</p>
          <h1 className={s.h1}>{book.title}</h1>
          <p className={s.lede}>{book.lede}</p>

          <h2 className={s.h3}>30-minute call agenda</h2>
          <ul className={s.ul}>
            {book.agenda.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className={s.side}>
            <div>
              <span className={s.eyebrow}>Live timezone coverage</span>
              <p style={{ margin: '0.35rem 0 0', color: 'var(--vd-graphite)', fontSize: '0.95rem' }}>
                {site.overlapWindow}
              </p>
            </div>
            <div>
              <span className={s.eyebrow}>Direct email</span>
              <p style={{ margin: '0.35rem 0 0' }}>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            </div>
          </div>

          <p className={s.note}>{book.asyncNote}</p>
          <p className={s.note} style={{ marginTop: '0.85rem' }}>
            <LinkButton
              href={auditHref}
              variant="quiet"
              event="cta_click"
              eventParams={{ location: 'book_page_to_audit' }}
            >
              Request a free written Systems Review instead
            </LinkButton>
          </p>
        </div>

        <BookingEmbed />
      </div>
    </div>
  );
}

