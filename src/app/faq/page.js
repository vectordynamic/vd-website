import { PageHero, Section, CtaBand } from '@/components/page/Page';
import LinkButton from '@/components/ui/LinkButton';
import Reveal from '@/components/ui/Reveal';
import { faqData } from '@/content/faq';
import { site, bookHref, auditHref } from '@/content/site';
import { jsonLd } from '@/lib/jsonld';
import s from './faq.module.css';

export const metadata = {
  title: 'Frequently Asked Questions — Pricing, IP, Time Zones & Security',
  description: faqData.lede,
  alternates: { canonical: '/faq' },
};

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: it.a,
      },
    })),
  },
];

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }}
      />
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}
        eyebrow={faqData.eyebrow}
        title={faqData.title}
        lede={faqData.lede}
      >
        <LinkButton href={bookHref} event="cta_click" eventParams={{ location: 'faq_hero_book' }}>
          Book a 30-minute discovery call
        </LinkButton>
        <LinkButton
          href={auditHref}
          variant="quiet"
          event="cta_click"
          eventParams={{ location: 'faq_hero_audit' }}
        >
          Request a free written review
        </LinkButton>
      </PageHero>

      <Section eyebrow="Common Questions" title="Everything you need to know">
        <Reveal className={s.faqList}>
          {faqData.items.map((it) => (
            <details key={it.q} className={s.faqItem}>
              <summary className={s.faqSummary}>
                <span>{it.q}</span>
                <span className={s.faqIcon} aria-hidden="true">+</span>
              </summary>
              <p className={s.faqAnswer}>{it.a}</p>
            </details>
          ))}
        </Reveal>
      </Section>

      <CtaBand
        title="Still have a question about your project?"
        lede="Speak directly with a senior engineer on a 30-minute discovery call, or send us a message."
        primaryLabel="Book a 30-minute call"
        primaryHref={bookHref}
        secondaryLabel={`Email us at ${site.email}`}
        secondaryHref={`mailto:${site.email}`}
      />
    </>
  );
}

