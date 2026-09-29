import { useEffect, useState } from 'react';
import { AnimatePresence, useScroll } from 'framer-motion';
import { Menu } from 'lucide-react';
import { content } from '@/data/content';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { MobileNav } from './MobileNav';

/**
 * Sticky top navigation.
 * Turns solid + blurred once the page is scrolled, and opens the
 * mobile drawer on small screens.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (y) => setScrolled(y > 8));
    return unsubscribe;
  }, [scrollY]);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300',
          scrolled
            ? 'border-b border-line/80 bg-paper/85 shadow-soft backdrop-blur-md'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <Container className="flex h-16 items-center justify-between sm:h-[4.5rem]">
          <a href="#top" className="group flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
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

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {content.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors duration-200 hover:bg-surface hover:text-ink focus-visible:outline-2 focus-visible:outline-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="#contact" size="md">
              Start a project
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-line text-ink transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-accent lg:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </Container>
      </header>

      <AnimatePresence>{open && <MobileNav open={open} onClose={() => setOpen(false)} />}</AnimatePresence>
    </>
  );
}