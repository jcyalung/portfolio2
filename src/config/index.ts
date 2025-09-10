import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "jcyalung",
  author: "Joshua Yalung",
  description:
    "Computer Science undergraduate based in Newark, CA. I specialize in Agile software development, computational biology, and machine learning/artificial intelligence. Check out my website!",
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
    specialty: "Software Engineer/Researcher",
    summary:
      "Computer Science undergraduate based in Newark, CA. I specialize in Agile software development, computational biology, and machine learning/artificial intelligence.",
    email: "jyalung1@uci.edu",
    linkedin: "https://www.linkedin.com/in/jcyal/",
    github: "https://github.com/jcyalung",
  },
  experience: [
    {
      company: "Hitachi Vantara",
      position: "Software Engineer Intern",
      startDate: "Aug 2024",
      endDate: "Present",
      summary: [
        "Created an educational dashboard with Microsoft PowerBI and Azure to generate data summaries on employee training and hours logged, optimizing application performance by 32% and enhancing reporting access, increasing insight retrieval 2x faster.",
        "Developed a C++ script to generate training paths based on employee's career path, using data structures such as decision trees to auto-generate training paths, cutting manual planning time by 13%. The application is currently being utilized to manage all Hitachi Vantara employees (10k).",
        "I am returning this fall and joining the Services team, fine-tuning LLMs as support agents for Hitachi's storage platforms and educational services.",
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
      company: "Stanford University",
      position: "Website Developer",
      startDate: "June 2025",
      endDate: "Present",
      summary: [
        "I led development for The NOURISH Project, where I streamlined web workflows by introducing a digital asset system (DAS) and content management system (CMS). I also ran training sessions that helped teams manage, reuse, and publish assets more efficiently — boosting available server storage by 40% and accelerating development by 80%.",
        "I authored a 30-page document detailing step-by-step processes to add content to the website for members to use. I also wrote Javascript code to allow members to automatically render PDFs and images on the website, increasing website traffic by 56% and user satisfaction by 34%.",
      ],
    },
  ],
  projects: [
    {
      name: "Kape Chat",
      summary: "Award winning solution for a professional mentorship platform.",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/kapechat.png",
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
    languages:"Python, Java, JavaScript, C++, SQL, R, MATLAB, PowerScript, Batch, TypeScript, HTML, CSS",
    frameworks:"JUnit, Git, GitHub, Arduino, MongoDB, Firestore, scikit-learn, biopython, Scrum, Jira, FastAPI, Next, Vite, React, Requests, Tailwind, Express, Astro, Fastify, Jupyter, PyTorch, Pandas, MongoDB, MySQL, SQLite, Supabase, Docker, Nginx, Figma",
    interests:"agile development, cloud computing, bioinformatics, computational biology, AI/ML, education, badminton, basketball",
  },
  about: {
    description: `
      Hi! My name is Joshua Yalung, an aspiring software engineer studying Computer Science at UC Irvine. I am currently the Academics Director for FUSION at UCI and a website developer for Stanford University.

      I'm proficient in agile software development, computational biology, full stack, AI and ML, and more. I'm also experienced in cooking. Current interests include the human genome project and HCM solutions.

      This fall I am at Hitachi Vantara in Santa Clara, joining the Services team.
      My projects include artificial intelligence and machine learning applications, as well as logging and tracking solutions for organizations.
    `,
    image: "/josh-big.png",
  },
};

// #5755ff
