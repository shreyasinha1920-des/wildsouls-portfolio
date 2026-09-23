/**
 * Tailwind theme for the "Wild" visual language.
 * Every value reads from a CSS variable in tokens.css (the source of truth),
 * so the two can never drift. Works with Tailwind v3, or v4 via `@config`.
 *
 * @type {import('tailwindcss').Config}
 */

// 5px grid: spacing-1 = 5px … spacing-27 = 135px
const grid = Object.fromEntries(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 18, 20, 24, 27, 30, 40].map((n) => [n, `${n * 5}px`])
);

const type = (size, lineHeight, letterSpacing = '0') => [
  `var(--text-${size})`,
  { lineHeight, letterSpacing },
];

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      ink: 'var(--ink)',
      paper: 'var(--paper)',
      cream: 'var(--cream)',
      graphite: 'var(--graphite)',
      muted: 'var(--muted)',
      page: 'var(--page-bg)',
      field: {
        terracotta: 'var(--field-terracotta)',
        tangerine: 'var(--field-tangerine)',
        apricot: 'var(--field-apricot)',
        brick: 'var(--field-brick)',
        lavender: 'var(--field-lavender)',
        blush: 'var(--field-blush)',
        orchid: 'var(--field-orchid)',
        poppy: 'var(--field-poppy)',
        mint: 'var(--field-mint)',
        jade: 'var(--field-jade)',
        sky: 'var(--field-sky)',
        butter: 'var(--field-butter)',
        pink: 'var(--field-pink)',
      },
      success: 'var(--success)',
      warning: 'var(--warning)',
      danger: 'var(--danger)',
      scrim: 'var(--scrim)',
    },
    fontFamily: {
      display: 'var(--font-display)',
      mono: 'var(--font-mono)',
      body: 'var(--font-body)',
    },
    fontSize: {
      'display-1': type('display-1', 'var(--leading-display)', 'var(--tracking-display)'),
      'display-2': type('display-2', 'var(--leading-heading)', 'var(--tracking-display)'),
      'display-3': type('display-3', 'var(--leading-heading)'),
      'display-4': type('display-4', '1.15'),
      'display-5': type('display-5', '1.25'),
      lead: type('lead', 'var(--leading-body)'),
      body: type('body', 'var(--leading-body)'),
      small: type('small', 'var(--leading-body)'),
      'mono-lg': type('mono-lg', 'var(--leading-mono-lg)', 'var(--tracking-mono-lg)'),
      mono: type('mono', 'var(--leading-body)', 'var(--tracking-mono)'),
      'mono-sm': type('mono-sm', 'var(--leading-body)', 'var(--tracking-mono-sm)'),
    },
    spacing: {
      ...grid,
      px: '1px',
      gutter: 'var(--gutter)',
      section: 'var(--section-y)',
      'container-x': 'var(--container-x)',
    },
    borderRadius: {
      none: '0',
      xs: 'var(--radius-xs)',
      card: 'var(--radius-card)',
      pill: 'var(--radius-pill)',
      arch: 'var(--radius-arch)',
      corner: 'var(--radius-corner)',
      'corner-sm': 'var(--radius-corner-sm)',
      full: '50%',
    },
    boxShadow: {
      none: 'none',
      float: 'var(--shadow-float)',
      glow: 'var(--shadow-glow)',
    },
    extend: {
      maxWidth: {
        container: 'var(--container-max)',
        measure: '40ch',
      },
      borderColor: {
        DEFAULT: 'var(--ink)',
      },
      transitionDuration: {
        fast: 'var(--dur-fast)',
        base: 'var(--dur-base)',
        slow: 'var(--dur-slow)',
        bg: 'var(--dur-bg)',
      },
      transitionTimingFunction: {
        sweep: 'var(--ease-sweep)',
        move: 'var(--ease-move)',
        out: 'var(--ease-out)',
      },
      // Keyframes live in tokens.css; these just name the animations.
      animation: {
        marquee: 'marquee var(--dur-marquee) linear infinite',
        'line-in': 'line-in var(--dur-slow) var(--ease-sweep) forwards',
        'line-out': 'line-out var(--dur-slow) var(--ease-sweep) forwards',
        rotate: 'rotation var(--dur-rotate) linear infinite',
        ticker: 'ticker var(--dur-ticker) linear infinite',
      },
    },
  },
  plugins: [],
};
