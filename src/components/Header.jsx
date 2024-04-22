const Header = () => {
  return (
    <header className="flex justify-between">
      <div className="flex justify-center items-center">
        <img
          src="https://res.cloudinary.com/dovavvnjx/image/upload/v1713732223/me_pr8bas.jpg"
          alt="Fotografia"
          width={120}
          height={120}
          className="rounded-full hover:scale-105 duration-300"
        />
      </div>
      <div className="w-full ps-6 py-3">
        <h1 className="text-xl">Sebastián Giraldo</h1>
        <p className="opacity-50 text-sm">
          FullStack Developer & UI/UX Entrepreneur at Chatizzí.
        </p>
        <a
          href="..//src/pdf/Developer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-70 text-sm"
        >
          Descargar Currículum
        </a>
      </div>
    </header>
  );
};

export default Header;
