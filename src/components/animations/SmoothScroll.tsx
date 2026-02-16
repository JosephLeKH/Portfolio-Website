'use client';

import React, { PropsWithChildren, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function SmoothScroll({ children }: PropsWithChildren) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const locomotiveScrollRef = useRef<any>(null);
  const pathname = usePathname();

  // Initialize Locomotive Scroll
  useEffect(() => {
    (async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const LocomotiveScroll = (await import('locomotive-scroll') as any).default;
      locomotiveScrollRef.current = new LocomotiveScroll();
    })();

    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }
    };
  }, []);

  // Handle initial hash on page load/navigation (for cross-page navigation like /contact -> /#projects)
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && pathname === '/') {
      // Delay to ensure DOM is ready after page transition animation (preloader is 800ms)
      const timer = setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1300);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // Handle hash link clicks
  useEffect(() => {
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Handle both /#section and #section formats
      const hashMatch = href.match(/#([a-zA-Z0-9-_]+)$/);
      if (!hashMatch) return;

      const hash = hashMatch[1];
      const element = document.getElementById(hash);

      // Check if we're on the home page and clicking a home page section link
      const isHomePageLink = href.startsWith('/#') || (href.startsWith('#') && pathname === '/');
      
      if (isHomePageLink && pathname === '/' && element) {
        // Same page - prevent default and scroll directly
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
        // Update URL hash without triggering navigation
        window.history.pushState(null, '', href.startsWith('/') ? href : `/${href}`);
      }
      // For cross-page navigation (from /contact to /#section), let Next.js handle it
      // The pathname useEffect above will handle scrolling after navigation
    };

    document.addEventListener('click', handleHashClick);

    return () => {
      document.removeEventListener('click', handleHashClick);
    };
  }, [pathname]);

  return <div className="main">{children}</div>;
}
