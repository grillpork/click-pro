"use client";

import { useParallax } from "@/hooks/useScrollAnimation";

const STATS = [
  { value: "500+", label: "Properties Sold" },
  { value: "฿ 12B+", label: "Total Transaction Value" },
  { value: "15", label: "Years of Excellence" },
  { value: "98%", label: "Client Satisfaction" },
];

const TEAM = [
  {
    name: "Araya Srisombat",
    role: "Founder & Principal Advisor",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Krit Thanasakul",
    role: "Senior Property Consultant",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Natcha Wongwan",
    role: "Investment Specialist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
  },
];

export default function AboutAgency() {
  const bgRef = useParallax(0.12);

  return (
    <section id="about" className="overflow-hidden">

      {/* ── Brand statement ── */}
      <div className="py-32 bg-white">
        <div className="mx-auto max-w-[1440px] px-8 md:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: text */}
            <div className="reveal-left">
              <div className="flex items-center gap-3 mb-8">
                <span className="gold-line" />
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#b0976d]">Our Story</span>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl font-light text-zinc-900 leading-[1.05] mb-8">
                Curating Lives,<br />
                <em className="not-italic">Not Just Properties</em>
              </h2>
              <p className="text-zinc-500 text-base leading-relaxed mb-6">
                Founded in 2009, Click Property was born from a belief that buying a home should feel as
                exceptional as the home itself. We combine deep local expertise with a global perspective,
                serving discerning clients who demand nothing less than the extraordinary.
              </p>
              <p className="text-zinc-500 text-base leading-relaxed mb-10">
                Our team of dedicated advisors offers personalised guidance through every step —
                from discovery and due diligence to handover and beyond.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white text-[11px]
                  font-medium uppercase tracking-[0.22em] rounded-full hover:bg-black transition-colors duration-300"
              >
                Meet Our Team
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Right: image */}
            <div className="reveal-right">
              <div
                className="relative aspect-4/5 overflow-hidden bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop')" }}
              >
                {/* Floating stat card */}
                <div className="absolute -bottom-6 -left-6 bg-white shadow-2xl p-8">
                  <p className="text-4xl font-serif font-light text-zinc-900 mb-1">15+</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#b0976d]">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div className="bg-zinc-950 py-20">
        <div className="mx-auto max-w-[1440px] px-8 md:px-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {STATS.map((s, i) => (
              <div
                key={i}
                className={`reveal text-center lg:text-left`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className="font-serif text-4xl md:text-5xl font-light text-white mb-2">{s.value}</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#b0976d]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Team ── */}
      <div className="py-32 bg-[#fafaf8]">
        <div className="mx-auto max-w-[1440px] px-8 md:px-14">
          <div className="text-center mb-16 reveal">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="gold-line" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#b0976d]">The Team</span>
              <span className="gold-line" />
            </div>
            <h2 className="font-serif text-5xl font-light text-zinc-900">Your Dedicated Advisors</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TEAM.map((m, i) => (
              <div
                key={i}
                className={`group reveal`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div
                  className="aspect-3/4 overflow-hidden mb-5 bg-cover bg-center bg-fixed"
                  style={{ backgroundImage: `url('${m.image}')` }}
                />
                <h3 className="font-serif text-2xl font-light text-zinc-900 mb-1">{m.name}</h3>
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#b0976d]">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
