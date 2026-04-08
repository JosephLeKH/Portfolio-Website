import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { Navbar } from '@/components/ui/Navbar';
import { CustomCursor } from '@/components/ui/CustomCursor';
import SmoothScroll from '@/components/animations/SmoothScroll';
import { JsonLd } from '@/components/seo/JsonLd';
import { getSiteUrl } from '@/lib/site';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = getSiteUrl();
const defaultTitle = 'Joseph Le | Software Engineer & Stanford CS';
const defaultDescription =
  'Joseph Le is a software engineer and Stanford CS student building production systems—architecture, data modeling, and deployment. Bay Area; education & social impact.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: '%s | Joseph Le',
  },
  description: defaultDescription,
  keywords: [
    'Joseph Le',
    'software engineer',
    'Stanford',
    'Stanford CS',
    'full stack',
    'systems',
    'portfolio',
  ],
  authors: [{ name: 'Joseph Le', url: siteUrl }],
  creator: 'Joseph Le',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Joseph Le',
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`overflow-scroll overflow-x-hidden ${inter.className}`}>
        <JsonLd />
        <SmoothScroll>
          <Navbar />
          <CustomCursor />
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
