"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a Passionate and Dedicated Front-end Developer with 2.5 years of experience, I leverage Next.js, React.js, TypeScript, and Tailwind CSS to craft scalable and performant web applications. With a strong foundation in web development, built over 4 years of diverse experience in various roles, including JavaScript Intern, Freelancer, and CodingMentor, I bring a unique perspective to my work.
      </p>

      <p>
       With strong communication skills and a collaborative mindset, I drive team success and deliver high-quality solutions. I&apos;m passionate about continuous learning, personal growth, and expanding my skill set into full-stack development.
      </p>
    </motion.section>
  );
}
