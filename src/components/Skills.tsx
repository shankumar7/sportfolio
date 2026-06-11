"use client";

import { motion } from "framer-motion";
import { SiPython, SiC, SiHtml5, SiCss, SiOracle, SiTableau, SiUbuntu } from "react-icons/si";
import { FaJava, FaDatabase, FaCode } from "react-icons/fa";

const technicalSkills = [
  { category: "Programming Languages", skills: [
      { name: "Python", icon: SiPython },
      { name: "Java(OOP)", icon: FaJava },
      { name: "C", icon: SiC }
    ]
  },
  { category: "Web Technologies (Frontend)", skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss }
    ]
  },
  { category: "Database", skills: [
      { name: "Oracle 19c (SQL, PL/SQL)", icon: SiOracle },
      { name: "DBMS", icon: FaDatabase }
    ]
  },
  { category: "Data Visualization", skills: [
      { name: "Tableau", icon: SiTableau }
    ]
  },
  { category: "Computer Science Fundamentals", skills: [
      { name: "Data Structures and Algorithms (DSA)", icon: FaCode }
    ]
  },
  { category: "Operating Systems", skills: [
      { name: "Ubuntu (Linux)", icon: SiUbuntu }
    ]
  },
];

const softSkills = [
  "Effective Communication",
  "Time Management",
  "Problem Solving",
  "Adaptability",
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto border-t-[3px] border-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-16"
      >
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter lowercase mb-4">
          skills.
        </h2>
      </motion.div>

      <div className="flex flex-col gap-16 md:gap-24">
        {/* Technical Skills - Expanded Layout */}
        <div>
          <h3 className="text-2xl md:text-4xl font-black mb-8 md:mb-12 uppercase tracking-tight inline-block bg-black text-white px-4 py-2 rotate-1">
            Technical
          </h3>
          <div className="flex flex-col gap-6 md:gap-8">
            {technicalSkills.map((tech, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col md:flex-row md:items-center justify-between border-b-[3px] border-black pb-6 gap-4 hover:bg-[#fbbf24] transition-colors p-4 md:p-6 rounded-2xl group"
              >
                <h4 className="font-black text-xl md:text-2xl uppercase w-full md:w-1/2">{tech.category}</h4>
                <div className="flex flex-wrap gap-3 w-full md:w-1/2 md:justify-end">
                  {tech.skills.map((skill, i) => {
                    const Icon = skill.icon;
                    return (
                      <span 
                        key={i}
                        className="px-4 py-2 text-sm md:text-base font-bold rounded-full border-[3px] border-black uppercase tracking-wider bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 hover:-translate-y-1 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default"
                      >
                        {Icon && <Icon className="w-5 h-5 shrink-0" />}
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills - Expanded Layout */}
        <div className="mt-8 md:mt-12">
          <h3 className="text-2xl md:text-4xl font-black mb-8 md:mb-12 uppercase tracking-tight inline-block bg-black text-white px-4 py-2 -rotate-1">
            Soft Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="px-6 py-8 md:py-10 rounded-3xl border-[3px] border-black bg-[#fbbf24] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default flex items-center justify-center text-center h-full"
              >
                <span className="text-lg md:text-xl font-black uppercase tracking-widest">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
