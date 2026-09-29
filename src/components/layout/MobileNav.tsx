import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { content } from '@/data/content';
import { backdrop, navDrawer, staggerItem, staggerParent } from '@/lib/motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Full-screen mobile navigation drawer with focus management.
 * `open` is controlled by the parent so the exit animation can play.
 */
export function MobileNav({ open, onClose }: MobileNavProps) {
  const prefersReducedMotion = useReducedMotion();

  // Trap focus inside the drawer and restore it on close.
  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const panel = document.getElementById('mobile-menu');
    (panel?.querySelector('a, button') as HTMLElement | null)?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key !== 'Tab' || !panel) return;
      const focusables = panel.querySelectorAll<HTMLElement>('a[href], button');
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] lg:hidden"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={prefersReducedMotion ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : backdrop}
    >
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-ink/30 backdrop-blur-sm"
        tabIndex={-1}
      />

      <motion.div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        variants={prefersReducedMotion ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : navDrawer}
        className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto bg-paper shadow-2xl"
      >
        <Container className="flex h-16 shrink-0 items-center justify-between sm:h-[4.5rem]">
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            {content.brand.shortName}
            <span className="text-muted"> Studio</span>
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-line text-ink transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-accent"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </Container>

        <motion.nav
          initial="hidden"
          animate="visible"
          variants={prefersReducedMotion ? undefined : staggerParent}
          className="flex flex-1 flex-col gap-1 px-6 py-6"
          aria-label="Mobile"
        >
          {content.nav.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={onClose}
              variants={prefersReducedMotion ? undefined : staggerItem}
              custom={index}
              className="group flex items-center justify-between rounded-2xl px-4 py-4 text-2xl font-semibold tracking-tight text-ink transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-accent"
            >
              {link.label}
              <ArrowRight
                className="h-6 w-6 text-muted opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                aria-hidden="true"
              />
            </motion.a>
          ))}
        </motion.nav>

        <Container className="shrink-0 pb-8">
          <Button href="#contact" size="lg" className="w-full">
            Start a project
          </Button>
        </Container>
      </motion.div>
    </motion.div>
  );
}