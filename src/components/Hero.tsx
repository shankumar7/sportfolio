"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto z-10"
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-sm mb-6"
        >
          <MapPin size={14} className="text-primary-400" />
          <span>Telangana, India</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Hi, I&apos;m <span className="text-gradient">Sushanth Gorla</span>
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          2nd-year B. Tech Computer Science student seeking a software engineering internship to apply problem-solving, algorithmic thinking, and core computer science fundamentals in real-world, scalable systems.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Link href="mailto:gorla.sushanth11@gmail.com" className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary-600 hover:bg-primary-500 text-white transition-colors duration-300">
            <Mail size={18} />
            <span>Email Me</span>
          </Link>
          <Link href="https://github.com/sushanthgorla" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/5 transition-colors duration-300">
            <Github size={18} />
            <span>GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/sushanth-gorla-0aa99b327" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/5 transition-colors duration-300">
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </Link>
        </div>
        
        <div className="flex items-center justify-center gap-6 text-neutral-400 text-sm">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>+91 7396818757</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>gorla.sushanth11@gmail.com</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-neutral-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
