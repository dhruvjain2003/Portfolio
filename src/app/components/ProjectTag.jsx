import React from "react";

const ProjectTag = ({ name, count, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "border-primary-500 bg-primary-500/10 text-white"
    : "border-white/10 text-[#ADB7BE] hover:border-primary-500/40 hover:bg-primary-500/10 hover:text-white";

  return (
    <button
      type="button"
      aria-pressed={isSelected}
      className={`${buttonStyles} cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/50`}
      onClick={() => onClick(name)}
    >
      {name}
      {count !== undefined && (
        <span className="ml-1.5 text-xs opacity-70">({count})</span>
      )}
    </button>
  );
};

export default ProjectTag;
