'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { isMobile } from '@/lib/utils';

// Brand color (matches --primary in globals.css)
const BRAND_COLOR = 'hsl(350, 80%, 55%)';
const BRAND_COLOR_DARK = 'hsl(350, 80%, 45%)';

// Accent color for snapped state (green - matches footer accent)
const ACCENT_COLOR = '#22C55E';

// Default cursor size
const DEFAULT_SIZE = 40;
const DEFAULT_RADIUS = 20; // Circle = half of size

// Delay before un-snapping (ms) - allows smooth transition between adjacent targets
const UNSNAP_DELAY = 60;

/**
 * CustomCursor - Brand color cursor with snap-to-element morphing
 * 
 * When hovering over elements with [data-cursor-snap], the cursor morphs
 * to the element's bounds as an outline, while the element itself handles
 * the background color (ensuring text is always visible).
 */
export function CustomCursor() {
  const [isClicked, setIsClicked] = useState(false);
  const [isSnapped, setIsSnapped] = useState(false);
  const currentSnapTargetRef = useRef<HTMLElement | null>(null);
  const unsnapTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastMousePos = useRef({ x: 0, y: 0 });

  // Spring config - fast and responsive
  const springConfig = { damping: 30, stiffness: 500, mass: 0.5 };

  // Position
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Size (for morphing)
  const cursorWidth = useMotionValue(DEFAULT_SIZE);
  const cursorHeight = useMotionValue(DEFAULT_SIZE);
  const cursorWidthSpring = useSpring(cursorWidth, springConfig);
  const cursorHeightSpring = useSpring(cursorHeight, springConfig);

  // Border radius (circle <-> rounded rectangle)
  const borderRadius = useMotionValue(DEFAULT_RADIUS);
  const borderRadiusSpring = useSpring(borderRadius, springConfig);

  // Handle adding/removing the active attribute on target elements
  const updateSnapTarget = useCallback((newTarget: HTMLElement | null) => {
    const currentTarget = currentSnapTargetRef.current;
    
    if (currentTarget && currentTarget !== newTarget) {
      currentTarget.removeAttribute('data-cursor-active');
    }
    if (newTarget) {
      newTarget.setAttribute('data-cursor-active', 'true');
    }
    currentSnapTargetRef.current = newTarget;
  }, []);

  // Delayed shape change - clears if we snap to a new target quickly
  const scheduleShapeReset = useCallback(() => {
    if (unsnapTimeoutRef.current) return; // Already scheduled
    
    unsnapTimeoutRef.current = setTimeout(() => {
      cursorWidth.set(DEFAULT_SIZE);
      cursorHeight.set(DEFAULT_SIZE);
      borderRadius.set(DEFAULT_RADIUS);
      setIsSnapped(false);
      unsnapTimeoutRef.current = null;
    }, UNSNAP_DELAY);
  }, [cursorWidth, cursorHeight, borderRadius]);

  const cancelShapeReset = useCallback(() => {
    if (unsnapTimeoutRef.current) {
      clearTimeout(unsnapTimeoutRef.current);
      unsnapTimeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      lastMousePos.current = { x: e.clientX, y: e.clientY };
      
      const target = document.elementFromPoint(e.clientX, e.clientY);
      const snapTarget = target?.closest('[data-cursor-snap]') as HTMLElement | null;

      if (snapTarget) {
        // Cancel any pending shape reset since we're on a target
        cancelShapeReset();
        
        const rect = snapTarget.getBoundingClientRect();
        const padding = 2;
        cursorX.set(rect.left - padding);
        cursorY.set(rect.top - padding);
        cursorWidth.set(rect.width + padding * 2);
        cursorHeight.set(rect.height + padding * 2);
        borderRadius.set(10);
        setIsSnapped(true);
        updateSnapTarget(snapTarget);
      } else {
        // Not on a snap target - always follow mouse immediately
        cursorX.set(e.clientX - DEFAULT_SIZE / 2);
        cursorY.set(e.clientY - DEFAULT_SIZE / 2);
        
        // Clear active state immediately
        updateSnapTarget(null);
        
        // Schedule shape reset (delayed to allow smooth transitions between adjacent targets)
        if (isSnapped) {
          scheduleShapeReset();
        }
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelShapeReset();
      // Clean up any active state on unmount
      if (currentSnapTargetRef.current) {
        currentSnapTargetRef.current.removeAttribute('data-cursor-active');
      }
    };
  }, [cursorX, cursorY, cursorWidth, cursorHeight, borderRadius, updateSnapTarget, isSnapped, scheduleShapeReset, cancelShapeReset]);

  if (typeof navigator !== 'undefined' && isMobile()) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        width: cursorWidthSpring,
        height: cursorHeightSpring,
        borderRadius: borderRadiusSpring,
        // When snapped: green outline only. When normal: solid brand color circle
        backgroundColor: isSnapped ? 'transparent' : (isClicked ? BRAND_COLOR_DARK : BRAND_COLOR),
        border: isSnapped ? `2px solid ${ACCENT_COLOR}` : 'none',
        zIndex: 9999,
        transition: 'background-color 0.15s ease-out, border 0.15s ease-out',
        boxShadow: isSnapped 
          ? `0 0 15px ${ACCENT_COLOR}30` 
          : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        opacity: isSnapped ? 1 : 0.7,
      }}
    />
  );
}
