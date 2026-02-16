export const opacity = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 }
  }
};

export const slideUp = {
  initial: {
    top: 0
  },
  exit: {
    top: '-100vh',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const, delay: 0.2 }
  }
};

export const createCurvePath = (width: number, height: number, curve: number) => {
  return `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height + curve} 0 ${height} L0 0`;
};

export const getCurveVariants = (width: number, height: number) => ({
  initial: {
    d: createCurvePath(width, height, 300),
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const }
  },
  exit: {
    d: createCurvePath(width, height, 0),
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const, delay: 0.3 }
  }
});
