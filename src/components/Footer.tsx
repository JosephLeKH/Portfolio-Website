'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Magnetic from '@/components/animations/magnetic';
import RoundedButton from '@/components/animations/roundedButton';

const ACCENT_COLOR = '#22C55E';
const BRAND_COLOR = 'hsl(350, 80%, 55%)';
const ANIMATED_UNDERLINE_CLASS =
  "relative after:absolute after:left-1/2 after:mt-0.5 after:block after:h-px after:w-0 after:-translate-x-1/2 after:transform after:bg-white after:duration-200 after:ease-linear after:content-[''] hover:after:w-full";

export function Footer() {
  const [timeNow, setTimeNow] = useState('');
  const [isGetInTouchHovered, setIsGetInTouchHovered] = useState(false);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  useEffect(() => {
    const updateTime = () => setTimeNow(new Date().toLocaleTimeString());
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      style={{ y }}
      ref={container}
      className="relative flex min-h-screen flex-col items-center justify-between bg-foreground p-6 pt-32 font-sans text-white sm:justify-center"
    >
      <div className="w-full bg-foreground pt-[150px] sm:max-w-[1800px]">
        <div className="relative border-b border-gray-600 pb-12 sm:mx-[100px]">
          <span className="flex items-center">
            <div className="relative h-16 w-16 overflow-hidden rounded-full sm:h-[100px] sm:w-[100px]">
              <Image
                src="/my_pfp.png"
                alt="Joseph Le"
                fill
                className="object-cover object-top"
              />
            </div>
            <h2 className="ml-3 text-xl font-medium sm:text-[5vh]">
              Let&apos;s work together!
            </h2>
          </span>
          <motion.div
            style={{ x }}
            className="absolute left-[calc(100%-200px)] top-[calc(100%+65px)] sm:left-[calc(100%-400px)] sm:top-[calc(100%-75px)]"
          >
            <Link
              href="/contact"
              className="relative flex h-[100px] w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-full text-center text-sm font-medium text-white transition-transform duration-300 hover:scale-105 sm:h-[200px] sm:w-[200px] sm:text-base"
              style={{ backgroundColor: BRAND_COLOR }}
              onMouseEnter={() => setIsGetInTouchHovered(true)}
              onMouseLeave={() => setIsGetInTouchHovered(false)}
            >
              <span className="relative z-10">Get in touch</span>
              <div
                className="absolute left-0 w-full rounded-full transition-all duration-500 ease-out"
                style={{
                  height: isGetInTouchHovered ? '150%' : '0%',
                  top: isGetInTouchHovered ? '-25%' : '100%',
                  backgroundColor: ACCENT_COLOR,
                }}
              />
            </Link>
          </motion.div>
        </div>

        <div className="mt-6 flex gap-5 sm:mx-[100px]">
          <RoundedButton backgroundColor="accent" as="div">
            <a href="mailto:josephle@stanford.edu">josephle@stanford.edu</a>
          </RoundedButton>
          <RoundedButton backgroundColor="accent">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">RESUME</a>
          </RoundedButton>
        </div>

        <div className="mt-20 flex flex-col justify-between p-5 sm:mx-[100px] sm:mt-48 sm:flex-row sm:items-end sm:gap-16">
          <p className="mb-5 text-base sm:mb-0 sm:max-w-xs">
            Computer science student at Stanford focused on software systems, applied machine learning, and building reliable products end to end.
          </p>
          <div className="flex items-end gap-6">
            <span className="flex flex-col gap-3">
              <h3 className="m-0 cursor-default p-1 text-base font-light text-gray-500">
                Copyright
              </h3>
              <p className="relative m-0 cursor-pointer p-1">
                © {new Date().getFullYear()} Joseph Le
              </p>
            </span>
            <span className="flex flex-col gap-3">
              <h3 className="m-0 cursor-default p-1 text-base font-light text-gray-500">
                Timezone
              </h3>
              <p className="relative m-0 cursor-pointer p-1">
                {timeNow} PST (GMT-8)
              </p>
            </span>
            <span className="flex flex-col gap-3">
              <h3 className="m-0 cursor-default p-1 text-base font-light text-gray-500">
                Socials
              </h3>
              <div className="relative m-0 flex cursor-pointer gap-4 p-1">
                <Magnetic>
                  <Link
                    href="https://github.com/JosephLeKH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={ANIMATED_UNDERLINE_CLASS}
                  >
                    Github
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link
                    href="https://www.linkedin.com/in/hung-le-/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={ANIMATED_UNDERLINE_CLASS}
                  >
                    Linkedin
                  </Link>
                </Magnetic>
              </div>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
