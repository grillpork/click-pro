"use client";

import { useRef, useState } from "react";
import Link from "next/link";

const LISTINGS = [
  {
    id: 1,
    name: "Magnolia Waterfront",
    location: "Riverside · Bangkok",
    price: "฿ 55,000,000",
    beds: 4, area: "380 sqm",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "The Athenee Tower",
    location: "Witthayu · Bangkok",
    price: "฿ 38,500,000",
    beds: 3, area: "240 sqm",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Charoenwat Heritage",
    location: "Bang Rak · Bangkok",
    price: "฿ 29,000,000",
    beds: 3, area: "210 sqm",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Lumphini Park View",
    location: "Sarasin · Bangkok",
    price: "฿ 22,800,000",
    beds: 2, area: "165 sqm",
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Silom Grand Residence",
    location: "Silom · Bangkok",
    price: "฿ 17,200,000",
    beds: 2, area: "132 sqm",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=900&auto=format&fit=crop",
  },
];

export default function PropertySlider() {
  const trackRef = useRef(null);
  const [canLeft,  setCanLeft]  = useState(false);
  const [canRight, setCanRight] = useState(true);

  const STEP = 440;

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * STEP, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 10);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  return (
    <section id="showcase" className="py-32 bg-zinc-950 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-8 md:px-14 mb-12">
        <div className="flex items-end justify-between gap-6">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-line" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#b0976d]">Premium Listings</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-white leading-[1.05]">
              Showcase
            </h2>
          </div>

          {/* Arrow controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll(-1)}
              disabled={!canLeft}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300
                ${canLeft
                  ? "border-white/30 text-white hover:bg-white/10"
                  : "border-white/10 text-white/20 cursor-not-allowed"}`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll(1)}
              disabled={!canRight}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300
                ${canRight
                  ? "border-white/30 text-white hover:bg-white/10"
                  : "border-white/10 text-white/20 cursor-not-allowed"}`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Track */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex gap-5 overflow-x-auto no-scrollbar pl-8 md:pl-14 pr-8 pb-4"
      >
        {LISTINGS.map((l, i) => (
          <Link
            key={l.id}
            href={`/property/${l.id}`}
            className="group shrink-0 w-[380px] md:w-[420px] block"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            {/* Image */}
            <div className="relative overflow-hidden mb-5">
              <div
                className="aspect-3/4 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url('${l.image}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
              </div>
              {/* Price badge */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <span className="text-white font-serif text-xl font-light">{l.price}</span>
                <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur border border-white/20
                  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Meta */}
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#b0976d] mb-1.5">{l.location}</p>
            <h3 className="font-serif text-2xl font-light text-white mb-2 group-hover:text-white/70 transition-colors duration-300">
              {l.name}
            </h3>
            <p className="text-xs text-zinc-500">{l.beds} Bedrooms · {l.area}</p>
          </Link>
        ))}

        {/* End spacer */}
        <div className="w-8 md:w-14 shrink-0" />
      </div>
    </section>
  );
}
