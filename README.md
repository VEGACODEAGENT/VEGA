# VEGAAI - Professional Website & Business Solutions Platform

## Overview

VEGAAI is a modern, AI-powered web platform built with Next.js 14, featuring a comprehensive landing page, lead management system, booking capabilities, and admin dashboard.

**Live Features:**
- 🎯 Professional landing page with multiple sections
- 📝 Lead capture and management
- 📅 Appointment booking system
- 📊 Admin dashboard with analytics
- 🔐 Secure database with Prisma ORM
- 📧 Email notifications with Resend
- 🎨 Beautiful UI with Tailwind CSS & Framer Motion

## Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **TypeScript** - Type safety

### Backend
- **Prisma ORM** - Database management
- **PostgreSQL** - Primary database
- **Zod** - Schema validation
- **Resend** - Email service

### Infrastructure
- **Node.js** - Runtime environment
- **npm** - Package manager

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── leads/route.ts          # Lead submission API
│   │   └── bookings/route.ts       # Booking management API
│   ├── admin/page.tsx              # Admin dashboard
│   ├── contact/page.tsx            # Contact form page
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles
│   └── page.tsx                    # Landing page
├── components/
│   ├── Navigation.tsx              # Navigation bar
│   ├── Footer.tsx                  # Footer
│   ├── ContactForm.tsx             # Reusable contact form
│   └── sections/
│       ├── HeroSection.tsx
│       ├── TrustBar.tsx
│       ├── ProblemSection.tsx
│       ├── SolutionSection.tsx
│       ├── IndustriesSection.tsx
│       ├── WhyVegaai.tsx
│       ├── ProcessSection.tsx
│       ├── CaseStudies.tsx
│       ├── AboutSection.tsx
│       └── FinalCTA.tsx
├── lib/
│   └── db.ts                       # Prisma client
└── styles/
    └── globals.css                 # Global Tailwind styles

prisma/
├── schema.prisma                   # Database schema
└── migrations/                     # Migration files

middleware.ts                        # Route protection middleware
```

## Installation & Setup

### 1. Clone Repository
```bash
git clone https://github.com/VEGACODEAGENT/VEGA.git
cd VEGA
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create `.env.local` from `.env.example`:
```bash
cp .env.example .env.local
```

Configure your environment variables:
```env
DATABASE_URL="postgresql://user:pass@localhost:5432/vega"
RESEND_API_KEY="your_resend_key"
NEXTAUTH_SECRET="your_secret_key"
NEXTAUTH_URL="http://localhost:3000"
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
```

### 4. Database Setup
```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev --name init

# (Optional) Seed database
npx prisma db seed
```

### 5. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

## Key Features

### Landing Page
- Hero section with compelling value proposition
- Problem statement section
- Solutions overview
- Industry-specific services
- Process walkthrough
- Case studies & outcomes
- About section
- Final CTA sections

### Lead Management
- Lead capture form on contact page
- API endpoint for lead submission
- Email validation with Zod
- Database persistence with Prisma
- Admin dashboard for viewing leads

### Booking System
- Schedule appointments
- Time slot availability checking
- Status tracking (pending, confirmed, completed, cancelled)
- Admin dashboard for booking management

### Admin Dashboard
- View all leads with details
- View all bookings with timestamps
- Real-time status indicators
- Protected routes with middleware

## API Endpoints

### Leads
- `POST /api/leads` - Submit a new lead
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "I'm interested in AI automation for my business",
    "type": "automation"
  }
  ```

### Bookings
- `GET /api/bookings` - Fetch upcoming bookings
- `POST /api/bookings` - Create a new booking
  ```json
  {
    "name": "Jane Smith",
    "email": "jane@example.com",
    "phone": "+1234567890",
    "date": "2024-12-25T14:00:00Z",
    "type": "strategy-call",
    "notes": "Interested in dashboard solution"
  }
  ```

## Database Schema

### Lead Model
```prisma
model Lead {
  id        String   @id @default(cuid())
  name      String
  email     String
  message   String
  type      String?
  createdAt DateTime @default(now())
}
```

### BookingSession Model
```prisma
model BookingSession {
  id        String   @id @default(cuid())
  name      String
  email     String
  phone     String
  date      DateTime
  type      String   // strategy-call, proposal, demo
  notes     String?
  status    String   @default("pending")
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## Development Guidelines

### Component Conventions
- Use functional components with React hooks
- Implement 'use client' directive for client-side interactivity
- Use Framer Motion for animations
- Follow Tailwind CSS utility-first approach

### API Development
- Validate all inputs with Zod schemas
- Use HTTP status codes correctly
- Implement error handling
- Return JSON responses

### Database Operations
- Always use Prisma for database access
- Implement proper error handling
- Use indexed fields for common queries
- Follow migrations workflow

## Deployment

### Vercel (Recommended)
```bash
# Push to GitHub
git push origin main

# Connect to Vercel
# Import repository and configure environment variables
```

### Environment Variables for Production
```env
DATABASE_URL="postgresql://prod-user:prod-pass@prod-host:5432/vega-prod"
RESEND_API_KEY="prod_resend_key"
NEXTAUTH_SECRET="prod_secret_key"
NEXTAUTH_URL="https://vegaai.com"
NEXT_PUBLIC_API_URL="https://vegaai.com/api"
```

## Performance Optimization

- Image optimization with Next.js Image component
- Code splitting with dynamic imports
- CSS optimization with Tailwind purge
- Database query optimization with Prisma
- Route prefetching with Next.js Link

## Security

- Protected admin routes with middleware
- Input validation with Zod
- SQL injection prevention with Prisma
- CORS headers configuration
- Rate limiting on API endpoints (recommended)

## Troubleshooting

### Database Connection Issues
```bash
# Verify connection string
echo $DATABASE_URL

# Test connection
npx prisma db execute --stdin < query.sql
```

### Migration Issues
```bash
# Reset database (development only)
npx prisma migrate reset

# Create new migration
npx prisma migrate dev --name migration_name
```

### Build Issues
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

## Contributing

1. Create feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m "Add your feature"`
3. Push to branch: `git push origin feature/your-feature`
4. Submit pull request

## License

MIT License - See LICENSE.md for details

## Support

For support, email hello@vegaai.com or open an issue on GitHub.

---

**Built by VEGAAI** - AI-Powered Business Solutions
