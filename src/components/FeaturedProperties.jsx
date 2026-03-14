"use client";

import Link from "next/link";

const PROPERTIES = [
  {
    id: 1,
    name: "The Residences at Chidlom",
    location: "Chidlom · Bangkok",
    price: "฿ 18,500,000",
    beds: 3,
    baths: 3,
    area: "185 sqm",
    tag: "New Launch",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Sky Penthouse Sukhumvit",
    location: "Sukhumvit · Bangkok",
    price: "฿ 42,000,000",
    beds: 4,
    baths: 4,
    area: "320 sqm",
    tag: "Exclusive",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Riverside Grand Villa",
    location: "Charoennakorn · Riverside",
    price: "฿ 65,000,000",
    beds: 5,
    baths: 5,
    area: "520 sqm",
    tag: "Featured",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Langsuan Garden Suite",
    location: "Langsuan · Bangkok",
    price: "฿ 12,800,000",
    beds: 2,
    baths: 2,
    area: "120 sqm",
    tag: "Available",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Ekkamai Urban Residence",
    location: "Ekkamai · Bangkok",
    price: "฿ 9,900,000",
    beds: 2,
    baths: 2,
    area: "98 sqm",
    tag: "Available",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Pattanakarn Estate",
    location: "Pattanakarn · Bangkok",
    price: "฿ 28,000,000",
    beds: 4,
    baths: 3,
    area: "260 sqm",
    tag: "Price Reduced",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=900&auto=format&fit=crop",
  },
];

const TAG_COLORS = {
  "New Launch":    "bg-emerald-50 text-emerald-700",
  "Exclusive":     "bg-[#b0976d]/10 text-[#b0976d]",
  "Featured":      "bg-zinc-900 text-white",
  "Available":     "bg-zinc-100 text-zinc-600",
  "Price Reduced": "bg-rose-50 text-rose-600",
};

function PropertyCard({ property, delay = 0 }) {
  return (
    <Link
      href={`/property/${property.id}`}
      className={`group block reveal`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-zinc-100 mb-5">
        <div
          className="aspect-4/5 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('${property.image}')` }}
        >
          <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/10 transition-colors duration-500" />
        </div>
        {/* Tag */}
        <div className="absolute top-4 left-4">
          <span className={`text-[9px] font-semibold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full ${TAG_COLORS[property.tag] || TAG_COLORS["Available"]}`}>
            {property.tag}
          </span>
        </div>
        {/* Quick action */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-4 h-4 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-2.5">
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#b0976d]">{property.location}</p>
        <h3 className="font-serif text-xl font-light text-zinc-900 leading-snug group-hover:text-zinc-600 transition-colors duration-300">
          {property.name}
        </h3>
        <p className="text-base font-light text-zinc-900">{property.price}</p>

        <div className="flex items-center gap-4 pt-1">
          <span className="flex items-center gap-1.5 text-[11px] text-zinc-400">
            <BedIcon /> {property.beds} Beds
          </span>
          <span className="w-px h-3 bg-zinc-200" />
          <span className="flex items-center gap-1.5 text-[11px] text-zinc-400">
            <BathIcon /> {property.baths} Baths
          </span>
          <span className="w-px h-3 bg-zinc-200" />
          <span className="text-[11px] text-zinc-400">{property.area}</span>
        </div>
      </div>
    </Link>
  );
}

export default function FeaturedProperties() {
  return (
    <section id="properties" className="py-32 bg-white">
      <div className="mx-auto max-w-[1440px] px-8 md:px-14">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-line" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#b0976d]">Curated Selection</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-zinc-900 leading-[1.05]">
              Featured
              <br />
              <em className="not-italic font-light">Residences</em>
            </h2>
          </div>
          <div className="reveal delay-200">
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm mb-6">
              Handpicked properties in Bangkok&apos;s most prestigious addresses,
              each offering an unparalleled standard of living.
            </p>
            <Link
              href="/properties"
              className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-900
                border-b border-zinc-300 pb-1.5 hover:border-[#b0976d] hover:text-[#b0976d] transition-colors duration-300"
            >
              View All Properties
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {PROPERTIES.map((p, i) => (
            <PropertyCard key={p.id} property={p} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

const BedIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M3 7v10M3 12h18M21 7v10M7 12V7h10v5" />
  </svg>
);
const BathIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M4 12h16M4 12V6a2 2 0 012-2h3M4 12v4a2 2 0 002 2h12a2 2 0 002-2v-4" />
  </svg>
);
