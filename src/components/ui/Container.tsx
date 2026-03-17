import React, { ReactNode } from 'react';

export default function Container({ 
  children, 
  className = "" 
}: { 
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20 ${className}`}>
      {children}
    </div>
  );
}