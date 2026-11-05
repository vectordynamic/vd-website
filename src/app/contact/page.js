import Link from 'next/link';
import InquiryForm from '@/components/forms/InquiryForm';
import LinkButton from '@/components/ui/LinkButton';
import { site, bookHref, auditHref } from '@/content/site';
import s from '@/components/forms/forms.module.css';

export const metadata = {
  title: 'Contact',
  description: 'Tell us what you need built, fixed, or automated. Direct response from a senior engineer within one business day.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <div className={`vd-container ${s.page}`}>
      <div className={s.grid}>
        <div>
          <p className={s.eyebrow}>Contact</p>
          <h1 className={s.h1}>Start a direct engineering conversation.</h1>
          <p className={s.lede}>
            Tell us what you need built, integrated, or maintained. {site.responseSla}.
          </p>

          <div className={s.side}>
            <div>
              <span className={s.eyebrow}>Fastest ways to start</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.65rem' }}>
                <LinkButton href={bookHref} event="cta_click" eventParams={{ location: 'contact_to_book' }}>
                  Book a 30-min call
                </LinkButton>
                <LinkButton href={auditHref} variant="quiet" event="cta_click" eventParams={{ location: 'contact_to_audit' }}>
                  Free written review
                </LinkButton>
              </div>
            </div>

            <div>
              <span className={s.eyebrow}>Email</span>
              <p style={{ margin: '0.35rem 0 0' }}>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            </div>

            <div>
              <span className={s.eyebrow}>Global working hours</span>
              <p style={{ margin: '0.35rem 0 0', color: 'var(--vd-graphite)', fontSize: '0.95rem' }}>
                {site.overlapWindow}
              </p>
            </div>

            <div>
              <span className={s.eyebrow}>Agencies & advisors</span>
              <p style={{ margin: '0.35rem 0 0', color: 'var(--vd-graphite)', fontSize: '0.95rem' }}>
                Exploring referral revenue-share, white-label delivery, or a scoped pilot task?{' '}
                <Link href="/partners">See our partner models →</Link>
              </p>
            </div>
          </div>
        </div>

        <InquiryForm variant="contact" />
      </div>
    </div>
  );
}
