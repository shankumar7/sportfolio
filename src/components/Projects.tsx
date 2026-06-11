"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "ANKURA",
    subtitle: "Smart Seed Quality, Viability & Yield Prediction System",
    technologies: ["React (Vite)", "Python", "FastAPI", "TensorFlow", "Scikit-learn", "OpenCV", "Arduino Uno"],
    description: [
      "Developed a smart agriculture system for seed quality and viability analysis using ML and image processing.",
      "Predicted germination, crop yield, and provided farming recommendations using seed, soil, and seasonal data."
    ],
    bgColor: "bg-[#fde047]", // yellow-300
  },
  {
    title: "FAKE JOB",
    subtitle: "Posting Prediction (Machine Learning)",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "NLTK", "Matplotlib"],
    description: [
      "Developed a machine learning model to identify fake and real job postings using text processing techniques.",
      "Used Random Forest and KNN algorithms, achieving 99.9% accuracy and improving fraud detection."
    ],
    bgColor: "bg-[#bae6fd]", // sky-200
  },
  {
    title: "EBMS",
    subtitle: "Electricity Bill Management System",
    technologies: ["Oracle 19c", "SQL", "PL/SQL"],
    description: [
      "Developed a database-driven system to automate electricity bill generation and payment management.",
      "Implemented normalized schemas, automated bill calculation, and applied core DBMS concepts."
    ],
    bgColor: "bg-[#fecaca]", // red-200
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto border-t-[3px] border-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-20"
      >
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter lowercase mb-4">
          projects.
        </h2>
      </motion.div>

      <div className="flex flex-col gap-12 md:gap-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={`${project.bgColor} rounded-3xl border-[3px] border-black p-6 md:p-10 flex flex-col group relative shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all justify-between gap-8 md:gap-12`}
          >
            <div className="flex flex-row justify-between items-start gap-4">
              <div className="max-w-xl">
                <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-2 md:mb-4 leading-none">{project.title}</h3>
                <h4 className="text-lg md:text-xl font-bold font-serif italic text-black/70">{project.subtitle}</h4>
              </div>
              <div className="p-3 bg-white border-[3px] border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:bg-black group-hover:text-white transition-colors cursor-pointer shrink-0">
                <ArrowUpRight size={24} strokeWidth={3} className="w-6 h-6 md:w-8 md:h-8" />
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-end mt-auto">
              <ul className="list-none space-y-3 text-black/80 font-medium flex-grow max-w-2xl">
                {project.description.map((desc, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="font-black text-xl md:text-2xl mt-0.5 md:mt-1">•</span>
                    <span className="leading-relaxed text-sm md:text-base">{desc}</span>
                  </li>
                ))}
              </ul>

              <div className="w-full lg:w-1/3 border-t-[3px] border-black/20 pt-6 lg:border-t-0 lg:border-l-[3px] lg:pt-0 lg:pl-6">
                <h5 className="font-bold uppercase tracking-widest text-xs md:text-sm mb-3 text-black/70">Technologies</h5>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 text-xs md:text-sm font-bold rounded-full bg-white border-[2px] border-black tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
