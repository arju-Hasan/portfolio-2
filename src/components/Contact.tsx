"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, MapPin, Send } from "lucide-react";

type Status = { type: "success" | "error"; message: string } | null;

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>(null);
  const [sending, setSending] = useState(false);

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const configError =
    !serviceId || !templateId || !publicKey
      ? "EmailJS not configured. Add NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY to .env.local and restart the dev server."
      : !serviceId.startsWith("service_")
        ? "Service ID looks invalid (should start with 'service_')."
        : !templateId.startsWith("template_")
          ? "Template ID looks invalid (should start with 'template_')."
          : publicKey.length < 10
            ? "Public key looks short — check your EmailJS public key."
            : null;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: "Email service not configured. Set environment variables.",
      });
      setSending(false);
      return;
    }

    const formEl = form.current;
    if (!formEl) {
      setSending(false);
      return;
    }

    const formData = new FormData(formEl);
    const templateParams: Record<string, string> = {};
    formData.forEach((value, key) => {
      templateParams[key] = String(value);
    });
    templateParams.reply_to = templateParams.from_email || "";
    templateParams.message = `From: ${
      templateParams.from_name || "Anonymous"
    } <${templateParams.from_email || "no-reply@example.com"}>

${templateParams.message}`;

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setStatus({
          type: "success",
          message: "Message sent! I will reply soon.",
        });
        formEl.reset();
        setSending(false);
      })
      .catch((err: Error & { text?: string; statusText?: string }) => {
        const detail =
          (err && (err.text || err.statusText || err.message)) ||
          String(err);
        setStatus({
          type: "error",
          message: `Failed to send: ${detail}`,
        });
        setSending(false);
      });
  };

  const isDev = process.env.NODE_ENV !== "production";

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl bg-gradient-to-t from-black/40 to-gray-950/30 px-4 py-20 sm:px-6"
    >
      <div className="relative z-10 mx-auto max-w-[1000px]">
        <div className="grid gap-12 rounded-3xl border border-gray-700/80 bg-gray-900/60 p-8 shadow-[0_0_40px_rgba(0,0,0,0.35)] backdrop-blur-sm md:grid-cols-2 md:p-12">
          <div className="flex flex-col justify-center gap-6">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
                Get in Touch
              </p>
              <h2 className="mb-4 text-3xl font-bold text-[var(--foreground)] md:text-4xl">
                Let&apos;s work together
              </h2>
              <p className="text-gray-400">
                Have a project in mind or want to hire me? Fill out the form or
                send me a direct email. I&apos;m always open to discussing new
                projects and opportunities.
              </p>
            </div>
            <div className="mt-2 space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-blue-500">
                  <Mail className="h-5 w-5" aria-hidden />
                </div>
                <span className="text-sm md:text-base">arju3h@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-blue-500">
                  <MapPin className="h-5 w-5" aria-hidden />
                </div>
                <span className="text-sm md:text-base">
                  Mirpur, Dhaka Bangladesh
                </span>
              </div>
            </div>
            <div className="mt-4 flex gap-3">
              <a
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-colors hover:bg-blue-600 hover:text-white"
                href="https://github.com/arju-Hasan"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-colors hover:bg-blue-600 hover:text-white"
                href="https://www.linkedin.com/in/arju95"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-colors hover:bg-blue-600 hover:text-white"
                href="https://x.com/dev_arju95"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
              >
                <BsTwitterX />
              </a>
              <a
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-colors hover:bg-blue-600 hover:text-white"
                href="https://www.facebook.com/arju95"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <BsFacebook />
              </a>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="from_name"
                  className="ml-1 text-xs font-bold text-gray-400"
                >
                  Name
                </label>
                <input
                  id="from_name"
                  name="from_name"
                  className="h-12 w-full rounded-xl border border-gray-200 bg-white/95 px-4 text-sm text-neutral-900 placeholder:text-neutral-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 dark:border-white/10 dark:bg-black/30 dark:text-[var(--foreground)] dark:placeholder:text-gray-500"
                  placeholder="Your Name"
                  type="text"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="from_email"
                  className="ml-1 text-xs font-bold text-gray-400"
                >
                  Email
                </label>
                <input
                  id="from_email"
                  name="from_email"
                  className="h-12 w-full rounded-xl border border-gray-200 bg-white/95 px-4 text-sm text-neutral-900 placeholder:text-neutral-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 dark:border-white/10 dark:bg-black/30 dark:text-[var(--foreground)] dark:placeholder:text-gray-500"
                  placeholder="example@gmail.com"
                  type="email"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="subject"
                className="ml-1 text-xs font-bold text-gray-400"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                className="h-12 w-full rounded-xl border border-gray-200 bg-white/95 px-4 text-sm text-neutral-900 placeholder:text-neutral-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 dark:border-white/10 dark:bg-black/30 dark:text-[var(--foreground)] dark:placeholder:text-gray-500"
                placeholder="Project Inquiry"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="message"
                className="ml-1 text-xs font-bold text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="h-32 w-full resize-none rounded-xl border border-gray-200 bg-white/95 p-4 text-sm text-neutral-900 placeholder:text-neutral-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 dark:border-white/10 dark:bg-black/30 dark:text-[var(--foreground)] dark:placeholder:text-gray-500"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            {status && (
              <p
                className={
                  status.type === "success"
                    ? "text-green-400"
                    : "text-red-400"
                }
              >
                {status.message}
              </p>
            )}

            <button
              type="submit"
              disabled={sending}
              className={
                "mt-2 flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 font-bold text-white shadow-[0_0_24px_rgba(37,99,235,0.35)] transition-all hover:bg-blue-500 disabled:cursor-wait disabled:opacity-70 " +
                (sending ? "" : "hover:shadow-[0_0_32px_rgba(59,130,246,0.45)]")
              }
            >
              <span>{sending ? "Sending..." : "Send Message"}</span>
              <Send className="h-4 w-4" aria-hidden />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
