import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "jcyalung",
  author: "Joshua Yalung",
  description:
    "Computer Science undergraduate based in Newark, CA. I specialize in agile software development, medical embedded software, computational biology, and machine learning/artificial intelligence. Check out my website!",
  lang: "en",
  siteLogo: "/josh-small.png",
  navLinks: [
    { text: "experience", href: "#experience" },
    { text: "projects", href: "#projects" },
    { text: "skills", href: "#skills" },
    { text: "about", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/jcyal/" },
    { text: "Github", href: "https://github.com/jcyalung" },
    { text: "Email", href: "mailto:jyalung1@uci.edu" },
  ],
  socialImage: "/",
  canonicalURL: "https://jcyalung.com",
};

export const SITE_CONTENT: SiteContent = {
  hero: { 
    name: "Joshua Yalung",
    specialty: "Medical/Health Tech Software Engineer",
    summary:
      "Computer Science undergraduate based in Newark, CA. I specialize in digital health software, ERP, and machine learning/artificial intelligence.",
    email: "jyalung1@uci.edu",
    linkedin: "https://www.linkedin.com/in/jcyal/",
    github: "https://github.com/jcyalung",
  },
  experience: [
    {
      company: "Alcon",
      position: "Software Engineer Intern",
      startDate: "Incoming",
      summary: [
        "Incoming summer 2026 under the Digital Health Software team.",
      ],
    },
    {
      company: "FUSION at UCI",
      position: "Project Manager",
      startDate: "July 2025",
      endDate: "Present",
      summary: [
        "I am the project manager for FUSION at UCI, working with a team of 4 developers and 1 designer to create a digital study tracking application for an organization of 300 members. As the project manager, I lead sprint planning, managing 40+ GitHub tasks with 100% on-time completion.",
        "I also trained developers and designers on frameworks such as Next.JS, GitHub, and Figma through documentation and videos, reducing onboarding time by 50% and boosting productivity and collaboration.",
      ]
      },
    {
      company: "Hitachi Vantara",
      position: "Software Engineer Intern",
      startDate: "Aug 2024",
      endDate: "Aug 2025",
      summary: [
        "Created an educational dashboard with Microsoft PowerBI and Azure to generate data summaries on employee training and hours logged, optimizing application performance by 32% and enhancing reporting access, increasing insight retrieval 2x faster.",
        "Developed a C++ script to generate training paths based on employee's career path, using data structures such as decision trees to auto-generate training paths, cutting manual planning time by 13%. The application is currently being utilized to manage all Hitachi Vantara employees (10k).",
      ],
    },
    
  ],
  projects: [
    {
      name: "Fu-Stamps",
      summary: "Premier solution for stamp card and attendance logging.",
      linkSource: "https://github.com/jcyalung/fu-stamps",
      image: "/fu-stamps.png",
    },
    {
      name: "senti-IMDB",
      summary: "A sentiment analyzer using NLP for IMDB Movie Reviews.",
      linkSource: "https://github.com/jcyalung/senti-IMDB",
      image: "/senti.png",
    },
    {
      name: "AntEDU",
      summary: "A course planning/scheduling chatbot service for UC Irvine students.",
      linkSource: "https://github.com/jcyalung",
      image: "/anteater.png",
    },
  ],
  skills: {
    languages:"Python, Java, Javascript, C++, SQL, R, MATLAB, PowerScript, Batch, TypeScript",
    frameworks:"JUnit, Git, GitHub, Arduino, MongoDB, Firestore, scikit-learn, biopython, Scrum, Jira, FastAPI, Next, Express, Astro, Fastify, Jupyter, PyTorch, Supabase, Docker, Nginx",
    interests:"agile development, cloud computing, medical embedded systems, bioinformatics, computational biology, AI/ML, education, badminton, basketball",
  },
  about: {
    description: `
      Hi! My name is Joshua Yalung, an aspiring software engineer studying Computer Science at UC Irvine. I am currently the Academics Director for FUSION at UCI. Last fall I was at Hitachi Vantara working under the Services team.
      I'm proficient in agile software development, computational biology, full stack, AI and ML, and more. I also love cooking. Current interests include the human genome project, HCM solutions, and medical embedded software.

      This summer I am at Alcon in Fort Worth, Texas, joining the Digital Health Software team.
      My projects include artificial intelligence and machine learning applications, as well as logging and tracking solutions for organizations.
    `,
    image: "/josh-big.png",
  },
};

// #5755ff
