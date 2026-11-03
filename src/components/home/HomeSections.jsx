import { Fragment } from 'react';
import Link from 'next/link';
import LinkButton from '@/components/ui/LinkButton';
import Reveal from '@/components/ui/Reveal';
import { LOGO_PATHS, logoViewBox } from '@/components/brand/Logo';
import { home } from '@/content/home';
import { industries } from '@/content/industries';
import { site, auditHref } from '@/content/site';
import s from './home.module.css';

// Splits a heading into words that slide up out of a mask. Text stays intact for SEO and screen readers.
const Words = ({ text }) =>
  text.split(' ').map((w, i) => (
    <Fragment key={i}>
      <span className={s.word}><span className={s.wordIn} style={{ '--w': i }}>{w}</span></span>{' '}
    </Fragment>
  ));

const Section = ({ id, tone = '', eyebrow, title, children }) => (
  <section id={id} className={`${s.section} ${tone ? s[tone] : ''}`}>
    <div className="vd-container">
      {(eyebrow || title) && (
        <Reveal>
          {eyebrow && <p className={s.eyebrow}>{eyebrow}</p>}
          {title && <h2 className={s.h2}><Words text={title} /></h2>}
        </Reveal>
      )}
      {children}
    </div>
  </section>
);

// Node positions around the center (in 480x480 SVG coordinates).
// Left/right sit at 6.67% / 93.33% and top/bottom sit at 27.5% / 72.5% so wrapped HTML labels
// have generous vertical headroom and a guaranteed center gutter that never collides.
const POS = [
  { x: 32, y: 132, side: 'left', v: 'top' },
  { x: 448, y: 132, side: 'right', v: 'top' },
  { x: 32, y: 348, side: 'left', v: 'bottom' },
  { x: 448, y: 348, side: 'right', v: 'bottom' },
];

function Diagram({ items }) {
  return (
    <div className={s.diagramWrap}>
      <svg className={s.diagram} viewBox="0 0 480 480" fill="none" aria-hidden="true">
        <circle className={s.orbit} cx="240" cy="240" r="188" stroke="#D9D3C7" strokeWidth="1" strokeDasharray="2 7" />
        {[68, 128].map((r, i) => (
          <circle key={r} className={s.ring} style={{ animationDelay: `${i * 0.2}s` }} cx="240" cy="240" r={r} stroke="#D9D3C7" strokeWidth="1" />
        ))}
        {items.map((it, i) => {
          const p = POS[i];
          const d = 0.5 + i * 0.18;
          return (
            <g key={it.label}>
              <line className={s.draw} pathLength="1" style={{ animationDelay: `${d}s` }} x1="240" y1="240" x2={p.x} y2={p.y} stroke="#101418" strokeWidth="1" />
              <circle className={s.pulse} style={{ animationDelay: `${d + 1.2}s` }} cx={p.x} cy={p.y} r="5" stroke="#C93D20" strokeWidth="1.5" />
              <circle className={s.dot} style={{ animationDelay: `${d + 0.9}s` }} cx={p.x} cy={p.y} r="5" fill="#C93D20" />
            </g>
          );
        })}
        <g className={s.core}>
          <circle cx="240" cy="240" r="46" fill="#101418" />
          <svg x="212" y="212" width="56" height="56" viewBox={logoViewBox(1.15)} fill="#F6F3EC">
            {LOGO_PATHS.map((d) => <path key={d} d={d} />)}
          </svg>
        </g>
      </svg>

      {items.map((it, i) => {
        const p = POS[i];
        const d = 0.5 + i * 0.18;
        return (
          <Link
            key={it.label}
            href={it.href || '/services'}
            className={`${s.diagramNode} ${p.side === 'right' ? s.nodeRight : s.nodeLeft} ${p.v === 'top' ? s.nodeTop : s.nodeBottom}`}
            style={{ animationDelay: `${d + 0.95}s` }}
          >
            <span className={s.nodeTitle}>{it.n}{'\u00A0\u00A0'}{it.label}</span>
            <span className={s.nodeSub}>{it.sub}</span>
          </Link>
        );
      })}
    </div>
  );
}

