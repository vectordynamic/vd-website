import Link from 'next/link';

// Styles live in brand.css (.vd-btn). variant: 'primary' | 'quiet'
export default function LinkButton({ href, variant = 'primary', className = '', children, ...rest }) {
  const cls = `vd-btn vd-btn--${variant} ${className}`.trim();
  if (/^(https?:|mailto:)/.test(href)) {
    const ext = href.startsWith('http');
    return (
      <a href={href} className={cls} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
