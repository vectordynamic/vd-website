import LinkButton from '@/components/ui/LinkButton';
import { LOGO_PATHS } from '@/components/brand/Logo';
import { home } from '@/content/home';
import { site, ctaHref } from '@/content/site';
import s from './home.module.css';

const Section = ({ id, tone = '', eyebrow, title, children, narrow }) => (
  <section id={id} className={`${s.section} ${tone ? s[tone] : ''}`}>
    <div className="vd-container">
      {eyebrow && <p className={s.eyebrow}>{eyebrow}</p>}
      {title && <h2 className={s.h2}>{title}</h2>}
      {children}
    </div>
  </section>
);

const NODES = [
  { x: 60, y: 70, t: '01  Software', a: 'start' },
  { x: 420, y: 70, t: '02  ERP', a: 'end' },
  { x: 60, y: 410, t: '03  AI', a: 'start' },
  { x: 420, y: 410, t: '04  Automation', a: 'end' },
];

function Diagram() {
  return (
    <svg className={s.diagram} viewBox="0 0 480 480" fill="none" aria-hidden="true">
      {[70, 130, 190].map((r) => (
        <circle key={r} cx="240" cy="240" r={r} stroke="#D9D3C7" strokeWidth="1" />
      ))}
      {NODES.map((n) => (
        <g key={n.t}>
          <line x1="240" y1="240" x2={n.x} y2={n.y} stroke="#101418" strokeWidth="1" />
          <circle cx={n.x} cy={n.y} r="5" fill="#C93D20" />
          <text x={n.x + (n.a === 'start' ? 0 : 0)} y={n.y + (n.y < 240 ? -18 : 28)} textAnchor={n.a} fontFamily="var(--vd-font-mono), monospace" fontSize="13" fill="#101418" letterSpacing="0.5">{n.t}</text>
        </g>
      ))}
      <circle cx="240" cy="240" r="46" fill="#101418" />
      <svg x="212" y="212" width="56" height="56" viewBox="30 8 50 50" fill="#F6F3EC">
        {LOGO_PATHS.map((d) => <path key={d} d={d} />)}
      </svg>
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
            <h1 className={s.h1}>{h.title}</h1>
            <p className={s.lede}>{h.lede}</p>
            <div className={s.actions}>
              <LinkButton href={ctaHref}>{h.primary}</LinkButton>
              <LinkButton href={h.secondary.href} variant="quiet">{h.secondary.label}</LinkButton>
            </div>
          </div>
          <Diagram />
        </div>
        <ul className={s.facts}>
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
      <div className={s.twoCol}>
        <h2 className={s.h2}>{p.title}</h2>
        <div className={s.body}>
          {p.body.map((t) => <p key={t}>{t}</p>)}
          <p className={s.sources}>
            Sources: {p.sources.map((x, i) => (
              <span key={x.href}>{i > 0 && ' · '}<a href={x.href} target="_blank" rel="noopener noreferrer">{x.label}</a></span>
            ))}
          </p>
        </div>
      </div>
    </Section>
  );
}

export function Practices() {
  return (
    <Section id="services" eyebrow="What we build" title="Four practice areas. One standard of engineering.">
      <div>
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
      </div>
    </Section>
  );
}

export function Portfolio() {
  const p = home.portfolio;
  const label = Object.fromEntries(home.practices.map((x) => [x.id, x.title]));
  return (
    <Section id="work" tone="surface" eyebrow="Work" title={p.title}>
      <p className={s.intro}>{p.intro}</p>
      <div>
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
      </div>
    </Section>
  );
}

export function Ladder() {
  const l = home.ladder;
  return (
    <Section eyebrow="Engagement" title={l.title}>
      <div className={s.cols3}>
        {l.steps.map((st) => (
          <div key={st.n} className={s.col}>
            <p className={s.meta}>{st.n} · {st.time}</p>
            <h3 className={s.colName}>{st.name}</h3>
            <p className={s.price}>{st.price}</p>
            <p className={s.rowText}>{st.body}</p>
            {st.cta && <LinkButton href={st.cta.href} variant="quiet">{st.cta.label}</LinkButton>}
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Process() {
  const p = home.process;
  return (
    <Section id="process" tone="surface" eyebrow="Process" title={p.title}>
      <div className={s.cols4}>
        {p.steps.map((st, i) => (
          <div key={st.name} className={s.step}>
            <p className={s.meta}>0{i + 1} · {st.time}</p>
            <h3 className={s.stepName}>{st.name}</h3>
            <p>{st.out}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Engineering() {
  const e = home.engineering;
  return (
    <Section tone="ink" eyebrow="Engineering">
      <div className={s.twoCol}>
        <h2 className={s.h2}>{e.title}</h2>
        <ul className={s.points}>
          {e.points.map((t, i) => <li key={t}><span>0{i + 1}</span>{t}</li>)}
        </ul>
      </div>
    </Section>
  );
}

export function Commitments() {
  const c = home.commitments;
  return (
    <Section eyebrow="Commitments" title={c.title}>
      <div className={s.grid3}>
        {c.items.map((t, i) => <div key={t} className={s.commit}><span>0{i + 1}</span>{t}</div>)}
      </div>
    </Section>
  );
}

export function Fit() {
  const f = home.fit;
  return (
    <Section tone="surface" eyebrow="Fit" title={f.title}>
      <div className={s.twoCol}>
        <div>
          <h3 className={s.listH}>A good fit</h3>
          <ul className={`${s.list} ${s.good}`}>{f.good.map((t) => <li key={t}><b>+</b>{t}</li>)}</ul>
        </div>
        <div>
          <h3 className={s.listH}>Not a fit</h3>
          <ul className={`${s.list} ${s.bad}`}>{f.bad.map((t) => <li key={t}><b>–</b>{t}</li>)}</ul>
        </div>
      </div>
    </Section>
  );
}

export function Faq() {
  const f = home.faq;
  return (
    <Section eyebrow="FAQ" title={f.title}>
      <div className={s.faq}>
        {f.items.map((it) => (
          <details key={it.q}>
            <summary>{it.q}</summary>
            <p>{it.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

export function Closing() {
  const c = home.closing;
  return (
    <Section tone="surface">
      <div className={s.closing}>
        <h2 className={s.h2}>{c.title}</h2>
        <p>{c.body}</p>
        <div className={s.actions}>
          <LinkButton href={ctaHref}>{home.hero.primary}</LinkButton>
          <LinkButton href={`mailto:${site.email}`} variant="quiet">{site.email}</LinkButton>
        </div>
      </div>
    </Section>
  );
}
