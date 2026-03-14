"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const HERO = {
  label: "Bangkok · Premium Real Estate",
  headline: ["Discover", "Exceptional", "Living"],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 2.2, // Faster reveal after video
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const lineVariants = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function HeroSection() {
  const [searchType, setSearchType] = useState("Buy");

  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden">
      {/* ── Background Video with Step-by-Step Scaling Animation ── */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 0.1, opacity: 0 }}
          animate={{ 
            scale: [0.1, 0.1, 0.3, 0.3, 1], 
            opacity: [0, 1, 1, 1, 1] 
          }}
          transition={{
            duration: 2, // Sped up to 2s
            times: [0, 0.15, 0.3, 0.5, 1],
            ease: "easeInOut",
            delay: 0
          }}
          className="w-full h-full"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/header-video.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>

      {/* ── Overlays Animated (Starts after video) ── */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute inset-0 z-10"
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-transparent to-zinc-950/80" />
        <div className="absolute inset-0 hero-vignette opacity-50" />
      </motion.div>

      {/* ── Content ── */}
      <motion.div 
        className="absolute inset-0 z-20 flex flex-col justify-center pt-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="mx-auto w-full max-w-[1440px] px-8 md:px-14">

          {/* Location label */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <span className="gold-line" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-white/60">
              {HERO.label}
            </span>
          </motion.div>

          {/* Headline with cinematic reveal */}
          <div className="mb-10">
            <h1 className="font-serif font-light text-white leading-[1.1]">
              {HERO.headline.map((line, i) => (
                <div key={i} className="overflow-hidden pb-4 -mb-4">
                  <motion.span 
                    variants={lineVariants}
                    className="block text-[13vw] sm:text-[7vw] lg:text-[4.5vw]"
                  >
                    {i === 1 ? <em className="not-italic text-[#b0976d]">{line}</em> : line}
                  </motion.span>
                </div>
              ))}
            </h1>
          </div>

         
          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <a href="#properties"
              className="px-7 py-3.5 bg-white text-zinc-900 text-[11px] font-medium uppercase tracking-[0.2em] rounded-full hover:bg-white/90 transition-all duration-300 active:scale-95 shadow-lg">
              Browse Properties
            </a>
            <a href="#contact"
              className="hidden sm:inline-flex px-7 py-3.5 border border-white/30 text-white text-[11px] font-medium uppercase tracking-[0.2em] rounded-full hover:bg-white/10 transition-all duration-300 active:scale-95">
              Contact Agent
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-16 bg-linear-to-b from-transparent via-white/50 to-transparent" 
        />
      </motion.div>
    </section>
  );
}
