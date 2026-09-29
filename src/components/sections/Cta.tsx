import { content } from '@/data/content';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';

/** Full-width call-to-action band with grid backdrop. */
export function Cta() {
  const { cta } = content;

  return (
    <section id="cta" className="section-pad pt-0 sm:pt-0 lg:pt-0">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl bg-ink px-6 py-16 sm:px-14 sm:py-20 lg:py-24">
            <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/25 blur-3xl"
            />

            <div className="relative mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-bright">{cta.eyebrow}</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tightest text-paper sm:text-4xl lg:text-5xl">
                {cta.heading}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-paper/70 sm:text-lg">
                {cta.paragraph}
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href={cta.primary.href} size="lg" className="!bg-accent !text-paper hover:!bg-accent/90">
                  {cta.primary.label}
                </Button>
                <Button href={cta.secondary.href} size="lg" variant="secondary" className="!text-paper !ring-paper/30 hover:!bg-paper/10 hover:!ring-paper/60">
                  {cta.secondary.label}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}