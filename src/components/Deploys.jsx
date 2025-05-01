import { ArrowUpRight, Github } from "lucide-react";

/* eslint-disable react/prop-types */
const Deploys = ({ deploy }) => {
  return (
    <div className="group flex flex-col h-96 bg-white text-black w-full border border-blue-700 rounded-xl duration-300 select-none">
      <img
        src={deploy.image}
        alt="Image"
        className="w-full h-full min-h-60 max-h-80 object-cover rounded-tl-lg rounded-t-lg hover:brightness-110 duration-300 pointer-events-none"
      />
      <div className="flex justify-between items-center p-1 px-3 pt-2">
        <h1 className="text-md font-semibold select-none text-black">{deploy.title}</h1>
        <div className="flex items-center gap-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={deploy.urlRepo}
          >
            <Github size={20} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={deploy.url}
          >
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
      <p className="p-3 pt-0 opacity-90 text-sm max-h-28 font-semibold text-gray-600">{deploy.description}</p>
    </div>
  );
};

export default Deploys;
