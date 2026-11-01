import InquiryForm from '@/components/forms/InquiryForm';
import LinkButton from '@/components/ui/LinkButton';
import { site } from '@/content/site';
import s from '@/components/forms/forms.module.css';

export const metadata = {
  title: 'Contact',
  description: 'Tell us what you need built, fixed or automated. We reply within one business day.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <div className={`vd-container ${s.page}`}>
      <div className={s.grid}>
        <div>
          <p className={s.eyebrow}>Contact</p>
          <h1 className={s.h1}>Talk to us.</h1>
          <p className={s.lede}>Tell us what you need built, fixed or automated. We reply within one business day.</p>
          <div className={s.side}>
            {site.bookingUrl && <div><LinkButton href={site.bookingUrl}>Book a 30-minute call</LinkButton></div>}
            <div><span className={s.eyebrow}>Email</span><br /><a href={`mailto:${site.email}`}>{site.email}</a></div>
            <div><span className={s.eyebrow}>Based in</span><br />{site.location}</div>
          </div>
        </div>
        <InquiryForm variant="contact" />
      </div>
    </div>
  );
}
