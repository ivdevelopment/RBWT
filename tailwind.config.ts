import type { Config } from 'tailwindcss';

/**
 * Tailwind theme mapped to the design tokens in src/index.css.
 * Recolor the entire site by editing the CSS custom properties —
 * no component changes required.
 */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'rgb(var(--color-bg) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        card: 'rgb(var(--color-card) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        line: 'rgb(var(--color-line) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        'accent-bright': 'rgb(var(--color-accent-bright) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)', 'var(--font-sans)'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      boxShadow: {
        soft: '0 12px 32px -12px rgb(0 0 0 / 0.12)',
        card: '0 1px 2px rgb(0 0 0 / 0.06), 0 12px 24px -12px rgb(0 0 0 / 0.1)',
        'card-hover': '0 2px 4px rgb(0 0 0 / 0.08), 0 20px 40px -16px rgb(0 0 0 / 0.18)',
        focus: '0 0 0 3px rgb(var(--color-accent) / 0.25)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
      },
      keyframes: {
        // anchors for future keyframe-based utilities
      },
    },
  },
  plugins: [],
} satisfies Config;