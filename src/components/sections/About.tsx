import { content } from '@/data/content';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight } from 'lucide-react';
import { useReducedMotion, motion } from 'framer-motion';

/** Split about section: copy + stats on the left, studio visual on the right. */
export function About() {
  const { about } = content;
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="section-pad bg-surface/40">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Copy */}
          <div>
            <SectionHeading
              eyebrow={about.eyebrow}
              heading={about.heading}
              align="left"
            />
            <div className="mt-6 space-y-4">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-9">
              <Button href={about.cta.href} variant="secondary" icon={ArrowRight} iconRight>
                {about.cta.label}
              </Button>
            </div>

            {/* Stats */}
            <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {about.stats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-accent/30 pl-4">
                  <dt className="order-2 text-sm text-muted">{stat.label}</dt>
                  <dd className="font-display text-3xl font-semibold tracking-tight text-ink">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Visual */}
          <Reveal delay={0.1}>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -right-6 -top-6 h-40 w-40 rounded-3xl bg-accent/[0.08] blur-2xl"
              />
              <img
                src={about.image.src}
                alt={about.image.alt}
                className="relative w-full rounded-3xl shadow-card ring-1 ring-line"
                loading="lazy"
                width={640}
                height={480}
              />
              <motion.figure
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
                className="absolute -bottom-6 -left-4 rounded-2xl bg-card px-5 py-4 shadow-card ring-1 ring-line sm:-left-8"
              >
                <p className="font-display text-2xl font-semibold text-accent">{content.about.stats[0].value}</p>
                <p className="text-xs text-muted">{content.about.stats[0].label}</p>
              </motion.figure>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}