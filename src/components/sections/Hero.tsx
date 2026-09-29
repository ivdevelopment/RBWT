import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { content } from '@/data/content';

/**
 * Hero — the first thing visitors see.
 * Splits into a two-column layout on desktop: copy + visual card stack.
 */
export function Hero() {
  const { hero } = content;
  const prefersReducedMotion = useReducedMotion();

  const entrance = (delay: number, y: number) => ({
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 0.61, 0.36, 1] },
  });

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent/[0.08] blur-3xl"
      />

      <Container className="relative pb-20 pt-32 sm:pb-28 sm:pt-40 lg:pb-36 lg:pt-48">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Copy */}
          <div className="max-w-2xl lg:col-span-7">
            <motion.div {...entrance(0, 18)}>
              <Badge>{hero.eyebrow}</Badge>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tightest text-ink sm:text-5xl lg:text-6xl">
                {hero.headline}{' '}
                <span className="text-accent">{hero.highlight}</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                {hero.paragraph}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href={hero.primary.href} size="lg">
                  {hero.primary.label}
                </Button>
                <Button href={hero.secondary.href} size="lg" variant="secondary">
                  {hero.secondary.label}
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-5">
            <motion.div {...entrance(0.15, 28)}>
              <HeroVisual />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Abstract product-card stack used as the hero visual. */
function HeroVisual() {
  const { hero } = content;
  return (
    <div className="relative mx-auto max-w-md lg:max-w-none" aria-hidden="true">
      {/* Back card */}
      <div className="absolute inset-x-6 -top-4 bottom-6 rotate-3 rounded-3xl bg-surface ring-1 ring-line" />
      {/* Main card */}
      <div className="relative overflow-hidden rounded-3xl bg-card shadow-card ring-1 ring-line">
        <div className="flex items-center justify-between border-b border-line px-6 py-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted/25" />
          </div>
          <span className="text-xs font-medium text-muted">hartfelt.studio</span>
        </div>

        <div className="space-y-4 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted">{hero.visualMeta}</p>
              <p className="mt-1 font-display text-lg font-semibold text-ink">{hero.visualLabel}</p>
            </div>
            <span className="grid h-11 w-11 place-items-center rounded-full bg-accent/10 text-accent">
              <ArrowRight className="h-5 w-5" />
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-2 rounded-2xl bg-surface/70 p-4">
              <div className="h-8 w-8 rounded-lg bg-accent/15" />
              <div className="h-2 w-full rounded bg-ink/10" />
              <div className="h-2 w-3/4 rounded bg-ink/[0.08]" />
            </div>
            <div className="space-y-2 rounded-2xl bg-surface/70 p-4">
              <div className="h-8 w-8 rounded-lg bg-ink/10" />
              <div className="h-2 w-full rounded bg-ink/10" />
              <div className="h-2 w-2/3 rounded bg-ink/[0.08]" />
            </div>
            <div className="space-y-2 rounded-2xl bg-surface/70 p-4">
              <div className="h-8 w-8 rounded-lg bg-ink/[0.12]" />
              <div className="h-2 w-full rounded bg-ink/10" />
              <div className="h-2 w-1/2 rounded bg-ink/[0.08]" />
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-line p-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-paper">
              <ChevronRight className="h-5 w-5" />
            </span>
            <div className="flex-1 space-y-1.5">
              <div className="h-2 w-full rounded bg-ink/10" />
              <div className="h-2 w-2/3 rounded bg-ink/8" />
            </div>
            <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">Live</span>
          </div>
        </div>
      </div>
    </div>
  );
}