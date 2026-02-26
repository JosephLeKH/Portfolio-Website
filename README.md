# Portfolio Website

Personal portfolio built with Next.js: projects, experience, education, and a contact form.

**Live site:** [deployment_url.com](https://deployment_url.com)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion, GSAP, Locomotive Scroll
- **Icons:** Lucide React
- **Contact form:** Nodemailer (API route)

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn / pnpm)

### Installation

```bash
git clone https://github.com/JosephLeKH/portfolio_website.git
cd portfolio_website
npm install
```

### Environment Variables

Create a `.env.local` file in the project root. Required for the contact form:

| Variable           | Description                          |
|--------------------|--------------------------------------|
| `SMTP_HOST`        | SMTP server host (e.g. `smtp.gmail.com`) |
| `SMTP_PORT`        | SMTP port (e.g. `587` or `465`)      |
| `SMTP_USER`        | SMTP username / sender email        |
| `SMTP_PASS`        | SMTP password or app password       |
| `CONTACT_TO_EMAIL` | (Optional) Inbox for form submissions; defaults to `josephle@stanford.edu` |

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/              # Next.js App Router (pages, layout, template, API routes)
├── components/       # React components (Hero, Experience, Education, Projects, Footer, UI, animations)
├── data/             # Static content (experience, projects, education)
├── lib/              # Utilities (e.g. isMobile)
└── types/            # TypeScript declarations (if any)
```

## Scripts

| Command       | Description                |
|---------------|----------------------------|
| `npm run dev` | Start development server   |
| `npm run build` | Build for production    |
| `npm start`   | Run production build      |
| `npm run lint`| Run ESLint                |

## Deploy on Vercel

1. Push this repo to GitHub and [import the project in Vercel](https://vercel.com/new).
2. Vercel will detect Next.js and use `npm run build` and `npm start` automatically.
3. In the Vercel project **Settings → Environment Variables**, add:
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` (required for the contact form)
   - `CONTACT_TO_EMAIL` (optional; fallback is in code)
4. Redeploy after adding env vars so the contact form works in production.

## License

MIT — see [LICENSE](LICENSE).
