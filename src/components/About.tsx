"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {
  const cards = [
    {
      title: "Who I Am",
      icon: "👤",
      color: "from-blue-500 to-blue-600",
      items: [
        "MERN Stack developer with a love for clean UI.",
        "React and Next.js is my comfort zone for building apps.",
        "I keep learning and improving every day.",
      ],
    },
    {
      title: "What I Do",
      icon: "</>",
      color: "from-purple-500 to-purple-600",
      items: [
        "Build responsive sites with HTML, CSS, JS, React, Next.js.",
        "Use backend tools like Node, MongoDB, Firebase.",
        "Create projects to practice and grow skills.",
      ],
    },
    {
      title: "My Goals",
      icon: "✓",
      color: "from-green-500 to-green-600",
      items: [
        "Become a full-stack developer with real impact.",
        "Work with a strong tech team on real projects.",
        "Get a dev job and grow step by step.",
      ],
    },
    {
      title: "My Philosophy",
      icon: "💡",
      color: "from-orange-500 to-orange-600",
      items: [
        "Code should solve problems, not create them.",
        "Keep it simple, clean, and easy to maintain.",
        "Learning never stops in tech – keep going.",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-5">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-2 text-4xl font-bold md:text-5xl border-b-4 border-blue-500 w-fit mx-auto text-center"
      >
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8 text-center text-gray-300"
      >
        A self-motivated developer who loves building real things and constantly
        learning
      </motion.p>

      <div className="mb-8 grid gap-12 mx-auto w-full justify-center items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <p className="mb-6 text-lg text-gray-300">
            Hello! 👋 I&apos;m{" "}
            <span className="text-blue-500">Md. Arju Hasan</span>, I started my
            web development journey out of curiosity, and now I truly enjoy
            building responsive and functional websites. I&apos;m passionate
            about learning and growing every day as a developer.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-shadow hover:shadow-blue-500/50"
          >
            🚀 Turning curiosity into code and code into real-world solutions
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        />
      </div>

      {/* Cards Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-2"
      >
        {cards.map((card, index) => {
          const [isHovered, setIsHovered] = useState(false);

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 40px rgba(0,0,0,0.3), 0 0 20px rgba(59,130,246,0.2)",
                transition: { duration: 0.3 },
              }}
              className={`group rounded-2xl border border-gray-700 bg-gradient-to-br ${card.color} p-0.5 transition-all duration-300 hover:border-transparent`}
            >
              <div className="rounded-2xl bg-gray-900 p-8 backdrop-blur-sm">
                {/* Icon & Title Header */}
                <div className="mb-6 flex items-center gap-4">
                  {/* Icon */}
                  <motion.div
                    animate={
                      isHovered
                        ? { scale: 1.2, rotate: 10 }
                        : { scale: 1, rotate: 0 }
                    }
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`inline-flex h-10 w-10 flex-shrink-0 p-2 items-center justify-center rounded-xl bg-gradient-to-br ${card.color} text-xl`}
                  >
                    {card.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white">{card.title}</h3>
                </div>

                {/* Items */}
                <ul className="space-y-3">
                  {card.items.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      className="flex items-start text-gray-300"
                    >
                      <span className="mr-3 text-lg text-blue-500">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
