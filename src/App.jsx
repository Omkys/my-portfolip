import { useState } from 'react';
import './App.css';
import Projects from './Project';
import Skills from './Skills';
import Connect from './Connect';
import Feedback from './Feedback';
import Education from './Education';
import { Toaster, toast } from 'react-hot-toast';
import profilePic from './assets/my pic.jpg'; // Adjust path if needed

function App() {
  const [showSection, setShowSection] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-r from-yellow-50 via-amber-100 to-rose-100 text-neutral-800 flex flex-col items-center justify-start px-4 sm:px-6 py-10 relative">
      {/* Toast Notifications */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Profile Card */}
      <div className="profile-card absolute top-16 left-2 sm:left-4 md:left-6 w-32 h-32 sm:w-36 sm:h-46 md:w-70 md:h-100 overflow-hidden border-4 border-amber-500 rounded-2xl shadow-xl z-50">
        <img
          src={profilePic}
          alt="Profile"
          className="profile-img w-full h-full object-cover rounded-2xl transform transition-transform duration-300 hover:scale-110"
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

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 sm:gap-6 mt-4 sm:mt-6 justify-center">
          {['projects', 'skills', 'connect', 'education'].map((section) => (
            <button
              key={section}
              className="interactive-button bg-neutral-600 hover:bg-neutral-700 text-white font-medium py-3 px-5 sm:px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
              onClick={() => setShowSection(section)}
            >
              {section === 'projects' && '🚀 Projects'}
              {section === 'skills' && '🛠️ Skills'}
              {section === 'connect' && "🤝 Let's Connect"}
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
            className="interactive-button bg-neutral-500 hover:bg-neutral-600 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
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
          {showSection === 'connect' && <Connect />}
          {showSection === 'education' && <Education />}
        </div>
      </div>

      {/* Feedback Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="interactive-feedback-button bg-amber-200 hover:bg-amber-300 text-neutral-800 font-medium py-3 px-6 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
          onClick={() => setShowFeedback(true)}
        >
          💬 Feedback
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
