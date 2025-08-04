import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isSubmitting?: boolean;
  submittingText?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  isSubmitting = false,
  submittingText = 'Memproses...',
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) => {
  const baseClasses =
    'font-medium rounded-lg transition-colors duration-300';

  const variantClasses = {
    primary:
      'bg-[#C500D0] text-white hover:bg-[#8A009B]',
    secondary:
      'bg-[#FDD3FF] text-[#C500D0] hover:bg-[#A200B4] hover:text-white',
  };

  const sizeClasses = {
    md: 'py-3 px-4 mt-4 w-full',
    sm: 'py-1 px-4',
  };

  return (
    <button
      {...props}
      disabled={isSubmitting || props.disabled}
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        { 'opacity-50 cursor-not-allowed': isSubmitting || props.disabled },
        className
      )}
    >
      {isSubmitting ? submittingText : children}
    </button>
  );
};