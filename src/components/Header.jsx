import { ArrowDownToLine } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between">
      <div className="flex justify-center items-center">
        <img
          src="https://res.cloudinary.com/dovavvnjx/image/upload/v1713732223/me_pr8bas.jpg"
          alt="Fotografia"
          width={120}
          height={120}
          className="rounded-xl duration-300 h-40 w-60 object-cover"
        />
      </div>
      <div className="w-full ps-6 py-3 flex flex-col justify-between gap-1">
        <div>
          <h1 className="text-2xl font-bold">Sebastián Giraldo</h1>

          <p className="text-sm">
            Frontend Developer & UI/UX Entrepreneur at{" "}
            <a
              href="https://www.linkedin.com/company/beautizzi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-sky-200 opacity-100 hover:underline"
            >
              Beautizzí
            </a>
            .
          </p>
        </div>

        <a
          aria-label="Curriculum_Sebastian_Giraldo"
          rel="noreferrer"
          target="_blank"
          download="Frontend Developer.pdf"
          href="/download/Frontend Developer.pdf"
          className="opacity-70 text-sm flex items-center gap-2"
        >
          Download Currículum <ArrowDownToLine size={16} />
        </a>

        <div>
          <a className="text-sm text-sky-200 opacity-100 hover:underline" href="tel:+57 315 2058712">
            Contactame:  315 2058712
          </a>
          <p className="text-sm text-white opacity-100">Medellín, Antioquia</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
