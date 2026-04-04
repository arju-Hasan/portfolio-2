"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { SiWhatsapp } from "react-icons/si";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center px-4 pt-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-6xl w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-center">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4 inline-block bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2"
            >
              <span className="text-blue-300">Hey! 👋 I&apos;m</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                MD Arju Hasan
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl mb-6 text-gray-300"
            >
              I&apos;m a{" "}
              <span className="text-pink-400 font-semibold">
                <TypeAnimation
                  sequence={[
                    "React Developer",
                    4000,
                    "",
                    400,
                    "Full-Stack Developer",
                    4000,
                    "",
                    400,
                    "Frontend Developer",
                    4000,
                    "",
                    400,
                    "Next.js Enthusiast",
                    4000,
                    "",
                    400,
                  ]}
                  wrapper="span"
                  speed={80}
                  repeat={Infinity}
                  cursor
                />
              </span>
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed max-w-lg"
            >
              I am a Full Stack Developer specializing in the MERN stack. I
              transform complex requirements into robust, high-performance web
              applications.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8 justify-center"
            >
              <a
                href="https://docs.google.com/document/d/1tKCoQpv_k_TYMV8n_W6iPlnmMJGtD3B4/edit?usp=sharing&ouid=114536951675560717305&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition flex items-center justify-center gap-2"
              >
                <span>
                  <Download className="w-4 h-4" />
                </span>{" "}
                View Resume
              </a>
              <a
                href="#contact"
                className="border border-blue-500 text-blue-500 hover:bg-blue-500/10 font-semibold py-3 px-8 rounded-lg transition"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center"
            >
              <a
                href="https://github.com/arju-Hasan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-gray-600 hover:border-blue-500 rounded-lg flex items-center justify-center transition"
                aria-label="GitHub"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/arju95/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-gray-600 hover:border-blue-500 rounded-lg flex items-center justify-center transition"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a
                href="https://wa.me/+8801721-602904"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-gray-600 hover:border-blue-500 rounded-lg flex items-center justify-center transition"
                aria-label="WhatsApp"
              >
                <SiWhatsapp />
              </a>
              <a
                href="mailto:arju3h@gmail.com"
                className="w-12 h-12 border border-gray-600 hover:border-blue-500 rounded-lg flex items-center justify-center transition"
                aria-label="Email"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative w-90 h-90">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-full blur-3xl" />
              <img
                // src="/Arju-hasan.png"
                src="https://i.ibb.co.com/Nd5JfX8W/d45932f4-5444-488d-a87b-fd81700f28456c.png"
                alt="Arju Hasan"
                className="w-full h-full rounded-full object-cover border-4 border-blue-500/30 relative z-10"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, repeat: Infinity, repeatType: "reverse" }}
          className="flex justify-center mt-6"
        >
          <svg
            className="w-6 h-6 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
