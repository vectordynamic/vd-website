import InquiryForm from '@/components/forms/InquiryForm';
import LinkButton from '@/components/ui/LinkButton';
import { audit } from '@/content/home';
import { site } from '@/content/site';
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
  return (
    <div className={`vd-container ${s.page}`}>
      <div className={s.grid}>
        <div>
          <p className={s.eyebrow}>Systems Review</p>
          <h1 className={s.h1}>{audit.title}</h1>
          <p className={s.lede}>{audit.lede}</p>
          <List title="What we look at" items={audit.looksAt} />
          <List title="What you receive" items={audit.receive} />
          <p className={s.note}>{audit.timing} {audit.qualify}</p>
          {site.bookingUrl && (
            <p className={s.note}><LinkButton href={site.bookingUrl} variant="quiet">Prefer to talk first? Book a 30-minute call</LinkButton></p>
          )}
        </div>
        <InquiryForm variant="audit" />
      </div>
    </div>
  );
}
