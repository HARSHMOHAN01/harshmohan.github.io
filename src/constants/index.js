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
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Software Tester",
    icon: mobile,
  },
  {
    title: "Game Tester",
    icon: backend,
  },
  {
    title: "Content Production",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Content Production",
    company_name: "Vaak Creatives",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2025 - Till Date",
    points: [
      "Developing and maintaining courses and blogs on various topics",
      "Collaborating with teams including course designersers and editors to create high-quality videos",
      "Implementing automation query resolving system and ensuring customer satisfaction",
      "Participating in open review and feedback session to improve content",
    ],
  },
  {
    title: "User Accessibility Tester",
    company_name: "Focus Realm",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2025 - July 2025",
    points: [
      "Testing and maintaining web applications using selenium",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to remove bug in test phase",
      "Ensuring smooth and cross-browser compatibility",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Development Engineer Intern",
    company_name: "Ananda Sagar NGO",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jul 2024 - Oct 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Manual Testing Intern",
    company_name: "HeyInterns",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Apr 2025",
    points: [
      "Testing and maintaining web applications using selenium",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to remove bug in test phase",
      "Ensuring smooth and cross-browser compatibility",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Quick response with a creative vision for new writing age and strong in making SEO friendly content.",
    name: "Vaak",
    designation: "Founder",
    company: "Vaak Creatives",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Helped me with quick fixing bugs and adding new features to my website. Highly recommend!",
    name: "Focus Realm",
    designation: "Founder",
    company: "Ali Mustafa",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After optimization of our website, our traffic increased by 50%",
    name: "Avinash Kumar",
    designation: "Founder",
    company: "HeyInterns",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Micro Economics Decision Game",
    description:
      "Web-based platform that guide user to learn how to invest money in various sector and finding the best investment option",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/HARSHMOHAN01/-Microeconomic-Decision-Game-Project.git",
  },
  {
    name: "Paricerna-Health-Care",
    description:
      "Web application that enables rural India users to search for generic medicine description, find nearby pharmacies and doctors, and access health-related information.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/HARSHMOHAN01/Paricerna-Health-Care.git",
  },
  {
    name: "Crypto Exchange Platform",
    description:
      "A web application that allows users to exchange cryptocurrencies, providing real-time data and a user-friendly interface.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/HARSHMOHAN01/Crypto-exchange-webdev.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
