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
    title: "UI/UX Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "springboot",
    icon: springboot,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "mongodb",
    icon: mongodb,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
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
      "A Efficient Project and Task Management System made for small organization to track,delegate and monitor the projects status. An Overall dashboard to keep the track of the progress of each employees in company along with story points and chat system.",
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
      "A social media web application made for geeks and tech enthusiasts. The features of posting,updating,deleting your opinions on tech as well as connecting with other techies for viewing their opinions. An one in all platform for managing your tech social channel along with an Inbuild AI bot to chat and post accordingly.",
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
      "A web application game clone of popular TV show KBC also known as Who wants to be a millionaire. From all the lifelines like in real show, the game gives the question according to your choice. It also has Ai genearted expert advice and long set of questions from variety of topics to choose from. It tracks your score along with the sound effects to make you an immersive game experience.",
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
