import { useState } from 'react';
import './App.css';
import Projects from './Project';
import Skills from './Skills';
import Connect from './Connect';
import Feedback from './Feedback';
import Education from './Education'; // Import Education component
import { Toaster, toast } from 'react-hot-toast';

function App() {
  const [showSection, setShowSection] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <main className="min-h-screen bg-blue-100 text-gray-800 flex flex-col items-center justify-start px-4 py-10">
      {/* ================== INTRO SECTION ================== */}
      <Toaster position="top-right" reverseOrder={false} />

      <div
        className={`max-w-3xl ${
          showSection ? 'mt-10' : 'my-auto'
        } bg-[#f1f7f9] shadow-lg rounded-2xl p-10 w-full space-y-6 transition-all duration-500`}
      >
        <h1
          className="text-4xl font-bold text-gray-900 cursor-pointer"
          onClick={() => {
            setShowSection(null);
            setTimeout(() => setShowSection('connect'), 50);
          }}
        >
          ONKAR BOBDE
        </h1>
        <p className="text-lg text-gray-600">
          Full Stack Developer | MERN | DevOps Enthusiast
        </p>
        <p className="text-gray-700 leading-relaxed">
          I build scalable and efficient web applications using the MERN stack. I'm passionate about clean code, modern UI/UX, and continuous learning. Always ready for the next challenge!
        </p>

        {/* BUTTONS inside main card */}
        <div className="flex flex-wrap gap-4 mt-6">
          <button
            className="bg-indigo-400 hover:bg-indigo-500 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:delay-100"
            onClick={() => setShowSection('projects')}
          >
            🚀 Projects
          </button>

          <button
            className="bg-green-400 hover:bg-green-500 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:delay-100"
            onClick={() => setShowSection('skills')}
          >
            🛠️ Skills
          </button>

          <button
            onClick={() => {
              toast.success('Opening Resume in a new tab...');
              setTimeout(() => {
                window.open('/resume/Onkar_Bobde-Resume.pdf', '_blank');
              }, 1000);
            }}
            className="bg-blue-400 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            📄 View Resume
          </button>

          <button
            className="bg-pink-400 hover:bg-pink-500 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={() => setShowSection('connect')}
          >
            🤝 Let's Connect
          </button>

          {/* New Education button */}
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={() => setShowSection('education')}
          >
            🎓 Education
          </button>
        </div>
      </div>

      {/* ================== CONDITIONAL SECTIONS ================== */}
      <div className="mt-12 w-full flex justify-center">
        <div className="w-full max-w-3xl">
          {showSection === 'projects' && <Projects />}
          {showSection === 'skills' && <Skills />}
          {showSection === 'connect' && <Connect />}
          {showSection === 'education' && <Education />} {/* Education Section */}
        </div>
      </div>

      {/* ================== FEEDBACK BUTTON ================== */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-2 px-4 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
          onClick={() => setShowFeedback(true)}
        >
          💬 Feedback
        </button>
      </div>

      {showFeedback && <Feedback onClose={() => setShowFeedback(false)} />}

      {/* ================== FOOTER ================== */}
      <footer className="w-full text-center py-6 mt-12 bg-blue-100">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Onkar Bobde. All rights reserved.
        </p>
        <p className="text-xs text-gray-400 mt-1">
  Contact: <a href="mailto:bobdeonkar17@gmail.com" className="hover:underline">bobdeonkar17@gmail.com</a>
</p>

      </footer>
    </main>
  );
}

export default App;
