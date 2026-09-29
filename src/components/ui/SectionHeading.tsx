import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeUpSmall } from '@/lib/motion';
import { Badge } from './Badge';

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  paragraph?: string;
  align?: 'left' | 'center';
  className?: string;
  id?: string;
}

/**
 * Consistent section header: eyebrow pill, display heading, supporting copy.
 * Content is always driven by the data layer — never hardcoded here.
 */
export function SectionHeading({
  eyebrow,
  heading,
  paragraph,
  align = 'center',
  className,
  id,
}: SectionHeadingProps) {
  const center = align === 'center';
  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUpSmall}
      className={cn(center ? 'text-center' : 'text-left', className)}
    >
      {eyebrow && (
        <div className={cn(center && 'flex justify-center')}>
          <Badge>{eyebrow}</Badge>
        </div>
      )}
      <h2 className="mt-5 font-display text-3xl font-semibold tracking-tightest text-ink sm:text-4xl lg:text-[2.75rem]">
        {heading}
      </h2>
      {paragraph && <p className={cn('mt-4 max-w-2xl text-base leading-relaxed text-muted', center && 'mx-auto')}>{paragraph}</p>}
    </motion.div>
  );
}