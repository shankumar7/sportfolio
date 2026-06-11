"use client";

import { motion } from "framer-motion";

const education = [
  {
    period: "2023 - 2027",
    degree: "B. Tech in Computer Science & Engineering",
    institution: "CMR Institute of Technology",
    score: "CGPA 8.3",
  },
  {
    period: "2021 - 2023",
    degree: "Intermediate",
    institution: "Narayana Junior College",
    score: "96.4%",
  },
  {
    period: "2020 - 2021",
    degree: "10th Grade",
    institution: "Z.P.H.S (Boys)",
    score: "CGPA 10.0",
  }
];

export default function Education() {
  return (
    <section id="education" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t-[3px] border-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-32"
      >
        <h2 className="text-[10vw] md:text-8xl font-black tracking-tighter lowercase mb-4">
          education.
        </h2>
      </motion.div>

      <div className="relative border-l-[6px] border-black ml-4 md:ml-12 pl-8 md:pl-20 py-12 flex flex-col gap-32">
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[45px] md:-left-[93px] top-0 w-8 h-8 rounded-full border-[4px] border-black bg-[#eab308]"></div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-6">
                <span className="px-6 py-2 bg-[#eab308] font-black border-[3px] border-black rounded-full text-xl md:text-2xl uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {item.period}
                </span>
                <span className="font-black text-3xl md:text-5xl uppercase text-black/20">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none max-w-4xl">
                {item.degree}
              </h3>
              
              <div className="flex flex-col md:flex-row md:items-center gap-4 text-xl md:text-2xl font-bold font-serif italic text-black/70">
                <span>{item.institution}</span>
                <span className="hidden md:inline">•</span>
                <span className="bg-black text-white px-4 py-1 not-italic font-sans text-lg uppercase tracking-widest">
                  {item.score}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

