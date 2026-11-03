import InquiryForm from '@/components/forms/InquiryForm';
import LinkButton from '@/components/ui/LinkButton';
import { audit } from '@/content/home';
import { bookHref } from '@/content/site';
import s from '@/components/forms/forms.module.css';

export const metadata = {
  title: 'Free Systems Review',
  description: audit.lede,
  alternates: { canonical: '/audit' },
};

const List = ({ title, items }) => (
  <>
    <h2 className={s.h3}>{title}</h2>
    <ul className={s.ul}>{items.map((t) => <li key={t}>{t}</li>)}</ul>
  </>
);

export default function AuditPage() {
  const sample = audit.sampleDeliverable;
  return (
    <div className={`vd-container ${s.page}`}>
      <div className={s.grid}>
        <div>
          <p className={s.eyebrow}>{audit.eyebrow}</p>
          <h1 className={s.h1}>{audit.title}</h1>
          <p className={s.lede}>{audit.lede}</p>
          <List title="What we examine" items={audit.looksAt} />
          <List title="What you receive" items={audit.receive} />
          <p className={s.note}>
            {audit.timing} {audit.qualify}
          </p>

          {sample && (
            <div className={s.sampleCard}>
              <div className={s.sampleHeader}>
                <h2 className={s.h3} style={{ margin: 0 }}>{sample.title}</h2>
                <span className={s.sampleBadge}>{sample.badge}</span>
              </div>
              <ol className={s.sampleRows}>
                {sample.sections.map((sec) => (
                  <li key={sec.num}>
                    <span>{sec.num}</span>
                    <div>
                      <strong>{sec.heading}</strong>
                      {sec.detail}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}

          <p className={s.note}>
            <LinkButton
              href={bookHref}
              variant="quiet"
              event="cta_click"
              eventParams={{ location: 'audit_page_to_book' }}
            >
              Prefer to talk live first? Book a 30-minute discovery call
            </LinkButton>
          </p>
        </div>

        <InquiryForm variant="audit" />
      </div>
    </div>
  );
}
