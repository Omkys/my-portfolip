import NavButtons from './NavButtons';

export default function IntroSection({ setShowSection }) {
  return (
    <div className="max-w-4xl bg-white shadow-xl rounded-2xl p-6 sm:p-10 md:p-12 w-full space-y-6 mt-17 ml-6 sm:ml-6 md:ml-12">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        <div className="text-center md:text-left w-full md:w-2/3">
          <h1 className="text-4xl sm:text-5xl font-semibold text-neutral-700 cursor-pointer hover:text-amber-500 transition-all duration-300">
            ONKAR BOBDE
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600">
            Full Stack Developer | MERN | DevOps Enthusiast
          </p>
          <p className="text-neutral-700 leading-relaxed mt-5">
            I build scalable and efficient web applications using the MERN
            stack. I'm passionate about clean code, modern UI/UX, and
            continuous learning. Always ready for the next challenge!
          </p>
        </div>
      </div>

      {/* 🧠 NavButtons sits here */}
      <NavButtons setShowSection={setShowSection} />
    </div>
  );
}
