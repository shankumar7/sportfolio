"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-16 px-4 md:px-8 max-w-[1400px] mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 w-full h-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch h-full">
          
          {/* Main Title Box (Spans 8 columns) */}
          <div className="md:col-span-8 lg:col-span-8 minimal-card bg-[#fbbf24] p-8 md:p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden group min-h-[40vh] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
             {/* Decorative Background Element */}
             <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/20 border-[4px] border-black rounded-full group-hover:scale-150 transition-transform duration-700 ease-in-out pointer-events-none"></div>
             
             <div className="relative z-10 flex flex-col gap-6">
                <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] text-black">
                  Sushanth<br/>Gorla.
                </h1>
                <div className="flex flex-wrap gap-4 mt-4">
                   <h2 className="text-xl md:text-3xl font-black uppercase bg-white inline-block w-max px-6 py-3 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2 group-hover:rotate-0 transition-transform duration-300">
                      Creative Developer
                   </h2>
                   <h2 className="text-xl md:text-3xl font-black uppercase bg-black text-white inline-block w-max px-6 py-3 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-1 group-hover:rotate-0 transition-transform duration-300">
                      Software Engineer
                   </h2>
                </div>
             </div>
          </div>

          {/* Profile Image (Spans 4 columns) */}
          <div className="md:col-span-4 lg:col-span-4 minimal-card overflow-hidden relative min-h-[350px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group">
             <Image 
                src="/profile-image.jpg" 
                alt="Sushanth Gorla" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                priority 
             />
             {/* Overlay Border to ensure brutalist feel inside the card */}
             <div className="absolute inset-0 border-[3px] border-black pointer-events-none z-10"></div>
          </div>

          {/* Blurb (Spans 5 columns) */}
          <div className="md:col-span-12 lg:col-span-5 minimal-card bg-white p-8 lg:p-10 flex flex-col justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full mb-6">
              <span className="font-black text-2xl leading-none font-serif">"</span>
            </div>
            <p className="text-xl lg:text-2xl font-bold font-serif italic text-black/80 leading-relaxed border-l-[4px] border-[#fbbf24] pl-6">
              2nd-year B. Tech Computer Science student seeking a software engineering internship to apply problem-solving and core CS fundamentals in scalable systems.
            </p>
          </div>

          {/* Status Badge (Spans 4 columns) */}
          <div className="md:col-span-6 lg:col-span-4 minimal-card bg-[#eab308] p-8 flex flex-col justify-between items-start group shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer overflow-hidden relative">
            <div className="absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
            
            <span className="font-black text-base uppercase tracking-widest mb-4 border-[2px] border-black px-3 py-1 rounded-full bg-white relative z-10 group-hover:border-white group-hover:bg-transparent group-hover:text-white transition-colors duration-300">
              Current Status
            </span>
            
            <div className="relative z-10 w-full flex justify-between items-end">
              <span className="font-black text-4xl uppercase leading-none text-black group-hover:text-white transition-colors duration-300">
                Available<br/>For<br/>Internships
              </span>
              <div className="bg-white p-3 border-[3px] border-black rounded-full group-hover:bg-[#fbbf24] transition-colors">
                <ArrowUpRight size={28} strokeWidth={3} className="text-black" />
              </div>
            </div>
          </div>

          {/* Location & Socials (Spans 3 columns) */}
          <div className="md:col-span-6 lg:col-span-3 flex flex-col gap-6 lg:gap-8">
            <div className="minimal-card bg-white p-6 flex-1 flex flex-col justify-center items-center text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-[#fbbf24] transition-colors duration-300">
               <div className="bg-black text-white p-4 rounded-full border-[3px] border-black mb-4">
                 <MapPin size={28} strokeWidth={3} />
               </div>
               <span className="font-black uppercase tracking-widest text-lg">Telangana, India</span>
            </div>
            <div className="flex gap-6 h-20">
               <Link href="https://github.com/sushanthgorla" className="minimal-button bg-white flex-1 h-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-2 active:shadow-none transition-all" aria-label="GitHub">
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path></svg>
               </Link>
               <Link href="https://www.linkedin.com/in/sushanth-gorla-0aa99b327" className="minimal-button bg-white flex-1 h-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-2 active:shadow-none transition-all" aria-label="LinkedIn">
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
               </Link>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
