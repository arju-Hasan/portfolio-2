"use client";

import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  const year = new Date().getFullYear();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <footer className="relative w-full overflow-hidden border-t border-gray-200 bg-gradient-to-b from-neutral-100 to-neutral-50 pb-10 pt-12 text-neutral-800 transition-colors duration-300 dark:border-gray-800 dark:from-gray-950 dark:via-black/85 dark:to-black dark:text-gray-300">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-30 dark:opacity-100">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-blue-500/15 blur-[100px] filter dark:bg-blue-500/20" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-[80px] filter dark:bg-blue-500/15" />
        <div className="dot-pattern absolute inset-0 opacity-[0.07] dark:opacity-10" />
      </div>

      <div className="absolute left-10 top-10 hidden h-4 w-4 rotate-45 border border-gray-400 opacity-30 dark:border-gray-700 dark:opacity-20 md:block" />
      <div className="absolute bottom-40 right-10 hidden h-3 w-3 rounded-full bg-gray-400 opacity-40 dark:bg-gray-800 dark:opacity-30 md:block" />
      <div className="absolute left-1/3 top-1/2 h-2 w-2 animate-pulse rounded-full bg-blue-500/70 opacity-60 dark:bg-blue-500" />

      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-6 text-center">
        <h2 className="mb-2 text-4xl font-bold tracking-tight md:text-6xl">
          <span className="text-neutral-500 dark:text-gray-400">
            Let&apos;s
          </span>{" "}
          <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(59,130,246,0.35)] dark:from-blue-500 dark:to-blue-500">
            Connect
          </span>
        </h2>
        <div className="mb-8 flex cursor-default flex-col items-center">
          <div className="relative mb-4 flex h-16 w-16 items-center justify-center">
            <svg
              className="absolute h-full w-full animate-spin-slow fill-current text-blue-900/40 opacity-60 dark:text-blue-950/50"
              viewBox="0 0 100 100"
              aria-hidden
            >
              <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" />
            </svg>

            <svg
              className="relative z-10 h-8 w-8 text-blue-500 dark:text-blue-500"
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

            <div className="absolute inset-0 animate-[spin_10s_linear_infinite] rounded-full border-2 border-dashed border-blue-500/35 dark:border-blue-500/40" />
          </div>

          <h3 className="text-2xl font-bold tracking-wider text-neutral-900 dark:text-white">
            Arju<span className="text-blue-500 dark:text-blue-500">-Hasan</span>
          </h3>
        </div>
        <p className="mx-auto mb-5 max-w-md text-sm leading-relaxed text-neutral-600 dark:text-gray-400 md:text-base">
          MERN Stack Developer building{" "}
          <span className="font-semibold text-neutral-900 dark:text-white">
            Clean & Animated
          </span>{" "}
          interfaces.
        </p>
        text-neutral-500 transition-colors hover:border-blue-500/50
        hover:bg-blue-600 hover:text-white dark:border-white/10 dark:bg-white/5
        dark:text-gray-400 dark:hover:border-transparent
        <div className="flex gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/80 dark:border-white/10 dark:bg-white/5">
            <ThemeToggle />
          </div>
          <a
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-neutral-500 transition-colors hover:border-blue-500/50 hover:bg-blue-600 hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-gray-400 dark:hover:border-transparent"
            href="https://github.com/arju-Hasan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-neutral-500 transition-colors hover:border-blue-500/50 hover:bg-blue-600 hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-gray-400 dark:hover:border-transparent"
            href="https://www.linkedin.com/in/arju95"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-neutral-500 transition-colors hover:border-blue-500/50 hover:bg-blue-600 hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-gray-400 dark:hover:border-transparent"
            href="https://x.com/dev_arju95"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <BsTwitterX />
          </a>
          <a
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-neutral-500 transition-colors hover:border-blue-500/50 hover:bg-blue-600 hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-gray-400 dark:hover:border-transparent"
            href="https://www.facebook.com/arju95"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <BsFacebook />
          </a>
        </div>
      </div>

      <aside className="mt-6 text-center text-lg text-neutral-500 dark:text-xl dark:text-gray-500">
        <p>
          Copyright © {year} - All right reserved by{" "}
          <a
            href="https://github.com/arju-Hasan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 transition-colors hover:text-blue-500 hover:underline dark:text-blue-500 dark:hover:text-blue-300"
          >
            Arju-hasan
          </a>
        </p>
      </aside>
      <p className="text-sm text-neutral-500 dark:text-gray-500 text-center">
        Built with TypeScript, React, Next.js, Tailwind CSS, and EmailJS
      </p>
    </footer>
  );
}
