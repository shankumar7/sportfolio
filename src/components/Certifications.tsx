"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const certifications = [
  {
    title: "SalesForce Certified Agentforce Specialist",
    credential: "ID: 7317407",
    link: null
  },
  {
    title: "Cisco Networking Academy",
    description: "Introduction to Cybersecurity",
    link: "/certificates/I2CSUpdate20260514-31-v7rbjt.pdf"
  },
  {
    title: "Cisco Networking Academy",
    description: "Introduction to Modern AI",
    link: "/certificates/IntrotoModernAIUpdate20260117-32-p418ip.pdf"
  },
  {
    title: "Cisco Networking Academy",
    description: "Networking Basics",
    link: "/certificates/NetworkingBasicsUpdate20260106-29-krel8r.pdf"
  },
  {
    title: "Cisco Networking Academy",
    description: "Operating Systems Basics",
    link: "/certificates/OperatingSystemsBasicsUpdate20260514-31-vnl132.pdf"
  },
  {
    title: "Coursera",
    description: "Business Analysis & Process Management",
    link: "/certificates/coursera.pdf"
  },
  {
    title: "Upskill from Cambridge",
    description: "English Proficiency (B1 – CEFR)",
    link: "/certificates/CMRCET_J4C0J5G3 (1).pdf"
  }
];

const participation = [
  {
    text: "Bud to Business (B2B) Inter Project Competition",
    desc: "Presented project 'Ankura' in Social Innovation in Practice at CMR College of Engineering.",
    link: "/certificates/24H51A05BH (1).pdf"
  },
  {
    text: "YANTRA YUGAM 1.0 - 24 Hours National Level Hackathon",
    desc: "Participated at Malla Reddy University.",
    link: "/certificates/DOC-20260507-WA0016..pdf"
  },
  {
    text: "TCS CodeVita Season 13",
    desc: "National-level competitive programming contest, strengthening problem-solving and algorithmic thinking skills.",
    link: null
  },
  {
    text: "Active Learner",
    desc: "Constantly improving in Java and problem-solving.",
    link: null
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto border-t-[3px] border-black">
      <div className="flex flex-col gap-24">
        
        {/* Certifications Stack */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter lowercase mb-4">
              certifications.
            </h2>
          </motion.div>

          <div className="flex flex-col gap-6 md:gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="minimal-card p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group"
              >
                <div className="max-w-2xl">
                  <h3 className="font-black text-xl md:text-3xl uppercase leading-tight mb-2 md:mb-3">{cert.title}</h3>
                  {cert.description && (
                    <p className="font-bold text-black/70 leading-relaxed text-sm md:text-base">{cert.description}</p>
                  )}
                </div>
                <div className="flex flex-col items-start md:items-end text-left md:text-right gap-3 w-full md:w-auto">
                  {cert.credential && (
                    <span className="inline-block px-4 py-1.5 bg-black text-white font-bold text-xs md:text-sm uppercase tracking-wider">
                      Credential {cert.credential}
                    </span>
                  )}
                  {cert.link && (
                    <Link href={cert.link} target="_blank" className="flex items-center gap-2 mt-2 md:mt-0 text-sm md:text-base font-black uppercase tracking-widest hover:underline decoration-2 md:decoration-3 underline-offset-4">
                      View Certificate <ExternalLink size={18} strokeWidth={2.5} />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Participation Stack */}
        <div className="border-t-[3px] border-black pt-16 md:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter lowercase mb-4">
              participation.
            </h2>
          </motion.div>

          <div className="flex flex-col gap-6 md:gap-8">
            {participation.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="minimal-card p-6 md:p-8 bg-[#fbbf24] flex flex-col md:flex-row justify-between items-start md:items-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all gap-6"
              >
                <div className="max-w-3xl">
                  <p className="font-black text-xl md:text-2xl leading-tight uppercase tracking-tight mb-2 md:mb-3">
                    "{item.text}"
                  </p>
                  <p className="text-sm md:text-base font-bold text-black/70 italic font-serif">
                    {item.desc}
                  </p>
                </div>
                {item.link && (
                  <Link href={item.link} target="_blank" className="flex items-center justify-center gap-2 text-sm md:text-base font-black uppercase tracking-widest bg-white px-4 py-3 border-[3px] border-black rounded-full hover:bg-black hover:text-white transition-colors shrink-0 w-full md:w-auto mt-2 md:mt-0">
                    View <ExternalLink size={18} strokeWidth={2.5} />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
