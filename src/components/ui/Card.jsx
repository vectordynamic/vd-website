/**
 * Card Component
 * 
 * @param {object} props
 * @param {string} props.variant - 'default' | 'glass' | 'solid' | 'elevated' | 'glow' | 'gradient-border'
 * @param {string} props.size - 'sm' | 'md' | 'lg'
 * @param {boolean} props.interactive - Add hover effects
 * @param {React.ReactNode} props.children - Card content
 */
export default function Card({
  variant = 'default',
  size = 'md',
  interactive = false,
  children,
  className = '',
  ...props
}) {
  const baseClass = 'card';
  const variantClass = variant !== 'default' ? `card-${variant}` : '';
  const sizeClass = size !== 'md' ? `card-${size}` : '';
  const interactiveClass = interactive ? 'card-interactive' : '';
  
  const classes = [
    baseClass,
    variantClass,
    sizeClass,
    interactiveClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

// Card sub-components for better composition
export function CardIcon({ children, className = '' }) {
  return (
    <div className={`card-icon ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }) {
  return (
    <div className={`card-header ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '' }) {
  return (
    <h3 className={`card-title ${className}`}>
      {children}
    </h3>
  );
}

export function CardSubtitle({ children, className = '' }) {
  return (
    <p className={`card-subtitle ${className}`}>
      {children}
    </p>
  );
}

export function CardBody({ children, className = '' }) {
  return (
    <div className={`card-body ${className}`}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '' }) {
  return (
    <div className={`card-footer ${className}`}>
      {children}
    </div>
  );
}
