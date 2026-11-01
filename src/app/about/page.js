import { PageHero, Section, TwoCol, Rows, MoreLinks, CtaBand } from '@/components/page/Page';
import { Words } from '@/components/page/Page';
import { about } from '@/content/pages';
import { home } from '@/content/home';

export const metadata = {
  title: 'About',
  description: about.hero.lede,
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  const { hero, story, principles } = about;
  return (
    <>
      <PageHero crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]} eyebrow={hero.eyebrow} title={hero.title} lede={hero.lede} />
      <Section tone="surface" eyebrow="Our story">
        <TwoCol>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3rem)', lineHeight: 1.1, maxWidth: '16ch', fontWeight: 500, margin: 0 }}><Words text={story.title} /></h2>
          <div>
            {story.body.map((t) => (
              <p key={t} style={{ margin: '0 0 1.25rem', color: 'var(--vd-graphite)', fontSize: '1.1rem', maxWidth: '60ch' }}>{t}</p>
            ))}
          </div>
        </TwoCol>
      </Section>
      <Section eyebrow="Principles" title={principles.title}>
        <Rows items={principles.items} />
      </Section>
      <Section tone="surface" eyebrow="What we build" title="Four practice areas">
        <MoreLinks items={home.practices.map((p) => ({ href: `/services/${p.id}`, label: p.title }))} />
      </Section>
      <CtaBand />
    </>
  );
}
