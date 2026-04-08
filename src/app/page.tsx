import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Education } from '@/components/Education';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { HomeProfilePageJsonLd } from '@/components/seo/HomeProfilePageJsonLd';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <>
      <HomeProfilePageJsonLd />
      <Hero />
      <Education />
      <Experience />
      <Projects />
    </>
  );
}
