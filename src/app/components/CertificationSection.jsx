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
    <section className="text-white scroll-mt-20" id="certifications">
      <div className="max-w-5xl mx-auto px-4 py-20">

        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="text-4xl font-bold text-center md:text-left">
            Certifications/ Courses
          </h2>

          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="self-center md:self-auto px-5 py-2 rounded-full border border-primary-500 text-primary-200 hover:bg-primary-500/20 transition"
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>

        {/* Certification Grid */}
        <div className="grid sm:grid-cols-2 gap-8 mt-12">
          {displayed.map((cert, idx) => (
            <a
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#181818]/80 backdrop-blur border border-white/5 rounded-xl p-6 hover:border-primary-500/40 hover:-translate-y-1 transition duration-300"
            >

              {/* Title + icon */}
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold group-hover:text-primary-400 transition">
                  {cert.title}
                </h3>

                <ExternalLink
                  size={18}
                  className="text-[#ADB7BE] group-hover:text-primary-400 transition"
                />
              </div>

              {/* Issuer */}
              <p className="text-sm text-[#ADB7BE] mt-2">
                {cert.issuer}
              </p>

              {/* Year badge */}
              <span className="inline-block mt-4 text-xs px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20">
                {cert.year}
              </span>

            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CertificationSection;