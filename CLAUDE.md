# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

## Architecture

This is a Next.js 16 landing page for Zervtek (Japanese vehicle auction business) using the App Router pattern with React 19.

### Key Directories

- `src/app/` - Next.js App Router pages and layouts
- `src/components/ui/` - Reusable UI primitives (Button, Container, Section, Card)
- `src/components/sections/` - Page section components (Hero, Services, Pricing, etc.)
- `src/config/site.ts` - Site configuration (name, URLs, contact info)
- `src/config/content.ts` - Centralized page content (headlines, features, pricing)
- `src/lib/utils.ts` - Utility functions (includes `cn()` for Tailwind class merging)

### Styling

Uses Tailwind CSS 4 with CSS custom properties for theming. Theme tokens are defined in `globals.css` using the `@theme inline` directive:

- **Brand Colors**: Primary Orange (#FA7921), Secondary Navy (#00374B)
- **Semantic tokens**: `--primary`, `--secondary`, `--background`, `--foreground`, `--muted`, `--border`
- **Dark mode**: Automatic via `prefers-color-scheme` media query
- **Font**: DM Sans (loaded via next/font with `--font-dm-sans` variable)

### Component Patterns

- **Button**: Pill-shaped (`rounded-[10rem]`) with scale hover animation (`hover:scale-105`)
- **Cards**: Hover lift effect (`hover:-translate-y-1 hover:shadow-xl`)
- **Sections**: Use `Section` wrapper with variant props for background colors

### SEO Setup

- **Metadata**: Configured in `layout.tsx` using Next.js Metadata API
- **Structured Data**: `JsonLd` component supports Organization, WebSite, and WebPage schemas
- **robots.ts**: Defines crawler rules
- **sitemap.ts**: Generates XML sitemap

### Path Aliases

`@/*` maps to `./src/*` (configured in tsconfig.json)
