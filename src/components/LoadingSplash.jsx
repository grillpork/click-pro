"use client";

import { motion } from "framer-motion";

export default function LoadingSplash() {
  const luxuryEase = [0.16, 1, 0.3, 1];

  // Variants for the black background curtain
  const curtainVariants = {
    hidden: { opacity: 1, scale: 1.1 },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1.2, ease: luxuryEase }
    },
    exit: { 
      y: "-100%",
      transition: { duration: 1.2, ease: [0.8, 0, 0.1, 1], delay: 0.2 }
    }
  };

  // Variants for the content container
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 }
    },
    exit: { 
      opacity: 0,
      y: -60,
      transition: { duration: 0.8, ease: luxuryEase }
    }
  };

  const textReveal = {
    hidden: { y: 60, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 1.4, ease: luxuryEase }
    }
  };

  return (
    <motion.div
      variants={curtainVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-100 flex items-center justify-center bg-[#050505] overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.2 }}
        transition={{ duration: 2, ease: luxuryEase }}
        className="absolute w-[600px] h-[600px] bg-[#b0976d]/10 rounded-full blur-[150px]"
      />

      <motion.div 
        variants={contentVariants}
        className="relative flex flex-col items-center"
      >
        {/* Main Logo */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            variants={textReveal}
            className="font-serif font-light text-white text-5xl md:text-7xl uppercase tracking-[0.2em] text-center"
          >
            Click Property
          </motion.h1>
        </div>

        {/* Subtext */}
        <motion.div
          variants={textReveal}
          style={{ letterSpacing: "1em" }}
          animate={{ letterSpacing: "0.6em" }}
          transition={{ duration: 2.5, ease: luxuryEase }}
          className="text-[#b0976d] text-[10px] md:text-xs uppercase font-medium flex items-center justify-center whitespace-nowrap"
        >
          Real Estate Consultant
        </motion.div>

        {/* Shimmering Loader Line */}
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100px", opacity: 1 }}
          transition={{ duration: 1.5, ease: luxuryEase, delay: 1 }}
          className="h-[1px] bg-white/10 mt-12 relative overflow-hidden"
        >
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-linear-to-r from-transparent via-[#b0976d]/50 to-transparent"
          />
        </motion.div>
      </motion.div>

      {/* Aesthetic Border Frame */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.15, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 2.5, ease: luxuryEase }}
        className="absolute inset-12 md:inset-20 border border-white/20 pointer-events-none"
      />
    </motion.div>
  );
}
