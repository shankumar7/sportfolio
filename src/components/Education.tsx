"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    institution: "CMR College of Engineering and Technology",
    location: "Kandlakoya, Secunderabad, Telangana",
    degree: "B. Tech Computer Science Engineering - CSE (Pursuing)",
    score: "CGPA: 9.23",
    period: "2024-2028",
  },
  {
    institution: "Krishnaveni Junior College",
    location: "Bhadradri Kothagudem, Telangana",
    degree: "Intermediate (MPC)",
    score: "Percentage: 97.9%",
    period: "2022-2024",
  },
  {
    institution: "Sri Chaitanya Techno School",
    location: "Bhadradri Kothagudem, Telangana",
    degree: "High School",
    score: "GPA: 9.8",
    period: "2021-2022",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center md:text-left"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center md:justify-start gap-3">
          <GraduationCap className="text-primary-500" size={32} />
          Education
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto md:mx-0"></div>
      </motion.div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-neutral-900 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow flex-shrink-0 z-10 text-primary-400">
              <GraduationCap size={18} />
            </div>
            
            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-primary-500/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                <h3 className="font-bold text-lg text-white">{item.institution}</h3>
                <span className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-primary-500/10 text-primary-400 w-fit">
                  <Calendar size={12} />
                  {item.period}
                </span>
              </div>
              
              <h4 className="text-neutral-300 font-medium mb-3">{item.degree}</h4>
              
              <div className="flex flex-col gap-2 text-sm text-neutral-400">
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center gap-2 font-semibold text-secondary-400">
                  <span>{item.score}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