export function Hero() {
  const h = home.hero;
  return (
    <section className={s.hero}>
      <div className="vd-container">
        <div className={s.heroGrid}>
          <div className={s.heroCopy}>
            <p className={s.eyebrow}>{h.eyebrow}</p>
            <h1 className={s.h1}><Words text={h.title} /></h1>
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
            {site.demoVideoUrl && (
              <p className={s.videoLinkRow}>
                <a
                  href={site.demoVideoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.videoLink}
                >
                  ▶ Watch 2-minute engineering walkthrough
                </a>
              </p>
            )}
          </div>
          <Diagram items={h.diagram} />
        </div>
        <ul className={`${s.facts} ${s.fadeIn}`}>
          {h.facts.map((f) => <li key={f}>{f}</li>)}
        </ul>
      </div>
    </section>
  );
}

export function Problem() {
  const p = home.problem;
  return (
    <Section>
      <Reveal className={s.twoCol}>
        <h2 className={s.h2}><Words text={p.title} /></h2>
        <div className={s.body}>
          {p.body.map((t) => <p key={t}>{t}</p>)}
          <p className={s.sources}>
            Sources:{' '}
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

export function Practices() {
  return (
    <Section id="services" eyebrow="What we build" title="Four practice areas. One standard of engineering.">
      <Reveal>
        {home.practices.map((p, i) => (
          <div key={p.id} className={s.row}>
            <span className={s.num}>0{i + 1}</span>
            <div>
              <h3 className={s.rowTitle}>
                <Link href={`/services/${p.id}`} className={s.rowLink}>{p.title}</Link>
              </h3>
              <p className={s.rowText}>{p.summary}</p>
              <p className={s.trigger}>“{p.trigger}”</p>
              {p.note && <p className={s.note}>{p.note}</p>}
              <div className={s.rowAction}>
                <LinkButton href={`/services/${p.id}`} variant="quiet">
                  Explore {p.title}
                </LinkButton>
              </div>
            </div>
            <ul className={s.covers}>{p.covers.map((c) => <li key={c}>{c}</li>)}</ul>
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

export function AiBand() {
  const a = home.aiBand;
  return (
    <Section tone="ink" eyebrow={a.eyebrow} title={a.title}>
      <p className={s.aiLede}>{a.lede}</p>
      <Reveal className={s.aiCols}>
        {a.points.map((pt) => (
          <div key={pt.name} className={s.aiCol}>
            <h3>{pt.name}</h3>
            <p>{pt.text}</p>
          </div>
        ))}
      </Reveal>
      <Reveal className={s.chips}>
        {a.tools.map((t) => <span key={t} className={s.chip}>{t}</span>)}
      </Reveal>
    </Section>
  );
}

export function Portfolio() {
  const p = home.portfolio;
  const label = Object.fromEntries(home.practices.map((x) => [x.id, x.title]));
  return (
    <Section id="work" tone="surface" eyebrow="Work & Case Studies" title={p.title}>
      <p className={s.intro}>{p.intro}</p>
      <Reveal>
        {p.items.map((it) => (
          <Link key={it.slug} href={`/work/${it.slug}`} className={s.item}>
            <h3 className={s.itemName}>
              {it.name}
              <span className={`${s.pill} ${it.isLive ? s.pillLive : ''}`}>{it.status}</span>
            </h3>
            <span className={s.itemPractice}>{label[it.practice]}</span>
            <p className={s.itemText}>{it.summary}</p>
          </Link>
        ))}
      </Reveal>
      <div className={s.sectionFoot}>
        <LinkButton href="/work" variant="quiet">
          Explore all system architectures & case studies
        </LinkButton>
      </div>
    </Section>
  );
}

export function Ladder() {
  const l = home.ladder;
  return (
    <Section eyebrow="Engagement" title={l.title}>
      {l.intro && <p className={s.intro}>{l.intro}</p>}
      <Reveal className={s.cols3}>
        {l.steps.map((st) => (
          <div key={st.n} className={s.col}>
            <p className={s.meta}>{st.n} · {st.time}</p>
            <h3 className={s.colName}>{st.name}</h3>
            <p className={s.price}>{st.price}</p>
            <p className={s.rowText}>{st.body}</p>
            {st.cta && (
              <LinkButton
                href={st.cta.href}
                variant="quiet"
                event="cta_click"
                eventParams={{ location: `home_ladder_${st.n}` }}
              >
                {st.cta.label}
              </LinkButton>
            )}
          </div>
        ))}
      </Reveal>
    </Section>
  );
}

export function Process() {
  const p = home.process;
  return (
    <Section id="process" tone="surface" eyebrow="Process" title={p.title}>
      <p className={s.intro}>{p.note}</p>
      <Reveal className={s.cols4}>
        {p.steps.map((st, i) => (
          <div key={st.name} className={s.step}>
            <p className={s.meta}>Phase 0{i + 1}</p>
            <h3 className={s.stepName}>{st.name}</h3>
            <p>{st.out}</p>
          </div>
        ))}
      </Reveal>
      <div className={s.sectionFoot}>
        <LinkButton href="/how-we-work" variant="quiet">
          See full delivery standard, sample Friday report & dedicated pods
        </LinkButton>
      </div>
    </Section>
  );
}

export function Engineering() {
  const e = home.engineering;
  return (
    <Section tone="ink" eyebrow="Engineering">
      <Reveal className={s.twoCol}>
        <h2 className={s.h2}><Words text={e.title} /></h2>
        <ul className={s.points}>
          {e.points.map((t, i) => <li key={t}><span>0{i + 1}</span>{t}</li>)}
        </ul>
      </Reveal>
    </Section>
  );
}

export function Commitments() {
  const c = home.commitments;
  return (
    <Section eyebrow="Commitments" title={c.title}>
      <Reveal className={s.grid3}>
        {c.items.map((t, i) => <div key={t} className={s.commit}><span>0{i + 1}</span>{t}</div>)}
      </Reveal>
    </Section>
  );
}

export function Fit() {
  const f = home.fit;
  return (
    <Section tone="surface" eyebrow="Fit" title={f.title}>
      <Reveal className={s.twoCol}>
        <div>
          <h3 className={s.listH}>A good fit</h3>
          <ul className={`${s.list} ${s.good}`}>{f.good.map((t) => <li key={t}><b>+</b>{t}</li>)}</ul>
        </div>
        <div>
          <h3 className={s.listH}>Not a fit</h3>
          <ul className={`${s.list} ${s.bad}`}>{f.bad.map((t) => <li key={t}><b>–</b>{t}</li>)}</ul>
        </div>
      </Reveal>
    </Section>
  );
}

export function Leadership() {
  if (!site.founders || site.founders.length === 0) return null;
  return (
    <Section eyebrow="Leadership" title="You work directly with the engineers who lead the company.">
      <Reveal className={s.founderGrid}>
        {site.founders.map((f) => (
          <div key={f.name} className={s.founderCard}>
            <p className={s.meta}>{f.role}</p>
            <h3 className={s.colName}>{f.name}</h3>
            {f.bio && <p className={s.rowText}>{f.bio}</p>}
            {f.linkedin && (
              <a href={f.linkedin} target="_blank" rel="noopener noreferrer" className={s.founderLink}>
                LinkedIn ↗
              </a>
            )}
          </div>
        ))}
      </Reveal>
    </Section>
  );
}

export function Faq() {
  const f = home.faq;
  return (
    <Section eyebrow="FAQ" title={f.title}>
      <Reveal className={s.faq}>
        {f.items.map((it) => (
          <details key={it.q}>
            <summary>{it.q}</summary>
            <p>{it.a}</p>
          </details>
        ))}
      </Reveal>
    </Section>
  );
}

export function Closing() {
  const c = home.closing;
  return (
    <Section tone="surface">
      <Reveal className={s.closing}>
        <h2 className={s.h2}>{c.title}</h2>
        <p>{c.body}</p>
        <div className={s.actions}>
          <LinkButton
            href={home.hero.primary.href}
            event="cta_click"
            eventParams={{ location: 'home_closing_primary' }}
          >
            {home.hero.primary.label}
          </LinkButton>
          <LinkButton
            href={auditHref}
            variant="outline"
            event="cta_click"
            eventParams={{ location: 'home_closing_audit' }}
          >
            Request a free written review
          </LinkButton>
          <LinkButton href={`mailto:${site.email}`} variant="quiet">{site.email}</LinkButton>
        </div>
      </Reveal>
    </Section>
  );
}
