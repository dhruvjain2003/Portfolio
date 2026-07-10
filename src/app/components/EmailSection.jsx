"use client";

import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import GmailIcon from "../../../public/gmail.svg";
import LeetCodeIcon from "../../../public/leetcode.svg";
import Link from "next/link";
import Image from "next/image";

const EMAIL = "dhruvjain2424@gmail.com";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/meogkpya";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/dhruvknowstocode",
    icon: GithubIcon,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/dhruv-jain-7000b6227/",
    icon: LinkedinIcon,
    label: "LinkedIn",
  },
  {
    href: `mailto:${EMAIL}`,
    icon: GmailIcon,
    label: "Email",
  },
  {
    href: "https://leetcode.com/u/dhruvjain2424/",
    icon: LeetCodeIcon,
    label: "LeetCode",
  }
];

const inputClassName =
  "block w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9] focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(event.target);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setEmailSubmitted(true);
        event.target.reset();
      } else {
        setError("Something went wrong. Please try again or email me directly.");
      }
    } catch {
      setError("Something went wrong. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-20 py-24">
      <div className="pointer-events-none absolute top-3/4 -left-4 z-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent blur-lg" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1 text-sm text-green-300">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Open to new opportunities
            </span>

            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Let&apos;s connect
            </h2>

            <p className="mb-6 max-w-md text-base leading-7 text-[#ADB7BE] sm:text-lg sm:leading-8">
              I&apos;m open to full-stack and backend roles and happy to hear
              from recruiters, hiring managers, or fellow developers. Based in
              Delhi, India, and open to remote opportunities — feel free to reach
              out anytime.
            </p>

            <div className="mb-8 space-y-3 text-sm text-[#ADB7BE]">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-medium text-white">Email:</span>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-primary-300 transition hover:text-primary-400"
                >
                  {EMAIL}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="rounded-full border border-primary-500/20 bg-primary-500/10 px-3 py-0.5 text-xs text-primary-300 transition hover:bg-primary-500/20"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
            <div className="mb-8 flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="rounded-full border border-white/10 bg-[#181818]/70 p-2.5 transition hover:scale-110 hover:border-primary-500/40"
                >
                  <Image
                    src={social.icon}
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>

            <a
              href="/resume.pdf"
              download
              className="inline-flex rounded-full border border-primary-500 px-5 py-2 text-sm font-medium text-primary-200 transition hover:bg-primary-500/20"
            >
              Download Resume
            </a>
          </div>

          {/* Right — Form */}
          <div className="rounded-2xl border border-white/10 bg-[#181818]/70 p-6 md:p-8">
            {emailSubmitted ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                <p className="text-2xl font-semibold text-white">
                  Message sent!
                </p>
                <p className="mt-3 max-w-sm text-sm text-[#ADB7BE]">
                  Thanks for reaching out. I&apos;ll get back to you as soon as
                  I can.
                </p>
                <button
                  type="button"
                  onClick={() => setEmailSubmitted(false)}
                  className="mt-6 rounded-lg border border-primary-500/30 px-4 py-2 text-sm text-primary-300 transition hover:bg-primary-500/10"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="_gotcha"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Your name
                  </label>
                  <input
                    name="name"
                    type="text"
                    id="name"
                    required
                    className={inputClassName}
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Your email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className={inputClassName}
                    placeholder="you@company.com"
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    id="subject"
                    required
                    className={inputClassName}
                    placeholder="Job opportunity / Collaboration"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={5}
                    className={inputClassName}
                    placeholder="Tell me a bit about what you have in mind..."
                  />
                </div>

                {error && (
                  <p className="mb-4 text-sm text-red-400" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-primary-500 py-2.5 px-5 font-medium text-white transition hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
