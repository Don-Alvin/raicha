interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export default function Badge({ children, variant = 'primary', className = '' }: BadgeProps) {
  const variantStyles = {
    primary: 'bg-primary text-on-primary',
    secondary: 'bg-secondary text-on-secondary',
    outline: 'ghost-border text-primary bg-transparent',
  };
  
  return (
    <span className={`label-sm inline-block px-3 py-1 rounded ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}