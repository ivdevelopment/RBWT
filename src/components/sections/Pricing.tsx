import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import { content } from '@/data/content';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';

type Billing = 'monthly' | 'annual';

/** Data-driven pricing with an animated monthly/annual toggle. */
export function Pricing() {
  const { pricing } = content;
  const [billing, setBilling] = useState<Billing>('monthly');
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="pricing" className="section-pad">
      <Container>
        <SectionHeading eyebrow={pricing.eyebrow} heading={pricing.heading} paragraph={pricing.paragraph} />

        {/* Billing toggle */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="relative inline-flex items-center rounded-full bg-surface p-1.5 ring-1 ring-line">
            {(['monthly', 'annual'] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setBilling(option)}
                aria-pressed={billing === option}
                className={cn(
                  'relative z-10 rounded-full px-5 py-2 text-sm font-medium capitalize transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent',
                  billing === option ? 'text-paper' : 'text-muted hover:text-ink',
                )}
              >
                {billing === option && (
                  <motion.span
                    layoutId="billing-pill"
                    transition={prefersReducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 400, damping: 32 }}
                    className="absolute inset-0 -z-10 rounded-full bg-ink"
                    aria-hidden="true"
                  />
                )}
                {option}
              </button>
            ))}
          </div>
          <span className="hidden text-xs font-medium text-accent sm:inline">{pricing.annualDiscountLabel}</span>
        </div>

        {/* Plans */}
        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricing.plans.map((plan, index) => {
            const price = billing === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
            return (
              <li key={plan.name}>
                <Reveal delay={index * 0.08} className="h-full">
                  <div
                    className={cn(
                      'relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300',
                      plan.highlighted
                        ? 'bg-ink text-paper shadow-card-hover lg:-translate-y-2'
                        : 'bg-card ring-1 ring-line hover:-translate-y-1 hover:shadow-card',
                    )}
                  >
                  {plan.highlighted && (
                    <span className="absolute -top-3.5 left-8 rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold text-paper">
                      Most popular
                    </span>
                  )}

                  <h3 className={cn('font-display text-lg font-semibold tracking-tight', plan.highlighted ? 'text-paper' : 'text-ink')}>
                    {plan.name}
                  </h3>
                  <p className={cn('mt-2 text-sm leading-relaxed', plan.highlighted ? 'text-paper/70' : 'text-muted')}>
                    {plan.description}
                  </p>

                  <div className="mt-7 flex items-baseline gap-1.5">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={billing}
                        initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className={cn('font-display text-5xl font-semibold tracking-tight', plan.highlighted ? 'text-paper' : 'text-ink')}
                      >
                        ${price.toLocaleString()}
                      </motion.span>
                    </AnimatePresence>
                    <span className={cn('text-sm', plan.highlighted ? 'text-paper/60' : 'text-muted')}>/mo</span>
                  </div>
                  <p className={cn('mt-1 text-xs', plan.highlighted ? 'text-paper/50' : 'text-muted')}>
                    {billing === 'annual' ? `Billed annually ($${(price * 12).toLocaleString()}/yr)` : 'Billed monthly'}
                  </p>

                  <ul className="mt-8 flex-1 space-y-3.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span
                          className={cn(
                            'mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full',
                            plan.highlighted ? 'bg-accent/25 text-accent' : 'bg-accent/10 text-accent',
                          )}
                        >
                          <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                        </span>
                        <span className={cn('text-sm leading-relaxed', plan.highlighted ? 'text-paper/85' : 'text-ink')}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-9">
                      <Button
                        href={plan.cta.href}
                        variant={plan.highlighted ? 'secondary' : 'primary'}
                        className={plan.highlighted ? 'w-full !bg-accent !text-paper hover:!bg-accent/90 hover:!shadow-none' : 'w-full'}
                      >
                        {plan.cta.label}
                      </Button>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}