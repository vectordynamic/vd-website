import { PageHero, Section, Steps, Rows, CtaBand } from '@/components/page/Page';
import LinkButton from '@/components/ui/LinkButton';
import Reveal from '@/components/ui/Reveal';
import { howWeWork } from '@/content/pages';
import { bookHref, auditHref } from '@/content/site';
import s from './how.module.css';

export const metadata = {
  title: 'How We Work — Delivery Standard, IP & Engineering Pods',
  description: howWeWork.hero.lede,
  alternates: { canonical: '/how-we-work' },
};

export default function HowWeWorkPage() {
  const { hero, phases, sampleReport, timezone, security, pods } = howWeWork;

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'How we work' }]}
        eyebrow={hero.eyebrow}
        title={hero.title}
        lede={hero.lede}
      >
        <LinkButton href={bookHref} event="cta_click" eventParams={{ location: 'how_hero_book' }}>
          Book a 30-minute discovery call
        </LinkButton>
        <LinkButton href={auditHref} variant="quiet" event="cta_click" eventParams={{ location: 'how_hero_audit' }}>
          Start with a free written review
        </LinkButton>
      </PageHero>

      <Section eyebrow="Five-Stage Delivery" title="From first workflow trace to production handover">
        <Reveal className={s.phases}>
          {phases.map((p) => (
            <div key={p.num} className={s.phaseRow}>
              <span className={s.phaseNum}>{p.num}</span>
              <div>
                <h3 className={s.phaseName}>{p.name}</h3>
                <p className={s.phaseTiming}>{p.timing}</p>
              </div>
              <div className={s.phaseRight}>
                <p className={s.phaseSummary}>{p.summary}</p>
                <div className={s.deliverableBox}>
                  <strong>Concrete Deliverable</strong>
                  {p.deliverable}
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </Section>

      <Section tone="surface" eyebrow={sampleReport.eyebrow} title={sampleReport.title} intro={sampleReport.intro}>
        <Reveal className={s.reportCard}>
          <p className={s.reportMeta}>{sampleReport.meta}</p>
          <div className={s.reportBlocks}>
            {sampleReport.blocks.map((b) => (
              <div key={b.label} className={s.reportBlock}>
                <span className={s.reportLabel}>{b.label}</span>
                <p className={s.reportText}>{b.text.trim()}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section tone="ink" eyebrow={timezone.eyebrow} title={timezone.title}>
        <Steps items={timezone.points} />
      </Section>

      <Section eyebrow={security.eyebrow} title={security.title}>
        <Rows items={security.items} />
      </Section>

      <Section id="pods" tone="surface" eyebrow={pods.eyebrow} title={pods.title} intro={pods.intro}>
        <Reveal className={s.tableWrap}>
          <table className={s.podTable}>
            <thead>
              <tr>
                <th scope="col">Comparison</th>
                <th scope="col">Traditional In-House Hiring</th>
                <th scope="col">Vector Dynamic Engineering Pod</th>
              </tr>
            </thead>
            <tbody>
              {pods.rows.map((r) => (
                <tr key={r.dimension}>
                  <th scope="row">{r.dimension}</th>
                  <td className={s.hiringCell}>{r.hiring}</td>
                  <td className={s.podCell}>{r.pod}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <div className={s.podActions}>
          <LinkButton href={bookHref} event="cta_click" eventParams={{ location: 'how_pods_book' }}>
            Discuss a dedicated pod or sprint
          </LinkButton>
          <LinkButton href="/work" variant="quiet">
            Review systems built by our engineers
          </LinkButton>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

