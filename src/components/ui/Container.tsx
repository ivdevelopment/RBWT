import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'footer' | 'header' | 'main';
  id?: string;
}

/** Centered layout wrapper with consistent horizontal padding. */
export function Container({ children, className, as = 'div', id }: ContainerProps) {
  const Tag = as;
  return (
    <Tag
      id={id}
      className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}
    >
      {children}
    </Tag>
  );
}