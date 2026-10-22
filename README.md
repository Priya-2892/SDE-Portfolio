# Priya Kushwaha - Portfolio (Next.js)

Next.js 14 (App Router) + Tailwind CSS. Static, fast, SEO-ready.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Edit content
Everything (text, links, projects, skills) lives in **`src/data/profile.js`**. Components do not need changes.

Things to fill in:
- `featured.github` / `featured.live` (CMS Platform) and `projects[].github` so the "Source code" and "Live demo" links appear. Empty values are hidden automatically.
- `dsa.topics` - keep only the topics you have actually practised.
- `site.url` - set to your final domain.

## Motion
Scroll reveals (`Reveal.jsx`), count-up stats, tech marquee, scroll progress bar, animated architecture diagram and chart. All animation switches off for visitors who prefer reduced motion. Animation styles are at the bottom of `src/app/globals.css`.

## Live API
The hero console calls real route handlers in `src/app/api/priya/[section]/route.js` (`/api/priya/profile`, `/stack`, `/infra`, `/contact`). Data comes from `consoleTabs` in `profile.js`.

## Use case and case study
`useCase` and `caseStudy` in `profile.js` describe the Admin Dashboard project. Edit them to match exactly what you built. The preview card in the project is an illustrative layout with sample data (`DashboardPreview.jsx`).

## CI
`.github/workflows/ci.yml` runs lint and build on every push and pull request.

## Custom domain
In Vercel > Domains, add your own domain, then set `site.url` in `profile.js`.

## Resume
Replace `public/Priya_Kushwaha_SDE1_Resume.pdf` with your latest PDF (keep the file name, or update `site.resume`).

## Contact form (EmailJS)
Create `.env.local`:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```
Copy `.env.example` to `.env.local` and fill it in. There are no hardcoded keys, so the form only works once these are set. Add the same three variables in Vercel > Project Settings > Environment Variables, and in the EmailJS dashboard restrict allowed domains to your site and enable rate limiting.

## Deploy on Vercel
1. Push this folder to your GitHub repo (replace the old Vite code).
2. In Vercel, Framework Preset = **Next.js** (auto-detected). Build command and output directory: defaults.
3. Deploy.
