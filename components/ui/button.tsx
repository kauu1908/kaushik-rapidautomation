import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'full';
  href?: string;
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  href, 
  className = '', 
  children, 
  ...props 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center uppercase font-semibold transition-all duration-500 tracking-[0.2em]';
  
  const variants = {
    primary: 'bg-[#0F0F0F] text-[#F8F5F0] hover:bg-[#C9A646]',
    secondary: 'bg-[#C9A646] text-[#F8F5F0] hover:bg-[#0F0F0F]',
    outline: 'border-b border-[#0F0F0F] text-[#0F0F0F] hover:text-[#C9A646] hover:border-[#C9A646]',
    ghost: 'text-[#0F0F0F] hover:text-[#C9A646] underline-offset-4 hover:underline'
  };

  const sizes = {
    sm: 'text-[10px] px-6 py-2',
    md: 'text-[11px] px-8 py-3',
    lg: 'text-xs px-10 py-4',
    full: 'text-[11px] w-full py-4'
  };

  const classes = `${baseClasses} ${variants[variant]} ${variant === 'outline' || variant === 'ghost' ? '' : sizes[size]} ${variant === 'outline' ? 'py-1 text-[11px]' : ''} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
