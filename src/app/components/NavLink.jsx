import Link from "next/link";

const NavLink = ({ href, title, className = "" }) => {
  return (
    <Link
      href={href}
      className={`block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 relative group ${className}`}
      aria-label={title}
    >
      {title}
      {/* Underline effect */}
      <span className="absolute left-0 bottom-0 w-0 h-1 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

export default NavLink;
