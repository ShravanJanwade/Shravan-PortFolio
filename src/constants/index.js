import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  python,
  docker,
  graphql,
  java,
  springboot,
  mysql,
  git,
  thdp,
  upskillz,
  indoskill,
  Snapgram,
  KBC,
  ProCollab,
  Rohit,
  Ritesh,
  Karthik
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Work",
    title: "Work",
  },
  {
    id: "Projects",
    title: "Projects",
  },
  {
    id: "Resume",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const myProjects = [
  {
    title: "Podcastr - AI Podcast Platform",
    desc: "Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.",
    subdesc:
      "Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.",
    href: "https://www.youtube.com/watch?v=zfAb95tJvZQ",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "LiveDoc - Real-Time Google Docs Clone",
    desc: "LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.",
    subdesc:
      "With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.",
    href: "https://www.youtube.com/watch?v=y5vE8y_f_OM",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "CarePulse - Health Management System",
    desc: "An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.",
    subdesc:
      "With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.",
    href: "https://www.youtube.com/watch?v=lEflo_sc82g",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Horizon - Online Banking Platform",
    desc: "Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.",
    subdesc:
      "Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.",
    href: "https://www.youtube.com/watch?v=PuOVqP_cjkE",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Imaginify - AI Photo Manipulation App",
    desc: "Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.",
    subdesc:
      "Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.",
    href: "https://www.youtube.com/watch?v=Ahwoks_dawU",
    texture: "/textures/project/project5.mp4",
    logo: "/assets/project-logo5.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
];

const services = [
  {
    title: "Web Developer",
    description: "Create Full responsive web pages and ui design.",
    icon: web,
  },
  {
    title: "React  Developer",
    description: "Can create single page application using reactjs.",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    description: "Design and build entire database and backend api.",
    icon: backend,
  },
  {
    title: "Problem Solver",
    description:
      "Critical Thinking and solve problem by thinking outside the box.",
    icon: backend,
  },
];
const technologies = [
  {
    name: "HTML 5",
    icon: html,
    level: 90,
    color: "from-orange-400 to-red-500",
    category: "Frontend",
    experience: "4+ years",
  },
  {
    name: "CSS 3",
    icon: css,
    level: 85,
    color: "from-blue-400 to-indigo-500",
    category: "Frontend",
    experience: "4+ years",
  },
  {
    name: "JavaScript",
    icon: javascript,
    level: 95,
    color: "from-yellow-400 to-yellow-600",
    category: "Language",
    experience: "4+ years",
  },
  {
    name: "React JS",
    icon: reactjs,
    level: 80,
    color: "from-cyan-400 to-blue-500",
    category: "Frontend",
    experience: "3+ years",
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    level: 70,
    color: "from-purple-400 to-purple-600",
    category: "State Management",
    experience: "3+ years",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    level: 60,
    color: "from-teal-400 to-green-500",
    category: "Frontend",
    experience: "2+ years",
  },
  {
    name: "Node JS",
    icon: nodejs,
    level: 85,
    color: "from-green-400 to-green-600",
    category: "Backend",
    experience: "3+ years",
  },
  {
    name: "Java",
    icon: java,
    level: 80,
    color: "from-red-400 to-red-600",
    category: "Language",
    experience: "3+ years",
  },
  {
    name: "Spring Boot",
    icon: springboot,
    level: 65,
    color: "from-green-400 to-green-700",
    category: "Framework",
    experience: "2+ years",
  },
  {
    name: "MySQL",
    icon: mysql,
    level: 80,
    color: "from-blue-400 to-blue-600",
    category: "Database",
    experience: "3+ years",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    level: 70,
    color: "from-green-400 to-green-600",
    category: "Database",
    experience: "2+ years",
  },
  {
    name: "Python",
    icon: python,
    level: 90,
    color: "from-yellow-400 to-yellow-600",
    category: "Language",
    experience: "3+ years",
  },
  {
    name: "Git",
    icon: git,
    level: 95,
    color: "from-red-400 to-red-600",
    category: "Tool",
    experience: "4+ years",
  },
  // New skills added
  {
    name: "TypeScript",
    icon: typescript,
    level: 85,
    color: "from-blue-400 to-indigo-500",
    category: "Language",
    experience: "3+ years",
  },
  {
    name: "Docker",
    icon: docker,
    level: 70,
    color: "from-blue-500 to-blue-700",
    category: "DevOps",
    experience: "2+ years",
  },
  {
    name: "GraphQL",
    icon: graphql,
    level: 65,
    color: "from-pink-400 to-purple-500",
    category: "API",
    experience: "2+ years",
  },
];


const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Torry Harris Integration Solutions",
    icon: thdp,
    iconBg: "#383E56",
    date: "March 2024 - July 2025",
    points: [
      "Was Part of Torry harris digit product team and built the frontend and ui for torry harris marketplace",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Contributed Significantly to the organization's own learning management system frontend and ui using react and material tailwind.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Torry Harris Integration Solutions",
    icon: thdp,
    iconBg: "#E6DEDD",
    date: "September 2023 - March 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Build Project and task management system called pro collab used in the organization",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Aritfical Intelligence and Machine Learning intern",
    company_name: "IndoSkillz",
    icon: indoskill,
    iconBg: "#383E56",
    date: "July 2022 - September 2022",
    points: [
      "Learnt About the Use case of AI and Ml and it advantages and disadvantages",
      "Learnt about the building ai models using python and it's libraries like pandas,sci-kit learn,matplotlib etc..",
      "Build mulitple Machine Learning projects like employee salary prediction using linear regression",
      "Created mulitple contribution in researching the ml models and improving it's efficency",
    ],
  },
  {
    title: "Full stack Developer intern",
    company_name: "Upskillz",
    icon: upskillz,
    iconBg: "#E6DEDD",
    date: "February 2022 - March 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Created fronted projects like clone of google keep and many other static pages.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Learnt many frontend technologies like html,css,js and bootstrap and implemented in real life projects.",
    ],
  },
];

