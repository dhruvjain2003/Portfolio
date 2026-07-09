"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaCode } from "react-icons/fa";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Experience", path: "#experience" },
  { title: "Awards", path: "#awards" },
  { title: "Projects", path: "#projects" },
  { title: "Learning", path: "#certifications" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const closeMenu = () => setNavbarOpen(false);

  useEffect(() => {
    document.body.style.overflow = navbarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navbarOpen]);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 border-b backdrop-blur-xl transition-colors duration-300 ${
          navbarOpen
            ? "z-[70] border-transparent bg-[#121212]"
            : "z-50 border-white/5 bg-[#121212]/95"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3 text-2xl font-bold text-white transition-colors duration-300 hover:text-primary-400 md:text-3xl"
          >
            <FaCode className="text-primary-400 transition-transform duration-300 hover:rotate-12" />
            <span>Dhruv Jain</span>
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            <ul className="flex items-center gap-8 text-lg font-medium text-white">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>

            <a
              href="/resume.pdf"
              download
              className="rounded-full border border-primary-500 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-primary-400 hover:bg-primary-500/10"
            >
              Resume
            </a>
          </div>

          {navbarOpen ? (
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="rounded-full border border-white/10 p-2 text-white transition hover:border-primary-500 hover:bg-primary-500/10 hover:text-primary-400 md:hidden"
            >
              <XMarkIcon className="h-7 w-7" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setNavbarOpen(true)}
              aria-label="Open menu"
              aria-expanded={false}
              className="text-white transition hover:text-primary-400 md:hidden"
            >
              <Bars3Icon className="h-7 w-7" />
            </button>
          )}
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] bg-[#121212] transition-opacity duration-300 md:hidden ${
          navbarOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
        aria-hidden={!navbarOpen}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8 px-6 pt-16">
          <ul className="flex w-full max-w-sm flex-col items-center gap-6 text-2xl font-semibold text-white">
            {navLinks.map((link) => (
              <li key={link.title} className="w-full text-center">
                <NavLink
                  href={link.path}
                  title={link.title}
                  onNavigate={closeMenu}
                  className="!p-0 text-2xl text-white transition-colors duration-300 hover:text-primary-400"
                />
              </li>
            ))}
          </ul>

          <a
            href="/resume.pdf"
            download
            onClick={closeMenu}
            className="rounded-full border border-primary-500 px-6 py-3 text-lg text-white transition-all duration-300 hover:bg-primary-500/10"
          >
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
