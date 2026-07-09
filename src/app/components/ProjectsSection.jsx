"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const FILTER_TAGS = ["All", "Web", "Bot", "Package"];

const projectsData = [
  {
    id: 1,
    title: "Medcare",
    description:
      "Full-stack doctor appointment platform with role-based auth, booking flows, and Cloudinary image uploads built end-to-end with Next.js and PostgreSQL.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    featured: true,
    gitUrl: "https://github.com/dhruvjain2003/Doctor-Appointment",
    previewUrl: "https://doctor-appointment-dhruv.vercel.app/",
    previewLabel: "Live Demo",
    techStack: ["Next.js", "PostgreSQL", "Node.js", "Express", "Cloudinary"],
  },
  {
    id: 2,
    title: "Adaptive Learning Insights",
    description:
      "Published npm package for tracking and analyzing learning progress with adaptive metrics reusable tooling shipped to the open-source ecosystem.",
    image: "/images/projects/6.png",
    tag: ["All", "Package"],
    featured: true,
    gitUrl: "https://github.com/dhruvknowstocode/adaptive-learning-insights",
    previewUrl: "https://www.npmjs.com/package/adaptive-learning-insights",
    previewLabel: "View on npm",
    techStack: ["Node.js", "Express", "npm", "Git"],
  },
  {
    id: 3,
    title: "BotBuddy",
    description:
      "AI-powered Discord bot with interactive commands and Gemini API integration for smart conversational responses in server channels.",
    image: "/images/projects/3.png",
    tag: ["All", "Bot"],
    gitUrl: "https://github.com/dhruvknowstocode/Discord-Bot",
    previewUrl:
      "https://discord.com/oauth2/authorize?client_id=1282545526721478728&scope=bot&permissions=256016",
    previewLabel: "Add to Server",
    techStack: ["Discord API", "Gemini API", "Node.js", "Express"],
  },
  {
    id: 4,
    title: "Wanderlust",
    description:
      "Airbnb-style listings platform with CRUD operations, reviews, map integration, and Cloudinary-powered image uploads for property hosts.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/dhruvknowstocode/WanderLust",
    previewUrl: "https://project1-v5nk.onrender.com/listings",
    previewLabel: "Live Demo",
    techStack: ["EJS", "MongoDB", "Node.js", "Express", "Cloudinary"],
  },
  {
    id: 5,
    title: "GoYum",
    description:
      "Food ordering web app with menu browsing, cart management, and checkout flows built with React and Context API on the frontend.",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/dhruvknowstocode/GoYum",
    previewUrl: "https://go-yum-wr5h.vercel.app/",
    previewLabel: "Live Demo",
    techStack: ["React.js", "Context API", "Node.js", "Express"],
  },
  {
    id: 6,
    title: "FitTrack",
    description:
      "Fitness tracking application for logging workouts, monitoring progress, and managing exercise routines with a React frontend and REST API backend.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/dhruvknowstocode/fitness-freaks",
    previewUrl: "https://fitness-freakz.netlify.app/",
    previewLabel: "Live Demo",
    techStack: ["React.js", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 7,
    title: "Modelens",
    description:
      "Portfolio and booking platform for photography and modeling services built during my internship with responsive UI and RESTful APIs.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/dhruvknowstocode/Modelens",
    previewUrl: "https://modelens-hub.netlify.app/",
    previewLabel: "Live Demo",
    techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
  },
];

const getTagCount = (tagName) => {
  if (tagName === "All") return projectsData.length;
  return projectsData.filter((project) => project.tag.includes(tagName)).length;
};

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="scroll-mt-20 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <span className="mb-4 inline-flex rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-1 text-sm font-medium text-primary-300">
          Projects
        </span>

        <h2 className="text-4xl font-bold md:text-5xl">Things I&apos;ve built</h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-[#ADB7BE] sm:text-lg sm:leading-8">
          A mix of full-stack applications, an open-source npm package, and side
          projects showcasing end-to-end development.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-2 md:justify-start">
          {FILTER_TAGS.map((tagName) => (
            <ProjectTag
              key={tagName}
              name={tagName}
              count={getTagCount(tagName)}
              onClick={setTag}
              isSelected={tag === tagName}
            />
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <p className="mt-16 text-center text-[#ADB7BE]">
            No projects in this category yet.
          </p>
        ) : (
          <ul
            ref={ref}
            className="projects-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <motion.li
                key={project.id}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.35, delay: index * 0.1 }}
                className="min-w-[85vw] snap-center sm:min-w-[70vw] md:min-w-0"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                  previewLabel={project.previewLabel}
                  techStack={project.techStack}
                  featured={project.featured}
                />
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
