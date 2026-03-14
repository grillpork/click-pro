"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useLenis } from "./LenisProvider";

const NAV_LINKS = [
  { label: "Properties", href: "#properties" },
  { label: "Collections", href: "#categories" },
  { label: "Lifestyle",   href: "#lifestyle"  },
  { label: "Contact",     href: "#contact"     },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [initialEntrance, setInitialEntrance] = useState(true);
  
  // Handle initial entrance delay finish
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialEntrance(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const { scrollY } = useScroll();
  const lastY = useRef(0);
  const lenis = useLenis();

  // Lock scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [menuOpen, lenis]);

  // Scroll to section handler
  const handleScroll = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    
    if (lenis) {
      lenis.scrollTo(href, { offset: -64, duration: 1.5 });
    } else {
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({ top: target.offsetTop - 64, behavior: "smooth" });
      }
    }
  };

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
        initial={{ y: -20, opacity: 0 }}
        animate={{ 
          y: hidden && !menuOpen ? "-100%" : "0%",
          opacity: 1
        }}
        transition={{ 
          y: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: initialEntrance ? 2.0 : 0 },
          opacity: { duration: 0.5, delay: initialEntrance ? 2.0 : 0 }
        }}
        className="fixed inset-x-0 top-0 z-50 flex flex-col items-center select-none"
      >
        {/* Full Glassmorphism Backdrop */}
        <motion.div 
          className="absolute inset-0 -z-10"
          animate={{
            backgroundColor: scrolled ? "rgba(250, 250, 248, 0.9)" : "transparent",
            backdropFilter: scrolled ? "blur(32px) saturate(180%)" : "blur(0px)",
            WebkitBackdropFilter: scrolled ? "blur(32px) saturate(180%)" : "blur(0px)",
            boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.06)" : "0 0px 0px rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.6 }}
        />

        {/* --- Top Row: Logo Bar --- */}
        <motion.div
          animate={{ 
            height: scrolled ? 0 : 90, 
            opacity: scrolled ? 0 : 1,
            y: scrolled ? -20 : 0
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full flex items-center justify-center overflow-hidden border-b border-white/5"
        >
          <Link href="/" className="flex flex-col items-center group py-8">
            <motion.span 
              animate={{ color: scrolled ? "#111" : "#fff" }}
              className="font-serif text-3xl font-bold tracking-[0.2em] uppercase"
            >
              Click Property
            </motion.span>
            <motion.span 
              animate={{ color: scrolled ? "#b0976d" : "rgba(255,255,255,0.6)" }}
              className="text-[10px] uppercase tracking-[0.4em] font-medium"
            >
              Real Estate Consultant
            </motion.span>
          </Link>
        </motion.div>

        {/* --- Bottom Row: Menu Bar --- */}
        <div className="w-full h-18 lg:h-20 flex items-center justify-between px-8 md:px-14 max-w-[1440px] relative">
          
          {/* Left Side: Scrolled Logo */}
          <div className="flex-1">
            <AnimatePresence>
              {scrolled && (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Link href="/" className="flex flex-col">
                    <span className="font-serif text-lg font-bold tracking-widest uppercase text-zinc-900 leading-tight">
                      Click Property
                    </span>
                    <span className="text-[7px] uppercase tracking-[0.4em] font-bold text-[#b0976d]">
                      Consultant
                    </span>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Center: Desktop Nav Links with Modern Rolling Text (Hidden when scrolled) */}
          <motion.div 
            animate={{ 
              opacity: scrolled ? 0 : 1,
              y: scrolled ? -10 : 0,
              pointerEvents: scrolled ? "none" : "auto"
            }}
            transition={{ duration: 0.4 }}
            className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="relative h-7 overflow-hidden group px-1"
              >
                <motion.div
                  initial={false}
                  whileHover={{ y: -28 }}
                  transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                  className="flex flex-col"
                >
                  <motion.span
                    animate={{ color: scrolled ? "#3f3f46" : "#fff" }}
                    className="text-[11px] font-bold uppercase tracking-[0.2em] leading-7"
                  >
                    {link.label}
                  </motion.span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] leading-7 text-[#b0976d]">
                    {link.label}
                  </span>
                </motion.div>
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#b0976d] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"
                />
              </a>
            ))}
          </motion.div>

          {/* Right Side: CTA / Mobile Toggle — Hidden at top, shown when scrolled */}
          <div className="flex-1 flex justify-end items-center gap-6">
            <motion.div
              animate={{ 
                opacity: scrolled ? 1 : 0,
                x: scrolled ? 0 : 20,
                pointerEvents: scrolled ? "auto" : "none"
              }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-6"
            >
              <motion.div
                className="hidden lg:flex items-center gap-3 px-4 py-2"
              >
                <button className="text-[9px] font-bold uppercase tracking-[0.25em] text-zinc-900/40 hover:text-[#b0976d] transition-colors cursor-pointer">EN</button>
                <span className="w-px h-2.5 bg-[#b0976d]/30" />
                <button className="text-[9px] font-bold uppercase tracking-[0.25em] text-zinc-900 hover:text-[#b0976d] transition-colors cursor-pointer">TH</button>
              </motion.div>

              {/* Hamburger Button — Only visible when scrolled or on mobile */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex flex-col cursor-pointer items-end gap-1.5 w-7 group relative z-50 p-1"
                aria-label="Toggle Menu"
              >
                <motion.span 
                  animate={menuOpen ? { rotate: 45, y: 7.5, width: "100%", backgroundColor: "#000000" } : { rotate: 0, y: 0, width: "100%", backgroundColor: scrolled ? "#0a0a0a" : "#fff" }}
                  className="h-[1px] transition-all duration-500"
                />
                <motion.span 
                  animate={menuOpen ? { opacity: 0, width: "0%" } : { opacity: 1, width: "70%", backgroundColor: scrolled ? "#0a0a0a" : "#fff" }}
                  className="h-[1px] transition-all duration-500"
                />
                <motion.span 
                  animate={menuOpen ? { rotate: -45, y: -7.5, width: "100%", backgroundColor: "#000000" } : { rotate: 0, y: 0, width: "100%", backgroundColor: scrolled ? "#0a0a0a" : "#fff" }}
                  className="h-[1px] transition-all duration-500"
                />
              </button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* --- Mobile Fullscreen Menu --- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col justify-start items-center px-10 pt-[15vh]"
          >
            {/* ── Main Links ── */}
            <div className="flex flex-col gap-8 md:gap-12 text-center">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.1 + i * 0.1, 
                    ease: [0.19, 1, 0.22, 1] 
                  }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="font-serif text-5xl md:text-8xl font-light text-white hover:text-[#b0976d] transition-all duration-500 block"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </div>
            
            {/* ── Menu Footer ── */}
            <div className="absolute bottom-12 w-full max-w-[1440px] px-10 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-white/5 pt-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-[10px] uppercase tracking-[0.4em] text-[#b0976d] mb-4 font-bold">Inquiries</p>
                <p className="text-zinc-400 text-sm hover:text-white transition-colors cursor-pointer">hello@clickproperty.co.th</p>
                <p className="text-zinc-400 text-sm mt-1">+66 2 123 4567</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="md:text-right"
              >
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#b0976d] mb-4 font-bold">Office</p>
                <p className="text-zinc-400 text-sm italic">Sukhumvit, Bangkok</p>
                <p className="text-zinc-400 text-[10px] uppercase tracking-widest mt-2 opacity-50">Private Viewings Only</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
