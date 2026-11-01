import { Fragment } from 'react';
import LinkButton from '@/components/ui/LinkButton';
import Reveal from '@/components/ui/Reveal';
import { LOGO_PATHS, logoViewBox } from '@/components/brand/Logo';
import { home } from '@/content/home';
import { site, ctaHref } from '@/content/site';
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

// Node positions around the centre. `up` puts the label above the dot.
const POS = [
  { x: 56, y: 96, a: 'start', up: true },
  { x: 424, y: 96, a: 'end', up: true },
  { x: 56, y: 384, a: 'start', up: false },
  { x: 424, y: 384, a: 'end', up: false },
];

function Diagram({ items }) {
  return (
    <svg className={s.diagram} viewBox="0 0 480 480" fill="none" aria-hidden="true">
      <circle className={s.orbit} cx="240" cy="240" r="200" stroke="#D9D3C7" strokeWidth="1" strokeDasharray="2 7" />
      {[70, 135].map((r, i) => (
        <circle key={r} className={s.ring} style={{ animationDelay: `${i * 0.2}s` }} cx="240" cy="240" r={r} stroke="#D9D3C7" strokeWidth="1" />
      ))}
      {items.map((it, i) => {
        const p = POS[i];
        const d = 0.5 + i * 0.18;
        const ly = p.up ? p.y - 34 : p.y + 30;
        return (
          <g key={it.label}>
            <line className={s.draw} pathLength="1" style={{ animationDelay: `${d}s` }} x1="240" y1="240" x2={p.x} y2={p.y} stroke="#101418" strokeWidth="1" />
            <circle className={s.pulse} style={{ animationDelay: `${d + 1.2}s` }} cx={p.x} cy={p.y} r="5" stroke="#C93D20" strokeWidth="1.5" />
            <circle className={s.dot} style={{ animationDelay: `${d + 0.9}s` }} cx={p.x} cy={p.y} r="5" fill="#C93D20" />
            <g className={s.tx} style={{ animationDelay: `${d + 1}s` }}>
              <text x={p.x} y={ly} textAnchor={p.a} fontFamily="var(--vd-font-mono), monospace" fontSize="12.5" letterSpacing="0.4" fill="#101418">
                {it.n}  {it.label}
              </text>
              <text x={p.x} y={ly + 17} textAnchor={p.a} fontFamily="var(--vd-font-sans), sans-serif" fontSize="12.5" fill="#5B636B">
                {it.sub}
              </text>
            </g>
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
  );
}

export function Hero() {
  const h = home.hero;
  return (
    <section className={s.hero}>
      <div className="vd-container">
        <div className={s.heroGrid}>
          <div>
            <p className={s.eyebrow}>{h.eyebrow}</p>
            <h1 className={s.h1}><Words text={h.title} /></h1>
            <p className={s.lede}>{h.lede}</p>
            <div className={s.actions}>
              <LinkButton href={ctaHref}>{h.primary}</LinkButton>
              <LinkButton href={h.secondary.href} variant="quiet">{h.secondary.label}</LinkButton>
            </div>
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
            Sources: {p.sources.map((x, i) => (
              <span key={x.href}>{i > 0 && ' · '}<a href={x.href} target="_blank" rel="noopener noreferrer">{x.label}</a></span>
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
              <h3 className={s.rowTitle}>{p.title}</h3>
              <p className={s.rowText}>{p.summary}</p>
              <p className={s.trigger}>“{p.trigger}”</p>
              {p.note && <p className={s.note}>{p.note}</p>}
            </div>
            <ul className={s.covers}>{p.covers.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
        ))}
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
    <Section id="work" tone="surface" eyebrow="Work" title={p.title}>
      <p className={s.intro}>{p.intro}</p>
      <Reveal>
        {p.items.map((it) => (
          <div key={it.name} className={s.item}>
            <h3 className={s.itemName}>
              {it.name}
              <span className={`${s.pill} ${it.status === 'Live' ? s.pillLive : ''}`}>{it.status}</span>
            </h3>
            <span className={s.itemPractice}>{label[it.practice]}</span>
            <p className={s.itemText}>{it.summary}</p>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}

export function Ladder() {
  const l = home.ladder;
  return (
    <Section eyebrow="Engagement" title={l.title}>
      <Reveal className={s.cols3}>
        {l.steps.map((st) => (
          <div key={st.n} className={s.col}>
            <p className={s.meta}>{st.n} · {st.time}</p>
            <h3 className={s.colName}>{st.name}</h3>
            <p className={s.price}>{st.price}</p>
            <p className={s.rowText}>{st.body}</p>
            {st.cta && <LinkButton href={st.cta.href} variant="quiet">{st.cta.label}</LinkButton>}
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
          <LinkButton href={ctaHref}>{home.hero.primary}</LinkButton>
          <LinkButton href={`mailto:${site.email}`} variant="quiet">{site.email}</LinkButton>
        </div>
      </Reveal>
    </Section>
  );
}
