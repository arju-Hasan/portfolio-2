"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const journeyItems = [
  {
    period: "2025 - PRESENT",
    title: "Full Stack Developer",
    lines: ["Programming-Hero", "Banani, Dhaka, Bangladesh"],
    isCurrent: true,
  },
  {
    period: "2024 - 2024",
    title: "Digital Marketing",
    lines: ["FutureIT and Lerning IT", "Bangla Motor, Dhaka"],
    isCurrent: false,
  },
  {
    period: "2022 - PRESENT",
    title: "B.Sc. Chemistry",
    lines: ["National University, Bangladesh"],
    isCurrent: false,
  },
] as const;

export default function Journey() {
  return (
    <section
      className="mx-auto max-w-6xl bg-gray-950/30 px-4 py-20"
      id="journey"
    >
      <div className="mb-12 text-center md:text-left">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-2 text-4xl font-bold md:text-5xl border-b-4 border-blue-500 w-fit mx-auto text-center"
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              My Journey
              </span>
          
        </motion.h2>
      </div>

      <div className="mx-auto max-w-[960px]">
        <div className="flex flex-col gap-16 md:flex-row">
          <div className="md:w-1/3">
            <h3 className="mb-6 text-2xl font-bold text-white md:text-3xl">
              Education &amp; Experience
            </h3>
            <p className="mb-8 text-sm leading-relaxed text-gray-400">
              A timeline of my academic background and professional growth in
              the tech industry.
            </p>
            <div className="relative mx-auto w-full max-w-[260px] md:mx-0">
            <img src="https://i.ibb.co.com/N2zxf8Xr/book.png" alt="Books and learning" width={260} height={228} className="h-auto w-full object-contain opacity-90" />
        
            </div>
              </div>

          <div className="grid items-center justify-center md:w-2/3">
            <div className="relative space-y-12 border-l border-white/10 pl-8">
              {journeyItems.map((item, index) => (
                <motion.div
                  key={item.title + item.period}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.12, duration: 0.45 }}
                  className="relative group"
                >
                  <div
                    className={`absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 bg-[#0a0a0a] transition-all duration-300 ${
                      item.isCurrent
                        ? "border-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.55)] group-hover:scale-110"
                        : "border-gray-600 shadow-none group-hover:scale-110 group-hover:border-blue-500/80"
                    }`}
                  />
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-bold tracking-[0.25em] text-blue-500">
                      {item.period}
                    </span>
                    <h4 className="text-xl font-bold text-white">
                      {item.title}
                    </h4>
                    <span className="text-sm text-gray-400">
                      {item.lines.map((line, i) => (
                        <span key={line}>
                          {line}
                          {i < item.lines.length - 1 ? (
                            <>
                              <br />
                            </>
                          ) : null}
                        </span>
                      ))}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
