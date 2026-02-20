'use client';

import React from 'react';
import Image from 'next/image';
import AnimatedSection from '@/components/animations/AnimatedSection';


export function Hero() {
  return (
    <section id="about">

      <div className="mt-36 px-8">
        <div className="pb-12">
          <h1 className="text-3xl font-medium lg:text-[10rem] lg:leading-none">About Me</h1>
        </div>

        <section className="grid gap-8 md:gap-12 lg:grid-cols-12 lg:gap-16">
          <AnimatedSection
            animation="fade-right"
            className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start"
          >
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl">
              <Image
                src="/Hiking_pfp_portfolio.png"
                alt="Joseph Le"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1024px) 100vw, (max-width: 1024px) 50vw, 400px"
              />
            </div>
          </AnimatedSection>

          <div className="space-y-8 lg:col-span-7">
            <AnimatedSection animation="fade-up">
              <p className="text-xl font-medium leading-relaxed text-foreground/90 sm:text-2xl">
                <span className="font-bold text-primary">Software engineer</span>{' '}
                building thoughtful, reliable <span className="font-bold text-primary">systems</span> from idea to deployment. 
                I’m drawn to end-to-end ownership and thinking carefully about architecture, data, and how software holds up in the real world.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.1}>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  How I Work
                </h3>
                <p className="leading-relaxed text-foreground/70">
                  Turning complex, data heavy problems into reliable software. I enjoy
                  designing architectures, databases, and pipelines that scale cleanly and
                  hold up under real constraints.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.2}>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Beyond Engineering
                </h3>
                <p className="leading-relaxed text-foreground/70">
                  Based in the Bay Area. I'm interested in{' '}
                  <span className="font-bold text-primary">education</span>,{' '}
                  <span className="font-bold text-primary">social good</span>, and projects with
                  real impact. I care about how technology shapes access, opportunity, and
                  long term outcomes, and I’m drawn to projects where thoughtfulness matters
                  as much as execution.
                </p>
                <p className="leading-relaxed text-foreground/70">
                  Outside of work, I enjoy cooking, hiking, camping, listening
                  to music, and playing basketball. I value
                  balance, curiosity, and time away from screens, and I try to bring that same
                  care and perspective into the things I build.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </section>
  );
}
