'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMobile = () => setIsMobile(window.innerWidth < 1024);
    updateMobile();
    window.addEventListener('resize', updateMobile);
    return () => window.removeEventListener('resize', updateMobile);
  }, []);

  return (
    <>
      <header className="absolute top-0 z-20 box-border flex w-full items-center p-4 font-light text-foreground lg:p-8">
        <div className="flex lg:pr-56">
          <Link href="/" className="group z-10 flex items-center space-x-2" aria-label="Joseph Le home">
            <Image
              src="/site-mark.svg"
              alt=""
              width={32}
              height={32}
              className="block h-8 w-8 shrink-0"
              priority
              unoptimized
            />
            {!isMobile && (
              <div className="flex items-center space-x-2">
                <div className="transition-transform duration-300 hover:rotate-[360deg]">©</div>
                <div className="relative flex overflow-hidden">
                  <div className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[-100%]">
                    crafted by
                  </div>
                  <div className="px-1 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[-65px]">
                    Joseph
                  </div>
                  <div className="translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[-65px]">
                    Le
                  </div>
                </div>
              </div>
            )}
          </Link>
        </div>

        {!isMobile && (
          <div className="flex flex-1 items-center justify-between font-semibold">
            <div className="group relative z-10 flex cursor-pointer flex-col p-3">
              <div className="flex flex-col">
                <Link
                  href="/#about"
                  className="transition-colors hover:text-[#16A34A]"
                >
                  About
                </Link>
                <Link
                  href="/#projects"
                  className="transition-colors hover:text-[#16A34A]"
                >
                  Projects
                </Link>
              </div>
            </div>
            <div className="group relative z-10 flex cursor-pointer flex-col p-3">
              <div className="flex flex-col">
                <Link
                  href="/#experience"
                  className="transition-colors hover:text-[#16A34A]"
                >
                  Experience
                </Link>
                <Link
                  href="/#education"
                  className="transition-colors hover:text-[#16A34A]"
                >
                  Education
                </Link>
              </div>
            </div>
            <div className="group relative z-10 flex cursor-pointer flex-col p-3">
              <Link
                href="/contact"
                className="flex items-center transition-colors hover:text-[#16A34A]"
              >
                Contact
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center transition-colors hover:text-[#16A34A]"
              >
                Resume
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>
        )}

        {/* Mobile menu button */}
        {isMobile && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="fixed right-4 top-4 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-white"
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        )}
      </header>

      {/* Mobile menu overlay */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-foreground text-white">
          <nav className="flex flex-col items-center gap-8 text-2xl font-semibold">
            <Link
              href="/#about"
              onClick={() => setIsMenuOpen(false)}
              className="transition-colors hover:text-[#16A34A]"
            >
              About
            </Link>
            <Link
              href="/#experience"
              onClick={() => setIsMenuOpen(false)}
              className="transition-colors hover:text-[#16A34A]"
            >
              Experience
            </Link>
            <Link
              href="/#education"
              onClick={() => setIsMenuOpen(false)}
              className="transition-colors hover:text-[#16A34A]"
            >
              Education
            </Link>
            <Link
              href="/#projects"
              onClick={() => setIsMenuOpen(false)}
              className="transition-colors hover:text-[#16A34A]"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 transition-colors hover:text-[#16A34A]"
            >
              Contact
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 transition-colors hover:text-[#16A34A]"
            >
              Resume
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
