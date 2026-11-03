import Link from 'next/link';
import LinkButton from '@/components/ui/LinkButton';
import { bookHref, auditHref } from '@/content/site';

export const metadata = { title: 'Page not found' };

const quickLinks = [
  { href: '/work', label: 'Engineering case studies', text: 'Production systems, architectures, and lessons learned.' },
  { href: '/services', label: 'Services', text: 'Custom software, ERP, applied AI, and automation.' },
  { href: '/how-we-work', label: 'How we work', text: 'Delivery standard, IP ownership, and dedicated pods.' },
  { href: '/insights', label: 'Insights', text: 'Practical B2B engineering guides.' },
];

export default function NotFound() {
  return (
    <section style={{ padding: 'clamp(72px, 12vw, 160px) 0' }}>
      <div className="vd-container">
        <p style={{ fontFamily: 'var(--vd-font-mono), monospace', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--vd-muted)', margin: '0 0 1.25rem' }}>Error 404</p>
        <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', lineHeight: 1.05, fontWeight: 400, letterSpacing: '-0.025em', maxWidth: '16ch', margin: '0 0 1.5rem' }}>This page is not here.</h1>
        <p style={{ color: 'var(--vd-graphite)', maxWidth: '52ch', margin: '0 0 2rem', fontSize: '1.15rem' }}>
          The link may be old or mistyped. Explore our work, or talk directly with an engineer about the system you need.
        </p>
        <div style={{ display: 'flex', gap: '1.75rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '3.5rem' }}>
          <LinkButton href="/work">See our work</LinkButton>
          <LinkButton href={bookHref} variant="outline">Book a 30-minute call</LinkButton>
          <LinkButton href={auditHref} variant="quiet">Request a free written review</LinkButton>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {quickLinks.map((l) => (
            <li key={l.href} style={{ borderTop: '1px solid var(--vd-ink)', paddingTop: '1rem' }}>
              <Link href={l.href} style={{ fontFamily: 'var(--vd-font-serif), serif', fontSize: '1.25rem', color: 'var(--vd-ink)', textDecoration: 'none' }}>{l.label} →</Link>
              <p style={{ margin: '0.4rem 0 0', color: 'var(--vd-graphite)', fontSize: '0.95rem' }}>{l.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
