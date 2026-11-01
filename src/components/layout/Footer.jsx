import Link from 'next/link';
import Logo from '@/components/brand/Logo';
import { navigation } from '@/data/navigation';
import { site } from '@/content/site';
import s from './layout.module.css';

const Col = ({ title, links }) => (
  <div>
    <h2 className={s.footH}>{title}</h2>
    <ul className={s.footList}>
      {links.map((l) => (
        <li key={l.name}><Link href={l.href} className={s.footA}>{l.name}</Link></li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  const social = Object.entries(site.social);
  return (
    <footer className={s.footer}>
      <div className="vd-container">
        <div className={s.footTop}>
          <div>
            <Link href="/" className={s.footBrand} aria-label="Vector Dynamic home">
              <Logo size={30} title="" />
              Vector Dynamic
            </Link>
            <p className={s.footTag}>{site.tagline}</p>
            <ul className={s.footList}>
              <li><a className={s.footA} href={`mailto:${site.email}`}>{site.email}</a></li>
            </ul>
          </div>
          <Col title="Services" links={navigation.footer.services} />
          <Col title="Company" links={navigation.footer.company} />
          <div>
            <h2 className={s.footH}>Elsewhere</h2>
            <ul className={s.footList}>
              {social.map(([k, url]) => (
                <li key={k}><a className={s.footA} href={url} target="_blank" rel="noopener noreferrer">{k[0].toUpperCase() + k.slice(1)}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className={s.footBottom}>
          <span>© {new Date().getFullYear()} Vector Dynamic. All rights reserved.</span>
          <span>
            {navigation.footer.legal.map((l, i) => (
              <span key={l.name}>{i > 0 && ' · '}<Link href={l.href} className={s.footA}>{l.name}</Link></span>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
