import { ArrowUpRight } from "lucide-react";

/* eslint-disable react/prop-types */
const Projects = ({experience}) => {
  return (
    <div className="flex justify-between gap-5 text-sm">
      <div className="w-2/5 h-fit opacity-70">
        {experience.initial} -{" "}
        {experience.finished ? experience.finished : "present"}
      </div>
      <div className="w-full flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <a
            href="/"
            className="text-base flex items-center gap-2 hover:underline "
          >
            {experience.title} <ArrowUpRight size={16} />
          </a>
          <p className="opacity-70 text-sm">{experience.description}</p>
        </div>
        <div className="flex gap-1 opacity-50">
          {experience.technologie.map((tech, index) => (
            <span className="font-base" key={index}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
