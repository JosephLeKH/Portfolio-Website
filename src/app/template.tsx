'use client';

import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { Footer } from '@/components/Footer';
import { isMobile } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import PreLoader from '@/components/animations/preLoader';

export default function RootTemplate({ children }: PropsWithChildren) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const [mobile, setMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setMobile(isMobile());
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const scrollInput = mobile ? 0.9 : 1.2;
  const height = useTransform(scrollYProgress, [0, scrollInput], [50, 0]);
  const bgColor = pathname === '/contact' ? 'bg-foreground' : 'bg-background';

  return (
    <main className="min-h-screen overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence>
      <div ref={container} className={`relative z-10 ${bgColor}`}>
        {children}
        {/* Curved bottom overlay */}
        <motion.div style={{ height }} className="relative">
          <div
            className={`absolute left-[-10%] z-10 h-[1050%] w-[120%] rounded-b-[100%] shadow-[0_60px_50px_0px_rgba(0,0,0,0.748)] ${bgColor}`}
          />
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
