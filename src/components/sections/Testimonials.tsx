import { Star } from 'lucide-react';
import { content } from '@/data/content';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

/** Testimonial wall — quote cards with avatar, rating, and attribution. */
export function Testimonials() {
  const { testimonials } = content;

  return (
    <section id="testimonials" className="section-pad bg-surface/40">
      <Container>
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          heading={testimonials.heading}
          paragraph={testimonials.paragraph}
        />

        <ul className="mt-16 grid gap-5 md:grid-cols-2">
          {testimonials.items.map((testimonial, index) => (
            <li key={testimonial.name}>
              <Reveal delay={(index % 2) * 0.1} className="h-full">
                <figure className="flex h-full flex-col rounded-3xl bg-card p-7 ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div
                    className="flex items-center gap-1"
                    role="img"
                    aria-label={`Rated ${testimonial.rating} out of 5`}
                  >
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
                    ))}
                  </div>

                  <blockquote className="mt-5 flex-1">
                    <p className="text-base leading-relaxed text-ink">“{testimonial.quote}”</p>
                  </blockquote>

                  <figcaption className="mt-7 flex items-center gap-4 border-t border-line pt-6">
                    <span
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm font-semibold text-paper"
                      style={{ backgroundColor: `hsl(${testimonial.avatar.hue} 45% 42%)` }}
                      aria-hidden="true"
                    >
                      {testimonial.avatar.initials}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
                      <p className="text-sm text-muted">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}