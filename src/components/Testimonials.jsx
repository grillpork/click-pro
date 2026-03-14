"use client";

import { useState } from "react";

const TESTIMONIALS = [
  {
    quote: "Click Property found us our dream penthouse in Sukhumvit within two weeks. The team's knowledge of Bangkok's luxury market is unmatched — they understood exactly what we were looking for.",
    name: "James & Sophia R.",
    origin: "Hong Kong",
    property: "Sky Penthouse · Sukhumvit",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote: "The entire process — from first viewing to key handover — was seamless. Our advisor was available at every hour and negotiated an exceptional price. We could not be happier.",
    name: "Priya Mehta",
    origin: "Singapore",
    property: "Riverside Villa · Charoennakorn",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote: "As an investor, I rely on accurate data and honest advice. Click Property delivered both. My portfolio has grown 34% in three years thanks to their recommendations.",
    name: "Thomas Müller",
    origin: "Germany",
    property: "Investment Portfolio · Bangkok",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-8 md:px-14">

        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="gold-line" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#b0976d]">Client Stories</span>
            <span className="gold-line" />
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-zinc-900 leading-[1.05]">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial display */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center">

          {/* Quote */}
          <div className="reveal-left">
            {/* Stars */}
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-[#b0976d]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            {/* Quote mark */}
            <svg className="w-12 h-8 text-[#b0976d]/20 mb-6" fill="currentColor" viewBox="0 0 48 32">
              <path d="M0 32V18.667C0 8 6.4 2.133 19.2 0l1.6 4C14.133 5.6 10.667 9.067 10.667 14.667H21.333V32H0zm26.667 0V18.667C26.667 8 33.067 2.133 45.867 0l1.6 4C40.8 5.6 37.333 9.067 37.333 14.667H48V32H26.667z" />
            </svg>

            <p className="font-serif text-2xl md:text-3xl font-light text-zinc-900 leading-[1.5] mb-10">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="flex items-center gap-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-zinc-900">{t.name}</p>
                <p className="text-xs text-[#b0976d] uppercase tracking-widest">{t.origin}</p>
              </div>
              <div className="w-px h-8 bg-zinc-200 mx-2" />
              <p className="text-xs text-zinc-400">{t.property}</p>
            </div>
          </div>

          {/* Navigation cards */}
          <div className="reveal-right flex flex-col gap-4">
            {TESTIMONIALS.map((testimonial, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left p-6 rounded-2xl border transition-all duration-400 ${
                  i === active
                    ? "bg-zinc-900 border-zinc-900"
                    : "bg-white border-zinc-100 hover:border-zinc-300"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <img src={testimonial.avatar} alt={testimonial.name}
                    className="w-8 h-8 rounded-full object-cover" />
                  <div>
                    <p className={`text-sm font-medium ${i === active ? "text-white" : "text-zinc-900"}`}>
                      {testimonial.name}
                    </p>
                    <p className={`text-[10px] uppercase tracking-wider ${i === active ? "text-[#b0976d]" : "text-zinc-400"}`}>
                      {testimonial.origin}
                    </p>
                  </div>
                </div>
                <p className={`text-xs leading-relaxed line-clamp-2 ${
                  i === active ? "text-white/60" : "text-zinc-400"
                }`}>
                  {testimonial.quote}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
