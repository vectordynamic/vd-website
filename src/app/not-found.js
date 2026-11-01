import LinkButton from '@/components/ui/LinkButton';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section style={{ padding: 'clamp(72px, 12vw, 160px) 0' }}>
      <div className="vd-container">
        <p style={{ fontFamily: 'var(--vd-font-mono), monospace', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--vd-muted)', margin: '0 0 1.25rem' }}>Error 404</p>
        <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', lineHeight: 1.05, fontWeight: 400, letterSpacing: '-0.025em', maxWidth: '16ch', margin: '0 0 1.5rem' }}>This page is not here.</h1>
        <p style={{ color: 'var(--vd-graphite)', maxWidth: '48ch', margin: '0 0 2rem', fontSize: '1.15rem' }}>The link may be old or mistyped. Here are some places to go instead.</p>
        <div style={{ display: 'flex', gap: '1.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <LinkButton href="/">Back to the homepage</LinkButton>
          <LinkButton href="/services" variant="quiet">Our services</LinkButton>
          <LinkButton href="/contact" variant="quiet">Contact us</LinkButton>
        </div>
      </div>
    </section>
  );
}
