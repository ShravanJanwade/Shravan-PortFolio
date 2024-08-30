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
  java,
  springboot,
  mysql,
  carrent,
  jobit,
  tripguide,
  git,
  thdp,
  upskillz,
  indoskill,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "Resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];
const technologies = [
  {
    name: "HTML 5",
    icon: html,
    description:
      "Hyper-text Markup Language (HTML) is the standard markup language for creating web pages and web applications.",
    foundation: 90,
    intermediate: 70,
    advance: 50,
    docs: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    popularity: 77, // based on Stack Overflow Developer Survey 2024
    activeUsers: "1,136,000,000", // Approximate active users based on recent data
  },
  {
    name: "CSS 3",
    icon: css,
    description:
      "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in HTML or XML.",
    foundation: 85,
    intermediate: 75,
    advance: 60,
    docs: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    popularity: 66, // based on Stack Overflow Developer Survey 2024
    activeUsers: "1,136,000,000", // Approximate active users based on recent data
  },
  {
    name: "JavaScript",
    icon: javascript,
    description:
      "JavaScript is a high-level, just-in-time compiled, and multi-paradigm programming language known for its use in web development.",
    foundation: 95,
    intermediate: 90,
    advance: 80,
    docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    popularity: 94, // based on Stack Overflow Developer Survey 2024
    activeUsers: "1,600,000,000", // Approximate active users based on recent data
  },
  {
    name: "React JS",
    icon: reactjs,
    description:
      "React is a popular JavaScript library for building user interfaces, particularly single-page applications where data can change over time without reloading the page.",
    foundation: 80,
    intermediate: 70,
    advance: 60,
    docs: "https://reactjs.org/",
    popularity: 50, // based on Stack Overflow Developer Survey 2024
    activeUsers: "400,000,000", // Approximate active users based on recent data
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    description:
      "Redux Toolkit is a library that provides a standardized way to manage state in JavaScript applications, especially with React.",
    foundation: 70,
    intermediate: 60,
    advance: 50,
    docs: "https://redux-toolkit.js.org/",
    popularity: 25, // based on Stack Overflow Developer Survey 2024
    activeUsers: "100,000,000", // Approximate active users based on recent data
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    description:
      "Tailwind CSS is a utility-first CSS framework for creating custom designs without having to leave your HTML.",
    foundation: 60,
    intermediate: 50,
    advance: 40,
    docs: "https://tailwindcss.com/",
    popularity: 40, // based on Stack Overflow Developer Survey 2024
    activeUsers: "60,000,000", // Approximate active users based on recent data
  },
  {
    name: "Node JS",
    icon: nodejs,
    description:
      "Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser.",
    foundation: 85,
    intermediate: 80,
    advance: 70,
    docs: "https://nodejs.org/",
    popularity: 67, // based on Stack Overflow Developer Survey 2024
    activeUsers: "200,000,000", // Approximate active users based on recent data
  },
  {
    name: "Java",
    icon: java,
    description:
      "Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible.",
    foundation: 80,
    intermediate: 70,
    advance: 60,
    docs: "https://docs.oracle.com/javase/tutorial/",
    popularity: 48, // based on Stack Overflow Developer Survey 2024
    activeUsers: "100,000,000", // Approximate active users based on recent data
  },
  {
    name: "Spring Boot",
    icon: springboot,
    description:
      "Spring Boot is an extension of the Spring framework that simplifies the setup and development of new Spring applications.",
    foundation: 65,
    intermediate: 55,
    advance: 45,
    docs: "https://spring.io/projects/spring-boot",
    popularity: 35, // based on Stack Overflow Developer Survey 2024
    activeUsers: "30,000,000", // Approximate active users based on recent data
  },
  {
    name: "MySQL",
    icon: mysql,
    description:
      "MySQL is an open-source relational database management system based on Structured Query Language (SQL).",
    foundation: 80,
    intermediate: 75,
    advance: 60,
    docs: "https://dev.mysql.com/doc/",
    popularity: 50, // based on Stack Overflow Developer Survey 2024
    activeUsers: "60,000,000", // Approximate active users based on recent data
  },
  {
    name: "MongoDB",
    icon: mongodb,
    description:
      "MongoDB is a NoSQL database known for its high performance, high availability, and easy scalability.",
    foundation: 70,
    intermediate: 60,
    advance: 50,
    docs: "https://www.mongodb.com/docs/",
    popularity: 40, // based on Stack Overflow Developer Survey 2024
    activeUsers: "40,000,000", // Approximate active users based on recent data
  },
  {
    name: "Python",
    icon: python,
    description:
      "Python is an interpreted, high-level, general-purpose programming language with dynamic typing and garbage collection.",
    foundation: 90,
    intermediate: 85,
    advance: 75,
    docs: "https://docs.python.org/3/",
    popularity: 82, // based on Stack Overflow Developer Survey 2024
    activeUsers: "700,000,000", // Approximate active users based on recent data
  },
  {
    name: "Git",
    icon: git,
    description:
      "Git is a distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
    foundation: 95,
    intermediate: 90,
    advance: 85,
    docs: "https://git-scm.com/doc",
    popularity: 87, // based on Stack Overflow Developer Survey 2024
    activeUsers: "500,000,000", // Approximate active users based on recent data
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Torry Harris Integration Solutions",
    icon: thdp,
    iconBg: "#383E56",
    date: "March 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
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
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
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
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
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
    image: carrent,
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
    image: jobit,
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
    image: tripguide,
    source_code_link: "https://github.com/ShravanJanwade/KBC",
  },
];

export { services, technologies, experiences, testimonials, projects };
