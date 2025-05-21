// Navbar.jsx
export default function Navbar({ setShowSection }) {
  return (
    <nav className="w-full bg-neutral-800 text-white py-4 px-6 shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold hover:text-amber-400 transition duration-200">Onkar Bobde</h1>
        <div className="flex space-x-6">
          <button
            onClick={() => setShowSection('about')}
            className="hover:text-amber-400 transition duration-200"
          >
            About
          </button>
          <button
            onClick={() => setShowSection('projects')}
            className="hover:text-amber-400 transition duration-200"
          >
            Projects
          </button>
          <button
            onClick={() => setShowSection('skills')}
            className="hover:text-amber-400 transition duration-200"
          >
            Skills
          </button>
          <button
            onClick={() => setShowSection('certificates')}
            className="hover:text-amber-400 transition duration-200"
          >
            Certifications
          </button>
          <button
            onClick={() => setShowSection('education')}
            className="hover:text-amber-400 transition duration-200"
          >
            Education
          </button>
          <button
            onClick={() => setShowSection('contactme')}
            className="hover:text-amber-400 transition duration-200"
          >
            Contact me
          </button>
        </div>
      </div>
    </nav>
  );
}
