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
          className={`w-36 h-36 ${experience.bg} rounded flex items-center justify-center group`}
        >
          <img
            className="group-hover:scale-105 duration-300 rounded-md"
            src={experience.logo}
            alt={experience.alt}
            width={100}
            height={100}
          />
        </a>
        <div className="font-semibold w-full text-nowrap bg-white/20 rounded-md py-1">
          {experience.initial} -{" "}
          {experience.finished ? experience.finished : "Present"}
        </div>
      </div>
      <div className="w-auto flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={experience.url}
            className="text-2xl flex items-center gap-2 hover:underline font-bold"
          >
            {experience.title} <ArrowUpRight size={16} />
          </a>
          <p className="text-base font-medium text-white/90">
            {experience.description}
          </p>
        </div>
        <div className="grid grid-flow-row-dense gap-2 grid-cols-2 md:grid-cols-3 pb-2">
          {experience.technologie.map((tech, index) => (
            <span className="font-semibold w-full ps-2 py-1 rounded-md bg-gradient-to-r from-white/20 to-transparent" key={index}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
