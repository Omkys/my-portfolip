const Certificate = () => {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 space-y-6">
      <h2 className="text-3xl font-bold text-neutral-800 flex items-center gap-2">
        🎖️ Certifications & Badges
      </h2>

      <p className="text-neutral-600 text-lg leading-relaxed">
        Here are my verified certifications and skill badges earned through continuous learning and hands-on practice.
        All of them are hosted on Credly.
      </p>

      <a
        href="https://www.credly.com/users/onkar-bobde.fe3f30b9" // 🔁 my  Credly URLhave funnnnnnnnnn
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
      >
        🌐 View My Credly Profile
      </a>
    </section>
  );
};

export default Certificate;
