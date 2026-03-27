interface SectionContainerProps {
  children: React.ReactNode;
  background?: 'default' | 'surface' | 'surface-low' | 'dark';
  spacing?: 'default' | 'large';
  className?: string;
}

export default function SectionContainer({
  children,
  background = 'default',
  spacing = 'default',
  className = '',
}: SectionContainerProps) {
  const backgrounds = {
    default: 'bg-surface',
    surface: 'bg-surface',
    'surface-low': 'bg-surface-container-low',
    dark: 'bg-on-background',
  };
  
  const spacingClass = spacing === 'large' ? 'py-section' : 'py-section-sm';
  
  return (
    <section className={`${backgrounds[background]} ${spacingClass} ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        {children}
      </div>
    </section>
  );
}