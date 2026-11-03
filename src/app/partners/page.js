import { PageHero, Section, Rows, Steps, Checklist, TwoCol, Words } from '@/components/page/Page';
import InquiryForm from '@/components/forms/InquiryForm';
import LinkButton from '@/components/ui/LinkButton';
import { partners } from '@/content/pages';
import { site, bookHref } from '@/content/site';
import f from '@/components/forms/forms.module.css';

export const metadata = {
  title: 'Strategic Partnerships — Referral, Co-Delivery & White-Label',
  description: partners.hero.lede,
  alternates: { canonical: '/partners' },
};

export default function PartnersPage() {
  const { hero, tracks, winWin, how, commitments, fit } = partners;

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Partners' }]}
        eyebrow={hero.eyebrow}
        title={hero.title}
        lede={hero.lede}
      >
        <LinkButton href="#partner-form" event="cta_click" eventParams={{ location: 'partners_hero_form' }}>
          Start a partner conversation
        </LinkButton>
        <LinkButton href={bookHref} variant="quiet" event="cta_click" eventParams={{ location: 'partners_hero_book' }}>
          Or book a 25-minute founder intro
        </LinkButton>
      </PageHero>

      <Section tone="surface" eyebrow="Partnership Tracks" title={tracks.title}>
        <Rows items={tracks.items} />
      </Section>

      <Section tone="ink" eyebrow={winWin.eyebrow} title={winWin.title}>
        <Steps items={winWin.items} />
      </Section>

      <Section eyebrow="Getting Started" title={how.title}>
        <Steps items={how.items} />
      </Section>

      <Section tone="surface" eyebrow="Partner Guarantees" title={commitments.title}>
        <Checklist items={commitments.items} />
      </Section>

      <Section eyebrow="Partner Fit" title="Who we build win-win partnerships with">
        <TwoCol>
          <Checklist title="Strong mutual fit" items={fit.good} />
          <Checklist title="Not a fit" items={fit.bad} tone="bad" />
        </TwoCol>
      </Section>

      <section id="partner-form" style={{ paddingBlock: 'var(--vd-section)', borderTop: '1px solid var(--vd-rule)', background: 'var(--vd-surface)' }}>
        <div className="vd-container">
          <div className={f.grid}>
            <div>
              <p className={f.eyebrow}>Partner Inquiry</p>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3rem)', lineHeight: 1.1, maxWidth: '17ch', fontWeight: 500, margin: '0 0 1.25rem' }}>
                <Words text="Explore a referral, co-delivery, or 1-week trial partnership." />
              </h2>
              <p className={f.lede}>
                Tell us what your agency, consultancy, or studio focuses on. A founder will reply within one business day—starting with a mutual NDA whenever a live client brief is on the table.
              </p>
              <p className={f.note}>
                Direct email: <a href={`mailto:${site.email}`} style={{ color: 'var(--vd-ink)', fontWeight: 600 }}>{site.email}</a>
              </p>
            </div>

            <InquiryForm variant="partner" />
          </div>
        </div>
      </section>
    </>
  );
}
