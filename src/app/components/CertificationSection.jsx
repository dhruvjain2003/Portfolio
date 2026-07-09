"use client";

import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

const CERTIFICATIONS = [
  {
    title: "The Complete Prompt Engineering for AI Bootcamp",
    issuer: "Udemy",
    year: "2026",
    link: "https://www.udemy.com/certificate/UC-e91a7b89-21ab-4cf1-9054-363bd76ce9d9/",
  },
  {
    title: "Mastering Cursor: From Setup to Real Projects",
    issuer: "Coursera",
    year: "2026",
    link: "https://coursera.org/share/7652a1a74c33a436fa68fab7928a190d",
  },
  {
    title: "Introduction to AI",
    issuer: "Coursera",
    year: "2026",
    link: "https://coursera.org/share/78372e6757d56c1d3af287ff5bb43310",
  },
  {
    title: "ChatGPT and GPT-4 LLM Guide: Prompt Engineering",
    issuer: "Udemy",
    year: "2025",
    link: "https://www.udemy.com/certificate/UC-06700590-dfa6-4b18-b78c-410db9fbd652/",
  },
];

const CertificationSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? CERTIFICATIONS : CERTIFICATIONS.slice(0, 2);

  return (
    <section className="scroll-mt-20 py-24 text-white" id="certifications">
      <div className="mx-auto max-w-7xl px-6">
        <span className="mb-4 inline-flex rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-1 text-sm font-medium text-primary-300">
          Learning
        </span>

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl font-bold md:text-5xl">
            Learning & Certifications
          </h2>

          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="self-center rounded-full border border-primary-500 px-5 py-2 text-sm text-primary-200 transition hover:bg-primary-500/20 md:self-auto"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {displayed.map((cert, idx) => (
            <a
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl border border-white/10 bg-[#181818]/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.12)]"
            >
              {/* Title */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="pr-4 text-xl font-semibold leading-snug transition-colors duration-300 group-hover:text-primary-400">
                  {cert.title}
                </h3>

                <ExternalLink
                  size={18}
                  className="mt-1 translate-x-1 opacity-0 text-primary-400 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                />
              </div>

              {/* Issuer + Year */}
              <div className="mt-5 flex items-center justify-between text-sm">
                <span className="text-[#ADB7BE]">
                  {cert.issuer}
                </span>

                <span className="font-medium text-primary-400">
                  Issued {cert.year}
                </span>
              </div>

              {/* Divider */}
              <div className="my-5 h-px bg-white/10" />

              {/* Footer */}
              <div className="flex items-center justify-between text-sm text-[#ADB7BE] transition-colors duration-300 group-hover:text-primary-400">
                <span>Verify Credential</span>

                <ExternalLink size={15} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
