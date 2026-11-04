import Image from 'next/image';
import Link from 'next/link';
import LinkButton from '@/components/ui/LinkButton';
import Reveal from '@/components/ui/Reveal';
import { LOGO_PATHS, logoViewBox } from '@/components/brand/Logo';
import { home } from '@/content/home';
import { industries } from '@/content/industries';
import { site } from '@/content/site';
import s from './home.module.css';

// Node positions around the center in 480x480 coordinate space.
// Left nodes start at x: 56, Right nodes end at x: 424.
// Top dots sit at y: 118 with text above. Bottom dots sit at y: 362 with text below.
const POS = [
  { x: 56, y: 118, a: 'start', up: true },
  { x: 424, y: 118, a: 'end', up: true },
  { x: 56, y: 362, a: 'start', up: false },
  { x: 424, y: 362, a: 'end', up: false },
];

const DIAGRAM_LINES = {
  Software: ['Custom platforms,', 'apps and APIs'],
  'Business Systems': ['ERP, CRM and', 'operations in one place'],
  'Applied AI': ['Assistants, agents', 'and knowledge base'],
  Automation: ['Repetitive manual', 'work, handled'],
};

function Diagram({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <div className={s.diagramWrap} aria-label="Vector Dynamic four practice areas diagram">
      <svg className={s.diagram} viewBox="0 0 480 480" fill="none" role="img">
        <circle className={s.orbit} cx="240" cy="240" r="188" stroke="#D9D3C7" strokeWidth="1" strokeDasharray="3 8" />
        {[68, 128].map((r, i) => (
          <circle key={r} className={s.ring} style={{ animationDelay: `${i * 0.4}s` }} cx="240" cy="240" r={r} stroke="#D9D3C7" strokeWidth="1" />
        ))}
        {items.map((it, i) => {
          const p = POS[i];
          const d = 0.4 + i * 0.15;
          const ly = p.up ? p.y - 48 : p.y + 28;
          const lines = DIAGRAM_LINES[it.label] || [it.sub];

          return (
            <a
              key={it.label}
              href={it.href || '/services'}
              className={s.diagramLink}
              aria-label={`${it.n} ${it.label}: ${it.sub}`}
            >
              <line
                className={s.draw}
                pathLength="1"
                style={{ animationDelay: `${d}s` }}
                x1="240"
                y1="240"
                x2={p.x}
                y2={p.y}
                stroke="#101418"
                strokeWidth="1.25"
              />
              <circle
                className={s.pulse}
                style={{ animationDelay: `${d + 0.8}s` }}
                cx={p.x}
                cy={p.y}
                r="6"
                stroke="#C93D20"
                strokeWidth="1.5"
                fill="none"
              />
              <circle
                className={s.dot}
                style={{ animationDelay: `${d + 0.4}s` }}
                cx={p.x}
                cy={p.y}
                r="5"
                fill="#C93D20"
              />
              <g className={s.diagramTx} style={{ animationDelay: `${d + 0.6}s` }}>
                <text
                  className={s.diagramNodeTitle}
                  x={p.x}
                  y={ly}
                  textAnchor={p.a}
                  fontFamily="var(--vd-font-mono), monospace"
                  fontSize="12.5"
                  letterSpacing="0.4"
                  fill="#101418"
                  fontWeight="600"
                >
                  {it.n}{'\u00A0\u00A0'}{it.label}
                </text>
                <text
                  className={s.diagramNodeSub}
                  x={p.x}
                  y={ly + 17}
                  textAnchor={p.a}
                  fontFamily="var(--vd-font-sans), sans-serif"
                  fontSize="12"
                  fill="#5B636B"
                >
                  {lines.map((ln, idx) => (
                    <tspan key={idx} x={p.x} dy={idx === 0 ? 0 : 15}>
                      {ln}
                    </tspan>
                  ))}
                </text>
              </g>
            </a>
          );
        })}
        <g className={s.core}>
          <circle cx="240" cy="240" r="46" fill="#101418" />
          <svg x="212" y="212" width="56" height="56" viewBox={logoViewBox(1.15)} fill="#F6F3EC">
            {LOGO_PATHS.map((d) => <path key={d} d={d} />)}
          </svg>
        </g>
      </svg>
    </div>
  );
}

