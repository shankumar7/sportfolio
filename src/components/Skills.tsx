"use client";

import { motion } from "framer-motion";

const technicalSkills = [
  { category: "Programming Languages", skills: ["Python", "Java(OOP)", "C"] },
  { category: "Web Technologies (Frontend)", skills: ["HTML", "CSS"] },
  { category: "Database", skills: ["Oracle 19c (SQL, PL/SQL)", "DBMS"] },
  { category: "Data Visualization", skills: ["Tableau"] },
  { category: "Computer Science Fundamentals", skills: ["Data Structures and Algorithms (DSA)"] },
  { category: "Operating Systems", skills: ["Ubuntu (Linux)"] },
];

const softSkills = [
  "Effective Communication",
  "Time Management",
  "Problem Solving",
  "Adaptability",
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t-[3px] border-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        <h2 className="text-[10vw] md:text-8xl font-black tracking-tighter lowercase mb-4">
          skills.
        </h2>
      </motion.div>

      <div className="flex flex-col gap-32">
        {/* Technical Skills - Expanded Layout */}
        <div>
          <h3 className="text-4xl md:text-6xl font-black mb-16 uppercase tracking-tight inline-block bg-black text-white px-6 py-2 rotate-1">
            Technical
          </h3>
          <div className="flex flex-col gap-12">
            {technicalSkills.map((tech, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col md:flex-row md:items-center justify-between border-b-[3px] border-black pb-8 gap-8 hover:bg-[#fbbf24] transition-colors p-6 rounded-3xl"
              >
                <h4 className="font-black text-3xl md:text-5xl uppercase w-full md:w-1/2">{tech.category}</h4>
                <div className="flex flex-wrap gap-4 w-full md:w-1/2 md:justify-end">
                  {tech.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-6 py-3 text-lg md:text-xl font-bold rounded-full border-[3px] border-black uppercase tracking-wider bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills - Expanded Layout */}
        <div className="mt-16">
          <h3 className="text-4xl md:text-6xl font-black mb-16 uppercase tracking-tight inline-block bg-black text-white px-6 py-2 -rotate-1">
            Soft Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {softSkills.map((skill, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="px-8 py-12 rounded-[2.5rem] border-[3px] border-black bg-[#fbbf24] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default flex items-center justify-center text-center"
              >
                <span className="text-3xl md:text-4xl font-black uppercase tracking-widest">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


