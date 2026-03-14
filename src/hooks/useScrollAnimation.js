"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "@/components/LenisProvider";

/**
 * Attaches IntersectionObserver to all elements with .reveal / .reveal-left /
 * .reveal-right / .reveal-scale inside the document, adding "visible" class
 * when they enter the viewport.
 */
export function useScrollReveal(dependency) {
  useEffect(() => {
    const selectors = ".reveal, .reveal-left, .reveal-right, .reveal-scale, .masked-reveal";
    const els = document.querySelectorAll(selectors);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [dependency]);
}

/**
 * Lightweight parallax driven by Lenis scroll events.
 * Falls back to native scroll listener if Lenis isn't available yet.
 * speed: 0.2 = subtle, 0.5 = strong
 */
export function useParallax(speed = 0.25) {
  const ref = useRef(null);
  const lenis = useLenis();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const apply = () => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
      el.style.transform = `translateY(${offset}px)`;
    };

    // If Lenis is ready, subscribe to its scroll event (fires every rAF)
    if (lenis) {
      const unsub = lenis.on("scroll", apply);
      apply(); // initial position
      return () => {
        if (typeof unsub === "function") unsub();
      };
    }

    // Fallback: native scroll
    window.addEventListener("scroll", apply, { passive: true });
    apply();
    return () => window.removeEventListener("scroll", apply);
  }, [speed, lenis]);

  return ref;
}
