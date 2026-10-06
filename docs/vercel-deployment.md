# FreelancersBix — Vercel Client-Preview Deployment

This project is deployment-ready for a Vercel client-preview URL. It does **not** require a database, email provider, or any environment variables to build and render the public website.

---

## 1. Push the repository to GitHub

Create a private GitHub repository and push the existing `master` branch:

```bash
git remote add origin https://github.com/<your-account>/<repo-name>.git
git push -u origin master
```

> The repo currently has **no remote configured** — create and push to a
> repository you control. Never push to an unknown repository.

## 2. Sign in to Vercel

Visit https://vercel.com and sign in (GitHub OAuth is recommended).

## 3. Import the GitHub repository

In Vercel → **Add New… → Project**, select the repository from step 1.

## 4. Framework detection

Vercel auto-detects **Next.js**. Confirm the project settings:

| Setting          | Value                       |
| ---------------- | --------------------------- |
| Framework        | Next.js (auto-detected)     |
| Install command  | `npm install`  (default)    |
| Build command    | `npm run build` (default)   |
| Output directory | `.next` (Next.js, default)  |

No `vercel.json` is required — this project uses standard Next.js detection.

## 5. Node.js version

No `engines` field is set; Vercel's default Node.js LTS is used and is
compatible with this codebase (Next.js 15 / React 19). Optionally pick
**Node.js 20.x** in **Project → Settings → General → Node.js Version**.

## 6. Deploy

Click **Deploy**. The first build takes a few minutes. The public site and all
static pages build without any environment variables.

## 7. Environment variables (optional)

None are required for the site to render. Configure in **Project → Settings →
Environment Variables** only if you want the behavior below:

| Variable                 | If unset                 | If set                                        |
| ------------------------ | ------------------------ | --------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`   | Canonicals/sitemap/OG use `https://freelancersbix.com` (the intended production origin) | Canonicals/sitemap/OG use the provided origin, e.g. the Vercel preview URL |
| `DATABASE_URL`           | `POST /api/quote` returns `503 SERVER_ERROR` — the designed, honest behavior (no fake persistence) | Quote submissions persist (run `db/schema.sql` on the target Postgres first) |
| `RESEND_API_KEY`         | Quote email notifications skipped (no-op hook) | Reserved for a future notifications phase |

Values must be placeholders/documented; never commit real credentials.

## 8. Verify the deployment

- All pages return **200**: `/`, `/about`, `/services`, all 7 `/services/*`
  pages, `/careers`, `/insights`, `/case-studies`, `/faq`, `/contact`,
  `/privacy-policy`, `/terms-of-service`.
- Unknown routes return **404** (standard Next.js not-found).
- Click through the Contact Quote Wizard on `/contact`. Without `DATABASE_URL`
  it intentionally fails gracefully (error panel + retry); with `DATABASE_URL`
  it returns a real `FBX-XXXXXX` tracker ID. No fake "success" is shown.

## 9. Later: connect freelancersbix.com

In Vercel → **Project → Settings → Domains**, add the production domain and
point its DNS records at Vercel once the client approves the preview and the
domain is under your control.

> Vercel CLI / automatic deployment was intentionally **not** used; do this
> manually so the app connects only to a repository you own.