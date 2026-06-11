"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[120vh] flex flex-col justify-between pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 w-full flex flex-col h-full"
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 flex-grow">
          <h1 className="text-[15vw] leading-[0.75] font-black tracking-tighter lowercase mb-12 lg:mb-0 mt-auto drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            sushanth<br/>gorla.
          </h1>
          
          <div className="lg:max-w-md text-left self-start lg:self-end mt-12 lg:mt-0 lg:ml-12">
            <p className="text-2xl md:text-3xl font-medium mb-8 leading-snug font-serif italic text-black/80">
              2nd-year B. Tech Computer Science student seeking a software engineering internship to apply problem-solving and core CS fundamentals in scalable systems.
            </p>
            <div className="flex gap-6">
              <Link href="https://github.com/sushanthgorla" className="minimal-button w-16 h-16 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" aria-label="GitHub">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path></svg>
              </Link>
              <Link href="https://www.linkedin.com/in/sushanth-gorla-0aa99b327" className="minimal-button w-16 h-16 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" aria-label="LinkedIn">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
              <Link href="mailto:gorla.sushanth11@gmail.com" className="minimal-button w-16 h-16 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" aria-label="Email">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center border-t-[3px] border-black pt-16 mt-auto">
          <div className="text-xl md:text-2xl font-bold uppercase tracking-widest leading-relaxed">
            Telangana, India
            <br />
            +91 7396818757
          </div>
          
          <div className="lg:col-span-3 relative h-[40vh] w-full rounded-[3rem] bg-[#eab308] border-[3px] border-black overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center group">
             {/* Profile Image Section */}
             <div className="w-full md:w-1/3 h-full border-b-[3px] md:border-b-0 md:border-r-[3px] border-black overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
               <img src="/profile.jpg" alt="Sushanth Gorla" className="w-full h-full object-cover object-center" />
               <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
             </div>
             
             {/* Text Section */}
             <div className="w-full md:w-2/3 h-full flex items-center justify-center relative">
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black to-transparent mix-blend-overlay"></div>
               <p className="text-5xl md:text-8xl font-black p-8 text-center text-black/80 tracking-tighter lowercase mix-blend-overlay drop-shadow-md">
                  creative developer.
               </p>
               <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 minimal-button w-16 h-16 md:w-20 md:h-20 bg-white rotate-45 border-[3px]">
                 <ArrowDownRight size={40} strokeWidth={3} className="w-8 h-8 md:w-10 md:h-10" />
               </div>
             </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

