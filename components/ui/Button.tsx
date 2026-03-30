import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300';
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-label-sm',
    md: 'px-6 py-3 text-label-md',
    lg: 'px-8 py-4 text-label-md',
  };
  
  const variantStyles = {
    primary: 'industrial-gradient text-white hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]',
    secondary: 'ghost-border text-primary hover:bg-white/5',
    ghost: 'text-primary hover:text-primary-container transition-colors',
  };
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';
  
  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles} ${className}`;
  
  if (href && !disabled) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }
  
  return (
    <button type={type} onClick={onClick} className={combinedClassName} disabled={disabled}>
      {children}
    </button>
  );
}