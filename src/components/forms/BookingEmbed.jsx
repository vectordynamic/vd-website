'use client';

import { site } from '@/content/site';
import { trackEvent } from '@/lib/analytics';
import InquiryForm from './InquiryForm';
import s from './forms.module.css';

export default function BookingEmbed() {
  if (!site.bookingUrl) {
    return <InquiryForm variant="book" />;
  }

  return (
    <div className={s.bookingBox}>
      <div className={s.bookingHeader}>
        <span className="vd-mono">30-Minute Discovery Call</span>
        <a
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={s.bookingExt}
          onClick={() => trackEvent('booking_started', { location: 'book_embed_external' })}
        >
          Open scheduler in new tab ↗
        </a>
      </div>
      <iframe
        src={site.bookingUrl}
        title="Schedule a 30-minute discovery call with Vector Dynamic"
        className={s.bookingFrame}
        loading="lazy"
      />
    </div>
  );
}

