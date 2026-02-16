# Portfolio Website

Personal portfolio built with Next.js, featuring projects, experience, education, and a contact form.

**Live site:** [deployment_url.com](https://deployment_url.com)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion, GSAP, Locomotive Scroll
- **Icons:** Lucide React
- **Contact form:** Nodemailer (via API route)

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn/pnpm)

### Installation

```bash
git clone https://github.com/JosephLeKH/portfolio_website.git
cd portfolio_website
npm install
```

### Environment Variables

Create a `.env.local` file for the contact form:

```
# Add your email/nodemailer config as needed
```

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
├── app/          # Next.js app router (pages, layouts, API routes)
├── components/   # React components
├── data/         # Static data (experience, projects, education)
```

## License

MIT — see [LICENSE](LICENSE).
