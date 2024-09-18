import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import Header from "./components/Header";
import { experience, projects, deploys } from "./utils/info";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Deploys from "./components/Deploys";

function App() {
  return (
    <main className="relative w-full h-full  flex justify-center items-center bg-[#18181b]">
      <div className="w-full min-h-screen max-w-2xl flex flex-col gap-8 px-3 py-3 md:py-10 text-white">
        <Header />

        <div>
          <h1 className="text-lg">Sobre mí</h1>
          <p className="opacity-80 text-sm font-light">
            Como desarrollador web, me especializo en crear productos dinámicos e innovadores desde la conceptualización hasta su implementación. <br /><br />
            Mi <b className="opacity-100">fortaleza</b> reside en diseñar experiencias de usuario intuitivas que evolucionan y mejoran basadas en métricas reales. Con un enfoque constante en la entrega, aseguro que los proyectos se completen de manera exitosa y generen resultados tangibles.
          </p>
        </div>

        <Stack />

        <div className="flex flex-col gap-5">
          <h1 className="text-lg">Mejores Deploys</h1>

          <div className="flex gap-3 pb-3 overflow-x-auto max-w-full max-h-80 h-full">
            {deploys.map((deploy, index) => (
              <Deploys key={index} deploy={deploy} />
            ))}
          </div>
        </div>

        <hr className="opacity-5" />

        <div className="flex flex-col gap-5">
          <h1 className="text-lg">Experiencia</h1>

          {experience.map((experience, index) => (
            <Experience key={index} experience={experience} />
          ))}
        </div>

        <hr className="opacity-5" />

        <div className="flex flex-col gap-5">
          <h1 className="text-lg">Proyectos nuevos</h1>

          {projects.map((project, index) => (
            <Projects key={index} project={project} />
          ))}
        </div>

        <hr className="opacity-5" />

        <footer className="flex flex-col gap-5">
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
              href="https://www.linkedin.com/company/beautizzi"
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
        </footer>
      </div>
    </main>
  );
}

export default App;
