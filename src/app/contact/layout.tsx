import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Joseph Le',
  description: 'Get in touch with Joseph Le.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
