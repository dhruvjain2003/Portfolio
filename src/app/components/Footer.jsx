import React from "react";
import { FaCode } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-[#33353F] bg-[#121212] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <FaCode />
          Dhruv Jain
        </div>

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Dhruv Jain. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
