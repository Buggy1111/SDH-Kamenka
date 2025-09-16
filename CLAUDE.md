# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 web application for SDH Kamenka (Volunteer Fire Department) featuring a modern, ultra-luxury design with Facebook API integration for content synchronization.

## Tech Stack

- **Framework:** Next.js 15 with App Router and Turbopack
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4 with custom glass effects and fire-themed design
- **Database:** SQLite with Prisma ORM
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

# Prisma commands
npx prisma generate    # Generate Prisma client
npx prisma db push     # Push schema changes to database
npx prisma studio      # Open Prisma Studio GUI
```

## Architecture

### Directory Structure
- `/app` - Next.js App Router pages and API routes
  - `/api` - API endpoints for Facebook sync, posts, events, photos
  - Page routes: `/o-nas`, `/cinnost`, `/galerie`, `/kalendar`, `/kontakt`, `/admin`
- `/components` - React components (Hero, Navigation, Services, Partners, etc.)
- `/lib` - Utilities and generated Prisma client
- `/prisma` - Database schema and SQLite database file
- `/public` - Static assets (images, videos, fonts)

### Database Schema
The application uses Prisma with SQLite for local development. Key models:
- **FacebookPost** - Stores synchronized Facebook posts with engagement metrics
- **FacebookPhoto** - Photos associated with posts (multiple sizes)
- **FacebookEvent** - Facebook events with location and attendance data
- **FacebookSyncLog** - Tracks API synchronization operations

### Facebook API Integration
The app includes comprehensive Facebook Graph API integration:
- Webhook endpoints at `/api/facebook/webhook` for real-time updates
- Sync endpoints at `/api/facebook/sync` for manual synchronization
- Test endpoint at `/api/facebook/test` for API connection verification
- Environment variables required in `.env` (see `.env.example`)

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
- Facebook feed simulation (to be replaced with real API data)
- Event calendar with Czech date formatting
- Partner/sponsor section with hover animations
- Admin panel at `/admin` for content management

## Environment Setup

Required environment variables (create `.env` from `.env.example`):
- `DATABASE_URL` - SQLite database path
- `FACEBOOK_APP_ID` - Facebook app credentials
- `FACEBOOK_APP_SECRET` - Facebook app secret
- `FACEBOOK_PAGE_ACCESS_TOKEN` - Long-lived page token
- `FACEBOOK_PAGE_ID` - Target Facebook page ID
- `WEBHOOK_VERIFY_TOKEN` - Custom webhook verification token

## Important Notes

- The project uses Prisma client generated at `/lib/generated/prisma`
- Facebook API integration is prepared but requires valid credentials
- The app is designed for a small volunteer fire department (180 residents)
- Czech localization is used throughout (date formatting, text content)
- Production deployment recommended on Vercel (optimized for Next.js)