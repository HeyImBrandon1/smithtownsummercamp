# Smithtown Summer Camp — Build Plan

## Overview
Rebuild the existing WordPress/Elementor site as a modern Next.js 16 + Tailwind v4 marketing site. No auth, no database. Links out to Camp Management for enrollment. Lead capture and contact forms save to Google Sheets.

**Source:** `docs/content-audit.md` (full WordPress content audit)
**Deploy:** Vercel via GitHub

---

## Phase 1: Foundation
> Scaffold project, global layout, config files

### 1.1 Project Setup
- [x] Create project directory (`code/smithtownsummercamp`)
- [x] Create CLAUDE.md
- [x] Content audit saved to `docs/content-audit.md`
- [ ] Initialize Next.js 16 + TypeScript
- [ ] Install Tailwind v4 + shadcn/ui
- [ ] Configure project structure (folders, aliases)
- [ ] Initialize git repo + push to GitHub

### 1.2 Config Files
- [ ] `src/config/site.ts` — site name, nav links, contact info, footer, metadata
- [ ] `src/config/camp.ts` — camp dates (2026), pricing tiers (regular + CIT), weekly schedule, program levels, sibling discount

### 1.3 Global Layout
- [ ] Root layout (fonts, metadata, Toaster)
- [ ] Site layout with header + footer
- [ ] `SiteHeader` — logo, nav menu, "Enroll" + "Dates & Rates" top links, "GET STARTED" CTA
- [ ] `MobileNav` — hamburger menu with all nav links
- [ ] `SiteFooter` — Knox School address, phone, quick links, copyright
- [ ] Download and place logo + partner logos in `/public/images/`

---

## Phase 2: Content Pages (Static)
> Build all 10 pages with content from audit. No interactivity yet.

### 2.1 Homepage (`/`)
- [ ] Hero section with "Experience The Ultimate Summer" headline
- [ ] CountdownTimer component (days until camp start)
- [ ] "Open For Registration" badge
- [ ] Discovery section (camp description + "Enroll Now" CTA)
- [ ] Facility preview (gymnasium + STEM classroom images)
- [ ] Program Levels — 5 cards (Early, Lower, Middle, Upper, CIT)
- [ ] Pool feature banner
- [ ] Staff section with description
- [ ] Video embed section (need video URL from client)

### 2.2 Dates & Rates (`/dates-rates`)
- [ ] Page header
- [ ] "Enroll Online" CTA box
- [ ] Dates section (8 weeks, 2026 dates)
- [ ] Regular pricing table (4 tiers)
- [ ] CIT pricing table (4 tiers)
- [ ] Sibling discount callout
- [ ] Weekly schedule table
- [ ] All pricing pulled from `campConfig`

### 2.3 Our Facility (`/our-facility`)
- [ ] Hero with aerial campus photo
- [ ] Campus overview (40 acres description)
- [ ] Gymnasium section (image + text)
- [ ] Pool section (image + text)
- [ ] STEM Classrooms section (image + text)

### 2.4 Our Activities (`/our-activities`)
- [ ] Page intro
- [ ] Aquatics card (image + description)
- [ ] Athletics card (image + sports list)
- [ ] Games card (image + games list)
- [ ] Arts card (image + disciplines list)
- [ ] STEM card (image + focus areas)

### 2.5 Counselors in Training (`/counselors-in-training`)
- [ ] Program description
- [ ] Age requirements (14-16)
- [ ] Skills/focus areas
- [ ] "Spaces are limited" callout
- [ ] CTA to enroll

### 2.6 Food & Nutrition (`/food-nutrition`)
- [ ] Culinart partnership description
- [ ] Nut-free policy
- [ ] "Lunch Included" section with menu details
- [ ] Culinart logo

### 2.7 Meet Our Staff (`/meet-our-staff`)
- [ ] Three-tier staff descriptions (Counselors, Head Counselors, Directors)
- [ ] No individual bios (match current site)

### 2.8 Why Choose Us (`/why-choose-us`)
- [ ] Camp Family section (image + text)
- [ ] Exceptional Partnerships section (partner logos + Knox aerial)
- [ ] Lower Prices, Superior Quality section
- [ ] Food & Nutrition section
- [ ] State of the Art Campground section

### 2.9 FAQ (`/faq`)
- [ ] Accordion component for Q&A
- [ ] 12 FAQ items from content audit
- [ ] "Join The Fun" CTA

### 2.10 Contact (`/contact`)
- [ ] Page header
- [ ] Phone number + email display
- [ ] Address/location info
- [ ] Contact form (built in Phase 3)

### 2.11 Enroll (`/enroll`)
- [ ] "2026 Summer Camp Registration" heading
- [ ] Link to external Camp Management enrollment
- [ ] Lead capture form (built in Phase 3)

---

## Phase 3: Interactive Features
> Forms, countdown, chatbot

### 3.1 Countdown Timer
- [ ] Client component calculating days until camp
- [ ] Camp start date from `campConfig`
- [ ] Animated number display

### 3.2 Contact Form → Google Sheets
- [ ] Zod validation schema
- [ ] ContactForm client component (name, email, phone, message)
- [ ] `POST /api/contact` route → Google Sheets + Resend email
- [ ] Google Sheets service setup (`lib/sheets/`)
- [ ] Success toast via Sonner

### 3.3 Lead Capture Form → Google Sheets
- [ ] Zod validation schema
- [ ] LeadCaptureForm client component
- [ ] Fields: "How Did You Hear About Us?" dropdown, "How Many Children?" dropdown, name, email, phone
- [ ] `POST /api/lead` route → Google Sheets
- [ ] Success toast

### 3.4 GoHighLevel Chatbot
- [ ] Embed GHL widget script in root layout
- [ ] Configure via `NEXT_PUBLIC_GHL_WIDGET_ID` env var

### 3.5 Video Embed
- [ ] Video section component (YouTube/Vimeo embed or self-hosted)
- [ ] Need video URL from client

---

## Phase 4: Assets & Polish
> Images, SEO, responsive, performance

### 4.1 Images
- [ ] Download all photos from WordPress site
- [ ] Optimize with next/image
- [ ] Logo, partner logos, facility photos, activity photos, program photos

### 4.2 SEO & Metadata
- [ ] Page-level metadata for all 11 pages
- [ ] Open Graph images
- [ ] Structured data (LocalBusiness)
- [ ] Sitemap generation

### 4.3 Responsive Design
- [ ] Mobile-first review of all pages
- [ ] Touch targets 44px minimum
- [ ] Test on mobile/tablet/desktop

### 4.4 Performance
- [ ] Lighthouse audit
- [ ] Image optimization
- [ ] Font optimization (preload)

---

## Phase 5: Deploy
> Vercel deployment via GitHub

### 5.1 Setup
- [ ] Create GitHub repo
- [ ] Connect to Vercel
- [ ] Configure environment variables
- [ ] Custom domain setup (smithtownsummercamp.com)

### 5.2 Go Live
- [ ] Final content review against audit
- [ ] DNS migration from WordPress
- [ ] Verify all pages render
- [ ] Verify forms submit to Google Sheets
- [ ] Verify external enrollment link works
- [ ] Verify GHL chatbot loads

---

## Notes
- Copyright should update to 2025/2026
- Camp dates need 2026 season dates (current site shows some 2025 dates)
- CIT page URL had typo on old site — fixed in new routes
- Some content is duplicated across pages (facility text, food text) — this is intentional, keep it
- Video URL needed from client
- GHL widget ID needed from client
