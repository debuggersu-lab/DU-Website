# DESIGN.md — Debuggers United Website

> A comprehensive design specification for LLMs working on the Debuggers United (`index.html`) project.

---

## 1. Project Overview

**Debuggers United** is a single-page, dark-themed community website for an elite developer collective. The tagline is *"We Debug. We Build. We Unite."* The site is built with pure HTML + Tailwind CSS (CDN) + vanilla JavaScript — no framework, no build step. It is fully self-contained in `index.html`.

### Brand Identity
| Asset | Description |
|---|---|
| Logo (DU mark) | Orange gradient "DU" lettermark with a `</>` code symbol inside the D, encircled by an arc — conveys coding identity |
| Full brand image | Esports-style illustrated mascot (armored hooded figure) with the wordmark "DEBUGGERS UNITED" in bold golden fire-lit type |
| Tagline | "Elite Developer Collective" |
| Slogan options | "Code the Vision, Shape the Mission" / "We Debug. We Build. We Unite." |

---

## 2. Color System

All colors are defined in the Tailwind config and must be referenced by their semantic token names, not raw hex values, unless in raw CSS.

### Primary Palette
| Token | Hex | Usage |
|---|---|---|
| `primary` | `#ffb693` | Primary text, icons, active states, borders |
| `primary-container` | `#ff6b00` | CTA buttons, accent fills, glow sources |
| `on-primary-container` | `#572000` | Text on orange buttons |
| `primary-fixed` | `#ffdbcc` | Subtle primary tints |
| `primary-fixed-dim` | `#ffb693` | Dimmed primary |

### Surface / Background
| Token | Hex | Usage |
|---|---|---|
| `background` / `surface` | `#131313` | Page background |
| `surface-dim` | `#131313` | Darkest layer |
| `surface-container-lowest` | `#0e0e0e` | Footer background |
| `surface-container-low` | `#1c1b1b` | Subtle card backgrounds |
| `surface-container` | `#201f1f` | Default card / panel background |
| `surface-container-high` | `#2a2a2a` | Elevated card surfaces |
| `surface-container-highest` | `#353534` | Tooltip / popover backgrounds |
| `surface-bright` | `#3a3939` | Highlight panels |
| `surface-variant` | `#353534` | Variant surface areas |

### On-Surface / Text
| Token | Hex | Usage |
|---|---|---|
| `on-background` / `on-surface` | `#e5e2e1` | Primary body text |
| `on-surface-variant` | `#e2bfb0` | Secondary / muted text, subtitles |
| `inverse-surface` | `#e5e2e1` | Light-mode inversion |
| `inverse-on-surface` | `#313030` | Text on light inversion |

### Accent / Tertiary
| Token | Hex | Usage |
|---|---|---|
| `tertiary` / `tertiary-fixed-dim` | `#00dbe9` | Gradient highlights, splash text accent |
| `tertiary-fixed` | `#7df4ff` | Lighter cyan accent |
| `tertiary-container` | `#00a9b4` | Teal fills |

### Secondary / Neutral
| Token | Hex | Usage |
|---|---|---|
| `secondary` | `#c8c6c5` | Secondary UI elements |
| `secondary-container` | `#474746` | Secondary button fills |
| `on-secondary` | `#313030` | Text on secondary |

### Semantic
| Token | Hex | Usage |
|---|---|---|
| `outline` | `#a98a7d` | Default border color |
| `outline-variant` | `#5a4136` | Subtle dividers |
| `error` | `#ffb4ab` | Error states |
| `error-container` | `#93000a` | Error backgrounds |

### Special CSS Utility Colors (raw hex, defined in style blocks)
- Body background: `#050505` (slightly darker than `background` token — used as the true page base)
- Orange glow: `rgba(255, 107, 0, 0.X)` — the core glow color derived from `primary-container`
- Glass card background: `rgba(255, 255, 255, 0.03)`
- Glass card border: `rgba(255, 255, 255, 0.1)`

---

## 3. Typography

### Font Families
| Family | Source | Use |
|---|---|---|
| **Hanken Grotesk** | Google Fonts | All display, headline, and body text |
| **JetBrains Mono** | Google Fonts | Code labels, monospace terminal text, keyboard UI |

