# BuiltServe - Compliance as a Service

## Overview
BuiltServe is a trust-first website for building compliance management. It explains the value of Compliance as a Service, reassures users around risk and liability, and funnels visitors into a frictionless onboarding flow.

**Primary Goal:** Get users to start onboarding by clicking "Check your building"

## Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── Header.tsx      # Main navigation with responsive mobile menu
│   │   ├── Footer.tsx      # Site footer with links
│   │   └── ui/             # Shadcn UI components
│   ├── pages/
│   │   ├── Home.tsx        # Landing page with hero, problem, solution sections
│   │   ├── HowItWorks.tsx  # 3-step process explanation
│   │   ├── WhoItsFor.tsx   # Audience segments (Freeholders, RTMs, Landlords, Agents)
│   │   ├── Coverage.tsx    # Compliance categories covered
│   │   ├── Risk.tsx        # Risk and liability information
│   │   ├── Onboard.tsx     # Multi-step onboarding form
│   │   ├── Contact.tsx     # Contact form and information
│   │   └── not-found.tsx   # 404 page
│   ├── App.tsx             # Main app with routing
│   └── index.css           # Design tokens and styles
├── index.html              # Entry point with meta tags
server/
├── routes.ts               # API endpoints for onboarding and contact
├── storage.ts              # In-memory storage for submissions
shared/
├── schema.ts               # Data models and Zod validation schemas
```

## Routes

| Path | Component | Purpose |
|------|-----------|---------|
| `/` | Home | Landing page with hero, problem, solution, CTA |
| `/how-it-works` | HowItWorks | 3-step process explanation |
| `/who` | WhoItsFor | Audience segments |
| `/coverage` | Coverage | Compliance categories |
| `/risk` | Risk | Risk and liability info |
| `/onboard` | Onboard | Multi-step onboarding form |
| `/contact` | Contact | Contact form |

## API Endpoints

### POST /api/onboard
Submit building onboarding data.

**Request Body:**
```json
{
  "address": "string",
  "buildingType": "string",
  "yearBuilt": "string",
  "heightBand": "string",
  "numberOfUnits": "number",
  "hasLifts": "boolean",
  "hasCommercialUnits": "boolean",
  "email": "string"
}
```

### POST /api/contact
Submit contact form message.

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```

## Design System

### Color Palette
- Professional, calm blue/gray scheme for trust
- Primary: Blue (210, 70%, 45%)
- Background: Light gray-blue (210, 20%, 98%)
- Muted foreground for secondary text

### Typography
- Font: Inter (clean, professional sans-serif)
- Clear hierarchy with semibold headings

### UX Principles (from spec)
- Calm, professional, boring (this is a feature)
- No popups
- No chatbots
- No "Book a demo"
- Plain English everywhere

## Key Features

1. **Multi-step Onboarding Flow**
   - Step 1: Building details (address, type, height, units)
   - Step 2: Document upload + email
   - Step 3: Confirmation

2. **Responsive Design**
   - Mobile-first approach
   - Collapsible navigation on mobile
   - Proper touch targets

3. **Trust Elements**
   - Human oversight messaging
   - Professional indemnity mentions
   - Audit trail explanations
   - Clear liability structure

## Recent Changes
- January 2026: Initial implementation of all 7 pages
- Multi-step onboarding form with validation
- In-memory storage for submissions
- Contact form with validation
