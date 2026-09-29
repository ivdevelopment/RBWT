import { ArrowUpRight } from 'lucide-react';
import { content } from '@/data/content';
import { getServiceIcon } from '@/lib/icons';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

/** Services grid — icon, title, description, optional link per card. */
export function Services() {
  const { services } = content;

  return (
    <section id="services" className="section-pad">
      <Container>
        <SectionHeading
          eyebrow={services.eyebrow}
          heading={services.heading}
          paragraph={services.paragraph}
        />

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service, index) => {
            const Icon = getServiceIcon(service.icon);
            return (
              <li key={service.title}>
                <Reveal delay={(index % 3) * 0.08} className="h-full">
                  <article className="group relative h-full rounded-3xl bg-card p-7 ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:ring-ink/15">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-surface text-ink ring-1 ring-line transition-colors duration-300 group-hover:bg-accent/10 group-hover:text-accent group-hover:ring-accent/20">
                      <Icon className="h-5.5 w-5.5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 font-display text-lg font-semibold tracking-tight text-ink">{service.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">{service.description}</p>
                    {service.link && (
                      <a
                        href={service.link.href}
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
                      >
                        {service.link.label}
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                      </a>
                    )}
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}