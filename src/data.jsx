import { nanoid } from "nanoid";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML",
    icon: <FaHtml5 className="h-16 w-16 text-sky-500" />,
    text: "Proficient in HTML, creating well-structured and semantic web pages for optimal accessibility and SEO.",
  },
  {
    id: nanoid(),
    title: "CSS",
    icon: <FaCss3 className="h-16 w-16 text-sky-500" />,
    text: "Skilled in CSS, utilizing modern methods like Flexbox and Grid, along with frameworks such as Bootstrap and Tailwind, to create dynamic and responsive web designs.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-sky-500" />,
    text: "Expertise in JavaScript, developing dynamic and engaging web experiences through innovative solutions.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-sky-500" />,
    text: "Adept in React, developing robust web applications using state management and reusable components.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://i.gyazo.com/d95f1db99fc6740e704df027471bc519.jpg",
    url: "https://a-kilic.github.io/RateMyAnime/",
    github: "https://github.com/a-kilic/RateMyAnime",
    title: "R.M.A",
    text: "RateMyAnime(R.M.A) is a website inspired by IMDb and MyAnimeList. It's a site where users can search for an anime, rate it, and organize it into personalized lists.",
  },
  {
    id: nanoid(),
    img: "https://i.gyazo.com/43e7e15b08643564ada51fd9c3b9672b.png",
    url: "https://a-kilic.github.io/Fashio-E-Commerce/",
    github: "https://github.com/a-kilic/Fashio-E-Commerce",
    title: "Fashio",
    text: "Fashio is a React-based e-commerce website for fashion lovers, featuring a sleek, responsive design powered by Tailwind CSS. Still a work in progress, it combines clean UI with smooth user interactions, showcasing modular components and modern development techniques.",
  },
];
