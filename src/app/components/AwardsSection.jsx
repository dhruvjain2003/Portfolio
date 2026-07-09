"use client";

import React from "react";
import { Trophy } from "lucide-react";

const AWARDS = [
  {
    title: "Star Performer Award",
    period: "Q3",
    issuer: "To The New — Australia & New Zealand Business Unit",
    year: "2025",
    highlights: ["Client appreciation", "Tight deadlines", "Consistent delivery"],
    description:
      "Recognized for steady technical contributions across production releases, consistently meeting aggressive sprint deadlines, and earning strong appreciation from the client for reliable execution and ownership.",
  },
  {
    title: "Spot Award",
    period: "FIFA World Cup Release",
    issuer: "To The New",
    year: "2026",
    highlights: ["Critical delivery", "Event launch", "Business impact"],
    description:
      "Awarded for delivering high-priority FIFA World Cup sportsbook features — including SGM Builder, Market Selector, and Correct Score — under close deadlines without compromising quality. The launch was well received by the client and helped drive strong event-period revenue on the platform.",
  },
];

const AwardsSection = () => {
  return (
    <section id="awards" className="scroll-mt-20 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <span className="mb-4 inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-1 text-sm font-medium text-yellow-300">
          Recognition
        </span>

        <h2 className="text-4xl font-bold md:text-5xl">Awards</h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-[#ADB7BE] sm:text-lg sm:leading-8">
          Awards received for delivering production features under tight
          timelines, earning client appreciation, and contributing to meaningful
          business outcomes.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {AWARDS.map((award) => (
            <article
              key={`${award.title}-${award.year}`}
              className="rounded-2xl border border-yellow-500/20 bg-[#181818]/70 p-6 transition duration-300 hover:border-yellow-500/40 hover:shadow-[0_0_30px_rgba(234,179,8,0.08)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-yellow-500/20 bg-yellow-500/10">
                  <Trophy className="h-6 w-6 text-yellow-400" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-semibold text-white">
                      {award.title}
                    </h3>
                    <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-2.5 py-0.5 text-xs font-medium text-yellow-300">
                      {award.period}
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-primary-300">{award.issuer}</p>
                  <p className="text-xs text-[#ADB7BE]">{award.year}</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-[#ADB7BE]">
                {award.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {award.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs text-yellow-200"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
