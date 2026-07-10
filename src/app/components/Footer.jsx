import React from "react";
import { FaCode } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-[#33353F] bg-[#121212] text-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <FaCode className="text-primary-400" />
            Dhruv Jain
          </div>

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Dhruv Jain
          </p>
        </div>

        <div className="mt-6 border-t border-white/5 pt-6 text-center">
          <p className="text-sm text-gray-500">
            Building scalable software with clean architecture and thoughtful engineering.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;