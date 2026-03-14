"use client";

const PANELS = [
  {
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2000&auto=format&fit=crop",
    label: "Ocean Serenity",
    title: "Waking Up\nto the Sea",
    body: "Imagine mornings where the horizon is yours alone — azure waters stretching endlessly beyond your private terrace. Our riverside and ocean-facing residences deliver that vision as your daily reality.",
    align: "right",
  },
  {
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2000&auto=format&fit=crop",
    label: "City Skyline",
    title: "Above the\nSkyline",
    body: "From Bangkok's most elevated addresses, the city becomes an art installation. Watch the lights of the metropolis come alive each evening from the vantage point of your penthouse residence.",
    align: "left",
  },
  {
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2000&auto=format&fit=crop",
    label: "Premium Lifestyle",
    title: "Every Detail,\nConsidered",
    body: "From bespoke interiors crafted by award-winning designers to private concierge services available around the clock — life here is defined by quiet, effortless luxury.",
    align: "right",
  },
];

function LifestylePanel({ panel, index }) {
  const isLeft = panel.align === "left";

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>

      {/* Image side — bg-fixed parallax */}
      <div
        className={`relative min-h-[50vh] lg:min-h-auto bg-cover bg-center ${isLeft ? "lg:order-2" : "lg:order-1"}`}
        style={{ backgroundImage: `url('${panel.image}')` }}
      >
        <div className="absolute inset-0 bg-zinc-900/10" />
      </div>

      {/* Text side */}
      <div className={`flex items-center bg-white ${isLeft ? "lg:order-1" : "lg:order-2"}`}>
        <div className={`max-w-lg py-20 px-10 md:px-16 reveal ${isLeft ? "reveal-right" : "reveal-left"}`}>
          <div className="flex items-center gap-3 mb-8">
            <span className="gold-line" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#b0976d]">{panel.label}</span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-zinc-900 leading-[1.05] mb-8 whitespace-pre-line">
            {panel.title.split('\n').map((line, i) => (
              <span key={i} className="block masked-reveal"><span>{line}</span></span>
            ))}
          </h2>
          <div className="masked-reveal">
            <p className="text-zinc-500 text-base leading-relaxed mb-10">
              {panel.body}
            </p>
          </div>
          <a
            href="#properties"
            className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-900 border-b border-zinc-300 pb-1.5 hover:border-[#b0976d] hover:text-[#b0976d] transition-colors duration-300"
          >
            Explore Properties
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function LuxuryLifestyle() {
  return (
    <section id="lifestyle" className="overflow-hidden">
      {/* Intro */}
      <div className="py-24 bg-[#fafaf8] text-center">
        <div className="mx-auto max-w-2xl px-8 reveal">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="gold-line" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#b0976d]">The Experience</span>
            <span className="gold-line" />
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-zinc-900 leading-[1.05] mb-6">
            <span className="masked-reveal"><span>A Life Unlike</span></span>
            <span className="masked-reveal"><span>Any Other</span></span>
          </h2>
          <div className="masked-reveal">
            <p className="text-zinc-500 text-base leading-relaxed">
              Each property in our portfolio is more than an address — it is a gateway to an extraordinary way of living.
            </p>
          </div>
        </div>
      </div>

      {/* Panels */}
      {PANELS.map((panel, i) => (
        <LifestylePanel key={i} panel={panel} index={i} />
      ))}
    </section>
  );
}
