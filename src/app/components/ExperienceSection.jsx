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

  if (!startDate || !endDate || Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
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
  if (years > 0 && remainder === 0) return `${years} year${years === 1 ? "" : "s"}`;
  if (years > 0) return `${years} year${years === 1 ? "" : "s"} ${remainder} mo`;
  return `${months} months`;
};

const EXPERIENCES = [
  {
    role: "Software Developer",
    company: "To The New",
    duration: "July 2025 - Present",
    location: "Noida, India",
    details: [
      "Developing scalable backend services using Node.js and Express.",
      "Building responsive front-end interfaces with React and Tailwind CSS.",
       "Collaborating with cross-functional teams to design and implement new features.",
       "Working with databases like MongoDB and PostgreSQL to manage data effectively.",
       "Participating in code reviews and contributing to best practices.",
    ],
  },
  {
    role: "Software Developer Trainee",
    company: "To The New",
    duration: "Jan 2025 - Jun 2025",
    location: "Noida, India",
    details: [
      "Completed a 6-month intensive training program covering full-stack development.",
      "Worked on projects using React, Node.js, and MongoDB.",
      "Gained experience with version control and CI/CD pipelines.",
      "Received mentorship from senior developers and participated in code reviews.",
    ],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "Modelens",
    duration: "Jun 2024 - Aug 2024",
    location: "hybrid",
    details: [
      "Developed and maintained web applications using React and Node.js.",
      "Collaborated with the design team to implement user-friendly interfaces.",
      "Gained experience with RESTful APIs and database management.",
      "Contributed to project deployment and testing processes.",
    ],
  },
  {
    role: "Alumni Engagement Coordinator",
    company: "University School of Information and Communication Technology",
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
    duration: "Aug 2023 - Sep 2023",
    location: "remote",
    details: [
      "Completed a 2-month intensive training program covering C++ development.",
      "Worked on projects using C++ and STL.",
      "Gained experience with version control and CI/CD pipelines.",
    ],
  }
];

const ExperienceSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? EXPERIENCES : EXPERIENCES.slice(0, 2);

  return (
    <section className="text-white scroll-mt-20" id="experience">
      <div className="max-w-5xl mx-auto px-4 py-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="text-4xl font-bold text-center md:text-left">
            Experience
          </h2>

          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="self-center md:self-auto px-5 py-2 rounded-full border border-primary-500 text-primary-200 hover:bg-primary-500/20 transition"
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>

        {/* Timeline */}
        <div className="relative mt-14">
          
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-primary-500/30"></div>

          <div className="space-y-12">
            {displayed.map((exp, idx) => (
              <div
                key={idx}
                className="grid grid-cols-[40px_1fr] gap-6 items-start group"
              >
                
                {/* Timeline Dot */}
                <div className="flex justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary-500 border-4 border-[#0f0f0f] shadow-md group-hover:scale-125 transition"></div>
                </div>

                {/* Card */}
                <div className="bg-[#181818] border border-white/5 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-primary-500/40 transition duration-300">
                  
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    
                    <div>
                      <h3 className="text-xl font-semibold">
                        {exp.role}
                      </h3>

                      <p className="text-sm text-[#ADB7BE]">
                        {exp.company} • {exp.location}
                      </p>
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="text-sm text-primary-400 font-medium">
                        {exp.duration}
                      </span>
                      <span className="text-xs text-[#ADB7BE] mt-1">
                        {formatMonths(getMonthsBetween(exp.duration))}
                      </span>
                    </div>

                  </div>

                  <ul className="list-disc list-inside mt-4 space-y-2 text-[#ADB7BE] text-sm leading-relaxed">
                    {exp.details.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>

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