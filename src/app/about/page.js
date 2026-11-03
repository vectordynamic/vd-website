import { PageHero, Section, TwoCol, Rows, Steps, MoreLinks, CtaBand, Words } from '@/components/page/Page';
import LinkButton from '@/components/ui/LinkButton';
import Reveal from '@/components/ui/Reveal';
import { about } from '@/content/pages';
import { home } from '@/content/home';
import { site, bookHref } from '@/content/site';

export const metadata = {
  title: 'About Vector Dynamic',
  description: about.hero.lede,
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  const { hero, story, principles, global } = about;

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
        eyebrow={hero.eyebrow}
        title={hero.title}
        lede={hero.lede}
      >
        <LinkButton href={bookHref} event="cta_click" eventParams={{ location: 'about_hero_book' }}>
          Book a 30-minute discovery call
        </LinkButton>
        <LinkButton href="/work" variant="quiet">
          Inspect systems we built
        </LinkButton>
      </PageHero>

      <Section tone="surface" eyebrow="Our Story">
        <TwoCol>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3rem)', lineHeight: 1.1, maxWidth: '16ch', fontWeight: 500, margin: 0 }}>
            <Words text={story.title} />
          </h2>
          <div>
            {story.body.map((t) => (
              <p key={t} style={{ margin: '0 0 1.25rem', color: 'var(--vd-graphite)', fontSize: '1.1rem', maxWidth: '60ch' }}>
                {t}
              </p>
            ))}
          </div>
        </TwoCol>
      </Section>

      <Section eyebrow="Principles" title={principles.title}>
        <Rows items={principles.items} />
      </Section>

      <Section tone="ink" eyebrow={global.eyebrow} title={global.title}>
        <Steps items={global.items} />
      </Section>

      {site.founders && site.founders.length > 0 && (
        <Section eyebrow="Leadership" title="Engineers you speak with directly">
          <Reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {site.founders.map((f) => (
              <div key={f.name} style={{ borderTop: '1px solid var(--vd-ink)', paddingTop: '1.25rem' }}>
                <p style={{ fontFamily: 'var(--vd-font-mono), monospace', fontSize: '0.8rem', color: 'var(--vd-muted)', margin: '0 0 0.4rem' }}>
                  {f.role}
                </p>
                <h3 style={{ fontSize: '1.5rem', margin: '0 0 0.75rem' }}>{f.name}</h3>
                {f.bio && <p style={{ color: 'var(--vd-graphite)', margin: '0 0 0.75rem' }}>{f.bio}</p>}
                {f.linkedin && (
                  <a href={f.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--vd-font-mono), monospace', fontSize: '0.82rem', color: 'var(--vd-signal)' }}>
                    LinkedIn ↗
                  </a>
                )}
              </div>
            ))}
          </Reveal>
        </Section>
      )}

      <Section tone="surface" eyebrow="What We Build" title="Four practice areas">
        <MoreLinks items={home.practices.map((p) => ({ href: `/services/${p.id}`, label: p.title }))} />
      </Section>

      <CtaBand />
    </>
  );
}
