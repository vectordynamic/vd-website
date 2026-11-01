'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/brand/Logo';
import LinkButton from '@/components/ui/LinkButton';
import { navigation } from '@/data/navigation';
import s from './layout.module.css';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open]);

  const current = (href) => (!href.includes('#') && pathname.startsWith(href) ? 'page' : undefined);

  const links = navigation.main.map((l) => (
    <Link key={l.name} href={l.href} className={s.link} aria-current={current(l.href)} onClick={() => setOpen(false)}>
      {l.name}
    </Link>
  ));

  return (
    <header className={`${s.header} ${scrolled ? s.scrolled : ''}`}>
      <div className={`vd-container ${s.bar}`}>
        <Link href="/" className={s.brand} aria-label="Vector Dynamic home">
          <Logo size={30} title="" />
          Vector Dynamic
        </Link>
        <nav className={s.nav} aria-label="Main">
          {links}
          <LinkButton href={navigation.cta.href} className={s.cta}>{navigation.cta.label}</LinkButton>
        </nav>
        <button className={s.menuBtn} aria-expanded={open} aria-controls="vd-panel" onClick={() => setOpen((o) => !o)}>
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      <nav id="vd-panel" className={s.panel} hidden={!open} aria-label="Mobile">
        {links}
        <LinkButton href={navigation.cta.href}>{navigation.cta.label}</LinkButton>
      </nav>
    </header>
  );
}
