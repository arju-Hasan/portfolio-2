"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      for (const item of navItems) {
        const element = document.querySelector(item.href);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(item.href.substring(1));
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-2 left-1/2 w-95/100 transform -translate-x-1/2 px-6 z-40 flex justify-center rounded-4xl transition-all duration-300 ${
        scrolled
          ? "border-1 border-blue-500/60 bg-black/40 backdrop-blur-lg"
          : "border-1 border-blue-500/10 bg-black/10 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="hidden md:flex h-16 items-center justify-between">
          {/* Left - Name Link */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight hover:text-blue-500 transition-colors"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text  text-transparent">
              Arju Hasan
            </span>
          </Link>

          {/* Center - Nav Items */}
          <div className="flex items-center space-x-8">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className={`transition-colors duration-300 cursor-pointer ${
                  activeSection === item.href.substring(1)
                    ? "text-blue-500 border-b-2 border-blue-500 pb-1"
                    : "hover:text-blue-500"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right - Theme Toggle & GitHub */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <a
              href="https://github.com/arju-Hasan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors bg-blue-600 rounded-xl px-3 py-1 flex items-center gap-2"
              aria-label="GitHub"
            >
              Github
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex h-16 items-center justify-between">
          {/* Mobile - Name on left */}
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Arju Hasan
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(v => !v)}
            type="button"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="border-b border-white/10 bg-black/90 md:hidden"
          >
            <div className="space-y-2 px-4 py-2">
              {navItems.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block transition-colors duration-300 cursor-pointer ${
                    activeSection === item.href.substring(1)
                      ? "text-blue-500 pl-2 border-l-2 border-blue-500"
                      : "hover:text-blue-500"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 flex items-center space-x-3">
                <ThemeToggle />
                <a
                  href="https://github.com/arju-Hasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
