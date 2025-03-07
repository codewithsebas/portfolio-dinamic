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
          <h1 className="text-4xl font-bold">Joab Giraldo</h1>

          <p className="text-xl pt-2">
            Desarrollador Frontend
          </p>
        </div>



        <div className="text-center sm:text-start">
          <a className="text-base text-sky-200 opacity-100 hover:underline" href="tel:+57 315 2058712">
            Contactame:  315 2058712
          </a>
          <p className="text-base text-white opacity-100">Líbano, Tolima</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
