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

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash || pathname !== '/') return;
    const timer = setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 1300);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const handleHashClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      const href = anchor?.getAttribute('href');
      if (!href) return;

      const hashMatch = href.match(/#([a-zA-Z0-9-_]+)$/);
      if (!hashMatch) return;

      const hash = hashMatch[1];
      const element = document.getElementById(hash);
      const isHomePageLink = href.startsWith('/#') || (href.startsWith('#') && pathname === '/');

      if (isHomePageLink && pathname === '/' && element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href.startsWith('/') ? href : `/${href}`);
      }
    };

    document.addEventListener('click', handleHashClick);
    return () => document.removeEventListener('click', handleHashClick);
  }, [pathname]);

  return <div className="main">{children}</div>;
}
