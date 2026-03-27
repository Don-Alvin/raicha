interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export default function Badge({ children, variant = 'primary', className = '' }: BadgeProps) {
  const variantStyles = {
    primary: 'bg-primary text-white',
    secondary: 'bg-surface-container-high text-on-surface',
    outline: 'ghost-border text-primary bg-transparent',
  };
  
  return (
    <span className={`text-label-sm inline-block px-3 py-1.5 ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}