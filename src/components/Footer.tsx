import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto border-t-[3px] border-black mt-16 md:mt-24 mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 md:gap-16">
        <div className="flex flex-col gap-6 md:gap-8 max-w-xl">
          <h2 className="text-5xl md:text-7xl leading-[0.85] font-black uppercase tracking-tighter">
            let's<br/>talk.
          </h2>
          <p className="text-base md:text-lg font-bold font-serif italic text-black/70 mt-4 md:mt-6">
            Always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:gap-6 w-full md:w-auto">
          <Link href="mailto:gorla.sushanth11@gmail.com" className="minimal-card px-6 py-5 md:px-8 md:py-6 bg-[#eab308] group flex justify-between items-center gap-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
            <span className="text-lg md:text-xl font-black uppercase">Email Me</span>
            <div className="bg-white p-2 md:p-3 border-[3px] border-black rounded-full group-hover:bg-black group-hover:text-white transition-colors">
              <ArrowUpRight size={24} strokeWidth={2.5} />
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/sushanth-gorla-0aa99b327" className="minimal-card px-6 py-5 md:px-8 md:py-6 bg-[#fbbf24] group flex justify-between items-center gap-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
            <span className="text-lg md:text-xl font-black uppercase">LinkedIn</span>
            <div className="bg-white p-2 md:p-3 border-[3px] border-black rounded-full group-hover:bg-black group-hover:text-white transition-colors">
              <ArrowUpRight size={24} strokeWidth={2.5} />
            </div>
          </Link>
        </div>
      </div>
      
      <div className="mt-16 md:mt-24 pt-8 md:pt-10 border-t-[3px] border-black flex flex-col md:flex-row justify-between items-center gap-4 text-sm md:text-base font-bold uppercase tracking-widest text-black/50">
        <p>© {new Date().getFullYear()} Sushanth Gorla</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}
