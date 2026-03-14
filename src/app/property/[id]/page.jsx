"use client";

import { use } from "react";
import Navbar from "@/components/Navbar";
import PropertyNavbar from "@/components/PropertyNavbar";
import Footer from "@/components/Footer";
import propertiesData from "@/data/properties.json";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";

export default function PropertyDetail({ params }) {
  const { id } = use(params);
  const property = propertiesData.find((p) => p.id === parseInt(id));
  const containerRef = useRef(null);
  
  // Activate scroll reveal animations
  useScrollReveal(property?.id);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
        <h1 className="text-xl font-bold uppercase tracking-[0.4em] text-[#b0976d]">Project Not Found</h1>
      </div>
    );
  }

  // Cinematic Visual Assets
  const visualAssets = {
    hero: "https://www.shera.com/stocks/blog/o0x0/so/lc/solcrf5qvej/Content-Size2.jpg",
    interlude:
      "https://www.mymodernhome.com/media/images/My_Modern_Home_Plan.2e16d0ba.fill-1920x1080.format-webp_TvTzDWv.webp",
    features:
      "https://1937169732.rsc.cdn77.org/temp/1667404783_0a45352a7fa57574bb83f13dd92db3c0.jpg",
    videoBg:
      "/home.mp4", // Minimal luxury pool loop
  };

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-[#fafaf8] text-zinc-900 font-sans overflow-x-hidden"
    >
      <PropertyNavbar />

      {/* ── Scene 1: The Overture (Hero) ── */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-white/10 z-10" />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover brightness-95"
          >
            <source src={visualAssets.videoBg} type="video/mp4" />
          </video>
        </motion.div>

        <div className="relative z-20 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-[#b0976d] mb-6 block">
              {property.category} • {property.location}
            </span>
            <h1 className="text-7xl md:text-[10rem] font-serif leading-none tracking-tight mb-8 text-white drop-shadow-2xl">
              {property.name.split(" ")[0]}
              <span className="block text-4xl md:text-6xl italic font-light opacity-80 mt-4 tracking-normal">
                {property.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>
            <div className="flex flex-col items-center gap-6 mt-12">
              <div className="w-px h-24 bg-linear-to-b from-[#b0976d] to-transparent" />
              <span className="text-[8px] uppercase tracking-[0.5em] text-[#b0976d] font-medium">
                Scroll to Experience
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Scene 2: The Narrative (Visual Focus) ── */}
      <section className="py-32 md:py-48 px-6 md:px-20 max-w-8xl mx-auto">
        <div className="lg:col-span-12 reveal">
          <div className="relative aspect-video overflow-hidden rounded-xl group shadow-2xl border border-zinc-100">
            <img
              src={visualAssets.hero}
              alt="Luxury View"
              className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
          </div>
        </div>
        <div className="lg:col-span-8 lg:col-start-3 reveal text-center mt-12">
          <span className="text-[#b0976d] text-[9px] font-bold uppercase tracking-[0.4em] mb-6 block">
            Perspective
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight mb-8 text-zinc-800">
            Minimalist Grandeur
          </h2>
          <p className="text-sm md:text-base font-light text-zinc-500 leading-relaxed max-w-2xl mx-auto italic">
            "{property.highlight.split(".")[0]}."
          </p>
        </div>
      </section>

      {/* ── Scene 3: Atmospheric Immersion (Video Focus) ── */}
      <section className="reveal py-20 px-6">
        <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden rounded-2xl group">
          <img
            src={visualAssets.interlude}
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[10s] brightness-[0.8]"
            alt="Skyline"
          />
          <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-2xl px-6">
              <span className="text-[9px] uppercase tracking-[0.6em] text-white font-bold mb-6 block opacity-80">
                Cinematic Experience
              </span>
              <h3 className="text-4xl md:text-7xl font-serif italic font-light text-white mb-6 leading-tight drop-shadow-lg">
                Captured in Time
              </h3>
              <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center mx-auto hover:scale-110 transition-transform cursor-pointer bg-white/10 backdrop-blur-md">
                <svg
                  className="w-6 h-6 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Scene 4: The Elements (Visual Grid) ── */}
      <section className="py-32 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="reveal text-center mb-24">
            <span className="text-[#b0976d] text-[10px] uppercase tracking-[1em] mb-4 block">
              Curated
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-zinc-900">
              Amenities & Detail
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {property.features.slice(0, 4).map((feature, idx) => (
              <div key={idx} className="reveal group">
                <div className="aspect-square bg-zinc-50 mb-6 overflow-hidden relative rounded-lg">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      [
                        "1613490493576-7fde63acd811",
                        "1500530855697-b586d89ba3ee",
                        "1600585154340-be6161a56a0c",
                        "1512917774080-9991f1c4c750",
                      ][idx % 4]
                    }?auto=format&fit=crop&q=80&w=800`}
                    className="w-full h-full object-cover grayscale-50 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    alt={feature}
                  />
                </div>
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#b0976d] mb-2">
                  Benefit {idx + 1}
                </h4>
                <p className="text-sm font-light text-zinc-600 line-clamp-2">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scene 5: The Collection (Gallery) ── */}
      <section className="py-32 md:py-48 px-6 md:px-20">
        <div className="max-w-8xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 reveal">
            <div>
              <span className="text-[#b0976d] text-[9px] uppercase tracking-[0.5em] mb-4 block">
                Gallery
              </span>
              <h2 className="text-5xl md:text-7xl font-serif font-light text-zinc-900">
                Private Spaces
              </h2>
            </div>
            <p className="text-zinc-400 text-[9px] uppercase tracking-[0.3em] font-light mt-4">
              A visual journey through excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="reveal aspect-4/5 overflow-hidden rounded-xl group shadow-xl">
              <img
                src="https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_1200/v1586776947/blog/article/5e941bd384aa70002f90b96e/5e944b7384aa70002f90bfa8.jpg"
                className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-105"
                alt="Main"
              />
            </div>
            <div className="reveal aspect-4/5 overflow-hidden rounded-xl group shadow-xl">
              <img
                src="https://cdn.home-designing.com/wp-content/uploads/2022/03/modern-sofa.jpg"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]"
                alt="Sub 1"
              />
            </div>
            <div className="reveal aspect-4/5 overflow-hidden rounded-xl group shadow-xl">
              <img
                src="https://media.architecturaldigest.com/photos/67bcc8747dfc89b75d51a6ab/master/w_1024%2Cc_limit/Kishani%2520Perera_Point%2520Dume%2520Project_Photographer%2520Anthony%2520Barcelo.jpg"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]"
                alt="Sub 2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Scene 6: The Guidance (Final Action) ── */}
      <section className="py-48 px-6 md:px-20 text-center relative bg-zinc-50">
        <div className="reveal max-w-4xl mx-auto">
          <span className="text-[#b0976d] text-[10px] uppercase tracking-[0.8em] mb-10 block">
            Conclude
          </span>
          <h2 className="text-4xl md:text-7xl font-serif font-light mb-16 leading-tight text-zinc-800">
            Your Future <br /> Awaits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <button className="bg-[#b0976d] hover:bg-[#9a845b] text-white py-6 rounded-full text-[10px] font-bold uppercase tracking-[0.4em] transition-all transform hover:-translate-y-1 shadow-lg">
              Request Brochure
            </button>
            <button className="border border-zinc-200 hover:border-[#b0976d] py-6 rounded-full text-[10px] font-bold uppercase tracking-[0.4em] transition-all transform hover:-translate-y-1 bg-white text-zinc-600">
              Book a Visit
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