const Section = ({ id, tone = '', eyebrow, title, lede, children }) => (
  <section id={id} className={`${s.section} ${tone ? s[tone] : ''}`}>
    <div className="vd-container">
      {(eyebrow || title || lede) && (
        <Reveal className={s.sectionHeader}>
          {eyebrow && <p className={s.eyebrow}>{eyebrow}</p>}
          {title && <h2 className={s.h2}>{title}</h2>}
          {lede && <p className={s.sectionLede}>{lede}</p>}
        </Reveal>
      )}
      {children}
    </div>
  </section>
);

export function Hero() {
  const h = home.hero;
  return (
    <section className={s.hero}>
      <div className="vd-container">
        <div className={s.heroGrid}>
          <div className={s.heroCopy}>
            <p className={s.eyebrow}>{h.eyebrow}</p>
            <h1 className={s.h1}>{h.title}</h1>
            <p className={s.lede}>{h.lede}</p>
            <div className={s.actions}>
              <LinkButton
                href={h.primary.href}
                event="cta_click"
                eventParams={{ location: 'home_hero_primary' }}
              >
                {h.primary.label}
              </LinkButton>
              <LinkButton
                href={h.secondary.href}
                variant="quiet"
                event="cta_click"
                eventParams={{ location: 'home_hero_secondary' }}
              >
                {h.secondary.label}
              </LinkButton>
            </div>
            <ul className={s.proofStrip}>
              {h.facts.map((item) => (
                <li key={item} className={s.proofItem}>
                  <span className={s.proofCheck} aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Diagram items={h.diagram} />
        </div>
      </div>
    </section>
  );
}

export function Problem() {
  const p = home.problem;
  return (
    <Section id="problem" eyebrow={p.eyebrow} title={p.title}>
      <Reveal className={s.twoCol}>
        <div className={s.problemLedeCol}>
          <p className={s.problemIntro}>
            {p.body[0]}
          </p>
        </div>
        <div className={s.problemDetailCol}>
          <p className={s.problemBodyText}>
            {p.body[1]}
          </p>
          <p className={s.sources}>
            Primary Evidence:{' '}
            {p.sources.map((x, i) => (
              <span key={x.href}>
                {i > 0 && ' · '}
                <a href={x.href} target="_blank" rel="noopener noreferrer">{x.label}</a>
              </span>
            ))}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

export function Guide() {
  const g = home.guide;
  return (
    <Section tone="ink" eyebrow={g.eyebrow} title={g.title}>
      <Reveal className={s.guideGrid}>
        {g.points.map((pt, i) => (
          <div key={pt.title} className={s.guideCard}>
            <span className={s.guideNum}>0{i + 1}</span>
            <h3 className={s.guideTitle}>{pt.title}</h3>
            <p className={s.guideBody}>{pt.body}</p>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}

export function Practices() {
  return (
    <Section
      id="services"
      eyebrow="Practice Areas"
      title="Four core engineering disciplines."
      lede="Architected for enterprise durability, data integrity, and institutional IP ownership."
    >
      <Reveal className={s.practiceRows}>
        {home.practices.map((p, i) => (
          <div key={p.id} className={s.practiceRow}>
            <span className={s.practiceNum}>0{i + 1}</span>
            <div className={s.practiceMain}>
              <h3 className={s.practiceRowTitle}>
                <Link href={p.href} className={s.practiceLink}>{p.title}</Link>
              </h3>
              <p className={s.practiceRowText}>{p.summary}</p>
              {p.trigger && <p className={s.trigger}>“{p.trigger}”</p>}
              {p.note && <p className={s.note}>{p.note}</p>}
              <div className={s.practiceAction}>
                <LinkButton href={p.href} variant="quiet">
                  Explore {p.title} →
                </LinkButton>
              </div>
            </div>
            {p.covers && (
              <ul className={s.covers}>
                {p.covers.map((c) => <li key={c}>{c}</li>)}
              </ul>
            )}
          </div>
        ))}
      </Reveal>
      <Reveal className={s.verticalBar}>
        <span className={s.verticalLabel}>Industry playbooks:</span>
        <div className={s.verticalLinks}>
          {industries.map((ind) => (
            <Link key={ind.slug} href={`/for/${ind.slug}`} className={s.verticalChip}>
              {ind.name} →
            </Link>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

export function FeaturedWork() {
  const fw = home.featuredWork;
  return (
    <Section
      id="work"
      tone="surface"
      eyebrow={fw.eyebrow}
      title={fw.title}
      lede={fw.lede}
    >
      <Reveal className={s.workGrid}>
        {fw.items.map((it) => (
          <Link key={it.slug} href={`/work/${it.slug}`} className={s.workCard}>
            <div className={s.workImageFrame}>
              <Image
                src={it.image}
                alt={it.alt}
                width={1200}
                height={670}
                sizes="(max-width: 768px) 100vw, 33vw"
                className={s.workImage}
              />
            </div>
            <div className={s.workContent}>
              <div className={s.workMeta}>
                <span className={s.workCategory}>{it.category}</span>
                <span className={`${s.pill} ${it.status.includes('Live') ? s.pillLive : ''}`}>
                  {it.status}
                </span>
              </div>
              <h3 className={s.workName}>{it.name}</h3>
              <p className={s.workSummary}>{it.summary}</p>
            </div>
          </Link>
        ))}
      </Reveal>
      <div className={s.sectionFoot}>
        <LinkButton href={fw.viewAll.href} variant="quiet">
          {fw.viewAll.label} →
        </LinkButton>
      </div>
    </Section>
  );
}

export function Plan() {
  const pl = home.plan;
  return (
    <Section id="plan" eyebrow={pl.eyebrow} title={pl.title}>
      <Reveal className={s.planGrid}>
        {pl.steps.map((st) => (
          <div key={st.num} className={s.planCard}>
            <div className={s.planTop}>
              <span className={s.cardNum}>{st.num}</span>
              <span className={s.planTime}>{st.time}</span>
            </div>
            <h3 className={s.planName}>{st.name}</h3>
            <p className={s.planScope}>{st.scope}</p>
            <p className={s.planBody}>{st.body}</p>
            <div className={s.planAction}>
              <LinkButton
                href={st.href}
                variant="quiet"
                event="cta_click"
                eventParams={{ location: `home_plan_${st.num}` }}
              >
                {st.cta} →
              </LinkButton>
            </div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}

export function Faq() {
  const f = home.faq;
  return (
    <Section id="faq" eyebrow={f.eyebrow} title={f.title}>
      <Reveal className={s.faqList}>
        {f.items.map((it) => (
          <details key={it.q} className={s.faqItem}>
            <summary className={s.faqSummary}>
              <span>{it.q}</span>
              <span className={s.faqIcon} aria-hidden="true">+</span>
            </summary>
            <p className={s.faqAnswer}>{it.a}</p>
          </details>
        ))}
      </Reveal>
      {f.moreLink && (
        <div className={s.sectionFoot}>
          <Link href={f.moreLink.href} className={s.moreLink}>
            {f.moreLink.label} →
          </Link>
        </div>
      )}
    </Section>
  );
}

export function Closing() {
  const c = home.closing;
  return (
    <Section tone="surface">
      <Reveal className={s.closing}>
        <h2 className={s.h2}>{c.title}</h2>
        <p className={s.closingLede}>{c.lede}</p>
        <div className={s.actions}>
          <LinkButton
            href={c.primary.href}
            event="cta_click"
            eventParams={{ location: 'home_closing_primary' }}
          >
            {c.primary.label}
          </LinkButton>
          <LinkButton
            href={c.secondary.href}
            variant="outline"
            event="cta_click"
            eventParams={{ location: 'home_closing_secondary' }}
          >
            {c.secondary.label}
          </LinkButton>
          <LinkButton href={`mailto:${site.email}`} variant="quiet">
            {site.email}
          </LinkButton>
        </div>
      </Reveal>
    </Section>
  );
}
