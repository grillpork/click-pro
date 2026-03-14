"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useLenis } from "./LenisProvider";

const NAV_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Atmosphere", href: "#atmosphere" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery",   href: "#gallery"  },
];

export default function PropertyNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const { scrollY } = useScroll();
  const lastY = useRef(0);
  const lenis = useLenis();

  // Trigger scroll-based animations
  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastY.current;
    
    // Toggle background state
    setScrolled(latest > 50);

    // Toggle visibility (hide on scroll down, show on scroll up)
    if (latest > 100) {
      if (diff > 15) {
        setHidden(true);
      } else if (diff < -15) {
        setHidden(false);
      }
    } else {
      setHidden(false);
    }

    lastY.current = latest;
  });

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: hidden && !menuOpen ? "-100%" : "0%",
          opacity: 1
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex flex-col items-center select-none"
      >
        {/* Glassmorphism Backdrop */}
        <motion.div 
          className="absolute inset-0 -z-10"
          animate={{
            backgroundColor: scrolled ? "rgba(255, 255, 255, 0.85)" : "transparent",
            backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "blur(0px)",
            WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "blur(0px)",
            borderBottom: scrolled ? "1px solid rgba(0,0,0,0.05)" : "1px solid transparent",
          }}
          transition={{ duration: 0.4 }}
        />

        <div className="w-full h-20 lg:h-24 flex items-center justify-between px-8 md:px-14 max-w-8xl mx-auto">
          {/* Left Side: Logo */}
          <Link href="/" className="flex flex-col group">
            <span className={`font-serif text-xl font-bold tracking-[0.15em] uppercase transition-colors duration-500 ${scrolled ? 'text-zinc-900' : 'text-white drop-shadow-md'}`}>
                CLICK PROPERTY
            </span>
            <span className={`text-[8px] uppercase tracking-[0.4em] font-medium transition-colors duration-500 ${scrolled ? 'text-[#b0976d]' : 'text-white/80'}`}>
                Premium Real Estate
            </span>
          </Link>

          {/* Right Side: Back Button & Menu Toggle */}
          <div className="flex items-center gap-8">
             <Link 
                href="/" 
                className={`hidden md:flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 px-6 py-2.5 rounded-full border ${
                    scrolled 
                    ? 'text-zinc-500 border-zinc-200 hover:border-zinc-900 hover:text-zinc-900' 
                    : 'text-white border-white/20 hover:border-white hover:bg-white/10'
                }`}
             >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Collection
             </Link>

             <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex flex-col cursor-pointer items-end gap-1.5 w-7 group relative z-50"
             >
                <div className={`h-px w-full transition-all duration-500 ${scrolled ? 'bg-zinc-900' : 'bg-white shadow-sm'}`} />
                <div className={`h-px w-8/12 transition-all duration-500 ${scrolled ? 'bg-zinc-900' : 'bg-white shadow-sm'}`} />
                <div className={`h-px w-full transition-all duration-500 ${scrolled ? 'bg-zinc-900' : 'bg-white shadow-sm'}`} />
             </button>
          </div>
        </div>
      </motion.nav>

      {/* Simplified Mobile Menu for Detail Page */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 z-60 bg-white flex flex-col items-center justify-center"
          >
             <button 
                onClick={() => setMenuOpen(false)}
                className="absolute top-10 right-10 w-12 h-12 flex items-center justify-center text-zinc-400 hover:text-zinc-900 transition-colors"
             >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
             </button>

             <div className="flex flex-col items-center gap-12">
                <Link href="/" onClick={() => setMenuOpen(false)} className="text-zinc-900 hover:text-[#b0976d] transition-all duration-500 font-serif text-5xl font-light">
                   Home
                </Link>
                <div className="w-12 h-px bg-[#b0976d]/30" />
                <div className="flex flex-col items-center gap-6">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-[#b0976d] font-bold">Inquiries</span>
                    <a href="tel:+66994565465" className="text-2xl font-light text-zinc-800">+66 99 456 5465</a>
                    <span className="text-sm text-zinc-400 tracking-widest font-light">concierge@clickproperty.co.th</span>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
