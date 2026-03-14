"use client";

import { useScrollReveal } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Properties from "@/components/Properties";
import LuxuryLifestyle from "@/components/LuxuryLifestyle";
import PropertySlider from "@/components/PropertySlider";
import AboutAgency from "@/components/AboutAgency";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingSplash from "@/components/LoadingSplash";
import RosewoodSlider from "@/components/RosewoodSlider";
import PanoramicSpotlight from "@/components/PanoramicSpotlight";
import { useLenis } from "@/components/LenisProvider";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);
  const lenis = useLenis();

  // Activate scroll reveal animations globally
  useScrollReveal(isLoading);

  // Scroll lock management
  useEffect(() => {
    if (!lenis) return;
    
    const lock = () => {
      lenis.stop();
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.height = '100%';
    };

    const unlock = () => {
      lenis.start();
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
    };

    if (isLoading || isAnimating) {
      lock();
    } else {
      unlock();
    }

    return () => unlock();
  }, [lenis, isLoading, isAnimating]);

  useEffect(() => {
    // 1. Hide Splash after 2s
    const splashTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // 2. Unlock scroll after Header animations finish
    // 2s (Splash) + 4s (Hero sequence + buffer)
    const animationTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 6000);

    return () => {
      clearTimeout(splashTimer);
      clearTimeout(animationTimer);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingSplash key="splash" />}
      </AnimatePresence>

      {!isLoading && (
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-[#fafaf8] overflow-x-hidden"
        >
          <Navbar />
          <HeroSection />
          <RosewoodSlider />
          <Properties />
          <PanoramicSpotlight />
          <LuxuryLifestyle />
          <CallToAction />
          <Footer />
        </motion.main>
      )}
    </>
  );
}
