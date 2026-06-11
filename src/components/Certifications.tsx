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
    <section id="certifications" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t-[3px] border-black">
      <div className="flex flex-col gap-32">
        
        {/* Certifications Stack */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-[10vw] md:text-8xl font-black tracking-tighter lowercase mb-4">
              certifications.
            </h2>
          </motion.div>

          <div className="flex flex-col gap-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="minimal-card p-10 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 group"
              >
                <div>
                  <h3 className="font-black text-4xl md:text-5xl uppercase leading-tight max-w-3xl mb-4">{cert.title}</h3>
                  {cert.description && (
                    <p className="font-bold text-black/70 leading-relaxed text-2xl max-w-2xl">{cert.description}</p>
                  )}
                </div>
                <div className="flex flex-col items-start md:items-end text-left md:text-right gap-4">
                  {cert.credential && (
                    <span className="inline-block px-6 py-2 bg-black text-white font-bold text-lg md:text-xl uppercase tracking-wider">
                      Credential {cert.credential}
                    </span>
                  )}
                  {cert.link && (
                    <Link href={cert.link} target="_blank" className="flex items-center gap-2 mt-4 text-xl font-black uppercase tracking-widest hover:underline decoration-4 underline-offset-4">
                      View Certificate <ExternalLink strokeWidth={3} />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Participation Stack */}
        <div className="border-t-[3px] border-black pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-[10vw] md:text-8xl font-black tracking-tighter lowercase mb-4">
              participation.
            </h2>
          </motion.div>

          <div className="flex flex-col gap-12">
            {participation.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="minimal-card p-10 md:p-16 bg-[#fbbf24] min-h-[30vh] flex flex-col md:flex-row justify-between items-start md:items-center shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all gap-8"
              >
                <div className="max-w-4xl">
                  <p className="font-black text-3xl md:text-5xl leading-tight uppercase tracking-tight mb-4">
                    "{item.text}"
                  </p>
                  <p className="text-2xl font-bold text-black/70 italic font-serif">
                    {item.desc}
                  </p>
                </div>
                {item.link && (
                  <Link href={item.link} target="_blank" className="flex items-center gap-2 text-xl font-black uppercase tracking-widest bg-white px-6 py-4 border-[3px] border-black rounded-full hover:bg-black hover:text-white transition-colors shrink-0">
                    View <ExternalLink strokeWidth={3} />
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

