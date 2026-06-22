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
  url: "https://amirhosseingoodarzi.vercel.app",
  location: "Tehran, Iran",
  locationLink: "https://www.google.com/maps/place/tehran",
  description:
    "Full-Stack Developer with a strong focus on front-end engineering, building fast, scalable, and user-focused web applications with modern technologies.",
  summary:
    "Full-Stack Developer with 5+ years of experience, primarily focused on front-end development. I build fast, scalable, and user-focused web applications using React, Next.js, and TypeScript, while also working with Node.js on the back end. I adapt quickly to new technologies and leverage modern tools—including AI-assisted development—to accelerate workflows and deliver high-quality products.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: Icons.react },
    { name: "Next.js", icon: Icons.nextjs },
    { name: "TypeScript", icon: Icons.typescript },
    { name: "Shadcn/ui", icon: Icons.shadcn },
    { name: "Tanstack Query", icon: Icons.rquery },
    { name: "Tailwind CSS", icon: Icons.tailwindcss },
    { name: "Chakra UI", icon: Icons.chakra },
    { name: "Bootstrap", icon: Icons.bootstrap },
    { name: "SASS", icon: Icons.sass },
    { name: "Node.js", icon: Icons.node },
    { name: "Express", icon: Icons.express },
    { name: "Postgre SQL", icon: Icons.postgre },
    { name: "Mongo DB", icon: Icons.mongodb },
    { name: "Docker", icon: Icons.docker },
    { name: "React Native", icon: Icons.react },
    { name: "Vitest", icon: Icons.vitest },
    { name: "React Testing Library", icon: Icons.vitest },
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
      company: "Sama Partners",
      href: "https://sama.partners",
      badges: ["Part-time", "Remote"],
      location: "Toronto, Canada (Remote)",
      title: "Full-Stack Developer",
      logoUrl: "/sama.png",
      start: "May 2026",
      end: "Present",
      description:
        "Working remotely with a Toronto-based team to design and develop internal dashboards, admin panels, and company web platforms. Building scalable full-stack solutions with modern front-end technologies while integrating backend services and APIs to support business operations and internal workflows.",
    },
    {
      company: "Behrang Music Academy",
      href: "https://behrangmusic.com",
      badges: ["Contract"],
      location: "Remote",
      title: "Full-Stack Developer",
      logoUrl: "/behrang.png",
      start: "April 2026",
      end: "Present",
      description:
        "Developing a large-scale online platform for a music education academy, including the main website, learning platform, and management tools. Responsible for implementing modern front-end architecture and integrating backend services to support courses, content delivery, and user management.",
    },
    {
      company: "Kahkeshan Group of Companies",
      href: "https://kahkeshan.ir/",
      badges: [],
      location: "Tehran, Iran",
      title: "Front-End Team Lead",
      logoUrl: "/kahkeshan.png",
      start: "May 2021",
      end: "May 2026",
      description:
        "Leading the front-end development team and overseeing 15+ diverse web applications, ranging from high-security platforms and banking systems to large-scale ERP solutions. As a Front-End Code Reviewer, I ensure high code quality, performance, and maintainability across all projects. I collaborate with cross-functional teams to architect scalable solutions using React, Next.js, and TypeScript, while mentoring junior developers and driving technical excellence in enterprise-grade products.",
    },
    {
      company: "Salona",
      href: "https://mysalona.ir/",
      badges: ["Remote"],
      location: "Remote",
      title: "Senior Front-End Developer",
      logoUrl: "/salona.png",
      start: "Nov 2024",
      end: "Jul 2025",
      description:
        "Architected and developed a comprehensive salon management platform from the ground up, featuring an end-to-end online appointment system, digital business cards, and advanced reporting tools. Implemented the platform as a PWA (Progressive Web App) and TWA (Trusted Web Activity) to provide a seamless mobile experience for thousands of active users. Managed the full lifecycle of salon and user management modules while collaborating with a team of 10+ developers and conducting code reviews to ensure scalability and high-performance delivery.",
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
      title: "Sama Partners Platform",
      href: "https://sama.partners",
      dates: "2024 - Present",
      active: true,
      description:
        "Developing a full-stack business platform including internal dashboards, admin panels, and the company website for Sama Partners. Focused on scalable architecture and modern front‑end development to support internal workflows and business operations.",
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
      title: "Behrang Music Academy Platform",
      href: "https://behrangmusic.com",
      dates: "2025 - Present",
      active: true,
      description:
        "Building a large-scale online music education platform including the main academy website, learning system, and management tools for courses and students with a modern scalable architecture.",
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
      title: "Danawiz (Interactive Presentation Platform)",
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
      dates: "2023",
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
      title: "Defacement Monitoring Platform",
      href: "https://v2.defacement.ir",
      dates: "2023",
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
      title: "Online Exam Platform",
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
      title: "Ibtil GRE & IELTS",
      href: "https://new.ibtil.org",
      dates: "2022",
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
      title: "DanaIntel Risk Management Platform",
      href: "https://panel.danaintel.ir",
      dates: "2022",
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
      title: "Kahkeshan Company Website",
      href: "https://kahkeshan.com",
      dates: "2021",
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
      title: "Sanjify Exam Platform",
      href: "https://sanjify.ir",
      dates: "2024",
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
      title: "Namapardaz Systems",
      href: "https://namapardaz.com",
      dates: "2024",
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
      title: "Danawan Company Website",
      href: "https://danawan.ir",
      dates: "2021",
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
      title: "Playkon Mobile Application",
      href: "",
      dates: "2021",
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
