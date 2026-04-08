import type { Metadata } from 'next';
import { getSiteUrl } from '@/lib/site';

const siteUrl = getSiteUrl();
const title = 'Contact';
const description =
  'Contact Joseph Le — software engineer and Stanford CS student. Send a message for opportunities, collaborations, or questions.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: `${title} | Joseph Le`,
    description,
    url: `${siteUrl}/contact`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | Joseph Le`,
    description,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
