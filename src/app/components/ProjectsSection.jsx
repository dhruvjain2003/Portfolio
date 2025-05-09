"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Medcare",
    description: "Doctor Appointment Booking Platform",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/dhruvjain2003/Doctor-Appointment",
    previewUrl: "https://doctor-appointment-dhruv.vercel.app/",
    techStack: ["Next.js", "PostgreSQL", "Node.js", "Express", "Cloudinary"],
  },
  {
    id: 2,
    title: "Adaptive Learning Insights",
    description:
      "An npm package for tracking and analyzing learning progress with adaptive metrics.",
    image: "/images/projects/6.png",
    tag: ["All", "Package"],
    gitUrl: "https://github.com/dhruvknowstocode/adaptive-learning-insights",
    previewUrl: "https://www.npmjs.com/package/adaptive-learning-insights",
    techStack: ["Node.js", "Express", "Git"],
  },
  {
    id: 3,
    title: "Wanderlust",
    description: "Airbnb Website",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/dhruvknowstocode/WanderLust",
    previewUrl: "https://project1-v5nk.onrender.com/listings",
    techStack: ["EJS", "MongoDb", "Node.js", "Express", "Cloudinary"],
  },

  {
    id: 4,
    title: "Modelens",
    description:
      "A dynamic portfolio and booking platform for photography and modeling services.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/dhruvknowstocode/Modelens",
    previewUrl: "https://modelens-hub.netlify.app/",
    techStack: ["Html", "Css", "Js", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 5,
    title: "BotBuddy",
    description: "Discord Bot with Interactive Features",
    image: "/images/projects/3.png",
    tag: ["All", "Bot"],
    gitUrl: "https://github.com/dhruvknowstocode/Discord-Bot",
    previewUrl:
      "https://discord.com/oauth2/authorize?client_id=1282545526721478728&scope=bot&permissions=256016",
    techStack: ["Discord-Api", "Gemini-Api", "Node.js", "Express"],
  },
  {
    id: 6,
    title: "FitTrack",
    description: "Fitness Tracking Website",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/dhruvknowstocode/fitness-freaks",
    previewUrl: "https://fitness-freakz.netlify.app/",
    techStack: ["React.js", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 7,
    title: "GoYum",
    description: "Food Ordering Website",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/dhruvknowstocode/GoYum",
    previewUrl: "https://go-yum-wr5h.vercel.app/",
    techStack: ["React.js", "Context-Api", "Node.js", "Express"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-wrap justify-center items-center gap-2 py-6 px-4">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Bot"
          isSelected={tag === "Bot"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Package"
          isSelected={tag === "Package"}
        />
      </div>
      <ul
        ref={ref}
        className="projects-scrollbar flex md:grid md:grid-cols-3 gap-8 md:gap-12 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth px-4"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            className="min-w-[80vw] md:min-w-0 snap-center"
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              techStack={project.techStack}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
