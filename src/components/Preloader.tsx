"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const outlineRef = useRef<SVGTextElement | null>(null);

  useEffect(() => {
    // Keep the preloader long enough for: outline draw -> fill reveal -> fade out
    // (Target: fast 1 -> 2 -> 3 -> 4 -> 5 flow as in the reference images)
    const timer = setTimeout(() => setIsLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!outlineRef.current) return;

    // Match dash length to the rendered SVG text
    const len = outlineRef.current.getComputedTextLength();
    outlineRef.current.style.strokeDasharray = String(len);
    outlineRef.current.style.strokeDashoffset = String(len);
    // Trigger CSS animation only after dash values are applied
    outlineRef.current.classList.add("dash-ready");
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0f0f0f] text-white"
          exit={{
            opacity: 0,
            transition: { duration: 0.55, ease: "easeInOut" },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <style>
              {`
                @keyframes preloader-draw {
                  to { stroke-dashoffset: 0; }
                }
                @keyframes preloader-fill-in {
                  from { opacity: 0; }
                  to { opacity: 1; }
                }

                .preloader-outline {
                  fill: transparent;
                  stroke-width: 3px;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  opacity: 0;
                }

                .preloader-outline.dash-ready {
                  opacity: 1;
                  animation: preloader-draw 1.55s linear forwards;
                }

                .preloader-fill {
                  opacity: 0;
                  animation: preloader-fill-in 0.2s ease-out forwards;
                }
              `}
            </style>
            <svg
              viewBox="0 0 960 280"
              className="h-24 w-[92vw] max-w-5xl md:h-48 md:w-auto"
            >
              <defs>
                {/* Outline: "pencil" style */}
                <linearGradient
                  id="pencilGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#38bdf8" />
                </linearGradient>

                {/* Fill: different color from outline */}
                <linearGradient
                  id="fillGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#60a5fa" />
                </linearGradient>
              </defs>

              {/* Fill layer (appears only after outline is fully drawn) */}
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="text-[150px] font-[900] preloader-fill"
                fill="url(#fillGradient)"
                style={{ animationDelay: "1.55s" }}
              >
                Arju Hasan
              </text>

              {/* Outline (single direction: left -> right) */}
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                ref={outlineRef}
                className="text-[150px] font-[900] preloader-outline"
                stroke="url(#pencilGradient)"
                strokeWidth="3"
              >
                Arju Hasan
              </text>
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

