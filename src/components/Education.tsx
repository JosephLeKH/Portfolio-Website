'use client';

import React from 'react';
import Image from 'next/image';
import AnimatedSection from '@/components/animations/AnimatedSection';
import { educationEntries, awards, courses } from '@/data/education';

export function Education() {
  return (
    <section id="education" className="mt-26 px-8 py-16 sm:py-12">
      <AnimatedSection animation="fade-up">
        <div className="pb-6 text-right">
          <h1 className="text-3xl font-medium leading-none lg:text-[10rem]">
            Education
          </h1>
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl border border-foreground/5 bg-white p-8 shadow-sm sm:p-10">      
            <div className="relative">
              <div className="space-y-10">
                {educationEntries.map((entry, i) => (
                  <div key={i} className="relative flex gap-8">
                    <div className="relative z-10 flex-shrink-0">
                      <div className="relative h-14 w-14 overflow-hidden rounded-lg bg-white ring-4 ring-white">
                        <Image
                          src="/stanford-logo.png"
                          alt={entry.school}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0 pt-1">
                      <h1 className="text-xl font-semibold text-foreground md:text-2xl">
                        {entry.school}
                      </h1>

                      <p className="mt-0.5 text-base text-foreground/80">
                        {entry.degree}
                      </p>

                      {entry.minor && (
                        <p className="mt-0.5 text-base text-foreground/80">
                          {entry.minor}
                        </p>
                      )}

                      <p className="mt-0.5 text-base text-foreground/60">
                        {entry.years}
                      </p>

                      <p className="mt-2 text-base text-foreground/70">
                        GPA: {entry.grade}
                      </p>

                      {entry.activities && (
                        <>
                          {entry.activities.map((activity, index) => (
                            <p key={index} className="mt-3 text-base text-foreground/70">
                              {activity}
                            </p>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="my-10 h-px bg-foreground/10" />

            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <h3 className="mb-5 text-base font-medium uppercase tracking-wider text-foreground/60">
                  Recognition
                </h3>
                <ul className="space-y-3">
                  {awards.map((award, i) => (
                    <li key={i}>
                      <p className="group inline-flex items-center gap-2 text-base font-normal text-foreground">
                        <span className="text-foreground">→</span>
                        <span className="animated-underline">{award.title}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-5 text-base font-medium uppercase tracking-wider text-foreground/60">
                  Relevant Coursework
                </h3>
                <div className="relative flex flex-wrap gap-x-2 gap-y-2">
                  {courses.map((course, i) => (
                    <a
                      key={i}
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-snap
                      className="course-chip group relative rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200"
                    >
                      {/* Aesthetic tooltip */}
                      <span className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 origin-bottom scale-95 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 z-[100]">
                        <span className="block whitespace-nowrap rounded-xl border-2 border-[#22C55E] bg-white px-4 py-2 text-xs font-semibold text-foreground shadow-lg">
                          {course.fullName}
                        </span>
                        {/* Arrow */}
                        <span className="absolute left-1/2 -bottom-2 -translate-x-1/2">
                          <span className="block h-0 w-0 border-x-[8px] border-t-[8px] border-x-transparent border-t-[#22C55E]" />
                          <span className="absolute left-1/2 -top-[1px] block h-0 w-0 -translate-x-1/2 border-x-[6px] border-t-[6px] border-x-transparent border-t-white" />
                        </span>
                      </span>
                      <span className="course-text relative block text-foreground/70 transition-colors duration-200">{course.code}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>  
      </AnimatedSection>
    </section>
  );
}
