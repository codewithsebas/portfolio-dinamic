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
import { RiJavascriptFill, RiSupabaseFill } from "react-icons/ri";
import { SiPhp, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Stack = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-lg mb-2">Stack</h1>
      
      <div className="relative overflow-hidden">
        <div className="absolute z-30 left-0 top-0 w-28 h-14 bg-gradient-to-r from-[#18181b] to-transparent"></div>
        <div className="absolute z-30 right-0 top-0 w-28 h-14 bg-gradient-to-r from-transparent to-[#18181b]"></div>
        <div className="flex animate-marquee whitespace-nowrap">
          <div className="flex items-center gap-6">
            <FaHtml5 className="text-3xl text-orange-400 hover:scale-110 transition-transform duration-300" />
            <FaCss3Alt className="text-3xl text-blue-400 hover:scale-110 transition-transform duration-300" />
            <RiJavascriptFill className="text-3xl text-yellow-200 hover:scale-110 transition-transform duration-300" />
            <FaReact className="text-3xl text-blue-400 hover:scale-110 transition-transform duration-300" />
            <TbBrandNextjs className="text-3xl hover:scale-110 transition-transform duration-300" />
            <SiTailwindcss className="text-3xl text-blue-400 hover:scale-110 transition-transform duration-300" />
            <FaAngular className="text-3xl text-red-500 hover:scale-110 transition-transform duration-300" />
            <BiLogoTypescript className="text-3xl text-blue-300 hover:scale-110 transition-transform duration-300" />
            <GrMysql className="text-3xl text-blue-300 hover:scale-110 transition-transform duration-300" />
            <RiSupabaseFill className="text-3xl text-green-300 hover:scale-110 transition-transform duration-300" />
            <SiPhp className="text-3xl text-blue-300 hover:scale-110 transition-transform duration-300" />
            <FaLaravel className="text-3xl text-red-500 hover:scale-110 transition-transform duration-300" />
            <FaNodeJs className="text-3xl text-green-400 hover:scale-110 transition-transform duration-300" />
            <FaGitAlt className="text-3xl text-orange-300 hover:scale-110 transition-transform duration-300" />
            <FaGithub className="text-3xl text-white hover:scale-110 transition-transform duration-300" />
            <FaFigma className="text-3xl text-white hover:scale-110 transition-transform duration-300" />
          </div>
          {/* Repetimos los íconos para crear un bucle infinito */}
          <div className="flex items-center gap-6">
            <FaHtml5 className="text-3xl text-orange-400 hover:scale-110 transition-transform duration-300" />
            <FaCss3Alt className="text-3xl text-blue-400 hover:scale-110 transition-transform duration-300" />
            <RiJavascriptFill className="text-3xl text-yellow-200 hover:scale-110 transition-transform duration-300" />
            <FaReact className="text-3xl text-blue-400 hover:scale-110 transition-transform duration-300" />
            <TbBrandNextjs className="text-3xl hover:scale-110 transition-transform duration-300" />
            <SiTailwindcss className="text-3xl text-blue-400 hover:scale-110 transition-transform duration-300" />
            <FaAngular className="text-3xl text-red-500 hover:scale-110 transition-transform duration-300" />
            <BiLogoTypescript className="text-3xl text-blue-300 hover:scale-110 transition-transform duration-300" />
            <GrMysql className="text-3xl text-blue-300 hover:scale-110 transition-transform duration-300" />
            <RiSupabaseFill className="text-3xl text-green-300 hover:scale-110 transition-transform duration-300" />
            <SiPhp className="text-3xl text-blue-300 hover:scale-110 transition-transform duration-300" />
            <FaLaravel className="text-3xl text-red-500 hover:scale-110 transition-transform duration-300" />
            <FaNodeJs className="text-3xl text-green-400 hover:scale-110 transition-transform duration-300" />
            <FaGitAlt className="text-3xl text-orange-300 hover:scale-110 transition-transform duration-300" />
            <FaGithub className="text-3xl text-white hover:scale-110 transition-transform duration-300" />
            <FaFigma className="text-3xl text-white hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
