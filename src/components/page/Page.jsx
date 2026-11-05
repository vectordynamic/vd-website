import Link from 'next/link';
import { Fragment } from 'react';
import Reveal from '@/components/ui/Reveal';
import LinkButton from '@/components/ui/LinkButton';
import { bookHref, auditHref } from '@/content/site';
import s from './page.module.css';

// Words slide up out of a mask. Text stays intact for SEO and screen readers.
export const Words = ({ text }) =>
  text.split(' ').map((w, i) => (
    <Fragment key={i}>
      <span className={s.word}><span className={s.wordIn} style={{ '--w': i }}>{w}</span></span>{' '}
    </Fragment>
  ));

export function PageHero({ crumbs = [], eyebrow, title, lede, children }) {
  return (
    <section className={s.hero}>
      <div className={`vd-container ${s.heroIn}`}>
        {(eyebrow || crumbs.length > 0) && (
          <div className={s.heroMeta}>
            {eyebrow && <p className={s.eyebrow}>{eyebrow}</p>}
            {crumbs.length > 0 && (
              <nav className={s.crumbs} aria-label="Breadcrumb">
                {crumbs.map((c, i) => (
                  <span key={c.label}>
                    {i > 0 && <span className={s.crumbSep}>/</span>}
                    {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                  </span>
                ))}
              </nav>
            )}
          </div>
        )}
        <h1 className={s.h1}><Words text={title} /></h1>
        {lede && <p className={s.lede}>{lede}</p>}
        {children && <div className={s.actions}>{children}</div>}
      </div>
    </section>
  );
}

export function Section({ id, tone = '', eyebrow, title, intro, children }) {
  return (
    <section id={id} className={`${s.section} ${tone ? s[tone] : ''}`}>
      <div className="vd-container">
        {(eyebrow || title) && (
          <Reveal>
            {eyebrow && <p className={s.eyebrow}>{eyebrow}</p>}
            {title && <h2 className={s.h2}><Words text={title} /></h2>}
          </Reveal>
        )}
        {intro && <p className={s.intro}>{intro}</p>}
        {children}
      </div>
    </section>
  );
}

export const TwoCol = ({ children, className = '' }) => <Reveal className={`${s.twoCol} ${className}`}>{children}</Reveal>;

// Numbered ruled list: name on the left, text on the right.
export function Rows({ items }) {
  return (
    <Reveal className={s.rows}>
      {items.map((it, i) => (
        <div key={it.name} className={s.rowItem}>
          <span className={s.num}>0{i + 1}</span>
          <h3 className={s.rowName}>{it.name}</h3>
          <p className={s.rowText}>{it.text}</p>
        </div>
      ))}
    </Reveal>
  );
}

// Columns with a rule that draws across the top.
export function Steps({ items }) {
  return (
    <Reveal className={s.steps}>
      {items.map((it, i) => (
        <div key={it.name} className={s.step}>
          <p className={s.meta}>0{i + 1}</p>
          <h3 className={s.stepName}>{it.name}</h3>
          <p>{it.text}</p>
        </div>
      ))}
    </Reveal>
  );
}

export function Checklist({ items, tone = 'good', title }) {
  return (
    <div>
      {title && <h3 className={s.listH}>{title}</h3>}
      <ul className={`${s.list} ${tone === 'good' ? s.good : s.bad}`}>
        {items.map((t) => <li key={t}><b>{tone === 'good' ? '+' : '–'}</b>{t}</li>)}
      </ul>
    </div>
  );
}

export function Faq({ items }) {
  return (
    <Reveal className={s.faq}>
      {items.map((it) => (
        <details key={it.q}>
          <summary>{it.q}</summary>
          <p>{it.a}</p>
        </details>
      ))}
    </Reveal>
  );
}

// Practice rows with a link to each service page.
export function PracticeRows({ practices }) {
  return (
    <Reveal className={s.practices}>
      {practices.map((p, i) => (
        <div key={p.id} id={p.id} className={s.practice}>
          <span className={s.num}>0{i + 1}</span>
          <div>
            <h3 className={s.practiceTitle}><Link href={`/services/${p.id}`}>{p.title}</Link></h3>
            <p className={s.rowText}>{p.summary}</p>
            {p.trigger && <p className={s.trigger}>“{p.trigger}”</p>}
            <LinkButton href={`/services/${p.id}`} variant="quiet">Explore {p.title}</LinkButton>
          </div>
          {p.covers && p.covers.length > 0 && (
            <ul className={s.covers}>{p.covers.map((c) => <li key={c}>{c}</li>)}</ul>
          )}
        </div>
      ))}
    </Reveal>
  );
}

export function CtaBand({
  title = 'Tell us about the system your operations need.',
  body = 'Book a 30-minute discovery call with a senior engineer, or request a free written review of one workflow.',
  label = 'Book a 30-minute discovery call',
  href = bookHref,
  secondaryLabel = 'Or request a free written systems review',
  secondaryHref = auditHref,
}) {
  return (
    <section className={`${s.section} ${s.surface}`}>
      <div className="vd-container">
        <Reveal className={s.cta}>
          <h2 className={s.h2}><Words text={title} /></h2>
          <p>{body}</p>
          <div className={s.actions}>
            <LinkButton href={href} event="cta_click" eventParams={{ location: 'page_cta_band_primary' }}>
              {label}
            </LinkButton>
            {secondaryHref && secondaryLabel && (
              <LinkButton href={secondaryHref} variant="quiet" event="cta_click" eventParams={{ location: 'page_cta_band_secondary' }}>
                {secondaryLabel}
              </LinkButton>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function WorkLinks({ items }) {
  return (
    <Reveal>
      {items.map((it) => (
        <Link key={it.slug || it.name} href={it.slug ? `/work/${it.slug}` : '/work'} className={s.workLink}>
          <h3 className={s.workName}>{it.name}</h3>
          <span className={s.workStatus}>{it.domainBadge || it.practiceLabel}</span>
          <p className={s.rowText}>{it.summary}</p>
        </Link>
      ))}
    </Reveal>
  );
}

export function MoreLinks({ items }) {
  return (
    <Reveal className={s.more}>
      {items.map((it) => <Link key={it.href} href={it.href} className={s.moreLink}>{it.label}</Link>)}
    </Reveal>
  );
}
