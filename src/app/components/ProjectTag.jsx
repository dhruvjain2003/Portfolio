import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      className={`${buttonStyles} 
        rounded-full border-2 
        px-4 py-2 text-sm 
        sm:px-5 sm:py-2.5 sm:text-base 
        md:px-6 md:py-3 md:text-xl 
        cursor-pointer transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-primary-500
  hover:text-white hover:bg-primary-500/10`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
