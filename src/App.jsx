import { useState } from 'react';
import './App.css';
import Projects from './Project';
import Skills from './Skills';
import Connect from './Connect';
import Feedback from './Feedback';
import Education from './Education';
import { Toaster, toast } from 'react-hot-toast';
import profilePic from './assets/my pic.jpg'; // Adjust path if needed
import Certificate from './certificate'; // Adjust the path if needed

function App() {
  const [showSection, setShowSection] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-r from-yellow-50 via-amber-100 to-rose-100 text-neutral-800 flex flex-col items-center justify-start px-4 sm:px-6 py-10 relative">
      {/* Toast Notifications */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Profile Card (mobile-friendly and absolute only on desktop) */}
      <div className="md:absolute md:top-16 md:left-6 w-28 h-28 sm:w-36 sm:h-50 md:w-70 md:h-95 overflow-hidden border-4 border-amber-500 rounded-2xl shadow-xl z-40 mb-6 md:mb-0">
        <img
          src={profilePic}
          alt="Profile"
          className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Intro Section */}
      <div
        className={`max-w-4xl bg-white shadow-xl rounded-2xl p-6 sm:p-10 md:p-12 w-full space-y-6 transition-all duration-500 ease-in-out ${showSection ? 'mt-12' : 'my-auto'} ml-2 sm:ml-6 md:ml-12`}
      >
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          {/* Text Section */}
          <div className="text-center md:text-left w-full md:w-2/3">
            <h1 className="text-4xl sm:text-5xl font-semibold text-neutral-700 cursor-pointer hover:text-amber-500 transition-all duration-300">
              ONKAR BOBDE
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600">Full Stack Developer | MERN | DevOps Enthusiast</p>
            <p className="text-neutral-700 leading-relaxed mt-4">
              I build scalable and efficient web applications using the MERN stack. I'm passionate about clean code, modern UI/UX, and continuous learning. Always ready for the next challenge!
            </p>
          </div>
        </div>

        {/* Buttons - Removed "Let's Connect" Button Beside Certification */}
        <div className="flex flex-wrap gap-4 sm:gap-6 mt-4 sm:mt-6 justify-center">
          {['projects', 'skills', 'certificates', 'education'].map((section) => (
            <button
              key={section}
              className="bg-neutral-600 hover:bg-neutral-700 text-white font-medium py-3 px-5 sm:px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
              onClick={() => setShowSection(section)}
            >
              {section === 'projects' && '🚀 Projects'}
              {section === 'skills' && '🛠️ Skills'}
              {section === 'certificates' && '🎖️ Certifications'}
              {section === 'education' && '🎓 Education'}
            </button>
          ))}

          <button
            onClick={() => {
              toast.success('Opening Resume in a new tab...');
              setTimeout(() => {
                window.open('/resume/Onkar_Bobde-Resume.pdf', '_blank');
              }, 1000);
            }}
            className="bg-neutral-500 hover:bg-neutral-600 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
          >
            📄 View Resume
          </button>
        </div>
      </div>

      {/* Section Renderer */}
      <div className="mt-12 w-full flex justify-center">
        <div className="w-full max-w-4xl">
          {showSection === 'projects' && <Projects />}
          {showSection === 'skills' && <Skills />}
          {showSection === 'certificates' && <Certificate />}
          {showSection === 'connect' && <Connect />}
          {showSection === 'education' && <Education />}
        </div>
      </div>

      {/* Feedback Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
  className="bg-amber-200 hover:bg-amber-300 text-neutral-800 font-medium py-3 px-6 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 feedback-button"
  onClick={() => setShowFeedback(true)}
>
  💬 Feedback
</button>

      </div>

      {/* Bottom Right "Let's Connect" Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 connect-button"
          onClick={() => setShowSection('connect')} // Now this should trigger the Connect section
        >
          🤝 Let's Connect
        </button>
      </div>

      {showFeedback && <Feedback onClose={() => setShowFeedback(false)} />}

      {/* Footer */}
      <footer className="w-full text-center py-8 mt-12 bg-rose-200 dark:bg-rose-300">
        <p className="text-neutral-600 dark:text-neutral-500 text-lg">
          &copy; {new Date().getFullYear()} Onkar Bobde. All rights reserved.
        </p>
        <p className="text-sm text-neutral-500 mt-2">
          Contact:{' '}
          <a
            href="mailto:bobdeonkar17@gmail.com"
            className="hover:underline text-rose-600 font-semibold"
          >
            bobdeonkar17@gmail.com
          </a>
        </p>
      </footer>
    </main>
  );
}

export default App;
