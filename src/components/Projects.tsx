"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLock } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Link from "next/link";
import projects from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
            Portfolio
          </p>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold md:text-5xl"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>
        </div>

        <a
          className="inline-flex items-center gap-2 text-sm text-gray-200 transition-colors hover:text-blue-500"
          href="https://github.com/arju-Hasan"
          target="_blank"
          rel="noreferrer"
        >
          <span>View Github</span>
          <span aria-hidden>→</span>
        </a>
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map(project => (
          <motion.div
            key={project.slug}
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10, transition: { duration: 0.25 } }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-700 bg-gray-900/70 transition-all duration-300 hover:border-blue-500/70 hover:shadow-[0_0_28px_rgba(59,130,246,0.2)]"
          >
            <div className="relative aspect-video overflow-hidden">
              <div className="absolute inset-0 z-10 bg-blue-500/20 opacity-0 transition-opacity group-hover:opacity-100" />
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={project.img}
                alt={project.title}
                width={640}
                height={360}
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>

            <div className="p-6">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="mb-1 text-xl font-bold">{project.title}</h3>
                  <p className="text-xs font-medium text-blue-500">
                    Live Project
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {project.gitPrivate ? (
                    <span
                      className="inline-flex cursor-default items-center gap-1 rounded-md bg-white/5 px-3 py-1 text-sm text-gray-400"
                      title="Source code is private"
                    >
                      <FaLock className="text-xs" />
                      Private
                    </span>
                  ) : (
                    <a
                      className="inline-flex items-center gap-1 rounded-md bg-white/5 px-3 py-1 text-sm text-white transition-colors hover:bg-white/10"
                      href={project.gitUrl}
                      target="_blank"
                      rel="noreferrer"
                      title="Open Git Code"
                    >
                      <FaGithub />
                      Code
                    </a>
                  )}
                  <a
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/10"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    title="Open Live Demo"
                  >
                    <MdOutlineRemoveRedEye />
                  </a>
                </div>
              </div>

              <p className="mb-6 line-clamp-3 text-sm text-gray-400">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map(tag => (
                  <span
                    key={tag}
                    className="rounded border border-white/10 bg-white/5 px-2 py-1 text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between p-3 pt-0">
              <a
                className="inline-flex items-center gap-1 rounded-md bg-white/5 px-3 py-2 text-sm text-white transition-colors hover:bg-white/10"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                live <MdOutlineRemoveRedEye />
              </a>
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm text-white transition-colors hover:bg-blue-500"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
