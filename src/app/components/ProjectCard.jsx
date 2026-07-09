import React from "react";
import Image from "next/image";
import {
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  previewLabel = "Live Demo",
  techStack,
  featured = false,
}) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#181818]/70 transition duration-300 hover:-translate-y-1 hover:border-primary-500/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.12)]">
      <div className="relative h-52 overflow-hidden md:h-56">
        <Image
          src={imgUrl}
          alt={`${title} project preview`}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 80vw, 33vw"
        />

        {featured && (
          <span className="absolute left-3 top-3 rounded-full border border-primary-500/30 bg-primary-500/20 px-2.5 py-0.5 text-xs font-medium text-primary-200 backdrop-blur-sm">
            Featured
          </span>
        )}

        <div className="absolute inset-0 hidden items-center justify-center gap-3 bg-[#121212]/75 opacity-0 transition duration-300 group-hover:opacity-100 md:flex">
          <a
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} source code`}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-primary-400 hover:bg-primary-500/20"
          >
            <CodeBracketIcon className="h-6 w-6" />
          </a>
          <a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${previewLabel} for ${title}`}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-primary-400 hover:bg-primary-500/20"
          >
            <ArrowTopRightOnSquareIcon className="h-6 w-6" />
          </a>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[#ADB7BE]">
          {description}
        </p>

        {techStack?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-primary-500/20 bg-primary-500/10 px-2.5 py-1 text-xs text-primary-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4 md:hidden">
          <a
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-[#ADB7BE] transition hover:border-primary-500/40 hover:text-white"
          >
            <CodeBracketIcon className="h-4 w-4" />
            Code
          </a>
          <a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-primary-500/30 bg-primary-500/10 px-3 py-2 text-sm text-primary-200 transition hover:bg-primary-500/20"
          >
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            {previewLabel}
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
