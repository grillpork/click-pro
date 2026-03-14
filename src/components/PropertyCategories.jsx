"use client";

const CATEGORIES = [
  {
    label: "Villas",
    count: "24 Properties",
    description: "Private sanctuaries with expansive gardens and bespoke architecture",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop",
    size: "lg",
  },
  {
    label: "Condominiums",
    count: "86 Properties",
    description: "Contemporary residences in prime city locations",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
    size: "sm",
  },
  {
    label: "Penthouses",
    count: "18 Properties",
    description: "Sky-high living with panoramic city and river views",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    size: "sm",
  },
  {
    label: "Investment",
    count: "42 Properties",
    description: "High-yield opportunities in Bangkok's growing market",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=800&auto=format&fit=crop",
    size: "lg",
  },
];

function CategoryCard({ cat, reverse = false }) {
  const isLg = cat.size === "lg";

  return (
    <a
      href="#properties"
      className={`group relative overflow-hidden cursor-pointer block ${
        isLg ? "row-span-2" : ""
      }`}
    >
      {/* Image — bg-fixed parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('${cat.image}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />
        <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/20 transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="relative h-full min-h-[260px] p-8 flex flex-col justify-end">
        <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-400 ease-out">
          <p className="text-[9px] uppercase tracking-[0.3em] text-[#b0976d] mb-2">{cat.count}</p>
          <h3 className="font-serif text-3xl md:text-4xl font-light text-white mb-3">{cat.label}</h3>
          <p className="text-sm text-white/0 group-hover:text-white/70 transition-all duration-400 max-w-[200px] leading-relaxed">
            {cat.description}
          </p>
        </div>

        {/* Arrow */}
        <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20
          flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400
          group-hover:bg-white/10">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  );
}

export default function PropertyCategories() {
  return (
    <section id="categories" className="py-32 bg-[#fafaf8]">
      <div className="mx-auto max-w-[1440px] px-8 md:px-14">

        {/* Header */}
        <div className="flex items-end justify-between gap-8 mb-16">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-line" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#b0976d]">Explore</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-zinc-900 leading-[1.05]">
              Property
              <br />
              Collections
            </h2>
          </div>
          <p className="hidden md:block reveal delay-200 text-zinc-500 text-sm leading-relaxed max-w-xs">
            From intimate urban residences to expansive countryside estates — find the collection that speaks to you.
          </p>
        </div>

        {/* Grid: 2 cols, first col has large + small stacked, second has small + large */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 reveal-scale delay-200">
          {/* Col 1: tall + short */}
          <div className="grid grid-rows-[2fr_1fr] gap-4 min-h-[680px]">
            <CategoryCard cat={CATEGORIES[0]} />
            <CategoryCard cat={CATEGORIES[1]} />
          </div>
          {/* Col 2: short + tall */}
          <div className="grid grid-rows-[1fr_2fr] gap-4 min-h-[680px]">
            <CategoryCard cat={CATEGORIES[2]} />
            <CategoryCard cat={CATEGORIES[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
