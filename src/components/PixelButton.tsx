import React from 'react';
import { cn } from '@/lib/utils';

interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function PixelButton({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: PixelButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-[8px]',
    md: 'px-6 py-3 text-[10px]',
    lg: 'px-8 py-4 text-xs',
  };

  const variantClasses = {
    primary: 'pixel-btn',
    secondary: 'pixel-btn pixel-btn-secondary',
    accent: 'pixel-btn pixel-btn-accent',
  };

  return (
    <button
      className={cn(
        variantClasses[variant],
        sizeClasses[size],
        'font-pixel leading-relaxed',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
