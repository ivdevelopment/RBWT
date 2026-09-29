import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 will-change-transform active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

const sizes: Record<Size, string> = {
  md: 'h-11 px-6 text-sm',
  lg: 'h-12 px-7 text-base',
};

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-white shadow-soft hover:bg-ink hover:shadow-card-hover hover:-translate-y-0.5',
  secondary:
    'bg-transparent text-ink ring-1 ring-line hover:ring-ink hover:bg-surface hover:-translate-y-0.5',
  ghost:
    'bg-transparent text-ink underline-offset-4 decoration-line decoration-2 hover:text-muted transition-colors',
};

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: LucideIcon;
  iconRight?: boolean;
  className?: string;
  ariaLabel?: string;
}

type ButtonProps = CommonProps &
  (
    | { href: string; onClick?: undefined; type?: undefined; disabled?: undefined }
    | {
        href?: undefined;
        onClick?: () => void;
        type?: 'button' | 'submit';
        disabled?: boolean;
      }
  );

/**
 * Polymorphic button — renders an anchor when `href` is present,
 * otherwise a native button. Keeps focus styles and sizing consistent.
 */
export function Button(props: ButtonProps) {
  const { children, variant = 'primary', size = 'md', icon, iconRight = false, className, ariaLabel } = props;
  const Icon = icon;
  const classes = cn(base, sizes[size], variants[variant], className);

  const content = (
    <>
      {Icon && !iconRight && <Icon className="h-4.5 w-4.5 shrink-0" aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconRight && (
        <Icon className="h-4.5 w-4.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
      )}
    </>
  );

  if (props.href) {
    return (
      <a href={props.href} className={classes} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}