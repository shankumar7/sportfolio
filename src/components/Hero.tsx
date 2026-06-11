"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-16 px-4 md:px-8 max-w-[1400px] mx-auto w-full overflow-hidden">
      {/* Background Dots Pattern for that extra brutalist texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#000000_2px,transparent_2px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none"></div>

      <div className="flex flex-col lg:flex-row w-full gap-16 lg:gap-8 items-center justify-between relative z-10">
        
        {/* Left Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col gap-8 w-full max-w-2xl"
        >
          <div>
            <h1 className="text-7xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter leading-[0.85] text-black mb-6">
              Sushanth<br/>Gorla.
            </h1>
            <div className="flex flex-wrap gap-4 mt-6">
              <span className="bg-[#fbbf24] text-black font-black uppercase tracking-widest px-5 py-2.5 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-sm md:text-base -rotate-1 hover:rotate-0 transition-transform">
                Software Engineer
              </span>
              <span className="bg-white text-black font-black uppercase tracking-widest px-5 py-2.5 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-sm md:text-base rotate-1 hover:rotate-0 transition-transform">
                Creative Developer
              </span>
            </div>
          </div>

          <p className="text-xl md:text-2xl font-bold font-serif italic text-black/80 leading-relaxed border-l-[6px] border-black pl-6 my-4">
            2nd-year B. Tech Computer Science student seeking a software engineering internship to apply problem-solving and core CS fundamentals in scalable systems.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-6 mt-2">
             <Link href="#projects" className="bg-black text-white font-black uppercase px-8 py-4 border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(234,179,8,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(234,179,8,1)] active:translate-y-2 active:shadow-none transition-all flex items-center gap-3 text-lg">
               View Projects <ArrowDownRight size={24} strokeWidth={3} />
             </Link>
             
             <div className="flex gap-4">
               <Link href="https://github.com/sushanthgorla" aria-label="GitHub" className="bg-white text-black font-black uppercase p-4 border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center">
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path></svg>
               </Link>
               <Link href="https://www.linkedin.com/in/sushanth-gorla-0aa99b327" aria-label="LinkedIn" className="bg-[#0077b5] text-white font-black uppercase p-4 border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center">
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
               </Link>
             </div>
          </div>
        </motion.div>

        {/* Right Side: Image and Status */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex-1 w-full flex justify-center lg:justify-end relative mt-12 lg:mt-0"
        >
           {/* Polaroid Style Image Card */}
           <div className="relative w-full max-w-[360px] md:max-w-[450px] aspect-[4/5] border-[4px] border-black bg-white p-4 md:p-6 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] rotate-3 hover:rotate-0 transition-transform duration-500 group z-10">
              <div className="relative w-full h-full border-[3px] border-black overflow-hidden bg-[#fbbf24]">
                 <Image 
                   src="/profile-image.jpg" 
                   alt="Sushanth Gorla" 
                   fill 
                   className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                   priority 
                 />
              </div>
              
              {/* Floating Status Badge */}
              <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-16 bg-[#eab308] border-[4px] border-black p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-[-8deg] group-hover:rotate-[-3deg] transition-all duration-300 z-20 flex flex-col">
                <span className="font-black text-sm uppercase tracking-widest border-b-[3px] border-black pb-1 mb-2">Status</span>
                <span className="font-black text-2xl md:text-3xl uppercase leading-[1.1]">Available For<br/>Internships.</span>
              </div>

              {/* Decorative Element */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-black rounded-full shadow-[4px_4px_0px_0px_rgba(234,179,8,1)] border-[3px] border-white z-20"></div>
           </div>
        </motion.div>

      </div>
    </section>
  );
}
