import { ArrowUpRight, Github } from "lucide-react";

/* eslint-disable react/prop-types */
const Deploys = ({ deploy }) => {
  return (
    <div className="group flex flex-col bg-zinc-800 min-w-56 bg-zinc-800/20 border border-zinc-800 rounded-xl hover:scale-[0.98] hover:bg-zinc-800/50 duration-300">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={deploy.url}
        className="w-full h-40"
      >
        <img
          src={deploy.image}
          alt="Image"
          className="w-full h-full object-cover rounded-tl-lg rounded-t-lg hover:brightness-110 duration-300 pointer-events-none"
        />
      </a>
      <div className="flex justify-between items-center p-2 px-3">
        <h1 className="text-lg">{deploy.title}</h1>
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
      <hr className="opacity-10 mx-3" />
      <p className="p-3 opacity-70 text-sm max-h-28 font-light">{deploy.description}</p>
    </div>
  );
};

export default Deploys;