### Type Scale (Tailwind font-size tokens)
| Token | Size / Line Height / Weight | Use |
|---|---|---|
| `display-lg` | 72px / 1.0 / 900, tracking -0.04em | Hero section primary headline |
| `headline-lg` | 48px / 56px / 800, tracking -0.02em | Section headings (desktop) |
| `headline-lg-mobile` | 32px / 40px / 800, tracking -0.02em | Section headings (mobile) |
| `headline-md` | 32px / 40px / 700, tracking -0.01em | Card titles, sub-headings |
| `body-lg` | 18px / 28px / 400 | Descriptive paragraphs |
| `body-sm` | 14px / 20px / 400 | Small card descriptions, metadata |
| `label-caps` | 12px / 16px / 600, tracking 0.15em | ALL-CAPS labels, nav links, button text, tags |
| `code-block` | 14px / 24px / 400 | Typing effect text, terminal displays |

### Font Usage Rules
- Section headings: always `uppercase`, always Hanken Grotesk
- Buttons: always `font-label-caps text-label-caps uppercase tracking-widest font-bold`
- Monospace/terminal contexts: always JetBrains Mono via `font-code-block` or `font-label-caps`
- Hero headline: `font-display-lg text-display-lg` with `tracking-tighter`

---

## 4. Spacing & Layout

### Spacing Tokens
| Token | Value | Use |
|---|---|---|
| `margin-desktop` | 64px | Horizontal page margin on desktop |
| `margin-mobile` | 20px | Horizontal page margin on mobile |
| `glass-padding` | 32px | Internal card padding |
| `gutter` | 24px | Grid column gaps |
| `unit` | 8px | Base spacing unit |
| `container-max` | 1440px | Maximum content container width |

### Layout Patterns
- Max-width wrapper: `max-w-container-max mx-auto px-margin-desktop`
- Section vertical padding: `py-32` (128px) standard; `py-20` for tighter sections
- All `<section>` elements have `relative z-10` to sit above the video background layer
- Grid for projects: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter`
- Stats grid: `grid-cols-1 md:grid-cols-3 gap-6`
- Team cards: `flex gap-8 overflow-x-auto` with `snap-x snap-mandatory` (horizontal scroll, snap-to-card)

### Border Radius Scale
| Token | Value |
|---|---|
| `DEFAULT` | 4px |
| `lg` | 8px |
| `xl` | 12px |
| `full` | 9999px |
- Cards use `rounded-2xl` (Tailwind default 16px)
- Buttons use `rounded-xl` (12px) or `rounded-lg` (8px)
- Nav logo: `rounded-full`

---

## 5. Component Library

### 5.1 Glass Card (`.glass-card`)
The primary surface component. Used for stat cards, project cards, event cards, and team member cards.
```css
background: rgba(255, 255, 255, 0.03);
backdrop-filter: blur(24px);
border: 1px solid rgba(255, 255, 255, 0.1);
transition: border-color 0.4s ease, transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s ease;
transform-style: preserve-3d;
will-change: transform;
```
- On hover (for interactive cards): `hover:scale-[1.02]` or `hover:scale-105`
- On hover (for event list items): `hover:translate-x-2 hover:border-primary/40`
- Use `.tilt-card` wrapper with `perspective: 1000px` to enable 3D mouse-tilt effect via JS

### 5.2 Primary Button (`.btn-primary`)
Used for all main CTAs ("Join Community", "Register Your Team", "ACHIEVEMENTS", etc.).
```css
background: #ff6b00;
box-shadow: 0 0 20px rgba(255, 107, 0, 0.2);
transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
```
- Always combined with `.magnetic-hover` class for JS-driven magnetic cursor effect
- Text color: `text-on-primary-container` (`#572000`)
- Text style: `font-label-caps text-label-caps uppercase tracking-widest font-bold`

### 5.3 Ghost Button (`.btn-ghost`)
Used for secondary CTAs ("ABOUT").
```css
border: 0.5px solid rgba(255, 255, 255, 0.2);
```
- Has a shine sweep pseudo-element (`::after`) on hover
- Text color: `text-primary`

### 5.4 Navigation Bar (`<nav>`)
- Fixed top, `z-50`, full-width
- Default: `bg-surface/5 backdrop-blur-3xl border-b border-white/10 h-20`
- After scroll (`.scrolled` class via JS):
  ```css
  background-color: rgba(19, 19, 19, 0.85);
  border-bottom: 1px solid rgba(255, 107, 0, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  height: 4.5rem;
  ```
