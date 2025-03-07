import { ArrowDownToLine, ArrowUpRight, Github, Linkedin } from "lucide-react";
import Header from "./components/Header";
import { experience, deploys } from "./utils/info";
import Experience from "./components/Experience";
import Stack from "./components/Stack";
import Carousel from "./components/Carousel";

function App() {
  return (
    <main className="relative w-full h-full  flex justify-center items-center" >
      <div className="absolute inset-0 -z-10 h-full w-full bg-black"><div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_-100%,#ff00ff30,transparent)] animate-pulse"></div><div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_200%,#00ffff30,transparent)] animate-pulse"></div><div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:100px_100px]"></div></div>
      <div className="w-full min-h-screen max-w-4xl flex flex-col gap-8 px-3 py-3 md:py-10 text-white">
        <Header />
        

        <div>
          <h1 className="text-lg">Sobre mí</h1>
          <p className="opacity-90 text-sm font-light">
            <span className="text-white opacity-100 font-bold">Desarrollador Frontend con 3 años de experiencia</span><br /> creando
            soluciones web innovadoras y centradas en el usuario.
            <br /><br />
            Experto en transformar ideas en interfaces intuitivas y
            funcionales utilizando <span className="text-white opacity-100 font-bold">HTML, CSS, JavaScript (React, Angular,
              Laravel) y diseño responsive.</span> <br /> Con experiencia en sectores
            como salud, fintech, agencias digitales y software, sé
            adaptarme rápidamente a diferentes necesidades y entregar
            productos de alta calidad que generen un impacto real.
            <br /><br />
            Apasionado de la optimización, la accesibilidad y la
            colaboración eficiente con equipos multidisciplinares para
            llevar los <span className="text-white opacity-100 font-bold">proyectos al éxito.</span>
          </p>
          
        </div>

        <a
            aria-label="Curriculum_Sebastian_Giraldo"
            rel="noreferrer"
            target="_blank"
            download="Frontend Developer.pdf"
            href="/download/Frontend Developer.pdf"
            className="w-fit text-black rounded-md text-sm flex items-center gap-2 bg-white py-1 px-3 duration-200 hover:opacity-90"
          >
            Descargar Curriculum <ArrowDownToLine size={16} />
          </a>
        

        <Stack />

        <div className="flex flex-col gap-5">

          <div className="grid grid-flow-row-dense gap-3 grid-cols-1 sm:grid-cols-3">
            <a
              href="https://www.linkedin.com/in/joabgiraldo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center border border-white/5 text-center justify-center rounded-md bg-white/5 hover:opacity-90 duration-100"
            >
              LinkedIn <Linkedin size={16} />
            </a>
            <a
              href="https://github.com/codewithsebas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center border border-white/5 text-center justify-center rounded-md bg-white/5 hover:opacity-90 duration-100"
            >
              Github <Github size={16} />
            </a>
            <a
              href="https://dev.to/codewithsebas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center border border-white/5 text-center justify-center rounded-md bg-white/5 hover:opacity-90 duration-100"
            >
              Dev <ArrowUpRight size={16} />
            </a>
          </div>
        </div>



        <div className="flex flex-col gap-5">
          <h1 className="text-lg">Mejores Deploys</h1>

          <Carousel deploys={deploys} />
        </div>

        <hr className="opacity-5" />

        <div className="flex flex-col gap-5">
          <h1 className="text-lg">Experiencia</h1>

          {experience.map((experience, index) => (
            <Experience key={index} experience={experience} />
          ))}
        </div>

        <hr className="opacity-5" />

        
      </div>
    </main>
  );
}

export default App;
