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
          className="rounded-xl hover:scale-105 duration-300"
        />
      </div>
      <div className="w-full ps-6 py-3 flex flex-col gap-1">
        <h1 className="text-xl">Sebastián Giraldo</h1>

        <p className="text-sm">
          FullStack Developer & UI/UX Entrepreneur at{" "}
          <a
            href="https://chatizzi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-sky-200 opacity-100 hover:underline"
          >
            Chatizzí
          </a>
          .
        </p>

        <a
          aria-label="Curriculum_Sebastian_Giraldo"
          rel="noreferrer"
          target="_blank"
          download="Developer.pdf"
          href="/download/Developer.pdf"
          className="opacity-70 text-sm flex items-center gap-2"
        >
          Download Currículum <ArrowDownToLine size={16} />
        </a>
      </div>
    </header>
  );
};

export default Header;
