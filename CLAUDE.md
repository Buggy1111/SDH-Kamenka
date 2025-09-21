# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 web application for SDH Kamenka (Volunteer Fire Department) featuring a modern, ultra-luxury design with glass effects and fire-themed styling.

## Tech Stack

- **Framework:** Next.js 15 with App Router and Turbopack
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4 with custom glass effects and fire-themed design
- **UI Components:** Radix UI primitives, Lucide icons, Framer Motion animations
- **Utilities:** date-fns for date handling, clsx/tailwind-merge for className management

## Development Commands

```bash
# Install dependencies
npm install

# Run development server with Turbopack
npm run dev

# Build for production with Turbopack
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Type checking
npm run typecheck
```

## Architecture

### Directory Structure
- `/app` - Next.js App Router pages and layouts
  - Page routes: `/o-nas`, `/cinnost`, `/galerie`, `/kalendar`, `/kontakt`, `/admin`
- `/components` - React components (Hero, Navigation, Services, Partners, etc.)
- `/lib` - Utilities and helper functions
- `/public` - Static assets (images, videos, fonts)

### Content Management
The application uses static content with the possibility of future CMS integration:
- Event calendar with Czech date formatting
- Photo gallery with organized albums
- News/aktuality section for announcements
- Contact information and forms

### Styling Approach
- Tailwind CSS 4 with custom configuration in `tailwind.config.ts`
- Custom utilities in `app/globals.css`:
  - `.glass-effect` - Glass morphism effects
  - `.fire-shadow` - Fire-themed box shadows
  - `.hero-gradient` - Gradient overlays
- Responsive design with mobile-first approach
- Framer Motion for advanced animations

### Key Features
- Video hero section with overlay effects
- Glass-effect navigation with mobile responsiveness
- Static news and announcements section
- Event calendar with Czech date formatting
- Photo gallery with organized albums
- Partner/sponsor section with hover animations
- Contact forms and information

## Environment Setup

Optional environment variables for future features:
- Contact form email service integration
- Analytics tracking
- Performance monitoring

## Important Notes

- The app is designed for a small volunteer fire department (180 residents)
- Czech localization is used throughout (date formatting, text content)
- Static content approach for easy maintenance
- Production deployment recommended on Vercel (optimized for Next.js)
- Future expansion possible with CMS integration