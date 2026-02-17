# Smithtown Summer Camp — Development Framework

## Architecture

**Type:** Marketing site with lead capture
**Stack:** Next.js 16 + React 19 + Tailwind v4 + shadcn/ui + TypeScript
**Hosting:** Vercel (pushed through GitHub)
**No database. No auth. No admin panel.**
**Future database:** Neon (PostgreSQL) if needed later

**Plan:** See `docs/plans/smithtown-plan.md` for feature roadmap and build order.
**Content Audit:** See `docs/content-audit.md` for all original WordPress content.

### Data Flow
- **Registrations** → External link to https://smithtown.campmanagement.com/enroll
- **Lead capture** → Google Sheets (auto-append via API)
- **Contact forms** → Google Sheets + Email notification via Resend
- **Chatbot** → GoHighLevel widget (script embed)
- **Content** → Static in code (edit pages directly) + config-driven dates/pricing

### External Services
| Service | Purpose | Env Vars |
|---------|---------|----------|
| Google Sheets | Lead capture + contact form logging | `GOOGLE_SHEETS_ID`, `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY` |
| Resend | Contact form email notifications | `RESEND_API_KEY`, `RESEND_FROM_EMAIL` |
| GoHighLevel | Chatbot widget | `NEXT_PUBLIC_GHL_WIDGET_ID` |
| Camp Management | External enrollment system | (link only, no API) |

## Core Principles

1. **No database** — Google Sheets stores leads/contacts, Camp Management handles enrollment
2. **Config-driven** — Pricing, camp dates, schedule, site metadata all live in `src/config/`. Change config, not code.
3. **Component-first** — Every visual element is a reusable component
4. **Server Components by default** — Only use `"use client"` for interactivity (forms, nav toggle, countdown)
5. **Content parity** — All original WordPress content preserved (see `docs/content-audit.md`)

## File Structure

```
src/
  app/
    (site)/              # All public pages (route group)
      layout.tsx         # Site layout (header + footer)
      page.tsx           # Home (hero, countdown, programs, facility preview, staff)
      dates-rates/page.tsx
      our-facility/page.tsx
      our-activities/page.tsx
      counselors-in-training/page.tsx
      food-nutrition/page.tsx
      meet-our-staff/page.tsx
      why-choose-us/page.tsx
      contact/page.tsx
      faq/page.tsx
      enroll/page.tsx    # Lead capture form + external enrollment link
    api/
      contact/route.ts   # POST → Google Sheets + Resend email
      lead/route.ts      # POST → Google Sheets (lead capture)
    layout.tsx           # Root layout (fonts, metadata, Toaster, GHL widget)
    globals.css
    not-found.tsx
  components/
    ui/                  # shadcn/ui (button, card, input, label, select, accordion, etc.)
    layout/              # SiteHeader, SiteFooter, MobileNav
    marketing/           # Hero, ProgramCard, FacilityCard, ActivityCard, StaffSection, CountdownTimer
    forms/               # ContactForm, LeadCaptureForm
    shared/              # Section, PageHeader, FaqAccordion
  lib/
    sheets/              # Google Sheets client, append-lead, append-contact
    email/               # Resend client, send functions
    validations/         # Zod schemas (contact, lead)
    utils/               # cn(), format helpers
    utils.ts             # shadcn cn() utility
  config/
    site.ts              # Site name, description, nav, contact info, social
    camp.ts              # Camp dates, weeks, pricing tiers, schedule, programs
  types/
    index.ts             # ContactFormData, LeadCaptureData
public/
  images/                # Camp photos, logos, facility images
  video/                 # Camp video (if self-hosted)
docs/
  plans/                 # Build plans
  sessions/              # Session logs (MM-DD-YYYY-HHMM-feature-slug.md)
  content-audit.md       # Full WordPress content audit
```

## Naming Conventions

| What | Convention | Example |
|------|-----------|---------|
| Files | kebab-case | `site-header.tsx`, `contact-form.tsx` |
| Components | PascalCase | `SiteHeader`, `ContactForm` |
| Functions | camelCase | `appendLead`, `formatDate` |
| Types | PascalCase | `ContactFormData`, `ProgramLevel` |
| Props | PascalCase + Props | `HeroProps`, `SectionProps` |
| Constants | SCREAMING_SNAKE | `CAMP_WEEKS`, `PRICING_TIERS` |
| Config objects | camelCase | `siteConfig`, `campConfig` |
| API routes | lowercase folders | `api/contact/route.ts` |

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| UI | React 19 |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui |
| Forms | react-hook-form + @hookform/resolvers |
| Validation | Zod v4 |
| Email | Resend |
| Data | Google Sheets API (googleapis) |
| Toasts | Sonner |
| Deploy | Vercel |

## Patterns

### API Route Pattern
```typescript
// src/app/api/{feature}/route.ts
import { NextResponse } from "next/server";
import { someSchema } from "@/lib/validations/feature";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = someSchema.parse(body);

    // Process: sheets, email, etc.

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 400 }
    );
  }
}
```

