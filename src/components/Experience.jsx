/* eslint-disable react/prop-types */
import { ArrowUpRight } from "lucide-react";

const Experience = ({ experience }) => {
  return (
    <div className="flex flex-col justify-between gap-5 py-2 text-sm sm:flex-row sm:items-start duration-300">
      <div className="w-full sm:w-36  text-center flex flex-col items-center sm:items-start gap-5 pt-1.5 duration-300">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={experience.web}
          className={`w-28 h-28 ${experience.bg} rounded flex items-center justify-center group`}
        >
          <img
            className="group-hover:scale-105 duration-300 rounded-md"
            src={experience.logo}
            alt={experience.alt}
            width={85}
            height={85}
          />
        </a>
        <div className="opacity-70 font-light w-full">
          {experience.initial} -{" "} <br />
          {experience.finished ? experience.finished : "Present"}
        </div>
      </div>
      <div className="w-auto flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={experience.url}
            className="text-base flex items-center gap-2 hover:underline "
          >
            {experience.title} <ArrowUpRight size={16} />
          </a>
          <p className="opacity-70 text-sm font-light">
            {experience.description}
          </p>
        </div>
        <div className="grid grid-flow-row-dense gap-2 grid-cols-2 md:grid-cols-3 opacity-90 pb-2">
          {experience.technologie.map((tech, index) => (
            <span className="font-base w-full" key={index}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
