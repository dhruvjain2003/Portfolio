"use client";

import React, { useState } from "react";

const MONTH_NAME_TO_INDEX = {
  jan: 0,
  january: 0,
  feb: 1,
  february: 1,
  mar: 2,
  march: 2,
  apr: 3,
  april: 3,
  may: 4,
  jun: 5,
  june: 5,
  jul: 6,
  july: 6,
  aug: 7,
  august: 7,
  sep: 8,
  sept: 8,
  september: 8,
  oct: 9,
  october: 9,
  nov: 10,
  november: 10,
  dec: 11,
  december: 11,
};

const parseMonthYear = (str) => {
  const [month, year] = str.trim().split(" ");
  const monthIndex = MONTH_NAME_TO_INDEX[month.toLowerCase()];
  const yearNumber = parseInt(year, 10);
  if (monthIndex === undefined || Number.isNaN(yearNumber)) return null;
  return new Date(yearNumber, monthIndex, 1);
};

const getMonthsBetween = (duration) => {
  const [startRaw, endRaw] = duration.split("-").map((s) => s.trim());
  const startDate = parseMonthYear(startRaw);
  const endDate =
    endRaw.toLowerCase() === "present" ? new Date() : parseMonthYear(endRaw);

  if (
    !startDate ||
    !endDate ||
    Number.isNaN(startDate.getTime()) ||
    Number.isNaN(endDate.getTime())
  ) {
    return 0;
  }

  const years = endDate.getFullYear() - startDate.getFullYear();
  const months = endDate.getMonth() - startDate.getMonth();
  return years * 12 + months + 1;
};

const formatMonths = (months) => {
  if (months <= 0) return "";
  if (months === 1) return "1 month";
  const years = Math.floor(months / 12);
  const remainder = months % 12;
  if (years > 0 && remainder === 0)
    return `${years} year${years === 1 ? "" : "s"}`;
  if (years > 0)
    return `${years} year${years === 1 ? "" : "s"} ${remainder} mo`;
  return `${months} months`;
};

const EXPERIENCES = [
  {
    role: "Software Engineer",
    company: "To The New",
    client: "Tabcorp Digital (Australia)",
    product: "Digital Sportsbook Platform",
    type: "Full-time",
    isCurrent: true,
    duration: "July 2025 - Present",
    location: "Noida, India",
    techStack: [
      "Node.js",
      "Express.js",
      "GraphQL",
      "REST APIs",
      "Redis",
      "PostgreSQL",
      "React",
      "Mocha",
      "Sinon",
    ],
    details: [
      "Designed and maintained scalable backend services powering a high-traffic sportsbook platform using Node.js, Express.js, GraphQL, and REST APIs, supporting real-time sports betting workflows.",

      "Delivered end-to-end production features including SGM Builder, Market Selector, and Correct Score modules, owning the complete lifecycle from requirement analysis and API design to implementation, testing, deployment, and production support.",

      "Developed and optimized backend APIs using microservices architecture, Redis caching, API Gateway patterns, and PostgreSQL database interactions to improve application performance and scalability.",

      "Collaborated with Product Owners, QA engineers, and cross-functional teams in Agile sprints to deliver customer-facing features for major sporting events including FIFA World Cup releases.",

      "Investigated and resolved production incidents through debugging, root cause analysis, and preventive fixes to improve system reliability and ensure stable releases.",

      "Implemented unit and integration testing using Mocha and Sinon, contributing to code quality, regression prevention, and reliable production deployments."
    ],
    awards: [
      "Star Performer Award (Q3) — Australia & New Zealand Business Unit. Recognized for consistent delivery under tight deadlines and strong client appreciation for reliable execution on production features.",
      "Spot Award — Delivered critical FIFA World Cup features (SGM Builder, Market Selector, and Correct Score) under close deadlines. The release earned client appreciation and contributed to strong event-period platform revenue.",
    ],
  },
  {
    role: "Software Developer Trainee",
    company: "To The New",
    type: "Trainee",
    duration: "Jan 2025 - Jun 2025",
    location: "Noida, India",
    techStack: ["React", "Node.js", "MongoDB", "Git", "CI/CD"],
    details: [
      "Completed a 6-month intensive full-stack training program before transitioning to the production team.",
      "Built training projects with React, Node.js, and MongoDB while learning agile workflows and CI/CD pipelines.",
      "Received mentorship from senior developers and ramped up on the Tabcorp sportsbook codebase.",
    ],
  },
  {
    role: "Full Stack Web Developer Intern",
    company: "Modelens",
    type: "Internship",
    duration: "June 2024 - August 2024",
    location: "Noida, India",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    details: [
      "Built a full-stack web application using React.js, Node.js, Express.js, and MongoDB, developing responsive user interfaces and RESTful backend APIs.",
    ],
  },
  {
    role: "Alumni Engagement Coordinator",
    company: "University School of Information and Communication Technology",
    type: "Part-time",
    duration: "Aug 2022 - May 2024",
    location: "Delhi, India",
    details: [
      "Organized and managed alumni events and networking sessions.",
      "Maintained communication with alumni through email and social media.",
      "Assisted in the development of alumni engagement strategies.",
    ],
  },
  {
    role: "C++ Developer Trainee",
    company: "Codesoft",
    type: "Trainee",
    duration: "Aug 2023 - Sep 2023",
    location: "Remote",
    techStack: ["C++", "STL", "Git"],
    details: [
      "Completed a 2-month intensive training program covering C++ development.",
      "Worked on projects using C++ and STL.",
      "Gained experience with version control and CI/CD pipelines.",
    ],
  },
];

