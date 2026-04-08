'use client';

import React, { PropsWithChildren, useState } from 'react';
import Magnetic from './magnetic';

interface Props {
  backgroundColor?: string;
  className?: string;
  as?: 'button' | 'div';
  onClick?: () => void;
  style?: React.CSSProperties;
}

// Vibrant green accent - Stanford tree inspired, pairs with flamingo red
const ACCENT_COLOR = '#22C55E';

function getBgColor(backgroundColor: Props['backgroundColor']) {
  if (backgroundColor === 'accent') return ACCENT_COLOR;
  if (backgroundColor === 'primary') return 'hsl(0 74% 33%)';
  if (backgroundColor === 'secondary') return 'hsl(0 74% 45%)';
  return backgroundColor ?? ACCENT_COLOR;
}

export default function RoundedButton({
  children,
  backgroundColor = 'accent',
  className = '',
  as = 'button',
  onClick,
  style,
}: PropsWithChildren<Props>) {
  const [isHovered, setIsHovered] = useState(false);
  const Component = as;
  const fillColor = getBgColor(backgroundColor);

  return (
    <Magnetic>
      <Component
        className={`relative flex cursor-pointer items-center justify-center overflow-hidden rounded-full px-6 py-4 font-bold text-white transition-colors ${className}`}
        style={{
          border: `2px solid ${ACCENT_COLOR}`,
          ...style,
        }}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="relative z-10 transition-colors duration-300">
          {children}
        </span>
        <div
          className="absolute left-0 rounded-full transition-all duration-500 ease-out"
          style={{
            width: '100%',
            height: isHovered ? '150%' : '0%',
            top: isHovered ? '-25%' : '100%',
            backgroundColor: fillColor,
          }}
        />
      </Component>
    </Magnetic>
  );
}
