# Debuggers United — College Student Developer Community

> We Debug. We Build. We Unite.

**Debuggers United** is a community of college students, and this is the community's website. The application features a rich, cinematic visual design characterized by deep dark surfaces, vibrant orange and cyan highlights, glassmorphism card layouts, custom particle effects, and interactive animations.

Built with **React 19**, **TypeScript**, **Vite 8**, and **Tailwind CSS v4**, the application is structured with modular UI components, custom hooks, and responsive typography conforming to a robust and detailed design specification.

---

## 🚀 Tech Stack

- **Core Framework**: React 19 (Functional components, custom state hooks, and memoized callbacks)
- **Language**: TypeScript (Type-safe component properties and event handling)
- **Build Tool**: Vite 8 (Ultra-fast HMR and building pipeline)
- **Styling**: Tailwind CSS v4 (Leveraging `@theme inline` variables, `@import "tailwindcss"`, and modern container query support)
- **Components**: shadcn/ui (Built on top of Radix primitives)
- **Video Playback**: HLS.js (For smooth background video streaming from Mux CDN)
- **Icons**: Lucide React & Google Material Symbols Outlined

---

## ✨ Features & Cinematic Interaction

1. **Multi-Stage Cinematic Splash Screen**
   - **Stage 1 (Welcome)**: Gradient text intro with fade-in and exit blur.
   - **Stage 2 (RGB Keyboard)**: Virtual QWERTY keyboard rendering with dynamic key lights, terminal simulation typing key-by-key, and a flare-up of the enter key.
   - **Stage 3 (Brand Reveal)**: Floating animated logo, glowing wordmark, and tagline introduction.
2. **Dual-Layer Video Background**
   - A base stream coupled with a screen-blended overlay video to produce a high-tech atmosphere, dimmed with a custom overlay for optimal readability.
3. **Interactive Particle Canvas**
   - A dynamic HTML5 canvas that extracts logo pixel data to render the DU mark as a field of particles. Includes interactive mouse repulsion and automatic canvas resizing.
4. **Custom Motion & Animation System**
   - **Cursor Glow**: An orange radial gradient trailing the user's cursor dynamically.
   - **Magnetic Hover**: Attracts CTA buttons to the mouse cursor proximity.
   - **3D Tilt Cards**: Applies 3D rotation to `.tilt-card` elements on mouse move.
   - **Staggered Reveals**: IntersectionObserver-driven scroll reveals and stagger-split hero headline letters.
5. **Horizontal Snap Leadership Carousel**
   - A smooth horizontal scrolling track featuring 9 custom leadership role cards with custom snap-alignment behavior.

---

## 🎨 Design System

All custom design tokens are configured directly under the `@theme inline` block in `src/index.css`:

### Colors
- **Primary**: `#ffb693` (`text-du-primary`)
- **Primary Container (CTA Accent)**: `#ff6b00` (`bg-du-primary-container`, text-shadow glow)
- **On-Primary Container**: `#572000` (`text-du-on-primary-container`)
- **Background / Surfaces**: `#050505` page base, gradient glass layouts (`rgba(255,255,255,0.03)` with `backdrop-blur`)
- **Accent (Tertiary)**: `#00dbe9` / `#7df4ff` (Teal/Cyan highlight gradients)

### Typography
- **Hanken Grotesk**: Display, headlines, and main content.
- **JetBrains Mono**: Terminal text, labels, and tag elements.

---

## 📁 Directory Structure

```text
DU Website/
├── src/
│   ├── assets/              # Static assets and media files
│   ├── components/          # Modular React components
│   │   ├── ui/              # shadcn/ui components (Radix primitives)
│   │   ├── CinematicSplash.tsx
│   │   ├── CursorGlow.tsx
│   │   ├── EventsSection.tsx
│   │   ├── Footer.tsx
│   │   ├── GlowingDivider.tsx
│   │   ├── HeroSection.tsx
│   │   ├── LeadershipSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── ParticleCanvas.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── VideoBackground.tsx
│   │   ├── logo-base64.ts   # Base64 encoded logo assets
│   │   └── theme-provider.tsx
│   ├── hooks/               # Custom animation hooks
│   │   ├── useMagneticHover.ts
│   │   ├── useScrollReveal.ts
│   │   └── useTiltCards.ts
│   ├── lib/                 # Utility functions (cn tailwind-merge)
│   ├── App.tsx              # Main orchestrator component
│   ├── index.css            # Tailwind directives, theme variables, and global classes
│   └── main.tsx             # Entrypoint & DOM mounting
├── DESIGN.md                # Design requirements specification
├── GEMINI.md                # AI developer guidelines
└── package.json             # Build commands and package dependencies
```

---

## 🛠️ Getting Started

This repository uses **pnpm** as its package manager.

### Prerequisites

Ensure you have Node.js (v18+) and `pnpm` installed:
```bash
corepack enable pnpm
```

### Installation

Clone the repository and install the dependencies:
```bash
pnpm install
```

### Running Locally

To start the local development server:
```bash
pnpm dev
```

### Building for Production

To perform typescript checking and bundle the application for production:
```bash
pnpm build
```

To preview the production bundle locally:
```bash
pnpm preview
```

---

## ♿ Accessibility & Motion settings

The application respects the user's motion preferences. Under `@media (prefers-reduced-motion: reduce)`:
- Cinematic splash intro is bypassed.
- Cursor glow trails, video blending, and heavy hover transitions are disabled.
- Interactive transforms and parallax effects are simplified or hidden.