const testimonials = [
 
  {
    testimonial:
      "Shravan brings a rare combination of technical expertise and design finesse. His collaborative approach has significantly improved our team's productivity and project outcomes.",
    name: "Ritesh Rao V",
    designation: "Full Stack Developer",
    company: "Torry Harris Integration Solutions",
    image: Ritesh,
    link:'https://www.linkedin.com/in/ritesh-rao-v-6251b5191/'
  },
  {
    testimonial:
      "Shravan’s frontend contributions have elevated the quality of our projects. His designs not only look great but are also highly functional, helping us exceed client expectations.",
    name: "Karthik Kavathekar",
    designation: "Backend Developer",
    company: "Torry Harris Integration Solutions",
    image: Karthik,
    link:'https://www.linkedin.com/in/karthik-kavathekar-807963227/'
  }, {
    testimonial:
      "Working with Shravan on our internal tools was a game-changer. His ability to create intuitive, visually appealing interfaces is unmatched. He truly understands the user's perspective.",
    name: "Rohit Biradar",
    designation: "Spring Boot Developer",
    company: "Torry Harris Integration Solutions",
    image: Rohit,
    link:'https://www.linkedin.com/in/rohit-biradar-46b53a245/'
  }
];


const projects = [
  {
    name: "Pro Collab",
    description:
      "Developed a project and task management system for small organizations to streamline project tracking, delegation, and status monitoring. Features include a centralized dashboard for employee progress, story points management, and an integrated chat system.",
    tags: [
      {
        name: "java",
        color: "pink-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "thymeleaf",
        color: "green-text-gradient",
      },
    ],
    image: ProCollab,
    source_code_link:
      "https://github.com/ShravanJanwade/Pro-Collab-Application",
  },
  {
    name: "Snapgram",
    description:
      "Developed a social media platform designed for tech enthusiasts to post, update, and delete opinions on technology topics. Features include connecting with other tech professionals, managing a tech-focused social channel, and an integrated AI bot for chatting and content management",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "app-write",
        color: "green-text-gradient",
      },
      {
        name: "material tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Snapgram,
    source_code_link: "https://github.com/ShravanJanwade/InstaChat",
  },
  {
    name: "Kaun Banega Crorepati",
    description:
      'Developed a web application replicating the popular "TV show Who Wants to Be a Millionaire". Features include lifelines, AI-generated expert advice, and a wide range of questions across various topics. The game tracks scores and incorporates sound effects to provide an immersive gaming experience.',
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "material Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
    ],
    image: KBC,
    source_code_link: "https://github.com/ShravanJanwade/KBC",
  },
];

export { services, technologies, experiences, testimonials, projects };
