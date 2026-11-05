import Link from 'next/link';
import Logo from '@/components/brand/Logo';
import { navigation } from '@/data/navigation';
import { site } from '@/content/site';
import s from './layout.module.css';

const SOCIAL_LABELS = {
  linkedin: 'LinkedIn',
  github: 'GitHub',
  facebook: 'Facebook',
};

const Col = ({ title, links }) => (
  <div>
    <h2 className={s.footH}>{title}</h2>
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
        <div className={s.footTop}>
          <div className={s.footBrandCol}>
            <Link href="/" className={s.footBrand} aria-label="Vector Dynamic home">
              <Logo size={30} title="" />
              Vector Dynamic
            </Link>
            <p className={s.footTag}>{site.tagline}</p>
            <p className={s.footOverlap}>{site.overlapWindow}.</p>
            <p className={s.footEmailRow}>
              <a className={s.footEmail} href={`mailto:${site.email}`}>{site.email}</a>
            </p>
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
          <Col title="Practice Areas" links={navigation.footer.services} />
          <Col title="Work & Industries" links={navigation.footer.workAndIndustries} />
          <Col title="Company" links={navigation.footer.company} />
          <Col title="Get Started" links={navigation.footer.engage} />
        </div>
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
