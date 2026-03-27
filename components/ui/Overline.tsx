interface OverlineProps {
  children: React.ReactNode;
  className?: string;
}

export default function Overline({ children, className = '' }: OverlineProps) {
  return (
    <div className={`label-md text-primary mb-3 ${className}`}>
      {children}
    </div>
  );
}