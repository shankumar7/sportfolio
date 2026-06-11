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
    <section id="projects" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t-[3px] border-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        <h2 className="text-[10vw] md:text-8xl font-black tracking-tighter lowercase mb-4">
          projects.
        </h2>
      </motion.div>

      <div className="flex flex-col gap-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={`${project.bgColor} rounded-[3rem] border-[3px] border-black p-10 md:p-20 flex flex-col group relative overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-4 hover:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] transition-all min-h-[60vh] justify-between`}
          >
            <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
              <div className="max-w-2xl">
                <h3 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-4 leading-none">{project.title}</h3>
                <h4 className="text-2xl md:text-4xl font-bold font-serif italic text-black/70">{project.subtitle}</h4>
              </div>
              <div className="p-4 md:p-6 bg-white border-[3px] border-black rounded-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:bg-black group-hover:text-white transition-colors cursor-pointer shrink-0">
                <ArrowUpRight size={48} strokeWidth={3} className="w-8 h-8 md:w-12 md:h-12" />
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-16 items-end mt-auto">
              <ul className="list-none space-y-4 text-black/80 font-medium flex-grow max-w-3xl">
                {project.description.map((desc, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="font-black text-2xl mt-1">•</span>
                    <span className="leading-relaxed text-xl md:text-2xl">{desc}</span>
                  </li>
                ))}
              </ul>

              <div className="w-full lg:w-1/3 border-t-4 border-black/20 pt-8 lg:border-t-0 lg:border-l-4 lg:pt-0 lg:pl-8">
                <h5 className="font-bold uppercase tracking-widest text-sm mb-4">Technologies</h5>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 text-base font-bold rounded-full bg-white border-[3px] border-black tracking-wide"
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


