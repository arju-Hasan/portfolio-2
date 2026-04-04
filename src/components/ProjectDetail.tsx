"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLock } from "react-icons/fa";
import projects from "@/data/projects";
import Footer from "./Footer";
import Navbar from "./Navbar";

type ProjectDetailProps = {
  slug: string;
};

export default function ProjectDetail({ slug }: ProjectDetailProps) {
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <section className="px-4 py-20 sm:px-10">
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Project not found
          </h2>
          <p className="mb-6 text-gray-400">
            The project you are looking for does not exist.
          </p>
          <Link href="/" className="text-blue-500 underline">
            Back to portfolio
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-20 sm:px-10">
      <Navbar />
      <div className="mx-auto max-w-[1000px]">
        <div className="mb-8">
          <Link href="/" className="text-sm text-blue-500 underline">
            ← Back
          </Link>
        </div>

        <div className="grid items-start gap-8 rounded-3xl border border-white/10 bg-gray-900/70 p-8 shadow-2xl md:grid-cols-2">
          <div>
            <Image
              src={project.img}
              alt={project.title}
              width={800}
              height={450}
              className="w-full rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <h1 className="mb-3 text-3xl font-bold text-white md:text-4xl">
              {project.title}
            </h1>
            <p className="mb-4 text-gray-300">{project.description}</p>

            <div className="mb-4">
              <h4 className="mb-2 text-sm font-semibold text-gray-400">
                Main tech stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span
                    key={t}
                    className="rounded border border-white/10 bg-white/5 px-2 py-1 text-xs text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white transition-colors hover:bg-blue-500"
              >
                View Live
              </a>
              {project.gitPrivate ? (
                <span
                  className="flex cursor-default items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-gray-400"
                  title="Client and server repositories are private"
                >
                  <FaLock /> Private code
                </span>
              ) : (
                <a
                  href={project.gitUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-white transition-colors hover:bg-white/10"
                >
                  <FaGithub /> View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
