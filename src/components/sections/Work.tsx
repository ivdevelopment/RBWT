import { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { content } from '@/data/content';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

/** Filterable portfolio grid with category chips and layout animations. */
export function Work() {
  const { work } = content;
  const [active, setActive] = useState('All');
  const prefersReducedMotion = useReducedMotion();

  const items = useMemo(
    () => (active === 'All' ? work.items : work.items.filter((item) => item.category === active)),
    [active, work.items],
  );

  return (
    <section id="work" className="section-pad">
      <Container>
        <div className="lg:flex lg:items-end lg:justify-between">
          <SectionHeading eyebrow={work.eyebrow} heading={work.heading} paragraph={work.paragraph} align="left" />
          <Reveal delay={0.15} className="mt-8 lg:mt-0">
            <ul role="tablist" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
              {work.categories.map((category) => (
                <li key={category} role="presentation">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={active === category}
                    onClick={() => setActive(category)}
                    className={cn(
                      'rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent',
                      active === category
                        ? 'bg-ink text-paper'
                        : 'bg-surface text-muted ring-1 ring-line hover:text-ink',
                    )}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <motion.ul
          layout={!prefersReducedMotion}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.li
                key={item.title}
                layout={!prefersReducedMotion}
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
                className="group"
              >
                <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-card ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <a href={item.link?.href ?? '#contact'} className="ring-focus relative block overflow-hidden">
                    <img
                      src={item.image.src}
                      alt={item.image.alt}
                      loading="lazy"
                      width={640}
                      height={480}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
                      {item.category}
                    </span>
                  </a>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-semibold tracking-tight text-ink">{item.title}</h3>
                      {item.link && (
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-surface text-ink transition-all duration-300 group-hover:bg-accent group-hover:text-paper">
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                  </div>
                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </Container>
    </section>
  );
}