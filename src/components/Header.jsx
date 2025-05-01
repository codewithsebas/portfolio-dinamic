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
          <h1 className="text-5xl font-bold">Joab Giraldo</h1>

          <p className="text-2xl pt-2 font-semibold">
            Desarrollador Frontend Mid
          </p>
        </div>



        <div className="text-center sm:text-start">
          <a className="text-lg text-sky-200 opacity-100 hover:underline" href="tel:+57 315 2058712">
            Contactame:  <span className="text-white font-semibold underline">315 2058712</span>
          </a>
          <p className="text-lg text-white opacity-100 font-semibold">Medellín, Antioquia | Colombia</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
