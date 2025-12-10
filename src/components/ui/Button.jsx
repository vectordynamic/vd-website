'use client';

import Link from 'next/link';

/**
 * Button Component
 * 
 * @param {object} props
 * @param {string} props.variant - 'primary' | 'secondary' | 'ghost' | 'text' | 'gradient-outline'
 * @param {string} props.size - 'sm' | 'md' | 'lg' | 'xl'
 * @param {boolean} props.loading - Show loading state
 * @param {boolean} props.disabled - Disable button
 * @param {boolean} props.fullWidth - Full width button
 * @param {string} props.href - If provided, renders as Link
 * @param {React.ReactNode} props.icon - Icon element
 * @param {React.ReactNode} props.children - Button content
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  href,
  icon,
  children,
  className = '',
  ...props
}) {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const sizeClass = size !== 'md' ? `btn-${size}` : '';
  const loadingClass = loading ? 'btn-loading' : '';
  const fullWidthClass = fullWidth ? 'btn-full' : '';
  
  const classes = [
    baseClass,
    variantClass,
    sizeClass,
    loadingClass,
    fullWidthClass,
    className
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {icon && <span className="btn-icon-element">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button 
      className={classes} 
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
}
