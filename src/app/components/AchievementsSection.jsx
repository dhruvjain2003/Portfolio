"use client";

import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => import("react-animated-numbers"),
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Years Experience",
    value: "1",
    postfix: "+",
  },
  {
    metric: "Full Stack Projects",
    value: "6",
    postfix: "+",
  },
  {
    metric: "Production Features",
    value: "20",
    postfix: "+",
  },
  {
    metric: "Awards",
    value: "2",
    postfix: "+",
  },
  {
    metric: "DSA Problems Solved",
    value: "500",
    postfix: "+",
  },
];

const AchievementsSection = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-[#181818]/70 shadow-lg backdrop-blur-md">
        <div className="grid grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {achievementsList.map((achievement, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1
                ${
                  index !== achievementsList.length - 1
                    ? "border-b border-white/10 pb-8 sm:border-b-0 sm:pb-0 lg:border-r lg:border-white/10"
                    : ""
                }`}
            >
              <h2 className="flex items-center text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"
                  configs={(_, index) => ({
                    mass: 1,
                    friction: 100,
                    tensions: 140 * (index + 1),
                  })}
                />
                {achievement.postfix}
              </h2>

              <p className="mt-3 text-center text-sm font-medium tracking-wide text-[#ADB7BE] transition-colors duration-300 group-hover:text-primary-400 md:text-base">
                {achievement.metric}
              </p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
