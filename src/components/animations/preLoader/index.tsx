'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { slideUp, getCurveVariants } from '@/components/animations/preLoader/anim';

export default function PreLoader() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setDimension({ width, height });
  }, []);

  const curve = getCurveVariants(dimension.width, dimension.height);

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed z-[100] flex h-screen w-screen items-center justify-center bg-foreground"
    >
      {dimension.width > 0 && (
        <svg className="absolute top-0 h-[calc(100%+300px)] w-full fill-foreground">
          <motion.path
            variants={curve}
            initial="initial"
            animate="enter"
            exit="exit"
          />
        </svg>
      )}
    </motion.div>
  );
}