### Component Pattern
```typescript
// Server Component (default)
import { Section } from "@/components/shared/section";

export default function SomePage() {
  return (
    <Section title="Title">
      <p>Content here</p>
    </Section>
  );
}

// Client Component (only when needed)
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function InteractiveComponent() {
  const [state, setState] = useState(false);
  return <Button onClick={() => setState(!state)}>Toggle</Button>;
}
```

### Side-Effect Pattern (Vercel Serverless)
```typescript
// ALWAYS await side-effects on Vercel — unawaited promises die when response sends.
try {
  await appendLead(data);
} catch (error) {
  console.error("Failed to log lead:", error);
}
```

### Config Pattern
```typescript
// All business rules in config files, not scattered in components
import { campConfig } from "@/config/camp";
import { siteConfig } from "@/config/site";

const price = campConfig.pricing.regular[0].pricePerWeek;
const phone = siteConfig.contact.phone;
```

## Zod v4 Breaking Changes

**CRITICAL — Zod v4 changed these APIs:**

```typescript
// WRONG (v3):
z.string().nonempty()

// CORRECT (v4):
z.string().min(1)         // .nonempty() removed, use .min(1)
```

## Next.js 16 Route Params

**CRITICAL — Route params are now async in Next.js 16:**

```typescript
// WRONG:
export default function Page({ params }: { params: { id: string } }) {

// CORRECT:
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
```

## Environment Variables

See `.env.example` for all required variables. Key rules:
- `NEXT_PUBLIC_` prefix for client-accessible vars only
- Never expose `GOOGLE_PRIVATE_KEY` to client
- API routes and server components can access all env vars

## Development Commands

```bash
npm run dev          # Start dev server (Turbopack)
npm run build        # Production build
npm run lint         # ESLint
npx tsc --noEmit     # Type check
```

## Git Commits

Follow conventional commits:
```
feat: add contact form with Google Sheets integration
fix: correct pricing display for 6+ weeks
style: update hero section spacing
chore: add environment variables
```

## Session Continuity

Every command saves a session file to `docs/sessions/` with a `## Handoff` prompt at the end. Copy-paste the Handoff into a new terminal to continue where you left off.

- `docs/sessions/` — Session history (one file per terminal session)
- `docs/PROJECT_SPEC.md` — Project dashboard (current state, status tables, roadmap)
- `CLAUDE.md` — Development framework (patterns, conventions, code examples)

All three are kept in sync automatically by every command.

## Workflows

### Build a Feature
`/go` — Opens /ship + /watch in two terminals (recommended)
`/ship {feature}` — Full lifecycle: plan → build → polish → verify → save

### Fix a Bug
`/fix {description}` — Reproduce → diagnose → fix → verify

### Improve Existing Code
`/polish {feature}` — Audit existing code, find rough edges, fix, verify
`/refactor {what}` — Restructure code safely: blast radius → manifest → phased execution

### Quality
`/audit` — Full codebase health check, graded A-F
`/test {feature}` — Generate tests, run suite, coverage report
`/perf` — Performance audit: slow code, bundles, queries

### Deploy
`/deploy` — Pre-flight checks → deployment → health check → rollback plan

### Save & Continue
`/save` — Save session state + handoff prompt for next terminal

---

### Adding a Content Page
1. Create `src/app/(site)/{page}/page.tsx`
2. Add metadata export
3. Use `PageHeader` + `Section` components
4. Add to `siteConfig.nav` if it should appear in navigation
5. Content comes from `docs/content-audit.md`

### Adding a Form
1. Create validation schema in `src/lib/validations/{form}.ts`
2. Create form component in `src/components/forms/{form}.tsx` (client component)
3. Create API route in `src/app/api/{form}/route.ts`
4. Wire Google Sheets sync
5. Wire email notification via Resend (if needed)

### Updating Camp Config
1. Edit `src/config/camp.ts` — dates, weeks, pricing, schedule
2. All pages using `campConfig` update automatically
3. No code changes needed for annual updates

## Feature Skeleton (Marketing Site)

```
Feature: "{feature-name}"

Page:        app/(site)/{feature-name}/page.tsx     → Server Component, uses Section + PageHeader
Components:  components/marketing/{name}.tsx         → Reusable marketing component
             components/forms/{name}.tsx             → Client component if interactive
API:         app/api/{feature-name}/route.ts        → Only if form submission needed
Validation:  lib/validations/{feature-name}.ts      → Only if form validation needed
Config:      config/{feature-name}.ts               → Only if new business rules
```

## Before Writing Code

1. Read this CLAUDE.md
2. Read `docs/plans/smithtown-plan.md` for build context
3. Read `docs/content-audit.md` for original content
4. Check `src/config/` — the answer might already be in config
5. Check existing components before creating new ones
6. Run `npm run build` after changes to verify
