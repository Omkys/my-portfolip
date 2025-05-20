import { useState, useEffect } from 'react';
import './App.css';
import IntroSection from './components/About';
import SectionRenderer from './components/SectionRenderer';
import FabButtons from './components/FabButtons';
import Feedback from './sections/Feedback';
import Footer from './components/Footer';
import { Toaster, toast } from 'react-hot-toast';
import profilePic from './assets/my pic.jpg';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar'; // ✅ Navbar added
import { Typewriter } from 'react-simple-typewriter';

function App() {
  const [showSection, setShowSection] = useState('about');
  const [showFeedback, setShowFeedback] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* ✅ Sticky Navbar at the top */}
      <Navbar setShowSection={setShowSection} />

      <main className="min-h-screen bg-gradient-to-r from-yellow-50 via-amber-100 to-rose-100 text-neutral-800 flex flex-col items-center justify-start px-4 sm:px-6 py-10 relative">
        <Toaster position="top-right" reverseOrder={false} />

        {/* Profile Image */}
<div className="w-28 h-45 sm:w-36 sm:h-50 md:w-70 md:h-95 overflow-hidden border-4 border-amber-500 rounded-2xl shadow-xl z-40 mb-3 md:mb-0 
  sm:relative sm:top-10 md:absolute md:top-36 md:left-6">
  <img
    src={profilePic}
    alt="Profile"
    className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-110"
  />
</div>


        {/* Intro/About Section */}
        <IntroSection setShowSection={setShowSection} />

        {/* Main Section Renderer */}
        <div className="mt-13 w-full flex justify-center">
          <div className="w-full max-w-4xl">
            {showSection === 'about' ? (
              <section className="fade-in w-full max-w-4xl bg-white shadow-xl rounded-2xl p-6 sm:p-10 md:p-12 mt-4 ml-2 sm:ml-2 md:ml-6 border-t-4 border-amber-300 text-center">
                <h2 className="text-3xl font-bold text-neutral-700 mb-4">
                  👋 YO! Heyy.. it's me here
                </h2>
                <p className="text-xl text-neutral-600 font-medium leading-relaxed">
                  <Typewriter
                    words={[
                      "Hi, I'm Onkar — a Full Stack Developer passionate about building meaningful digital experiences.",
                      "I love the MERN stack, clean UI, and automating things through DevOps!",
                      "I believe good code is like a good nap — short, sweet, and leaves you feeling refreshed. 😴",
                      "Let’s build something awesome together 🚀(with fewer bugs and more coffee)!😁"
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={35}
                    deleteSpeed={30}
                    delaySpeed={3000}
                  />
                </p>
              </section>
            ) : (
              <SectionRenderer showSection={showSection} />
            )}
          </div>
        </div>

        {/* Floating Action Buttons */}
        <FabButtons
          setShowSection={setShowSection}
          setShowFeedback={setShowFeedback}
          showTopBtn={showTopBtn}
          scrollToTop={scrollToTop}
        />

        {/* Feedback Popup */}
        {showFeedback && <Feedback onClose={() => setShowFeedback(false)} />}

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}

export default App;
