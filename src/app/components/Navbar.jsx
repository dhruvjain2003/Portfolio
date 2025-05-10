"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaCode } from "react-icons/fa";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212] bg-opacity-100">
      <div className="flex container items-center justify-between mx-auto px-4 py-3 sm:py-4 lg:py-5">
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 lg:gap-4 text-xl sm:text-3xl lg:text-4xl font-bold text-white hover:text-indigo-500 transition"
        >
          <FaCode className="animate-pulse text-indigo-500 drop-shadow-md" />
          Dhruv Jain
        </Link>

        <div className="block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="text-white hover:text-blue-500 focus:outline-none"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </div>

        <div className="hidden md:block">
          <ul className="flex space-x-8 text-white font-medium text-lg">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 backdrop-blur-md bg-black/80 bg-opacity-90 transform transition-transform duration-300 ease-in-out ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setNavbarOpen(false)}
          className="absolute top-6 right-6 text-white hover:text-blue-500"
        >
          <XMarkIcon className="h-8 w-8" />
        </button>

        <ul className="flex flex-col items-center justify-center h-full gap-1 text-white text-2xl font-semibold">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                href={link.path}
                title={link.title}
                className="hover:text-blue-500 transition duration-300"
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
