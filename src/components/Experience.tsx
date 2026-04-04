"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "programming hero",
    duration: "2026 - Present",
    highlights: [
      "Developed a comprehensive smart farming platform connecting farmers, sellers, agri-officers, and service providers in one unified digital ecosystem.",
      "Implemented real-time crop monitoring, AI-powered disease detection, soil health analysis, and intelligent crop recommendations using TensorFlow and Google GenAI.",
      "Built a fully functional digital marketplace with secure payments (Stripe), service booking, direct communication, and scalable data management using Firebase.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TailwindCSS",
      "MongoDB",
      "Express.js",
      "Firebase",
      "Stripe",
      "Google GenAI",
      "Cloudinary",
      "React Query",
      "Framer Motion",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl bg-gray-950/30 px-4 py-20"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-16 text-center text-4xl font-bold md:text-5xl"
      >
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          Experience
        </span>
      </motion.h2>

      <div className="space-y-10 w-9/10 mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={`${exp.title}-${index}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-xl border border-gray-800 bg-gray-900/50 p-8 transition-all hover:border-blue-600/50"
          >
            <div className="mb-4">
              <h3 className="text-2xl font-semibold">{exp.title}</h3>
              <p className="text-blue-500">
                {exp.company} • {exp.duration}
              </p>
            </div>

            <ul className="mb-6 space-y-2">
              {exp.highlights.map((highlight, idx) => (
                <li key={idx} className="flex gap-3 text-gray-300">
                  <span className="text-blue-500">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-400 border border-blue-600/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
