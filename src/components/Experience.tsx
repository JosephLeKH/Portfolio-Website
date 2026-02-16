'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedSection from '@/components/animations/AnimatedSection';
import { journeyData } from '@/data/experience';

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const line = lineRef.current;
    const items = itemsRef.current;

    if (!line || !items.length) return;

    // Animate the timeline line
    gsap.fromTo(
      line,
      { scaleY: 0, transformOrigin: 'top' },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: 0.5,
        },
      }
    );

    // Animate each timeline item
    items.forEach((item, i) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          x: i % 2 === 0 ? -60 : 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="experience" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Where I&apos;ve Been
            </h2>
          </div>
        </AnimatedSection>

        <div ref={containerRef} className="relative py-20">
          <div
            ref={lineRef}
            className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary via-secondary to-primary/30 md:block"
          />

          <div className="absolute left-8 top-0 h-full w-[2px] bg-gradient-to-b from-primary via-secondary to-primary/30 md:hidden" />

          <div className="relative space-y-16 md:space-y-24">
            {journeyData.map((item, i) => (
              <div
                key={i}
                ref={(el) => {
                  if (el) itemsRef.current[i] = el;
                }}
                className={`relative flex items-start gap-8 ${
                  i % 2 === 0
                    ? 'md:flex-row md:text-right'
                    : 'md:flex-row-reverse md:text-left'
                }`}
              >
                <div
                  className={`ml-16 flex-1 md:ml-0 ${
                    i % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                  }`}
                >
                  <div
                    className={`group relative rounded-2xl border border-foreground/5 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md ${
                      item.highlight ? 'border-primary/20 shadow-md' : ''
                    }`}
                  >
                    {item.logo && (
                      <div
                        className={`absolute top-4 h-10 w-10 overflow-hidden rounded-lg ${
                          i % 2 === 0 ? 'left-4 md:left-4' : 'left-4 md:left-auto md:right-4'
                        }`}
                      >
                        <Image
                          src={item.logo}
                          alt={`${item.company} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}

                    <span className="mb-2 inline-block rounded-full bg-foreground/10 px-3 py-1 text-sm font-medium text-foreground">
                      {item.year}
                    </span>
                    <h3 className="mb-1 text-xl font-bold text-foreground md:text-2xl">
                      {item.title}
                    </h3>
                    {item.companyUrl ? (
                      <Link
                        href={item.companyUrl}
                        className="mb-3 inline-block font-medium text-primary transition-colors hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @{item.company} ↗
                      </Link>
                    ) : (
                      <span className="mb-3 inline-block font-medium text-foreground/60">
                        @{item.company}
                      </span>
                    )}
                    <p className="text-foreground/70">{item.description}</p>
                  </div>
                </div>

                <div className="absolute left-6 top-6 z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary/40 bg-background md:left-1/2 md:-translate-x-1/2">
                  <div
                    className={`h-2 w-2 rounded-full ${
                      item.highlight ? 'bg-primary' : 'bg-primary/50'
                    }`}
                  />
                </div>

                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
