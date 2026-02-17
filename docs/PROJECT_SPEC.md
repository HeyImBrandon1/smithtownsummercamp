# Smithtown Summer Camp — Project Spec

## Overview
Marketing site rebuild of smithtownsummercamp.com (WordPress/Elementor → Next.js 16). No auth, no database. Links to Camp Management for enrollment. Lead capture and contact forms save to Google Sheets.

**Plan:** See `docs/plans/smithtown-plan.md` for full feature roadmap and build order.
**Content:** See `docs/content-audit.md` for all original WordPress content.

## Current State
Initial scaffold complete — all 11 pages built with content from WordPress audit. Forms wired to API routes. Config-driven dates/pricing. Ready for images and polish.

## Tech Stack
- Next.js 16 (App Router + Turbopack)
- React 19 + TypeScript (strict)
- Tailwind CSS v4
- shadcn/ui
- react-hook-form + Zod v4
- Resend (email)
- Google Sheets (Apps Script)
- Sonner (toasts)
- Vercel (deploy via GitHub)

## Pages

| Route | Status | Description |
|-------|--------|-------------|
| `/` | Done | Homepage — hero, countdown, programs, facility, staff |
| `/dates-rates` | Done | Pricing tables, schedule, sibling discount |
| `/our-facility` | Done | Gymnasium, pool, STEM classrooms |
| `/our-activities` | Done | Aquatics, athletics, games, arts, STEM |
| `/counselors-in-training` | Done | CIT program details (ages 14-16) |
| `/food-nutrition` | Done | Culinart partnership, nut-free, lunch details |
| `/meet-our-staff` | Done | Three staff tiers |
| `/why-choose-us` | Done | 5 selling points |
| `/contact` | Done | Contact info + form |
| `/faq` | Done | 12 Q&A accordion |
| `/enroll` | Done | External enrollment link + lead capture form |

## API Routes

| Route | Status | Description |
|-------|--------|-------------|
| `POST /api/contact` | Done | Contact form → Google Sheets + Resend email |
| `POST /api/lead` | Done | Lead capture → Google Sheets |

## Roadmap

### Phase 1: Foundation (Done)
- [x] Project scaffold
- [x] CLAUDE.md framework
- [x] Config files (site.ts, camp.ts)
- [x] Global layout (header, footer, mobile nav)

### Phase 2: Content Pages (Done)
- [x] All 11 pages built with original content
- [x] Shared components (Section, PageHeader, CtaButton)
- [x] Marketing components (CountdownTimer, ProgramCard, ActivityCard, PricingTable)
- [x] FAQ accordion
- [x] Contact form + Lead capture form

### Phase 3: Interactive Features (TODO)
- [ ] Google Sheets Apps Script setup
- [ ] Resend email integration
- [ ] GoHighLevel chatbot widget
- [ ] Video embed (when URL provided)

### Phase 4: Assets & Polish (TODO)
- [ ] Download/optimize images from WordPress
- [ ] SEO metadata finalization
- [ ] Responsive design audit
- [ ] Performance optimization

### Phase 5: Deploy (TODO)
- [ ] Vercel connection
- [ ] Environment variables
- [ ] Custom domain setup
- [ ] DNS migration

## Session History
- **2026-02-17**: Project created with /new-project. See `docs/sessions/02-17-2026-scaffold.md`.