const hiddenCount = EXPERIENCES.length - 2;

const ExperienceSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? EXPERIENCES : EXPERIENCES.slice(0, 2);

  return (
    <section className="scroll-mt-20 py-24 text-white" id="experience">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-4 inline-flex rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-1 text-sm font-medium text-primary-300">
              Work Experience
            </span>
            <h2 className="text-4xl font-bold md:text-5xl">Experience</h2>
          </div>

          {hiddenCount > 0 && (
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="self-center rounded-full border border-primary-500 px-5 py-2 text-primary-200 transition hover:bg-primary-500/20 md:self-auto"
            >
              {showAll ? "Show Less" : `View ${hiddenCount} more roles`}
            </button>
          )}
        </div>

        <div className="relative mt-14">
          <div className="absolute left-4 top-0 h-full w-[2px] bg-primary-500/30" />

          <div className="space-y-12">
            {displayed.map((exp, idx) => (
              <div
                key={`${exp.role}-${exp.company}-${idx}`}
                className="group grid grid-cols-[40px_1fr] items-start gap-6"
              >
                <div className="flex justify-center">
                  <div className="h-4 w-4 rounded-full border-4 border-[#0f0f0f] bg-primary-500 shadow-md transition group-hover:scale-125" />
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#181818]/70 p-6 transition duration-300 hover:border-primary-500/40 hover:shadow-lg">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        {exp.isCurrent && (
                          <span className="rounded-full border border-green-500/30 bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-400">
                            Current
                          </span>
                        )}
                        {exp.type && (
                          <span className="rounded-full border border-primary-500/20 bg-primary-500/10 px-2.5 py-0.5 text-xs font-medium text-primary-300">
                            {exp.type}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-semibold">{exp.role}</h3>

                      <p className="text-sm text-[#ADB7BE]">
                        {exp.company} • {exp.location}
                      </p>

                      {exp.client && (
                        <p className="text-sm text-primary-300">
                          Client: {exp.client}
                        </p>
                      )}

                      {exp.product && (
                        <p className="text-sm text-[#ADB7BE]">
                          Product: {exp.product}
                        </p>
                      )}
                    </div>

                    <div className="flex shrink-0 flex-col md:items-end">
                      <span className="text-sm font-medium text-primary-400">
                        {exp.duration}
                      </span>
                      <span className="mt-1 text-xs text-[#ADB7BE]">
                        {formatMonths(getMonthsBetween(exp.duration))}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2.5 pl-4 text-sm leading-relaxed text-[#ADB7BE]">
                    {exp.details.map((line, i) => (
                      <li key={i} className="list-disc">
                        {line}
                      </li>
                    ))}
                  </ul>

                  {exp.awards?.length > 0 && (
                    <div className="mt-5 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4">
                      <p className="mb-2 text-sm font-semibold text-yellow-400">
                        Recognition
                      </p>
                      <ul className="space-y-2 pl-4 text-sm leading-relaxed text-[#ADB7BE]">
                        {exp.awards.map((award, i) => (
                          <li key={i} className="list-disc">
                            {award}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {exp.techStack?.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-primary-500/20 bg-primary-500/10 px-3 py-1 text-xs text-primary-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
