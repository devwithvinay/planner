# Daymark — 90-Day Job Readiness Planner

A deployable Next.js + TypeScript + Supabase app for tracking a 90-day frontend/full-stack job preparation plan.

### live :-https://planner-day-delta.vercel.app/

## Included
- Email/password registration and login through Supabase Auth
- Personalized daily checklists for DSA, aptitude, development, interview preparation, and career applications
- 90-day / 13-week plan view
- Saved daily checkmarks and notes
- Progress dashboard by task and day
- Weekly review notes and application count
- Responsive desktop/mobile UI

## 1. Requirements
- Node.js 20.9+ (recommended current LTS)
- A Supabase account/project
- A Vercel account for deployment (optional; any compatible Next.js host works)

## 2. Install locally
```bash
npm install
cp .env.example .env.local
```
On Windows PowerShell, use:
```powershell
Copy-Item .env.example .env.local
```

## 3. Configure Supabase
1. Create a project at https://supabase.com.
2. Open **Project Settings → API** (or the API Keys page).
3. Copy the Project URL and the publishable/anon key into `.env.local`:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Open **SQL Editor** in Supabase.
5. Paste and run the full contents of `supabase/schema.sql`.
6. In **Authentication → URL Configuration**, set the Site URL to your local URL while developing (`http://localhost:3000`). Add your deployed URL to Redirect URLs after deployment.
7. Email confirmation may be enabled by default. If enabled, confirm your email before logging in. You can configure this under Supabase Authentication settings.

Never put a Supabase `service_role` key in a `NEXT_PUBLIC_` variable or in frontend code. This app uses the public key and Row Level Security policies to isolate each user's data.


## Important notes
- The plan content is bundled in `lib/plan.ts`; you can edit tasks there.
- User checkmarks and notes are stored in `daily_progress`. Weekly reflections are stored in `weekly_reviews`.
- Each user can only read/write their own rows, enforced by Row Level Security.
- The plan does not auto-advance based on calendar date. You choose the day you are working on, so a missed day does not break the challenge.
- A “completed day” means all five category tasks are checked.
- Review all target company eligibility requirements before applying; the suggested application counts are flexible.
