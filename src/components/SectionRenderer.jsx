import About from '../components/About';
import Projects from '../sections/Project';
import Skills from '../sections/Skills';
import Certificate from '../sections/certificate';
import Education from '../sections/Education';
import Connect from '../sections/Connect';

export default function SectionRenderer({ showSection }) {
  return (
    <div className="mt-12 w-full flex justify-center">
      <div className="w-full max-w-4xl">
        {showSection === 'projects' && <Projects />}
        {showSection === 'skills' && <Skills />}
        {showSection === 'certificates' && <Certificate />}
        {showSection === 'education' && <Education />}
        {showSection === 'connect' && <Connect />}
      </div>
    </div>
  );
}
