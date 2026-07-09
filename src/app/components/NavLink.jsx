import Link from "next/link";

const NavLink = ({ href, title, className = "", onNavigate }) => {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`relative block rounded py-2 pl-3 pr-4 text-[#ADB7BE] hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 group md:p-0 ${className}`}
      aria-label={title}
    >
      {title}
      <span className="absolute bottom-0 left-0 hidden h-1 w-0 bg-purple-500 transition-all duration-300 group-hover:w-full md:block" />
    </Link>
  );
};

export default NavLink;
