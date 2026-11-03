'use client';

import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

// Styles live in brand.css (.vd-btn). variant: 'primary' | 'outline' | 'quiet'
export default function LinkButton({
  href,
  variant = 'primary',
  className = '',
  event,
  eventParams,
  onClick,
  children,
  ...rest
}) {
  const cls = `vd-btn vd-btn--${variant} ${className}`.trim();

  const handleClick = (e) => {
    if (event) trackEvent(event, eventParams);
    if (onClick) onClick(e);
  };

  if (/^(https?:|mailto:)/.test(href)) {
    const ext = href.startsWith('http');
    return (
      <a
        href={href}
        className={cls}
        onClick={handleClick}
        {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
