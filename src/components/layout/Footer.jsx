import Link from 'next/link';
import Logo from '@/components/brand/Logo';
import { navigation } from '@/data/navigation';
import { site, bookHref, auditHref } from '@/content/site';
import s from './layout.module.css';

const SOCIAL_LABELS = {
  linkedin: 'LinkedIn',
  github: 'GitHub',
  facebook: 'Facebook',
};

const Col = ({ num, title, group }) => (
  <div className={s.footCol}>
    <div className={s.footColHead}>
      <span className={s.footColNum}>{num}</span>
      <h2 className={s.footH}>{title}</h2>
    </div>
    <ul className={s.footList}>
      {group.items.map((l) => (
        <li key={l.name}>
          <Link href={l.href} className={s.footA}>{l.name}</Link>
        </li>
      ))}
    </ul>
    {group.more && (
      <Link href={group.more.href} className={s.footMoreLink}>
        {group.more.name}
      </Link>
    )}
  </div>
);

export default function Footer() {
  const social = Object.entries(site.social).filter(([, url]) => Boolean(url));
  return (
    <footer className={s.footer}>
      <div className="vd-container">
        {/* Tier 1: Symmetric Brand Identity (Left) + Aligned CTA Panel (Right) */}
        <div className={s.footIdentityBar}>
          <div className={s.footBrandCol}>
            <Link href="/" className={s.footBrand} aria-label="Vector Dynamic home">
              <Logo size={30} title="" />
              Vector Dynamic
            </Link>
            <p className={s.footTag}>{site.tagline}</p>
            <p className={s.footOverlap}>{site.overlapWindow}.</p>

            <div className={s.footContactStrip}>
              <a className={s.footEmail} href={`mailto:${site.email}`}>
                {site.email}
              </a>
              {social.length > 0 && (
                <div className={s.footSocialRow} aria-label="Official social profiles">
                  {social.map(([k, url]) => (
                    <a
                      key={k}
                      className={s.footSocialLink}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {SOCIAL_LABELS[k] || k[0].toUpperCase() + k.slice(1)} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className={s.footCtaPanel}>
            <p className={s.footCtaEyebrow}>Start a technical conversation</p>
            <p className={s.footCtaCopy}>
              Walk through your workflow, codebase, or integration bottleneck directly with a senior engineer.
            </p>
            <div className={s.footQuickCtas}>
              <Link href={bookHref} className={s.footPrimaryAction}>
                Book a 30-min call →
              </Link>
              <Link href={auditHref} className={s.footSecondaryAction}>
                Free systems review →
              </Link>
            </div>
          </div>
        </div>

        {/* Tier 2: Symmetric 5-Column Directory (5 items + 1 "View more" link per column) */}
        <div className={s.footDirectory}>
          <Col num="01" title="Practice Areas" group={navigation.footer.services} />
          <Col num="02" title="Case Studies" group={navigation.footer.work} />
          <Col num="03" title="Industries" group={navigation.footer.industries} />
          <Col num="04" title="Engineering Guides" group={navigation.footer.insights} />
          <Col num="05" title="Company" group={navigation.footer.company} />
        </div>

        {/* Tier 3: Legal, Copyright & Sitemap */}
        <div className={s.footBottom}>
          <span>© {new Date().getFullYear()} Vector Dynamic. All rights reserved.</span>
          <span className={s.footLegalLinks}>
            {navigation.footer.legal.map((l, i) => (
              <span key={l.name}>
                {i > 0 && ' · '}
                <Link href={l.href} className={s.footA}>{l.name}</Link>
              </span>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
