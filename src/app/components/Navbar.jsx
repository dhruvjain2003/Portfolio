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
          className="flex items-center gap-2 sm:gap-3 lg:gap-4 text-xl sm:text-3xl lg:text-4xl font-bold text-white hover:text-blue-500 transition"
        >
          <FaCode />
          Dhruv Jain
        </Link>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="text-white hover:text-blue-500 focus:outline-none"
            >
              <Bars3Icon className="h-7 w-7" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="text-white hover:text-blue-500 focus:outline-none"
            >
              <XMarkIcon className="h-7 w-7" />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {navbarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-20 flex flex-col items-center justify-center transition-all duration-500 ease-in-out transform translate-x-0">
          <div
            className="absolute top-5 right-5 text-white cursor-pointer"
            onClick={() => setNavbarOpen(false)}
          >
            <XMarkIcon className="h-8 w-8" />
          </div>
          <ul className="space-y-8 text-white text-3xl">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  className="hover:text-blue-500 transition-all"
                />
              </li>
            ))}
          </ul>
        </div>
      )}
      <style jsx>{`
        .transition-transform {
          transition: transform 0.5s ease-in-out;
        }

        .transform {
          transform: translateX(100%);
        }

        .translate-x-0 {
          transform: translateX(0);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
