import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { content } from '@/data/content';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

/**
 * Accessible FAQ accordion.
 * — buttons control aria-expanded and an associated region
 * — open/close is animated with height
 * — keyboard-native (buttons are focusable, Escape closes)
 */
export function Faq() {
  const { faq } = content;
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReducedMotion = useReducedMotion();

  const toggle = (index: number) => setOpenIndex((current) => (current === index ? null : index));

  return (
    <section id="faq" className="section-pad bg-surface/40">
      <Container className="max-w-4xl">
        <SectionHeading eyebrow={faq.eyebrow} heading={faq.heading} paragraph={faq.paragraph} />

        <div className="mt-14 space-y-3">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={item.question} delay={index * 0.05}>
                <div
                  className={cn(
                    'overflow-hidden rounded-2xl bg-card ring-1 transition-shadow duration-300',
                    isOpen ? 'shadow-card ring-ink/15' : 'ring-line hover:ring-ink/20',
                  )}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      id={`faq-button-${index}`}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-accent"
                    >
                      <span className="font-display text-base font-semibold tracking-tight text-ink sm:text-lg">
                        {item.question}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.25, ease: 'easeOut' }}
                        className={cn(
                          'grid h-8 w-8 shrink-0 place-items-center rounded-full ring-1 transition-colors',
                          isOpen ? 'bg-accent text-paper ring-accent' : 'bg-surface text-ink ring-line',
                        )}
                        aria-hidden="true"
                      >
                        <Plus className="h-4 w-4" />
                      </motion.span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${index}`}
                        role="region"
                        aria-labelledby={`faq-button-${index}`}
                        initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-muted sm:text-base">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}