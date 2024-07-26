import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "JavaScript Intern",
    location: "FULL Creative",
    description:
      "I started my development journey as a JavaScript Intern at Full Creative, where I built a strong foundation in web technologies and launched my software development career.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Freelancer",
    location: "Upwork",
    description:
      "As a freelancer on Upwork, I worked on various small projects across different domains, sharpening my skills, expanding my knowledge, and building a diverse portfolio",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Coding Mentor",
    location: "CodingHero",
    description:
      "At CodingHero, I had the rewarding role of a coding mentor, where I dedicated my time to teaching children the fundamentals of programming. My focus was on two primary areas: introducing young learners to programming through Scratch and advancing their skills with React using CodeSandbox",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "FrontEnd Developer",
    location: "FULL Creative",
    description:
      "Currently migrating the branding website projects from Java to Next.js 14, ReactJS 18, and TypeScript for building fast, scalable, and maintainable websites. Utilizing Tailwind CSS for efficient and consistent styling and creating reusable components based on Atomic Design principles. Maintaining the Next.js projects in Monorepo with shareable functionalities, ESLint, and Prettier configuration for streamlined development. Served as Scrum Master for a few months. I proposed a new documentation system to handle sprint items, which received praise from multiple teams. This documentation reduced the time spent on sprint rituals by almost 50%. Addressed a critical legal issue for one of our brands, removing partner mentions from web pages and preventing potential legal action from partners.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "ES6",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "SASS",
  "Bootstrap",
  "Vercel",
  "Figma",
  "Markdoc", 
  "Accessibility",
  "Page speed optimization",
  "SEO",
  "Webpack", 
  "Gulp",
  "REST APIs", 
  "Strapi", 
  "Wordpress",
] as const;
