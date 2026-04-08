import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Education } from '@/components/Education';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Education />
      <Experience />
      <Projects />
    </>
  );
}
