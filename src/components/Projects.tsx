'use client';

import React from 'react';
import Link from 'next/link';
import { Github } from 'lucide-react';
import AnimatedSection from '@/components/animations/AnimatedSection';
import { projects } from '@/data/projects';
import type { Project } from '@/data/projects';

function renderProjectDescription({
  description,
  descriptionLinks,
}: {
  description: string;
  descriptionLinks?: Project['descriptionLinks'];
}) {
  if (!descriptionLinks?.length) return description;
  const pattern = descriptionLinks.map((l) => l.text).join('|');
  const parts = description.split(new RegExp(`(${pattern})`));
  return parts.map((part, i) => {
    const link = descriptionLinks?.find((l) => l.text === part);
    if (link) {
      return (
        <a
          key={i}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-primary hover:underline"
        >
          {part}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function Projects() {
  return (
    <section id="projects" className="mt-26 px-8 py-16 sm:py-12">
      <AnimatedSection animation="fade-up">
        <div className="pb-6">
          <h1 className="text-3xl font-medium leading-none lg:text-[10rem]">
            Projects
          </h1>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={0.1}>
        <p className="mb-12 max-w-xl text-lg text-foreground/60">
          Things I&apos;ve built for classes, hackathons, and fun.
        </p>
      </AnimatedSection>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <AnimatedSection
            key={project.id}
            animation="fade-up"
            delay={index * 0.05}
          >
            <div className="group block border-t border-foreground/10 py-8 transition-colors first:border-t-0 hover:bg-foreground/[0.02]">
              <div className="flex items-start gap-6 md:gap-8">
                <span className={`font-mono text-sm pt-1 ${(project.current) ? 'text-primary' : 'text-foreground/30'}`}>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    {(project.current || project.live) && (
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                      </span>
                    )}
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-xl transition-all hover:underline underline-offset-4 md:text-2xl ${(project.current || project.live) ? 'font-semibold' : 'font-medium'}`}
                    >
                      {project.title}
                    </Link>
                    {project.current && (
                      <span className="font-mono text-xs text-primary/70">
                        currently building
                      </span>
                    )}
                  </div>

                  <p className="mt-2 max-w-2xl text-foreground/60 leading-relaxed">
                    {renderProjectDescription({
                      description: project.description,
                      descriptionLinks: project.descriptionLinks,
                    })}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs text-foreground/40"
                      >
                        {tag}
                      </span>
                    ))}
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-foreground/20 transition-all hover:translate-x-1 hover:text-foreground/50"
                    >
                      ↗
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}

        <AnimatedSection animation="fade-up" delay={projects.length * 0.05}>
          <Link
            href="https://github.com/JosephLeKH"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-6 border-t border-foreground/10 py-8 transition-colors hover:bg-foreground/[0.02] md:gap-8"
          >
            <span className="font-mono text-sm text-foreground/30">
              {String(projects.length + 1).padStart(2, '0')}
            </span>
            <Github className="h-5 w-5 text-foreground/40 transition-colors group-hover:text-foreground/60" />
            <span className="text-foreground/60 transition-all group-hover:underline group-hover:underline-offset-4">
              More on GitHub
            </span>
            <span className="ml-auto text-foreground/20 transition-all group-hover:translate-x-1 group-hover:text-foreground/50">
              ↗
            </span>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
