import { ArrowDownToLine, ArrowUpRight, Github, Linkedin } from "lucide-react";
import Header from "./components/Header";
import { experience, deploys } from "./utils/info";
import Experience from "./components/Experience";
import Stack from "./components/Stack";
import Carousel from "./components/Carousel";

function App() {
  return (
    <main className="relative w-full h-full  flex justify-center items-center" >
      <div className="absolute inset-0 -z-10 h-full w-full bg-blue-700 overflow-hidden">
        {/* Gradientes existentes */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_-100%,#ff00ff30,transparent)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_200%,#00ffff30,transparent)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        {/* Estrellas animadas */}
        {[...Array(200)].map((_, i) => (
          <span
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-80 animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></span>
        ))}
      </div>

      <div className="w-full min-h-screen max-w-4xl flex flex-col gap-8 px-3 py-3 md:py-10 text-white">
        <Header />


        <div>
          <h1 className="text-2xl text-white font-semibold mb-2">Sobre mí</h1>
          <p className="text-base font-medium">
            <span className="text-white font-bold">Desarrollador Frontend con 3 años de experiencia</span><br /> creando
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

        <div className="flex flex-col justify-between gap-2 items-center sm:flex-row">
          <a
            aria-label="Curriculum_Sebastian_Giraldo"
            rel="noreferrer"
            target="_blank"
            download="Frontend Developer.pdf"
            href="/download/Frontend Developer.pdf"
            className="flex gap-2 items-center w-full sm:w-fit px-4 py-1 border border-white/5 text-center justify-center rounded-md font-bold bg-white text-blue-600 hover:opacity-90 duration-100"
          >
            Descargar Curriculum <ArrowDownToLine size={16} />
          </a>

          <div className="flex flex-col gap-5">

            <div className="grid grid-flow-row-dense w-full gap-3 grid-cols-3 sm:grid-cols-3">
              <a
                href="https://www.linkedin.com/in/codewithsebas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center px-4 py-1 border border-white/5 text-center justify-center rounded-md font-bold bg-white text-blue-600 hover:opacity-90 duration-100"
              >
                LinkedIn <Linkedin size={16} />
              </a>
              <a
                href="https://github.com/codewithsebas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center px-4 py-1 border border-white/40 text-center text-white justify-center rounded-md font-semibold bg-black hover:opacity-90 duration-100"
              >
                Github <Github size={16} />
              </a>
              <a
                href="https://libnb.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center px-4 py-1 border border-white/30 text-center justify-center rounded-md font-semibold bg-[#FF4F6F] text-white hover:opacity-90 duration-100"
              >
                Libnb <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>



        <Stack />




        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-semibold">Mejores Deploys</h1>

          <Carousel deploys={deploys} />
        </div>


        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-semibold pb-2 border-b-2 border-white">Experiencia</h1>

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
