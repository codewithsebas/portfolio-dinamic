import { BiLogoTypescript } from "react-icons/bi";
import {
  FaAngular,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaLaravel,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { RiJavascriptFill } from "react-icons/ri";
import { SiPhp, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Stack = () => {
  return (
    <div className=" flex flex-col gap-2">
      <h1 className="text-lg">Stack</h1>
      
      <div className="relative overflow-hidden pb-3 font-light">
      <div className="absolute left-0 top-0 w-28 h-14 bg-gradient-to-r from-[#18181b] to-transparent"></div>
      <div className="absolute right-0 top-0 w-28 h-14 bg-gradient-to-r from-transparent to-[#18181b]"></div>
        <div className="stack">
          <div className="flex flex-col items-center gap-1">
            <FaHtml5 className="text-2xl text-orange-400" />
            <span className="text-sm">HTML</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <FaCss3Alt className="text-2xl text-blue-400" />
            <span className="text-sm">CSS</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <RiJavascriptFill className="text-2xl text-yellow-200" />
            <span className="text-sm">JavaScript</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <FaReact className="text-2xl text-blue-400" />
            <span className="text-sm">React</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <TbBrandNextjs className="text-2xl " />
            <span className="text-sm">Next</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <SiTailwindcss className="text-2xl text-blue-400" />
            <span className="text-sm">Tailwind</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <FaAngular className="text-2xl text-red-500" />
            <span className="text-sm">Angular</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <BiLogoTypescript className="text-2xl text-blue-300" />
            <span className="text-sm">TypeScript</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <GrMysql className="text-2xl text-blue-300" />
            <span className="text-sm">MySQL</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <SiPhp className="text-2xl text-blue-300" />
            <span className="text-sm">PHP</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <FaLaravel className="text-2xl text-blue-300" />
            <span className="text-sm">Laravel</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <FaNodeJs className="text-2xl text-green-400" />
            <span className="text-sm">Node</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <FaGitAlt className="text-2xl text-orange-300" />
            <span className="text-sm">Git</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <FaGithub className="text-2xl text-white" />
            <span className="text-sm">Github</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <FaFigma className="text-2xl text-white" />
            <span className="text-sm">Figma</span>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Stack;
