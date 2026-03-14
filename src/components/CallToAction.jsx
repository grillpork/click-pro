"use client";

import { useState } from "react";

export default function CallToAction() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden flex items-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-zinc-950/65" />
      <div className="absolute inset-0 hero-vignette" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-8 md:px-14 py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: Text ── */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-8">
              <span className="gold-line" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#b0976d]">Begin Your Journey</span>
            </div>

            <h2 className="font-serif text-5xl md:text-7xl font-light text-white leading-[1.0] mb-8">
              <span className="block masked-reveal"><span>Your Next</span></span>
              <span className="block masked-reveal"><span><em className="not-italic font-semibold">Chapter Awaits</em></span></span>
            </h2>
            
            <div className="masked-reveal">
              <p className="text-white/55 text-base leading-relaxed mb-12 max-w-md">
                Whether you&apos;re searching for your forever home or seeking a strategic investment,
                our advisors are ready to guide you every step of the way.
              </p>
            </div>

            {/* Contact details */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#b0976d] mb-1">Email</p>
                <p className="text-white/70 text-sm">hello@clickproperty.co.th</p>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#b0976d] mb-1">Phone</p>
                <p className="text-white/70 text-sm">+66 2 123 4567</p>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#b0976d] mb-1">Office Hours</p>
                <p className="text-white/70 text-sm">Mon – Sat, 9:00 – 18:00</p>
              </div>
            </div>
          </div>

          {/* ── Right: Contact Form ── */}
          <div className="reveal reveal-scale">
            <div className="bg-[#fafaf8] shadow-2xl shadow-black/40 border border-zinc-200 rounded-2xl p-8 md:p-10">

              {submitted ? (
                <div className="text-center py-12 reveal">
                  <div className="w-16 h-16 rounded-full bg-[#b0976d]/10 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-7 h-7 text-[#b0976d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl text-zinc-900 mb-2">Thank You</h3>
                  <p className="text-zinc-500 text-sm">We&apos;ll be in touch within 24 hours.</p>
                </div>
              ) : (
                <>
                  <div className="reveal delay-300">
                    <h3 className="font-serif text-3xl font-light text-zinc-900 mb-2">Schedule a Viewing</h3>
                    <p className="text-zinc-500 text-sm mb-8 font-light">Fill in your details and our team will contact you shortly.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 reveal delay-400">
                      <div>
                        <label className="block text-[9px] uppercase tracking-[0.25em] text-zinc-400 mb-2 font-bold">
                          First Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John"
                          className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-zinc-900 placeholder-zinc-300 outline-none focus:border-[#b0976d]/50 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] uppercase tracking-[0.25em] text-zinc-400 mb-2 font-bold">
                          Last Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Doe"
                          className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-zinc-900 placeholder-zinc-300 outline-none focus:border-[#b0976d]/50 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="reveal delay-500">
                      <label className="block text-[9px] uppercase tracking-[0.25em] text-zinc-400 mb-2 font-bold">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-zinc-900 placeholder-zinc-300 outline-none focus:border-[#b0976d]/50 transition-all duration-300"
                      />
                    </div>

                    {/* Phone */}
                    <div className="reveal delay-600">
                      <label className="block text-[9px] uppercase tracking-[0.25em] text-zinc-400 mb-2 font-bold">
                        Phone
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+66 XX XXX XXXX"
                        className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-zinc-900 placeholder-zinc-300 outline-none focus:border-[#b0976d]/50 transition-all duration-300"
                      />
                    </div>

                    {/* Message (optional) */}
                    <div className="reveal delay-700">
                      <label className="block text-[9px] uppercase tracking-[0.25em] text-zinc-400 mb-2 font-bold">
                        Message <span className="text-zinc-300">(optional)</span>
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Interested property, preferred location..."
                        className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-zinc-900 placeholder-zinc-300 outline-none resize-none focus:border-[#b0976d]/50 transition-all duration-300"
                      />
                    </div>

                    {/* Submit */}
                    <div className="reveal delay-800">
                      <button
                        type="submit"
                        className="w-full bg-zinc-900 hover:bg-[#b0976d] text-white text-[11px] font-bold uppercase tracking-[0.3em] py-4.5 rounded-xl transition-all duration-500 shadow-xl shadow-zinc-900/10 active:scale-[0.98]"
                      >
                        Send Inquiry
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
