import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  Icon?: LucideIcon;
  isSubmitting?: boolean;
  submittingText?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  Icon,
  isSubmitting = false,
  submittingText = 'Memproses...',
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) => {
  const baseClasses =
    'font-medium rounded-lg transition-colors duration-300 flex items-center justify-center gap-2';

  const variantClasses = {
    primary: 'bg-[#C500D0] text-white hover:bg-[#8A009B]',
    secondary: 'bg-[#FDD3FF] text-[#C500D0] hover:bg-[#A200B4] hover:text-white',
    outline: 'border border-[#C500D0] text-[#C500D0] hover:bg-[#FDD3FF]',
  };

  const sizeStyles = {
    md: {
      container: 'h-12 px-5 text-base mt-4 w-full',
      icon: 'w-6 h-6',
    },
    sm: {
      container: 'h-9 px-4 text-sm',
      icon: 'w-10 h-10',
    },
  };
  
  const isIconOnly = !children && Icon;

  return (
    <button
      {...props}
      disabled={isSubmitting || props.disabled}
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeStyles[size].container,
        isIconOnly && (size === 'sm' ? 'w-9' : 'w-12'),
        isIconOnly && 'px-0',
        { 'opacity-50 cursor-not-allowed': isSubmitting || props.disabled },
        className
      )}
    >
      {Icon && <Icon className={sizeStyles[size].icon} />}
      {!isSubmitting && children}
      {isSubmitting && <span>{submittingText}</span>}
    </button>
  );
};