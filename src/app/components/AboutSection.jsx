"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript (ES6+), C, C++, Java</li>
        <li>React.js & Next.js</li>
        <li>Node.js, GraphQL & Express.js</li>
        <li>PostgreSQL & MongoDB</li>
        <li>HTML5, CSS3, Tailwind CSS</li>
        <li>Git & GitHub</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.Tech in Computer Science, USICT</li>
        <li>2021 - 2025</li>
      </ul>
    ),
  },
  {
    title: "Technical Knowledge",
    id: "technical",
    content: (
      <ul className="list-disc pl-2">
        <li>Operating Systems</li>
        <li>Database Management Systems (DBMS)</li>
        <li>Computer Networks</li>
        <li>Object-Oriented Programming (OOPs)</li>
        <li>Software Engineering</li>
      </ul>
    ),
  },
  {
    title: "Coding Profiles",
    id: "coding",
    content: (
      <ul className="list-disc pl-2 space-y-2">
        <li>
          <a
            href="https://leetcode.com/u/dhruvjain2424/"
            target="_blank"
            className="text-white hover:text-yellow-400 transition-colors duration-300"
          >
            🚀 LeetCode – 350+ Problems Solved
          </a>
        </li>
        <li>
          <a
            href="https://www.naukri.com/code360/profile/dhruvcodes"
            target="_blank"
            className="text-white hover:text-yellow-400 transition-colors duration-300"
          >
            💻 Coding Ninja - Specialist
          </a>
        </li>
        <li>
          <a
            href="https://www.geeksforgeeks.org/user/dhruvjarjl5/"
            target="_blank"
            className="text-white hover:text-yellow-400 transition-colors duration-300"
          >
            📘 GeeksforGeeks – DSA Practice
          </a>
        </li>
      </ul>
    ),    
  },  
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white scroll-mt-20" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center pb-8 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="About Image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 text-center sm:text-start">About Me</h2>
          <p className="text-base lg:text-lg text-[#ADB7BE] leading-relaxed">
            I’m a <span className="text-white font-medium">Full-Stack Developer</span> currently working at 
            <span className="text-white font-medium"> To The New</span>, where I build scalable web applications 
            and backend systems. My primary focus is backend development using 
            <span className="text-white font-medium"> Node.js, Express.js, and SQL</span>, while also working 
            across the stack with <span className="text-white font-medium">React and JavaScript</span> to deliver 
            end-to-end solutions.
            <br /><br />
            Beyond traditional development, I’m exploring <span className="text-white font-medium">AI-driven development</span>, 
            including prompt engineering and integrating modern AI APIs into applications to create smarter user experiences.
          </p>
          <div className="flex flex-row justify-center sm:justify-start flex-wrap gap-2 mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("technical")}
              active={tab === "technical"}
            >
              Technical Knowledge
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("coding")}
              active={tab === "coding"}
            >
              Coding Profiles
            </TabButton>
          </div>

          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
