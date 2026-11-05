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

const Col = ({ num, title, links }) => (
  <div className={s.footCol}>
    <div className={s.footColHead}>
      <span className={s.footColNum}>{num}</span>
      <h2 className={s.footH}>{title}</h2>
    </div>
    <ul className={s.footList}>
      {links.map((l) => (
        <li key={l.name}>
          <Link href={l.href} className={s.footA}>{l.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  const social = Object.entries(site.social).filter(([, url]) => Boolean(url));
  return (
    <footer className={s.footer}>
      <div className="vd-container">
        {/* Tier 1: Brand Identity, 24/7 Coverage & Direct Contact Strip */}
        <div className={s.footIdentityBar}>
          <div className={s.footBrandCol}>
            <Link href="/" className={s.footBrand} aria-label="Vector Dynamic home">
              <Logo size={32} title="" />
              Vector Dynamic
            </Link>
            <p className={s.footTag}>{site.tagline}</p>
            <p className={s.footOverlap}>{site.overlapWindow}.</p>
          </div>

          <div className={s.footConnectCol}>
            <div className={s.footQuickCtas}>
              <Link href={bookHref} className={s.footPrimaryAction}>
                Book a 30-minute discovery call →
              </Link>
              <Link href={auditHref} className={s.footSecondaryAction}>
                Request free written systems review →
              </Link>
            </div>
            <div className={s.footContactMeta}>
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
        </div>

        {/* Tier 2: 5-Group Structured Site Directory */}
        <div className={s.footDirectory}>
          <Col num="01" title="Practice Areas" links={navigation.footer.services} />
          <Col num="02" title="Case Studies" links={navigation.footer.work} />
          <Col num="03" title="Industries We Serve" links={navigation.footer.industries} />
          <Col num="04" title="Engineering Guides" links={navigation.footer.insights} />
          <Col num="05" title="Company & Commercial" links={navigation.footer.company} />
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
