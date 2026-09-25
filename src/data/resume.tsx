import { Icons } from "@/components/icons";
import {
  EyeIcon,
  GlobeIcon,
  HomeIcon,
  MailIcon,
  NotebookIcon,
} from "lucide-react";

export const DATA = {
  name: "Amirhossein Goodarzi",
  initials: "AG",
  url: "https://amirgoodarzi.vercel.app",
  location: "Tehran, Iran",
  locationLink: "https://www.google.com/maps/place/tehran",
  description:
    "Senior Front-End Engineer | Full-Stack Developer. Open to on-site roles in Tehran, Iran and remote international opportunities.",
  summary:
    "Senior Front-end Engineer with 5+ years of professional experience building scalable and high-performance web applications using React, Next.js, and TypeScript. Passionate about building applications with a strong focus on performance, code quality, and user experience. Experienced in collaborating closely with Backend, Product, and UI/UX teams in Agile environments. I adapt quickly to new technologies, leverage modern tools, and actively embrace and integrate cutting-edge technologies — including Agentic AI development — to accelerate workflows and deliver high-quality products.",
  avatarUrl: "/me.jpg",
  skills: [
    { name: "TypeScript", icon: Icons.typescript },
    { name: "JavaScript" },
    { name: "React", icon: Icons.react },
    { name: "Next.js", icon: Icons.nextjs },
    { name: "Node.js", icon: Icons.node },
    { name: "Express", icon: Icons.express },
    { name: "PostgreSQL", icon: Icons.postgre },
    { name: "MongoDB", icon: Icons.mongodb },
    { name: "Redis" },
    { name: "Docker", icon: Icons.docker },
    { name: "TanStack Query", icon: Icons.rquery },
    { name: "Zustand" },
    { name: "React Hook Form" },
    { name: "Zod" },
    { name: "Tailwind CSS", icon: Icons.tailwindcss },
    { name: "Shadcn/ui", icon: Icons.shadcn },
    { name: "Chakra UI", icon: Icons.chakra },
    { name: "SCSS", icon: Icons.sass },
    { name: "Bootstrap", icon: Icons.bootstrap },
    { name: "Vitest", icon: Icons.vitest },
    { name: "Playwright" },
    { name: "React Testing Library", icon: Icons.vitest },
    { name: "React Native", icon: Icons.react },
    { name: "Python", icon: Icons.python },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "amirgoodarzi.web@gmail.com",
    tel: "+989056325077",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/amirhosseingoodarzi",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/amir-hossein-goodarzi",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "X",
        url: "https://www.instagram.com/goodarzinio",
        icon: Icons.instagram,
        navbar: true,
      },
      Telegram: {
        name: "Youtube",
        url: "https://t.me/sektowr",
        icon: Icons.telegram,
        navbar: true,
      },
      Whatsapp: {
        name: "Whatsapp",
        url: "https://wa.me/+989056325077",
        icon: Icons.whatsapp,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:amirgoodarzi.web@gmail.com",
        icon: MailIcon,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Kahkeshan Group of Companies",
      href: "https://kahkeshan.ir/",
      badges: ["Full-time", "On-site"],
      location: "Tehran, Iran",
      title: "Front-End Team Lead",
      logoUrl: "/kahkeshan.png",
      start: "May 2021",
      end: "May 2026",
      description:
        "Led a front-end engineering team and established code-review standards across 15+ web applications, improving consistency, maintainability, and adherence to engineering best practices. Streamlined development workflows and standardized the UI architecture, increasing team delivery efficiency by 25% and reducing duplicated implementation. Architected a scalable migration strategy from legacy systems to a Next.js/modern stack, enhancing long-term system stability and performance while fostering team growth through mentorship and technical roadmap planning.",
    },
    {
      company: "DoctorEb",
      href: "https://doctoreb.com/",
      badges: ["Contract-based", "Remote"],
      location: "Isfahan, Iran (Remote)",
      title: "Front-End Developer",
      logoUrl: "/dreb.svg",
      start: "Sep 2026",
      end: "Dec 2026",
      description:
        "Developed an online pharmacy e-commerce platform with a customer-facing shop and a dedicated admin panel for catalog, orders, and inventory management. Built storefront and back-office workflows covering product browsing, checkout, and operational control to support the pharmacy’s digital sales channels.",
    },
    {
      company: "Sama Partners",
      href: "https://sama.partners",
      badges: ["Hourly", "Remote"],
      location: "Toronto, Canada (Remote)",
      title: "Full-Stack Developer",
      logoUrl: "/sama.png",
      start: "May 2026",
      end: "July 2026",
      description:
        "Engineered a 30% reduction in render time for data-intensive modules by integrating Code Splitting, Lazy Loading, and Dynamic Imports combined with modern rendering patterns (SSR/RSC). Elevated technical SEO and runtime responsiveness by auditing asset delivery pipelines, resulting in a more performant and crawlable architecture for content-heavy application interfaces.",
    },
    {
      company: "Behrang Music Academy",
      href: "https://behrangmusic.com",
      badges: ["Contract-based", "Remote"],
      location: "Tehran, Iran (Remote)",
      title: "Full-Stack Developer",
      logoUrl: "/behrang.png",
      start: "April 2026",
      end: "August 2026",
      description:
        "Engineered a robust, end-to-end full-stack platform from inception to deployment, architecting scalable relational database schemas and backend API services to power a centralized digital ecosystem using a Next.js/Turborepo monorepo. Digitized the academy’s traditional service model, implementing secure server-side workflows and automated data-driven pipelines for lead management and registration, which directly fueled a 30% revenue growth and enhanced user engagement.",
    },
    {
      company: "Salona",
      href: "https://mysalona.ir/",
      badges: ["Part-time", "Remote"],
      location: "Tehran, Iran (Remote)",
      title: "Senior Front-End Developer",
      logoUrl: "/salona.png",
      start: "Nov 2024",
      end: "July 2025",
      description:
        "Spearheaded the end-to-end development of a greenfield salon management platform, architecting a scalable frontend capable of reliably supporting 1,000+ active concurrent users. Boosted mobile engagement by 70% by engineering and deploying a high-performance PWA/TWA, delivering a seamless native-like experience across mobile devices while optimizing cross-platform accessibility.",
    },
    {
      company: "Borzabadi Language Center",
      href: "https://new.ibtil.org/",
      badges: ["Contract"],
      location: "Tehran, Iran (Remote)",
      title: "Front-End Developer",
      logoUrl: "/borzabadi.png",
      start: "2023",
      end: "2023",
      description:
        "Developed a specialized online GRE examination platform, simulating the official testing environment. Engineered complex front-end logic to handle all GRE question types, including interactive verbal and quantitative sections, while ensuring high performance and real-time response handling for students.",
    },
    {
      company: "Freelancer",
      href: "",
      badges: [],
      location: "Remote",
      title: "Front-End Developer",
      logoUrl: "/buildspace.jpg",
      start: "2020",
      end: "2021",
      description:
        "Worked with startups and small businesses to design and build responsive websites and web applications using modern front-end technologies. Focused on performance, usability, and maintainable code while delivering complete solutions from UI implementation to deployment.",
    },
  ],
  education: [
    {
      school: "Payame Noor University",
      href: "https://pnu.ac.ir",
      degree: "Master of Software Engineering",
      logoUrl: "/pnu.jpg",
      start: "2021",
      end: "2023",
    },
    {
      school: "Ayatollah Borujerdi University",
      href: "https://abru.ac.ir",
      degree: "Bachelor of Computer Engineering",
      logoUrl: "/abru.jpg",
      start: "2017",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "DoctorEb Pharmacy E-commerce",
      href: "https://doctoreb.com/",
      dates: "Sep 2026 - Dec 2026",
      active: true,
      description:
        "Built an online pharmacy e-commerce platform with a customer-facing shop and an admin panel for catalog, orders, and inventory. Covered product browsing, checkout, and back-office workflows for the pharmacy’s digital storefront.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "TanStack Query",
      ],
      links: [
        {
          type: "Website",
          href: "https://doctoreb.com/",
          icon: <GlobeIcon className="size-3" />,
        },
      ],
      image: "/portfolios/doctoreb.png",
      video: "",
    },
    {
      title: "Sama Partners",
      href: "https://sama.partners",
      dates: "May 2026 - July 2026",
      active: false,
      description:
        "Built a more performant full-stack platform for Sama Partners, cutting render time by 30% in data-intensive modules with code splitting, lazy loading, dynamic imports, and SSR/RSC. Improved technical SEO and runtime responsiveness by auditing asset delivery pipelines for content-heavy interfaces.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Node.js",
        "REST API",
      ],
      links: [
        {
          type: "Website",
          href: "https://sama.partners",
          icon: <GlobeIcon className="size-3" />,
        },
      ],
      image: "/portfolios/sama.png",
      video: "",
    },
    {
      title: "Behrang Music Academy",
      href: "https://behrangmusic.com",
      dates: "April 2026 – August 2026",
      active: false,
      description:
        "Engineered an end-to-end full-stack academy platform in a Next.js/Turborepo monorepo, including scalable relational schemas and backend APIs. Digitized lead management and registration workflows, contributing to 30% revenue growth and stronger user engagement.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Node.js",
        "REST API",
      ],
      links: [
        {
          type: "Website",
          href: "https://behrangmusic.com",
          icon: <GlobeIcon className="size-3" />,
        },
      ],
      image: "/portfolios/behrang.png",
      video: "",
    },
    {
      title: "Danawiz (Interactive Presentation)",
      href: "https://danawiz.ir",
      dates: "2025",
      active: true,
      description:
        "Developed an interactive presentation platform with real-time audience engagement features, including live polls, Q&A, and instant feedback collection using WebSocket-based communication.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Socket.io",
        "TailwindCSS",
        "Zustand",
      ],
      links: [],
      image: "/portfolios/danawiz.png",
      video: "",
    },
    {
      title: "DDSS Secure File Transfer",
      href: "https://gitex2023.kahkeshandana.com/",
      dates: "2024",
      active: false,
      description:
        "Enterprise platform for secure file transfer inside organizations with advanced access control and monitoring capabilities.",
      technologies: [
        "React",
        "SASS",
        "TailwindCSS",
        "Chakra UI",
        "Vite",
        "Axios",
        "React Query",
        ".NET Core",
      ],
      links: [
        {
          type: "Website",
          href: "https://gitex2023.kahkeshandana.com/",
          icon: <GlobeIcon className="size-3" />,
        },
      ],
      image: "/portfolios/dspm_webDrive.jpg",
      video: "",
    },
    {
      title: "Defacement Monitoring",
      href: "https://v2.defacement.ir",
      dates: "2024",
      active: false,
      description:
        "Platform for reporting and monitoring defaced websites and tracking attackers using automated crawlers and security analysis tools.",
      technologies: [
        "React",
        "SASS",
        "TailwindCSS",
        "Chakra UI",
        "Vite",
        "React Query",
        ".NET Core",
      ],
      links: [
        {
          type: "Website",
          href: "https://v2.defacement.ir",
          icon: <GlobeIcon className="size-3" />,
        },
      ],
      image: "/portfolios/defacement.jpg",
      video: "",
    },
    {
      title: "Namapardaz Systems",
      href: "https://namapardaz.com",
      dates: "2023-2024",
      active: false,
      description:
        "Development of multiple internal enterprise systems including automation, ticketing, task management, and HR modules.",
      technologies: [
        "React",
        "TailwindCSS",
        "Axios",
        "React Query",
        ".NET Core",
      ],
      links: [
        {
          type: "Website",
          href: "https://namapardaz.com",
          icon: <GlobeIcon className="size-3" />,
        },
      ],
      image: "/portfolios/namapardaz.png",
      video: "",
    },
    {
      title: "Sanjify Exam",
      href: "https://sanjify.ir",
      dates: "2021-2024",
      active: false,
      description:
        "Large scale online exam platform with monitoring tools and management dashboards for educational institutions.",
      technologies: [
        "React",
        "TailwindCSS",
        "React Query",
        "Axios",
        ".NET Core",
      ],
      links: [
        {
          type: "Website",
          href: "https://sanjify.ir",
          icon: <GlobeIcon className="size-3" />,
        },
      ],
      image: "/portfolios/sanjify.png",
      video: "",
    },
    {
      title: "Dana-intel Risk Management",
      href: "https://panel.danaintel.ir",
      dates: "2023-2023",
      active: false,
      description:
        "AI-powered enterprise risk management platform designed to help organizations monitor threats, analyze risks, and manage security workflows.",
      technologies: [
        "Next.js",
        "React",
        "TailwindCSS",
        "React Query",
        "React Hook Form",
        "Axios",
        ".NET Core",
      ],
      links: [
        {
          type: "Website",
          href: "https://panel.danaintel.ir",
          icon: <GlobeIcon className="size-3" />,
        },
      ],
      image: "/portfolios/danaintel.png",
      video: "",
    },
    {
      title: "Ibtil GRE & IELTS",
      href: "https://new.ibtil.org",
      dates: "2023",
      active: false,
      description:
        "Online examination platform for GRE and IELTS preparation with interactive testing environments and analytics.",
      technologies: [
        "React",
        "SASS",
        "TailwindCSS",
        "React Query",
        "React Hook Form",
        "Axios",
        "Vite",
      ],
      links: [
        {
          type: "Website",
          href: "https://new.ibtil.org",
          icon: <GlobeIcon className="size-3" />,
        },
      ],
      image: "/portfolios/greitelts.png",
      video: "",
    },
    {
      title: "Inspection Service System",
      href: "https://inspectionservice.ir",
      dates: "2023",
      active: false,
      description:
        "Platform designed for managing inspection services, requests, reports, and operational workflows.",
      technologies: [
        "React",
        "TailwindCSS",
        "Axios",
        "React Query",
        ".NET Core",
      ],
      links: [
        {
          type: "Website",
          href: "https://inspectionservice.ir",
          icon: <GlobeIcon className="size-3" />,
        },
      ],
      image: "/portfolios/msepi.png",
      video: "",
    },
    {
      title: "Online Exam",
      href: "https://exam.kahkeshan.com",
      dates: "2023",
      active: false,
      description:
        "Web platform for conducting secure online exams with monitoring tools and interactive student experience.",
      technologies: [
        "React",
        "TailwindCSS",
        "React Query",
        "Reactour",
        "React Haiku",
        "Vite",
        "Axios",
        ".NET Core",
      ],
      links: [
        {
          type: "Website",
          href: "https://exam.kahkeshan.com",
          icon: <GlobeIcon className="size-3" />,
        },
      ],
      image: "/portfolios/knexam.png",
      video: "",
    },
    {
      title: "Danawan",
      href: "https://danawan.ir",
      dates: "2022",
      active: false,
      description:
        "Corporate website for Danawan focused on presenting company products, services, and technical capabilities.",
      technologies: ["React", "SASS", "Bootstrap"],
      links: [
        {
          type: "Website",
          href: "https://danawan.ir",
          icon: <GlobeIcon className="size-3" />,
        },
      ],
      image: "/portfolios/danawan.png",
      video: "",
    },
    {
      title: "Kahkeshan Group",
      href: "https://kahkeshan.com",
      dates: "2022",
      active: false,
      description:
        "Corporate website built to introduce Kahkeshan Group services, products, and organizational structure.",
      technologies: ["React", "SASS", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://kahkeshan.com",
          icon: <GlobeIcon className="size-3" />,
        },
      ],
      image: "/portfolios/kahkeshan.png",
      video: "",
    },
    {
      title: "Playkon Mobile Application",
      href: "",
      dates: "2021-2022",
      active: false,
      description:
        "Mobile gaming platform built with React Native providing a social and interactive environment for players.",
      technologies: ["React Native", "Expo", "TypeScript"],
      links: [
        {
          type: "Mobile App",
          href: "https://playkon.ir/",
          icon: <GlobeIcon className="size-3" />,
        },
      ],
      image: "/portfolios/playkon.png",
      video: "",
    },
    {
      title: "NEO Game Telegram Bot",
      href: "",
      dates: "2020",
      active: false,
      description:
        "Telegram-based game bot designed to deliver an interactive gaming experience directly within the Telegram platform.",
      technologies: ["Node.js", "Telegram Bot API"],
      links: [
        {
          type: "Telegram Bot",
          href: "#",
          icon: <Icons.telegram className="size-3" />,
        },
      ],
      image: "/portfolios/telegrambot.png",
      video: "",
    },
    {
      title: "IliaTeb Medical Website",
      href: "https://iliateb.com",
      dates: "2019",
      active: false,
      description:
        "Corporate medical website developed for IliaTeb to showcase products, services, and company information.",
      technologies: ["WordPress", "CSS", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "https://iliateb.com",
          icon: <GlobeIcon className="size-3" />,
        },
      ],
      image: "/portfolios/iliateb.png",
      video: "",
    },
  ],
  certificates: [
    {
      title: "Reactjs",
      dates: "September 31th, 2019",
      location: "",
      image: "/sharif-logo.png",
      links: [
        {
          title: "View certificate",
          icon: <EyeIcon className="h-4 w-4" />,
          href: "/certificates/sharif.png",
        },
        {
          title: "Sharif university of technology",
          icon: <GlobeIcon className="h-4 w-4" />,
          href: "https://www.sharif.ir/",
        },
      ],
    },
    {
      title: "Front-end development",
      dates: "July 11, 2019",
      location: "",
      image: "/tehran-uni.svg",
      links: [
        {
          title: "View certificate",
          icon: <EyeIcon className="h-4 w-4" />,
          href: "/certificates/tehran.png",
        },
        {
          title: "Tehran university",
          icon: <GlobeIcon className="h-4 w-4" />,
          href: "https://ut.ac.ir/",
        },
      ],
    },
    {
      title: "Front-end development",
      dates: "September 2nd, 2022",
      location: "",
      image: "/meta.jpg",
      links: [
        {
          title: "View certificate",
          icon: <EyeIcon className="h-4 w-4" />,
          href: "/certificates/meta-frontEnd-intro.jpg",
        },
        {
          title: "Meta",
          icon: <GlobeIcon className="h-4 w-4" />,
          href: "https://www.meta.com",
        },
      ],
    },
    {
      title: "Javascript Algorithm and data structure",
      dates: "September 20th, 2022",
      location: "",
      image: "/fcc.jpg",
      links: [
        {
          title: "View certificate",
          icon: <EyeIcon className="h-4 w-4" />,
          href: "/certificates/jsAlgorithms.png",
        },
        {
          title: "Free Code Camp",
          icon: <GlobeIcon className="h-4 w-4" />,
          href: "https://www.freecodecamp.org/certification/AmirHosseinGoodarzi/javascript-algorithms-and-data-structures",
        },
      ],
    },
    {
      title: "Responsive web design",
      dates: "September 24th, 2022",
      location: "",
      image: "/fcc.jpg",
      links: [
        {
          title: "View certificate",
          icon: <EyeIcon className="h-4 w-4" />,
          href: "/certificates/responsive.png",
        },
        {
          title: "Free Code Camp",
          icon: <GlobeIcon className="h-4 w-4" />,
          href: "https://www.freecodecamp.org/certification/AmirHosseinGoodarzi/javascript-algorithms-and-data-structures",
        },
      ],
    },
    {
      title: "JQuery",
      dates: "July 13th, 2019",
      location: "",
      image: "/sololearn.png",
      links: [
        {
          title: "View certificate",
          icon: <EyeIcon className="h-4 w-4" />,
          href: "/certificates/jquery.png",
        },
        {
          title: "Solo learn academy",
          icon: <GlobeIcon className="h-4 w-4" />,
          href: "https://www.sololearn.com/",
        },
      ],
    },
    {
      title: "Javascript",
      dates: "July 13th, 2019",
      location: "",
      image: "/sololearn.png",
      links: [
        {
          title: "View certificate",
          icon: <EyeIcon className="h-4 w-4" />,
          href: "/certificates/js.png",
        },
        {
          title: "Solo learn academy",
          icon: <GlobeIcon className="h-4 w-4" />,
          href: "https://www.sololearn.com/",
        },
      ],
    },
    {
      title: "CSS",
      dates: "July 11th, 2019",
      location: "",
      image: "/sololearn.png",
      links: [
        {
          title: "View certificate",
          icon: <EyeIcon className="h-4 w-4" />,
          href: "/certificates/css.png",
        },
        {
          title: "Solo learn academy",
          icon: <GlobeIcon className="h-4 w-4" />,
          href: "https://www.sololearn.com/",
        },
      ],
    },
    {
      title: "HTML",
      dates: "March 16th, 2019",
      location: "",
      image: "/sololearn.png",
      links: [
        {
          title: "View certificate",
          icon: <EyeIcon className="h-4 w-4" />,
          href: "/certificates/html.png",
        },
        {
          title: "Solo learn academy",
          icon: <GlobeIcon className="h-4 w-4" />,
          href: "https://www.sololearn.com/",
        },
      ],
    },
  ],
} as const;
