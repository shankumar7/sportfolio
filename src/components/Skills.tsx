"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Database, Layout, LineChart, Terminal, MessageSquare } from "lucide-react";

const technicalSkills = [
  {
    category: "Programming Languages",
    icon: <Code2 size={20} />,
    skills: ["Python", "Java(OOP)", "C"],
  },
  {
    category: "Web Technologies (Frontend)",
    icon: <Layout size={20} />,
    skills: ["HTML", "CSS"],
  },
  {
    category: "Database",
    icon: <Database size={20} />,
    skills: ["Oracle 19c (SQL, PL/SQL)", "DBMS"],
  },
  {
    category: "Data Visualization",
    icon: <LineChart size={20} />,
    skills: ["Tableau"],
  },
  {
    category: "Computer Science Fundamentals",
    icon: <Cpu size={20} />,
    skills: ["Data Structures and Algorithms (DSA)"],
  },
  {
    category: "Operating Systems",
    icon: <Terminal size={20} />,
    skills: ["Ubuntu (Linux)"],
  },
];

const softSkills = [
  "Effective Communication",
  "Time Management",
  "Problem Solving",
  "Adaptability",
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center md:text-left"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center md:justify-start gap-3">
          <Cpu className="text-secondary-500" size={32} />
          Technical & Soft Skills
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full mx-auto md:mx-0"></div>
      </motion.div>

      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-white/90">Technical Skills</h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {technicalSkills.map((tech, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="glass-card rounded-2xl p-6 transition-all hover:bg-white/10"
              >
                <div className="flex items-center gap-3 mb-4 text-primary-400">
                  <div className="p-2 rounded-lg bg-primary-500/10">
                    {tech.icon}
                  </div>
                  <h4 className="font-semibold text-white">{tech.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tech.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-neutral-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-white/90">Soft Skills</h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            {softSkills.map((skill, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="flex items-center gap-2 px-5 py-3 rounded-full glass-card hover:bg-secondary-500/20 hover:border-secondary-500/50 transition-colors cursor-default"
              >
                <MessageSquare size={16} className="text-secondary-400" />
                <span className="font-medium text-neutral-200">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
