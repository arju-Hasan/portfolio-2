export type ProjectItem = {
  slug: string;
  title: string;
  liveUrl: string;
  /** When true, source is not linked (private repositories). */
  gitPrivate?: boolean;
  gitUrl?: string;
  img: string;
  description: string;
  tech: string[];
};

const projects: ProjectItem[] = [
  {
    slug: "agritech",
    title: "AgriTech",
    liveUrl: "https://agritech-client.vercel.app/",
    gitPrivate: true,
    img: "https://i.ibb.co.com/GQSWtcBw/Screenshot-2026-03-30-040022.png",
    description:
      "Smart agriculture platform: AI-driven crop insights, soil health, disease detection, irrigation ideas, marketplace, and bilingual (EN/BN) experience. Client and server code are kept in private GitHub repositories.",
    tech: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
  },
  {
    slug: "alibzon.com",
    title: "Alibzon",
    liveUrl: "https://alib-zon-client.vercel.app/",
    gitUrl: "https://github.com/arju-Hasan/Alibzon.com",
    img: "https://i.ibb.co.com/d4zf7QZ8/Screenshot-2026-03-30-035810.png",
    description:
      "Full-featured fashion e-commerce: product catalog, cart, checkout, JWT auth, Stripe payments, Cloudinary images, and admin tools.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "JWT", "Stripe", "Cloudinary"],
  },
  {
    slug: "e-tuitionbd",
    title: "E-TuitionBD",
    liveUrl: "https://e-tuitionbd.web.app",
    gitUrl: "https://github.com/arju-Hasan/E-Tuition-BD",
    img: "https://i.ibb.co/nqYsRbQp/Screenshot-2026-01-05-064908.png",
    description:
      "Tutoring platform to find tutors, post jobs and connect students with tutors.",
    tech: [
      "React",
      "Firebase",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Express.js",
    ],
  },
  {
    slug: "eco-nature",
    title: "Eco Nature",
    liveUrl: "https://eco-nature-client.web.app",
    gitUrl: "https://github.com/arju-Hasan/Eco-Nature-Client",
    img: "https://i.ibb.co/JRzrbgh3/Screenshot-2026-01-05-064244.png",
    description:
      "Sustainability tracker and community challenges to reduce environmental impact.",
    tech: [
      "React",
      "Firebase",
      "Admin SDK",
      "JWT Verification",
      "Tailwind CSS",
    ],
  },
  {
    slug: "bookhub",
    title: "BookHub",
    liveUrl: "https://bookhub-bd.netlify.app",
    gitUrl: "https://github.com/arju-Hasan/book-hub",
    img: "https://i.ibb.co/hxKNM6Xg/Screenshot-2026-01-05-064402.png",
    description:
      "Book listing and detail pages with searching and browsing features.",
    tech: ["React", "Netlify", "Tailwind CSS", "MongoDB"],
  },
  {
    slug: "responsive-flowers",
    title: "Responsive Flowers",
    liveUrl: "https://arju-hasan.github.io/Responsive-Flowers",
    gitUrl: "https://github.com/arju-Hasan/Responsive-Flowers",
    img: "https://i.ibb.co/kVm67N5d/Screenshot-2026-01-05-064752.png",
    description:
      "Static responsive flower shop demo built with plain HTML, CSS and Git.",
    tech: ["HTML", "CSS", "Tailwind CSS", "GitHub"],
  },
];

export default projects;
