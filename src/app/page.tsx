import { Hero } from '@/components/Hero';
import { Education } from '@/components/Education';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';

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
