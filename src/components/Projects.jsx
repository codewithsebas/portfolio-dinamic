import { ArrowUpRight } from "lucide-react";

/* eslint-disable react/prop-types */
const Projects = ({ project }) => {
  return (
    <div className="flex flex-col-reverse justify-between gap-5 py-2 text-sm sm:flex-row sm:items-start duration-300">
      <div className="w-36  text-center flex flex-col gap-5 pt-1.5 duration-300">
        <a
          href={project.web}
          className={`w-28 h-28 ${project.bg} rounded flex items-center justify-center group`}
        >
          <img
            className="w-full h-full object-cover group-hover:scale-105 duration-300 rounded-md"
            src={project.logo}
            alt={project.alt}
            width={85}
            height={85}
          />
        </a>
        <div className="opacity-70 font-light">
          {project.initial} -{" "}
          {project.finished ? project.finished : "Present"}
        </div>
      </div>
      <div className="w-auto flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <a
            href={project.url}
            className="text-base flex items-center gap-2 hover:underline "
          >
            {project.title} <ArrowUpRight size={16} />
          </a>
          <p className="opacity-70 text-sm font-light">
            {project.description}
          </p>
        </div>
        <div className="grid grid-flow-row-dense gap-2 grid-cols-2 md:grid-cols-3 opacity-90 pb-2">
          {project.technologie.map((tech, index) => (
            <span className="font-base w-full" key={index}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
