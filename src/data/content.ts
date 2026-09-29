import type { SiteContent } from './types';

/**
 * Centralized content for the Hartfelt Studio website.
 * Edit this file to re-brand the template for a new client —
 * components should never contain hardcoded business copy.
 */
export const content: SiteContent = {
  brand: {
    name: 'Hartfelt Studio',
    shortName: 'Hartfelt',
    tagline: 'Brand, Web & Product Design',
    description:
      'Hartfelt Studio is a boutique design and engineering agency helping ambitious companies build brands, websites, and products that feel inevitable.',
  },

  seo: {
    title: 'Hartfelt Studio — Brand, Web & Product Design Agency',
    description:
      'We design brands, build websites, and engineer products for ambitious companies. Strategy, design, and development under one roof.',
    url: 'https://hartfelt.studio',
  },

  hero: {
    eyebrow: 'Boutique design studio · San Francisco',
    headline: 'We design brands and digital products that feel',
    highlight: 'inevitable.',
    paragraph:
      'Hartfelt Studio partners with founders and product teams to turn early ideas into polished brands, websites, and digital products — without the agency bloat. One senior team, strategy through launch.',
    primary: { label: 'Start a project', href: '#contact' },
    secondary: { label: 'View our work', href: '#work' },
    visualLabel: 'Website · Daunton Hotels',
    visualMeta: 'Brand, Web Design & Development',
  },

  nav: [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],

  services: {
    eyebrow: 'What we do',
    heading: 'Everything you need to launch, under one roof.',
    paragraph:
      'No hand-offs, no dropped context. Our senior team carries your project from first workshop to final launch.',
    items: [
      {
        icon: 'palette',
        title: 'Brand identity',
        description:
          'Strategy, naming, and visual identity systems that make the right people sit up and take notice.',
        link: { label: 'Explore branding', href: '#contact' },
      },
      {
        icon: 'layout',
        title: 'Website design',
        description:
          'Marketing sites and product pages designed around one job: turning visitors into customers and questions into briefs.',
        link: { label: 'See our sites', href: '#work' },
      },
      {
        icon: 'code',
        title: 'Web development',
        description:
          'Fast, accessible, hand-built front ends. No theme bloat, no page-builder crutches — just clean code that ships.',
        link: { label: 'How we build', href: '#work' },
      },
      {
        icon: 'sparkles',
        title: 'Product design',
        description:
          'End-to-end product design for SaaS and apps — from messy problem space to polished, shippable interface.',
        link: { label: 'Product work', href: '#contact' },
      },
      {
        icon: 'target',
        title: 'Brand strategy',
        description:
          'Positioning, messaging, and voice workshops that give every later decision a sharper edge.',
        link: { label: 'Book a workshop', href: '#contact' },
      },
      {
        icon: 'trending-up',
        title: 'Growth & CRO',
        description:
          'Landing page experiments, funnel teardowns, and conversion improvements that pay for themselves.',
        link: { label: 'Talk growth', href: '#contact' },
      },
    ],
  },

  about: {
    eyebrow: 'About the studio',
    heading: 'A small team with senior standards.',
    paragraphs: [
      "Founded in 2017, Hartfelt Studio started as a two-person team helping early-stage startups look and feel as good as their ambitions. Today we're a tight-knit group of strategists, designers, and engineers based in San Francisco, working with clients around the world.",
      'We keep the team senior on purpose — you talk directly to the people doing the work, and every project is led by a partner, not a junior. That means fewer meetings, faster decisions, and work that holds up long after launch.',
    ],
    image: { src: '/images/about-studio.svg', alt: 'The Hartfelt Studio team at work in the San Francisco studio' },
    stats: [
      { value: '120+', label: 'Projects shipped' },
      { value: '9 yrs', label: 'Working together' },
      { value: '40+', label: 'Industries served' },
      { value: '94%', label: 'Clients who return' },
    ],
    cta: { label: 'Meet the team', href: '#contact' },
  },

  work: {
    eyebrow: 'Selected work',
    heading: 'Recent projects we’re proud of.',
    paragraph:
      'A few favorites from the last couple of years — spanning brand, web, and product. Full portfolio available on request.',
    categories: ['All', 'Branding', 'Web', 'Product'],
    items: [
      {
        title: 'Daunton Hotels',
        category: 'Web',
        description: 'A direct-booking website that lifted conversion by 42% in the first quarter.',
        image: { src: '/images/work-daunton.svg', alt: 'Daunton Hotels website homepage on a laptop' },
        link: { label: 'View case study', href: '#contact' },
      },
      {
        title: 'Ember & Oak Coffee',
        category: 'Branding',
        description: 'Full identity — logo, packaging, and storefront system for a specialty roaster.',
        image: { src: '/images/work-ember.svg', alt: 'Ember & Oak Coffee brand identity and packaging' },
        link: { label: 'View case study', href: '#contact' },
      },
      {
        title: 'Relay Finance',
        category: 'Product',
        description: 'End-to-end app design for a B2B payments platform, from workflow to final UI.',
        image: { src: '/images/work-relay.svg', alt: 'Relay Finance product dashboard interface' },
        link: { label: 'View case study', href: '#contact' },
      },
      {
        title: 'Haven Clean',
        category: 'Branding',
        description: 'Identity and launch site for a climate-focused home services brand.',
        image: { src: '/images/work-haven.svg', alt: 'Haven Clean identity and website' },
        link: { label: 'View case study', href: '#contact' },
      },
      {
        title: 'Kite Analytics',
        category: 'Web',
        description: 'A marketing site that finally explains a complex product in plain English.',
        image: { src: '/images/work-kite.svg', alt: 'Kite Analytics marketing website' },
        link: { label: 'View case study', href: '#contact' },
      },
      {
        title: 'Porter & Post',
        category: 'Product',
        description: 'Mobile-first design system and app UX for a social commerce startup.',
        image: { src: '/images/work-porter.svg', alt: 'Porter & Post mobile app screens' },
        link: { label: 'View case study', href: '#contact' },
      },
    ],
  },

  testimonials: {
    eyebrow: 'Testimonials',
    heading: 'Teams we’ve worked with, in their words.',
    paragraph:
      'We’re proud of the relationships we keep — most of our work starts with a recommendation.',
    items: [
      {
        quote:
          'Hartfelt rebuilt our entire brand in six weeks and it felt like they had been part of our team for years. Every deliverable was thoughtful, fast, and exactly on strategy.',
        name: 'Maya Chen',
        role: 'Co-founder & CEO',
        company: 'Relay Finance',
        rating: 5,
        avatar: { initials: 'MC', hue: 18 },
      },
      {
        quote:
          'Working with Hartfelt was refreshing — no bloated process, no jargon, just sharp thinking and beautiful execution delivered on time.',
        name: 'Daniel Whitaker',
        role: 'Head of Marketing',
        company: 'Daunton Hotels',
        rating: 5,
        avatar: { initials: 'DW', hue: 210 },
      },
      {
        quote:
          'The website they built for us pays for itself every month. I stopped tracking ROI on the project because it became obvious.',
        name: 'Priya Shankar',
        role: 'Founder',
        company: 'Ember & Oak',
        rating: 5,
        avatar: { initials: 'PS', hue: 330 },
      },
      {
        quote:
          'Our old agency handed off a PDF of recommendations. Hartfelt shipped the product. That difference is the whole story.',
        name: 'Jonas Meyer',
        role: 'CTO',
        company: 'Kite Analytics',
        rating: 5,
        avatar: { initials: 'JM', hue: 95 },
      },
    ],
  },

  pricing: {
    eyebrow: 'Pricing',
    heading: 'Simple pricing for serious partners.',
    paragraph:
      'Most engagements fall into one of these models. Every project is scoped before we start, so you always know what you’re paying for.',
    annualDiscountLabel: 'Save 20% with annual billing',
    plans: [
      {
        name: 'Launch',
        description: 'For early-stage startups that need to look credible, fast.',
        monthlyPrice: 4900,
        annualPrice: 3900,
        cta: { label: 'Start with Launch', href: '#contact' },
        features: [
          'Brand or site in 3–4 weeks',
          'One dedicated senior designer',
          'Up to 3 revision rounds',
          'Source files included',
          '30 days of post-launch support',
        ],
      },
      {
        name: 'Grow',
        description: 'For established teams ready to build a system that scales.',
        monthlyPrice: 8900,
        annualPrice: 7100,
        cta: { label: 'Start with Grow', href: '#contact' },
        highlighted: true,
        features: [
          'Designer + developer pair',
          'Monthly roadmap & retainer',
          'Brand, web, and product work',
          'Unlimited revisions',
          'Weekly async reporting',
          'Priority Slack channel',
        ],
      },
      {
        name: 'Partner',
        description: 'Embedded product design for teams moving fast and often.',
        monthlyPrice: 14900,
        annualPrice: 11900,
        cta: { label: 'Talk to us', href: '#contact' },
        features: [
          'Full senior cross-functional team',
          'Weekly on-site (or remote) sprints',
          'End-to-end strategy to launch',
          'Continuous discovery & testing',
          'Quarterly business reviews',
        ],
      },
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    heading: 'Answers, before you ask.',
    paragraph: 'The questions we hear most often — and the straight answers.',
    items: [
      {
        question: 'How much does a typical project cost?',
        answer:
          'Projects usually start around $25k and scale with scope. Retainers run from $4.9k to $15k per month depending on team size and delivery cadence. After a free discovery call we send a fixed-scope proposal — no surprises, no hourly cliff-hangers.',
      },
      {
        question: 'How long will my project take?',
        answer:
          'A focused brand or marketing site takes 3–6 weeks. Larger builds or product design engagements run 8–12 weeks. We work in two-week sprints with demos at every milestone, so you always know exactly where things stand.',
      },
      {
        question: 'Will I work with senior people?',
        answer:
          'Always. We’re a deliberately small studio — the people on your intro call are the people doing the work. No juniors learning on your budget, no account managers relaying messages between rooms.',
      },
      {
        question: 'What does the process look like?',
        answer:
          'We start with a strategy workshop to align on goals and audience, move into design exploration, then build and ship. Most clients get one round of revision per phase, and we demo live at every step so nothing is a surprise on delivery day.',
      },
      {
        question: 'Can you take over an existing website or product?',
        answer:
          'Yes — roughly a third of our engagements are redesigns or rescues of existing work. We’ll audit what you have, keep what works, and rebuild what doesn’t, with minimal disruption to your traffic or operations.',
      },
      {
        question: 'What if I just need a website, not a full brand?',
        answer:
          'That’s a perfectly good place to start. We can begin with a focused web project and layer brand, product, or growth work on after — many of our best relationships started with a single landing page.',
      },
    ],
  },

  cta: {
    eyebrow: 'Let’s talk',
    heading: 'Have an idea worth building?',
    paragraph:
      'Tell us a little about your project and we’ll come back within one business day with honest thoughts, a timeline, and a fixed quote — whether we’re the right fit or not.',
    primary: { label: 'Start a project', href: '#contact' },
    secondary: { label: 'hello@hartfelt.studio', href: 'mailto:hello@hartfelt.studio' },
  },

  contact: {
    eyebrow: 'Contact',
    heading: 'Tell us what you’re building.',
    paragraph:
      'Share a few details and we’ll get back to you within one business day. Prefer email? Write to us anytime at the address below.',
    info: {
      email: 'hello@hartfelt.studio',
      phone: '+1 (415) 555-0131',
      address: '2409 Mission St, San Francisco, CA',
      hours: 'Mon–Fri · 9:00–18:00 PT',
    },
  },

  footer: {
    summary:
      'A boutique design and development studio in San Francisco. We help ambitious companies look as good as they are — and convert like it.',
    legal: [
      { label: 'Privacy', href: '#contact' },
      { label: 'Terms', href: '#contact' },
      { label: 'Cookies', href: '#contact' },
    ],
  },

  socials: [
    { label: 'Instagram', href: 'https://instagram.com/hartfeltstudio', icon: 'instagram' },
    { label: 'Twitter', href: 'https://twitter.com/hartfeltstudio', icon: 'twitter' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/hartfeltstudio', icon: 'linkedin' },
    { label: 'Dribbble', href: 'https://dribbble.com/hartfeltstudio', icon: 'dribbble' },
    { label: 'GitHub', href: 'https://github.com/hartfeltstudio', icon: 'github' },
  ],
};