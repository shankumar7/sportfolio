import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t-[3px] border-black mt-32 mb-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
        <div className="flex flex-col gap-8 max-w-2xl">
          <h2 className="text-7xl md:text-[10vw] leading-[0.8] font-black uppercase tracking-tighter">
            let's<br/>talk.
          </h2>
          <p className="text-2xl font-bold font-serif italic text-black/70 mt-8">
            Always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>

        <div className="flex flex-col gap-6 w-full md:w-auto">
          <Link href="mailto:gorla.sushanth11@gmail.com" className="minimal-card px-10 py-8 bg-[#eab308] group flex justify-between items-center gap-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
            <span className="text-2xl md:text-3xl font-black uppercase">Email Me</span>
            <div className="bg-white p-3 border-[3px] border-black rounded-full group-hover:bg-black group-hover:text-white transition-colors">
              <ArrowUpRight size={32} strokeWidth={3} />
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/sushanth-gorla-0aa99b327" className="minimal-card px-10 py-8 bg-[#fbbf24] group flex justify-between items-center gap-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
            <span className="text-2xl md:text-3xl font-black uppercase">LinkedIn</span>
            <div className="bg-white p-3 border-[3px] border-black rounded-full group-hover:bg-black group-hover:text-white transition-colors">
              <ArrowUpRight size={32} strokeWidth={3} />
            </div>
          </Link>
        </div>
      </div>
      
      <div className="mt-32 pt-12 border-t-[3px] border-black flex flex-col md:flex-row justify-between items-center gap-6 text-lg md:text-xl font-bold uppercase tracking-widest text-black/40">
        <p>© {new Date().getFullYear()} Sushanth Gorla</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}