- Logo: circular image with orange glow filter, `border: 1.5px solid rgba(255,107,0,0.4)`
- Brand name: `font-headline-md font-bold text-primary tracking-tighter`
- Nav links: `font-label-caps text-label-caps`. Active = `text-primary border-b-2 border-primary`. Inactive = `text-on-surface-variant hover:text-primary`
- Mobile: nav links hidden (`hidden md:flex`), CTA button visible

### 5.5 Section Heading Pattern
Every content section uses this exact pattern:
```html
<h2 class="font-headline-lg text-headline-lg uppercase mb-4">Section Title</h2>
<p class="text-on-surface-variant font-body-lg">Subtitle description here.</p>
```
With `reveal` class on the wrapper div for scroll animation.

### 5.6 Project Card
Structure: image (h-64 with hover scale) → gradient overlay → tag pill + icon → title + description → author avatar + handle.
- Tag pill: `font-label-caps text-primary bg-primary/10 px-3 py-1 rounded-full`
- External link icon: `material-symbols-outlined text-on-surface-variant` → `open_in_new`

### 5.7 Event / Hackathon Card
Main featured hackathon: glass-card with countdown timer grid (`grid-cols-4`), title in `text-primary`, CTA button.
List items: glass-card with date box (`bg-surface-container-high rounded-lg`), title, subtitle, `arrow_forward` icon.

### 5.8 Team Card
Horizontal scroll container, each card `w-80 flex-none snap-center`:
- Avatar placeholder: `w-44 h-44 rounded-full bg-surface-container-high border-2 border-dashed border-primary/30`
- Role title: `font-headline-md text-xl`
- Name placeholder: `font-label-caps text-sm text-primary/60 uppercase tracking-widest border-b border-dashed border-primary/20`

### 5.9 Glowing Divider (`.glowing-divider`)
A 1px horizontal rule used to separate sections:
```css
height: 1px;
background: linear-gradient(90deg, transparent 0%, rgba(255, 107, 0, 0.3) 50%, transparent 100%);
```

### 5.10 Parallax Icons
`material-symbols-outlined` icons floating in the hero background:
```css
filter: grayscale(1) opacity(0.2);
position: absolute;
z-index: -1;
will-change: transform;
```
Icons used: `terminal`, `code_blocks`, `deployed_code`. Moved by mouse via `data-depth` attribute in JS.

---

## 6. Animation & Motion System

### Scroll Reveal (`.reveal`)
```css
opacity: 0;
transform: translateY(40px);
transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
```
`.reveal.active` → `opacity: 1; transform: translateY(0)`
Applied via `IntersectionObserver` in JS. Delay variants: `delay-100`, `delay-200`, ... `delay-[900ms]`.

### Scale-In (`.scale-in`)
```css
opacity: 0;
transform: scale(0.95);
transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
```
`.scale-in.active` → `opacity: 1; transform: scale(1)`.

### Hero Headline Letter Animation (`.headline-letter`)
Each letter of the headline wraps in a `<span class="headline-letter">`:
```css
opacity: 0;
transform: translateY(1em);
filter: blur(10px);
transition: opacity 0.5s, transform 0.6s, filter 0.5s — all cubic-bezier(0.23, 1, 0.32, 1);
```
`.headline-letter.visible` → fully revealed. Letters staggered by index × 50ms.

### Text Glow (`.text-glow-orange`)
```css
color: #ff6b00;
text-shadow: 0 0 30px rgba(255, 107, 0, 0.2);
```

### Cursor Glow (`#cursor-glow`)
600×600px radial gradient circle following mouse cursor:
```css
background: radial-gradient(circle, rgba(255, 107, 0, 0.1) 0%, rgba(0, 0, 0, 0) 70%);
position: fixed; pointer-events: none; z-index: 0;
```
Follows mouse with `requestAnimationFrame` lerp for smooth trailing.

### Magnetic Hover (`.magnetic-hover`)
JS-driven: on mouse proximity, buttons shift position towards cursor slightly. On mouse leave, spring back.

### Typing Effect
Hero sub-headline uses a typewriter cycle through messages (JetBrains Mono), with blinking cursor via `::after { content: '|'; animation: blink 1s infinite; }`.

