"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";

const LenisContext = createContext(null);

/**
 * Access the Lenis instance from any client component.
 * Returns null during SSR / before mount.
 */
export function useLenis() {
  return useContext(LenisContext);
}

/**
 * Wrap the app with this provider in layout.jsx.
 * It creates a single Lenis instance, drives it with rAF,
 * and exposes it via context so hooks can subscribe to scroll events.
 */
export default function LenisProvider({ children }) {
  const [lenis, setLenis] = useState(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const instance = new Lenis({
      duration: 1.2,            // scroll duration (seconds) — buttery feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo-out
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      syncTouch: false,          // keep native momentum on touch devices
      touchMultiplier: 1.5,
    });

    setLenis(instance);

    // Drive Lenis on every frame
    function raf(time) {
      instance.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }
    rafRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafRef.current);
      instance.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}
