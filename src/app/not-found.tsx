import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-background px-6 py-24 text-center">
      <div>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">404</p>
        <h1 className="mt-2 text-3xl font-semibold text-foreground md:text-4xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          That link doesn’t exist or has moved. Head back to the portfolio or get in touch.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Home
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
        >
          Contact
        </Link>
      </div>
    </main>
  );
}
