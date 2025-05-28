import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ setShowSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size on load and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint at 768px
    };

    checkScreenSize(); // initial check

    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleNavClick = (section) => {
    setShowSection(section);
    setMenuOpen(false);
  };

  return (
    <nav className="w-full bg-neutral-800 text-white py-4 px-6 shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1
          className="text-xl font-bold hover:text-amber-400 transition duration-200 cursor-pointer"
        >
          Onkar Bobde
        </h1>

        {/* Conditionally render div based on isMobile */}
        {isMobile ? (
          <>
            {/* Mobile hamburger */}
            <div>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                className="focus:outline-none"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile dropdown menu */}
            {menuOpen && (
              <div className="flex flex-col space-y-4 px-4 pb-4">
                <NavButtons handleClick={handleNavClick} />
              </div>
            )}
          </>
        ) : (
          /* Desktop/Tablet nav buttons */
          <div className="flex space-x-6">
            <NavButtons handleClick={handleNavClick} />
          </div>
        )}
      </div>
    </nav>
  );
}

function NavButtons({ handleClick }) {
  return (
    <>
      <button
        onClick={() => handleClick('about')}
        className="hover:text-amber-400 transition duration-200 hover:underline"
      >
        About
      </button>
      <button
        onClick={() => handleClick('projects')}
        className="hover:text-amber-400 transition duration-200 hover:underline"
      >
        Projects
      </button>
      <button
        onClick={() => handleClick('skills')}
        className="hover:text-amber-400 transition duration-200 hover:underline"
      >
        Skills
      </button>
      <button
        onClick={() => handleClick('certificates')}
        className="hover:text-amber-400 transition duration-200 hover:underline"
      >
        Certifications
      </button>
      <button
        onClick={() => handleClick('education')}
        className="hover:text-amber-400 transition duration-200 hover:underline"
      >
        Education
      </button>
      <button
        onClick={() => handleClick('contactme')}
        className="hover:text-amber-400 transition duration-200 hover:underline"
      >
        Contact me
      </button>
    </>
  );
}
