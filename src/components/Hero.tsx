'use client';

import React from 'react';
import Image from 'next/image';
import AnimatedSection from '@/components/animations/AnimatedSection';


export function Hero() {
  return (
    <section id="about">

      <div className="mt-36 px-8">
        <div className="space-y-3 pb-12">
          <h1 className="text-3xl font-medium lg:text-[10rem] lg:leading-none">Joseph Le</h1>
          <p className="text-lg text-foreground/75 lg:text-3xl lg:font-medium">
            Software Engineer · Stanford CS
          </p>
        </div>

        <div className="mx-auto w-[85%]">
        <section className="grid gap-8 md:gap-12 lg:grid-cols-12 lg:gap-16">
          <AnimatedSection
            animation="fade-right"
            className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start"
          >
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl">
              <Image
                src="/my_pfp.png"
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
                <span className="font-bold text-primary">Software engineer</span> building
                production-grade <span className="font-bold text-primary">systems</span> with
                end-to-end ownership from architecture and data modeling to deployment.
                I focus on writing software that is reliable, scalable, and built for the real world.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.1}>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  How I Work
                </h3>
                <p className="leading-relaxed text-foreground/70">
                  I turn complex, data-heavy problems into clean, maintainable systems.
                  I care deeply about architecture, performance, and clarity, designing
                  tools that scale without sacrificing simplicity.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.2}>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Beyond Engineering
                </h3>
                <p className="leading-relaxed text-foreground/70">
                  Based in the Bay Area, I’m especially interested in
                  <span className="font-bold text-primary"> education</span> and
                  <span className="font-bold text-primary"> social impact</span>.
                  I’m drawn to projects where technical depth meets meaningful, real-world outcomes.
                </p>
                <p className="leading-relaxed text-foreground/70">
                  Outside of work, I enjoy cooking, hiking, camping, music, and basketball.
                  I value balance and curiosity and I try to bring that same care into the
                  systems I build.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
        </div>
      </div>
    </section>
  );
}
