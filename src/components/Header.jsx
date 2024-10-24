import { ArrowDownToLine } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between flex-col items-start sm:flex-row">
      <div className="flex justify-center items-center m-auto">
        <img
          src="https://res.cloudinary.com/dovavvnjx/image/upload/v1713732223/me_pr8bas.jpg"
          alt="Fotografia"
          width={120}
          height={120}
          className="rounded-xl duration-300 h-60 sm:h-40 w-60 object-cover"
        />
      </div>
      <div className="w-full sm:ps-6  py-3 flex flex-col justify-between items-center sm:items-start gap-1 mt-2 relative">
        <div className="text-center sm:text-start">
          <h1 className="text-3xl font-bold">Sebastián Giraldo</h1>

          <p className="text-base">
            Frontend Developer & UI/UX Entrepreneur at{" "}
            <a
              href="https://www.linkedin.com/company/beautizzi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-sky-200 opacity-100 hover:underline"
            >
              Beautizzí
            </a>
            .
          </p>
        </div>



        <div className="text-center sm:text-start">
          <a className="text-base text-sky-200 opacity-100 hover:underline" href="tel:+57 315 2058712">
            Contactame:  315 2058712
          </a>
          <p className="text-base text-white opacity-100">Medellín, Antioquia</p>
        </div>

        <div className="flex justify-end absolute -bottom-7 right-0">
          <a
            aria-label="Curriculum_Sebastian_Giraldo"
            rel="noreferrer"
            target="_blank"
            download="FullStack Developer.pdf"
            href="/download/FullStack Developer.pdf"
            className="opacity-70 text-sm flex items-center gap-2 duration-200 hover:opacity-100"
          >
            Download Currículum <ArrowDownToLine size={16} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
