"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DINING_EXPERIENCES = [
  {
    id: 1,
    title: "Magnolia Riverside",
    location: "Chao Phraya · Bangkok",
    description: "Experience the pinnacle of riverside living with breathtaking views of the Chao Phraya. Modern luxury meets the timeless beauty of Bangkok's waterways.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200",
  },
  {
    id: 2,
    title: "The Athenee Suite",
    location: "Witthayu · Bangkok",
    description: "A masterclass in sophisticated urban living. Located in the heart of Bangkok's diplomatic district, offering unparalleled elegance and panoramic cityscapes.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200",
  },
  {
    id: 3,
    title: "Heritage Garden",
    location: "Bang Rak · Bangkok",
    description: "A rare sanctuary of peace amidst the city's vibrant energy. Lush landscapes and colonial-inspired architecture create a unique dwelling experience.",
    image: "https://i0.wp.com/www.emporioarchitect.com/upload/portofolio/1280/desain-rumah-modern-3-lantai-33201124-249796192201124080649-0.jpg",
  },
  {
    id: 4,
    title: "Skyline Pinnacle",
    location: "Sukhumvit · Bangkok",
    description: "Rising above the clouds, this architectural marvel redefines luxury living. Glass-walled interiors and private infinity pools overlooking the horizon.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200",
  },
  {
    id: 5,
    title: "Silom Residence",
    location: "Silom · Bangkok",
    description: "Sophisticated design in the financial heart of the city. A blend of contemporary art and ultimate comfort for the discerning professional.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200",
  }
];

export default function RosewoodSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "center",
    skipSnaps: false
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="categories" className="py-32 bg-[#fafaf8] overflow-hidden">
      <div className="mx-auto max-w-[1440px]">
        
        {/* Brand Values / Story Section */}
        <div className="px-8 md:px-14 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-start">
            
            {/* Value 1 */}
            <div className="flex flex-col gap-6 reveal">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#b0976d]/60 font-medium">01 — Heritage</span>
              <h3 className="font-serif text-3xl text-zinc-900 font-light leading-snug">
                Uncompromising <br className="hidden lg:block" /> Standards
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
                We don&apos;t just list properties; we curate legacies. Every residence in our portfolio
                undergoes a rigorous selection process to ensure it meets our standard of excellence.
              </p>
            </div>

            {/* Value 2 (Center with line) */}
            <div className="flex flex-col gap-6 md:border-x border-zinc-200 md:px-12 reveal delay-100">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#b0976d]/60 font-medium">02 — Discretion</span>
              <h3 className="font-serif text-3xl text-zinc-900 font-light leading-snug">
                Private <br className="hidden lg:block" /> Advisory
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
                Confidentiality is the cornerstone of our service. Our advisors provide 
                tailored strategies for high-net-worth individuals seeking anonymity in their acquisitions.
              </p>
            </div>

            {/* Value 3 */}
            <div className="flex flex-col gap-6 reveal delay-200">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#b0976d]/60 font-medium">03 — Vision</span>
              <h3 className="font-serif text-3xl text-zinc-900 font-light leading-snug">
                Architectural <br className="hidden lg:block" /> Intelligence
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
                Beyond aesthetics, we evaluate the structural and investment potential 
                of every asset, ensuring your home is as sound a decision as it is a beautiful one.
              </p>
            </div>

          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group px-4">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y -ml-4 md:-ml-10">
              {DINING_EXPERIENCES.map((item, index) => {
                const isActive = selectedIndex === index;
                
                return (
                  <div 
                    key={item.id}
                    className="flex-[0_0_75%] md:flex-[0_0_45%] lg:flex-[0_0_35%] pl-4 md:pl-10 min-w-0"
                  >
                    <div className={`relative transition-all duration-1000 ease-[0.16,1,0.3,1] flex flex-col items-center ${isActive ? "scale-100 opacity-100" : "scale-85 opacity-40 blur-[1px] mt-10"}`}>
                      {/* Image — bg-fixed parallax */}
                      <div
                        className={`relative overflow-hidden w-full transition-all duration-1000 shadow-xl bg-cover bg-center bg-fixed ${isActive ? "aspect-[3/4.2]" : "aspect-[3/3.8]"}`}
                        style={{ backgroundImage: `url('${item.image}')` }}
                      />

                      {/* Content (Visible only when active) */}
                      <div className={`mt-8 text-center transition-all duration-700 delay-300 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-[#b0976d] mb-2">{item.location}</p>
                        <h3 className="font-serif text-xl md:text-2xl font-bold tracking-[0.15em] uppercase text-zinc-900 mb-4">
                          {item.title}
                        </h3>
                        <p className="font-serif text-sm text-zinc-600 leading-relaxed italic max-w-sm mx-auto mb-6">
                          {item.description}
                        </p>
                        <a 
                          href="#" 
                          className="inline-block text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-900 border-b border-zinc-900 pb-1 hover:text-[#b0976d] hover:border-[#b0976d] transition-colors"
                        >
                          Discover
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 md:left-10 top-[35%] -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur shadow-md flex items-center justify-center text-zinc-900 hover:bg-white transition-all z-10 opacity-0 group-hover:opacity-100 hidden md:flex"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 md:right-10 top-[35%] -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur shadow-md flex items-center justify-center text-zinc-900 hover:bg-white transition-all z-10 opacity-0 group-hover:opacity-100 hidden md:flex"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Custom Progress / Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {DINING_EXPERIENCES.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
              className={`h-1 transition-all duration-500 rounded-full
                ${selectedIndex === index ? "w-10 bg-[#b0976d]" : "w-4 bg-zinc-200"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
