/**
 * Badge Component
 * 
 * @param {object} props
 * @param {string} props.variant - 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'
 * @param {string} props.size - 'sm' | 'md' | 'lg'
 * @param {React.ReactNode} props.children - Badge content
 */

import styles from './Badge.module.css';

export default function Badge({
  variant = 'default',
  size = 'md',
  children,
  className = '',
  ...props
}) {
  return (
    <span 
      className={`badge badge-${variant} badge-${size} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
