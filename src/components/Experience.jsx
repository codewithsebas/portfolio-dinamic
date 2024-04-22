/* eslint-disable react/prop-types */
import { ArrowUpRight } from "lucide-react";

const Experience = ({ experience }) => {
  return (
    <div className="flex justify-between gap-5 text-sm">
      <div className="w-36 opacity-70 text-center flex flex-col gap-5 pt-1.5">
        <a href={experience.web}
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
        {experience.initial} -{" "}
        {experience.finished ? experience.finished : "Present"}
      </div>
      <div className="w-full flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <a
            href={experience.url}
            className="text-base flex items-center gap-2 hover:underline "
          >
            {experience.title} <ArrowUpRight size={16} />
          </a>
          <p className="opacity-70 text-sm">{experience.description}</p>
        </div>
        <div className="grid grid-flow-row-dense gap-1 grid-cols-4 opacity-50 pb-2">
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
