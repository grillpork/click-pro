"use client";

import { useParallax } from "@/hooks/useScrollAnimation";

export default function PanoramicSpotlight() {
  // subtle parallax effect for the background image
  const parallaxRef = useParallax(0.15);

  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden flex items-center justify-center">
      {/* ── Background Video with Parallax ── */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 w-full h-[150%] -top-[25%]"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.75)" }}
        >
          <source src="/vibe.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── Overlays ── */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/40" />
      <div className="absolute inset-0 hero-vignette opacity-40" />

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-8">
        <div className="flex flex-col items-center">
          <div className="masked-reveal mb-6">
            <p className="text-[10px] uppercase tracking-[0.5em] text-white/70 font-bold">
              Unrivaled Perspectives
            </p>
          </div>
          
          <h2 className="font-serif text-5xl md:text-8xl text-white font-light leading-[1.1] mb-8">
            <span className="masked-reveal">
              <span>Where the City</span>
            </span>
            <span className="masked-reveal">
              <span className="italic font-light">Meets the Sky</span>
            </span>
          </h2>
          
          <div className="masked-reveal">
            <p className="max-w-xl text-white/60 text-base md:text-lg font-light leading-relaxed">
              Witness the rhythmic dance of Bangkok’s skyline. From the tranquility of the river to 
              the vibrant pulse of Sukhumvit, discovery awaits at every elevation.
            </p>
          </div>
        </div>
      </div>

      {/* ── Floating Decorative Element ── */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
        <span className="text-[8px] uppercase tracking-[0.3em] text-white">Scroll to Explore</span>
        <div className="w-px h-12 bg-linear-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
