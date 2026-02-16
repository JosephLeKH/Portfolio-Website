import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/ui/Navbar';
import { CustomCursor } from '@/components/ui/CustomCursor';
import SmoothScroll from '@/components/animations/SmoothScroll';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Joseph Le | Software Engineer",
  description: 'Joseph Le is a software engineer and CS student at Stanford.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`overflow-scroll overflow-x-hidden ${inter.className}`}>
        <SmoothScroll>
          <Navbar />
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
