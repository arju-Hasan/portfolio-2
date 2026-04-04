"use client";

import { motion } from "framer-motion";
import {
  SiCss,
  SiCplusplus,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const skillIcons = {
  HTML: <SiHtml5 className="h-12 w-12 text-[#E34F26]" />,
  CSS: <SiCss className="h-12 w-12 text-[#1572B6]" />,
  JavaScript: <SiJavascript className="h-12 w-12 text-[#F7DF1E]" />,
  TypeScript: <SiTypescript className="h-12 w-12 text-[#3178C6]" />,
  React: <SiReact className="h-12 w-12 text-[#61DAFB]" />,
  "Next.js": <SiNextdotjs className="h-12 w-12 text-white" />,
  TailwindCSS: <SiTailwindcss className="h-12 w-12 text-[#06B6D4]" />,
  "Node.js": <SiNodedotjs className="h-12 w-12 text-[#5FA04E]" />,
  "Express.js": <SiExpress className="h-12 w-12 text-[#8BC34A]" />,
  MongoDB: <SiMongodb className="h-12 w-12 text-[#47A248]" />,
  Firebase: <SiFirebase className="h-12 w-12 text-[#FFCA28]" />,
  "C++": <SiCplusplus className="h-12 w-12 text-[#00599C]" />,
  "VS Code": <TbBrandVscode className="h-12 w-12 text-[#007ACC]" />,
  Git: <SiGit className="h-12 w-12 text-[#F05032]" />,
  GitHub: <SiGithub className="h-12 w-12 text-[#181717]" />,
  Postman: <SiPostman className="h-12 w-12 text-[#FF6C37]" />,
  Vite: <SiVite className="h-12 w-12 text-[#646CFF]" />,
  Vercel: <SiVercel className="h-12 w-12 text-white" />,
};

const skills = [
  {
    name: "HTML",
    icon: "HTML",
    color: "from-orange-500/20 to-red-600/20",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: "CSS",
    color: "from-blue-500/20 to-cyan-500/20",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    icon: "JavaScript",
    color: "from-yellow-400/20 to-yellow-600/20",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: "TypeScript",
    color: "from-blue-500/20 to-blue-700/20",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    icon: "React",
    color: "from-cyan-400/20 to-blue-500/20",
    url: "https://react.dev/",
  },
  {
    name: "Next.js",
    icon: "Next.js",
    color: "from-gray-700/20 to-black/20",
    url: "https://nextjs.org/",
  },
  {
    name: "TailwindCSS",
    icon: "TailwindCSS",
    color: "from-cyan-500/20 to-blue-500/20",
    url: "https://tailwindcss.com/",
  },
  {
    name: "Node.js",
    icon: "Node.js",
    color: "from-green-600/20 to-green-700/20",
    url: "https://nodejs.org/",
  },
  {
    name: "Express.js",
    icon: "Express.js",
    color: "from-lime-500/20 to-green-700/20",
    url: "https://expressjs.com/",
  },
  {
    name: "MongoDB",
    icon: "MongoDB",
    color: "from-green-500/20 to-green-600/20",
    url: "https://www.mongodb.com/",
  },
  {
    name: "Firebase",
    icon: "Firebase",
    color: "from-yellow-500/20 to-orange-600/20",
    url: "https://firebase.google.com/",
  },
  {
    name: "VS~Code",
    icon: "VS Code",
    color: "from-blue-500/20 to-cyan-500/20",
    url: "https://code.visualstudio.com/",
  },
  {
    name: "Git",
    icon: "Git",
    color: "from-red-600/20 to-orange-600/20",
    url: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    icon: "GitHub",
    color: "from-gray-700/20 to-black/20",
    url: "https://github.com/",
  },
  {
    name: "Vite",
    icon: "Vite",
    color: "from-purple-600/20 to-purple-800/20",
    url: "https://vitejs.dev/",
  },
  {
    name: "Vercel",
    icon: "Vercel",
    color: "from-gray-900/20 to-black/20",
    url: "https://vercel.com/",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6 text-center text-4xl font-bold md:text-5xl text-blue-500"
      >
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          Skills
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8 text-center text-gray-400"
      >
        The tech stack I&apos;ve been collecting like Pokémon cards – gotta
        catch &apos;em all! 🔥
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.08 } },
          hidden: {},
        }}
        className="grid gap-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 justify-center"
      >
        {skills.map(skill => (
          <motion.a
            key={skill.name}
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              y: -8,
              transition: { duration: 0.3 },
            }}
            className={`group relative rounded-2xl border border-gray-700 bg-gradient-to-br ${skill.color} p-0.5 transition-all duration-300 hover:border-transparent hover:shadow-lg`}
          >
            <div className="rounded-2xl bg-gray-900 p-8 text-center">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mb-4 text-5xl flex justify-center items-center text-current"
              >
                {skillIcons[skill.icon as keyof typeof skillIcons] ||
                  skill.icon}
              </motion.div>

              <p className="font-semibold text-white text-sm md:text-base">
                {skill.name}
              </p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