### Logo Float (`@keyframes logoFloat`)
```css
0% { transform: translateY(0) rotate(0deg); }
100% { transform: translateY(-20px) rotate(2deg); }
```
Duration: 4s, alternate, ease-in-out.

### Brand Pulsate (`@keyframes brandPulsate`)
```css
0% { transform: scale(1); text-shadow: 0 0 40px rgba(255,107,0,0.5); }
100% { transform: scale(1.02); text-shadow: 0 0 60px rgba(255,107,0,0.7); }
```
Duration: 2s, infinite, alternate.

### Accessibility
A `@media (prefers-reduced-motion: reduce)` block disables all transitions, transforms, and filters for motion-sensitive users. Cursor glow and cinematic splash are hidden entirely.

---

## 7. Cinematic Splash Screen

The page loads with a full-screen multi-stage splash (`#cinematic-splash`, `z-index: 9999`) before revealing the main site. Sequence:

| Stage | Duration | Description |
|---|---|---|
| **Stage 1 — Welcome** | ~3s visible | Large gradient text "WELCOME TO THE COMMUNITY" fades in then exits with blur |
| **Stage 2 — RGB Keyboard** | ~5s | Full QWERTY keyboard renders with per-key RGB glow (rainbow color array). Terminal types "YOU ARE ENTERING INTO THE WORLD OF..." character by character, animating corresponding keys. ENTER key flares orange on sequence end. |
| **Stage 3 — Brand Reveal** | ~4s | Both DU logos + "DEBUGGERS UNITED" wordmark appear with glow/float, tagline "Elite Developer Collective" below. Fades out. |
| **Exit** | ~1s | Splash removed from DOM, `body.locked` (overflow: hidden) releases, hero animations begin. |

Splash CSS motifs:
- Background: `#050505` with pulsating radial orange glow (`splash-bg-glow`)
- Splash text gradient: `linear-gradient(135deg, #ff6b00 0%, #00dbe9 50%, #7d42ff 100%)` clipped to text
- `splashIn`: scale 0.85→1, blur 20px→0, opacity 0→1
- `splashOut`: scale 1→1.1, blur 0→20px, opacity 1→0

---

## 8. Background System

Three-layer stacked background:

1. **Base video** (`#bg-video-base`): HLS stream from Mux CDN, looped, muted, `object-cover`
2. **Overlay video** (`#bg-video-overlay`): second HLS stream, `mix-blend-mode: screen; opacity: 0.6` — creates a composited visual effect
3. **Dim overlay**: `bg-black/40 backdrop-brightness-[0.7]` — ensures content readability
4. **Cursor glow**: orange radial gradient following the mouse (described above)

The background layer is `position: fixed; z-index: -1; inset: 0`. All content sections have `z-index: 10` to render above it.

---

## 9. Particle Canvas (`#duParticleCanvas`)

An interactive `<canvas>` (800×600) renders the DU logo as a particle field:
- The logo image is loaded, scaled to fit ~70% of canvas, pixel data extracted
- Each non-transparent pixel spawns a particle at that position
- Particles have `x, y, vx, vy, life` properties; gravity-like drift towards original positions
- Mouse proximity: particles within `mouseRadius` are repelled outward
- Particles rendered as small circles in the brand orange color
- Canvas is responsive: resizes on window resize, re-initializes particle grid
- Style: `cursor-crosshair`, `rounded-2xl`, `mx-auto max-w-full`

---

## 10. Page Sections (in order)

| # | Section ID | Content |
|---|---|---|
| 0 | `#cinematic-splash` | Multi-stage intro animation (see §7) |
| 1 | `<nav>` | Fixed header with logo, links, CTA |
| 2 | Hero (`<section>`) | Headline, typing subtitle, CTA buttons, 3 stat cards |
| 3 | `#particle-logo-section` | Interactive particle canvas |
| 4 | `#projects` | "Pioneering Projects" — 3-column card grid |
| 5 | `#events` | "Upcoming Hackathons" — featured countdown + event list |
| 6 | `#team-leads` | "Our Leadership" — horizontal scroll of 9 role cards |
| 7 | `<footer>` | Logo, copyright, nav links (Privacy, Status, Github, Discord) |

### Hero Stats
| Icon | Count | Label |
|---|---|---|
| `groups` | 2,500 | Active Developers |
| `rocket_launch` | 120 | Projects Built |
| `emoji_events` | 45 | Hackathons Won |

