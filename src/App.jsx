import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import Header from "./components/Header";
import { entrepreneur, experience, projects } from "./utils/info";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Entrepreneur from "./components/Entrepreneur";

function App() {
  return (
    <main className="relative w-full h-full  flex justify-center items-center bg-zinc-900 backdrop-blur-xl">
      <div className="w-full min-h-screen max-w-lg flex flex-col gap-8 px-3 py-3 md:py-10 text-white">
        <Header />
        <div>
          <h1 className="text-lg">About</h1>
          <p className="opacity-70 text-sm">
            As a web developer, I thrive on crafting dynamic and innovative
            products from inception to execution. <br /> My expertise lies in creating
            intuitive user experiences that evolve and enhance based on user
            metrics. With a relentless focus on delivery, I ensure that projects
            reach completion and consistently deliver tangible results.
          </p>
        </div>

        <hr className="opacity-5" />

        <div className="flex flex-col gap-5">
          <h1 className="text-lg">Work Experience</h1>

          {experience.map((experience, index) => (
            <Experience key={index} experience={experience} />
          ))}
        </div>

        <hr className="opacity-5" />

        <div className="flex flex-col gap-5">
          <h1 className="text-lg">News Projects</h1>

          {projects.map((experience, index) => (
            <Projects key={index} experience={experience} />
          ))}
        </div>

        <hr className="opacity-5" />

        <div className="flex flex-col gap-5">
          <h1 className="text-lg">Entrepreneur</h1>

          {entrepreneur.map((experience, index) => (
            <Entrepreneur key={index} experience={experience} />
          ))}
        </div>

        <hr className="opacity-5" />

        <div className="flex flex-col gap-5">
          <h1 className="text-lg">Links Socials</h1>

          <div className="grid grid-flow-row-dense gap-3 grid-cols-3 grid-rows-3 ...">
            <a
              href="https://www.linkedin.com/in/joabgiraldo/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 flex gap-2 items-center hover:opacity-100 duration-100"
            >
              LinkedIn <Linkedin size={16} />
            </a>
            <a
              href="https://github.com/codewithsebas"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 flex gap-2 items-center hover:opacity-100 duration-100"
            >
              Github <Github size={16} />
            </a>
            <a
              href="https://chatizzi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 flex gap-2 items-center hover:opacity-100 duration-100"
            >
              Company <ArrowUpRight size={16} />
            </a>
            <a
              href="https://dev.to/codewithsebas"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 flex gap-2 items-center hover:opacity-100 duration-100"
            >
              Dev <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
