import React from "react";
import { FaCode } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-[#33353F] text-white bg-[#121212]">
      <div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <FaCode />
          Dhruv Jain
        </div>
        <p className="text-sm text-gray-400 mt-4 sm:mt-0">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