Stats animate from 0 to target via `requestAnimationFrame` counter when they scroll into view.

### Projects
| Title | Tag | Tech |
|---|---|---|
| NeuralNexus | Web3 / AI | Rust + Next.js |
| VoidCLI | DevTools | Terminal workspace |
| Aether Engine | Simulation | Browser-based 3D physics |

### Events
| Date | Title |
|---|---|
| Oct 12 | System Architecture Deep-dive |
| Oct 28 | Open Source Contribution Day |
| Nov 05 | Winter Startup Showcase |
| Featured | DU Global: Genesis (hackathon with live countdown) |

### Leadership Roles (9 cards)
Director → President → Vice President → Operating Lead → Dev Team Lead → Designer Lead → Social Media Lead → Marketing Lead → Management Lead

---

## 11. Icon System

All icons are **Material Symbols Outlined** from Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1" rel="stylesheet"/>
<span class="material-symbols-outlined">icon_name</span>
```
Common icons: `terminal`, `code_blocks`, `deployed_code`, `groups`, `rocket_launch`, `emoji_events`, `arrow_forward`, `open_in_new`, `timer`, `person`

---

## 12. External Dependencies (CDN only)

| Library | Version | Use |
|---|---|---|
| Tailwind CSS | Latest (CDN) | All utility styling + forms + container-queries plugins |
| HLS.js | Latest | HLS video stream playback |
| Google Fonts | — | Hanken Grotesk, JetBrains Mono, Material Symbols |

No npm, no build tools, no framework.

---

## 13. JavaScript Modules Summary

All JS is inline at the bottom of `<body>`, organized in IIFEs:

| Module | Responsibility |
|---|---|
| Cinematic Splash Lifecycle | Manages 3-stage intro sequence and body unlock |
| Video Background Setup | HLS stream loading for base + overlay videos |
| Nav Scroll Handler | Adds `.scrolled` class on scroll, triggers stat counters |
| Hero Animation | Splits headline into `.headline-letter` spans, staggers reveal |
| Typing Effect | Cycles through hero subtitle phrases with typewriter animation |
| Scroll Reveal Observer | `IntersectionObserver` for `.reveal` and `.scale-in` elements |
| Cursor Glow Tracker | RAF-based mouse follower for `#cursor-glow` |
| Magnetic Hover | Mouse proximity button attraction effect |
| 3D Tilt Cards | Mouse-over 3D rotation for `.tilt-card` elements |
| Parallax Icons | Mouse-move depth parallax for `.parallax-icon` elements |
| Particle Canvas | DU logo particle field with mouse repulsion |

---

## 14. Design Principles & Guidelines for LLMs

When generating new code or components for this project, follow these rules:

1. **Never use light mode.** The entire site is `dark` mode. `html` element always has `class="dark"`.
2. **Orange is the hero color.** `#ff6b00` / `primary-container` is for CTAs, accents, glows. `#ffb693` / `primary` is for text highlights and icons.
3. **Glassmorphism is the card pattern.** Use `.glass-card` for any new surface. Never use solid opaque backgrounds for cards.
4. **ALL-CAPS typography for headings and buttons.** Section titles, button labels, and nav links are always uppercase with `tracking-widest` or `tracking-[0.15em]`.
5. **Cubic-bezier easing everywhere.** Default easing: `cubic-bezier(0.23, 1, 0.32, 1)` for a smooth, slightly overshooting feel.
6. **Semantic token names over raw hex.** Always use Tailwind token names (`text-primary`, `bg-surface-container`, etc.) except in raw `<style>` blocks where tokens aren't available.
7. **Scroll animations are mandatory for new sections.** Wrap content in `.reveal` or `.scale-in` divs. The `IntersectionObserver` in the existing JS handles them automatically.
8. **JetBrains Mono for anything technical.** Labels, tags, button text, terminal output — use `font-label-caps` or `font-code-block`.
9. **Material Symbols for all icons.** Never use emoji or SVG icons when a Material Symbol equivalent exists.
10. **Maintain the z-index stack:** `body background = -1`, `main content = 10`, `nav = 50`, `cinematic splash = 9999`.
11. **Respect `prefers-reduced-motion`.** Any new animation must be suppressible via the existing `@media (prefers-reduced-motion: reduce)` block.
12. **Max content width is `1440px`.** Always use `max-w-container-max mx-auto` on content wrappers.