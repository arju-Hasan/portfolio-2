"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

const certifications = [
  {
    title: "Complete Web Development",
    issuer: "Programming Hero",
    date: "June 2024",
    link: "https://drive.google.com/file/d/1DrO13QqVb5KbtVtFIxN4CkT5bS0ilUl0/view?usp=sharing",
    image: "/Complete Web Development.jpg",
  },
  {
    title: "Front-End Development",
    issuer: "Enhancing Digital Government and Economy through ICT Skills",
    date: "Jan 2025",
    link: "https://drive.google.com/file/d/1OBKny_3P_St2d28KWS2NHc6BWAMjEkcK/view?usp=sharing",
    image: "/Front-End Development.jpg",
  },
  {
    title: "Communication Secrets",
    issuer: "10 Minute School",
    date: "June 2024",
    link: "https://drive.google.com/file/d/1OBKny_3P_St2d28KWS2NHc6BWAMjEkcK/view?usp=sharing",
    image: "/Communication Secrets.jpg",
  },
  {
    title: "Front-End Development",
    issuer: "Enhancing Digital Government and Economy through ICT Skills",
    date: "Jan 2025",
    link: "https://drive.google.com/file/d/1OBKny_3P_St2d28KWS2NHc6BWAMjEkcK/view?usp=sharing",
    image: "/Front-End Development.jpg",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-6xl bg-gray-950/20 px-4 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 text-center text-4xl font-bold md:text-5xl"
      >
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          Certifications
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-16 text-center text-gray-400"
      >
        Some courses I actually completed instead of just bookmarking them –
        fancy certificates!
      </motion.p>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="certifications-swiper"
      >
        {certifications.map((cert, index) => (
          <SwiperSlide key={`${cert.title}-${index}`}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-50 w-full cursor-pointer overflow-hidden rounded-xl border border-gray-800 bg-gray-900/60 transition-all hover:border-purple-500/50"
              onClick={() => window.open(cert.link, "_blank")}
            >
              {/* Certificate Image */}
              {cert.image && (
                <div className="relative h-full w-full">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <div className="text-center px-4">
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {cert.title}
                  </h3>
                  <p className="mb-3 text-sm text-gray-300">{cert.issuer}</p>
                  <p className="mb-4 text-blue-400 font-medium">{cert.date}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="inline-block rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-purple-700"
                  >
                    Verify →
                  </a>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
