"use client";

import React from "react";

const CODING_PROFILES = [
  {
    label: "LeetCode — 500+ Problems Solved",
    href: "https://leetcode.com/u/dhruvjain2424/",
    dotColor: "bg-yellow-400",
  },
  {
    label: "Code360 — Specialist",
    href: "https://www.naukri.com/code360/profile/dhruvcodes",
    dotColor: "bg-blue-400",
  },
  {
    label: "GeeksforGeeks — DSA Practice",
    href: "https://www.geeksforgeeks.org/user/dhruvjarjl5/",
    dotColor: "bg-green-500",
  },
  {
    label: "GitHub — Open Source & Personal Projects",
    href: "https://github.com/dhruvknowstocode",
    dotColor: "bg-white",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-20 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* LEFT */}
          <div className="lg:col-span-8 lg:sticky lg:top-28 h-fit">
            <span className="mb-4 inline-flex rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-1 text-sm font-medium text-primary-300">
              About Me
            </span>

            <h2 className="mb-8 max-w-4xl text-[2.25rem] font-bold leading-tight sm:text-5xl lg:text-6xl">
              Building scalable products that people actually use.
            </h2>

            <div className="max-w-4xl space-y-6 text-base leading-8 text-[#ADB7BE] sm:text-lg sm:leading-9">
              <p>
                I&apos;m a{" "}
                <span className="font-semibold text-white">
                  Full Stack Software Engineer
                </span>{" "}
                with{" "}
                <span className="font-semibold text-white">
                  1+ years of professional experience
                </span>{" "}
                building scalable web applications and shipping
                production-ready features for{" "}
                <span className="font-semibold text-white">Tabcorp&apos;s</span>{" "}
                large-scale sportsbook platform serving millions of users.
              </p>

              <p>
                I work across the complete development lifecycle from crafting
                responsive user interfaces with{" "}
                <span className="font-semibold text-white">
                  React & Next.js
                </span>{" "}
                to designing scalable backend systems using{" "}
                <span className="font-semibold text-white">
                  Node.js, GraphQL, PostgreSQL, Redis, and Express.js
                </span>
                .
              </p>

              <p>
                Outside work, I enjoy building AI-powered applications,
                experimenting with modern LLMs, contributing to side projects,
                and continuously improving my problem-solving skills through DSA
                and system design.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "Node.js",
                "GraphQL",
                "PostgreSQL",
                "Redis",
                "Docker",
                "TypeScript",
                "Tailwind",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-2 text-sm text-primary-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-5 lg:col-span-4">
            {/* Skills */}
            <div className="rounded-2xl border border-white/10 bg-[#181818]/70 p-6 transition hover:border-primary-500/40">
              <h3 className="mb-5 text-xl font-semibold">🚀 Skills</h3>

              <div className="space-y-3 text-sm text-[#ADB7BE] sm:text-base">
                <div>
                  <span className="font-semibold text-white">Frontend</span>
                  <p>React.js • Next.js • Tailwind CSS</p>
                </div>

                <div>
                  <span className="font-semibold text-white">Backend</span>
                  <p>Node.js • Express.js • GraphQL</p>
                </div>

                <div>
                  <span className="font-semibold text-white">Database</span>
                  <p>PostgreSQL • MongoDB • Redis</p>
                </div>

                <div>
                  <span className="font-semibold text-white">Languages</span>
                  <p>JavaScript • TypeScript • Java • C++</p>
                </div>

                <div>
                  <span className="font-semibold text-white">Tools</span>
                  <p>Git • GitHub • Docker • Postman</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="rounded-2xl border border-white/10 bg-[#181818]/70 p-6 transition hover:border-primary-500/40">
              <h3 className="mb-3 text-xl font-semibold">🎓 Education</h3>

              <p className="font-semibold text-white">
                B.Tech in Computer Science
              </p>

              <p className="text-[#ADB7BE]">
                USICT, GGSIP University
              </p>

              <p className="text-[#ADB7BE]">2021 – 2025</p>
            </div>

            {/* Core CS */}
            <div className="rounded-2xl border border-white/10 bg-[#181818]/70 p-6 transition hover:border-primary-500/40">
              <h3 className="mb-4 text-xl font-semibold">📚 Core CS</h3>

              <div className="flex flex-wrap gap-2">
                {[
                  "Operating Systems",
                  "DBMS",
                  "Computer Networks",
                  "OOP",
                  "Software Engineering",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-primary-500/20 bg-primary-500/10 px-3 py-1 text-sm text-primary-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Profiles */}
            <div className="rounded-2xl border border-white/10 bg-[#181818]/70 p-6 transition hover:border-primary-500/40">
              <h3 className="mb-4 text-xl font-semibold">
                🌐 Coding Profiles
              </h3>

              <div className="space-y-2">
                {CODING_PROFILES.map((profile) => (
                  <a
                    key={profile.href}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg px-2 py-2 text-[#ADB7BE] transition hover:bg-white/5 hover:text-primary-400"
                  >
                    <span
                      className={`h-2.5 w-2.5 shrink-0 rounded-full ${profile.dotColor}`}
                      aria-hidden="true"
                    />
                    <span className="text-sm sm:text-base">
                      {profile.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
