"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 sm:grid-cols-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="sm:col-span-8 text-center sm:text-left"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-300">
            🚀 Full Stack Software Engineer • 1+ Year Experience
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
              Hi, I&apos;m
            </span>
            <br />
            Dhruv Jain
          </h1>

          {/* Description */}
          <p className="max-w-2xl text-base leading-7 text-[#ADB7BE] sm:text-lg sm:leading-8 lg:text-xl">
            Building end-to-end web applications with a focus on performance,
            scalability, and user experience. Experienced in delivering production-ready features for a high-traffic sportsbook platform serving millions of users
          </p>

          {/* Quick Stats */}
          <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm text-[#ADB7BE] sm:justify-start">
            <span>💼 1+ Year Experience</span>
            <span>🏆 Award Winner</span>
            <span>📦 Open Source</span>
            <span>🚀 Production Systems</span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 px-7 py-3 font-medium text-white transition-transform duration-300 hover:scale-105"
            >
              Contact Me
            </Link>

            <a
              href="/resume.pdf"
              download
              className="rounded-full border border-primary-500 px-7 py-3 font-medium text-white transition-all duration-300 hover:bg-primary-500/10"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center sm:col-span-4"
        >
          <div className="relative mx-auto h-[240px] w-[240px] rounded-full bg-gradient-to-br from-[#1d1d1d] to-[#111111] ring-1 ring-white/10 shadow-[0_0_60px_rgba(99,102,241,0.18)] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px]">
            <Image
              src="/images/me.png"
              alt="Dhruv Jain"
              fill
              className="rounded-full object-contain p-5"
              priority
            />
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
