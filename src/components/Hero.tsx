"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, MapPin } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 w-full flex flex-col gap-12 h-full"
      >
        {/* Top: Massive Typography */}
        <div className="w-full border-b-[4px] border-black pb-8">
          <h1 className="text-[12vw] md:text-[13vw] leading-[0.8] font-black tracking-tighter uppercase text-black whitespace-nowrap overflow-hidden text-ellipsis">
            Sushanth<br/>Gorla.
          </h1>
        </div>

        {/* Bottom: Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Box 1: Intro */}
          <div className="minimal-card p-8 md:p-10 flex flex-col justify-between h-full bg-white">
            <h2 className="text-2xl md:text-3xl font-black mb-6 uppercase">
              Creative Developer & Software Engineer
            </h2>
            <p className="text-xl font-medium leading-relaxed font-serif italic text-black/80 border-l-[4px] border-black pl-6">
              2nd-year B. Tech Computer Science student seeking a software engineering internship to apply problem-solving and core CS fundamentals in scalable systems.
            </p>
          </div>

          {/* Box 2: Links & Location */}
          <div className="minimal-card p-8 md:p-10 flex flex-col justify-between h-full bg-white">
            <div className="flex items-center gap-4 text-xl font-bold uppercase tracking-widest mb-12">
              <MapPin size={28} strokeWidth={3} />
              <div>
                <span className="block text-sm text-black/60 mb-1">Location</span>
                Telangana, India
              </div>
            </div>

            <div className="flex gap-4 mt-auto">
              <Link href="https://github.com/sushanthgorla" className="minimal-button flex-1 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white transition-colors" aria-label="GitHub">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path></svg>
              </Link>
              <Link href="https://www.linkedin.com/in/sushanth-gorla-0aa99b327" className="minimal-button flex-1 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white transition-colors" aria-label="LinkedIn">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
            </div>
          </div>

          {/* Box 3: Call to Action Badge */}
          <div className="minimal-card p-8 md:p-10 flex flex-col justify-between h-full bg-[#eab308] relative overflow-hidden group shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black to-transparent mix-blend-overlay"></div>
             
             <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <span className="font-black text-xl uppercase tracking-widest text-black/70 block mb-2">Status</span>
                  <span className="font-black text-4xl md:text-5xl uppercase leading-none break-words">
                    Available<br/>For<br/>Internships.
                  </span>
                </div>
                
                <div className="self-end mt-8 bg-white p-4 border-[3px] border-black rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                  <ArrowDownRight size={40} strokeWidth={3} />
                </div>
             </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

