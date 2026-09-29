import { Dribbble, Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { content } from '@/data/content';
import type { SocialLink } from '@/data/types';
import { Container } from '@/components/ui/Container';

const socialIcons: Record<SocialLink['icon'], LucideIcon> = {
  instagram: Instagram,
  twitter: Twitter,
  linkedin: Linkedin,
  dribbble: Dribbble,
  github: Github,
};

/** Multi-column footer: brand summary, navigation, services, contact, socials. */
export function Footer() {
  const year = new Date().getFullYear();

  const columns = [
    {
      heading: 'Studio',
      links: [
        { label: 'Services', href: '#services' },
        { label: 'About', href: '#about' },
        { label: 'Work', href: '#work' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
      ],
    },
    {
      heading: 'Expertise',
      links: content.services.items.slice(0, 5).map((service) => ({
        label: service.title,
        href: '#services',
      })),
    },
  ];

  return (
    <footer className="border-t border-line bg-surface/60">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand summary */}
          <div className="lg:col-span-4">
            <a href="#top" className="group inline-flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
              <span
                className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-sm font-bold text-paper transition-transform duration-300 group-hover:rotate-6"
                aria-hidden="true"
              >
                {content.brand.shortName.charAt(0)}
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-ink">
                {content.brand.shortName}
                <span className="text-muted"> Studio</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">{content.footer.summary}</p>

            <ul className="mt-6 flex items-center gap-3">
              {content.socials.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${content.brand.name} on ${social.label}`}
                      className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-line text-muted transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink hover:text-paper hover:ring-ink focus-visible:outline-2 focus-visible:outline-accent"
                    >
                      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Link columns */}
          {columns.map((column) => (
            <nav key={column.heading} className="lg:col-span-2" aria-label={`Footer — ${column.heading}`}>
              <h3 className="text-sm font-semibold tracking-wide text-ink">{column.heading}</h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold tracking-wide text-ink">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${content.contact.info.email}`}
                  className="group inline-flex items-center gap-3 transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-accent"
                >
                  <Mail className="h-4.5 w-4.5 shrink-0 text-muted group-hover:text-accent" aria-hidden="true" />
                  {content.contact.info.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${content.contact.info.phone.replace(/[^+\d]/g, '')}`}
                  className="group inline-flex items-center gap-3 transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-accent"
                >
                  <Phone className="h-4.5 w-4.5 shrink-0 text-muted group-hover:text-accent" aria-hidden="true" />
                  {content.contact.info.phone}
                </a>
              </li>
              <li className="inline-flex items-center gap-3">
                <MapPin className="h-4.5 w-4.5 shrink-0 text-muted" aria-hidden="true" />
                {content.contact.info.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {year} {content.brand.name}. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            {content.footer.legal.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-xs text-muted transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}