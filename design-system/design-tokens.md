# Design Tokens — "Wild" visual language

Source: SkillUI ultra extraction of wildsouls.gr (`../wildsouls-design/`), checked against the
full-page screenshots, scroll frames and DOM notes. Where SkillUI's auto-generated docs contradict
the screenshots, **the screenshots win**. See [§12 Corrections](#12-corrections-to-the-skillui-output).

Files in this folder:

| File | Purpose |
|---|---|
| `design-tokens.md` | This document: the reference |
| `tokens.css` | CSS custom properties, the single source of truth |
| `tailwind.config.js` | Tailwind theme that reads from `tokens.css` variables |

---

## 1. The look in one paragraph

Full-bleed, **flat color fields** stacked edge to edge, each section a different saturated,
earthy color (terracotta, tangerine, lavender, blush, mint). **Everything on them is ink-black**:
text, pill buttons, 1px rules, illustrations. Type is a three-voice system: a **heavy,
high-contrast display serif** for headlines, a **tracked-out uppercase monospace** for every
piece of UI chrome (nav, buttons, eyebrows, indices), and a quiet **grotesk** for body copy.
Shapes are big and soft: arches, stadiums, quarter-round corners, circles. Motion is
playful but sparse: section backgrounds swap color as you scroll, circular stamps slowly
rotate, button labels run like a marquee on hover, and underlines sweep in and out.

No gradients. No blur. Almost no shadows. Nothing grey except the cookie banner.

---

## 2. Color

### 2.1 Core

| Token | Hex | Role |
|---|---|---|
| `--ink` | `#000000` | All text, buttons, rules, icons. The real "accent". |
| `--paper` | `#ffffff` | Text on ink buttons; rare plain-white pages |
| `--cream` | `#fceeea` | Quiet page field (account / utility pages) |
| `--graphite` | `#333333` | Secondary dark buttons (only on dark overlays) |
| `--muted` | `#767676` | Placeholder text only. Use sparingly: hierarchy comes from size and voice, not grey |

### 2.2 Field colors (section backgrounds)

Sampled from undimmed full-page screenshots. Each section gets exactly one of these as a flat fill.

| Token | Hex | Seen on | Notes |
|---|---|---|---|
| `--field-terracotta` | `#be5a4b` | Product rows, shop, legal pages, footer | The house color. Most used. |
| `--field-tangerine` | `#ed7b49` | Press quotes, gift builder | Second most used |
| `--field-apricot` | `#eb874a` | "Six treasures" story page | Warmer sibling of tangerine |
| `--field-brick` | `#a5493d` | Corporate gifts | Darker terracotta |
| `--field-lavender` | `#abafd6` | Feature panel (quarter-round corner) | Cool counterpoint |
| `--field-blush` | `#f5afb9` | "Our wild way" numbered list | |
| `--field-orchid` | `#e9a8c6` | Recipes index | |
| `--field-poppy` | `#ec4844` | Gift promo tile | Loudest; use for one tile, never a whole page |
| `--field-mint` | `#22ae65` | Card arches, hero greenery | |
| `--field-jade` | `#139665` | Card arches (alternate) | |
| `--field-sky` | `#afe2f8` | Card arches, organic blobs | |
| `--field-butter` | `#fecf6b` | Blobs, badges | |
| `--field-pink` | `#f6b8d3` | Card arches, blobs | |

**Pairing rules seen on the site**
- Adjacent sections never share a color. Warm → warm is fine (terracotta → tangerine); cool
  colors (lavender, sky, mint) appear as **inset shapes on top of** a warm field, not as whole pages.
- Card and arch shapes take a field color that **differs** from the section they sit on, and
  the card's button takes **the same color as its arch** (mint arch → mint button).
- Text is always `--ink` on every field. Nothing is white-on-color except text inside ink buttons.

### 2.3 Status (forms only)

| Token | Hex |
|---|---|
| `--success` | `#22ae65` |
| `--warning` | `#fecf6b` |
| `--danger` | `#dd0000` |

### 2.4 Overlay

| Token | Value | Use |
|---|---|---|
| `--scrim` | `rgba(0,0,0,0.5)` | Modal backdrop (measured: every field is exactly 50% darker under the banner) |

---

## 3. Typography

### 3.1 Families

The originals are commercial. The web-safe stand-ins below are free on Google Fonts and match
each voice's shape. Swap them in `tokens.css` if you license the real ones.

| Voice | Token | Original (observed) | Stand-in | Used for |
|---|---|---|---|---|
| Display | `--font-display` | PF Regal Display Pro (Black) | **Playfair Display** 800–900 | Headlines, card titles, list items, footer headings |
| Mono | `--font-mono` | Tracked uppercase mono (SkillUI missed this one) | **DM Mono** 400/500 | Nav, buttons, eyebrows, tags, indices, footer links, inputs |
| Body | `--font-body` | Graphik LG | **Hanken Grotesk** 400/500 | Paragraphs, prices, captions |

### 3.2 Scale (desktop @1440 → mobile @375)

Sizes are fluid (`clamp`) and every endpoint is a multiple of 5.

| Token | Voice | Desktop | Mobile | Line-height | Tracking | Example on source |
|---|---|---|---|---|---|---|
| `display-1` | Display 900 | 90px | 50px | 1.05 | -0.01em | "Wild like a Nut?" |
| `display-2` | Display 900 | 65px | 40px | 1.1 | -0.01em | Big centered manifesto line |
| `display-3` | Display 800 | 45px | 30px | 1.1 | 0 | Product name, list-index rows |
| `display-4` | Display 800 | 35px | 25px | 1.15 | 0 | Card titles, footer headings |
| `display-5` | Display 700 | 25px | 20px | 1.25 | 0 | Numbered-list statements |
| `lead` | Body 400 | 20px | 20px | 1.5 | 0 | Price line "250G / 5,00€" |
| `body` | Body 400 | 16px | 16px | 1.5 | 0 | Paragraphs |
| `small` | Body 400 | 14px | 14px | 1.5 | 0 | Card blurbs, quotes |
| `mono-lg` | Mono 400 | 16px | 15px | 2 | 0.2em | Multi-line eyebrow blocks |
| `mono` | Mono 400 | 14px | 13px | 1.5 | 0.15em | Nav links, buttons |
| `mono-sm` | Mono 400 | 12px | 11px | 1.5 | 0.1em | Tags ("SWEET"), list numbers, copyright |

Rules:
- Mono is **always uppercase**. Display is **always sentence case**. Body is sentence case.
- Display headlines sit tight: line-height ≤ 1.1, no extra margin between lines.
- Superscript counters on display text use `mono-sm` at `vertical-align: super`.
- Max measure: body copy ~40ch (it's set in narrow columns on the source, around 240–320px wide).
- No bold body text. Emphasis comes from switching voice (mono or display), not weight.

---

## 4. Spacing

**Base unit: 5px.** Every margin, padding, gap and fixed size is a multiple of 5.

| Token | px | Typical use |
|---|---|---|
| `1` | 5 | Icon ↔ label |
| `2` | 10 | Eyebrow → headline |
| `3` | 15 | Container side padding (mobile), grid half-gutter |
| `4` | 20 | Headline → paragraph |
| `5` | 25 | |
| `6` | 30 | Grid gutter; paragraph → CTA |
| `8` | 40 | Card stack gap |
| `10` | 50 | |
| `12` | 60 | List row height padding (top + bottom) |
| `14` | 70 | Section padding (mobile) |
| `20` | 100 | |
| `24` | 120 | Section padding (desktop) |
| `27` | 135 | Footer top padding |

Semantic aliases in `tokens.css`: `--section-y` (70 → 120), `--gutter` (30), `--container-x` (15).

---

## 5. Layout & breakpoints

A Bootstrap-4-style 12-column grid (the source DOM uses `col-md-8 offset-xl-5` and similar).

| Breakpoint | Min width | Container max |
|---|---|---|
| `xs` | 0 | 100% − 30px |
| `sm` | 576px | 540px |
| `md` | 768px | 720px |
| `lg` | 992px | 960px |
| `xl` | 1200px | **1140px** (1110 content + 2×15 padding) |

- 12 columns, 30px gutter.
- Content often sits **off-center**: headlines left at `col-5`, lists pushed right with
  `offset-xl-5 col-xl-7`. Asymmetry is the norm; centered layouts are reserved for short
  manifesto lines and quotes.
- Sections are **full-bleed** (color runs edge to edge); only the content is contained.
- Inset panels escape the container on one side ("u-escape-container"): a lavender panel
  bleeds off the left edge, with its big rounded corner on the inside.

---

## 6. Shape & radius

| Token | Value | Use |
|---|---|---|
| `--radius-xs` | 3px | Checkboxes |
| `--radius-card` | 35px | Modals, dialogs, image cards |
| `--radius-pill` | 9999px | **All buttons**, tags, the email field |
| `--radius-arch` | 9999px 9999px 0 0 | Arch image frames |
| `--radius-stadium` | 9999px | Tall card backgrounds (rounded top and bottom) |
| `--radius-corner` | 0 220px 0 0 | Feature panel with one giant soft corner |
| `--radius-corner-sm` | 0 175px 0 0 | Same, smaller viewports |
| `--radius-circle` | 50% | Stamps, scroll-down button, big backdrop discs |

Borders are **1px solid ink** and only used as horizontal rules (under the nav, between list
rows, under inputs). Cards have **no border and no shadow**: the color change is the edge.

---

## 7. Elevation

Essentially flat. Only two shadows exist:

| Token | Value | Use |
|---|---|---|
| `--shadow-none` | `none` | Default for everything |
| `--shadow-float` | `rgba(0,0,0,0.12) 0 0 10px 0` | Modals and popovers only |
| `--shadow-glow` | `rgba(245,175,185,0.4) 0 0 20px 0` | Hover glow on a light pill (blush) |

---

## 8. Components

### Button: ink pill (primary)
```
bg: --ink          text: --paper      font: mono 14px, uppercase, tracking .2em
height: 65px (desktop) / 55px (mobile)  padding-x: 45px     radius: pill
hover: the label runs like a marquee (§9.2); the background does not change
focus-visible: 2px ink outline, 5px offset
```

### Button: field pill (secondary, inside cards)
Same shape, `height: 55px`, bg is the card's arch color, ink text.

### Link: sweep underline
Mono or body text with a 1px ink underline drawn by `::after`. It sweeps in from the left
on hover and out to the right on leave (§9.3).

### Nav
- Black announcement bar on top: body 16px, `--paper` text, 45px tall, centered.
- Nav row: mono 14px links split into a **left group and a right group around a centered
  logo stamp**. The 1px ink rule under the row breaks around the logo.
- The logo is a circular stamp that overlaps the rule and hangs into the hero.

### Circular stamp / badge
A 200px (desktop) / 120px (mobile) ink disc with text set on a circle (mono, tracked) around
a center glyph. The ring of text rotates slowly (§9.4). Stamps straddle section boundaries,
half on each color.

### Index list (numbered rows)
```
row:    border-bottom 1px ink, padding-y 25–30px
index:  mono-sm "01" in a fixed-width column (60px)
text:   display-5 (statement) or display-3 (single word) + superscript mono count
```

### Arch card (product/project card)
- A tall stadium or arch in a field color, with the image/illustration layered on top and
  **bleeding past** the shape.
- Below it: `display-4` title, `lead` meta line, field-colored pill button.
- An optional 35px ink circle badge sits on the top-right edge of the arch.
- Cards in a row are **staggered vertically** (alternate cards offset ~30px) and move with
  parallax (§9.5).

### Quote block
Centered, `mono-lg` eyebrow ("WORDS FROM THE SOUL!"), an icon above each quote, `display`
small-caps source name, `small` quote text, and dot pagination (8px ink dots, hollow when inactive).

### Input (newsletter)
Transparent background, no box: **1px ink bottom border only**, mono placeholder (uppercase,
tracked), ink `>` chevron submit at the right end. Focus: border thickens to 2px.

### Footer
Terracotta field. Two columns of mono uppercase links, 45px row rhythm. `display-4` headings.
Copyright in `mono-sm`. Ends in a **horizontal ticker** of icons and short slogans, then the
black announcement bar again.

---

## 9. Motion

Durations and easings below were all extracted from the source CSS.

| Token | Value |
|---|---|
| `--dur-fast` | 150ms (form fields, color) |
| `--dur-base` | 300ms (most transitions) |
| `--dur-slow` | 400ms (underline sweep) |
| `--dur-bg` | 500ms (section color switch) |
| `--ease-sweep` | `cubic-bezier(0.77, 0, 0.175, 1)` (easeInOutQuart) |
| `--ease-move` | `cubic-bezier(0.645, 0.045, 0.355, 1)` (easeInOutCubic) |
| `--ease-out` | `cubic-bezier(0.4, 0, 0.2, 1)` |

### 9.1 Background switcher (signature)
The page has **one** background layer. Each section declares a color (`data-color`). When a
section crosses the viewport's middle, the page background tweens to that color
(`background-color var(--dur-bg) var(--ease-move)`). This is what makes the scroll journey feel
cinematic: the color changes, the content just scrolls.

### 9.2 Marquee label on hover
```css
@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(calc(110% + 2.1em)) } }
/* 2.3s linear infinite. Two copies of the label, the second offset by -(110% + 2.1em), give a seamless loop. */
```

### 9.3 Underline sweep
```css
@keyframes line-in  { from { transform-origin: left;  transform: scaleX(0) } to { transform-origin: left;  transform: scaleX(1) } }
@keyframes line-out { from { transform-origin: right; transform: scaleX(1) } to { transform-origin: right; transform: scaleX(0) } }
/* 0.4s var(--ease-sweep) forwards */
```

### 9.4 Stamp rotation
`@keyframes rotation { to { transform: rotate(359deg) } }`: 30s linear infinite.

### 9.5 Parallax
Card media move at `speed 0.1` (translateY = −0.1 × distance from the viewport center).
Staggered columns get opposite signs for a gentle scissor effect.

### 9.6 Footer ticker
Continuous leftward marquee of icons and slogans, ~40s per loop, pauses on hover.

### 9.7 Custom cursor
Over cards, the cursor becomes an ink disc with a mono label ("VIEW"), scaling in with
`--dur-base var(--ease-out)`.

### 9.8 Reveal (our addition, keep it subtle)
Headlines and cards fade up 40px on first view (`--dur-slow var(--ease-out)`). The source
doesn't do this on every block, so use it sparingly.

### Reduced motion
With `prefers-reduced-motion: reduce`: no marquee, rotation, parallax or reveal. The background
switch becomes instant and the underline shows without the sweep.

---

## 10. Imagery & illustration

- Flat, geometric, cut-paper illustrations in the field palette with ink details (animals,
  hands, lips, cacti on the source). For the portfolio: **our own** icon set in the same
  spirit (ink glyphs, flat color blobs). Never reuse the source illustrations.
- Photos sit inside arches or stadiums, never plain rectangles, and may spill over the shape.
- Organic blobs (sky, butter, mint) peek in from section edges as decoration.

---

## 11. Don'ts

- No gradients, no blur, no drop shadows on cards.
- No grey text for hierarchy: switch voice (mono ↔ display) instead.
- No white-on-color text, except inside ink buttons.
- No square buttons: every button is a pill.
- No centered layouts for long content: go asymmetric.
- No new colors outside §2. Pick another field instead.

---

## 12. Corrections to the SkillUI output

| SkillUI said | Reality (from screenshots) | Decision |
|---|---|---|
| Accent `#ff996b` for CTAs | Never visible. CTAs are **ink-black pills**. | Dropped. Ink is the accent. |
| Surface `#eeeeee`, border `#333333` on cards | Cards have no border or background box, just the field-colored shape | Not used |
| Background `#ffffff` | Pages are full-bleed color fields | White is only for text on ink buttons |
| 2 fonts | 3 voices: display serif, **uppercase mono**, grotesk | Added the mono voice |
| "Headings in Graphik, body in PF Regal" (inconsistent) | Headings are PF Regal Display (serif), body is Graphik | Fixed |
| "No pill shapes" | Every button is a pill | Pills are standard |
| Minimal motion | Background switcher, marquee labels, rotating stamps, parallax, ticker | Documented in §9 |
| No breakpoints | Bootstrap grid classes in the DOM | Bootstrap 4 breakpoints |
| `--yith-*`, `--wp-*` variables | WooCommerce plugin noise | Ignored |
| Focus ring `#0060cc` | Browser default, not a brand choice | 2px ink outline |
