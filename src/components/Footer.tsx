"use client";

import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden border-t border-gray-300 bg-white text-gray-900 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 pb-10 pt-12">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-20 dark:opacity-40">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px] filter dark:bg-blue-500/20" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-cyan-500/5 blur-[80px] filter dark:bg-blue-500/15" />
        <div className="dot-pattern absolute inset-0 opacity-10 dark:opacity-20" />
      </div>

      <div className="absolute left-10 top-10 hidden h-4 w-4 rotate-45 border border-gray-400 opacity-30 dark:border-gray-600 dark:opacity-40 md:block" />
      <div className="absolute bottom-40 right-10 hidden h-3 w-3 rounded-full bg-gray-300 opacity-40 dark:bg-gray-700 dark:opacity-50 md:block" />
      <div className="absolute left-1/3 top-1/2 h-2 w-2 animate-pulse rounded-full bg-blue-500/70 opacity-60 dark:bg-blue-500" />

      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-6 text-center">
        <h2 className="mb-2 text-4xl font-bold tracking-tight md:text-6xl">
          <span className="text-gray-600 dark:text-gray-400">Let&apos;s</span>{" "}
          <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(59,130,246,0.35)] dark:from-blue-400 dark:to-blue-500">
            Connect
          </span>
        </h2>

        <div className="mb-8 flex cursor-default flex-col items-center">
          <div className="relative mb-4 flex h-16 w-16 items-center justify-center">
            <svg
              className="absolute h-full w-full animate-spin-slow fill-current text-blue-900/30 opacity-60 dark:text-blue-400/40"
              viewBox="0 0 100 100"
              aria-hidden
            >
              <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" />
            </svg>

            <svg
              className="relative z-10 h-8 w-8 text-blue-600 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>

            <div className="absolute inset-0 animate-[spin_10s_linear_infinite] rounded-full border-2 border-dashed border-blue-500/30 dark:border-blue-400/40" />
          </div>

          <h3 className="text-2xl font-bold tracking-wider text-gray-900 dark:text-white">
            Arju<span className="text-blue-600 dark:text-blue-400">-Hasan</span>
          </h3>
        </div>

        <p className="mx-auto mb-5 max-w-md text-sm leading-relaxed text-gray-700 dark:text-gray-300 md:text-base">
          MERN Stack Developer building{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            Clean & Animated
          </span>{" "}
          interfaces.
        </p>

        <div className="flex gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-colors hover:border-blue-500/50 hover:bg-blue-50 hover:text-blue-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-400/50 dark:hover:bg-gray-700 dark:hover:text-blue-400">
            <ThemeToggle />
          </div>

          <a
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-colors hover:border-blue-500/50 hover:bg-blue-50 hover:text-blue-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-400/50 dark:hover:bg-gray-700 dark:hover:text-blue-400"
            href="https://github.com/arju-Hasan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-colors hover:border-blue-500/50 hover:bg-blue-50 hover:text-blue-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-400/50 dark:hover:bg-gray-700 dark:hover:text-blue-400"
            href="https://www.linkedin.com/in/arju95"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-colors hover:border-blue-500/50 hover:bg-blue-50 hover:text-blue-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-400/50 dark:hover:bg-gray-700 dark:hover:text-blue-400"
            href="https://x.com/dev_arju95"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <BsTwitterX />
          </a>

          <a
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-colors hover:border-blue-500/50 hover:bg-blue-50 hover:text-blue-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-400/50 dark:hover:bg-gray-700 dark:hover:text-blue-400"
            href="https://www.facebook.com/arju95"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <BsFacebook />
          </a>
        </div>
      </div>

      <aside className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>
          Copyright © {year} - All right reserved by{" "}
          <a
            href="https://github.com/arju-Hasan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
          >
            Arju-hasan
          </a>
        </p>
      </aside>

      <p className="text-xs text-gray-600 dark:text-gray-500 text-center mt-3">
        Built with TypeScript, React, Next.js, Tailwind CSS, and EmailJS
      </p>
    </footer>
  );
}
