"use client";

import React from "react";
import propertiesData from "../data/properties.json";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const PropertyCard = ({ property, index }) => {
  const router = useRouter();
  const imageUrl = `https://images.unsplash.com/photo-${
    [
      "1600607687939-ce8a6c25118c",
      "1564013799919-ab600027ffc6",
      "1605276374104-dee2a0ed3cd6",
      "1572120360610-d971b9d7767c",
      "1568605114967-8130f3a36994",
      "1582268611958-ebfd161ef9cf",
      "1600607687939-ce8a6c25118c",
      "1512917774080-9991f1c4c750",
    ][(property.id - 1) % 8]
  }?q=80&w=1200&auto=format&fit=crop`;

  // Format price
  const priceValue =
    property.price_range
      ?.toUpperCase()
      .replace("START", "")
      .replace("MB", "ล้านบาท")
      .trim() || "UPON REQUEST";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: (index % 4) * 0.1 }}
    >
      <button
        onClick={() =>  window.location.href = `/property/${property.id}` }
        // href={`/property/${property.id}`}
        className="group block cursor-pointer"
      >
        {/* Image Frame */}
        <div className="relative aspect-3/4 overflow-hidden mb-6 bg-zinc-100">
          <img
            src={imageUrl}
            alt={property.name}
            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
          />
          {/* Subtle Tag */}
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-900 border border-zinc-200/50">
              {property.category || "Reside"}
            </span>
          </div>
          {/* Bottom Overlay Gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Info */}
        <div className="space-y-3">
          <div className="overflow-hidden">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#b0976d] font-bold mb-1">
              {property.location}
            </p>
            <h3 className="font-serif text-xl md:text-2xl text-zinc-900 tracking-tight leading-tight group-hover:text-[#b0976d] transition-colors duration-300">
              {property.name}
            </h3>
          </div>

          <div className="flex items-center justify-between border-t border-zinc-100 pt-4 mt-2">
            <div className="flex flex-col">
              <span className="text-[8px] uppercase tracking-[0.2em] text-zinc-400 font-bold">
                Investment
              </span>
              <span className="text-sm font-medium text-zinc-900 tracking-wider">
                THB {priceValue}
              </span>
            </div>

            <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:border-zinc-900 transition-all duration-500">
              <svg
                className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </button>
    </motion.div>
  );
};

const Properties = () => {
  // Take a curated selection or all
  const properties = propertiesData.slice(0, 12);

  return (
    <section id="properties" className="bg-[#fcfbf7] pt-24 pb-40">
      <div className="max-w-[1440px] mx-auto px-8 md:px-14">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-8 bg-[#b0976d]/40" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#b0976d] font-bold">
              The Collection
            </span>
            <div className="h-px w-8 bg-[#b0976d]/40" />
          </motion.div>

          <h2 className="font-serif text-5xl md:text-7xl text-zinc-900 tracking-tight mb-8 leading-[1.1]">
            <span className="masked-reveal">
              <span>Curated Prestige</span>
            </span>
            <span className="masked-reveal">
              <span className="font-light italic">Residences</span>
            </span>
          </h2>

          <div className="masked-reveal">
            <p className="max-w-2xl text-zinc-500 text-base md:text-lg leading-relaxed font-light">
              A hand-selected portfolio of Bangkok&apos;s most distinguished
              estates, where architectural mastery meets unparalleled lifestyle.
            </p>
          </div>
        </div>

        {/* Unified Grid (No more category sections) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-20">
          {properties.map((prop, idx) => (
            <PropertyCard key={prop.id} property={prop} index={idx} />
          ))}
        </div>

        {/* View More Call to Action */}
        <div className="mt-24 flex justify-center">
          <button className="px-14 py-5 bg-zinc-900 text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-[#b0976d] transition-all duration-500 shadow-xl shadow-zinc-900/10">
            Explore Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Properties;
